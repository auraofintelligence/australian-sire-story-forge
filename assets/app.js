(function () {
  "use strict";

  const DATA = window.STORY_DATA;
  const STORAGE_KEY = "australian-sire-story-forge:project:v4";
  const PREVIOUS_STORAGE_KEYS = [
    "australian-sire-story-forge:project:v2",
    "australian-sire-story-forge:project:v1"
  ];
  const AUTHOR_TASTE_STRENGTHS = ["spark", "recurring", "core"];
  const AUTHOR_TASTE_ID_ALIASES = {
    tils_subject_polygamy_erotica: "tils_subject_polyamorous_erotica",
    tils_relationship_polygamous_erotica: "tils_relationship_polyamorous_erotica",
    tils_conversation_responsible_polygamy: "tils_conversation_responsible_polyamory"
  };
  const page = document.body.dataset.page || "home";
  let storageAvailable = true;
  let project = loadProject();
  let currentForgeStep = 0;
  let selectedAgentIds = new Set();
  let activeLibraryFilter = "All";
  let activeCharacterId = project.characters[0].id;
  let authorTasteSearch = "";
  let authorTasteSourceFilter = "all";
  let activeRiffNarrativeFilter = "all";
  let activeRiffStageFilter = "all";
  const openAuthorTasteCategories = new Set([(DATA.authorTasteCategories || [])[0]?.id].filter(Boolean));
  const SAFE_CHARACTER_FIELD_IDS = new Set([
    "aliases", "pronouns", "adultStatus", "homeAndBelonging", "publicRole",
    "storyRole", "povAccess", "firstImpression", "independentCentre",
    "dialogueRhythm", "humour", "sensoryAttention", "movement", "visualAnchors",
    "proseAvoid", "ordinaryJoy", "relationshipThreads", "recognition", "friction",
    "trustEvidence", "genuineExit", "possibleChange", "technologyRelationship",
    "systemBenefit", "systemBlindSpot", "protopianContribution", "openingState",
    "turningChoice", "changedBehaviour", "endingState", "unresolvedThread",
    "continuityAnchors", "publicPortrait"
  ]);

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function newUniverseNarrativeId() {
    return `narrative-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function newUniverseConnectionId() {
    return `connection-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function newRiffId() {
    return `riff-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function makeUniverseNarrative(title = "Untitled travel story") {
    return {
      id: newUniverseNarrativeId(),
      title,
      format: "novel",
      timeWindow: "",
      lead: "Tiggy Bestmann / Australian Sire",
      route: "",
      premise: "",
      relationshipMotion: "",
      earnedWin: "",
      auraRole: "",
      crystalCityThread: "",
      handoff: "",
      castIds: [DATA.protagonist.id],
      pattern: null,
      includeInShareable: false,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };
  }

  function makeBlankProject() {
    const stamp = nowIso();
    return {
      version: DATA.version,
      protagonistId: DATA.protagonist.id,
      title: "Untitled Australian Sire story",
      universe: {
        title: "Untitled Australian Sire universe",
        premise: "",
        homeAnchor: "",
        travelRule: "",
        includeOverviewInShareable: false,
        narratives: [],
        connections: []
      },
      riffs: [],
      promiseId: "",
      promiseIds: [],
      modeId: "",
      modeIds: [],
      relationshipId: "",
      relationshipIds: [],
      tropeIds: [],
      authorTasteIds: [],
      authorTasteStrengths: {},
      authorTasteJobs: {},
      authorTasteRoutes: {},
      tasteRouteModelVersion: 2,
      authorTasteReframes: {},
      worldId: "",
      worldIds: [],
      structureId: "",
      structureIds: [],
      intimacyCadenceId: "",
      endingId: "",
      characters: [canonicalCharacter()],
      custom: {},
      locks: {},
      reviewGates: {},
      pinnedInspiration: [],
      consultations: [],
      councilBlend: null,
      chapters: [],
      arcArchives: [],
      storyLengthId: "",
      targetWordCount: 0,
      chapterCount: 0,
      scenesPerChapter: 0,
      wordsPerPage: 275,
      actPatternId: "",
      actUnitLabel: "Act",
      acts: [],
      builtBookPlan: null,
      createdAt: stamp,
      updatedAt: stamp
    };
  }

  function safeText(value, maxLength) {
    if (typeof value !== "string") return "";
    return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, maxLength || 1200);
  }

  function planningInteger(value, minimum, maximum, fallback) {
    const number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    return Math.max(minimum, Math.min(maximum, Math.round(number)));
  }

  function validId(list, value, fallback) {
    return (list || []).some((item) => item.id === value) ? value : fallback;
  }

  function normaliseBookPlanSnapshot(raw, fallbackChapterCount) {
    if (!raw || typeof raw !== "object") return null;
    return {
      storyLengthId: validId(DATA.storyLengthPresets, raw.storyLengthId, ""),
      targetWordCount: planningInteger(raw.targetWordCount, 0, 500000, 0),
      chapterCount: planningInteger(raw.chapterCount, 0, 300, fallbackChapterCount || 0),
      scenesPerChapter: planningInteger(raw.scenesPerChapter, 0, 20, 0),
      wordsPerPage: planningInteger(raw.wordsPerPage, 100, 1000, 275),
      structureId: validId(DATA.arcTemplates, raw.structureId, ""),
      intimacyCadenceId: validId(DATA.intimacyCadences, raw.intimacyCadenceId, "")
    };
  }

  function actPatternById(id) {
    return (DATA.actPatterns || []).find((item) => item.id === id) || null;
  }

  function normaliseActs(rawActs, patternId, unitLabel) {
    const pattern = actPatternById(patternId);
    const source = Array.isArray(rawActs) ? rawActs.slice(0, 12) : [];
    const count = source.length || (pattern ? Math.min(12, pattern.weights.length) : 0);
    const label = safeText(unitLabel, 30) || (pattern ? pattern.unitLabel : "Act");
    return Array.from({ length: count }, (_, index) => {
      const raw = source[index] && typeof source[index] === "object" ? source[index] : {};
      return {
        id: `act-${index + 1}`,
        title: safeText(raw.title, 140) || (pattern && pattern.titles[index]) || `${label} ${index + 1}`,
        weight: planningInteger(raw.weight, 1, 1000, (pattern && pattern.weights[index]) || 1),
        question: safeText(raw.question, 600) || (pattern && pattern.questions[index]) || "What changes across this act or part?",
        summary: safeText(raw.summary, 1400),
        privateNotes: safeText(raw.privateNotes, 2000)
      };
    });
  }

  function actsFromPattern(patternId, countOverride, existingActs) {
    const pattern = actPatternById(patternId);
    if (!pattern) return [];
    const prior = Array.isArray(existingActs) ? existingActs : [];
    const count = planningInteger(countOverride, 1, 12, pattern.weights.length || 3);
    return Array.from({ length: count }, (_, index) => ({
      id: `act-${index + 1}`,
      title: (pattern.titles[index] || (pattern.id === "custom" && prior[index] && prior[index].title) || `${pattern.unitLabel} ${index + 1}`).slice(0, 140),
      weight: pattern.id === "custom" && prior[index]
        ? planningInteger(prior[index].weight, 1, 1000, 1)
        : planningInteger(pattern.weights[index], 1, 1000, prior[index] ? prior[index].weight : 1),
      question: (pattern.questions[index] || (prior[index] && prior[index].question) || "What changes across this act or part?").slice(0, 600),
      summary: prior[index] ? safeText(prior[index].summary, 1400) : "",
      privateNotes: prior[index] ? safeText(prior[index].privateNotes, 2000) : ""
    }));
  }

  function confirmActReduction(nextCount) {
    if (project.acts.length <= nextCount) return true;
    return window.confirm(`Reduce the plan from ${project.acts.length} large sections to ${nextCount}? Writing stored in the removed section${project.acts.length - nextCount === 1 ? "" : "s"} will be deleted. Your downloaded editable backup can preserve it.`);
  }

  function currentBookPlanSnapshot(chapterCountOverride) {
    return {
      storyLengthId: project.storyLengthId,
      targetWordCount: project.targetWordCount,
      chapterCount: chapterCountOverride || project.chapterCount,
      scenesPerChapter: project.scenesPerChapter,
      wordsPerPage: project.wordsPerPage,
      structureId: project.structureId,
      intimacyCadenceId: project.intimacyCadenceId
    };
  }

  function canonicalAuthorTasteId(id) {
    return AUTHOR_TASTE_ID_ALIASES[id] || id;
  }

  function authorTasteSourceValue(source, id) {
    if (Object.prototype.hasOwnProperty.call(source, id)) return source[id];
    const legacyId = Object.keys(AUTHOR_TASTE_ID_ALIASES).find((candidate) => AUTHOR_TASTE_ID_ALIASES[candidate] === id && Object.prototype.hasOwnProperty.call(source, candidate));
    return legacyId ? source[legacyId] : undefined;
  }

  function normaliseAuthorTasteIds(rawIds) {
    const knownIds = new Set((DATA.authorTastes || []).map((item) => item.id));
    return Array.isArray(rawIds) ? Array.from(new Set(rawIds.map(canonicalAuthorTasteId).filter((id) => knownIds.has(id)))) : [];
  }

  function normaliseAuthorTasteStrengths(rawStrengths, tasteIds) {
    const source = rawStrengths && typeof rawStrengths === "object" ? rawStrengths : {};
    const strengths = {};
    (tasteIds || []).forEach((id) => {
      const value = authorTasteSourceValue(source, id);
      strengths[id] = AUTHOR_TASTE_STRENGTHS.includes(value) ? value : "spark";
    });
    return strengths;
  }

  function normaliseAuthorTasteJobs(rawJobs, tasteIds) {
    const source = rawJobs && typeof rawJobs === "object" ? rawJobs : {};
    const validJobs = new Set((DATA.authorTasteJobOptions || []).map((item) => item.id));
    const jobs = {};
    (tasteIds || []).forEach((id) => {
      const value = authorTasteSourceValue(source, id);
      if (validJobs.has(value)) jobs[id] = value;
    });
    return jobs;
  }

  function sameIdSet(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length) return false;
    const secondIds = new Set(second);
    return first.every((id) => secondIds.has(id));
  }

  function tasteRoutesNeedMigration(value) {
    const version = Number(value);
    return !Number.isFinite(version) || version < 2;
  }

  function normaliseAuthorTasteRoutes(rawRoutes, tasteIds, jobs, migrateLegacyDefaults = false) {
    const source = rawRoutes && typeof rawRoutes === "object" ? rawRoutes : {};
    const validRoutes = new Set((DATA.authorTasteRouteOptions || []).map((item) => item.id));
    const routes = {};
    (tasteIds || []).forEach((id) => {
      const value = authorTasteSourceValue(source, id);
      const taste = authorTasteById(id);
      const cleaned = Array.isArray(value) ? Array.from(new Set(value.filter((routeId) => validRoutes.has(routeId)))) : null;
      routes[id] = cleaned && migrateLegacyDefaults && sameIdSet(cleaned, legacyAuthorTasteRouteIds(taste, jobs && jobs[id]))
        ? defaultAuthorTasteRouteIds(taste, jobs && jobs[id])
        : cleaned || defaultAuthorTasteRouteIds(taste, jobs && jobs[id]);
    });
    return routes;
  }

  function normaliseAuthorTasteReframes(rawReframes, tasteIds) {
    const source = rawReframes && typeof rawReframes === "object" ? rawReframes : {};
    const reframes = {};
    (tasteIds || []).forEach((id) => {
      const value = safeText(authorTasteSourceValue(source, id), 1000).trim();
      if (value) reframes[id] = value;
    });
    return reframes;
  }

  function normaliseForgePattern(rawPattern) {
    if (!rawPattern || typeof rawPattern !== "object") return null;
    const promise = normalisePrimarySelection(rawPattern.promiseIds, rawPattern.promiseId, DATA.shelfPromises, "", true);
    const mode = normalisePrimarySelection(rawPattern.modeIds, rawPattern.modeId, DATA.protagonistModes, "", true);
    const relationship = normalisePrimarySelection(rawPattern.relationshipIds, rawPattern.relationshipId, DATA.relationshipEngines, "", true);
    const world = normalisePrimarySelection(rawPattern.worldIds, rawPattern.worldId, DATA.worldPressures, "", true);
    const structure = normalisePrimarySelection(rawPattern.structureIds, rawPattern.structureId, DATA.arcTemplates, "", true);
    const knownTropeIds = new Set(DATA.tropes.map((item) => item.id));
    const knownInspirationIds = new Set(DATA.inspiration.map((item) => item.id));
    const authorTasteIds = normaliseAuthorTasteIds(rawPattern.authorTasteIds);
    const custom = {};
    const allowedCustomKeys = new Set(DATA.forgeSteps.map((step) => step.id));
    if (rawPattern.custom && typeof rawPattern.custom === "object") {
      Object.keys(rawPattern.custom).forEach((key) => {
        if (allowedCustomKeys.has(key)) custom[key] = safeText(rawPattern.custom[key], 800);
      });
    }
    const authorTasteJobs = normaliseAuthorTasteJobs(rawPattern.authorTasteJobs, authorTasteIds);
    const migrateLegacyRoutes = tasteRoutesNeedMigration(rawPattern.tasteRouteModelVersion);
    return {
      capturedAt: safeText(rawPattern.capturedAt, 40) || nowIso(),
      promiseId: promise.primary,
      promiseIds: promise.ids,
      modeId: mode.primary,
      modeIds: mode.ids,
      relationshipId: relationship.primary,
      relationshipIds: relationship.ids,
      tropeIds: Array.isArray(rawPattern.tropeIds) ? Array.from(new Set(rawPattern.tropeIds.filter((id) => knownTropeIds.has(id)))) : [],
      authorTasteIds,
      authorTasteStrengths: normaliseAuthorTasteStrengths(rawPattern.authorTasteStrengths, authorTasteIds),
      authorTasteJobs,
      authorTasteRoutes: normaliseAuthorTasteRoutes(rawPattern.authorTasteRoutes, authorTasteIds, authorTasteJobs, migrateLegacyRoutes),
      tasteRouteModelVersion: 2,
      authorTasteReframes: normaliseAuthorTasteReframes(rawPattern.authorTasteReframes, authorTasteIds),
      worldId: world.primary,
      worldIds: world.ids,
      structureId: structure.primary,
      structureIds: structure.ids,
      intimacyCadenceId: validId(DATA.intimacyCadences, rawPattern.intimacyCadenceId, ""),
      endingId: validId(DATA.endingOptions, rawPattern.endingId, ""),
      pinnedInspiration: Array.isArray(rawPattern.pinnedInspiration) ? Array.from(new Set(rawPattern.pinnedInspiration.filter((id) => knownInspirationIds.has(id)))) : [],
      custom
    };
  }

  function normaliseUniverse(rawUniverse, baseUniverse, characterIds, characterIdMap) {
    if (!rawUniverse || typeof rawUniverse !== "object") {
      return {
        universe: clone(baseUniverse),
        idMap: new Map((baseUniverse.narratives || []).map((item) => [item.id, item.id]))
      };
    }
    const validFormats = new Set((DATA.universeNarrativeFormats || []).map((item) => item.id));
    const validConnectionTypes = new Set((DATA.universeConnectionTypes || []).map((item) => item.id));
    const usedNarrativeIds = new Set();
    const idMap = new Map();
    const narratives = (Array.isArray(rawUniverse.narratives) ? rawUniverse.narratives : []).map((raw, index) => {
      if (!raw || typeof raw !== "object") return null;
      const oldId = typeof raw.id === "string" ? raw.id : "";
      let id = /^[a-z0-9][a-z0-9-]{2,100}$/i.test(oldId) && !usedNarrativeIds.has(oldId) ? oldId : `narrative-import-${index + 1}`;
      while (usedNarrativeIds.has(id)) id = `${id}-copy`;
      usedNarrativeIds.add(id);
      if (oldId) idMap.set(oldId, id);
      return {
        id,
        title: safeText(raw.title, 180) || `Untitled story ${index + 1}`,
        format: validFormats.has(raw.format) ? raw.format : "novel",
        timeWindow: safeText(raw.timeWindow, 240),
        lead: safeText(raw.lead, 300),
        route: safeText(raw.route, 500),
        premise: safeText(raw.premise, 1600),
        relationshipMotion: safeText(raw.relationshipMotion, 1200),
        earnedWin: safeText(raw.earnedWin, 1200),
        auraRole: safeText(raw.auraRole, 1200),
        crystalCityThread: safeText(raw.crystalCityThread, 1200),
        handoff: safeText(raw.handoff, 1200),
        castIds: Array.isArray(raw.castIds) ? Array.from(new Set(raw.castIds.map((id) => characterIdMap.get(id) || id).filter((id) => characterIds.has(id)))) : [DATA.protagonist.id],
        pattern: normaliseForgePattern(raw.pattern),
        includeInShareable: raw.includeInShareable === true,
        createdAt: safeText(raw.createdAt, 40) || nowIso(),
        updatedAt: safeText(raw.updatedAt, 40) || nowIso()
      };
    }).filter(Boolean);
    const narrativeIds = new Set(narratives.map((item) => item.id));
    const usedConnectionIds = new Set();
    const connections = (Array.isArray(rawUniverse.connections) ? rawUniverse.connections : []).map((raw, index) => {
      if (!raw || typeof raw !== "object") return null;
      const fromId = idMap.get(raw.fromId) || raw.fromId;
      const toId = idMap.get(raw.toId) || raw.toId;
      if (!narrativeIds.has(fromId) || !narrativeIds.has(toId) || fromId === toId || !validConnectionTypes.has(raw.type)) return null;
      let id = /^[a-z0-9][a-z0-9-]{2,100}$/i.test(raw.id || "") && !usedConnectionIds.has(raw.id) ? raw.id : `connection-import-${index + 1}`;
      while (usedConnectionIds.has(id)) id = `${id}-copy`;
      usedConnectionIds.add(id);
      return { id, fromId, toId, type: raw.type, note: safeText(raw.note, 800) };
    }).filter(Boolean);
    return {
      universe: {
        title: safeText(rawUniverse.title, 180) || baseUniverse.title,
        premise: safeText(rawUniverse.premise, 2000),
        homeAnchor: safeText(rawUniverse.homeAnchor, 1200),
        travelRule: safeText(rawUniverse.travelRule, 1200),
        includeOverviewInShareable: rawUniverse.includeOverviewInShareable === true,
        narratives,
        connections
      },
      idMap
    };
  }

  function makeRiff(toolId, title) {
    const tool = (DATA.riffTools || []).find((item) => item.id === toolId) || (DATA.riffTools || [])[0];
    if (!tool) return null;
    const stamp = nowIso();
    const fields = {};
    (tool.fields || []).forEach((field) => { fields[field.id] = ""; });
    return {
      id: newRiffId(),
      toolId: tool.id,
      title: safeText(title, 180) || tool.label,
      stage: "loose",
      narrativeId: "",
      characterIds: [],
      fields,
      includeInShareable: false,
      createdAt: stamp,
      updatedAt: stamp
    };
  }

  function normaliseRiffs(rawRiffs, narrativeIds, narrativeIdMap, characterIds, characterIdMap) {
    const toolMap = new Map((DATA.riffTools || []).map((tool) => [tool.id, tool]));
    const validStages = new Set((DATA.riffStages || []).map((stage) => stage.id));
    const usedIds = new Set();
    return (Array.isArray(rawRiffs) ? rawRiffs : []).map((raw, index) => {
      if (!raw || typeof raw !== "object" || !toolMap.has(raw.toolId)) return null;
      const tool = toolMap.get(raw.toolId);
      const oldId = typeof raw.id === "string" ? raw.id : "";
      let id = /^[a-z0-9][a-z0-9-]{2,100}$/i.test(oldId) && !usedIds.has(oldId) ? oldId : `riff-import-${index + 1}`;
      while (usedIds.has(id)) id = `${id}-copy`;
      usedIds.add(id);
      const fields = {};
      const sourceFields = raw.fields && typeof raw.fields === "object" ? raw.fields : {};
      (tool.fields || []).forEach((field) => { fields[field.id] = safeText(sourceFields[field.id], 2400); });
      const mappedNarrativeId = narrativeIdMap.get(raw.narrativeId) || raw.narrativeId;
      return {
        id,
        toolId: tool.id,
        title: safeText(raw.title, 180) || tool.label,
        stage: validStages.has(raw.stage) ? raw.stage : "loose",
        narrativeId: narrativeIds.has(mappedNarrativeId) ? mappedNarrativeId : "",
        characterIds: Array.isArray(raw.characterIds)
          ? Array.from(new Set(raw.characterIds.map((characterId) => characterIdMap.get(characterId) || characterId).filter((characterId) => characterIds.has(characterId))))
          : [],
        fields,
        includeInShareable: raw.includeInShareable === true,
        createdAt: safeText(raw.createdAt, 40) || nowIso(),
        updatedAt: safeText(raw.updatedAt, 40) || nowIso()
      };
    }).filter(Boolean);
  }

  function isProtagonistAlias(value) {
    const normal = String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    return new Set([
      "tiggy bestmann",
      "australian sire",
      "tiggy bestmann australian sire",
      "australian sire tiggy bestmann",
      "tiggy bestmann also known as australian sire",
      "tiggy bestmann aka australian sire"
    ]).has(normal);
  }

  function characterFields() {
    return DATA.characterGroups.flatMap((group) => group.fields);
  }

  function canonicalCharacter() {
    const stamp = nowIso();
    return {
      id: DATA.protagonist.id,
      canonical: true,
      includeInShareable: true,
      name: "Tiggy Bestmann / Australian Sire",
      aliases: "Tiggy Bestmann; Australian Sire",
      pronouns: "he/him",
      adultStatus: "confirmed_adult",
      homeAndBelonging: "Australia is the home current; travel keeps widening what home can mean.",
      publicRole: "A playful systems dreamer growing into the travelling, consensually chosen Australian Sire",
      privateSelf: "",
      storyRole: "protagonist",
      povAccess: "deep",
      firstImpression: "",
      innerTruth: "He fears that the vision is larger than his proof. Australian Sire becomes true only as Tiggy stacks real wins, keeps promises and earns adult trust.",
      reachingFor: "Enough real competence to believe his own name, plus connection that can remain meaningful without requiring him to stay.",
      independentCentre: "His travel, philosophy, art and protopian work continue beyond any single relationship.",
      presentPressure: "",
      activeMotive: "",
      needTension: "",
      valuesBeliefsDesires: "Agency, curiosity, joyous abundance, responsibility and the freedom to choose again.",
      gainAndLoss: "",
      emotionalWeather: "",
      attentionPattern: "He notices systems, invitations, contradictions and the human consequence beneath an abstract design.",
      decisionTempo: "",
      dialogueRhythm: "Tiggy begins curious, cheeky, indirect and sometimes self-deprecating. The earned Sire voice becomes simpler, direct and calm after action supports it.",
      humour: "",
      sensoryAttention: "",
      movement: "",
      visualAnchors: "",
      innerVoice: "",
      proseAvoid: "Do not split Tiggy Bestmann and Australian Sire into separate people or present Australian Sire as an unearned costume.",
      communicationModes: "",
      culturalExpression: "",
      lifeDomains: "Travel, philosophy, art, relationships, invention, music, ocean and collective experiments.",
      routinesAndRituals: "",
      interestsAndSkills: "",
      sensoryTastes: "",
      objectsAndPlaces: "",
      energyAndRecovery: "",
      origin: "",
      formativeChoice: "",
      earnedSkills: "",
      unfinishedHistory: "",
      loyalties: "",
      ordinaryJoy: "",
      secretAndCost: "",
      significantEvent: "",
      eventAspiration: "",
      eventTimePlace: "",
      eventInitialState: "",
      eventCauseEffect: "",
      eventDelay: "",
      eventEvidence: "",
      eventPointOfView: "",
      relationshipThreads: "",
      recognition: "",
      friction: "He will not stay, while what is freely chosen during a visit may endure.",
      trustEvidence: "",
      materialTruth: "",
      powerDifference: "",
      genuineExit: "",
      possibleChange: "",
      meetingPathway: "",
      interestSignals: "",
      conversationInvitation: "",
      sharedExperience: "",
      attractionPalette: "",
      ceremonyMeaning: "",
      departureRitual: "",
      technologyRelationship: "Aura O.Z., expanded as Aura Operating Zeitgeist, is his unfinished system and mirror. Its usefulness needs to be earned through people, tests and consequences.",
      systemBenefit: "",
      systemBlindSpot: "",
      abilityAndLimit: "",
      privacyChoice: "",
      protopianContribution: "",
      openingState: "",
      turningChoice: "",
      changedBehaviour: "",
      endingState: "",
      unresolvedThread: "",
      continuityAnchors: "Tiggy Bestmann and Australian Sire are always the same main character. Australian Sire is an earned side of Tiggy, never a second identity or separate person in the character list.",
      notThisBook: "",
      publicPortrait: "Tiggy Bestmann is an aloof, playful systems dreamer with impossible futures in his head, a joke ready on his tongue and a private suspicion that he may be bluffing. Australian Sire begins as a cheeky name for the man he might become. Each audacious win, kept promise and freely chosen encounter makes it a little more true. Those who invite him into their beds, lives and bloodlines know he will keep travelling. They choose the heat, the possibility of conception and the consequence with open eyes, because he offers honesty instead of a counterfeit forever.",
      privateNotes: "",
      reviewNeeds: "",
      createdAt: stamp,
      updatedAt: stamp
    };
  }

  function newCharacterId() {
    return `character-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function makeOpenCharacter(seedId) {
    const stamp = nowIso();
    const seed = DATA.characterSeeds.find((item) => item.id === seedId) || DATA.characterSeeds[0];
    const character = {
      id: newCharacterId(),
      canonical: false,
      includeInShareable: false,
      name: "New character",
      createdAt: stamp,
      updatedAt: stamp
    };
    characterFields().forEach((field) => {
      character[field.id] = field.type === "select" ? "" : "";
    });
    character.adultStatus = "open";
    character.storyRole = "leave_open";
    character.povAccess = "leave_open";
    Object.assign(character, clone(seed.values || {}));
    if (seed.id !== "blank") character.name = seed.label;
    return character;
  }

  function normaliseCharacter(raw, id, canonical) {
    const source = raw && typeof raw === "object" ? raw : {};
    const character = canonical ? canonicalCharacter() : makeOpenCharacter("blank");
    character.id = id;
    character.canonical = canonical;
    character.includeInShareable = canonical || source.includeInShareable === true;
    character.name = canonical ? "Tiggy Bestmann / Australian Sire" : (safeText(source.name, 180) || "Unnamed character");
    characterFields().forEach((field) => {
      if (canonical && !Object.prototype.hasOwnProperty.call(source, field.id)) return;
      if (field.type === "select") {
        const allowed = new Set((field.options || []).map((option) => option.value));
        if (allowed.has(source[field.id])) character[field.id] = source[field.id];
      } else {
        character[field.id] = safeText(source[field.id], field.type === "text" ? 300 : 2400);
      }
    });
    if (canonical) {
      character.aliases = safeText(source.aliases, 300) || character.aliases;
      character.pronouns = safeText(source.pronouns, 300) || character.pronouns;
      character.adultStatus = "confirmed_adult";
      character.storyRole = "protagonist";
    }
    character.createdAt = safeText(source.createdAt, 40) || character.createdAt;
    character.updatedAt = safeText(source.updatedAt, 40) || character.updatedAt;
    return character;
  }

  function normaliseCharacters(rawCharacters) {
    const rawList = Array.isArray(rawCharacters) ? rawCharacters.filter((item) => item && typeof item === "object") : [];
    const rawCanonical = rawList.find((item) => item.id === DATA.protagonist.id || isProtagonistAlias(item.name));
    const characters = [normaliseCharacter(rawCanonical, DATA.protagonist.id, true)];
    const idMap = new Map();
    if (rawCanonical && typeof rawCanonical.id === "string") idMap.set(rawCanonical.id, DATA.protagonist.id);
    const ids = new Set([DATA.protagonist.id]);
    rawList.forEach((item, index) => {
      if (item === rawCanonical || item.id === DATA.protagonist.id || isProtagonistAlias(item.name)) return;
      const preferred = typeof item.id === "string" && /^character-[a-z0-9-]{1,90}$/i.test(item.id) ? item.id : `character-${index + 1}`;
      let id = preferred;
      let suffix = 2;
      while (ids.has(id)) id = `${preferred}-${suffix++}`;
      ids.add(id);
      if (typeof item.id === "string" && !idMap.has(item.id)) idMap.set(item.id, id);
      characters.push(normaliseCharacter(item, id, false));
    });
    return { characters, idMap };
  }

  function normalisePrimarySelection(rawList, rawPrimary, options, fallback, allowEmpty = false) {
    const known = new Set(options.map((item) => item.id));
    const ids = Array.isArray(rawList) ? Array.from(new Set(rawList.filter((id) => known.has(id)))) : [];
    if (allowEmpty && !ids.length && !known.has(rawPrimary)) return { ids: [], primary: "" };
    const primary = known.has(rawPrimary) ? rawPrimary : (ids[0] || fallback);
    if (primary && !ids.includes(primary)) ids.unshift(primary);
    return { ids, primary };
  }

  function normaliseGap(raw, index, characterIds, characterIdMap) {
    if (!raw || typeof raw !== "object") return null;
    const purposeId = validId(DATA.intimacyGapPurposes, raw.purposeId, "");
    const rawParticipants = Array.isArray(raw.participants) ? raw.participants : [];
    const rawProtagonist = rawParticipants.find((person) => person && (person.characterId === DATA.protagonist.id || isProtagonistAlias(person.name)));
    const participants = [{
      id: "participant-1",
      characterId: DATA.protagonist.id,
      name: "Tiggy Bestmann / Australian Sire",
      locked: true,
      adultConfirmed: true,
      consentConfirmed: rawProtagonist ? rawProtagonist.consentConfirmed === true : raw.consentConfirmed === true,
      exitReady: rawProtagonist ? rawProtagonist.exitReady === true : false,
      boundaries: rawProtagonist ? safeText(rawProtagonist.boundaries, 400) : ""
    }];
    const others = rawParticipants.length
      ? rawParticipants.filter((person) => person && person !== rawProtagonist && person.characterId !== DATA.protagonist.id)
      : [{ name: raw.partnerName || "", adultConfirmed: raw.adultsConfirmed === true, consentConfirmed: raw.consentConfirmed === true }];
    others.forEach((person, otherIndex) => {
      const mappedCharacterId = typeof person.characterId === "string" ? (characterIdMap.get(person.characterId) || person.characterId) : "";
      participants.push({
        id: `participant-${otherIndex + 2}`,
        characterId: characterIds.has(mappedCharacterId) && mappedCharacterId !== DATA.protagonist.id ? mappedCharacterId : "",
        name: safeText(person.name, 180),
        locked: false,
        adultConfirmed: person.adultConfirmed === true,
        consentConfirmed: person.consentConfirmed === true,
        exitReady: person.exitReady === true,
        boundaries: safeText(person.boundaries, 400)
      });
    });
    return {
      id: `INTIMACY-${String(index + 1).padStart(2, "0")}`,
      protagonistId: DATA.protagonist.id,
      purposeId,
      customPurpose: safeText(raw.customPurpose, 400),
      participants,
      relationshipBefore: safeText(raw.relationshipBefore, 260),
      relationshipAfter: safeText(raw.relationshipAfter, 260),
      knowledgeState: safeText(raw.knowledgeState, 500),
      powerBalance: safeText(raw.powerBalance, 500),
      plotConsequence: safeText(raw.plotConsequence, 500),
      bridgeIn: safeText(raw.bridgeIn, 500),
      bridgeOut: safeText(raw.bridgeOut, 500)
    };
  }

  function normaliseChapters(rawChapters, characterIds, characterIdMap) {
    if (!Array.isArray(rawChapters)) return [];
    const knownTasteIds = new Set((DATA.authorTastes || []).map((item) => item.id));
    let gapIndex = 0;
    return rawChapters.map((raw, index) => {
      if (!raw || typeof raw !== "object") return null;
      const gap = raw.gap ? normaliseGap(raw.gap, gapIndex++, characterIds, characterIdMap) : null;
      const legacyPrivateNotes = !raw.publicBeat && raw.purpose ? safeText(raw.purpose, 2000) : "";
      const storedPhase = safeText(raw.phase, 100);
      const legacyQuarterPhase = ["Beginning", "Connections deepen", "Truth and break", "Repair and next horizon"].includes(storedPhase);
      const bookPercent = rawChapters.length === 1 ? 0 : Math.round((index / (rawChapters.length - 1)) * 100);
      return {
        id: `chapter-${index + 1}`,
        number: index + 1,
        title: safeText(raw.title, 180) || `Chapter ${index + 1}`,
        kind: ["relationship", "mission", "mystery", "character", "protopia", "aftermath"].includes(raw.kind) ? raw.kind : "mission",
        phase: legacyQuarterPhase ? phaseName(bookPercent) : storedPhase,
        patternLayers: Array.isArray(raw.patternLayers) ? raw.patternLayers.map((item) => safeText(item, 300)).filter(Boolean) : [],
        coachQuestion: safeText(raw.coachQuestion, 500),
        publicBeat: safeText(raw.publicBeat, 1200),
        privateNotes: safeText(raw.privateNotes, 2000) || legacyPrivateNotes,
        tasteIds: Array.isArray(raw.tasteIds) ? Array.from(new Set(raw.tasteIds.map(canonicalAuthorTasteId).filter((id) => knownTasteIds.has(id)))) : [],
        gap
      };
    }).filter(Boolean);
  }

  function normaliseProject(raw) {
    const base = makeBlankProject();
    if (!raw || typeof raw !== "object") return base;
    const allowedCustomKeys = new Set(DATA.forgeSteps.map((step) => step.id));
    const custom = {};
    if (raw.custom && typeof raw.custom === "object") {
      Object.keys(raw.custom).forEach((key) => {
        if (allowedCustomKeys.has(key)) custom[key] = safeText(raw.custom[key], 800);
      });
    }
    const locks = {};
    if (raw.locks && typeof raw.locks === "object") {
      DATA.forgeSteps.forEach((step) => { locks[step.id] = raw.locks[step.id] === true; });
    }
    const reviewGates = {};
    if (raw.reviewGates && typeof raw.reviewGates === "object") {
      Object.keys(raw.reviewGates).forEach((key) => {
        const record = raw.reviewGates[key];
        if (/^[a-z0-9_:-]+$/i.test(key) && record && typeof record === "object" && DATA.reviewGateDefinitions[record.gateId]) {
          reviewGates[key] = {
            gateId: record.gateId,
            confirmed: record.confirmed === true,
            reviewer: safeText(record.reviewer, 120),
            date: /^\d{4}-\d{2}-\d{2}$/.test(record.date || "") ? record.date : ""
          };
        }
      });
    }
    const knownTropeIds = new Set(DATA.tropes.map((item) => item.id));
    const knownInspirationIds = new Set(DATA.inspiration.map((item) => item.id));
    const authorTasteIds = normaliseAuthorTasteIds(raw.authorTasteIds);
    const authorTasteStrengths = normaliseAuthorTasteStrengths(raw.authorTasteStrengths, authorTasteIds);
    const authorTasteJobs = normaliseAuthorTasteJobs(raw.authorTasteJobs, authorTasteIds);
    const migrateLegacyTasteRoutes = tasteRoutesNeedMigration(raw.tasteRouteModelVersion);
    const authorTasteRoutes = normaliseAuthorTasteRoutes(raw.authorTasteRoutes, authorTasteIds, authorTasteJobs, migrateLegacyTasteRoutes);
    const authorTasteReframes = normaliseAuthorTasteReframes(raw.authorTasteReframes, authorTasteIds);
    const actPatternId = validId(DATA.actPatterns, raw.actPatternId, Array.isArray(raw.acts) && raw.acts.length ? "custom" : "");
    const actUnitLabel = safeText(raw.actUnitLabel, 30) || (actPatternById(actPatternId) ? actPatternById(actPatternId).unitLabel : "Act");
    const acts = normaliseActs(raw.acts, actPatternId, actUnitLabel);
    const characterResult = normaliseCharacters(raw.characters);
    const characters = characterResult.characters;
    const characterIdMap = characterResult.idMap;
    const characterIds = new Set(characters.map((character) => character.id));
    const consultations = Array.isArray(raw.consultations) ? raw.consultations.map((note) => {
      if (!note || typeof note !== "object" || !DATA.agents.some((agent) => agent.id === note.agentId)) return null;
      return {
        agentId: note.agentId,
        createdAt: safeText(note.createdAt, 40),
        alive: safeText(note.alive, 1000),
        next: safeText(note.next, 1000),
        question: safeText(note.question, 600)
      };
    }).filter(Boolean) : [];
    const blendedAgentIds = raw.councilBlend && Array.isArray(raw.councilBlend.agentIds)
      ? raw.councilBlend.agentIds.filter((id) => DATA.agents.some((agent) => agent.id === id))
      : [];
    const arcArchives = Array.isArray(raw.arcArchives) ? raw.arcArchives.slice(-3).map((archive) => {
      if (!archive || typeof archive !== "object") return null;
      const archiveStructureId = validId(DATA.arcTemplates, archive.structureId, "");
      const archiveCadenceId = validId(DATA.intimacyCadences, archive.intimacyCadenceId, "");
      const archiveAgentIds = archive.councilBlend && Array.isArray(archive.councilBlend.agentIds)
        ? archive.councilBlend.agentIds.filter((id) => DATA.agents.some((agent) => agent.id === id))
        : [];
      const archiveBlend = archiveAgentIds.length > 1 && archiveStructureId
        ? { agentIds: archiveAgentIds, primaryArcId: validId(DATA.arcTemplates, archive.councilBlend.primaryArcId, archiveStructureId), createdAt: safeText(archive.councilBlend.createdAt, 40) }
        : null;
      const archiveTasteIds = Array.isArray(archive.authorTasteIds) ? normaliseAuthorTasteIds(archive.authorTasteIds) : null;
      const archiveTasteJobs = archiveTasteIds ? normaliseAuthorTasteJobs(archive.authorTasteJobs, archiveTasteIds) : null;
      const archiveChapters = normaliseChapters(archive.chapters, characterIds, characterIdMap);
      const archiveActPatternId = validId(DATA.actPatterns, archive.actPatternId, Array.isArray(archive.acts) && archive.acts.length ? "custom" : "");
      const archiveActUnitLabel = safeText(archive.actUnitLabel, 30) || (actPatternById(archiveActPatternId) ? actPatternById(archiveActPatternId).unitLabel : "Act");
      return {
        archivedAt: safeText(archive.archivedAt, 40),
        chapters: archiveChapters,
        structureId: archiveStructureId,
        intimacyCadenceId: archiveCadenceId,
        storyLengthId: validId(DATA.storyLengthPresets, archive.storyLengthId, ""),
        targetWordCount: planningInteger(archive.targetWordCount, 0, 500000, 0),
        chapterCount: planningInteger(archive.chapterCount, 0, 300, archiveChapters.length),
        scenesPerChapter: planningInteger(archive.scenesPerChapter, 0, 20, 0),
        wordsPerPage: planningInteger(archive.wordsPerPage, 100, 1000, 275),
        actPatternId: archiveActPatternId,
        actUnitLabel: archiveActUnitLabel,
        acts: normaliseActs(archive.acts, archiveActPatternId, archiveActUnitLabel),
        councilBlend: archiveBlend,
        authorTasteIds: archiveTasteIds,
        authorTasteStrengths: archiveTasteIds ? normaliseAuthorTasteStrengths(archive.authorTasteStrengths, archiveTasteIds) : null,
        authorTasteJobs: archiveTasteJobs,
        authorTasteRoutes: archiveTasteIds ? normaliseAuthorTasteRoutes(archive.authorTasteRoutes, archiveTasteIds, archiveTasteJobs, migrateLegacyTasteRoutes) : null,
        authorTasteReframes: archiveTasteIds ? normaliseAuthorTasteReframes(archive.authorTasteReframes, archiveTasteIds) : null
      };
    }).filter((archive) => archive && archive.chapters.length) : [];
    const normalisedChapters = normaliseChapters(raw.chapters, characterIds, characterIdMap);
    const builtBookPlan = normaliseBookPlanSnapshot(raw.builtBookPlan, normalisedChapters.length)
      || (normalisedChapters.length ? normaliseBookPlanSnapshot({
        storyLengthId: raw.storyLengthId,
        targetWordCount: raw.targetWordCount,
        chapterCount: normalisedChapters.length,
        scenesPerChapter: raw.scenesPerChapter,
        wordsPerPage: raw.wordsPerPage,
        structureId: raw.structureId,
        intimacyCadenceId: raw.intimacyCadenceId
      }, normalisedChapters.length) : null);
    const promiseSelection = normalisePrimarySelection(raw.promiseIds, raw.promiseId, DATA.shelfPromises, base.promiseId, true);
    const modeSelection = normalisePrimarySelection(raw.modeIds, raw.modeId, DATA.protagonistModes, base.modeId, true);
    const relationshipSelection = normalisePrimarySelection(raw.relationshipIds, raw.relationshipId, DATA.relationshipEngines, base.relationshipId, true);
    const worldSelection = normalisePrimarySelection(raw.worldIds, raw.worldId, DATA.worldPressures, base.worldId, true);
    const structureSelection = normalisePrimarySelection(raw.structureIds, raw.structureId, DATA.arcTemplates, base.structureId, true);
    const universeResult = normaliseUniverse(raw.universe, base.universe, characterIds, characterIdMap);
    const universe = universeResult.universe;
    const narrativeIds = new Set((universe.narratives || []).map((narrative) => narrative.id));
    const riffs = normaliseRiffs(raw.riffs, narrativeIds, universeResult.idMap, characterIds, characterIdMap);
    return {
      version: DATA.version,
      protagonistId: DATA.protagonist.id,
      title: safeText(raw.title, 100) || base.title,
      universe,
      riffs,
      promiseId: promiseSelection.primary,
      promiseIds: promiseSelection.ids,
      modeId: modeSelection.primary,
      modeIds: modeSelection.ids,
      relationshipId: relationshipSelection.primary,
      relationshipIds: relationshipSelection.ids,
      tropeIds: Array.isArray(raw.tropeIds) ? Array.from(new Set(raw.tropeIds.filter((id) => knownTropeIds.has(id)))) : base.tropeIds,
      authorTasteIds,
      authorTasteStrengths,
      authorTasteJobs,
      authorTasteRoutes,
      tasteRouteModelVersion: 2,
      authorTasteReframes,
      worldId: worldSelection.primary,
      worldIds: worldSelection.ids,
      structureId: structureSelection.primary,
      structureIds: structureSelection.ids,
      intimacyCadenceId: validId(DATA.intimacyCadences, raw.intimacyCadenceId, base.intimacyCadenceId),
      endingId: validId(DATA.endingOptions, raw.endingId, base.endingId),
      characters,
      custom,
      locks,
      reviewGates,
      pinnedInspiration: Array.isArray(raw.pinnedInspiration) ? Array.from(new Set(raw.pinnedInspiration.filter((id) => knownInspirationIds.has(id)))) : [],
      consultations,
      councilBlend: blendedAgentIds.length > 1 ? { agentIds: blendedAgentIds, primaryArcId: validId(DATA.arcTemplates, raw.councilBlend.primaryArcId, base.structureId), createdAt: safeText(raw.councilBlend.createdAt, 40) } : null,
      chapters: normalisedChapters,
      arcArchives,
      storyLengthId: validId(DATA.storyLengthPresets, raw.storyLengthId, base.storyLengthId),
      targetWordCount: planningInteger(raw.targetWordCount, 0, 500000, base.targetWordCount),
      chapterCount: planningInteger(raw.chapterCount, 0, 300, normalisedChapters.length || base.chapterCount),
      scenesPerChapter: planningInteger(raw.scenesPerChapter, 0, 20, base.scenesPerChapter),
      wordsPerPage: planningInteger(raw.wordsPerPage, 100, 1000, base.wordsPerPage),
      actPatternId,
      actUnitLabel,
      acts,
      builtBookPlan,
      createdAt: safeText(raw.createdAt, 40) || base.createdAt,
      updatedAt: safeText(raw.updatedAt, 40) || base.updatedAt
    };
  }

  function loadProject() {
    try {
      const currentRaw = localStorage.getItem(STORAGE_KEY);
      if (!currentRaw) return makeBlankProject();
      return normaliseProject(JSON.parse(currentRaw));
    } catch (error) {
      storageAvailable = false;
      return makeBlankProject();
    }
  }

  function previousProjectRecord() {
    try {
      for (const key of PREVIOUS_STORAGE_KEYS) {
        const raw = localStorage.getItem(key);
        if (raw) return { key, raw };
      }
    } catch (error) {
      storageAvailable = false;
    }
    return null;
  }

  function saveProject(message) {
    project.updatedAt = nowIso();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
      storageAvailable = true;
      updateSaveState(message || "Saved on this laptop");
      return true;
    } catch (error) {
      storageAvailable = false;
      updateSaveState("Browser storage unavailable");
      return false;
    }
  }

  function scheduleProjectSave(message) {
    window.clearTimeout(scheduleProjectSave.timer);
    scheduleProjectSave.timer = window.setTimeout(() => {
      scheduleProjectSave.timer = null;
      saveProject(message);
    }, 280);
  }

  function flushScheduledProjectSave() {
    if (!scheduleProjectSave.timer) return;
    window.clearTimeout(scheduleProjectSave.timer);
    scheduleProjectSave.timer = null;
    saveProject();
  }

  if (typeof window.addEventListener === "function") window.addEventListener("pagehide", flushScheduledProjectSave);

  function updateSaveState(text) {
    document.querySelectorAll("[data-save-state]").forEach((node) => {
      node.innerHTML = `<span class="status-dot"></span>${escapeHtml(text || (storageAvailable ? "Saved on this laptop" : "Storage unavailable"))}`;
    });
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeFileName(value) {
    return String(value || "story-blueprint")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "story-blueprint";
  }

  function getById(list, id) {
    return (list || []).find((item) => item.id === id) || (list || [])[0] || null;
  }

  function authorTasteStrength(id) {
    return AUTHOR_TASTE_STRENGTHS.includes(project.authorTasteStrengths[id]) ? project.authorTasteStrengths[id] : "spark";
  }

  function authorTasteStrengthLabel(id) {
    const strength = authorTasteStrength(id);
    return { spark: "Use once", recurring: "Bring it back", core: "Shape the whole story" }[strength] || "Use once";
  }

  function authorTasteCategory(categoryId) {
    return (DATA.authorTasteCategories || []).find((item) => item.id === categoryId) || null;
  }

  function authorTasteById(id) {
    return (DATA.authorTastes || []).find((item) => item.id === id) || null;
  }

  function defaultAuthorTasteJob(taste) {
    if (!taste) return "beat";
    if (taste.storyJob) return taste.storyJob;
    const categoryId = taste.categoryId || "";
    if (categoryId === "tils_hero") return "tiggy";
    if (["tils_heroine", "tils_antagonist"].includes(categoryId)) return "cast";
    if (["tils_relationships", "tils_conversation"].includes(categoryId)) return "relationship";
    if (["tils_mysteries", "tils_devices"].includes(categoryId)) return "mystery";
    if (["tils_imagery", "tils_words", "tils_descriptions", "tils_objects", "tils_style"].includes(categoryId)) return "prose";
    if (categoryId === "tils_other") return "ending";
    if (categoryId === "tils_subjects") return "world";
    if (taste.placement === "gap") return "gap";
    return "beat";
  }

  function defaultAuthorTasteRouteIds(taste, savedJob) {
    if (!taste) return [];
    const validRouteIds = new Set((DATA.authorTasteRouteOptions || []).map((item) => item.id));
    if (Array.isArray(taste.forgeRoutes)) {
      return Array.from(new Set(taste.forgeRoutes.filter((id) => validRouteIds.has(id))));
    }
    const validJobs = new Set((DATA.authorTasteJobOptions || []).map((item) => item.id));
    const job = validJobs.has(savedJob) ? savedJob : defaultAuthorTasteJob(taste);
    const routesByJob = {
      premise: ["promise", "world", "structure"],
      tiggy: ["mode", "structure"],
      cast: ["cast", "relationship", "tropes"],
      relationship: ["relationship", "tropes", "intimacy", "ending"],
      world: ["promise", "world", "structure"],
      mystery: ["tropes", "world", "structure"],
      beat: ["tropes", "structure", "chapters"],
      prose: ["structure", "chapters", "prose"],
      structure: ["structure"],
      ending: ["promise", "structure", "ending"],
      gap: ["relationship", "intimacy", "ending", "chapters"]
    };
    const routeIds = new Set(routesByJob[job] || []);
    if (taste.placement === "gap") {
      routeIds.add("intimacy");
      routeIds.add("ending");
      routeIds.add("chapters");
    }
    return (DATA.authorTasteRouteOptions || []).map((item) => item.id).filter((id) => routeIds.has(id));
  }

  function legacyAuthorTasteRouteIds(taste, savedJob) {
    if (!taste) return [];
    const validJobs = new Set((DATA.authorTasteJobOptions || []).map((item) => item.id));
    const job = validJobs.has(savedJob) ? savedJob : defaultAuthorTasteJob(taste);
    const routesByJob = {
      premise: ["promise", "world", "structure"],
      tiggy: ["mode", "structure"],
      cast: ["cast", "relationship", "tropes"],
      relationship: ["relationship", "tropes", "intimacy", "ending"],
      world: ["promise", "world", "structure"],
      mystery: ["tropes", "world", "structure"],
      beat: ["tropes", "structure", "chapters"],
      prose: ["structure", "chapters", "prose"],
      structure: ["structure"],
      ending: ["promise", "structure", "ending"],
      gap: ["relationship", "intimacy", "ending", "chapters"]
    };
    const routeIds = new Set(routesByJob[job] || []);
    const category = authorTasteCategory(taste.categoryId);
    const kinds = new Set(category ? category.chapterKinds || [] : []);
    if (kinds.has("character")) routeIds.add("mode");
    if (kinds.has("relationship")) routeIds.add("relationship");
    if (kinds.has("mission") || kinds.has("mystery")) routeIds.add("tropes");
    if (kinds.has("protopia")) routeIds.add("world");
    if (kinds.has("aftermath")) {
      routeIds.add("structure");
      routeIds.add("ending");
    }
    if (taste.placement === "gap") {
      routeIds.add("intimacy");
      routeIds.add("ending");
      routeIds.add("chapters");
    }
    return (DATA.authorTasteRouteOptions || []).map((item) => item.id).filter((id) => routeIds.has(id));
  }

  function authorTasteJob(tasteOrId) {
    const taste = typeof tasteOrId === "string" ? authorTasteById(tasteOrId) : tasteOrId;
    const saved = taste && project.authorTasteJobs ? project.authorTasteJobs[taste.id] : "";
    return (DATA.authorTasteJobOptions || []).some((item) => item.id === saved) ? saved : defaultAuthorTasteJob(taste);
  }

  function authorTasteJobLabel(tasteOrId) {
    const job = authorTasteJob(tasteOrId);
    return ((DATA.authorTasteJobOptions || []).find((item) => item.id === job) || { label: "A chapter event" }).label;
  }

  function authorTasteRouteIds(tasteOrId) {
    const taste = typeof tasteOrId === "string" ? authorTasteById(tasteOrId) : tasteOrId;
    if (!taste) return [];
    const saved = project.authorTasteRoutes && project.authorTasteRoutes[taste.id];
    const validRoutes = new Set((DATA.authorTasteRouteOptions || []).map((item) => item.id));
    return Array.isArray(saved)
      ? Array.from(new Set(saved.filter((id) => validRoutes.has(id))))
      : defaultAuthorTasteRouteIds(taste, authorTasteJob(taste));
  }

  function authorTasteRouteLabel(routeId) {
    return ((DATA.authorTasteRouteOptions || []).find((item) => item.id === routeId) || { label: routeId }).label;
  }

  function authorTastesForRoutes(routeIds, tastes) {
    const wanted = new Set(Array.isArray(routeIds) ? routeIds : [routeIds]);
    return (tastes || []).filter((taste) => authorTasteRouteIds(taste).some((id) => wanted.has(id)));
  }

  function authorTasteReframe(tasteOrId) {
    const id = typeof tasteOrId === "string" ? tasteOrId : tasteOrId && tasteOrId.id;
    return id && project.authorTasteReframes ? project.authorTasteReframes[id] || "" : "";
  }

  function authorTasteCue(taste, includePrivateReframe) {
    return includePrivateReframe && authorTasteReframe(taste) ? authorTasteReframe(taste) : taste.sourcePrompt || "";
  }

  function visibleAuthorTastes(tastes, includePrivate) {
    return (tastes || []).filter((item) => includePrivate || item.visibility !== "private");
  }

  function groupedAuthorTastes(tastes) {
    return (DATA.authorTasteCategories || []).map((category) => ({
      category,
      tastes: (tastes || []).filter((item) => item.categoryId === category.id)
    })).filter((group) => group.tastes.length);
  }

  function selectedStory() {
    const promises = DATA.shelfPromises.filter((item) => project.promiseIds.includes(item.id));
    const modes = DATA.protagonistModes.filter((item) => project.modeIds.includes(item.id));
    const relationships = DATA.relationshipEngines.filter((item) => project.relationshipIds.includes(item.id));
    const worlds = DATA.worldPressures.filter((item) => project.worldIds.includes(item.id));
    const structures = DATA.arcTemplates.filter((item) => project.structureIds.includes(item.id));
    const authorTastes = (DATA.authorTastes || []).filter((item) => project.authorTasteIds.includes(item.id));
    return {
      promise: DATA.shelfPromises.find((item) => item.id === project.promiseId) || null,
      promises,
      mode: DATA.protagonistModes.find((item) => item.id === project.modeId) || null,
      modes,
      relationship: DATA.relationshipEngines.find((item) => item.id === project.relationshipId) || null,
      relationships,
      tropes: DATA.tropes.filter((item) => project.tropeIds.includes(item.id)),
      authorTastes,
      world: DATA.worldPressures.find((item) => item.id === project.worldId) || null,
      worlds,
      structure: DATA.arcTemplates.find((item) => item.id === project.structureId) || null,
      structures,
      cadence: DATA.intimacyCadences.find((item) => item.id === project.intimacyCadenceId) || null,
      ending: DATA.endingOptions.find((item) => item.id === project.endingId) || null,
      pinned: DATA.inspiration.filter((item) => project.pinnedInspiration.includes(item.id)),
      characters: project.characters
    };
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function copyText(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showToast(successMessage || "Copied"));
      return;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast(successMessage || "Copied");
  }

  function renderShell() {
    const navItems = [
      ["home", "Start", "index.html"],
      ["forge", "1 Story choices", "forge.html"],
      ["characters", "2 Characters", "characters.html"],
      ["arc", "3 Book plan", "arc.html"]
    ];
    const exploreItems = [
      ["universe", "Connected stories", "universe.html"],
      ["riff", "Idea Workshop", "riff.html"],
      ["council", "Story patterns", "council.html"],
      ["library", "Sources", "library.html"],
      ["guide", "Help", "guide.html"]
    ];
    const exploreIsCurrent = exploreItems.some(([id]) => id === page);
    const header = document.querySelector("[data-site-header]");
    if (header) {
      header.innerHTML = `
        <div class="nav-wrap">
          <a class="brand" href="index.html" aria-label="Australian Sire Story Forge home">
            <span class="brand-mark" aria-hidden="true">✦</span>
            <span>Australian Sire <small>Story Forge</small></span>
          </a>
          <nav class="nav-links" data-nav-links aria-label="Main navigation">
            ${navItems.map(([id, label, href]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
            <details class="nav-explore">
              <summary${exploreIsCurrent ? ' aria-current="page"' : ""}>Optional workspaces</summary>
              <div class="nav-explore-menu">
                ${exploreItems.map(([id, label, href]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
              </div>
            </details>
          </nav>
          <div class="nav-tools">
            <span class="save-state" data-save-state><span class="status-dot"></span>Saved on this laptop</span>
            <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>☰</button>
          </div>
        </div>`;
      const menuButton = header.querySelector("[data-menu-toggle]");
      const menu = header.querySelector("[data-nav-links]");
      menuButton.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        if (open) {
          const firstLink = menu.querySelector("a");
          if (firstLink) firstLink.focus();
        }
      });
      header.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open menu");
          menuButton.focus();
        }
      });
      window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 6), { passive: true });
    }

    const footer = document.querySelector("[data-site-footer]");
    if (footer) {
      footer.innerHTML = `
        <div class="footer-wrap">
          <div>
            <strong>Australian Sire Story Forge</strong>
            <p>Adult-only story planning. Explicit scenes intentionally unwritten.</p>
            <p><a href="https://github.com/auraofintelligence/australian-sire-story-forge/blob/main/LICENCE.md">Strange But True Public Source Licence</a></p>
          </div>
          <nav class="footer-links" aria-label="Footer navigation">
            <a href="https://auraofintelligence.github.io/australiansire/">Australian Sire</a>
            <a href="https://auraofintelligence.github.io/tiggy-bestmann/">Tiggy Bestmann</a>
            <a href="forge.html">1 Story choices</a>
            <a href="characters.html">2 Characters</a>
            <a href="arc.html">3 Book plan</a>
            <a href="guide.html#privacy">Privacy</a>
            <a href="guide.html#intimacy-boundary">Adult boundary</a>
            <a href="universe.html">Optional connected stories</a>
            <a href="riff.html">Optional Idea Workshop</a>
            <a href="library.html">Sources</a>
            <a href="guide.html#publishing">Before publishing</a>
            <a href="#main">Back to top ↑</a>
          </nav>
        </div>`;
    }
    updateSaveState();
  }

  function authorTasteBriefParagraphs(tastes, includePrivate) {
    return groupedAuthorTastes(visibleAuthorTastes(tastes, includePrivate)).map(({ category, tastes: groupTastes }) => {
      const ingredients = groupTastes.map((item) => {
        const routes = authorTasteRouteIds(item).map(authorTasteRouteLabel);
        return `${item.label} [${authorTasteStrengthLabel(item.id)}, main chapter use: ${authorTasteJobLabel(item)}${routes.length ? `, shapes: ${joinNatural(routes)}` : ""}]${includePrivate && authorTasteReframe(item) ? `, rewritten as: ${authorTasteReframe(item)}` : ""}`;
      });
      return `Things you love from ${category.label}: ${joinNatural(ingredients)}.`;
    });
  }

  function tasteInfluenceSentence(stepId, tastes, includePrivate) {
    const visible = visibleAuthorTastes(authorTastesForRoutes(routesForForgeStep(stepId), tastes), includePrivate);
    if (!visible.length) return "";
    const shown = visible.slice(0, 6).map((item) => item.label);
    const remainder = visible.length - shown.length;
    return ` From what you love: ${joinNatural(shown)}${remainder ? `, plus ${remainder} more connected ${remainder === 1 ? "idea" : "ideas"}` : ""}.`;
  }

  function buildBriefSections(includePrivateNotes = false) {
    const story = selectedStory();
    const custom = project.custom || {};
    const sections = [{
      label: "Tiggy / Australian Sire",
      href: "characters.html",
      text: "Tiggy Bestmann arrives laughing, half a step ahead of his own proof, carrying impossible systems in his head and just enough charm to make people wonder whether he might actually pull them off. Australian Sire begins as a cheeky name for the man he could become. Then the wins accumulate, the promises hold, and desire starts leaving real futures in its wake. The people who invite him into their beds, lives and bloodlines know the road will call him onward. They choose the heat, the possibility and the consequence with open eyes, not because he promised forever, but because he never lied about leaving."
    }];
    let chosenSectionCount = 0;

    authorTasteBriefParagraphs(story.authorTastes, includePrivateNotes).forEach((text) => {
      sections.push({ label: "Things you love in stories", lensId: "author_taste", text });
      chosenSectionCount += 1;
    });

    if (story.promise) {
      const additional = story.promises.filter((item) => item.id !== story.promise.id);
      sections.push({
        label: "What readers can expect",
        lensId: "promise",
        text: `${project.title || "This story"} uses ${story.promise.label.toLowerCase()} as its main story type${additional.length ? ` alongside ${joinNatural(additional.map((item) => item.label.toLowerCase()))}` : ""}. ${story.promise.description}${tasteInfluenceSentence("promise", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.mode) {
      const additional = story.modes.filter((item) => item.id !== story.mode.id);
      sections.push({
        label: "Tiggy in this story",
        lensId: "mode",
        text: `${story.mode.label} is the main side of Tiggy in this story. ${story.mode.description}${additional.length ? ` Other chosen sides are ${joinNatural(additional.map((item) => item.label))}.` : ""}${tasteInfluenceSentence("mode", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.relationship) {
      const additional = story.relationships.filter((item) => item.id !== story.relationship.id);
      sections.push({
        label: "How the relationships work",
        lensId: "relationship",
        text: `${story.relationship.label} is the main way the relationships work: ${story.relationship.description}${additional.length ? ` Other chosen relationship dynamics are ${joinNatural(additional.map((item) => item.label.toLowerCase()))}.` : ""}${tasteInfluenceSentence("relationship", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.tropes.length) {
      sections.push({
        label: "Situations that change the story",
        lensId: "tropes",
        text: `${joinNatural(story.tropes.map((item) => item.label))} ${story.tropes.length === 1 ? "is" : "are"} available as ${story.tropes.length === 1 ? "a situation" : "situations"} that could push the story in a new direction.${tasteInfluenceSentence("tropes", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.world) {
      const additional = story.worlds.filter((item) => item.id !== story.world.id);
      sections.push({
        label: "Main problem or outside pressure",
        lensId: "world",
        text: `${story.world.label} is the main outside problem. ${story.world.description}${additional.length ? ` Other chosen pressures are ${joinNatural(additional.map((item) => item.label.toLowerCase()))}.` : ""}${tasteInfluenceSentence("world", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.structure) {
      const additional = story.structures.filter((item) => item.id !== story.structure.id);
      sections.push({
        label: "Story shape",
        lensId: "structure",
        text: `${story.structure.label} is the main story shape${additional.length ? `, with ideas also available from ${joinNatural(additional.map((item) => item.label))}` : ""}.${tasteInfluenceSentence("structure", story.authorTastes, includePrivateNotes)}`
      });
      chosenSectionCount += 1;
    }

    if (story.pinned.length) {
      sections.push({
        label: "Saved inspiration",
        href: "library.html",
        text: `Saved ideas currently include ${joinNatural(story.pinned.map((item) => item.title))}.`
      });
      chosenSectionCount += 1;
    }

    const castNames = story.characters
      .filter((character) => !character.canonical && (includePrivateNotes || character.includeInShareable))
      .map((character) => character.name);
    if (castNames.length) {
      sections.push({ label: "Characters", href: "characters.html", text: `The current list adds ${joinNatural(castNames)} beside Tiggy. Their profiles carry writing details, independent backgrounds and facts to keep consistent.` });
      chosenSectionCount += 1;
    }

    if (story.cadence || story.ending) {
      const details = [];
      if (story.cadence) details.push(`Adult intimacy currently uses ${story.cadence.label.toLowerCase()} and appears only as private intimacy markers, with the changed relationship and story consequence recorded`);
      if (story.ending) details.push(`The selected emotional destination is ${story.ending.label.toLowerCase()}`);
      sections.push({ label: "Intimacy and ending", lensId: "intimacy", text: `${details.join(". ")}.${tasteInfluenceSentence("intimacy", story.authorTastes, includePrivateNotes)}` });
      chosenSectionCount += 1;
    }

    if (includePrivateNotes) {
      DATA.forgeSteps.forEach((step) => {
        const note = safeText(custom[step.id], 800).trim();
        if (!note) return;
        sections.push({ label: `${step.shortTitle} note`, lensId: step.id, text: note, private: true });
        chosenSectionCount += 1;
      });
    }

    if (!chosenSectionCount) {
      sections.push({ label: "Clean slate", text: "Nothing is selected yet. Start with what you love, or jump to any step. The brief will grow one clearly labelled paragraph at a time." });
    }
    return sections;
  }

  function buildBrief(includePrivateNotes = false) {
    return buildBriefSections(includePrivateNotes).map((section) => section.text);
  }

  function joinNatural(items) {
    if (!items.length) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
  }

  function briefAsText(includePrivateNotes = false) {
    return buildBriefSections(includePrivateNotes).map((section) => `${section.label}\n${section.text}`).join("\n\n");
  }

  function downloadProjectBackup() {
    downloadText(`${safeFileName(project.title)}-story-forge-backup.json`, JSON.stringify(project, null, 2), "application/json;charset=utf-8");
    showToast("Project backup downloaded");
  }

  function updatePreviousProjectControls() {
    const available = Boolean(previousProjectRecord());
    document.querySelectorAll("[data-restore-previous]").forEach((button) => {
      button.hidden = !available;
    });
  }

  function restorePreviousProject() {
    const record = previousProjectRecord();
    if (!record) {
      showToast("No earlier local project was found");
      updatePreviousProjectControls();
      return;
    }
    if (!window.confirm("Restore the project saved by the earlier Story Forge? Save a backup first if you want to keep this clean canvas.")) return;
    try {
      const imported = JSON.parse(record.raw);
      const importedVersion = Number(imported && imported.version);
      if (!imported || typeof imported !== "object" || ![1, 2].includes(importedVersion)) throw new Error("Not an earlier Story Forge project");
      const candidate = normaliseProject(imported);
      if (!saveImportedProject(candidate)) throw new Error("Browser storage unavailable");
      currentForgeStep = 0;
      activeCharacterId = project.characters[0].id;
      const titleField = document.querySelector("[data-project-field='title']");
      if (titleField) titleField.value = project.title;
      renderForge();
      updatePreviousProjectControls();
      showToast("Earlier project restored");
    } catch (error) {
      showToast(error && error.message === "Browser storage unavailable" ? "The earlier project is valid, but this browser could not save it" : "The earlier local project could not be restored");
    }
  }

  function initHome() {
    const preview = document.querySelector("[data-agent-preview]");
    if (preview) {
      preview.innerHTML = DATA.agents.slice(0, 3).map((agent) => `
        <article class="agent-preview-card">
          <div class="agent-avatar" aria-hidden="true">${escapeHtml(agent.glyph)}</div>
          <h3>${escapeHtml(agent.name)}</h3>
          <small>${escapeHtml(agent.voice)}</small>
          <p>${escapeHtml(agent.focus)}</p>
        </article>`).join("");
    }
  }

  function optionsForStep(step) {
    return DATA[step.source] || [];
  }

  function optionDescription(option) {
    if (option.description) return option.description;
    if (option.purpose) return option.purpose;
    if (option.bestFor) return `Best for ${joinNatural(option.bestFor.map((item) => item.toLowerCase()))}.`;
    return "A flexible story component.";
  }

  function optionNote(option) {
    if (option.note) return option.note;
    if (option.bestFor) return option.bestFor.join(" · ");
    if (option.band) return DATA.bandLabels[option.band] || option.band;
    return "";
  }

  function isOptionSelected(step, id) {
    return step.type !== "single"
      ? (project[step.selectionKey] || []).includes(id)
      : project[step.selectionKey] === id;
  }

  function isPrimaryOption(step, id) {
    return step.type === "multiPrimary" && project[step.primaryKey] === id;
  }

  function renderForgeSteps() {
    const container = document.querySelector("[data-forge-steps]");
    if (!container) return;
    container.innerHTML = DATA.forgeSteps.map((step, index) => {
      const value = project[step.selectionKey];
      const complete = Array.isArray(value) ? value.length > 0 : Boolean(value);
      return `<button class="forge-step${index === currentForgeStep ? " is-active" : ""}${complete ? " is-complete" : ""}" type="button" data-step-index="${index}"${index === currentForgeStep ? ' aria-current="step"' : ""}>
        <span class="step-number">${complete ? "✓" : index + 1}</span>
        <span class="step-label">${escapeHtml(step.shortTitle)}</span>
        <span class="step-lock" aria-label="${project.locks[step.id] ? "Kept during a random addition" : "A random addition may change this step"}">${project.locks[step.id] ? "◆" : ""}</span>
      </button>`;
    }).join("");
    container.querySelectorAll("[data-step-index]").forEach((button) => {
      button.addEventListener("click", () => {
        currentForgeStep = Number(button.dataset.stepIndex);
        renderForge();
      });
    });
  }

  function routesForForgeStep(stepId) {
    return stepId === "intimacy" ? ["intimacy", "ending"] : [stepId];
  }

  function sortedTasteInfluences(stepId) {
    const selectedIds = new Set(project.authorTasteIds || []);
    const strengthWeight = { core: 3, recurring: 2, spark: 1 };
    const order = new Map((DATA.authorTastes || []).map((item, index) => [item.id, index]));
    return authorTastesForRoutes(routesForForgeStep(stepId), (DATA.authorTastes || []).filter((item) => selectedIds.has(item.id)))
      .sort((a, b) => (strengthWeight[authorTasteStrength(b.id)] - strengthWeight[authorTasteStrength(a.id)]) || ((order.get(a.id) || 0) - (order.get(b.id) || 0)));
  }

  function authorTasteInfluenceHtml(step) {
    const selectedCount = (project.authorTasteIds || []).length;
    const tastes = sortedTasteInfluences(step.id);
    const preview = tastes.slice(0, 6);
    const heading = tastes.length
      ? `${tastes.length} chosen ${tastes.length === 1 ? "idea shapes" : "ideas shape"} this step`
      : selectedCount
        ? "No chosen taste is connected here yet"
        : "Begin from your own tastes when you are ready";
    const explanation = tastes.length
      ? "These ideas are already part of the story. The shelf below offers optional ways to gather or extend them. Nothing has been selected for you."
      : selectedCount
        ? "The shelf below remains available. Review any chosen taste to connect it here as well as anywhere else it belongs."
        : "The shelf below can still be used as a quick start, or you can begin by choosing anything that excites you from your own notes.";
    const previewHtml = preview.length ? `<div class="taste-influence-preview">${preview.map((taste) => `<span><strong>${escapeHtml(taste.label)}</strong><small>${escapeHtml(authorTasteStrengthLabel(taste.id))}</small></span>`).join("")}${tastes.length > preview.length ? `<span class="taste-influence-more">+${tastes.length - preview.length} more</span>` : ""}</div>` : "";
    const detailHtml = tastes.length ? `<details class="taste-influence-details"${tastes.length <= 3 ? " open" : ""}>
      <summary>See all ${tastes.length} ${tastes.length === 1 ? "connection" : "connections"}</summary>
      <div>${tastes.map((taste) => {
        const category = authorTasteCategory(taste.categoryId);
        const cue = authorTasteCue(taste, true);
        return `<article><strong>${escapeHtml(taste.label)}</strong><small>${escapeHtml(category ? category.label : "Your tastes")} · ${escapeHtml(authorTasteStrengthLabel(taste.id))}</small>${cue ? `<p>${escapeHtml(authorTasteReframe(taste) ? `Your private reframe: ${cue}` : `Question: ${cue}`)}</p>` : ""}</article>`;
      }).join("")}</div>
    </details>` : "";
    return `<section class="taste-influence-panel" aria-label="Chosen tastes shaping this step">
      <div class="taste-influence-heading">
        <div><p class="eyebrow">From what you love</p><h3>${escapeHtml(heading)}</h3></div>
        <button class="button button-quiet button-small" type="button" data-open-author-tastes>Review your tastes</button>
      </div>
      <p>${escapeHtml(explanation)}</p>
      ${previewHtml}
      ${detailHtml}
    </section>`;
  }

  function renderStandardForgeOptions(step, options, grid) {
    grid.className = "choice-grid";
    const cards = options.map((option) => {
      const selected = isOptionSelected(step, option.id);
      const primary = isPrimaryOption(step, option.id);
      return `<article class="choice-card${selected ? " is-selected" : ""}${primary ? " is-primary" : ""}">
        <button class="choice-toggle" type="button" data-option-id="${escapeHtml(option.id)}" aria-pressed="${selected}">
          <span class="choice-check" aria-hidden="true">${selected ? "Chosen" : "Choose"}</span>
          <strong>${escapeHtml(option.label)}</strong>
          <p>${escapeHtml(optionDescription(option))}</p>
          ${optionNote(option) ? `<small>${escapeHtml(optionNote(option))}</small>` : ""}
        </button>
        ${step.type === "multiPrimary" && selected ? `<button class="choice-primary-action" type="button" data-primary-option-id="${escapeHtml(option.id)}"${primary ? " disabled" : ""}>${primary ? "Main choice" : "Make main choice"}</button>` : ""}
      </article>`;
    }).join("");
    grid.innerHTML = `${authorTasteInfluenceHtml(step)}
      <div class="optional-choice-heading"><h3>Optional ways to gather your choices</h3><p>Use any, none or many. These quick-start shapes do not outrank your own material.</p></div>
      ${cards}`;
  }

  function renderAuthorTasteOptions(step, options, grid) {
    const selectedIds = new Set(project.authorTasteIds || []);
    const query = authorTasteSearch.trim().toLowerCase();
    const sources = DATA.authorTasteSources || [];
    const source = sources.find((item) => item.id === authorTasteSourceFilter) || null;
    const activeOptions = authorTasteSourceFilter === "all" ? options : options.filter((item) => item.sourceId === authorTasteSourceFilter);
    const selectedInView = activeOptions.filter((item) => selectedIds.has(item.id)).length;
    const categoryHtml = (DATA.authorTasteCategories || []).map((category) => {
      if (authorTasteSourceFilter !== "all" && category.sourceId !== authorTasteSourceFilter) return "";
      const allItems = activeOptions.filter((item) => item.categoryId === category.id);
      const categorySource = sources.find((item) => item.id === category.sourceId);
      const categoryMatches = `${category.label} ${category.briefLead}`.toLowerCase().includes(query);
      const shownItems = query && !categoryMatches
        ? allItems.filter((item) => `${item.label} ${item.sourcePrompt || ""} ${item.spineCue} ${authorTasteReframe(item)}`.toLowerCase().includes(query))
        : allItems;
      if (!shownItems.length) return "";
      const selectedCount = allItems.filter((item) => selectedIds.has(item.id)).length;
      const open = query || openAuthorTasteCategories.has(category.id);
      return `<details class="taste-group" data-taste-category-details="${escapeHtml(category.id)}"${open ? " open" : ""}>
        <summary>
          <span><strong>${escapeHtml(category.label)}</strong>${categorySource ? `<em>${escapeHtml(categorySource.label)}${category.sourceRef ? ` · ${escapeHtml(category.sourceRef)}` : ""}</em>` : ""}</span>
          <span class="taste-group-count">${selectedCount} of ${allItems.length}</span>
        </summary>
        <div class="taste-group-body">
          <div class="taste-group-actions">
            <button class="button button-quiet button-small" type="button" data-taste-select-category="${escapeHtml(category.id)}"${selectedCount === allItems.length ? " disabled" : ""}>Choose whole group</button>
            <button class="button button-quiet button-small" type="button" data-taste-clear-category="${escapeHtml(category.id)}"${selectedCount ? "" : " disabled"}>Remove whole group</button>
          </div>
          <div class="taste-options">
            ${shownItems.map((item) => {
              const selected = selectedIds.has(item.id);
              const categoryLabel = authorTasteCategory(item.categoryId)?.label || "Story tastes";
              const routeIds = authorTasteRouteIds(item);
              return `<article class="taste-option${selected ? " is-selected" : ""}">
                 <button class="taste-choice" type="button" data-option-id="${escapeHtml(item.id)}" aria-pressed="${selected}">
                   <span class="choice-check" aria-hidden="true">${selected ? "Chosen" : "Choose"}</span>
                   <strong>${escapeHtml(item.label)}</strong>
                   ${item.sourcePrompt ? `<small class="taste-direction">Source question: ${escapeHtml(item.sourcePrompt)}</small>` : ""}
                   <span class="taste-tags"><small>${escapeHtml(categoryLabel)}</small><small data-taste-job-tag="${escapeHtml(item.id)}">${escapeHtml(authorTasteJobLabel(item))}</small>${item.band ? `<small class="source-band band-${escapeHtml(item.band)}">${escapeHtml(DATA.bandLabels[item.band] || item.band)}</small>` : ""}${item.visibility === "private" ? "<small class=\"is-private\">Private planning</small>" : ""}${item.placement === "gap" ? "<small class=\"is-gap\">Private intimacy marker</small>" : ""}${item.review ? "<small class=\"is-review\">Check transcription</small>" : ""}</span>
                 </button>
                 ${selected ? `<div class="taste-routing">
                   <button class="taste-strength" type="button" data-taste-strength="${escapeHtml(item.id)}" aria-label="Change how often to use ${escapeHtml(item.label)}">${escapeHtml(authorTasteStrengthLabel(item.id))}</button>
                   <label>Main use in the chapter plan
                     <select data-taste-job="${escapeHtml(item.id)}">${(DATA.authorTasteJobOptions || []).map((job) => `<option value="${escapeHtml(job.id)}"${authorTasteJob(item) === job.id ? " selected" : ""}>${escapeHtml(job.label)}</option>`).join("")}</select>
                     <small>This gives the Book Plan a starting place.</small>
                   </label>
                   <details class="taste-route-picker">
                     <summary>Where this shapes the Forge <span data-taste-route-count="${escapeHtml(item.id)}">${routeIds.length} connected</span></summary>
                     <p>The planner made a starting guess for this individual idea. Choose any number, remove any or leave it alone. This does not select anything for you in the later steps.</p>
                     <div class="taste-route-options">${(DATA.authorTasteRouteOptions || []).map((route) => `<label><input type="checkbox" data-taste-route="${escapeHtml(item.id)}" value="${escapeHtml(route.id)}"${routeIds.includes(route.id) ? " checked" : ""}>${escapeHtml(route.label)}</label>`).join("")}</div>
                   </details>
                   <label class="taste-reframe">Rewrite what this older note means now
                     <textarea rows="2" maxlength="1000" data-taste-reframe="${escapeHtml(item.id)}" placeholder="Keep the spark, rewrite what it means now">${escapeHtml(authorTasteReframe(item))}</textarea>
                     <small>Private author note. It is left out of the version for sharing.</small>
                   </label>
                 </div>` : ""}
               </article>`;
            }).join("")}
          </div>
        </div>
      </details>`;
    }).join("");
    const tray = (DATA.authorTasteReviewTray || []).filter((item) => authorTasteSourceFilter === "all" || item.sourceId === authorTasteSourceFilter);
    const sourceNote = source
      ? `${source.label}. ${source.note}`
      : `${sources.length} local source groups. The original photos stay outside the app.`;
    grid.className = "choice-grid taste-selector-grid";
    grid.innerHTML = `
      <section class="taste-selector-toolbar" aria-label="Story taste controls">
        <div>
          <strong>${selectedIds.size} ${selectedIds.size === 1 ? "idea" : "ideas"} chosen</strong>
          <p>Browse by source, open any group or search in your own words. ${selectedInView} of ${activeOptions.length} ideas in this view are chosen.</p>
          <p>There is no selection limit. Use once gives an idea one deliberate home. Bring it back repeats wherever it fits. Shape the whole story carries it through every suitable chapter.</p>
        </div>
        <label class="taste-search">Find an idea<input type="search" value="${escapeHtml(authorTasteSearch)}" data-taste-search placeholder="Try waves, philosophy or humour"></label>
        <div class="taste-source-filters" aria-label="Story taste sources">
          <button class="filter-pill${authorTasteSourceFilter === "all" ? " is-active" : ""}" type="button" data-taste-source="all" aria-pressed="${authorTasteSourceFilter === "all"}">All sources</button>
          ${sources.map((item) => `<button class="filter-pill${authorTasteSourceFilter === item.id ? " is-active" : ""}" type="button" data-taste-source="${escapeHtml(item.id)}" aria-pressed="${authorTasteSourceFilter === item.id}">${escapeHtml(item.shortLabel || item.label)}</button>`).join("")}
        </div>
        <div class="taste-toolbar-actions">
          <button class="button button-secondary button-small" type="button" data-taste-select-all${selectedInView === activeOptions.length ? " disabled" : ""}>${authorTasteSourceFilter === "all" ? "Choose every worksheet idea" : "Choose this source"}</button>
          <button class="button button-quiet button-small" type="button" data-taste-clear-all${selectedInView ? "" : " disabled"}>${authorTasteSourceFilter === "all" ? "Remove all story tastes" : "Remove this source"}</button>
        </div>
        <small class="taste-source-note">${escapeHtml(sourceNote)}</small>
      </section>
      ${categoryHtml || `<p class="taste-no-results">No ideas match “${escapeHtml(authorTasteSearch)}”. Your current choices are unchanged.</p>`}
      ${!query && tray.length ? `<details class="taste-review-tray">
        <summary>${tray.length} handwriting fragments waiting for a clearer source</summary>
        <p>These are not choices yet because the wording cannot be read reliably.</p>
        ${tray.map((item) => `<article><strong>${escapeHtml(item.location)}</strong><span>${escapeHtml(item.visibleWords)}</span><small>${escapeHtml(item.note)}</small></article>`).join("")}
      </details>` : ""}`;
    attachAuthorTasteEvents(step, grid, options, activeOptions);
  }

  function replaceAuthorTasteSelection(ids, message, focusSelector) {
    project.authorTasteIds = normaliseAuthorTasteIds(ids);
    project.authorTasteStrengths = normaliseAuthorTasteStrengths(project.authorTasteStrengths, project.authorTasteIds);
    project.authorTasteJobs = normaliseAuthorTasteJobs(project.authorTasteJobs, project.authorTasteIds);
    project.authorTasteRoutes = normaliseAuthorTasteRoutes(project.authorTasteRoutes, project.authorTasteIds, project.authorTasteJobs);
    project.authorTasteReframes = normaliseAuthorTasteReframes(project.authorTasteReframes, project.authorTasteIds);
    saveProject(message);
    renderForge();
    const replacement = focusSelector ? document.querySelector(focusSelector) : null;
    const focusTarget = replacement && !replacement.disabled ? replacement : document.querySelector("[data-taste-search]");
    if (focusTarget) focusTarget.focus();
  }

  function attachAuthorTasteEvents(step, grid, options, activeOptions) {
    const search = grid.querySelector("[data-taste-search]");
    if (search) {
      search.addEventListener("input", (event) => {
        const start = event.target.selectionStart;
        authorTasteSearch = event.target.value;
        renderForgeStage();
        const replacement = document.querySelector("[data-taste-search]");
        if (replacement) {
          replacement.focus();
          replacement.setSelectionRange(start, start);
        }
      });
    }
    grid.querySelectorAll("[data-taste-category-details]").forEach((details) => {
      details.addEventListener("toggle", () => {
        if (authorTasteSearch) return;
        if (details.open) openAuthorTasteCategories.add(details.dataset.tasteCategoryDetails);
        else openAuthorTasteCategories.delete(details.dataset.tasteCategoryDetails);
      });
    });
    grid.querySelectorAll("[data-taste-source]").forEach((button) => {
      button.addEventListener("click", () => {
        authorTasteSourceFilter = button.dataset.tasteSource;
        authorTasteSearch = "";
        renderForgeStage();
        const replacement = document.querySelector(`[data-taste-source="${authorTasteSourceFilter}"]`);
        if (replacement) replacement.focus();
      });
    });
    const selectAll = grid.querySelector("[data-taste-select-all]");
    if (selectAll) selectAll.addEventListener("click", () => replaceAuthorTasteSelection((project.authorTasteIds || []).concat(activeOptions.map((item) => item.id)), "Ideas from this source chosen", "[data-taste-select-all]"));
    const clearAll = grid.querySelector("[data-taste-clear-all]");
    if (clearAll) {
      clearAll.addEventListener("click", () => {
        const activeIds = new Set(activeOptions.map((item) => item.id));
        replaceAuthorTasteSelection((project.authorTasteIds || []).filter((id) => !activeIds.has(id)), "Ideas in this view removed", "[data-taste-clear-all]");
      });
    }
    grid.querySelectorAll("[data-taste-select-category]").forEach((button) => {
      button.addEventListener("click", () => {
        const categoryIds = options.filter((item) => item.categoryId === button.dataset.tasteSelectCategory).map((item) => item.id);
        replaceAuthorTasteSelection((project.authorTasteIds || []).concat(categoryIds), "Ideas in this group chosen", `[data-taste-select-category="${button.dataset.tasteSelectCategory}"]`);
      });
    });
    grid.querySelectorAll("[data-taste-clear-category]").forEach((button) => {
      button.addEventListener("click", () => {
        const categoryIds = new Set(options.filter((item) => item.categoryId === button.dataset.tasteClearCategory).map((item) => item.id));
        replaceAuthorTasteSelection((project.authorTasteIds || []).filter((id) => !categoryIds.has(id)), "Ideas in this group removed", `[data-taste-clear-category="${button.dataset.tasteClearCategory}"]`);
      });
    });
    grid.querySelectorAll("[data-taste-strength]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.tasteStrength;
        const currentIndex = AUTHOR_TASTE_STRENGTHS.indexOf(authorTasteStrength(id));
        project.authorTasteStrengths[id] = AUTHOR_TASTE_STRENGTHS[(currentIndex + 1) % AUTHOR_TASTE_STRENGTHS.length];
        saveProject("Reuse level updated");
        renderForge();
        const replacement = document.querySelector(`[data-taste-strength="${id}"]`);
        if (replacement) replacement.focus();
      });
    });
    grid.querySelectorAll("[data-taste-job]").forEach((select) => {
      select.addEventListener("change", () => {
        const id = select.dataset.tasteJob;
        project.authorTasteJobs[id] = select.value;
        saveProject("Story use updated");
        const tag = grid.querySelector(`[data-taste-job-tag="${id}"]`);
        if (tag) tag.textContent = authorTasteJobLabel(id);
        renderLiveBrief();
        showToast("The idea's use is saved. Rebuild the chapter plan when you want to place it again");
      });
    });
    grid.querySelectorAll("[data-taste-route]").forEach((input) => {
      input.addEventListener("change", () => {
        const id = input.dataset.tasteRoute;
        const selectedRoutes = new Set(authorTasteRouteIds(id));
        if (input.checked) selectedRoutes.add(input.value);
        else selectedRoutes.delete(input.value);
        project.authorTasteRoutes[id] = (DATA.authorTasteRouteOptions || []).map((item) => item.id).filter((routeId) => selectedRoutes.has(routeId));
        saveProject("Taste connections updated");
        const count = grid.querySelector(`[data-taste-route-count="${id}"]`);
        if (count) count.textContent = `${project.authorTasteRoutes[id].length} connected`;
        renderLiveBrief();
      });
    });
    grid.querySelectorAll("[data-taste-reframe]").forEach((textarea) => {
      textarea.addEventListener("input", () => {
        const id = textarea.dataset.tasteReframe;
        const value = safeText(textarea.value, 1000).trim();
        if (value) project.authorTasteReframes[id] = value;
        else delete project.authorTasteReframes[id];
        scheduleProjectSave();
        renderLiveBrief();
      });
    });
  }

  function renderForgeStage() {
    const step = DATA.forgeSteps[currentForgeStep];
    const options = optionsForStep(step);
    const kicker = document.querySelector("[data-step-kicker]");
    const title = document.querySelector("[data-step-title]");
    const intro = document.querySelector("[data-step-intro]");
    const grid = document.querySelector("[data-choice-grid]");
    if (!grid) return;
    kicker.textContent = `Question group ${currentForgeStep + 1} of ${DATA.forgeSteps.length}`;
    title.textContent = step.title;
    intro.textContent = step.intro;
    if (step.type === "multiGrouped") renderAuthorTasteOptions(step, options, grid);
    else renderStandardForgeOptions(step, options, grid);

    grid.querySelectorAll("[data-option-id]").forEach((button) => {
      button.addEventListener("click", () => chooseOption(step, button.dataset.optionId));
    });
    grid.querySelectorAll("[data-primary-option-id]").forEach((button) => {
      button.addEventListener("click", () => choosePrimaryOption(step, button.dataset.primaryOptionId));
    });
    grid.querySelectorAll("[data-open-author-tastes]").forEach((button) => {
      button.addEventListener("click", () => {
        const tasteStepIndex = DATA.forgeSteps.findIndex((item) => item.id === "author_taste");
        if (tasteStepIndex < 0) return;
        currentForgeStep = tasteStepIndex;
        renderForge();
        const stage = document.querySelector(".forge-stage");
        const heading = document.querySelector("[data-step-title]");
        if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
        if (heading) heading.focus({ preventScroll: true });
      });
    });

    const custom = document.querySelector("[data-custom-choice]");
    const customValue = project.custom[step.id] || "";
    const endField = step.hasEnding ? `
      <label>Emotional ending
        <select data-ending-choice>
          <option value=""${project.endingId ? "" : " selected"}>Not chosen yet</option>
          ${DATA.endingOptions.map((ending) => `<option value="${ending.id}"${project.endingId === ending.id ? " selected" : ""}>${escapeHtml(ending.label)}: ${escapeHtml(ending.description)}</option>`).join("")}
        </select>
      </label>` : "";
    custom.innerHTML = `
      <label>${escapeHtml(step.customLabel)}
        <textarea rows="3" maxlength="800" data-custom-step="${escapeHtml(step.id)}" placeholder="Optional. Write in your own words">${escapeHtml(customValue)}</textarea>
      </label>
      ${endField}`;
    custom.querySelector("[data-custom-step]").addEventListener("input", (event) => {
      project.custom[step.id] = event.target.value;
      saveProject();
      renderLiveBrief();
    });
    const endingChoice = custom.querySelector("[data-ending-choice]");
    if (endingChoice) {
      endingChoice.addEventListener("change", (event) => {
        project.endingId = event.target.value;
        saveProject();
        renderLiveBrief();
      });
    }

    const lockButton = document.querySelector("[data-lock-step]");
    lockButton.textContent = project.locks[step.id] ? "Allow a random addition to change this step" : "Keep these choices during a random addition";
    lockButton.setAttribute("aria-pressed", String(Boolean(project.locks[step.id])));
    document.querySelector("[data-prev-step]").disabled = currentForgeStep === 0;
    const next = document.querySelector("[data-next-step]");
    next.textContent = currentForgeStep === DATA.forgeSteps.length - 1 ? "Go to Characters →" : "Next question group →";
  }

  function chooseOption(step, optionId) {
    if (step.type !== "single") {
      const selected = new Set(project[step.selectionKey] || []);
      if (selected.has(optionId)) {
        selected.delete(optionId);
        if (step.id === "author_taste") {
          delete project.authorTasteStrengths[optionId];
          delete project.authorTasteJobs[optionId];
          delete project.authorTasteRoutes[optionId];
          delete project.authorTasteReframes[optionId];
        }
      } else {
        selected.add(optionId);
        if (step.id === "author_taste") {
          if (!project.authorTasteStrengths[optionId]) project.authorTasteStrengths[optionId] = "spark";
          if (!Array.isArray(project.authorTasteRoutes[optionId])) {
            project.authorTasteRoutes[optionId] = defaultAuthorTasteRouteIds(authorTasteById(optionId), authorTasteJob(optionId));
          }
        }
      }
      project[step.selectionKey] = Array.from(selected);
      if (step.type === "multiPrimary" && !selected.has(project[step.primaryKey])) {
        project[step.primaryKey] = project[step.selectionKey][0] || "";
      }
    } else {
      project[step.selectionKey] = project[step.selectionKey] === optionId ? "" : optionId;
    }
    saveProject();
    renderForge();
    const replacement = document.querySelector(`[data-option-id="${optionId}"]`);
    if (replacement) replacement.focus();
  }

  function choosePrimaryOption(step, optionId) {
    if (step.type !== "multiPrimary" || !(project[step.selectionKey] || []).includes(optionId)) return;
    project[step.primaryKey] = optionId;
    saveProject("Leading choice updated");
    renderForge();
    const replacement = document.querySelector(`[data-primary-option-id="${optionId}"]`);
    if (replacement) replacement.focus();
  }

  function surpriseStep() {
    const step = DATA.forgeSteps[currentForgeStep];
    if (project.locks[step.id]) {
      showToast("These choices are being kept. Allow a random addition to change this step first.");
      return;
    }
    const options = optionsForStep(step);
    if (step.type !== "single") {
      const selected = new Set(project[step.selectionKey] || []);
      const available = options.filter((item) => !selected.has(item.id));
      if (!available.length) {
        if (step.type === "multiPrimary") {
          project[step.primaryKey] = options[Math.floor(Math.random() * options.length)].id;
          saveProject("New main choice saved");
          renderForge();
          showToast("Every option is selected, so a new main choice was chosen");
        } else {
          showToast("Every option in this step is already selected");
        }
        return;
      }
      const suggestion = available[Math.floor(Math.random() * available.length)];
      selected.add(suggestion.id);
      project[step.selectionKey] = Array.from(selected);
      if (step.type === "multiPrimary" && !selected.has(project[step.primaryKey])) project[step.primaryKey] = suggestion.id;
      if (step.id === "author_taste") {
        if (!project.authorTasteStrengths[suggestion.id]) project.authorTasteStrengths[suggestion.id] = "spark";
        if (!Array.isArray(project.authorTasteRoutes[suggestion.id])) {
          project.authorTasteRoutes[suggestion.id] = defaultAuthorTasteRouteIds(authorTasteById(suggestion.id), authorTasteJob(suggestion.id));
        }
      }
    } else {
      project[step.selectionKey] = options[Math.floor(Math.random() * options.length)].id;
    }
    saveProject("Random possibility added");
    renderForge();
    showToast("A fresh possibility has entered the room");
  }

  function renderLiveBrief() {
    const story = selectedStory();
    const briefTitle = document.querySelector("[data-brief-title]");
    const brief = document.querySelector("[data-live-brief]");
    if (!brief) return;
    briefTitle.textContent = project.title || "Your story is taking shape";
    const currentStep = DATA.forgeSteps[currentForgeStep];
    brief.innerHTML = buildBriefSections(true).map((section) => {
      const source = section.lensId
        ? `<button class="brief-source${currentStep && currentStep.id === section.lensId ? " is-current" : ""}" type="button" data-brief-lens="${escapeHtml(section.lensId)}">${escapeHtml(section.label)} · edit</button>`
        : section.href
          ? `<a class="brief-source" href="${escapeHtml(section.href)}">${escapeHtml(section.label)} · open</a>`
          : `<span class="brief-source">${escapeHtml(section.label)}</span>`;
      return `<section class="brief-section${section.private ? " is-private" : ""}">${source}<p>${escapeHtml(section.text)}</p></section>`;
    }).join("");
    brief.querySelectorAll("[data-brief-lens]").forEach((button) => {
      button.addEventListener("click", () => {
        const stepIndex = DATA.forgeSteps.findIndex((step) => step.id === button.dataset.briefLens);
        if (stepIndex < 0) return;
        currentForgeStep = stepIndex;
        renderForge();
        const stage = document.querySelector(".forge-stage");
        const heading = document.querySelector("[data-step-title]");
        if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
        if (heading) heading.focus({ preventScroll: true });
      });
    });
  }

  function renderForge() {
    renderForgeSteps();
    renderForgeStage();
    renderLiveBrief();
  }

  function initForge() {
    const titleField = document.querySelector("[data-project-field='title']");
    titleField.value = project.title;
    titleField.addEventListener("input", (event) => {
      project.title = event.target.value || "Untitled Australian Sire story";
      saveProject();
      renderLiveBrief();
    });
    document.querySelectorAll("[data-save-project-backup]").forEach((button) => {
      button.addEventListener("click", downloadProjectBackup);
    });
    document.querySelectorAll("[data-new-project]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!window.confirm("Start with a clean slate? Use Save backup first if you want a separate copy of this version.")) return;
        project = makeBlankProject();
        saveProject("Clean canvas saved");
        currentForgeStep = 0;
        activeCharacterId = project.characters[0].id;
        titleField.value = project.title;
        renderForge();
        updatePreviousProjectControls();
        showToast("A clean story canvas is ready");
      });
    });
    document.querySelectorAll("[data-restore-previous]").forEach((button) => {
      button.addEventListener("click", restorePreviousProject);
    });
    document.querySelector("[data-surprise-step]").addEventListener("click", surpriseStep);
    document.querySelector("[data-lock-step]").addEventListener("click", () => {
      const step = DATA.forgeSteps[currentForgeStep];
      project.locks[step.id] = !project.locks[step.id];
      saveProject(project.locks[step.id] ? "Choices kept during random additions" : "A random addition may change these choices");
      renderForge();
    });
    document.querySelector("[data-prev-step]").addEventListener("click", () => {
      currentForgeStep = Math.max(0, currentForgeStep - 1);
      renderForge();
      window.scrollTo({ top: document.querySelector(".forge-layout").offsetTop - 90, behavior: "smooth" });
    });
    document.querySelector("[data-next-step]").addEventListener("click", () => {
      if (currentForgeStep === DATA.forgeSteps.length - 1) {
        window.location.href = "characters.html";
      } else {
        currentForgeStep += 1;
        renderForge();
        window.scrollTo({ top: document.querySelector(".forge-layout").offsetTop - 90, behavior: "smooth" });
      }
    });
    document.querySelector("[data-copy-brief]").addEventListener("click", () => copyText(briefAsText(false), "Version for sharing copied"));
    document.querySelector("[data-copy-private-brief]").addEventListener("click", () => copyText(briefAsText(true), "Full working version copied"));
    updatePreviousProjectControls();
    renderForge();
  }

  function renderAgents() {
    const grid = document.querySelector("[data-agent-grid]");
    if (!grid) return;
    grid.innerHTML = DATA.agents.map((agent) => `
      <button class="agent-card${selectedAgentIds.has(agent.id) ? " is-selected" : ""}" type="button" data-agent-id="${agent.id}" aria-pressed="${selectedAgentIds.has(agent.id)}">
        <span class="agent-avatar" aria-hidden="true">${escapeHtml(agent.glyph)}</span>
        <h2>${escapeHtml(agent.name)}</h2>
        <p class="agent-focus">${escapeHtml(agent.focus)}</p>
        <small>${escapeHtml(agent.voice)}</small>
        <p class="agent-structure">${escapeHtml(agent.structure)}</p>
        <span class="select-agent">${selectedAgentIds.has(agent.id) ? "Selected" : "Choose this pattern"}</span>
      </button>`).join("");
    grid.querySelectorAll("[data-agent-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.agentId;
        selectedAgentIds.has(id) ? selectedAgentIds.delete(id) : selectedAgentIds.add(id);
        renderAgents();
        updateAgentCount();
        const replacement = document.querySelector(`[data-agent-id="${id}"]`);
        if (replacement) replacement.focus();
      });
    });
  }

  function updateAgentCount() {
    const count = document.querySelector("[data-agent-count]");
    if (count) count.textContent = selectedAgentIds.size;
  }

  function counselFor(agent) {
    const story = selectedStory();
    const situations = story.tropes.length ? joinNatural(story.tropes.map((item) => item.label.toLowerCase())) : "a still-open story situation";
    const promise = story.promise ? story.promise.label.toLowerCase() : "the story type still waiting to be chosen";
    const relationship = story.relationship ? story.relationship.label.toLowerCase() : "an emerging relationship";
    const structure = story.structure ? `the ${story.structure.label}` : "an open story map";
    const world = story.world ? story.world.label : "the outside problem still waiting to be chosen";
    const customWorld = project.custom.world ? ` Your own outcome: ${project.custom.world}` : "";
    const counsel = {
      heartkeeper: {
        alive: `Saved relationship: ${relationship}. Saved story type: ${promise}. Chosen situations: ${situations}.`,
        next: `This pattern places longing near the opening, trust before the middle, a break after the middle, evidence of change near the final quarter and a chosen emotional future at the end.`,
        question: `What truth would Tiggy rather solve as a system than risk saying as a lover?`
      },
      purple_trickster: {
        alive: `Saved outside problem: ${world}. The comic pattern looks for an absurd accepted rule, a playful challenge and evidence that the joke contains a serious possibility.`,
        next: `This pattern places comic exposure early, a small working proof around the first quarter, unwanted attention near the middle and the human consequence after the spectacle expands.`,
        question: `What ridiculous Australian phrase becomes the slogan of something unexpectedly useful?`
      },
      wayfinder: {
        alive: `Saved story shape: ${structure}. Saved outside problem: ${world}. This pattern groups thresholds, destinations, hosts, departures and changed returns.`,
        next: `This pattern places departure near the beginning, a host-defined threshold before the middle, the deepest displacement after the middle and a changed meaning of home at the end.`,
        question: `Which place changes the relationship because Tiggy is invited to listen rather than lead?`
      },
      veilkeeper: {
        alive: `Chosen situations: ${situations}. This pattern groups the visible question, partial answers, concealed knowledge, revelation and the choices made with fuller information.`,
        next: `This pattern places the visible question early, a useful partial answer before the middle, the cost of concealment after the middle and the fullest answer before the final choice.`,
        question: `What secret protects something generous, and when does keeping it begin to cause more harm than disclosure?`
      },
      silica_architect: {
        alive: `Saved outside problem: ${world}. This pattern groups a human-scale problem, a proposed system, a working test, the person it overlooks and the redesign that follows.${customWorld}`,
        next: `This pattern places the need near the opening, a small test before the middle, an overlooked person or cost at the middle and a revised working proof before the ending.`,
        question: `What working proof can the characters build at human scale before anyone asks the world to adopt it?`
      },
      relationship_weaver: {
        alive: `Saved relationship: ${relationship}. This pattern groups each adult's independent life, distinct bonds, attraction, jealousy, care, privacy, agreements and honest exits.`,
        next: `This pattern places the first terms early, a new or changed bond near the middle, unequal consequences after the middle and a renegotiated constellation near the ending.`,
        question: `Whose quiet need is easiest for the group to overlook precisely because they rarely make trouble?`
      }
    };
    return counsel[agent.id];
  }

  function consultAgents() {
    if (!selectedAgentIds.size) {
      showToast("Choose at least one story pattern first");
      return;
    }
    const timestamp = nowIso();
    const invitedIds = Array.from(selectedAgentIds);
    invitedIds.forEach((id) => {
      const agent = getById(DATA.agents, id);
      const note = Object.assign({ agentId: id, createdAt: timestamp }, counselFor(agent));
      project.consultations = project.consultations.filter((item) => item.agentId !== id);
      project.consultations.push(note);
    });
    project.councilBlend = null;
    saveProject("Story-pattern comparison saved");
    renderConsultations();
    document.querySelector("#consultation").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderConsultations() {
    const list = document.querySelector("[data-consultation-list]");
    const empty = document.querySelector("[data-consultation-empty]");
    if (!list) return;
    const notes = project.consultations || [];
    empty.hidden = notes.length > 0 || Boolean(project.councilBlend);
    const blend = project.councilBlend;
    const blendHtml = blend ? (() => {
      const agents = blend.agentIds.map((id) => getById(DATA.agents, id));
      const primary = getById(DATA.arcTemplates, blend.primaryArcId);
      const borrowed = agents.slice(1).map((agent) => getById(DATA.arcTemplates, agent.arcId).label);
      return `<article class="council-blend">
        <div><span class="agent-avatar" aria-hidden="true">≋</span><div><small>Combined story shape</small><h3>${escapeHtml(primary.label)} with ${escapeHtml(joinNatural(borrowed))}</h3></div></div>
        <p>This earlier saved comparison uses one main shape and places turning points from the other selected patterns within it.</p>
        <div class="blend-tensions"><span>Main pattern: ${escapeHtml(getById(DATA.agents, primary.agentId).focus)}</span><span>Other pattern fields: ${escapeHtml(agents.slice(1).map((agent) => agent.focus).join(" "))}</span></div>
        <button class="button button-secondary button-small" type="button" data-use-council-blend>Choose this combined chapter pattern</button>
      </article>`;
    })() : "";
    list.innerHTML = blendHtml + notes.map((note) => {
      const agent = getById(DATA.agents, note.agentId);
      return `<article class="consultation-note">
        <header>
          <span class="agent-avatar" aria-hidden="true">${escapeHtml(agent.glyph)}</span>
          <h3>${escapeHtml(agent.name)}</h3>
          <small>${escapeHtml(agent.voice)}</small>
        </header>
        <div class="consultation-body">
          <article><strong>What you have already chosen</strong><p>${escapeHtml(note.alive)}</p></article>
          <article><strong>Where the turning points sit</strong><p>${escapeHtml(note.next)}</p></article>
          <article><strong>Question still open</strong><p>${escapeHtml(note.question)}</p></article>
        </div>
        <button class="button button-secondary button-small" type="button" data-use-agent-pattern="${escapeHtml(agent.arcId)}">Choose this chapter pattern</button>
      </article>`;
    }).join("");
    const useBlend = list.querySelector("[data-use-council-blend]");
    if (useBlend) {
      useBlend.addEventListener("click", () => {
        project.structureId = project.councilBlend.primaryArcId;
        if (!project.structureIds.includes(project.structureId)) project.structureIds.push(project.structureId);
        saveProject("Blended map selected");
        showToast("The combined shape is ready in the Book Plan");
        useBlend.textContent = "Combined shape selected";
      });
    }
    list.querySelectorAll("[data-use-agent-pattern]").forEach((button) => {
      button.addEventListener("click", () => {
        project.structureId = button.dataset.useAgentPattern;
        if (!project.structureIds.includes(project.structureId)) project.structureIds.push(project.structureId);
        project.councilBlend = null;
        saveProject("Chapter pattern chosen");
        list.querySelectorAll("[data-use-agent-pattern]").forEach((candidate) => { candidate.textContent = "Choose this chapter pattern"; });
        button.textContent = "Chosen for the Book Plan";
      });
    });
  }

  function initCouncil() {
    document.querySelector("[data-current-project-title]").textContent = project.title;
    document.querySelector("[data-select-all-agents]").addEventListener("click", () => {
      if (selectedAgentIds.size === DATA.agents.length) selectedAgentIds.clear();
      else selectedAgentIds = new Set(DATA.agents.map((agent) => agent.id));
      renderAgents();
      updateAgentCount();
    });
    document.querySelector("[data-consult-agents]").addEventListener("click", consultAgents);
    renderAgents();
    updateAgentCount();
    renderConsultations();
  }

  function populateArcControls() {
    const structure = document.querySelector("[data-arc-structure]");
    const cadence = document.querySelector("[data-gap-cadence]");
    const actPattern = document.querySelector("[data-act-pattern]");
    structure.innerHTML = `<option value=""${project.structureId ? "" : " selected"}>Choose a story shape</option>${DATA.arcTemplates.map((arc) => `<option value="${arc.id}"${project.structureId === arc.id ? " selected" : ""}>${escapeHtml(arc.label)}: ${escapeHtml(arc.bestFor.join(", "))}</option>`).join("")}`;
    cadence.innerHTML = `<option value=""${project.intimacyCadenceId ? "" : " selected"}>No private intimacy markers selected yet</option>${DATA.intimacyCadences.map((item) => `<option value="${item.id}"${project.intimacyCadenceId === item.id ? " selected" : ""}>${escapeHtml(item.label)}: ${escapeHtml(item.note)}</option>`).join("")}`;
    actPattern.innerHTML = `<option value=""${project.actPatternId ? "" : " selected"}>No acts or parts selected</option>${DATA.actPatterns.map((item) => `<option value="${item.id}"${project.actPatternId === item.id ? " selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}`;
    document.querySelector("[data-target-word-count]").value = project.targetWordCount ? String(project.targetWordCount) : "";
    document.querySelector("[data-chapter-count]").value = project.chapterCount ? String(project.chapterCount) : "";
    document.querySelector("[data-scenes-per-chapter]").value = project.scenesPerChapter ? String(project.scenesPerChapter) : "";
    document.querySelector("[data-words-per-page]").value = String(project.wordsPerPage || 275);
    document.querySelector("[data-act-count]").value = project.acts.length ? String(project.acts.length) : "";
    document.querySelector("[data-act-unit-label]").value = project.actUnitLabel || "Act";
    renderSizePresets();
    renderWritingBreakdown();
    renderActPlan();
    renderPatternStatus();
  }

  function formatPlanningNumber(value) {
    return Number.isFinite(value) ? Math.round(value).toLocaleString("en-AU") : "Not calculated yet";
  }

  function bookPlanMath(plan) {
    const source = plan || project;
    const targetWords = planningInteger(source.targetWordCount, 0, 500000, 0);
    const chapters = planningInteger(source.chapterCount, 0, 300, 0);
    const scenesPerChapter = planningInteger(source.scenesPerChapter, 0, 20, 0);
    const wordsPerPage = planningInteger(source.wordsPerPage, 100, 1000, 275);
    const totalScenes = chapters && scenesPerChapter ? chapters * scenesPerChapter : 0;
    return {
      targetWords,
      chapters,
      scenesPerChapter,
      wordsPerPage,
      totalScenes,
      wordsPerChapter: targetWords && chapters ? targetWords / chapters : 0,
      wordsPerScene: targetWords && totalScenes ? targetWords / totalScenes : 0,
      estimatedPages: targetWords ? targetWords / wordsPerPage : 0
    };
  }

  function actPlanBreakdown(plan, actsOverride) {
    const source = plan || project;
    const acts = Array.isArray(actsOverride) ? actsOverride : project.acts;
    if (!acts.length) return [];
    const maths = bookPlanMath(source);
    const weights = acts.map((act) => planningInteger(act.weight, 1, 1000, 1));
    const totalWeight = weights.reduce((total, weight) => total + weight, 0) || acts.length;
    const exactCounts = weights.map((weight) => maths.chapters ? (weight / totalWeight) * maths.chapters : 0);
    const chapterCounts = exactCounts.map((count) => Math.floor(count));
    let chaptersLeft = maths.chapters - chapterCounts.reduce((total, count) => total + count, 0);
    const remainderOrder = exactCounts.map((count, index) => ({ index, remainder: count - Math.floor(count) }))
      .sort((a, b) => b.remainder - a.remainder || a.index - b.index);
    for (let index = 0; index < chaptersLeft; index += 1) chapterCounts[remainderOrder[index % remainderOrder.length].index] += 1;
    let nextChapter = 1;
    return acts.map((act, index) => {
      const chapterCount = chapterCounts[index] || 0;
      const startChapter = chapterCount ? nextChapter : 0;
      const endChapter = chapterCount ? nextChapter + chapterCount - 1 : 0;
      nextChapter += chapterCount;
      const share = weights[index] / totalWeight;
      return {
        act,
        index,
        sharePercent: share * 100,
        chapterCount,
        startChapter,
        endChapter,
        sceneCount: chapterCount * maths.scenesPerChapter,
        targetWords: maths.targetWords ? maths.targetWords * share : 0
      };
    });
  }

  function actRangeLabel(item) {
    if (!item.chapterCount) return "No chapters placed at this working size";
    if (item.startChapter === item.endChapter) return `Chapter ${item.startChapter}`;
    return `Chapters ${item.startChapter} to ${item.endChapter}`;
  }

  function renderActPlan() {
    const container = document.querySelector("[data-act-plan]");
    const note = document.querySelector("[data-act-pattern-note]");
    if (!container || !note) return;
    const pattern = actPatternById(project.actPatternId);
    note.textContent = pattern
      ? pattern.note
      : "No acts or parts chosen. The chapters can remain one continuous plan.";
    if (!project.acts.length) {
      container.innerHTML = '<div class="act-plan-empty"><strong>No large sections yet.</strong><p>Choose a starting pattern only if acts or parts would help you see the book.</p></div>';
      return;
    }
    const maths = bookPlanMath();
    const distribution = actPlanBreakdown(project, project.acts);
    container.innerHTML = distribution.map((item) => `
      <article class="act-plan-card">
        <header>
          <span>${escapeHtml(project.actUnitLabel || "Act")} ${item.index + 1}</span>
          <strong>${escapeHtml(actRangeLabel(item))}</strong>
        </header>
        <div class="act-plan-fields">
          <label>Working name, optional
            <input type="text" maxlength="140" value="${escapeHtml(item.act.title)}" data-act-index="${item.index}" data-act-field="title">
          </label>
          <label>Relative size
            <input type="number" min="1" max="1000" step="1" inputmode="numeric" value="${item.act.weight}" data-act-index="${item.index}" data-act-field="weight">
          </label>
          <label class="wide">Question this section asks
            <textarea rows="2" maxlength="600" data-act-index="${item.index}" data-act-field="question">${escapeHtml(item.act.question)}</textarea>
          </label>
        </div>
        <p class="act-plan-data">Rough share ${formatPlanningNumber(item.sharePercent)}%${item.targetWords ? ` · about ${formatPlanningNumber(item.targetWords)} words` : ""}${item.chapterCount ? ` · ${item.chapterCount} chapter${item.chapterCount === 1 ? "" : "s"}` : ""}${maths.scenesPerChapter && item.sceneCount ? ` · about ${item.sceneCount} scenes` : ""}</p>
      </article>`).join("");
    container.querySelectorAll("[data-act-field]").forEach((field) => {
      field.addEventListener("input", (event) => {
        const act = project.acts[Number(event.target.dataset.actIndex)];
        if (!act) return;
        const key = event.target.dataset.actField;
        act[key] = key === "weight"
          ? planningInteger(event.target.value, 1, 1000, 1)
          : safeText(event.target.value, key === "title" ? 140 : 600);
        saveProject();
      });
      field.addEventListener("change", () => {
        renderActPlan();
        renderArcSummary();
        renderChapters();
      });
    });
  }

  function renderSizePresets() {
    const container = document.querySelector("[data-size-preset-grid]");
    if (!container) return;
    container.innerHTML = DATA.storyLengthPresets.map((preset) => `
      <button class="size-preset-card${project.storyLengthId === preset.id ? " is-selected" : ""}" type="button" data-size-preset="${preset.id}" aria-pressed="${project.storyLengthId === preset.id}">
        <strong>${escapeHtml(preset.label)}</strong>
        <span>${escapeHtml(preset.rangeLabel)}</span>
        <small>${escapeHtml(preset.sourceNote)}</small>
      </button>`).join("");
    container.querySelectorAll("[data-size-preset]").forEach((button) => {
      button.addEventListener("click", () => {
        const preset = DATA.storyLengthPresets.find((item) => item.id === button.dataset.sizePreset);
        if (!preset) return;
        project.storyLengthId = preset.id;
        if (preset.id !== "custom") {
          project.targetWordCount = preset.targetWords;
          project.chapterCount = preset.chapterCount;
          project.scenesPerChapter = preset.scenesPerChapter;
        }
        saveProject("Book-size pattern saved");
        populateArcControls();
        renderArcSummary();
        const selected = container.querySelector(`[data-size-preset="${preset.id}"]`);
        if (selected) selected.focus();
      });
    });
  }

  function renderWritingBreakdown() {
    const container = document.querySelector("[data-writing-breakdown]");
    if (!container) return;
    const maths = bookPlanMath();
    const rows = [
      ["Total draft", maths.targetWords ? `${formatPlanningNumber(maths.targetWords)} words` : "Enter a rough word target"],
      ["Chapters", maths.chapters ? formatPlanningNumber(maths.chapters) : "Enter a chapter count"],
      ["Total scenes", maths.totalScenes ? formatPlanningNumber(maths.totalScenes) : "Needs chapters and scenes per chapter"],
      ["Words per chapter", maths.wordsPerChapter ? `About ${formatPlanningNumber(maths.wordsPerChapter)}` : "Not calculated yet"],
      ["Words per scene", maths.wordsPerScene ? `About ${formatPlanningNumber(maths.wordsPerScene)}` : "Not calculated yet"],
      ["Estimated pages", maths.estimatedPages ? `About ${formatPlanningNumber(maths.estimatedPages)}` : "Not calculated yet"]
    ];
    container.innerHTML = rows.map(([label, value]) => `<article><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></article>`).join("");
  }

  function renderPatternStatus() {
    const container = document.querySelector("[data-pattern-status]");
    if (!container) return;
    if (!project.chapters.length) {
      container.textContent = "No chapter plan has been built. Your answers above remain editable.";
      return;
    }
    const built = project.builtBookPlan || currentBookPlanSnapshot(project.chapters.length);
    const changed = ["storyLengthId", "targetWordCount", "chapterCount", "scenesPerChapter", "wordsPerPage", "structureId", "intimacyCadenceId"]
      .some((key) => String(built[key] || "") !== String(project[key] || ""));
    if (changed) {
      const builtChapterLabel = `${project.chapters.length} ${project.chapters.length === 1 ? "chapter" : "chapters"}`;
      const targetChapterLabel = project.chapterCount
        ? `${project.chapterCount} ${project.chapterCount === 1 ? "chapter" : "chapters"}`
        : "open";
      container.textContent = `Current plan: ${builtChapterLabel}. Working chapter target: ${targetChapterLabel}. Some working answers differ from the built plan. Your existing chapter writing stays unchanged until you build the pattern again.`;
      return;
    }
    const chapterLabel = `${project.chapters.length} ${project.chapters.length === 1 ? "chapter" : "chapters"}`;
    container.textContent = `Current plan: ${chapterLabel}. Change the answers above freely. The existing chapter writing changes only when you build the pattern again.`;
  }

  function chapterThread(index) {
    return ["relationship", "mission", "mystery", "character", "protopia", "aftermath"][index % 6];
  }

  function chapterQuestion(kind, story) {
    const questions = {
      relationship: story.relationship ? `What changes between the adults here within ${story.relationship.label}?` : "What changes between the adults in this chapter?",
      mission: story.world ? `What becomes harder, clearer or more costly about ${story.world.label}?` : "Which outside problem becomes harder, clearer or more costly here?",
      mystery: "Which question is answered here, and which new question opens?",
      character: story.mode ? `What does ${story.mode.label} attempt here, and what does the result reveal about Tiggy?` : "What does Tiggy attempt here, and what does the result reveal about him?",
      protopia: "Who benefits from the attempted improvement here, and who is still left out?",
      aftermath: "Which emotional or practical consequence becomes visible here?"
    };
    return questions[kind];
  }

  function phaseName(percent) {
    return `Around ${percent}% of the book`;
  }

  function stableAuthorTasteNumber(value) {
    let hash = 0;
    String(value || "").split("").forEach((character) => {
      hash = ((hash * 31) + character.charCodeAt(0)) >>> 0;
    });
    return hash;
  }

  function authorTastePlacementCount(id, candidateCount) {
    const strength = authorTasteStrength(id);
    if (strength === "core") return candidateCount;
    if (strength === "recurring") return Math.max(2, Math.ceil(candidateCount / 3));
    return 1;
  }

  function authorTasteChapterKinds(taste, category) {
    const jobKinds = {
      premise: ["mission", "protopia", "mystery"],
      tiggy: ["character", "mission", "aftermath"],
      cast: ["character", "relationship", "mission"],
      relationship: ["relationship", "character", "aftermath"],
      world: ["protopia", "mission", "mystery"],
      mystery: ["mystery", "mission", "aftermath"],
      beat: category ? category.chapterKinds : [],
      prose: category ? category.chapterKinds : [],
      structure: category ? category.chapterKinds : [],
      ending: ["aftermath", "protopia", "relationship"],
      gap: []
    };
    return jobKinds[authorTasteJob(taste)] || (category ? category.chapterKinds : []);
  }

  function assignAuthorTastes(chapters, tastes) {
    chapters.forEach((chapter) => { chapter.tasteIds = []; });
    (tastes || []).forEach((taste) => {
      const category = authorTasteCategory(taste.categoryId);
      const chapterKinds = authorTasteChapterKinds(taste, category);
      const gapOnly = taste.placement === "gap" || authorTasteJob(taste) === "gap";
      let candidateIndexes = chapters.map((chapter, index) => ({ chapter, index }))
        .filter(({ chapter }) => gapOnly
          ? Boolean(chapter.gap)
          : chapterKinds.includes(chapter.kind))
        .map(({ index }) => index);
      if (!candidateIndexes.length && !gapOnly) candidateIndexes = chapters.map((chapter, index) => index);
      if (!candidateIndexes.length) return;
      const placementCount = Math.min(authorTastePlacementCount(taste.id, candidateIndexes.length), candidateIndexes.length);
      const start = stableAuthorTasteNumber(taste.id) % candidateIndexes.length;
      for (let placement = 0; placement < placementCount; placement += 1) {
        const spread = Math.floor((placement * candidateIndexes.length) / placementCount);
        const chapterIndex = candidateIndexes[(start + spread) % candidateIndexes.length];
        chapters[chapterIndex].tasteIds.push(taste.id);
      }
    });
  }

  function authorTasteSnapshotForChapters(chapters) {
    const ids = normaliseAuthorTasteIds([
      ...(project.authorTasteIds || []),
      ...(chapters || []).flatMap((chapter) => chapter.tasteIds || [])
    ]);
    return {
      ids,
      strengths: normaliseAuthorTasteStrengths(project.authorTasteStrengths, ids),
      jobs: normaliseAuthorTasteJobs(project.authorTasteJobs, ids),
      routes: normaliseAuthorTasteRoutes(project.authorTasteRoutes, ids, normaliseAuthorTasteJobs(project.authorTasteJobs, ids)),
      reframes: normaliseAuthorTasteReframes(project.authorTasteReframes, ids)
    };
  }

  function intimacyMarkerCount(cadence, chapterCount) {
    if (!cadence || !chapterCount) return 0;
    const exact = Number(cadence.countByChapters && cadence.countByChapters[chapterCount]);
    if (Number.isFinite(exact) && exact > 0) return Math.min(chapterCount, Math.round(exact));
    const spacing = Number(cadence.chaptersPerMarker) || 5;
    return Math.min(chapterCount, Math.max(1, Math.round(chapterCount / spacing)));
  }

  function generateArc() {
    const structureId = document.querySelector("[data-arc-structure]").value;
    const count = Number(document.querySelector("[data-chapter-count]").value);
    const cadenceId = document.querySelector("[data-gap-cadence]").value;
    const structure = DATA.arcTemplates.find((item) => item.id === structureId) || null;
    const cadence = DATA.intimacyCadences.find((item) => item.id === cadenceId) || null;
    if (!structure) {
      showToast("Choose a story shape before building the chapter plan");
      return;
    }
    if (!Number.isInteger(count) || count < 1 || count > 300) {
      showToast("Enter a whole chapter count between 1 and 300");
      return;
    }
    if (!project.targetWordCount || !project.scenesPerChapter) {
      showToast("Add a rough word target and scenes per chapter so the plan can show manageable writing chunks");
      return;
    }
    if (project.chapters.length && !window.confirm("Rebuild this chapter plan? Your current chapter edits will be kept under Earlier versions before a fresh plan replaces them.")) return;
    const previousProject = clone(project);
    if (project.chapters.length) {
      const archivedTastes = authorTasteSnapshotForChapters(project.chapters);
      const archivedBookPlan = project.builtBookPlan || currentBookPlanSnapshot(project.chapters.length);
      project.arcArchives = (project.arcArchives || []).concat([{
        archivedAt: nowIso(),
        chapters: clone(project.chapters),
        structureId: archivedBookPlan.structureId || project.structureId,
        intimacyCadenceId: archivedBookPlan.intimacyCadenceId || project.intimacyCadenceId,
        storyLengthId: archivedBookPlan.storyLengthId,
        targetWordCount: archivedBookPlan.targetWordCount,
        chapterCount: archivedBookPlan.chapterCount,
        scenesPerChapter: archivedBookPlan.scenesPerChapter,
        wordsPerPage: archivedBookPlan.wordsPerPage,
        actPatternId: project.actPatternId,
        actUnitLabel: project.actUnitLabel,
        acts: clone(project.acts),
        councilBlend: clone(project.councilBlend),
        authorTasteIds: archivedTastes.ids,
        authorTasteStrengths: archivedTastes.strengths,
        authorTasteJobs: archivedTastes.jobs,
        authorTasteRoutes: archivedTastes.routes,
        authorTasteReframes: archivedTastes.reframes
      }]).slice(-3);
    }
    project.chapterCount = count;
    project.structureId = structureId;
    if (!project.structureIds.includes(project.structureId)) project.structureIds.push(project.structureId);
    project.intimacyCadenceId = cadence ? cadence.id : "";
    const story = selectedStory();
    const oldGaps = (project.chapters || []).filter((chapter) => chapter.gap).map((chapter) => chapter.gap);
    const selectedBorrowArcs = story.structures.filter((arc) => arc.id !== structure.id);
    const councilArcs = project.councilBlend && project.councilBlend.primaryArcId === structure.id
      ? project.councilBlend.agentIds.map((id) => getById(DATA.agents, id)).map((agent) => getById(DATA.arcTemplates, agent.arcId)).filter((arc) => arc && arc.id !== structure.id)
      : [];
    const seenArcIds = new Set();
    const blendArcs = selectedBorrowArcs.concat(councilArcs).filter((arc) => {
      if (!arc || seenArcIds.has(arc.id)) return false;
      seenArcIds.add(arc.id);
      return true;
    });
    const borrowedMoments = blendArcs.map((arc, index) => ({
      arc,
      chapterIndex: Math.max(1, Math.min(count - 2, Math.round(((index + 1) * (count - 1)) / (blendArcs.length + 1))))
    }));
    const chapters = [];
    const seenBeat = new Set();
    for (let i = 0; i < count; i += 1) {
      const percent = count === 1 ? 0 : Math.round((i / (count - 1)) * 100);
      let beatIndex = 0;
      structure.beats.forEach((beat, index) => {
        if (beat.at <= percent) beatIndex = index;
      });
      const beat = structure.beats[beatIndex];
      const kind = chapterThread(i);
      const firstForBeat = !seenBeat.has(beatIndex);
      seenBeat.add(beatIndex);
      const singleChapter = count === 1;
      const title = singleChapter ? `${structure.label}: opening, turn and ending` : firstForBeat ? beat.label : `${chapterKindLabel(kind)} near ${percent}%`;
      const middleBeat = structure.beats.reduce((closest, candidate) => Math.abs(candidate.at - 50) < Math.abs(closest.at - 50) ? candidate : closest, structure.beats[0]);
      const primaryBeats = singleChapter
        ? [structure.beats[0], middleBeat, structure.beats[structure.beats.length - 1]]
        : [beat];
      const patternLayers = Array.from(new Map(primaryBeats.map((item) => [item.label, `${structure.label}: ${item.label}, around ${item.at}% of the book`])).values());
      borrowedMoments.filter((moment) => moment.chapterIndex === i).forEach(({ arc }) => {
        let borrowedBeat = arc.beats[0];
        arc.beats.forEach((candidate) => { if (candidate.at <= percent) borrowedBeat = candidate; });
        patternLayers.push(`${arc.label}: ${borrowedBeat.label}, placed beside this chapter`);
      });
      chapters.push({
        id: `chapter-${i + 1}`,
        number: i + 1,
        title,
        kind,
        phase: singleChapter ? "Whole story" : phaseName(percent),
        patternLayers,
        coachQuestion: singleChapter ? "What opens the story, turns it, and leaves the ending visibly changed inside this one chapter?" : chapterQuestion(kind, story),
        publicBeat: "",
        privateNotes: "",
        tasteIds: [],
        gap: null
      });
    }

    const eligibleGapIndexes = chapters.map((chapter, index) => index)
      .filter((index) => count <= 2 || (index > 0 && index < count - 1));
    const gapCount = Math.min(intimacyMarkerCount(cadence, count), eligibleGapIndexes.length);
    for (let g = 0; g < gapCount; g += 1) {
      const position = Math.min(eligibleGapIndexes.length - 1, Math.floor(((g + 1) * eligibleGapIndexes.length) / (gapCount + 1)));
      const chapterIndex = eligibleGapIndexes[position];
      const existing = oldGaps[g];
      chapters[chapterIndex].gap = existing || {
        id: `INTIMACY-${String(g + 1).padStart(2, "0")}`,
        protagonistId: DATA.protagonist.id,
        purposeId: "",
        customPurpose: "",
        participants: [
          { id: "participant-1", characterId: DATA.protagonist.id, name: "Tiggy Bestmann / Australian Sire", locked: true, adultConfirmed: true, consentConfirmed: false, exitReady: false, boundaries: "" },
          { id: "participant-2", characterId: "", name: "", locked: false, adultConfirmed: false, consentConfirmed: false, exitReady: false, boundaries: "" }
        ],
        relationshipBefore: "",
        relationshipAfter: "",
        knowledgeState: "",
        powerBalance: "",
        plotConsequence: "",
        bridgeIn: "",
        bridgeOut: ""
      };
    }
    assignAuthorTastes(chapters, story.authorTastes);
    project.chapters = chapters;
    project.builtBookPlan = currentBookPlanSnapshot(count);
    if (!saveProject("Fresh chapter plan saved")) {
      project = previousProject;
      renderArc();
      showToast("The fresh chapter plan could not be saved, so your earlier plan has been kept");
      return;
    }
    renderArc();
    showToast("The chapter plan has been refreshed");
  }

  function gapEditor(chapter) {
    const gap = chapter.gap;
    if (!gap) return "";
    const participants = (gap.participants || []).map((person, index) => `
      <article class="participant-row">
        <header>
          <strong>${person.locked ? "Tiggy's main character record" : `Adult participant ${index + 1}`}</strong>
          ${person.locked ? '<span class="identity-mini-lock">Identity anchor</span>' : `<button type="button" class="participant-remove" data-remove-participant="${index}" data-chapter-id="${chapter.id}" aria-label="Remove participant ${index + 1}">Remove</button>`}
        </header>
        ${person.locked ? "" : `<label>Character Studio link
          <select data-participant-character data-chapter-id="${chapter.id}" data-participant-index="${index}">
            <option value="">Unlinked participant</option>
            ${project.characters.filter((character) => !character.canonical).map((character) => `<option value="${escapeHtml(character.id)}"${person.characterId === character.id ? " selected" : ""}>${escapeHtml(character.name)}</option>`).join("")}
          </select>
        </label>`}
        <label>Name or story role
          <input type="text" maxlength="180" value="${escapeHtml(person.name)}" data-chapter-id="${chapter.id}" data-participant-index="${index}" data-participant-field="name"${person.locked ? " readonly" : ""} placeholder="Adult partner or member of the relationship group">
        </label>
        <div class="participant-checks">
          <label class="gap-check"><input type="checkbox"${person.adultConfirmed ? " checked" : ""} data-chapter-id="${chapter.id}" data-participant-index="${index}" data-participant-field="adultConfirmed"${person.locked ? " disabled" : ""}> Explicitly adult</label>
          <label class="gap-check"><input type="checkbox"${person.consentConfirmed ? " checked" : ""} data-chapter-id="${chapter.id}" data-participant-index="${index}" data-participant-field="consentConfirmed"> Current, informed and revocable consent</label>
          <label class="gap-check"><input type="checkbox"${person.exitReady ? " checked" : ""} data-chapter-id="${chapter.id}" data-participant-index="${index}" data-participant-field="exitReady"> Able to stop or leave without punishment</label>
        </div>
        <label>Important information and boundaries
          <textarea rows="2" maxlength="400" data-chapter-id="${chapter.id}" data-participant-index="${index}" data-participant-field="boundaries" placeholder="What this adult knows, chooses, limits or needs kept private">${escapeHtml(person.boundaries)}</textarea>
        </label>
      </article>`).join("");
    return `<details class="gap-planner">
      <summary>Plan what changes around private scene ${escapeHtml(gap.id)} <span>The explicit scene stays blank</span></summary>
      <div class="gap-editor">
        <label>Which pattern, if any, describes why this private scene matters?
          <select data-chapter-id="${chapter.id}" data-gap-field="purposeId">
            <option value=""${gap.purposeId ? "" : " selected"}>Leave open for now</option>
            ${DATA.intimacyGapPurposes.map((purpose) => `<option value="${purpose.id}"${gap.purposeId === purpose.id ? " selected" : ""}>${escapeHtml(purpose.label)}: ${escapeHtml(purpose.change)}</option>`).join("")}
          </select>
        </label>
        <label>Or what does this scene mean in this story?
          <textarea rows="2" maxlength="400" data-chapter-id="${chapter.id}" data-gap-field="customPurpose" placeholder="Write your own reason, or leave it open">${escapeHtml(gap.customPurpose || "")}</textarea>
        </label>
        <div class="participant-planner wide">
          <div class="participant-planner-heading"><strong>Each adult's choices and boundaries</strong><button class="button button-quiet button-small" type="button" data-add-participant data-chapter-id="${chapter.id}">Add adult participant</button></div>
          ${participants}
        </div>
        <label>What is true between them before
          <input type="text" maxlength="260" value="${escapeHtml(gap.relationshipBefore)}" data-chapter-id="${chapter.id}" data-gap-field="relationshipBefore" placeholder="What is emotionally true on entry?">
        </label>
        <label>What is true between them after
          <input type="text" maxlength="260" value="${escapeHtml(gap.relationshipAfter)}" data-chapter-id="${chapter.id}" data-gap-field="relationshipAfter" placeholder="What has changed?">
        </label>
        <label class="wide">What each adult knows
          <textarea rows="2" maxlength="500" data-chapter-id="${chapter.id}" data-gap-field="knowledgeState" placeholder="What material secrets does each adult know or not know?">${escapeHtml(gap.knowledgeState)}</textarea>
        </label>
        <label class="wide">Any power imbalance that could affect choice
          <textarea rows="2" maxlength="500" data-chapter-id="${chapter.id}" data-gap-field="powerBalance" placeholder="Commander, operative, financial, political, clinical, creator/dependent, or none">${escapeHtml(gap.powerBalance)}</textarea>
        </label>
        <label class="wide">What changes in the story afterwards
          <textarea rows="2" maxlength="500" data-chapter-id="${chapter.id}" data-gap-field="plotConsequence" placeholder="What clue, promise, fear, decision or public consequence carries forward?">${escapeHtml(gap.plotConsequence)}</textarea>
        </label>
        <label>Words before the private scene
          <textarea rows="2" maxlength="500" data-chapter-id="${chapter.id}" data-gap-field="bridgeIn" placeholder="Non-explicit transition only">${escapeHtml(gap.bridgeIn)}</textarea>
        </label>
        <label>Words after the private scene
          <textarea rows="2" maxlength="500" data-chapter-id="${chapter.id}" data-gap-field="bridgeOut" placeholder="Aftermath or next-morning transition">${escapeHtml(gap.bridgeOut)}</textarea>
        </label>
      </div>
    </details>`;
  }

  function renderArcSummary() {
    const container = document.querySelector("[data-arc-summary]");
    if (!container) return;
    const hasPlan = project.chapters.length > 0;
    const plan = hasPlan ? (project.builtBookPlan || currentBookPlanSnapshot(project.chapters.length)) : project;
    const gaps = project.chapters.filter((chapter) => chapter.gap).length;
    const maths = bookPlanMath(plan);
    const structure = DATA.arcTemplates.find((item) => item.id === (plan.structureId || project.structureId)) || null;
    const cadence = DATA.intimacyCadences.find((item) => item.id === (plan.intimacyCadenceId || project.intimacyCadenceId)) || null;
    const structureLabel = structure
      ? `${structure.label}${project.councilBlend && project.councilBlend.primaryArcId === structure.id ? ` + ${project.councilBlend.agentIds.length - 1} other pattern${project.councilBlend.agentIds.length === 2 ? "" : "s"}` : ""}`
      : "Not chosen yet";
    const chapterPlanLabel = hasPlan
      ? `${project.chapters.length} ${project.chapters.length === 1 ? "chapter" : "chapters"}`
      : "Not built yet";
    const numberLabel = hasPlan ? "Current" : "Working";
    const actLabel = project.acts.length
      ? `${project.acts.length} ${project.actUnitLabel || "Act"}${project.acts.length === 1 ? "" : "s"}`
      : "One continuous chapter plan";
    const stats = [
      [`${numberLabel} story shape`, structureLabel],
      ["Acts or parts", actLabel],
      ["Current chapter plan", chapterPlanLabel],
      [`${numberLabel} words per chapter`, maths.wordsPerChapter ? `About ${formatPlanningNumber(maths.wordsPerChapter)}` : "Waiting for numbers"],
      [`${numberLabel} words per scene`, maths.wordsPerScene ? `About ${formatPlanningNumber(maths.wordsPerScene)}` : "Waiting for numbers"],
      [`${numberLabel} estimated pages`, maths.estimatedPages ? `About ${formatPlanningNumber(maths.estimatedPages)}` : "Waiting for word target"],
      ["Private intimacy markers", hasPlan ? `${gaps} private marker${gaps === 1 ? "" : "s"}` : cadence ? cadence.label : "Not chosen yet"]
    ];
    container.innerHTML = stats.map(([label, value]) => `<article class="arc-stat"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></article>`).join("");
  }

  function chapterAuthorTasteHtml(chapter) {
    const tastes = (chapter.tasteIds || []).map((id) => (DATA.authorTastes || []).find((item) => item.id === id))
      .filter((item) => item && project.authorTasteIds.includes(item.id));
    if (!tastes.length) return "";
    return `<details class="chapter-author-dna">
      <summary>Things you love shaping this chapter <span>${tastes.length} idea${tastes.length === 1 ? "" : "s"}</span></summary>
      <div class="chapter-author-dna-list">
        ${tastes.map((taste) => {
          const category = authorTasteCategory(taste.categoryId);
          return `<article>
            <div><strong>${escapeHtml(taste.label)}</strong><span>${escapeHtml(authorTasteStrengthLabel(taste.id))}</span></div>
            <small>${escapeHtml(category ? category.label : "Story tastes")} · ${escapeHtml(authorTasteJobLabel(taste))}${taste.visibility === "private" ? " · private planning" : ""}${taste.placement === "gap" ? " · private intimacy marker" : ""}</small>
            ${authorTasteReframe(taste)
              ? `<p class="chapter-dna-direction">Your private reframe: ${escapeHtml(authorTasteReframe(taste))}</p>`
              : taste.sourcePrompt ? `<p class="chapter-dna-direction">Question: ${escapeHtml(taste.sourcePrompt)}</p>` : ""}
            ${authorTasteReframe(taste) ? '<small class="chapter-dna-reframed">Current private reframe</small>' : ""}
          </article>`;
        }).join("")}
      </div>
    </details>`;
  }

  function chapterKindLabel(kind) {
    return ({
      relationship: "Relationship",
      mission: "Outside problem",
      mystery: "Mystery or reveal",
      character: "Character",
      protopia: "Better-world system",
      aftermath: "Consequence"
    })[kind] || "Story movement";
  }

  function chapterPlacedIngredientLabels(chapter) {
    const story = selectedStory();
    let items = [];
    if (chapter.kind === "relationship") items = items.concat(story.relationships);
    if (chapter.kind === "mission") items = items.concat(story.worlds, story.tropes);
    if (chapter.kind === "mystery") items = items.concat(story.tropes, story.worlds);
    if (chapter.kind === "character") items = items.concat(story.modes, story.characters);
    if (chapter.kind === "protopia") items = items.concat(story.promises, story.worlds);
    if (chapter.kind === "aftermath") items = items.concat(story.relationships, story.ending ? [story.ending] : []);
    items = items.concat((chapter.tasteIds || []).map((id) => authorTasteById(id)).filter(Boolean));
    const labels = items.map((item) => safeText(item.label || item.name, 180)).filter(Boolean);
    return Array.from(new Set(labels));
  }

  function chapterCoachHtml(chapter) {
    const story = selectedStory();
    const patternLayers = chapter.patternLayers && chapter.patternLayers.length
      ? chapter.patternLayers
      : [`${chapter.phase || "Story position"}: ${chapter.title}`];
    const ingredients = chapterPlacedIngredientLabels(chapter);
    const question = chapter.coachQuestion || chapterQuestion(chapter.kind, story);
    return `<section class="chapter-coach" aria-label="Chapter pattern and question">
      <div class="chapter-coach-part">
        <small>Pattern position</small>
        <ul>${patternLayers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="chapter-coach-part">
        <small>Saved ingredients placed here</small>
        ${ingredients.length
          ? `<div class="chapter-ingredient-list">${ingredients.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`
          : "<p>No matching saved ingredient yet. This pattern position remains open.</p>"}
      </div>
      <div class="chapter-coach-part chapter-question">
        <small>Question to answer</small>
        <p>${escapeHtml(question)}</p>
      </div>
    </section>`;
  }

  function chapterCardHtml(chapter, index, maths, actItem) {
    const chapterWords = actItem && actItem.chapterCount && actItem.targetWords ? actItem.targetWords / actItem.chapterCount : maths.wordsPerChapter;
    const sceneWords = chapterWords && maths.scenesPerChapter ? chapterWords / maths.scenesPerChapter : maths.wordsPerScene;
    return `<article class="chapter-card${chapter.gap ? " is-gap" : ""}" data-chapter-card="${chapter.id}">
      <div class="chapter-number">${String(index + 1).padStart(2, "0")}</div>
      <div class="chapter-copy">
        <span class="chapter-kind">${chapter.gap ? `${escapeHtml(chapter.gap.id)} · private intimacy marker` : escapeHtml(chapterKindLabel(chapter.kind))}</span>
        <h3>${escapeHtml(chapter.title)}</h3>
        <p>${escapeHtml(chapter.phase)}</p>
        ${chapterWords && maths.chapters === project.chapters.length ? `<p class="chapter-size-line">About ${formatPlanningNumber(chapterWords)} words · ${maths.scenesPerChapter} scene${maths.scenesPerChapter === 1 ? "" : "s"} · about ${formatPlanningNumber(sceneWords)} words per scene</p>` : ""}
        ${chapterCoachHtml(chapter)}
        <label class="chapter-field-label">Your chapter summary
          <textarea rows="3" maxlength="1200" data-chapter-id="${chapter.id}" data-chapter-field="publicBeat">${escapeHtml(chapter.publicBeat)}</textarea>
          <span>Start blank. Answer the question above in your own words. This summary can enter the version for sharing.</span>
        </label>
        ${chapterAuthorTasteHtml(chapter)}
        <details class="private-chapter-notes">
          <summary>Private notes for details and spoilers, left out of the version for sharing</summary>
          <textarea rows="3" maxlength="2000" data-chapter-id="${chapter.id}" data-chapter-field="privateNotes" aria-label="Private notes for chapter ${index + 1}">${escapeHtml(chapter.privateNotes)}</textarea>
        </details>
      </div>
      <div class="chapter-tools" aria-label="Move chapter ${index + 1}">
        <button type="button" data-move-chapter="up" data-chapter-index="${index}" aria-label="Move chapter up"${index === 0 ? " disabled" : ""}>↑</button>
        <button type="button" data-move-chapter="down" data-chapter-index="${index}" aria-label="Move chapter down"${index === project.chapters.length - 1 ? " disabled" : ""}>↓</button>
      </div>
      ${gapEditor(chapter)}
    </article>`;
  }

  function renderChapters() {
    const list = document.querySelector("[data-chapter-list]");
    if (!list) return;
    const workingMaths = bookPlanMath();
    const maths = bookPlanMath(project.builtBookPlan || project);
    if (!project.chapters.length) {
      list.innerHTML = `<div class="arc-empty-state">
        <span class="arc-empty-mark" aria-hidden="true">01</span>
        <h3>No chapter pattern has been built yet.</h3>
        <p>Answer the size questions above, choose a story shape, then build the first editable pattern. Nothing is generated until you press the build button.</p>
        <div class="arc-empty-numbers">
          <span><small>Word target</small><strong>${workingMaths.targetWords ? formatPlanningNumber(workingMaths.targetWords) : "Open"}</strong></span>
          <span><small>Chapters</small><strong>${workingMaths.chapters || "Open"}</strong></span>
          <span><small>Scenes</small><strong>${workingMaths.totalScenes || "Open"}</strong></span>
        </div>
        <a class="button button-secondary" href="#book-size">Answer the book-size questions</a>
      </div>`;
      return;
    }
    const actPlanSource = Object.assign({}, project.builtBookPlan || project, { chapterCount: project.chapters.length });
    const acts = actPlanBreakdown(actPlanSource, project.acts);
    if (acts.length) {
      list.innerHTML = acts.map((item) => {
        const chapterIndexes = item.chapterCount
          ? Array.from({ length: item.chapterCount }, (_, offset) => item.startChapter - 1 + offset)
          : [];
        const chapterCards = chapterIndexes.map((chapterIndex) => chapterCardHtml(project.chapters[chapterIndex], chapterIndex, maths, item)).join("");
        return `<section class="act-chapter-group" data-act-group="${item.index}">
          <header class="act-chapter-heading">
            <div class="act-chapter-heading-top">
              <div><p class="eyebrow">${escapeHtml(project.actUnitLabel || "Act")} ${item.index + 1} of ${acts.length}</p><h3>${escapeHtml(item.act.title)}</h3></div>
              <p>${escapeHtml(actRangeLabel(item))}</p>
            </div>
            <div class="act-chapter-data">
              <span>Rough share ${formatPlanningNumber(item.sharePercent)}%</span>
              ${item.targetWords ? `<span>About ${formatPlanningNumber(item.targetWords)} words</span>` : ""}
              <span>${item.chapterCount} chapter${item.chapterCount === 1 ? "" : "s"}</span>
              ${item.sceneCount ? `<span>About ${item.sceneCount} scenes</span>` : ""}
            </div>
            <p><strong>Question:</strong> ${escapeHtml(item.act.question)}</p>
            <div class="act-summary-fields">
              <label>Your ${escapeHtml((project.actUnitLabel || "act").toLowerCase())} summary
                <textarea rows="2" maxlength="1400" data-act-output-index="${item.index}" data-act-output-field="summary" placeholder="Answer the section question in your own words. This can enter the version for sharing.">${escapeHtml(item.act.summary)}</textarea>
              </label>
              <details>
                <summary>Private notes for this large section</summary>
                <textarea rows="2" maxlength="2000" data-act-output-index="${item.index}" data-act-output-field="privateNotes">${escapeHtml(item.act.privateNotes)}</textarea>
              </details>
            </div>
          </header>
          <div class="act-chapters">${chapterCards || '<p class="archive-empty">No chapter falls inside this section at the current working size.</p>'}</div>
        </section>`;
      }).join("");
    } else {
      list.innerHTML = project.chapters.map((chapter, index) => chapterCardHtml(chapter, index, maths)).join("");
    }

    list.querySelectorAll("[data-act-output-field]").forEach((field) => {
      field.addEventListener("input", (event) => {
        const act = project.acts[Number(event.target.dataset.actOutputIndex)];
        if (!act) return;
        const key = event.target.dataset.actOutputField;
        act[key] = safeText(event.target.value, key === "summary" ? 1400 : 2000);
        saveProject();
      });
    });

    list.querySelectorAll("[data-chapter-field]").forEach((field) => {
      field.addEventListener("input", (event) => {
        const chapter = project.chapters.find((item) => item.id === event.target.dataset.chapterId);
        chapter[event.target.dataset.chapterField] = event.target.value;
        saveProject();
        if (event.target.dataset.chapterField === "publicBeat") renderValidation();
      });
    });
    list.querySelectorAll("[data-gap-field]").forEach((field) => {
      const eventName = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, (event) => {
        const chapter = project.chapters.find((item) => item.id === event.target.dataset.chapterId);
        const key = event.target.dataset.gapField;
        chapter.gap[key] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        saveProject();
        renderValidation();
      });
    });
    list.querySelectorAll("[data-participant-field]").forEach((field) => {
      const eventName = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, (event) => {
        const chapter = project.chapters.find((item) => item.id === event.target.dataset.chapterId);
        const person = chapter.gap.participants[Number(event.target.dataset.participantIndex)];
        const key = event.target.dataset.participantField;
        person[key] = event.target.type === "checkbox" ? event.target.checked : safeText(event.target.value, key === "name" ? 180 : 400);
        saveProject();
        renderValidation();
      });
    });
    list.querySelectorAll("[data-participant-character]").forEach((field) => {
      field.addEventListener("change", (event) => {
        const chapter = project.chapters.find((item) => item.id === event.target.dataset.chapterId);
        const person = chapter.gap.participants[Number(event.target.dataset.participantIndex)];
        person.characterId = event.target.value;
        const linked = project.characters.find((character) => character.id === person.characterId);
        if (linked) person.name = linked.name;
        saveProject("Character linked to private intimacy marker");
        renderChapters();
        const details = document.querySelector(`[data-chapter-card="${chapter.id}"] .gap-planner`);
        if (details) details.open = true;
        const replacement = document.querySelector(`[data-chapter-card="${chapter.id}"] [data-participant-index="${event.target.dataset.participantIndex}"][data-participant-character]`);
        if (replacement) replacement.focus();
        renderValidation();
      });
    });
    list.querySelectorAll("[data-add-participant]").forEach((button) => {
      button.addEventListener("click", () => {
        const chapter = project.chapters.find((item) => item.id === button.dataset.chapterId);
        const nextIndex = chapter.gap.participants.length;
        chapter.gap.participants.push({ id: `participant-${nextIndex + 1}`, characterId: "", name: "", locked: false, adultConfirmed: false, consentConfirmed: false, exitReady: false, boundaries: "" });
        saveProject("Adult participant added");
        renderChapters();
        const details = document.querySelector(`[data-chapter-card="${chapter.id}"] .gap-planner`);
        if (details) details.open = true;
        const nameField = document.querySelector(`[data-chapter-card="${chapter.id}"] [data-participant-index="${nextIndex}"][data-participant-field="name"]`);
        if (nameField) nameField.focus();
        renderValidation();
      });
    });
    list.querySelectorAll("[data-remove-participant]").forEach((button) => {
      button.addEventListener("click", () => {
        const chapter = project.chapters.find((item) => item.id === button.dataset.chapterId);
        const index = Number(button.dataset.removeParticipant);
        const person = chapter.gap.participants[index];
        if ((person.name || person.boundaries) && !window.confirm("Remove this participant from the private intimacy marker?")) return;
        chapter.gap.participants.splice(index, 1);
        chapter.gap.participants.forEach((item, itemIndex) => { item.id = `participant-${itemIndex + 1}`; });
        saveProject("Participant removed");
        renderChapters();
        const details = document.querySelector(`[data-chapter-card="${chapter.id}"] .gap-planner`);
        if (details) details.open = true;
        renderValidation();
      });
    });
    list.querySelectorAll("[data-move-chapter]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.chapterIndex);
        const target = button.dataset.moveChapter === "up" ? index - 1 : index + 1;
        if (target < 0 || target >= project.chapters.length) return;
        const movedId = project.chapters[index].id;
        const direction = button.dataset.moveChapter;
        [project.chapters[index], project.chapters[target]] = [project.chapters[target], project.chapters[index]];
        saveProject("Chapter order saved");
        renderChapters();
        const replacement = document.querySelector(`[data-chapter-card="${movedId}"] [data-move-chapter="${direction}"]`);
        if (replacement && !replacement.disabled) replacement.focus();
      });
    });
  }

  function activeRiffReviewGates(linkedOnly = false) {
    const active = [];
    (project.riffs || []).filter((riff) => riffIsShareable(riff) && (!linkedOnly || riff.narrativeId)).forEach((riff) => {
      const tool = riffToolById(riff.toolId);
      const narrative = universeNarrativeById(riff.narrativeId);
      (tool && tool.gates ? tool.gates : []).forEach((gateId) => active.push({
        key: `riff:${riff.id}:${gateId}`,
        gateId,
        context: `${tool.label}: ${riff.title}${narrative ? ` in ${narrative.title}` : ""}`
      }));
    });
    return active;
  }

  function activeUniverseReviewGates() {
    const active = [];
    (project.universe.narratives || []).filter((narrative) => narrative.includeInShareable && narrative.pattern).forEach((narrative) => {
      const pattern = narrative.pattern;
      const worldIds = new Set(pattern.worldIds || []);
      DATA.worldPressures.filter((world) => worldIds.has(world.id)).forEach((world) => (world.gates || []).forEach((gateId) => active.push({ key: `universe:${narrative.id}:world:${world.id}:${gateId}`, gateId, context: `${world.label} in ${narrative.title}` })));
      const tasteIds = new Set(pattern.authorTasteIds || []);
      DATA.authorTastes.filter((taste) => tasteIds.has(taste.id) && taste.visibility !== "private" && taste.placement !== "gap").forEach((taste) => (taste.gates || []).forEach((gateId) => active.push({ key: `universe:${narrative.id}:taste:${taste.id}:${gateId}`, gateId, context: `${taste.label} in ${narrative.title}` })));
    });
    active.push(...activeRiffReviewGates(true));
    const seen = new Set();
    return active.filter((item) => {
      if (seen.has(item.key)) return false;
      seen.add(item.key);
      return true;
    });
  }

  function activeReviewGates(includePrivate = true) {
    const story = selectedStory();
    const active = [];
    story.worlds.forEach((world) => (world.gates || []).forEach((gateId) => active.push({ key: `world:${world.id}:${gateId}`, gateId, context: world.label })));
    story.pinned.forEach((item) => (item.gates || []).forEach((gateId) => active.push({ key: `spark:${item.id}:${gateId}`, gateId, context: item.title })));
    story.authorTastes.filter((item) => includePrivate || item.visibility !== "private").forEach((item) => (item.gates || []).forEach((gateId) => active.push({ key: `taste:${item.id}:${gateId}`, gateId, context: item.label })));
    active.push(...activeUniverseReviewGates());
    active.push(...activeRiffReviewGates(false));
    const seen = new Set();
    return active.filter((item) => {
      if (seen.has(item.key)) return false;
      seen.add(item.key);
      return true;
    });
  }

  function gateIsReady(activeGate) {
    const record = project.reviewGates[activeGate.key];
    return Boolean(record && record.gateId === activeGate.gateId && record.confirmed && record.reviewer && record.date);
  }

  function validationResults() {
    const gaps = project.chapters.filter((chapter) => chapter.gap).map((chapter) => chapter.gap);
    const participants = gaps.flatMap((gap) => gap.participants || []);
    const canonicalCountWrong = gaps.some((gap) => (gap.participants || []).filter((person) => person.characterId === DATA.protagonist.id).length !== 1);
    const duplicateAlias = participants.some((person) => person.characterId !== DATA.protagonist.id && isProtagonistAlias(person.name));
    const identityOkay = project.protagonistId === DATA.protagonist.id && !canonicalCountWrong && !duplicateAlias;
    const results = [
      { state: identityOkay ? "ok" : "error", text: identityOkay ? "Tiggy Bestmann and Australian Sire use one main character record." : "A participant record accidentally splits or duplicates Tiggy Bestmann / Australian Sire." },
      { state: project.chapters.length ? "ok" : "warn", text: project.chapters.length ? "A chapter plan is ready to edit." : "Build a chapter plan when the story choices feel alive." }
    ];
    const story = selectedStory();
    const assignedTasteIds = new Set(project.chapters.flatMap((chapter) => chapter.tasteIds || []));
    const missingTasteIds = story.authorTastes.filter((item) => !assignedTasteIds.has(item.id));
    if (!story.authorTastes.length) {
      results.push({ state: "warn", text: "No favourite story ingredients are chosen yet. The handwritten worksheet ideas are available under Things I love in stories." });
    } else if (project.chapters.length && missingTasteIds.length) {
      results.push({ state: "warn", text: `${missingTasteIds.length} chosen story ingredient${missingTasteIds.length === 1 ? " has" : "s have"} not entered this chapter plan yet. Rebuild the plan to weave them in, or remove them from this story.` });
    } else if (project.chapters.length) {
      results.push({ state: "ok", text: `All ${story.authorTastes.length} chosen story ingredients have a visible place in the chapter plan.` });
    }
    if (!story.promise || !story.ending) {
      results.push({ state: "warn", text: "What readers can expect or the emotional ending is still open for you to choose." });
    } else if ((story.promise.id === "sci_fi_romance" || story.promise.id === "sci_fi_erotic_romance") && story.ending.id === "OPEN") {
      results.push({ state: "warn", text: "An open ending changes the hopeful romantic ending readers may expect. Keep it if that is the effect you want." });
    } else {
      results.push({ state: "ok", text: "The emotional ending matches what readers are being led to expect." });
    }
    if (!gaps.length && project.chapters.length) {
      results.push({ state: "warn", text: "No private intimacy markers are present. Rebuild the chapter plan if that was not intentional." });
    }
    const unnamed = participants.filter((person) => !String(person.name || "").trim()).length;
    const adultMissing = participants.filter((person) => !person.adultConfirmed).length;
    const consentMissing = participants.filter((person) => !person.consentConfirmed).length;
    const exitMissing = participants.filter((person) => !person.exitReady).length;
    const boundariesMissing = participants.filter((person) => !String(person.boundaries || "").trim()).length;
    const purposeMissing = gaps.filter((gap) => !gap.purposeId && !String(gap.customPurpose || "").trim()).length;
    const consequenceMissing = gaps.filter((gap) => !String(gap.plotConsequence || "").trim()).length;
    const relationshipMissing = gaps.filter((gap) => !String(gap.relationshipBefore || "").trim() || !String(gap.relationshipAfter || "").trim()).length;
    const safeguardMissing = gaps.filter((gap) => !String(gap.knowledgeState || "").trim() || !String(gap.powerBalance || "").trim()).length;
    const publicBeatMissing = project.chapters.filter((chapter) => !String(chapter.publicBeat || "").trim()).length;
    if (publicBeatMissing) results.push({ state: "error", text: `${publicBeatMissing} chapter${publicBeatMissing === 1 ? " needs" : "s need"} a short summary for the version for sharing. Older private notes are never copied into that field automatically.` });
    if (unnamed) results.push({ state: "error", text: `${unnamed} participant record${unnamed === 1 ? " needs" : "s need"} a name or clear story role.` });
    if (adultMissing) results.push({ state: "error", text: `${adultMissing} participant${adultMissing === 1 ? " needs" : "s need"} explicit adult confirmation.` });
    else if (participants.length) results.push({ state: "ok", text: "Every participant record explicitly confirms adulthood." });
    if (consentMissing) results.push({ state: "error", text: `${consentMissing} participant${consentMissing === 1 ? " needs" : "s need"} current and revocable consent confirmation.` });
    else if (participants.length) results.push({ state: "ok", text: "Every participant record confirms current, informed and revocable consent." });
    if (exitMissing) results.push({ state: "error", text: `${exitMissing} participant${exitMissing === 1 ? " needs" : "s need"} an explicit ability to stop or leave without punishment.` });
    if (boundariesMissing) results.push({ state: "error", text: `${boundariesMissing} participant${boundariesMissing === 1 ? " needs" : "s need"} important information and boundaries recorded.` });
    if (purposeMissing) results.push({ state: "warn", text: `${purposeMissing} private intimacy marker${purposeMissing === 1 ? " still has" : "s still have"} an open question about why it matters in the story.` });
    if (consequenceMissing) results.push({ state: "warn", text: `${consequenceMissing} private intimacy marker${consequenceMissing === 1 ? " still needs" : "s still need"} a story or relationship consequence.` });
    else if (gaps.length) results.push({ state: "ok", text: "Every private intimacy marker carries a consequence into the next scene." });
    if (relationshipMissing) results.push({ state: "error", text: `${relationshipMissing} private intimacy marker${relationshipMissing === 1 ? " needs" : "s need"} what is true between the adults before and after.` });
    if (safeguardMissing) results.push({ state: "error", text: `${safeguardMissing} private intimacy marker${safeguardMissing === 1 ? " needs" : "s need"} information and power safeguards. Write “none after review” where appropriate.` });
    const unreadyGates = activeReviewGates(false).filter((gate) => !gateIsReady(gate));
    if (unreadyGates.length) results.push({ state: "error", text: `${unreadyGates.length} check${unreadyGates.length === 1 ? " still needs" : "s still need"} a real person to review it before public sharing.` });
    else if (activeReviewGates(false).length) results.push({ state: "ok", text: "Every cultural, clinical, privacy, legal or rights check has a named reviewer and date." });
    results.push({ state: "ok", text: "The version for sharing removes private chapter notes and all private intimacy planning details." });
    return results;
  }

  function reviewGatesHtml() {
    const active = activeReviewGates(false);
    if (!active.length) return "";
    return `<div class="review-gates"><h3>Checks needed before public sharing</h3><p>Mark a check complete only after a real person has reviewed it. Add their name and the date.</p>${active.map((gate) => {
      const definition = DATA.reviewGateDefinitions[gate.gateId];
      const record = project.reviewGates[gate.key] || { gateId: gate.gateId, confirmed: false, reviewer: "", date: "" };
      const ready = gateIsReady(gate);
      return `<article class="review-gate-item${ready ? " is-ready" : ""}">
        <div><span class="source-band ${ready ? "band-grounded" : "band-care"}">${ready ? "Reviewed" : "Needs checking"}</span><strong>${escapeHtml(definition.label)}</strong><small>${escapeHtml(gate.context)}</small></div>
        <p>${escapeHtml(definition.reason)}</p>
        <label class="gap-check"><input type="checkbox" data-review-gate-key="${escapeHtml(gate.key)}" data-review-gate-id="${gate.gateId}" data-review-field="confirmed"${record.confirmed ? " checked" : ""}> Review completed by the relevant person or organisation</label>
        <label>Who reviewed this?<input type="text" maxlength="120" value="${escapeHtml(record.reviewer)}" data-review-gate-key="${escapeHtml(gate.key)}" data-review-gate-id="${gate.gateId}" data-review-field="reviewer" placeholder="Person or organisation"></label>
        <label>Review date<input type="date" value="${escapeHtml(record.date)}" data-review-gate-key="${escapeHtml(gate.key)}" data-review-gate-id="${gate.gateId}" data-review-field="date"></label>
      </article>`;
    }).join("")}</div>`;
  }

  function renderValidation() {
    const container = document.querySelector("[data-validation-results]");
    if (!container) return;
    const results = validationResults();
    container.innerHTML = `<div class="validation-list">${results.map((result) => `
      <div class="validation-item ${result.state}">
        <span class="validation-icon" aria-hidden="true">${result.state === "ok" ? "✓" : result.state === "warn" ? "!" : "×"}</span>
        <span>${escapeHtml(result.text)}</span>
      </div>`).join("")}</div>${reviewGatesHtml()}`;
    container.querySelectorAll("[data-review-field]").forEach((field) => {
      field.addEventListener("change", (event) => {
        const key = event.target.dataset.reviewGateKey;
        const gateId = event.target.dataset.reviewGateId;
        const record = project.reviewGates[key] || { gateId, confirmed: false, reviewer: "", date: "" };
        record.gateId = gateId;
        record[event.target.dataset.reviewField] = event.target.type === "checkbox" ? event.target.checked : safeText(event.target.value, 120);
        project.reviewGates[key] = record;
        saveProject();
        renderValidation();
      });
    });
    const safeButton = document.querySelector("[data-export-safe]");
    if (safeButton) {
      const blocked = results.some((result) => result.state === "error");
      safeButton.disabled = blocked;
      safeButton.title = blocked ? "Complete the red items above first, including adulthood, consent, identity and human review" : "Download the version for sharing";
    }
  }

  function renderArc() {
    const builtStructureId = project.chapters.length && project.builtBookPlan ? project.builtBookPlan.structureId : "";
    const structure = DATA.arcTemplates.find((item) => item.id === (builtStructureId || project.structureId)) || null;
    document.querySelector("[data-arc-title]").textContent = project.chapters.length && structure ? `${structure.label}: ${project.title}` : project.chapters.length ? project.title : "Your working chapter plan";
    const workspace = document.querySelector("[data-arc-workspace]");
    if (workspace) workspace.classList.toggle("is-empty", !project.chapters.length);
    populateArcControls();
    renderArcSummary();
    renderChapters();
    renderValidation();
    renderArcArchives();
  }

  function renderArcArchives() {
    const container = document.querySelector("[data-arc-archives]");
    if (!container) return;
    const archives = project.arcArchives || [];
    if (!archives.length) {
      container.innerHTML = '<p class="archive-empty">No earlier chapter plan is stored yet. Rebuilding a plan keeps up to three earlier versions here.</p>';
      return;
    }
    container.innerHTML = `<div class="archive-list">${archives.map((archive, index) => {
      const when = new Date(archive.archivedAt);
      const label = Number.isNaN(when.getTime()) ? "Earlier chapter plan" : when.toLocaleString("en-AU", { dateStyle: "medium", timeStyle: "short" });
      const gaps = archive.chapters.filter((chapter) => chapter.gap).length;
      const archiveStructure = archive.structureId ? getById(DATA.arcTemplates, archive.structureId) : null;
      const settingsLabel = archiveStructure ? archiveStructure.label : "Legacy recovery: story map not recorded";
      const sizeLabel = archive.targetWordCount ? ` · about ${formatPlanningNumber(archive.targetWordCount)} words` : "";
      const sectionLabel = archive.acts && archive.acts.length ? ` · ${archive.acts.length} ${archive.actUnitLabel || "act"}${archive.acts.length === 1 ? "" : "s"}` : " · continuous chapters";
      return `<article class="archive-item">
        <div><strong>${escapeHtml(label)}</strong><small>${escapeHtml(settingsLabel)} · ${archive.chapters.length} chapters${sizeLabel}${escapeHtml(sectionLabel)} · ${gaps} private intimacy marker${gaps === 1 ? "" : "s"}</small></div>
        <div class="archive-actions">
          <button class="button button-quiet button-small" type="button" data-download-archive="${index}">Download</button>
          <button class="button button-secondary button-small" type="button" data-restore-archive="${index}">Restore</button>
        </div>
      </article>`;
    }).join("")}</div>`;
    container.querySelectorAll("[data-download-archive]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.downloadArchive);
        const archive = project.arcArchives[index];
        if (!archive) return;
        const snapshot = clone(project);
        snapshot.chapters = clone(archive.chapters);
        snapshot.storyLengthId = archive.storyLengthId || "";
        snapshot.targetWordCount = archive.targetWordCount || 0;
        snapshot.chapterCount = archive.chapterCount || snapshot.chapters.length;
        snapshot.scenesPerChapter = archive.scenesPerChapter || 0;
        snapshot.wordsPerPage = archive.wordsPerPage || 275;
        snapshot.actPatternId = archive.actPatternId || "";
        snapshot.actUnitLabel = archive.actUnitLabel || "Act";
        snapshot.acts = clone(archive.acts || []);
        snapshot.builtBookPlan = {
          storyLengthId: snapshot.storyLengthId,
          targetWordCount: snapshot.targetWordCount,
          chapterCount: snapshot.chapterCount,
          scenesPerChapter: snapshot.scenesPerChapter,
          wordsPerPage: snapshot.wordsPerPage,
          structureId: archive.structureId || "",
          intimacyCadenceId: archive.intimacyCadenceId || ""
        };
        if (archive.structureId) snapshot.structureId = archive.structureId;
        if (archive.intimacyCadenceId) snapshot.intimacyCadenceId = archive.intimacyCadenceId;
        if (archive.structureId) snapshot.councilBlend = clone(archive.councilBlend);
        if (Array.isArray(archive.authorTasteIds)) {
          snapshot.authorTasteIds = clone(archive.authorTasteIds);
          snapshot.authorTasteStrengths = clone(archive.authorTasteStrengths || {});
          snapshot.authorTasteJobs = clone(archive.authorTasteJobs || {});
          snapshot.authorTasteRoutes = clone(archive.authorTasteRoutes || {});
          snapshot.authorTasteReframes = clone(archive.authorTasteReframes || {});
        }
        snapshot.arcArchives = [];
        snapshot.updatedAt = archive.archivedAt;
        downloadText(`${safeFileName(project.title)}-earlier-chapter-plan-${index + 1}.json`, JSON.stringify(snapshot, null, 2), "application/json;charset=utf-8");
        showToast("Earlier chapter plan downloaded");
      });
    });
    container.querySelectorAll("[data-restore-archive]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.restoreArchive);
        const archive = project.arcArchives[index];
        if (!archive || !window.confirm("Restore this earlier chapter plan? Your current plan will take its place under Earlier versions, so it will not be lost.")) return;
        const previousProject = clone(project);
        const currentTastes = authorTasteSnapshotForChapters(project.chapters);
        const currentBuiltBookPlan = project.builtBookPlan || currentBookPlanSnapshot(project.chapters.length);
        const currentArc = project.chapters.length ? {
          archivedAt: nowIso(),
          chapters: clone(project.chapters),
          structureId: currentBuiltBookPlan.structureId || project.structureId,
          intimacyCadenceId: currentBuiltBookPlan.intimacyCadenceId || project.intimacyCadenceId,
          storyLengthId: currentBuiltBookPlan.storyLengthId,
          targetWordCount: currentBuiltBookPlan.targetWordCount,
          chapterCount: currentBuiltBookPlan.chapterCount,
          scenesPerChapter: currentBuiltBookPlan.scenesPerChapter,
          wordsPerPage: currentBuiltBookPlan.wordsPerPage,
          actPatternId: project.actPatternId,
          actUnitLabel: project.actUnitLabel,
          acts: clone(project.acts),
          councilBlend: clone(project.councilBlend),
          authorTasteIds: currentTastes.ids,
          authorTasteStrengths: currentTastes.strengths,
          authorTasteJobs: currentTastes.jobs,
          authorTasteRoutes: currentTastes.routes,
          authorTasteReframes: currentTastes.reframes
        } : null;
        const remaining = project.arcArchives.filter((item, itemIndex) => itemIndex !== index);
        if (currentArc) remaining.push(currentArc);
        project.chapters = clone(archive.chapters);
        project.storyLengthId = archive.storyLengthId || "";
        project.targetWordCount = archive.targetWordCount || 0;
        project.chapterCount = archive.chapterCount || project.chapters.length;
        project.scenesPerChapter = archive.scenesPerChapter || 0;
        project.wordsPerPage = archive.wordsPerPage || 275;
        project.actPatternId = archive.actPatternId || "";
        project.actUnitLabel = archive.actUnitLabel || "Act";
        project.acts = clone(archive.acts || []);
        project.builtBookPlan = {
          storyLengthId: project.storyLengthId,
          targetWordCount: project.targetWordCount,
          chapterCount: project.chapterCount,
          scenesPerChapter: project.scenesPerChapter,
          wordsPerPage: project.wordsPerPage,
          structureId: archive.structureId || "",
          intimacyCadenceId: archive.intimacyCadenceId || ""
        };
        if (archive.structureId) project.structureId = archive.structureId;
        if (archive.structureId && !project.structureIds.includes(archive.structureId)) project.structureIds.push(archive.structureId);
        if (archive.intimacyCadenceId) project.intimacyCadenceId = archive.intimacyCadenceId;
        project.councilBlend = archive.structureId ? clone(archive.councilBlend) : project.councilBlend;
        if (Array.isArray(archive.authorTasteIds)) {
          project.authorTasteIds = clone(archive.authorTasteIds);
          project.authorTasteStrengths = clone(archive.authorTasteStrengths || {});
          project.authorTasteJobs = clone(archive.authorTasteJobs || {});
          project.authorTasteRoutes = clone(archive.authorTasteRoutes || {});
          project.authorTasteReframes = clone(archive.authorTasteReframes || {});
        }
        project.arcArchives = remaining.slice(-3);
        if (!saveProject("Earlier chapter plan restored")) {
          project = previousProject;
          renderArc();
          showToast("The earlier chapter plan could not be restored, so nothing was changed");
          return;
        }
        renderArc();
        showToast("Earlier chapter plan restored; the previous plan is still under Earlier versions");
      });
    });
  }

  function gapMarkdown(gap, safe) {
    if (safe) return `[PRIVATE INTIMACY MARKER ${gap.id}: SCENE INTENTIONALLY UNWRITTEN]`;
    const purpose = DATA.intimacyGapPurposes.find((item) => item.id === gap.purposeId) || null;
    const purposeText = gap.customPurpose || (purpose ? `${purpose.label}: ${purpose.change}` : "Still to be chosen or written");
    const participantLines = (gap.participants || []).flatMap((person, index) => [
      `Participant ${index + 1}: ${person.name || "Name still needed"}${person.characterId === DATA.protagonist.id ? " [Tiggy's main character record]" : ""}`,
      `- Explicitly adult: ${person.adultConfirmed ? "Yes" : "Needs confirmation"}`,
      `- Current, informed and revocable consent: ${person.consentConfirmed ? "Yes" : "Needs confirmation"}`,
      `- Able to stop or leave without punishment: ${person.exitReady ? "Yes" : "Needs confirmation"}`,
      `- Important information and boundaries: ${person.boundaries || "Still to be planned"}`
    ]);
    return [
      `[PRIVATE INTIMACY MARKER ${gap.id}: EXPLICIT SCENE LEFT UNWRITTEN]`,
      ...participantLines,
      `Why this scene matters: ${purposeText}`,
      `What is true between them before: ${gap.relationshipBefore || "Still to be planned"}`,
      `What each adult knows: ${gap.knowledgeState || "Still to be planned"}`,
      `Power imbalance and safeguard: ${gap.powerBalance || "Still to be reviewed"}`,
      `What is true between them after: ${gap.relationshipAfter || "Still to be planned"}`,
      `What changes in the story afterwards: ${gap.plotConsequence || "Still to be planned"}`,
      `Words before the private scene: ${gap.bridgeIn || "Still to be written"}`,
      `Words after the private scene: ${gap.bridgeOut || "Still to be written"}`,
      `[END PRIVATE INTIMACY MARKER ${gap.id}]`
    ].join("\n");
  }

  function authorTasteMarkdownLines(tastes, safe) {
    const included = visibleAuthorTastes(tastes, !safe);
    if (!included.length) return [safe ? "No favourite story ingredients are included in the version for sharing." : "No favourite story ingredients are chosen.", ""];
    const lines = [];
    groupedAuthorTastes(included).forEach(({ category, tastes: groupTastes }) => {
      lines.push(`### ${category.label}`, "");
      groupTastes.forEach((taste) => {
        const prompt = taste.sourcePrompt ? ` Question: ${taste.sourcePrompt}` : "";
        const reframe = !safe && authorTasteReframe(taste) ? ` Private reframe: ${authorTasteReframe(taste)}` : "";
        const band = taste.band ? ` [${DATA.bandLabels[taste.band] || taste.band}]` : "";
        const routes = authorTasteRouteIds(taste).map(authorTasteRouteLabel);
        lines.push(`- **${taste.label}** [${authorTasteStrengthLabel(taste.id)}, main chapter use: ${authorTasteJobLabel(taste)}${routes.length ? `, shapes: ${joinNatural(routes)}` : ""}]${band}${taste.review ? " [check transcription against source]" : ""}:${prompt}${reframe}`);
      });
      lines.push("");
    });
    return lines;
  }

  function chapterAuthorTasteMarkdownLines(chapter, safe) {
    const activeIds = new Set(project.authorTasteIds || []);
    const tastes = (chapter.tasteIds || []).map((id) => (DATA.authorTastes || []).find((item) => item.id === id))
      .filter((item) => item && activeIds.has(item.id) && (!safe || item.visibility !== "private"));
    if (!tastes.length) return [];
    return [
      "**Favourite story ingredients:**",
      "",
      ...tastes.map((taste) => {
        const category = authorTasteCategory(taste.categoryId);
        const prompt = taste.sourcePrompt ? ` Question: ${taste.sourcePrompt}` : "";
        const reframe = !safe && authorTasteReframe(taste) ? ` Private reframe: ${authorTasteReframe(taste)}` : "";
        return `- ${category ? category.label : "Story tastes"}, ${taste.label} [${authorTasteStrengthLabel(taste.id)}, ${authorTasteJobLabel(taste)}].${prompt}${reframe}`;
      }),
      ""
    ];
  }

  function projectMarkdown(safe) {
    const story = selectedStory();
    const componentSummary = (items, primary) => items.length
      ? joinNatural(items.map((item) => primary && item.id === primary.id ? `${item.label} (main choice)` : item.label))
      : "Not chosen yet";
    const lines = [
      `# ${project.title}`,
      "",
      safe ? "## Version for sharing" : "## Full working version",
      "",
      `Generated from the Australian Sire Story Forge on ${new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}.`,
      "",
      "## Identity details to keep consistent",
      "",
      "Tiggy Bestmann and Australian Sire are the same main character. Australian Sire is an earned side of Tiggy that becomes credible through real wins, kept promises and adult trust. The planner always treats them as one person.",
      "",
      "## Adult-content boundary",
      "",
      safe
        ? "This plan is intended exclusively for adult characters. Private intimacy markers remain unwritten here. Private planning separately records each participant's adulthood and current, informed and revocable consent. Body measurements, Aura Operating Zeitgeist (Aura O.Z.), prophecy, authority, destiny or telepathy cannot replace consent."
        : "This working plan is intended exclusively for adult characters. Each private intimacy marker records whether adulthood and current, informed and revocable consent have actually been confirmed. A missing confirmation is not approval to write the scene. Body measurements, Aura Operating Zeitgeist (Aura O.Z.), prophecy, authority, destiny or telepathy cannot replace consent.",
      "",
      "## Story-writing brief",
      "",
      ...buildBriefSections(!safe).flatMap((section) => [`**${section.label}:** ${section.text}`, ""]),
      ...universeMarkdownLines(safe),
      ...riffMarkdownLines(safe),
      "## Story choices",
      "",
      `- Favourite story ingredients: ${visibleAuthorTastes(story.authorTastes, !safe).length} included in this ${safe ? "version for sharing" : "full working version"}`,
      `- What readers can expect: ${componentSummary(story.promises, story.promise)}`,
      `- Sides of Tiggy: ${componentSummary(story.modes, story.mode)}`,
      `- How the relationships work: ${componentSummary(story.relationships, story.relationship)}`,
      `- Situations that change the story: ${story.tropes.length ? joinNatural(story.tropes.map((item) => item.label)) : "Not chosen yet"}`,
      `- Outside problems: ${componentSummary(story.worlds, story.world)}`,
      `- Story shapes: ${componentSummary(story.structures, story.structure)}`,
      `- How often intimacy changes the story: ${story.cadence ? story.cadence.label : "Not chosen yet"}`,
      `- Emotional ending: ${story.ending ? story.ending.label : "Not chosen yet"}`,
      "",
      "## Favourite story ingredients",
      "",
      ...authorTasteMarkdownLines(story.authorTastes, safe),
      "## Characters",
      ""
    ];

    const exportCharacters = safe
      ? project.characters.filter((character) => character.canonical || character.includeInShareable)
      : project.characters;
    exportCharacters.forEach((character) => lines.push(characterDossier(character, safe, 3), ""));
    if (!exportCharacters.length) lines.push("No character portraits selected for this export.", "");

    const sizeMarkdownLines = (plan, heading) => {
      const maths = bookPlanMath(plan);
      const lengthPreset = DATA.storyLengthPresets.find((item) => item.id === plan.storyLengthId) || null;
      const structure = DATA.arcTemplates.find((item) => item.id === plan.structureId) || null;
      const cadence = DATA.intimacyCadences.find((item) => item.id === plan.intimacyCadenceId) || null;
      return [
        heading,
        "",
        `- Story category: ${lengthPreset ? `${lengthPreset.label}, ${lengthPreset.rangeLabel}` : "Not chosen yet"}`,
        `- Rough total word target: ${maths.targetWords ? `${formatPlanningNumber(maths.targetWords)} words` : "Not chosen yet"}`,
        `- Planned chapters: ${maths.chapters || "Not chosen yet"}`,
        `- Scenes in most chapters: ${maths.scenesPerChapter || "Not chosen yet"}`,
        `- Total planned scenes: ${maths.totalScenes || "Not calculated yet"}`,
        `- About words per chapter: ${maths.wordsPerChapter ? formatPlanningNumber(maths.wordsPerChapter) : "Not calculated yet"}`,
        `- About words per scene: ${maths.wordsPerScene ? formatPlanningNumber(maths.wordsPerScene) : "Not calculated yet"}`,
        `- Estimated pages: ${maths.estimatedPages ? `${formatPlanningNumber(maths.estimatedPages)} at ${maths.wordsPerPage} words per page` : "Not calculated yet"}`,
        `- Acts or parts: ${project.acts.length ? `${project.acts.length} ${project.actUnitLabel || "Act"}${project.acts.length === 1 ? "" : "s"}` : "Not used; chapters remain continuous"}`,
        `- Story shape: ${structure ? structure.label : "Not chosen yet"}`,
        `- Private-intimacy pattern: ${cadence ? cadence.label : "Not chosen yet"}`,
        ""
      ];
    };
    const builtPlan = project.chapters.length ? (project.builtBookPlan || currentBookPlanSnapshot(project.chapters.length)) : project;
    const planChanged = project.chapters.length && ["storyLengthId", "targetWordCount", "chapterCount", "scenesPerChapter", "wordsPerPage", "structureId", "intimacyCadenceId"]
      .some((key) => String(builtPlan[key] || "") !== String(project[key] || ""));
    lines.push(...sizeMarkdownLines(builtPlan, project.chapters.length ? "## Current chapter-plan size" : "## Working book-size data"));
    if (planChanged) lines.push(...sizeMarkdownLines(project, "### Unbuilt working target"), "The current chapters remain linked to the Current chapter-plan size figures until the chapter pattern is rebuilt.", "");
    lines.push("These are editable planning figures. Printed pages vary with trim size, type, layout and screen.", "");

    lines.push("## Chapter plan", "");

    if (!project.chapters.length) {
      if (project.acts.length) {
        lines.push(`${project.acts.length} optional ${project.actUnitLabel || "act"}${project.acts.length === 1 ? " is" : "s are"} waiting for a chapter plan.`, "");
        actPlanBreakdown(project, project.acts).forEach((item) => {
          lines.push(`### ${project.actUnitLabel || "Act"} ${item.index + 1}: ${item.act.title}`, "", `- Rough share: ${formatPlanningNumber(item.sharePercent)}%`, `- Question: ${item.act.question}`, `- Your section summary: ${item.act.summary || "Still to be written."}`, "");
          if (!safe && item.act.privateNotes) lines.push("**Private notes:**", "", item.act.privateNotes, "");
        });
      }
      lines.push("No chapter plan has been built yet.", "");
    } else {
      const builtMaths = bookPlanMath(builtPlan);
      const pushChapter = (chapter, index, headingLevel, actItem) => {
        const patternLayers = chapter.patternLayers && chapter.patternLayers.length ? chapter.patternLayers : [`${chapter.phase || "Story position"}: ${chapter.title}`];
        const question = chapter.coachQuestion || chapterQuestion(chapter.kind, story);
        const chapterWords = actItem && actItem.chapterCount && actItem.targetWords ? actItem.targetWords / actItem.chapterCount : builtMaths.wordsPerChapter;
        const sceneWords = chapterWords && builtMaths.scenesPerChapter ? chapterWords / builtMaths.scenesPerChapter : builtMaths.wordsPerScene;
        lines.push(`${"#".repeat(headingLevel)} ${String(index + 1).padStart(2, "0")}. ${chapter.title}`, "", "**Pattern position:**", "", ...patternLayers.map((item) => `- ${item}`), "", `**Question to answer:** ${question}`, "", `**Your chapter summary:** ${chapter.publicBeat || "Still to be written."}`, "");
        if (chapterWords) lines.push(`Working chunk: about ${formatPlanningNumber(chapterWords)} words across ${builtMaths.scenesPerChapter} scene${builtMaths.scenesPerChapter === 1 ? "" : "s"}, about ${formatPlanningNumber(sceneWords)} words per scene.`, "");
        lines.push(...chapterAuthorTasteMarkdownLines(chapter, safe));
        if (!safe && chapter.privateNotes) lines.push("**Private notes for details and spoilers:**", "", chapter.privateNotes, "");
        if (chapter.gap) lines.push(gapMarkdown(chapter.gap, safe), "");
      };
      const acts = actPlanBreakdown(Object.assign({}, builtPlan, { chapterCount: project.chapters.length }), project.acts);
      if (!acts.length) {
        lines.push("Large story sections: Not used. This book has one continuous chapter plan.", "");
        project.chapters.forEach((chapter, index) => pushChapter(chapter, index, 3));
      } else {
        lines.push(`About ${formatPlanningNumber(builtMaths.targetWords)} words · ${acts.length} ${project.actUnitLabel || "act"}${acts.length === 1 ? "" : "s"} · ${project.chapters.length} chapters · about ${builtMaths.totalScenes || 0} scenes`, "");
        acts.forEach((item) => {
          lines.push(`### ${project.actUnitLabel || "Act"} ${item.index + 1}: ${item.act.title}`, "", `${actRangeLabel(item)}${item.targetWords ? ` · about ${formatPlanningNumber(item.targetWords)} words` : ""}${item.sceneCount ? ` · about ${item.sceneCount} scenes` : ""}`, "", `**Question:** ${item.act.question}`, "", `**Your section summary:** ${item.act.summary || "Still to be written."}`, "");
          if (!safe && item.act.privateNotes) lines.push("**Private notes for this large section:**", "", item.act.privateNotes, "");
          for (let offset = 0; offset < item.chapterCount; offset += 1) {
            const chapterIndex = item.startChapter - 1 + offset;
            pushChapter(project.chapters[chapterIndex], chapterIndex, 4, item);
          }
          if (!item.chapterCount) lines.push("No chapter falls inside this section at the current working size.", "");
        });
      }
    }

    if (!safe && project.consultations.length) {
      lines.push("## Story-pattern comparisons", "");
      project.consultations.forEach((note) => {
        const agent = getById(DATA.agents, note.agentId);
        lines.push(`### ${agent.name}`, "", `**What was already chosen:** ${note.alive}`, "", `**Where the turning points sit:** ${note.next}`, "", `**Question still open:** ${note.question}`, "");
      });
    }

    if (!safe && story.pinned.length) {
      lines.push("## Saved inspiration", "");
      story.pinned.forEach((item) => lines.push(`- ${item.title}: ${item.description}`));
      lines.push("");
    }

    const gates = activeReviewGates(!safe);
    if (gates.length) {
      lines.push("## Checks needed before public sharing", "");
      gates.forEach((gate) => {
        const definition = DATA.reviewGateDefinitions[gate.gateId];
        const record = project.reviewGates[gate.key];
        const status = gateIsReady(gate)
          ? `REVIEWED on ${record.date}${safe ? "" : ` by ${record.reviewer}`}`
          : "Needs checking";
        lines.push(`- ${definition.label}, ${gate.context}: ${status}`);
      });
      lines.push("");
    }

    lines.push("## Where ideas came from", "", "Ideas are labelled in the app as from a supplied source, proposed ideas, fiction inspired by a source, invented for the story or needing human review. Recheck current market, political, legal, medical, travel and engineering claims before factual public use. Real Country, First Nations knowledge and clinical material need appropriate human review and authority.", "");
    return lines.join("\n");
  }

  function downloadText(filename, text, type) {
    const blob = new Blob([text], { type: type || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function initArc() {
    const updateArcProgress = () => {
      const progress = document.querySelector(".core-progress");
      if (!progress) return;
      progress.querySelectorAll("a").forEach((link) => link.removeAttribute("aria-current"));
      const active = progress.querySelector('a[href="#book-size"]');
      if (active) active.setAttribute("aria-current", "step");
    };
    window.addEventListener("hashchange", updateArcProgress);
    updateArcProgress();
    populateArcControls();
    const planningFields = [
      ["[data-target-word-count]", "targetWordCount", 0, 500000],
      ["[data-chapter-count]", "chapterCount", 0, 300],
      ["[data-scenes-per-chapter]", "scenesPerChapter", 0, 20],
      ["[data-words-per-page]", "wordsPerPage", 100, 1000]
    ];
    planningFields.forEach(([selector, key, minimum, maximum]) => {
      const field = document.querySelector(selector);
      field.addEventListener("input", () => {
        const fallback = key === "wordsPerPage" ? 275 : 0;
        project[key] = field.value === "" ? fallback : planningInteger(field.value, minimum, maximum, fallback);
        if (key !== "wordsPerPage" && project.storyLengthId && project.storyLengthId !== "custom") {
          const preset = DATA.storyLengthPresets.find((item) => item.id === project.storyLengthId);
          if (!preset || project.targetWordCount !== preset.targetWords || project.chapterCount !== preset.chapterCount || project.scenesPerChapter !== preset.scenesPerChapter) {
            project.storyLengthId = "custom";
            renderSizePresets();
          }
        }
        saveProject();
        renderWritingBreakdown();
        renderActPlan();
        renderArcSummary();
        renderPatternStatus();
      });
    });
    document.querySelector("[data-act-pattern]").addEventListener("change", (event) => {
      const pattern = actPatternById(event.target.value);
      const nextCount = pattern ? (pattern.id === "custom" ? Math.max(1, project.acts.length || pattern.weights.length || 3) : pattern.weights.length) : 0;
      if (!confirmActReduction(nextCount)) {
        event.target.value = project.actPatternId;
        return;
      }
      if (!pattern) {
        project.actPatternId = "";
        project.acts = [];
      } else {
        const prior = clone(project.acts);
        project.actPatternId = pattern.id;
        project.actUnitLabel = pattern.unitLabel;
        project.acts = actsFromPattern(pattern.id, nextCount, prior);
      }
      saveProject("Act or part pattern saved");
      populateArcControls();
      renderArcSummary();
      renderChapters();
    });
    document.querySelector("[data-act-count]").addEventListener("change", (event) => {
      if (event.target.value === "") return;
      const count = planningInteger(event.target.value, 1, 12, Math.max(1, project.acts.length || 3));
      if (!confirmActReduction(count)) {
        event.target.value = project.acts.length ? String(project.acts.length) : "";
        return;
      }
      const rawActs = Array.from({ length: count }, (_, index) => project.acts[index] || {});
      project.actPatternId = "custom";
      if (!project.actUnitLabel) project.actUnitLabel = "Act";
      project.acts = normaliseActs(rawActs, project.actPatternId, project.actUnitLabel);
      saveProject("Number of acts or parts saved");
      populateArcControls();
      renderArcSummary();
      renderChapters();
    });
    const actUnitField = document.querySelector("[data-act-unit-label]");
    actUnitField.addEventListener("input", () => {
      project.actUnitLabel = safeText(actUnitField.value, 30) || "Act";
      saveProject();
    });
    actUnitField.addEventListener("change", () => {
      renderActPlan();
      renderArcSummary();
      renderChapters();
    });
    document.querySelector("[data-arc-structure]").addEventListener("change", (event) => {
      project.structureId = event.target.value;
      if (project.structureId && !project.structureIds.includes(project.structureId)) project.structureIds.push(project.structureId);
      saveProject("Story shape saved");
      renderArcSummary();
      renderPatternStatus();
    });
    document.querySelector("[data-gap-cadence]").addEventListener("change", (event) => {
      project.intimacyCadenceId = event.target.value;
      saveProject("Private-intimacy pattern saved");
      renderArcSummary();
      renderPatternStatus();
    });
    document.querySelector("[data-generate-arc]").addEventListener("click", generateArc);
    document.querySelector("[data-export-full]").addEventListener("click", () => {
      downloadText(`${safeFileName(project.title)}-full-working-version.md`, projectMarkdown(false), "text/markdown;charset=utf-8");
      showToast("Full working version downloaded");
    });
    document.querySelector("[data-export-safe]").addEventListener("click", () => {
      if (validationResults().some((result) => result.state === "error")) {
        showToast("Complete the red items above first, including adulthood, consent, identity and human review");
        return;
      }
      downloadText(`${safeFileName(project.title)}-version-for-sharing.md`, projectMarkdown(true), "text/markdown;charset=utf-8");
      showToast("Version for sharing downloaded");
    });
    document.querySelector("[data-export-json]").addEventListener("click", downloadProjectBackup);
    document.querySelector("[data-import-json]").addEventListener("change", async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 5 * 1024 * 1024) throw new Error("Backup is too large");
        const imported = JSON.parse(await file.text());
        const importedVersion = Number(imported && imported.version);
        if (!imported || typeof imported !== "object" || ![1, 2, 3, DATA.version].includes(importedVersion) || typeof imported.title !== "string" || !Array.isArray(imported.chapters)) throw new Error("Not a Story Forge backup");
        const candidate = normaliseProject(imported);
        if (!saveImportedProject(candidate)) throw new Error("Browser storage unavailable");
        renderArc();
        showToast("Project backup imported and checked");
      } catch (error) {
        showToast(error && error.message === "Browser storage unavailable" ? "The backup is valid, but this browser could not save it" : "That file is not a valid Story Forge backup");
      }
      event.target.value = "";
    });
    renderArc();
  }

  function saveImportedProject(candidate) {
    const previous = project;
    project = candidate;
    if (saveProject("Imported project saved")) return true;
    project = previous;
    return false;
  }

  function characterFieldDefinition(fieldId) {
    return characterFields().find((field) => field.id === fieldId) || null;
  }

  function characterOptionLabel(fieldId, value) {
    const field = characterFieldDefinition(fieldId);
    const option = field && (field.options || []).find((item) => item.value === value);
    return option ? option.label : value;
  }

  function characterDossier(character, safe, headingLevel = 1) {
    const heading = "#".repeat(Math.max(1, Math.min(6, headingLevel)));
    const lines = [
      `${heading} ${character.name}`,
      "",
      character.canonical ? "Tiggy Bestmann and Australian Sire are the same main character." : "Character profile.",
      ""
    ];
    DATA.characterGroups.forEach((group) => {
      const filled = group.fields.filter((field) => {
        if (safe && (field.private || !SAFE_CHARACTER_FIELD_IDS.has(field.id))) return false;
        return Boolean(character[field.id]);
      });
      if (!filled.length) return;
      lines.push(`## ${group.label}`, "");
      filled.forEach((field) => {
        const value = field.type === "select" ? characterOptionLabel(field.id, character[field.id]) : character[field.id];
        lines.push(`- ${field.label}: ${value}`);
      });
      lines.push("");
    });
    return lines.join("\n").trim();
  }

  function updateCharacterPreview(character) {
    const preview = document.querySelector("[data-character-preview]");
    if (!preview) return;
    preview.textContent = characterDossier(character, true);
  }

  function renderCharacterList() {
    const list = document.querySelector("[data-character-list]");
    if (!list) return;
    const searchField = document.querySelector("[data-character-search]");
    const search = (searchField ? searchField.value : "").trim().toLowerCase();
    const characters = project.characters.filter((character) => {
      const haystack = `${character.name} ${character.aliases} ${character.publicRole} ${character.storyRole}`.toLowerCase();
      return !search || haystack.includes(search);
    });
    if (!characters.length) {
      list.innerHTML = '<p class="character-empty">No characters match that search. The full roster is still saved.</p>';
      return;
    }
    list.innerHTML = characters.map((character) => {
      const role = characterOptionLabel("storyRole", character.storyRole) || "Leave open";
      return `<button class="character-list-item${character.id === activeCharacterId ? " is-active" : ""}" type="button" data-character-id="${escapeHtml(character.id)}"${character.id === activeCharacterId ? ' aria-current="true"' : ""}>
        <span>${character.canonical ? "◆" : "○"}</span>
        <strong>${escapeHtml(character.name)}</strong>
        <small>${escapeHtml(role)}${character.includeInShareable ? " · included in version for sharing" : ""}</small>
      </button>`;
    }).join("");
    list.querySelectorAll("[data-character-id]").forEach((button) => {
      button.addEventListener("click", () => {
        activeCharacterId = button.dataset.characterId;
        renderCharacterList();
        renderCharacterEditor();
        const heading = document.querySelector("[data-character-name]");
        if (heading && !heading.readOnly) heading.focus();
      });
    });
  }

  function characterFieldHtml(field, character) {
    const privateMark = field.private ? '<span class="private-field-mark">Private</span>' : "";
    if (field.type === "select") {
      return `<label class="character-field${field.private ? " is-private" : ""}"><span>${escapeHtml(field.label)}${privateMark}</span>
        <select data-character-field="${escapeHtml(field.id)}">
          ${(field.options || []).map((option) => `<option value="${escapeHtml(option.value)}"${character[field.id] === option.value ? " selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>`;
    }
    if (field.type === "text") {
      return `<label class="character-field${field.private ? " is-private" : ""}"><span>${escapeHtml(field.label)}${privateMark}</span>
        <input type="text" maxlength="300" value="${escapeHtml(character[field.id])}" data-character-field="${escapeHtml(field.id)}">
      </label>`;
    }
    return `<label class="character-field${field.private ? " is-private" : ""}"><span>${escapeHtml(field.label)}${privateMark}</span>
      <textarea rows="3" maxlength="2400" data-character-field="${escapeHtml(field.id)}">${escapeHtml(character[field.id])}</textarea>
    </label>`;
  }

  function characterAuthorTasteHtml(character) {
    const targetJob = character.canonical ? "tiggy" : "cast";
    const tastes = selectedStory().authorTastes.filter((taste) => authorTasteJob(taste) === targetJob);
    if (!tastes.length) return "";
    return `<details class="character-dna-bridge" open>
      <summary><span>Favourite story ingredients for ${character.canonical ? "Tiggy" : "supporting characters"}</span><small>${tastes.length} chosen idea${tastes.length === 1 ? "" : "s"}</small></summary>
      <p>${character.canonical ? "Use these ideas directly in Tiggy's profile." : "These are available for supporting characters. Apply each idea only to the person it genuinely serves."}</p>
      <div class="character-dna-list">${tastes.map((taste) => `<article>
        <div><strong>${escapeHtml(taste.label)}</strong><span>${escapeHtml(authorTasteStrengthLabel(taste.id))}</span></div>
        ${taste.sourcePrompt ? `<small>Question: ${escapeHtml(taste.sourcePrompt)}</small>` : ""}
        ${authorTasteReframe(taste) ? `<p>Your private reframe: ${escapeHtml(authorTasteReframe(taste))}</p>` : ""}
      </article>`).join("")}</div>
    </details>`;
  }

  function renderCharacterEditor() {
    const editor = document.querySelector("[data-character-editor]");
    if (!editor) return;
    let character = project.characters.find((item) => item.id === activeCharacterId);
    if (!character) {
      character = project.characters[0];
      activeCharacterId = character.id;
    }
    editor.innerHTML = `
      <header class="character-editor-heading">
        <div>
          <p class="eyebrow">${character.canonical ? "Main character identity anchor" : "Working character"}</p>
          <label class="character-name-field">Working name
            <input type="text" maxlength="180" value="${escapeHtml(character.name)}" data-character-name${character.canonical ? " readonly" : ""}>
          </label>
          ${character.canonical ? '<p class="character-lock-note">Tiggy Bestmann and Australian Sire remain one character record. Australian Sire is earned through Tiggy\'s real wins.</p>' : ""}
        </div>
        <div class="character-editor-actions">
          <label class="share-character"><input type="checkbox" data-character-share${character.includeInShareable ? " checked" : ""}${character.canonical ? " disabled" : ""}> Include this character portrait in the version for sharing</label>
          <button class="button button-secondary button-small" type="button" data-copy-character>Copy full character profile</button>
          <button class="button button-quiet button-small" type="button" data-copy-character-safe>Copy portrait for sharing</button>
          ${character.canonical ? "" : '<button class="button button-quiet button-small" type="button" data-duplicate-character>Duplicate as a variation</button>'}
          ${character.canonical ? "" : '<button class="button button-quiet button-small character-delete" type="button" data-delete-character>Remove character</button>'}
        </div>
      </header>
      ${characterAuthorTasteHtml(character)}
      <div class="character-groups">
        ${DATA.characterGroups.map((group, index) => `<details class="character-group"${index < 2 ? " open" : ""}>
          <summary><span>${escapeHtml(group.label)}</span><small>${escapeHtml(group.intro)}</small></summary>
          <div class="character-fields">${group.fields.map((field) => characterFieldHtml(field, character)).join("")}</div>
        </details>`).join("")}
      </div>
      <section class="character-preview-card">
        <p class="eyebrow">Character portrait for sharing</p>
        <p class="microcopy">Only the character portrait shown here can enter the version for sharing. The full character profile stays in the local working version.</p>
        <pre data-character-preview></pre>
      </section>`;

    const nameField = editor.querySelector("[data-character-name]");
    nameField.addEventListener("input", (event) => {
      character.name = safeText(event.target.value, 180) || "Unnamed character";
      character.updatedAt = nowIso();
      scheduleProjectSave();
      renderCharacterList();
      updateCharacterPreview(character);
    });
    editor.querySelectorAll("[data-character-field]").forEach((field) => {
      const eventName = field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, (event) => {
        const definition = characterFieldDefinition(event.target.dataset.characterField);
        character[definition.id] = safeText(event.target.value, definition.type === "text" ? 300 : 2400);
        character.updatedAt = nowIso();
        if (eventName === "change") saveProject();
        else scheduleProjectSave();
        updateCharacterPreview(character);
      });
    });
    const shareField = editor.querySelector("[data-character-share]");
    shareField.addEventListener("change", (event) => {
      character.includeInShareable = character.canonical || event.target.checked;
      saveProject("Character sharing choice saved");
      renderCharacterList();
    });
    editor.querySelector("[data-copy-character]").addEventListener("click", () => copyText(characterDossier(character, false), "Full character profile copied"));
    editor.querySelector("[data-copy-character-safe]").addEventListener("click", () => copyText(characterDossier(character, true), "Character portrait for sharing copied"));
    const duplicateButton = editor.querySelector("[data-duplicate-character]");
    if (duplicateButton) {
      duplicateButton.addEventListener("click", () => {
        const duplicate = clone(character);
        duplicate.id = newCharacterId();
        duplicate.canonical = false;
        duplicate.includeInShareable = false;
        duplicate.name = `${character.name} variation`;
        duplicate.createdAt = nowIso();
        duplicate.updatedAt = duplicate.createdAt;
        project.characters.push(duplicate);
        activeCharacterId = duplicate.id;
        saveProject("Character variation added");
        renderCharacters();
        const replacement = document.querySelector("[data-character-name]");
        if (replacement) replacement.focus();
      });
    }
    const removeButton = editor.querySelector("[data-delete-character]");
    if (removeButton) {
      removeButton.addEventListener("click", () => {
        const allChapterSets = [project.chapters].concat((project.arcArchives || []).map((archive) => archive.chapters || []));
        const references = allChapterSets.flatMap((chapters) => chapters.flatMap((chapter) => chapter.gap ? chapter.gap.participants : [])).filter((person) => person.characterId === character.id);
        const narrativeReferences = (project.universe.narratives || []).filter((narrative) => (narrative.castIds || []).includes(character.id));
        const riffReferences = (project.riffs || []).filter((riff) => (riff.characterIds || []).includes(character.id));
        const details = [];
        if (references.length) details.push(`unlink ${references.length} private intimacy reference${references.length === 1 ? "" : "s"} while keeping the participant names`);
        if (narrativeReferences.length) details.push(`remove them from ${narrativeReferences.length} connected stor${narrativeReferences.length === 1 ? "y" : "ies"}`);
        if (riffReferences.length) details.push(`remove them from ${riffReferences.length} idea card${riffReferences.length === 1 ? "" : "s"}`);
        const detail = details.length ? ` This will ${joinNatural(details)}.` : "";
        if (!window.confirm(`Remove ${character.name} from the Character Studio?${detail}`)) return;
        references.forEach((person) => { person.characterId = ""; });
        narrativeReferences.forEach((narrative) => { narrative.castIds = narrative.castIds.filter((id) => id !== character.id); });
        riffReferences.forEach((riff) => { riff.characterIds = riff.characterIds.filter((id) => id !== character.id); });
        project.characters = project.characters.filter((item) => item.id !== character.id);
        activeCharacterId = project.characters[0].id;
        saveProject("Character removed");
        renderCharacters();
      });
    }
    updateCharacterPreview(character);
  }

  function renderCharacters() {
    const count = document.querySelector("[data-character-count]");
    if (count) count.textContent = String(project.characters.length);
    renderCharacterList();
    renderCharacterEditor();
  }

  function initCharacters() {
    const search = document.querySelector("[data-character-search]");
    search.addEventListener("input", renderCharacterList);
    const seed = document.querySelector("[data-character-seed]");
    seed.innerHTML = DATA.characterSeeds.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("");
    document.querySelector("[data-add-character]").addEventListener("click", () => {
      const character = makeOpenCharacter(seed.value);
      project.characters.push(character);
      activeCharacterId = character.id;
      saveProject("Character added");
      renderCharacters();
      const nameField = document.querySelector("[data-character-name]");
      if (nameField) nameField.focus();
    });
    renderIdeaMapGroups();
    renderCharacters();
  }

  function renderIdeaMapGroups() {
    const container = document.querySelector("[data-idea-map-groups]");
    if (!container) return;
    container.innerHTML = DATA.lifeLogIdeaGroups.map((group) => `<details class="idea-map-card">
      <summary>
        <span>${escapeHtml(group.label)}</span>
        <small>${escapeHtml(group.purpose)}</small>
      </summary>
      <div class="idea-map-body">
        <span class="idea-map-shape">${escapeHtml(group.shape || "Open grouping")}</span>
        <p><strong>How to use this group</strong>${escapeHtml(group.direction)}</p>
        <ul>${group.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}</ul>
        <div class="idea-map-meta">
          <span>${escapeHtml(group.sourceRange)}</span>
          ${group.rightsNote ? `<span>${escapeHtml(group.rightsNote)}</span>` : ""}
        </div>
        <button class="button button-quiet button-small" type="button" data-copy-idea-map="${escapeHtml(group.id)}">Copy these prompts</button>
      </div>
    </details>`).join("");
    container.querySelectorAll("[data-copy-idea-map]").forEach((button) => {
      button.addEventListener("click", () => {
        const group = DATA.lifeLogIdeaGroups.find((item) => item.id === button.dataset.copyIdeaMap);
        if (!group) return;
        copyText(`${group.label}\n\n${group.prompts.map((prompt) => `- ${prompt}`).join("\n")}`, "Idea-map prompts copied");
      });
    });
  }

  function universeNarrativeFormatLabel(id) {
    return ((DATA.universeNarrativeFormats || []).find((item) => item.id === id) || { label: "Story" }).label;
  }

  function universeConnectionTypeLabel(id) {
    return ((DATA.universeConnectionTypes || []).find((item) => item.id === id) || { label: "Connects to" }).label;
  }

  function universeNarrativeById(id) {
    return (project.universe.narratives || []).find((item) => item.id === id) || null;
  }

  function captureCurrentForgePattern() {
    return normaliseForgePattern({
      capturedAt: nowIso(),
      promiseId: project.promiseId,
      promiseIds: project.promiseIds,
      modeId: project.modeId,
      modeIds: project.modeIds,
      relationshipId: project.relationshipId,
      relationshipIds: project.relationshipIds,
      tropeIds: project.tropeIds,
      authorTasteIds: project.authorTasteIds,
      authorTasteStrengths: project.authorTasteStrengths,
      authorTasteJobs: project.authorTasteJobs,
      authorTasteRoutes: project.authorTasteRoutes,
      tasteRouteModelVersion: 2,
      authorTasteReframes: project.authorTasteReframes,
      worldId: project.worldId,
      worldIds: project.worldIds,
      structureId: project.structureId,
      structureIds: project.structureIds,
      intimacyCadenceId: project.intimacyCadenceId,
      endingId: project.endingId,
      pinnedInspiration: project.pinnedInspiration,
      custom: project.custom
    });
  }

  function applyForgePattern(pattern) {
    const normalised = normaliseForgePattern(pattern);
    if (!normalised) return false;
    [
      "promiseId", "promiseIds", "modeId", "modeIds", "relationshipId", "relationshipIds",
      "tropeIds", "authorTasteIds", "authorTasteStrengths", "authorTasteJobs", "authorTasteRoutes", "tasteRouteModelVersion",
      "authorTasteReframes", "worldId", "worldIds", "structureId", "structureIds",
      "intimacyCadenceId", "endingId", "pinnedInspiration", "custom"
    ].forEach((key) => { project[key] = clone(normalised[key]); });
    return true;
  }

  function idsToLabels(options, ids) {
    const selected = new Set(ids || []);
    return (options || []).filter((item) => selected.has(item.id)).map((item) => item.label || item.title);
  }

  function idsToPatternLabels(options, ids, primaryId) {
    const selected = new Set(ids || []);
    return (options || []).filter((item) => selected.has(item.id)).map((item) => `${item.label || item.title}${item.id === primaryId ? " (main choice)" : ""}`);
  }

  function patternTasteJob(pattern, taste) {
    return (pattern.authorTasteJobs || {})[taste.id] || taste.storyJob || defaultAuthorTasteJob(taste);
  }

  function patternIngredientGroups(pattern, safe = false) {
    if (!pattern) return [];
    const groups = [];
    const selectedTasteIds = new Set(pattern.authorTasteIds || []);
    const tastes = (DATA.authorTastes || []).filter((item) => selectedTasteIds.has(item.id) && (!safe || (item.visibility !== "private" && item.placement !== "gap")));
    const jobs = DATA.authorTasteJobOptions || [];
    jobs.forEach((job) => {
      const values = tastes.filter((taste) => patternTasteJob(pattern, taste) === job.id).flatMap((taste) => {
        const strength = (pattern.authorTasteStrengths || {})[taste.id] || "spark";
        const routes = Array.isArray((pattern.authorTasteRoutes || {})[taste.id])
          ? (pattern.authorTasteRoutes || {})[taste.id].map(authorTasteRouteLabel)
          : [];
        const result = [`${taste.label} [${{ spark: "use once", recurring: "bring it back", core: "shape the whole story" }[strength] || "use once"}${routes.length ? `, shapes: ${joinNatural(routes)}` : ""}]`];
        const reframe = !safe ? safeText((pattern.authorTasteReframes || {})[taste.id], 1000).trim() : "";
        if (reframe) result.push(`${taste.label}, private reframe: ${reframe}`);
        return result;
      });
      if (values.length) groups.push({ label: `Favourite story ingredients for ${job.label.toLowerCase()}`, values });
    });
    groups.push(
      { label: "What readers can expect", values: idsToPatternLabels(DATA.shelfPromises, pattern.promiseIds, pattern.promiseId) },
      { label: "Sides of Tiggy", values: idsToPatternLabels(DATA.protagonistModes, pattern.modeIds, pattern.modeId) },
      { label: "How the relationships work", values: idsToPatternLabels(DATA.relationshipEngines, pattern.relationshipIds, pattern.relationshipId) },
      { label: "Situations that change the story", values: idsToLabels(DATA.tropes, pattern.tropeIds) },
      { label: "Outside problems", values: idsToPatternLabels(DATA.worldPressures, pattern.worldIds, pattern.worldId) },
      { label: "Story shapes", values: idsToPatternLabels(DATA.arcTemplates, pattern.structureIds, pattern.structureId) },
      { label: "How often intimacy changes the story", values: idsToLabels(DATA.intimacyCadences, [pattern.intimacyCadenceId]) },
      { label: "Emotional ending", values: idsToLabels(DATA.endingOptions, [pattern.endingId]) }
    );
    if (!safe) {
      const pinned = idsToLabels(DATA.inspiration, pattern.pinnedInspiration);
      if (pinned.length) groups.push({ label: "Pinned sparks", values: pinned });
      const customValues = (DATA.forgeSteps || []).map((step) => {
        const value = safeText((pattern.custom || {})[step.id], 800).trim();
        return value ? `${step.shortTitle || step.title}: ${value}` : "";
      }).filter(Boolean);
      if (customValues.length) groups.push({ label: "Private Story Choices notes", values: customValues });
    }
    return groups.filter((group) => group.values.length);
  }

  function patternSignalSummary(pattern) {
    if (!pattern) return [];
    const selectedTasteIds = new Set(pattern.authorTasteIds || []);
    return (DATA.authorTasteJobOptions || []).map((job) => ({
      label: job.label,
      count: (DATA.authorTastes || []).filter((taste) => selectedTasteIds.has(taste.id) && patternTasteJob(pattern, taste) === job.id).length
    })).filter((item) => item.count);
  }

  function universePatternMarkdownLines(pattern, safe) {
    if (!pattern) return [];
    const lines = [`- Story-choice combination saved: ${safe ? "only ingredients approved for sharing" : pattern.capturedAt || "time not recorded"}`];
    patternIngredientGroups(pattern, safe).forEach((group) => lines.push(`  - ${group.label}: ${group.values.join(", ")}`));
    return lines;
  }

  function universeMarkdownLines(safe, standalone = false) {
    const universe = project.universe;
    const narratives = (universe.narratives || []).filter((item) => !safe || item.includeInShareable);
    const visibleIds = new Set(narratives.map((item) => item.id));
    const connections = (universe.connections || []).filter((item) => visibleIds.has(item.fromId) && visibleIds.has(item.toId));
    const universeTitle = universe.title || "Untitled story universe";
    const shareOverview = !safe || universe.includeOverviewInShareable;
    const lines = [standalone ? `# ${shareOverview ? universeTitle : "Story universe"}` : "## Story universe", ""];
    if (!safe || universe.includeOverviewInShareable) {
      if (!standalone) lines.push(`### ${universeTitle}`, "");
      if (universe.premise) lines.push(universe.premise, "");
      if (universe.homeAnchor) lines.push(`- Home anchor: ${universe.homeAnchor}`);
      if (universe.travelRule) lines.push(`- Travel and hand-off rhythm: ${universe.travelRule}`);
      if (universe.homeAnchor || universe.travelRule) lines.push("");
    } else {
      lines.push("The private universe overview is not included in this version for sharing.", "");
    }
    if (!narratives.length) {
      lines.push(safe ? "No stories are included in the version for sharing." : "No stories have been added yet.", "");
      return lines;
    }
    narratives.forEach((narrative, index) => {
      lines.push(`### ${index + 1}. ${narrative.title}`, "", `- Format: ${universeNarrativeFormatLabel(narrative.format)}`);
      if (narrative.timeWindow) lines.push(`- Time window: ${narrative.timeWindow}`);
      if (narrative.lead) lines.push(`- Main character or group carrying this story: ${narrative.lead}`);
      if (narrative.route) lines.push(`- Main route or place: ${narrative.route}`);
      if (narrative.premise) lines.push(`- What this story is about: ${narrative.premise}`);
      if (narrative.relationshipMotion) lines.push(`- Relationship movement: ${narrative.relationshipMotion}`);
      if (narrative.earnedWin) lines.push(`- Earned win or capability left behind: ${narrative.earnedWin}`);
      if (narrative.auraRole) lines.push(`- Aura O.Z. role: ${narrative.auraRole}`);
      if (narrative.crystalCityThread) lines.push(`- Crystal City thread: ${narrative.crystalCityThread}`);
      if (narrative.handoff) lines.push(`- Consequence or hand-off: ${narrative.handoff}`);
      const cast = (narrative.castIds || []).map((id) => project.characters.find((character) => character.id === id)).filter((character) => character && (!safe || character.canonical || character.includeInShareable));
      if (cast.length) lines.push(`- Characters carried here: ${cast.map((character) => character.name).join(", ")}`);
      lines.push(...universePatternMarkdownLines(narrative.pattern, safe));
      const riffs = linkedRiffs(narrative.id, safe);
      if (riffs.length) lines.push(`- Linked idea cards: ${riffs.map((riff) => riff.title).join(", ")}`);
      lines.push("");
    });
    if (connections.length) {
      lines.push("### Connections", "");
      connections.forEach((connection) => {
        const from = universeNarrativeById(connection.fromId);
        const to = universeNarrativeById(connection.toId);
        lines.push(`- ${from.title} ${universeConnectionTypeLabel(connection.type).toLowerCase()} ${to.title}${connection.note ? `: ${connection.note}` : ""}`);
      });
      lines.push("");
    }
    return lines;
  }

  function renderUniverseOverview() {
    const container = document.querySelector("[data-universe-overview]");
    if (!container) return;
    const universe = project.universe;
    container.innerHTML = `
      <label>Universe working title<input type="text" maxlength="180" value="${escapeHtml(universe.title)}" data-universe-field="title"></label>
      <label class="wide">What connects this universe?<textarea rows="3" maxlength="2000" data-universe-field="premise">${escapeHtml(universe.premise)}</textarea></label>
      <label>Recurring home anchor<textarea rows="3" maxlength="1200" data-universe-field="homeAnchor">${escapeHtml(universe.homeAnchor)}</textarea></label>
      <label>Travel and hand-off rhythm<textarea rows="3" maxlength="1200" data-universe-field="travelRule">${escapeHtml(universe.travelRule)}</textarea></label>
      <label class="universe-share-overview"><input type="checkbox" data-universe-share-overview${universe.includeOverviewInShareable ? " checked" : ""}> Include this overview in the version for sharing</label>`;
    container.querySelectorAll("[data-universe-field]").forEach((field) => {
      field.addEventListener("input", () => {
        const max = field.dataset.universeField === "title" ? 180 : field.dataset.universeField === "premise" ? 2000 : 1200;
        universe[field.dataset.universeField] = safeText(field.value, max);
        scheduleProjectSave();
      });
    });
    container.querySelector("[data-universe-share-overview]").addEventListener("change", (event) => {
      universe.includeOverviewInShareable = event.target.checked;
      saveProject("Universe sharing choice saved");
    });
  }

  function universeNarrativeFieldHtml(narrative, id, label, rows = 2, placeholder = "") {
    return `<label class="${["premise", "relationshipMotion", "earnedWin", "auraRole", "crystalCityThread", "handoff"].includes(id) ? "wide" : ""}">${escapeHtml(label)}
      <textarea rows="${rows}" maxlength="${id === "premise" ? 1600 : 1200}" data-narrative-field="${escapeHtml(id)}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(narrative[id])}</textarea>
    </label>`;
  }

  function universeCastHtml(narrative) {
    const selected = new Set(narrative.castIds || []);
    return `<fieldset class="wide universe-cast-picker">
      <legend>Characters carried by this story</legend>
      <p>Choose any people who appear, cross through or carry consequences. A story can centre Tiggy, another main character or a group of main characters.</p>
      <div>${project.characters.map((character) => `<label><input type="checkbox" data-narrative-cast="${escapeHtml(character.id)}"${selected.has(character.id) ? " checked" : ""}> ${escapeHtml(character.name)}</label>`).join("")}</div>
    </fieldset>`;
  }

  function universePatternHtml(narrative) {
    const pattern = narrative.pattern;
    if (!pattern) return `<section class="wide universe-pattern-panel">
      <div><small>Possible combination</small><strong>Still open for exploring</strong><p>Gather choices, rearrange them freely, then save the combination here when it becomes interesting. Saving it does not make it a rule.</p></div>
      <button class="button button-secondary button-small" type="button" data-capture-pattern>Save current Story Choices combination</button>
    </section>`;
    const signals = patternSignalSummary(pattern);
    const groups = patternIngredientGroups(pattern, false);
    return `<section class="wide universe-pattern-panel has-pattern">
      <div class="universe-pattern-heading"><div><small>Saved combination of ideas</small><strong>${signals.reduce((sum, item) => sum + item.count, 0)} favourite-story signals</strong><p>Copy saved ${escapeHtml(pattern.capturedAt || "earlier")}. It can still be updated, removed or copied into another version.</p></div>
        <div class="universe-pattern-actions">
          <button class="button button-secondary button-small" type="button" data-capture-pattern>Update from current choices</button>
          <button class="button button-quiet button-small" type="button" data-load-pattern>Explore a new version</button>
          <button class="button button-quiet button-small" type="button" data-release-pattern>Remove saved combination</button>
        </div>
      </div>
      <div class="universe-pattern-signals">${signals.map((item) => `<span><strong>${item.count}</strong>${escapeHtml(item.label)}</span>`).join("")}</div>
      <details class="universe-pattern-ingredients"><summary>Browse every captured ingredient</summary>${groups.map((group) => `<article><strong>${escapeHtml(group.label)}</strong><p>${group.values.map(escapeHtml).join(" · ")}</p></article>`).join("")}</details>
    </section>`;
  }

  function universeRiffLinksHtml(narrative) {
    const riffs = linkedRiffs(narrative.id, false);
    return `<section class="wide universe-riff-link-panel">
      <div><small>Linked idea cards</small><strong>${riffs.length} working idea${riffs.length === 1 ? "" : "s"}</strong><p>Ideas can stay loose, gather here or become a possible story without changing the saved Story Choices combination.</p></div>
      <a class="button button-quiet button-small" href="riff.html?narrative=${encodeURIComponent(narrative.id)}">${riffs.length ? "Open linked ideas" : "Start a linked idea"} →</a>
    </section>`;
  }

  function renderUniverseNarratives() {
    const container = document.querySelector("[data-universe-narratives]");
    if (!container) return;
    const narratives = project.universe.narratives || [];
    if (!narratives.length) {
      container.innerHTML = '<div class="universe-empty">No stories yet. Add one when a journey, character or event deserves its own centre.</div>';
      return;
    }
    container.innerHTML = narratives.map((narrative, index) => `<details class="universe-strand" data-narrative-id="${escapeHtml(narrative.id)}"${index === 0 ? " open" : ""}>
      <summary><span><small>${String(index + 1).padStart(2, "0")} · ${escapeHtml(universeNarrativeFormatLabel(narrative.format))}</small><strong>${escapeHtml(narrative.title)}</strong><em>${escapeHtml(narrative.timeWindow || "Time relationship still open")}</em></span><span>${narrative.includeInShareable ? "Included for sharing" : "Private"}</span></summary>
      <div class="universe-strand-body">
        <div class="universe-strand-actions">
          <button class="button button-quiet button-small" type="button" data-move-narrative="up"${index === 0 ? " disabled" : ""}>Move earlier</button>
          <button class="button button-quiet button-small" type="button" data-move-narrative="down"${index === narratives.length - 1 ? " disabled" : ""}>Move later</button>
          <label><input type="checkbox" data-narrative-share${narrative.includeInShareable ? " checked" : ""}> Include in the map for sharing</label>
          <button class="button button-quiet button-small" type="button" data-fork-narrative>Make another version</button>
          <button class="button button-quiet button-small narrative-remove" type="button" data-remove-narrative>Remove</button>
        </div>
        <div class="universe-strand-fields">
          <label>Working title<input type="text" maxlength="180" value="${escapeHtml(narrative.title)}" data-narrative-field="title"></label>
          <label>Format<select data-narrative-field="format">${(DATA.universeNarrativeFormats || []).map((item) => `<option value="${escapeHtml(item.id)}"${narrative.format === item.id ? " selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}</select></label>
          <label>Time window or era<input type="text" maxlength="240" value="${escapeHtml(narrative.timeWindow)}" data-narrative-field="timeWindow" placeholder="Before, during or after another story"></label>
          <label>Main character or group<input type="text" maxlength="300" value="${escapeHtml(narrative.lead)}" data-narrative-field="lead" placeholder="Tiggy, another main character or a group"></label>
          <label class="wide">Main route or place<input type="text" maxlength="500" value="${escapeHtml(narrative.route)}" data-narrative-field="route" placeholder="Destination, travel path or group of locations"></label>
          ${universeNarrativeFieldHtml(narrative, "premise", "What this story is about", 3, "What is this story about when it stands on its own?")}
          ${universeNarrativeFieldHtml(narrative, "relationshipMotion", "Relationship movement", 2, "Which bond begins, changes, pauses or ends?")}
          ${universeNarrativeFieldHtml(narrative, "earnedWin", "Earned win or capability left behind", 2, "What becomes real, useful or more credible?")}
          ${universeNarrativeFieldHtml(narrative, "auraRole", "Aura O.Z. role", 2, "Central, supporting, absent or opposed")}
          ${universeNarrativeFieldHtml(narrative, "crystalCityThread", "Crystal City thread", 2, "Return point, parallel build, rumour, consequence or not present")}
          ${universeNarrativeFieldHtml(narrative, "handoff", "Consequence or hand-off", 2, "What can another story inherit?")}
          ${universeCastHtml(narrative)}
          ${universePatternHtml(narrative)}
          ${universeRiffLinksHtml(narrative)}
        </div>
      </div>
    </details>`).join("");
    container.querySelectorAll("[data-narrative-id]").forEach((card) => {
      const narrative = universeNarrativeById(card.dataset.narrativeId);
      card.querySelectorAll("[data-narrative-field]").forEach((field) => {
        const eventName = field.tagName === "SELECT" ? "change" : "input";
        field.addEventListener(eventName, () => {
          const fieldId = field.dataset.narrativeField;
          const maxByField = { title: 180, timeWindow: 240, lead: 300, route: 500, premise: 1600 };
          narrative[fieldId] = fieldId === "format" ? field.value : safeText(field.value, maxByField[fieldId] || 1200);
          narrative.updatedAt = nowIso();
          eventName === "change" ? saveProject() : scheduleProjectSave();
          renderUniverseMap();
        });
      });
      card.querySelector("[data-narrative-share]").addEventListener("change", (event) => {
        narrative.includeInShareable = event.target.checked;
        narrative.updatedAt = nowIso();
        saveProject("Story sharing choice saved");
        renderUniverseMap();
      });
      card.querySelectorAll("[data-narrative-cast]").forEach((field) => {
        field.addEventListener("change", () => {
          const selected = new Set(narrative.castIds || []);
          if (field.checked) selected.add(field.dataset.narrativeCast);
          else selected.delete(field.dataset.narrativeCast);
          narrative.castIds = Array.from(selected);
          narrative.updatedAt = nowIso();
          saveProject("Story characters saved");
          renderUniverseMap();
          renderUniverseEmergence();
        });
      });
      card.querySelector("[data-capture-pattern]").addEventListener("click", () => {
        if (narrative.pattern && !window.confirm("Update this story's saved combination from the current Story Choices? The earlier copy will be replaced.")) return;
        narrative.pattern = captureCurrentForgePattern();
        if (/^(Opening travel narrative|Untitled narrative)/i.test(narrative.title) && project.title) narrative.title = safeText(project.title, 180);
        if (!narrative.premise) narrative.premise = safeText(buildBrief(false)[0] || "", 1600);
        narrative.updatedAt = nowIso();
        saveProject("Story-choice combination saved");
        renderUniverse();
      });
      const loadPattern = card.querySelector("[data-load-pattern]");
      if (loadPattern) loadPattern.addEventListener("click", () => {
        if (!window.confirm("Explore a new version of this saved combination in Story Choices? This replaces the current choices. The universe map and existing chapter plan stay available until you choose to rebuild them.")) return;
        if (!applyForgePattern(narrative.pattern)) return;
        project.title = safeText(narrative.title, 100) || project.title;
        if (!saveProject("Saved combination opened for exploring")) return;
        window.location.href = "forge.html";
      });
      const releasePattern = card.querySelector("[data-release-pattern]");
      if (releasePattern) releasePattern.addEventListener("click", () => {
        if (!window.confirm("Remove this saved combination? The story notes and universe connections will stay.")) return;
        narrative.pattern = null;
        narrative.updatedAt = nowIso();
        saveProject("Saved combination removed");
        renderUniverse();
      });
      card.querySelector("[data-fork-narrative]").addEventListener("click", () => {
        const variation = clone(narrative);
        variation.id = newUniverseNarrativeId();
        variation.title = safeText(`${narrative.title} variation`, 180);
        variation.includeInShareable = false;
        variation.createdAt = nowIso();
        variation.updatedAt = variation.createdAt;
        project.universe.narratives.push(variation);
        saveProject("Another story version created");
        renderUniverse();
        const field = document.querySelector(`[data-narrative-id="${variation.id}"] [data-narrative-field="title"]`);
        if (field) field.focus();
      });
      card.querySelectorAll("[data-move-narrative]").forEach((button) => {
        button.addEventListener("click", () => {
          const index = project.universe.narratives.findIndex((item) => item.id === narrative.id);
          const target = button.dataset.moveNarrative === "up" ? index - 1 : index + 1;
          if (target < 0 || target >= project.universe.narratives.length) return;
          [project.universe.narratives[index], project.universe.narratives[target]] = [project.universe.narratives[target], project.universe.narratives[index]];
          saveProject("Story order saved");
          renderUniverse();
        });
      });
      card.querySelector("[data-remove-narrative]").addEventListener("click", () => {
        const riffCount = linkedRiffs(narrative.id, false).length;
        if (!window.confirm(`Remove ${narrative.title} from the universe map? Its connections will also be removed.${riffCount ? ` ${riffCount} linked idea card${riffCount === 1 ? "" : "s"} will be kept as unlinked possibilities.` : ""}`)) return;
        project.universe.narratives = project.universe.narratives.filter((item) => item.id !== narrative.id);
        project.universe.connections = project.universe.connections.filter((item) => item.fromId !== narrative.id && item.toId !== narrative.id);
        project.riffs.forEach((riff) => { if (riff.narrativeId === narrative.id) riff.narrativeId = ""; });
        saveProject("Story removed");
        renderUniverse();
      });
    });
  }

  function renderUniverseMap() {
    const container = document.querySelector("[data-universe-map]");
    if (!container) return;
    const narratives = project.universe.narratives || [];
    if (!narratives.length) {
      container.innerHTML = '<div class="universe-empty">The map will appear as stories are added.</div>';
      return;
    }
    container.innerHTML = narratives.map((narrative, index) => {
      const links = project.universe.connections.filter((item) => item.fromId === narrative.id || item.toId === narrative.id);
      const cast = (narrative.castIds || []).map((id) => project.characters.find((character) => character.id === id)).filter(Boolean);
      return `<article class="universe-map-node">
        <div class="universe-map-index">${String(index + 1).padStart(2, "0")}</div>
        <div><small>${escapeHtml(universeNarrativeFormatLabel(narrative.format))}${narrative.timeWindow ? ` · ${escapeHtml(narrative.timeWindow)}` : ""}</small><strong>${escapeHtml(narrative.title)}</strong><p>${escapeHtml(narrative.route || narrative.premise || "Main route and story idea still open")}</p>
          <div class="universe-map-meta">${narrative.pattern ? "<span>Choice combination saved</span>" : "<span>Choices still open</span>"}${linkedRiffs(narrative.id, false).length ? `<span>${linkedRiffs(narrative.id, false).length} linked idea cards</span>` : ""}${cast.map((character) => `<span>${escapeHtml(character.name)}</span>`).join("")}</div>
          <div class="universe-map-links">${links.map((link) => {
            const other = universeNarrativeById(link.fromId === narrative.id ? link.toId : link.fromId);
            return other ? `<span>${escapeHtml(universeConnectionTypeLabel(link.type))}: ${escapeHtml(other.title)}</span>` : "";
          }).join("")}</div>
        </div>
      </article>`;
    }).join("");
  }

  function renderUniverseEmergence() {
    const container = document.querySelector("[data-universe-emergence]");
    if (!container) return;
    const narratives = project.universe.narratives || [];
    const signals = [];
    project.characters.forEach((character) => {
      const carriers = narratives.filter((narrative) => (narrative.castIds || []).includes(character.id));
      if (carriers.length > 1) signals.push({ kind: "Shared character", label: character.name, narratives: carriers });
    });
    (DATA.worldPressures || []).forEach((world) => {
      const carriers = narratives.filter((narrative) => narrative.pattern && (narrative.pattern.worldIds || []).includes(world.id));
      if (carriers.length > 1) signals.push({ kind: "Recurring pressure", label: world.label, narratives: carriers });
    });
    (DATA.authorTastes || []).forEach((taste) => {
      const carriers = narratives.filter((narrative) => narrative.pattern && (narrative.pattern.authorTasteIds || []).includes(taste.id));
      if (carriers.length > 1) signals.push({ kind: "Recurring favourite story ingredient", label: taste.label, narratives: carriers });
    });
    if (!signals.length) {
      container.innerHTML = '<p class="universe-empty">No repeated idea has appeared yet. Save or copy a few choice combinations and this area will notice shared characters, pressures and favourite story ingredients without turning them into instructions.</p>';
      return;
    }
    container.innerHTML = `<p class="universe-emergence-note">These are observations, not rules. Keep, rewrite or ignore any pattern.</p><div class="universe-emergence-grid">${signals.map((signal) => `<article><small>${escapeHtml(signal.kind)}</small><strong>${escapeHtml(signal.label)}</strong><p>${signal.narratives.map((narrative) => escapeHtml(narrative.title)).join(" · ")}</p></article>`).join("")}</div>`;
  }

  function renderUniverseConnectionBuilder() {
    const container = document.querySelector("[data-universe-connection-builder]");
    if (!container) return;
    const narratives = project.universe.narratives || [];
    if (narratives.length < 2) {
      container.innerHTML = '<p class="universe-empty">Add at least two stories before linking them.</p>';
      return;
    }
    const options = narratives.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.title)}</option>`).join("");
    container.innerHTML = `<div class="universe-connection-builder">
      <label>From<select data-connection-from>${options}</select></label>
      <label>Connection<select data-connection-type>${(DATA.universeConnectionTypes || []).map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("")}</select></label>
      <label>To<select data-connection-to>${options}</select></label>
      <label class="wide">What crosses between them?<input type="text" maxlength="800" data-connection-note placeholder="Character, consequence, place, artefact, system or emotional echo"></label>
      <button class="button button-primary" type="button" data-add-connection>Add connection</button>
    </div>`;
    const from = container.querySelector("[data-connection-from]");
    const to = container.querySelector("[data-connection-to]");
    to.selectedIndex = 1;
    container.querySelector("[data-add-connection]").addEventListener("click", () => {
      if (from.value === to.value) {
        showToast("Choose two different stories");
        return;
      }
      project.universe.connections.push({
        id: newUniverseConnectionId(),
        fromId: from.value,
        toId: to.value,
        type: container.querySelector("[data-connection-type]").value,
        note: safeText(container.querySelector("[data-connection-note]").value, 800)
      });
      saveProject("Story connection added");
      renderUniverseMap();
      renderUniverseConnections();
      container.querySelector("[data-connection-note]").value = "";
    });
  }

  function renderUniverseConnections() {
    const container = document.querySelector("[data-universe-connections]");
    if (!container) return;
    const connections = project.universe.connections || [];
    if (!connections.length) {
      container.innerHTML = '<p class="universe-empty">No connections yet. Stories can still stand independently.</p>';
      return;
    }
    container.innerHTML = connections.map((connection) => {
      const from = universeNarrativeById(connection.fromId);
      const to = universeNarrativeById(connection.toId);
      return `<article class="universe-connection"><div><strong>${escapeHtml(from ? from.title : "Missing story")}</strong><span>${escapeHtml(universeConnectionTypeLabel(connection.type))}</span><strong>${escapeHtml(to ? to.title : "Missing story")}</strong>${connection.note ? `<p>${escapeHtml(connection.note)}</p>` : ""}</div><button class="button button-quiet button-small" type="button" data-remove-connection="${escapeHtml(connection.id)}">Remove</button></article>`;
    }).join("");
    container.querySelectorAll("[data-remove-connection]").forEach((button) => {
      button.addEventListener("click", () => {
        project.universe.connections = project.universe.connections.filter((item) => item.id !== button.dataset.removeConnection);
        saveProject("Story connection removed");
        renderUniverseMap();
        renderUniverseConnections();
      });
    });
  }

  function renderUniverse() {
    renderUniverseOverview();
    renderUniverseMap();
    renderUniverseEmergence();
    renderUniverseNarratives();
    renderUniverseConnectionBuilder();
    renderUniverseConnections();
  }

  function initUniverse() {
    document.querySelector("[data-add-narrative]").addEventListener("click", () => {
      const narrative = makeUniverseNarrative(`Untitled story ${project.universe.narratives.length + 1}`);
      project.universe.narratives.push(narrative);
      saveProject("Story added");
      renderUniverse();
      const field = document.querySelector(`[data-narrative-id="${narrative.id}"] [data-narrative-field="title"]`);
      if (field) field.focus();
    });
    document.querySelector("[data-copy-universe-safe]").addEventListener("click", () => {
      const unready = activeUniverseReviewGates().filter((gate) => !gateIsReady(gate));
      if (unready.length) {
        showToast(`${unready.length} human review check${unready.length === 1 ? " is" : "s are"} still open in the Book Plan`);
        return;
      }
      copyText(universeMarkdownLines(true, true).join("\n"), "Universe map for sharing copied");
    });
    document.querySelector("[data-copy-universe-private]").addEventListener("click", () => copyText(universeMarkdownLines(false, true).join("\n"), "Full working universe map copied"));
    renderUniverse();
  }

  function riffToolById(id) {
    return (DATA.riffTools || []).find((tool) => tool.id === id) || null;
  }

  function riffStageById(id) {
    return (DATA.riffStages || []).find((stage) => stage.id === id) || (DATA.riffStages || [])[0] || { label: "Loose note", note: "" };
  }

  function riffGuideById(id) {
    return (DATA.riffGuides || []).find((guide) => guide.id === id) || null;
  }

  function riffIsShareable(riff) {
    if (!riff || !riff.includeInShareable) return false;
    if (!riff.narrativeId) return true;
    const narrative = universeNarrativeById(riff.narrativeId);
    return Boolean(narrative && narrative.includeInShareable);
  }

  function riffVisibilityLabel(riff) {
    if (!riff.includeInShareable) return "Private";
    if (riff.narrativeId && !riffIsShareable(riff)) return "Waiting for linked story";
    return "Included for sharing";
  }

  function linkedRiffs(narrativeId, safe) {
    return (project.riffs || []).filter((riff) => riff.narrativeId === narrativeId && (!safe || riffIsShareable(riff)));
  }

  function riffMarkdownLines(safe, standalone = false) {
    const riffs = (project.riffs || []).filter((riff) => !safe || riffIsShareable(riff));
    const lines = [standalone ? "# Idea workshop" : "## Idea workshop", ""];
    lines.push(safe
      ? "These idea cards were individually marked for sharing by the author. They remain working possibilities rather than story instructions."
      : "Full local idea workshop. Loose notes, alternatives and discarded routes are intentionally preserved.", "");
    if (!riffs.length) {
      lines.push(safe ? "No idea cards are currently included for sharing." : "No idea cards have been started yet.", "");
      return lines;
    }
    riffs.forEach((riff, index) => {
      const tool = riffToolById(riff.toolId);
      const stage = riffStageById(riff.stage);
      const narrative = universeNarrativeById(riff.narrativeId);
      const cast = (riff.characterIds || []).map((id) => project.characters.find((character) => character.id === id))
        .filter((character) => character && (!safe || character.canonical || character.includeInShareable));
      lines.push(`### ${index + 1}. ${riff.title}`, "");
      if (tool) lines.push(`- Idea tool: ${tool.label}`);
      lines.push(`- Working state: ${stage.label}`);
      if (narrative) lines.push(`- Linked story: ${narrative.title}`);
      if (cast.length) lines.push(`- Linked characters: ${cast.map((character) => character.name).join(", ")}`);
      lines.push("");
      (tool ? tool.fields : []).forEach((field) => {
        const value = safeText((riff.fields || {})[field.id], 2400).trim();
        if (value) lines.push(`**${field.label}**`, "", value, "");
      });
    });
    return lines;
  }

  function renderRiffGuides() {
    const container = document.querySelector("[data-riff-guides]");
    if (!container) return;
    container.innerHTML = (DATA.riffGuides || []).map((guide) => `<article><strong>${escapeHtml(guide.label)}</strong><p>${escapeHtml(guide.note)}</p></article>`).join("");
  }

  function renderRiffTools() {
    const container = document.querySelector("[data-riff-tools]");
    if (!container) return;
    container.innerHTML = (DATA.riffTools || []).map((tool) => {
      const guide = riffGuideById(tool.guideId);
      return `<article class="riff-tool-card">
        <small>${escapeHtml(guide ? guide.label : "Idea tool")}</small>
        <h3>${escapeHtml(tool.label)}</h3>
        <p>${escapeHtml(tool.summary)}</p>
        <button class="button button-quiet button-small" type="button" data-start-riff="${escapeHtml(tool.id)}">Start an idea card</button>
      </article>`;
    }).join("");
    container.querySelectorAll("[data-start-riff]").forEach((button) => {
      button.addEventListener("click", () => {
        const riff = makeRiff(button.dataset.startRiff);
        if (!riff) return;
        if (activeRiffNarrativeFilter !== "all" && universeNarrativeById(activeRiffNarrativeFilter)) riff.narrativeId = activeRiffNarrativeFilter;
        activeRiffStageFilter = "all";
        project.riffs.push(riff);
        saveProject("New idea card started");
        renderRiffFilters();
        renderRiffs();
        const title = document.querySelector(`[data-riff-id="${riff.id}"] [data-riff-title]`);
        if (title) {
          title.scrollIntoView({ behavior: "smooth", block: "center" });
          title.focus();
          title.select();
        }
      });
    });
  }

  function riffNarrativeOptions(selectedId) {
    return `<option value="">Unlinked possibility</option>${(project.universe.narratives || []).map((narrative) => `<option value="${escapeHtml(narrative.id)}"${narrative.id === selectedId ? " selected" : ""}>${escapeHtml(narrative.title)}</option>`).join("")}`;
  }

  function renderRiffFilters() {
    const container = document.querySelector("[data-riff-filters]");
    if (!container) return;
    const narrativeOptions = (project.universe.narratives || []).map((narrative) => `<option value="${escapeHtml(narrative.id)}"${activeRiffNarrativeFilter === narrative.id ? " selected" : ""}>${escapeHtml(narrative.title)}</option>`).join("");
    const stageOptions = (DATA.riffStages || []).map((stage) => `<option value="${escapeHtml(stage.id)}"${activeRiffStageFilter === stage.id ? " selected" : ""}>${escapeHtml(stage.label)}</option>`).join("");
    container.innerHTML = `
      <label>Find an idea<input type="search" data-riff-search placeholder="Search titles and working notes"></label>
      <label>Story<select data-riff-narrative-filter><option value="all">Every story</option><option value="unlinked"${activeRiffNarrativeFilter === "unlinked" ? " selected" : ""}>Unlinked possibilities</option>${narrativeOptions}</select></label>
      <label>Working state<select data-riff-stage-filter><option value="all">Every state</option>${stageOptions}</select></label>`;
    container.querySelector("[data-riff-search]").addEventListener("input", renderRiffs);
    container.querySelector("[data-riff-narrative-filter]").addEventListener("change", (event) => {
      activeRiffNarrativeFilter = event.target.value;
      renderRiffs();
    });
    container.querySelector("[data-riff-stage-filter]").addEventListener("change", (event) => {
      activeRiffStageFilter = event.target.value;
      renderRiffs();
    });
  }

  function riffCharacterPickerHtml(riff) {
    if (!project.characters.length) return '<p class="microcopy">Add characters in the Character Builder when this idea needs a character link.</p>';
    const selected = new Set(riff.characterIds || []);
    return `<fieldset class="riff-character-picker"><legend>Characters carried by this idea</legend>${project.characters.map((character) => `<label><input type="checkbox" data-riff-character="${escapeHtml(character.id)}"${selected.has(character.id) ? " checked" : ""}> <span>${escapeHtml(character.name)}</span></label>`).join("")}</fieldset>`;
  }

  function renderRiffs() {
    const container = document.querySelector("[data-riff-list]");
    if (!container) return;
    const searchInput = document.querySelector("[data-riff-search]");
    const search = safeText(searchInput ? searchInput.value : "", 300).trim().toLowerCase();
    const riffs = (project.riffs || []).filter((riff) => {
      const narrativeMatches = activeRiffNarrativeFilter === "all"
        || (activeRiffNarrativeFilter === "unlinked" ? !riff.narrativeId : riff.narrativeId === activeRiffNarrativeFilter);
      const stageMatches = activeRiffStageFilter === "all" || riff.stage === activeRiffStageFilter;
      const haystack = `${riff.title} ${Object.values(riff.fields || {}).join(" ")}`.toLowerCase();
      return narrativeMatches && stageMatches && (!search || haystack.includes(search));
    });
    const count = document.querySelector("[data-riff-count]");
    if (count) count.textContent = `${riffs.length} shown · ${(project.riffs || []).length} total`;
    if (!riffs.length) {
      container.innerHTML = '<div class="universe-empty">No ideas match this view. Start any idea tool above, or change the filters.</div>';
      return;
    }
    container.innerHTML = riffs.slice().reverse().map((riff) => {
      const tool = riffToolById(riff.toolId);
      const guide = tool ? riffGuideById(tool.guideId) : null;
      const stage = riffStageById(riff.stage);
      return `<details class="riff-card" data-riff-id="${escapeHtml(riff.id)}" open>
        <summary><span><small>${escapeHtml(tool ? tool.label : "Idea tool")} · ${escapeHtml(stage.label)}</small><strong data-riff-summary-title>${escapeHtml(riff.title)}</strong></span><span data-riff-visibility>${escapeHtml(riffVisibilityLabel(riff))}</span></summary>
        <div class="riff-card-body">
          <div class="riff-card-intro"><div><p class="eyebrow">${escapeHtml(guide ? guide.label : "Idea workshop")}</p><p>${escapeHtml(tool ? tool.summary : "Working possibility")}</p></div><p class="microcopy">Use it, ignore it, rewrite it, make another version or remove it. Its state says where the thought is today, not what the story owes it.</p></div>
          <div class="riff-meta-grid">
            <label>Working title<input type="text" maxlength="180" value="${escapeHtml(riff.title)}" data-riff-title></label>
            <label>Working state<select data-riff-stage>${(DATA.riffStages || []).map((item) => `<option value="${escapeHtml(item.id)}"${item.id === riff.stage ? " selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}</select></label>
            <label>Linked story<select data-riff-narrative>${riffNarrativeOptions(riff.narrativeId)}</select></label>
            <label class="riff-share-choice"><input type="checkbox" data-riff-share${riff.includeInShareable ? " checked" : ""}> <span>Include this idea in the version for sharing after I check it</span></label>
          </div>
          ${riffCharacterPickerHtml(riff)}
          <div class="riff-fields">${(tool ? tool.fields : []).map((field) => `<label><span>${escapeHtml(field.label)}</span><small>${escapeHtml(field.prompt)}</small><textarea rows="4" maxlength="2400" data-riff-field="${escapeHtml(field.id)}">${escapeHtml((riff.fields || {})[field.id] || "")}</textarea></label>`).join("")}</div>
          <div class="riff-card-actions">
            <button class="button button-quiet button-small" type="button" data-duplicate-riff>Make another version</button>
            <button class="button button-danger button-small" type="button" data-remove-riff>Remove</button>
          </div>
        </div>
      </details>`;
    }).join("");
    container.querySelectorAll("[data-riff-id]").forEach((card) => {
      const riff = (project.riffs || []).find((item) => item.id === card.dataset.riffId);
      if (!riff) return;
      const title = card.querySelector("[data-riff-title]");
      title.addEventListener("input", () => {
        riff.title = safeText(title.value, 180) || (riffToolById(riff.toolId) || { label: "Untitled idea" }).label;
        riff.updatedAt = nowIso();
        card.querySelector("[data-riff-summary-title]").textContent = riff.title;
        scheduleProjectSave();
      });
      card.querySelector("[data-riff-stage]").addEventListener("change", (event) => {
        riff.stage = validId(DATA.riffStages, event.target.value, "loose");
        riff.updatedAt = nowIso();
        saveProject("Idea state saved");
        renderRiffs();
        const replacement = document.querySelector(`[data-riff-id="${riff.id}"] [data-riff-stage]`);
        if (replacement) replacement.focus();
      });
      card.querySelector("[data-riff-narrative]").addEventListener("change", (event) => {
        riff.narrativeId = universeNarrativeById(event.target.value) ? event.target.value : "";
        riff.updatedAt = nowIso();
        saveProject("Story link saved");
        if (activeRiffNarrativeFilter !== "all") renderRiffs();
        else card.querySelector("[data-riff-visibility]").textContent = riffVisibilityLabel(riff);
      });
      card.querySelector("[data-riff-share]").addEventListener("change", (event) => {
        riff.includeInShareable = event.target.checked;
        riff.updatedAt = nowIso();
        saveProject("Idea sharing choice saved");
        const status = card.querySelector("[data-riff-visibility]");
        if (status) status.textContent = riffVisibilityLabel(riff);
      });
      card.querySelectorAll("[data-riff-character]").forEach((field) => {
        field.addEventListener("change", () => {
          const selected = new Set(riff.characterIds || []);
          field.checked ? selected.add(field.dataset.riffCharacter) : selected.delete(field.dataset.riffCharacter);
          riff.characterIds = Array.from(selected);
          riff.updatedAt = nowIso();
          saveProject("Idea character links saved");
        });
      });
      card.querySelectorAll("[data-riff-field]").forEach((field) => {
        field.addEventListener("input", () => {
          riff.fields[field.dataset.riffField] = safeText(field.value, 2400);
          riff.updatedAt = nowIso();
          scheduleProjectSave();
        });
      });
      card.querySelector("[data-duplicate-riff]").addEventListener("click", () => {
        const variation = clone(riff);
        variation.id = newRiffId();
        variation.title = safeText(`${riff.title} variation`, 180);
        variation.stage = "riffing";
        variation.includeInShareable = false;
        variation.createdAt = nowIso();
        variation.updatedAt = variation.createdAt;
        project.riffs.push(variation);
        activeRiffStageFilter = "all";
        saveProject("Another idea version created");
        renderRiffFilters();
        renderRiffs();
        const replacement = document.querySelector(`[data-riff-id="${variation.id}"] [data-riff-title]`);
        if (replacement) {
          replacement.focus();
          replacement.select();
        }
      });
      card.querySelector("[data-remove-riff]").addEventListener("click", () => {
        if (!window.confirm(`Remove ${riff.title}? This only removes this idea card.`)) return;
        project.riffs = project.riffs.filter((item) => item.id !== riff.id);
        saveProject("Idea card removed");
        renderRiffFilters();
        renderRiffs();
      });
    });
  }

  function initRiffLab() {
    const requestedNarrative = new URLSearchParams(window.location.search).get("narrative");
    if (requestedNarrative && universeNarrativeById(requestedNarrative)) activeRiffNarrativeFilter = requestedNarrative;
    document.querySelector("[data-copy-riffs-safe]").addEventListener("click", () => {
      const unready = activeRiffReviewGates(false).filter((gate) => !gateIsReady(gate));
      if (unready.length) {
        showToast(`${unready.length} human review check${unready.length === 1 ? " is" : "s are"} still open in the Book Plan`);
        return;
      }
      copyText(riffMarkdownLines(true, true).join("\n"), "Ideas for sharing copied");
    });
    document.querySelector("[data-copy-riffs-private]").addEventListener("click", () => copyText(riffMarkdownLines(false, true).join("\n"), "All working ideas copied"));
    renderRiffGuides();
    renderRiffTools();
    renderRiffFilters();
    renderRiffs();
  }

  function renderLibraryFilters() {
    const container = document.querySelector("[data-library-filters]");
    if (!container) return;
    container.innerHTML = DATA.inspirationCategories.map((category) => `<button class="filter-pill${activeLibraryFilter === category ? " is-active" : ""}" type="button" data-library-filter="${escapeHtml(category)}" aria-pressed="${activeLibraryFilter === category}">${escapeHtml(category)}</button>`).join("");
    container.querySelectorAll("[data-library-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeLibraryFilter = button.dataset.libraryFilter;
        renderLibraryFilters();
        renderLibrary();
        const replacement = document.querySelector(`[data-library-filter="${CSS.escape(activeLibraryFilter)}"]`);
        if (replacement) replacement.focus();
      });
    });
  }

  function renderLibrary() {
    const grid = document.querySelector("[data-library-grid]");
    const search = (document.querySelector("[data-library-search]").value || "").trim().toLowerCase();
    const items = DATA.inspiration.filter((item) => {
      const inCategory = activeLibraryFilter === "All" || item.category === activeLibraryFilter;
      const haystack = `${item.title} ${item.description} ${item.prompt} ${item.source}`.toLowerCase();
      return inCategory && (!search || haystack.includes(search));
    });
    if (!items.length) {
      grid.innerHTML = `<div class="empty-library">No sparks match that search yet.</div>`;
      return;
    }
    grid.innerHTML = items.map((item) => {
      const pinned = project.pinnedInspiration.includes(item.id);
      return `<article class="inspiration-card">
        <div><span class="source-band band-${escapeHtml(item.band)}">${escapeHtml(DATA.bandLabels[item.band])}</span></div>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.description)}</p>
        <p class="spark-prompt">“${escapeHtml(item.prompt)}”</p>
        <div class="inspiration-meta">${escapeHtml(item.category)} · ${escapeHtml(item.source)}</div>
        ${(item.gates || []).length ? `<div class="card-gates" aria-label="Checks needed before public use">${item.gates.map((gateId) => `<span>Needs human review · ${escapeHtml(DATA.reviewGateDefinitions[gateId].label)}</span>`).join("")}</div>` : ""}
        <button class="button ${pinned ? "button-secondary" : "button-quiet"} button-small" type="button" data-pin-inspiration="${escapeHtml(item.id)}">${pinned ? "Remove from this story" : "Add to this story"}</button>
      </article>`;
    }).join("");
    grid.querySelectorAll("[data-pin-inspiration]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.pinInspiration;
        const pins = new Set(project.pinnedInspiration);
        pins.has(id) ? pins.delete(id) : pins.add(id);
        project.pinnedInspiration = Array.from(pins);
        saveProject();
        renderLibrary();
        const replacement = document.querySelector(`[data-pin-inspiration="${id}"]`);
        if (replacement) replacement.focus();
        showToast(pins.has(id) ? "Added to this story" : "Removed from this story");
      });
    });
  }

  function renderSources() {
    const container = document.querySelector("[data-source-list]");
    if (!container) return;
    container.innerHTML = DATA.sources.map((source) => `<article class="source-item"><strong>${source.url ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.title)}</a>` : escapeHtml(source.title)}</strong>${source.plainNote ? `<p>${escapeHtml(source.plainNote)}</p>` : ""}<small>${escapeHtml(source.group)}${source.gate ? ` · ${escapeHtml(source.gate)}` : ""}</small></article>`).join("");
  }

  function initLibrary() {
    const search = document.querySelector("[data-library-search]");
    search.addEventListener("input", renderLibrary);
    renderLibraryFilters();
    renderLibrary();
    renderSources();
  }

  renderShell();
  if (page === "home") initHome();
  if (page === "forge") initForge();
  if (page === "universe") initUniverse();
  if (page === "riff") initRiffLab();
  if (page === "characters") initCharacters();
  if (page === "council") initCouncil();
  if (page === "arc") initArc();
  if (page === "library") initLibrary();
})();
