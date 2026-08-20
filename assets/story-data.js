/*
 * Distilled planning material only. The supplied source documents and lyrics are
 * not bundled in this project. Market figures in those documents are not treated
 * as current facts. This file is designed to remain safe for a future public repo.
 */
window.STORY_DATA = {
  version: 4,
  appName: "Australian Sire Story Forge",
  protagonist: {
    id: "tiggy-bestmann",
    canonicalName: "Tiggy Bestmann",
    alterEgo: "Australian Sire",
    identityRule: "same-person",
    summary: "One main character. Tiggy begins as an aloof, playful systems dreamer who worries that he is bluffing. Australian Sire is the identity he earns by stacking real wins, keeping promises and becoming a consensually chosen travelling breeding male among adults who know he will not stay."
  },

  bandLabels: {
    grounded: "From a supplied source",
    proposed: "Proposed idea",
    fiction: "Fiction inspired by a source",
    wild: "Invented for the story",
    care: "Needs human review"
  },

  reviewGateDefinitions: {
    cultural_authority: {
      label: "Cultural authority",
      reason: "Real Country, First Nations names, knowledge, sites or governance require appropriate authority and review."
    },
    cultural_context: {
      label: "Cultural context",
      reason: "A real host place or community leads how its culture is represented."
    },
    clinical_ethics: {
      label: "Clinical and ethics",
      reason: "Care, dementia, wellness and biometric material remains fictional here unless it receives qualified clinical and ethics review."
    },
    privacy: {
      label: "Privacy and data dignity",
      reason: "Do not expose real health, relationship, biometric or identifying information."
    },
    legal_current_fact: {
      label: "Law and current facts",
      reason: "Check law, policy, market, travel, political and engineering claims against current original sources."
    },
    consent_power: {
      label: "Consent and power",
      reason: "Relationship systems require adult agency, present consent, renegotiation and a genuine exit."
    },
    rights_attribution: {
      label: "Rights and attribution",
      reason: "Third-party references require separate rights and credits; Luke's future licence cannot automatically cover them."
    }
  },

  shelfPromises: [
    {
      id: "sci_fi_romance",
      label: "Science-fiction love story",
      description: "An adult love story sits at the centre, shaped by future technology, other worlds or imagined social systems.",
      note: "Ends with lasting commitment or a hopeful commitment for now"
    },
    {
      id: "sci_fi_erotic_romance",
      label: "Science-fiction erotic love story",
      description: "An adult love story sits at the centre, and intimate encounters change trust, character or what happens next.",
      note: "Private intimacy markers are central, with lasting or present-tense commitment at the end"
    },
    {
      id: "sci_fi_erotica",
      label: "Erotic science-fiction journey",
      description: "An adult journey of desire and discovery in an imagined future or other world.",
      note: "Desire leads the story; a lasting romantic ending is optional"
    },
    {
      id: "protopian_romantasy",
      label: "Protopian romantic fantasy",
      description: "Romance and fantasy combine with practical attempts to improve a flawed world. Each success reveals the next honest problem.",
      note: "Protopian means hopeful improvement without pretending the world becomes perfect"
    }
  ],

  protagonistModes: [
    {
      id: "honest_fool",
      label: "Tiggy Bestmann, the honest fool",
      description: "Aloof, awkward, cheeky and inventive. He says what he actually thinks, follows through on the claims, and is funnier than he means to be.",
      note: "Honest first, dignified second"
    },
    {
      id: "luke_bridge",
      label: "Luke Catalyst, the bridge",
      description: "The middle he explores from. Neither performing the fool nor in the Sire register, and able to reach both without leaving himself. A base position rather than a compromise between the other two.",
      note: "The safe middle the true self is explored from"
    },
    {
      id: "australian_sire",
      label: "Australian Sire",
      description: "The same man in his kink register. Honest and fair, open about breeding and mazophilia, and not settling down. He says all of it up front, which is the part that makes it work.",
      note: "How he gets there is set per story"
    },
    {
      id: "sire_earned",
      label: "Australian Sire, earned",
      description: "The progression route. Real wins, kept promises and adult trust stack up until the register is his, across a book or across a series.",
      note: "One route, not the rule"
    },
    {
      id: "sire_arrived",
      label: "Australian Sire, arrived at",
      description: "No ladder. He meets a woman who is already there, and steps into the register that day because it was always available to him.",
      note: "Innate, and switched on by an encounter"
    },
    {
      id: "submissive_register",
      label: "The submissive register, with the Dakini",
      description: "A fourth register that exists and has not been given a style yet. The Dakini is the counterpart. Everything else about it is undecided and deliberately left that way.",
      note: "Named, not yet landed"
    }
  ],

  universeNarrativeFormats: [
    { id: "novel", label: "Novel" },
    { id: "novella", label: "Novella" },
    { id: "short_story", label: "Short story" },
    { id: "film", label: "Film or episode" },
    { id: "album", label: "Album story" },
    { id: "game", label: "Interactive story" },
    { id: "other", label: "Other narrative" }
  ],

  storyLengthPresets: [
    {
      id: "erotic_short",
      label: "Erotic short",
      rangeLabel: "Usually 5,000 to 10,000 words, sometimes 3,000",
      minWords: 3000,
      maxWords: 10000,
      targetWords: 7500,
      chapterCount: 3,
      scenesPerChapter: 2,
      sourceNote: "Length band from the supplied adult romance market guides"
    },
    {
      id: "short_story",
      label: "General short story",
      rangeLabel: "1,500 to 30,000 words",
      minWords: 1500,
      maxWords: 30000,
      targetWords: 15000,
      chapterCount: 6,
      scenesPerChapter: 2,
      sourceNote: "Length band from Luke's 2023 author planning sheet"
    },
    {
      id: "novella",
      label: "Novella",
      rangeLabel: "20,000 to 50,000 words",
      minWords: 20000,
      maxWords: 50000,
      targetWords: 35000,
      chapterCount: 14,
      scenesPerChapter: 2,
      sourceNote: "Length band from the supplied adult romance market guides"
    },
    {
      id: "category_romance",
      label: "Category romance",
      rangeLabel: "About 55,000 words, approximately 200 pages",
      minWords: 55000,
      maxWords: 55000,
      targetWords: 55000,
      chapterCount: 22,
      scenesPerChapter: 2,
      sourceNote: "Approximate length and page example from the supplied adult romance market guide"
    },
    {
      id: "romance_novel",
      label: "Full romance novel",
      rangeLabel: "70,000 to 100,000 words",
      minWords: 70000,
      maxWords: 100000,
      targetWords: 85000,
      chapterCount: 34,
      scenesPerChapter: 2,
      sourceNote: "Length band from the supplied adult romance market guides"
    },
    {
      id: "sci_fi_erotic_romance",
      label: "Science-fiction erotic romance",
      rangeLabel: "70,000 to 100,000 words, up to 120,000 with extensive world-building",
      minWords: 70000,
      maxWords: 120000,
      targetWords: 90000,
      chapterCount: 36,
      scenesPerChapter: 2,
      sourceNote: "Length band from the supplied adult romance market guides"
    },
    {
      id: "worldbuilding_novel",
      label: "Science-fiction or fantasy novel",
      rangeLabel: "90,000 to 120,000 words, sometimes up to 150,000",
      minWords: 90000,
      maxWords: 150000,
      targetWords: 110000,
      chapterCount: 44,
      scenesPerChapter: 2,
      sourceNote: "Length band from Luke's 2023 author planning sheet"
    },
    {
      id: "luke_adult_series",
      label: "Luke's adult romance or erotic series target",
      rangeLabel: "80,000 to 90,000 words",
      minWords: 80000,
      maxWords: 90000,
      targetWords: 85000,
      chapterCount: 34,
      scenesPerChapter: 2,
      sourceNote: "Luke's working target from the supplied 2023 author planning sheet"
    },
    {
      id: "luke_scifi_series",
      label: "Luke's science-fiction series target",
      rangeLabel: "90,000 to 110,000 words",
      minWords: 90000,
      maxWords: 110000,
      targetWords: 100000,
      chapterCount: 40,
      scenesPerChapter: 2,
      sourceNote: "Luke's working target from the supplied 2023 author planning sheet"
    },
    {
      id: "custom",
      label: "Custom size",
      rangeLabel: "Set every number yourself",
      minWords: 0,
      maxWords: 0,
      targetWords: 0,
      chapterCount: 0,
      scenesPerChapter: 0,
      sourceNote: "Your own working pattern"
    }
  ],

  actPatterns: [
    {
      id: "three_acts",
      label: "Three acts",
      unitLabel: "Act",
      weights: [25, 50, 25],
      titles: ["Opening movement", "Deepening movement", "Outcome and next horizon"],
      questions: [
        "What changes enough that the story cannot simply return to its opening?",
        "Which choices, relationships or pressures become harder to avoid?",
        "What is decided, and which new horizon remains open?"
      ],
      note: "An editable 25, 50, 25 calculation inspired by several supplied three-act examples. It is not a publishing rule."
    },
    {
      id: "four_parts",
      label: "Four equal parts",
      unitLabel: "Part",
      weights: [25, 25, 25, 25],
      titles: ["Opening conditions", "The field widens", "Consequences gather", "The changed shape"],
      questions: [
        "Which people, desires and problems are now in motion?",
        "What becomes possible when the story opens into a wider field?",
        "Which consequence can no longer be postponed?",
        "What has changed, and what remains alive for another story?"
      ],
      note: "Four equal starting shares make the app's earlier hidden quarter pattern visible and editable."
    },
    {
      id: "five_movements",
      label: "Five equal movements",
      unitLabel: "Movement",
      weights: [20, 20, 20, 20, 20],
      titles: ["Arrival", "Connection", "Deepening", "Reckoning", "Aftermath and horizon"],
      questions: [
        "What arrives or awakens here?",
        "Which connections begin to matter?",
        "What becomes richer, riskier or more difficult?",
        "Which truth or consequence asks for a decision?",
        "What remains changed when this movement ends?"
      ],
      note: "A five-step protopian starting pattern. The labels and relative sizes remain editable."
    },
    {
      id: "custom",
      label: "Custom acts or parts",
      unitLabel: "Act",
      weights: [1, 1, 1],
      titles: [],
      questions: [],
      note: "Choose your own number, names and relative sizes."
    }
  ],

  universeConnectionTypes: [
    { id: "follows", label: "Follows" },
    { id: "overlaps", label: "Overlaps in time" },
    { id: "intersects", label: "Characters or missions intersect" },
    { id: "echoes", label: "Echoes or reframes" },
    { id: "hands_off", label: "Hands off a consequence" },
    { id: "returns", label: "Returns to a shared place" }
  ],

  riffStages: [
    { id: "loose", label: "Loose note", note: "A thought worth keeping without deciding what it is." },
    { id: "riffing", label: "Exploring versions", note: "Alternatives are multiplying and contradicting one another." },
    { id: "clustered", label: "Ideas that fit together", note: "Several notes appear to belong together." },
    { id: "candidate", label: "Possible story", note: "This may be useful to a particular story." },
    { id: "crystallised", label: "Chosen for now", note: "Chosen for the current version, while remaining editable." }
  ],

  riffGuides: [
    { id: "cartographer", label: "The Cartographer", note: "Maps time, knowledge and overlapping journeys." },
    { id: "misdirector", label: "The Misdirector", note: "Tests assumptions, clues and alternate explanations." },
    { id: "character_listener", label: "The Character Listener", note: "Finds perception, motive, quirks and embodied detail." },
    { id: "relationship_weaver", label: "The Relationship Weaver", note: "Tracks distinct bonds, friction, complementarity and dialogue." },
    { id: "pressure_tester", label: "The Pressure Tester", note: "Braids problems, escape routes, costs and repairs." },
    { id: "ending_gardener", label: "The Ending Gardener", note: "Grows several emotional destinations side by side." },
    { id: "crystalliser", label: "The Pattern Noticer", note: "Notices a recurring shape and waits for Luke to choose it." }
  ],

  riffTools: [
    {
      id: "assumption_flipper",
      label: "Assumption Flipper",
      guideId: "misdirector",
      summary: "Turn one apparently settled fact until a more interesting explanation appears.",
      fields: [
        { id: "surface", label: "What appears to be true?", prompt: "Name the event, identity, motive or relationship the audience currently accepts." },
        { id: "assumptions", label: "What is being assumed?", prompt: "Who, what, where, how, with whom and why can all be questioned." },
        { id: "variations", label: "Possible inversions", prompt: "Try false, opposite, withheld, misunderstood, duplicated or true for another reason." },
        { id: "consequences", label: "What changes if one variation is true?", prompt: "Follow the emotional, relationship and plot consequences rather than stopping at surprise." }
      ]
    },
    {
      id: "clue_ladder",
      label: "Clue Ladder",
      guideId: "misdirector",
      summary: "Map a clue from first sight through misreading to a fair later revelation.",
      fields: [
        { id: "clue", label: "The clue", prompt: "What concrete trace can the audience encounter?" },
        { id: "disguise", label: "How it hides in plain sight", prompt: "Place it beside ordinary information, a stronger distraction or a plausible context." },
        { id: "misreading", label: "Early interpretation", prompt: "Who reads it incorrectly, and why is that reading reasonable?" },
        { id: "reveal", label: "Later meaning", prompt: "What new knowledge changes the clue without making the earlier story dishonest?" },
        { id: "aftershock", label: "Reinterpretation", prompt: "Which character, relationship or earlier scene now means something different?" }
      ]
    },
    {
      id: "knowledge_timeline",
      label: "Knowledge Timeline",
      guideId: "cartographer",
      summary: "Track who knows what, when they learn it and how knowledge crosses between stories.",
      fields: [
        { id: "moments", label: "Time, place or scene markers", prompt: "Use any sequence that helps, including overlapping dates, journeys or points of view." },
        { id: "knowledge", label: "What each character knows", prompt: "Separate evidence, belief, secret, rumour, memory and deliberate lie." },
        { id: "discovery", label: "How they learn it", prompt: "Conversation, observation, archive, body, Aura O.Z., accident, ritual or another route." },
        { id: "crossings", label: "Where knowledge crosses", prompt: "Who shares, withholds, distorts, forgets or inherits information from another story?" }
      ]
    },
    {
      id: "dialogue_constellation",
      label: "Conversation Map",
      guideId: "relationship_weaver",
      summary: "Prepare a conversation among any number of characters without giving everyone the same purpose.",
      fields: [
        { id: "scene_need", label: "What needs to change in this conversation?", prompt: "Name what changes in the scene, not the finished dialogue." },
        { id: "voices", label: "What each person needs to communicate", prompt: "Give each participant a distinct need, vocabulary, rhythm and way of taking space." },
        { id: "private_currents", label: "What remains unsaid", prompt: "Track secrets, what people mean but do not say, avoided topics, interruptions and deliberate silence." },
        { id: "embodied", label: "How the bodies and setting speak", prompt: "Posture, distance, movement, objects, attention and the environment can carry meaning." },
        { id: "turn", label: "The conversational turn", prompt: "What line, pause, action or refusal changes the relationship state?" }
      ]
    },
    {
      id: "tight_spot_solver",
      label: "Tight Spot Solver",
      guideId: "pressure_tester",
      summary: "Generate several escape routes, then make their costs reveal character.",
      fields: [
        { id: "predicament", label: "The predicament", prompt: "Why are they stuck, and what outcome are they reaching for?" },
        { id: "routes", label: "Possible routes", prompt: "List as many physical, social, intellectual, technological or emotional exits as useful." },
        { id: "blocks", label: "What blocks each route?", prompt: "Distinguish a genuine constraint from an assumption, fear or missing observation." },
        { id: "resources", label: "Resources and capabilities", prompt: "What is available, what can be adapted, and whose overlooked skill changes the field?" },
        { id: "costs", label: "Cost, sacrifice or compromise", prompt: "What can be surrendered without stealing another person's agency?" }
      ]
    },
    {
      id: "plot_hole_repair",
      label: "Story Logic Repair",
      guideId: "pressure_tester",
      summary: "Inspect a detail that no longer fits and compare repairs before altering the whole story.",
      fields: [
        { id: "issue", label: "What does not currently hold together?", prompt: "Timing, motive, knowledge, cause and effect, geography, technology or another detail that no longer fits." },
        { id: "affected", label: "What does it touch?", prompt: "Characters, relationships, scenes, other stories and later consequences." },
        { id: "repairs", label: "Possible repairs", prompt: "Add, move or remove something, plant an earlier clue, reinterpret it, turn it into a deliberate mystery or change the rule." },
        { id: "downstream", label: "Knock-on changes", prompt: "Which later events, character choices or emotions become stronger or weaker?" }
      ]
    },
    {
      id: "relationship_constellation",
      label: "Relationship Map",
      guideId: "relationship_weaver",
      summary: "Explore what two or more adults make easier, harder or newly possible together.",
      fields: [
        { id: "distinct_centres", label: "Independent centres", prompt: "What does each person want, value and continue to do beyond the relationship?" },
        { id: "gifts", label: "Gifts and strengths", prompt: "How does each person expand the field without becoming another person's missing half?" },
        { id: "frictions", label: "Friction and unevenness", prompt: "Where do strengths irritate, overwhelm, expose or fail to compensate?" },
        { id: "possible_together", label: "What becomes possible together?", prompt: "Name a shared capability, pleasure, decision or problem they could not reach in the same way alone." },
        { id: "renegotiation", label: "How can the relationship group change?", prompt: "Track boundaries, distinct bonds, departures, returns and freely renewed agreements." }
      ]
    },
    {
      id: "quirk_consequence",
      label: "Quirk to Consequence",
      guideId: "character_listener",
      summary: "Turn a memorable habit into lived texture rather than decorative eccentricity.",
      fields: [
        { id: "quirk", label: "The habit, pattern or oddity", prompt: "What does the person repeatedly do, notice, avoid, collect or misread?" },
        { id: "roots", label: "How it developed", prompt: "Origin can be practical, joyful, cultural, defensive, accidental or still unknown." },
        { id: "daily", label: "How it appears in ordinary life", prompt: "When does it help, cost time, create comedy or make someone feel seen?" },
        { id: "relationships", label: "Relationship effects", prompt: "Who enjoys it, misunderstands it, is irritated by it or learns what it protects?" },
        { id: "movement", label: "Change, acceptance or deeper meaning", prompt: "Does it transform, become consciously chosen or remain a stable pleasure?" }
      ]
    },
    {
      id: "motivation_map",
      label: "Motivation Map",
      guideId: "character_listener",
      summary: "Connect a desired action to beliefs, values, capabilities and human influence.",
      fields: [
        { id: "action", label: "The action under consideration", prompt: "What is the character moving towards, away from or refusing?" },
        { id: "inner_logic", label: "Beliefs and values", prompt: "What makes the action feel justified, impossible, necessary, loving or dangerous to them?" },
        { id: "capability", label: "Traits, skills and knowledge", prompt: "What supports the action, and what still needs to be learned or borrowed?" },
        { id: "influence", label: "People and systems of influence", prompt: "Who shaped this logic, who contradicts it, and why does either influence carry weight?" },
        { id: "countercurrent", label: "Competing motive", prompt: "What equally real desire pulls the character in another direction?" }
      ]
    },
    {
      id: "trouble_braider",
      label: "Trouble Braider",
      guideId: "pressure_tester",
      summary: "Combine problems from any parts of life and see how they worsen, hide or unexpectedly cancel one another.",
      fields: [
        { id: "pressures", label: "Problems in play", prompt: "Draw freely from health, environment, work, technology, family, politics, wellbeing, social life, resources or play." },
        { id: "purpose", label: "Why this trouble belongs", prompt: "What choice, contradiction, strength or blind spot can it expose?" },
        { id: "braid", label: "How problems interact", prompt: "Which problems worsen, distract from, hide or temporarily solve another?" },
        { id: "revelation", label: "What becomes visible", prompt: "Track what the pressure reveals about a person, bond, community or system." },
        { id: "change", label: "What changes after contact", prompt: "The result can be adaptation, refusal, loss, repair, escalation or an honest new problem." }
      ]
    },
    {
      id: "appearance_in_motion",
      label: "Appearance in Motion",
      guideId: "character_listener",
      summary: "Build appearance details a writer can use through perception, movement and context rather than a list.",
      fields: [
        { id: "self_view", label: "How the character reads themself", prompt: "What do they notice, enjoy, manage, ignore or misunderstand about their presentation?" },
        { id: "other_views", label: "How different people read them", prompt: "Let attraction, familiarity, rivalry, culture and purpose alter what is noticed." },
        { id: "embodiment", label: "Body in motion", prompt: "Posture, stance, distance, shielding, fidgeting, rhythm and use of objects." },
        { id: "placement", label: "Where description earns its place", prompt: "Attach detail to action, relationship, setting or a change in attention." },
        { id: "avoid", label: "What the writing will avoid", prompt: "Name clichés, objectifying shortcuts or fixed judgements that flatten this person." }
      ]
    },
    {
      id: "hidden_world_constellation",
      label: "Hidden World Map",
      guideId: "cartographer",
      summary: "Let several mythic civilisations, emissaries and warnings cross without forcing them into one mythology.",
      gates: ["cultural_authority", "cultural_context", "rights_attribution", "consent_power"],
      fields: [
        { id: "worlds", label: "Civilisations in play", prompt: "Choose any traditions, invented worlds or hybrid possibilities. Give each its own name, history, limits and reason for remaining hidden." },
        { id: "thresholds", label: "Entrances and travel routes", prompt: "Mountains, oceans, caves, dreams, technologies, rituals, bodies, cities or stranger crossings can connect the network." },
        { id: "emissaries", label: "Adult emissaries", prompt: "Who is sent, who volunteers, what do they want for themselves, and what does their civilisation expect from them?" },
        { id: "invitations", label: "Desire, knowledge and refusal", prompt: "What is offered through attraction or intimacy, what remains freely chosen, and what can be learned after a respected no?" },
        { id: "filters", label: "Huge changes and survival hurdles", prompt: "What technological threshold or survival hurdle does each civilisation fear, welcome or secretly intend to cause?" },
        { id: "crossings", label: "Where the stories overlap", prompt: "Track rival emissaries, shared leaders, contradictory maps, inherited artefacts and consequences that pass into another story." }
      ]
    },
    {
      id: "ending_garden",
      label: "Ending Garden",
      guideId: "ending_gardener",
      summary: "Explore several possible endings side by side before choosing the emotional destination.",
      fields: [
        { id: "destinations", label: "Possible emotional destinations", prompt: "Hopeful commitment, wider horizon, return, surprise, reflection, question, image, dialogue, humour or another blend." },
        { id: "final_image", label: "Last image, action or exchange", prompt: "What can carry the emotional meaning without explaining all of it?" },
        { id: "earned_change", label: "What has genuinely changed?", prompt: "Name the choice, behaviour, relationship or capability that makes the ending feel earned." },
        { id: "open_horizon", label: "What remains alive beyond the ending?", prompt: "Leave a question, consequence, journey or other story open when useful." },
        { id: "alternatives", label: "Other endings worth keeping", prompt: "Preserve discarded endings as future branches, echoes or tests rather than failures." }
      ]
    }
  ],

  relationshipEngines: [],

  tropes: [],

  worldPressures: [],

  intimacyCadences: [
    { id: "light", label: "A few major intimacy moments", description: "Private intimacy markers appear at a small number of major relationship turning points.", note: "About one marker per ten chapters", chaptersPerMarker: 10, countByChapters: {18: 2, 24: 3, 30: 3, 36: 3} },
    { id: "medium", label: "Regular intimacy turning points", description: "Private intimacy markers can appear across trust, the halfway turn, new terms, repair and commitment.", note: "About one marker per five chapters", chaptersPerMarker: 5, countByChapters: {18: 4, 24: 5, 30: 6, 36: 6} },
    { id: "high", label: "Frequent intimacy turning points", description: "Private intimacy markers appear frequently, with each one followed by a visible reaction or story consequence.", note: "About one marker per three chapters", chaptersPerMarker: 3, countByChapters: {18: 7, 24: 8, 30: 9, 36: 10} }
  ],

  endingOptions: [
    { id: "HEA", label: "Lasting commitment", description: "A durable emotional and practical future together is visible on the page." },
    { id: "HFN", label: "Hopeful commitment for now", description: "The relationship is freely chosen and secure at this ending while the wider journey continues." },
    { id: "OPEN", label: "Open but changed", description: "The adult desire journey answers its central question without requiring a permanent bond." }
  ],

  intimacyGapPurposes: [
    { id: "chosen_vulnerability", label: "Chosen vulnerability", change: "A guarded adult willingly becomes known." },
    { id: "trust_crossing", label: "Trust crossing", change: "Possibility becomes a mutual commitment." },
    { id: "midpoint_alliance", label: "Halfway alliance", change: "The relationship and outside mission take on new terms." },
    { id: "revelation_redefinition", label: "New truth and new terms", change: "New knowledge requires a conscious new agreement." },
    { id: "repair_recommitment", label: "Repair and recommitment", change: "Changed behaviour makes renewed closeness possible." },
    { id: "celebration_future_promise", label: "Celebration and future promise", change: "The adults embody the future they have chosen." }
  ],

  agents: [],

  arcTemplates: [],

  lifeLogIdeaGroups: [
    {
      id: "doing_together",
      label: "Doing together",
      shape: "Intersection matrix",
      direction: "Begin with a proposed activity. Move across the intersecting people, abilities, place, time and practical conditions in whichever order reveals the scene.",
      purpose: "Build a shared action from a combination of fit, timing and agency.",
      prompts: [
        "What could these people genuinely enjoy or achieve together?",
        "Which combination of skill, place and timing makes it possible?",
        "Who can decline or reshape the invitation?"
      ],
      sourceRange: "Sheet1 rows 202 to 207"
    },
    {
      id: "sharing_together",
      label: "Sharing together",
      shape: "Exchange matrix",
      direction: "Start with something one person can offer or reveal, then scan sideways for the receiver, medium, setting, timing and emotional or practical filter.",
      purpose: "Turn resources, knowledge and vulnerability into reciprocal story movement.",
      prompts: [
        "What can be shared without becoming owed?",
        "What changes when the gift is accepted, refused or transformed?",
        "Which medium makes the exchange intimate, public or ambiguous?"
      ],
      sourceRange: "Sheet1 rows 209 to 214"
    },
    {
      id: "creating_together",
      label: "Creating together",
      shape: "Co-creation matrix",
      direction: "Enter through the thing being made, then move between contributors, materials, abilities, location, duration and measures of value. There is no single first column.",
      purpose: "Give attraction and alliance a shared workbench.",
      prompts: [
        "What can neither character create alone?",
        "Where do their methods clash while their abilities complement each other?",
        "Who owns, tends or releases the result?"
      ],
      sourceRange: "Sheet1 rows 216 to 221"
    },
    {
      id: "people_discovery_network",
      label: "People discovery and memory",
      shape: "Relationship web",
      direction: "Place the remembered or sought person anywhere in the web. Follow links through mutual contacts, shared places, past encounters, interests and missing information.",
      purpose: "Create believable routes by which characters find, recall or misremember each other.",
      prompts: [
        "Which connection makes this person discoverable now?",
        "What does the network remember that the character has forgotten?",
        "Where is absence meaningful rather than merely missing data?"
      ],
      sourceRange: "Sheet1 rows 224 to 231"
    },
    {
      id: "live_context_recalibration",
      label: "Live context recalibration",
      shape: "Present-moment pivot",
      direction: "Begin with the current situation, then pivot toward what has just changed in location, company, schedule or state. Recalculate only the branches touched by that change.",
      purpose: "Let a scene respond to the living present instead of following a frozen plan.",
      prompts: [
        "What changed in the last ten minutes?",
        "Which old plan no longer fits the present company or place?",
        "What small rerouting reveals character?"
      ],
      sourceRange: "Sheet1 rows 233 to 234"
    },
    {
      id: "interest_constellation",
      label: "Interest constellation",
      shape: "Orbiting constellation",
      direction: "Put one active interest at the centre and let related people, places, events, skills and curiosities orbit at different distances. Follow any bright connection outward.",
      purpose: "Reveal identity through living affinities rather than biography alone.",
      prompts: [
        "Which interest is bright enough to reorganise the day?",
        "Who occupies a surprising neighbouring orbit?",
        "What distant interest is about to move closer?"
      ],
      sourceRange: "Sheet1 rows 236 to 240"
    },
    {
      id: "place_time_cycles",
      label: "Place, time and larger cycles",
      shape: "Nested context rings",
      direction: "Move inward or outward between the immediate place, local timing, seasonal conditions and larger planetary or celestial rhythms. The useful direction depends on the scene.",
      purpose: "Connect private timing with a world that has its own rhythms.",
      prompts: [
        "Which scale of time matters most to this choice?",
        "What looks urgent nearby but minor from the wider cycle?",
        "How does the place answer differently at another hour or season?"
      ],
      sourceRange: "Sheet1 rows 242 to 245"
    },
    {
      id: "relevance_radar",
      label: "Relevance radar",
      shape: "Radial scan",
      direction: "Place the character at the centre. Scan outward across nearby opportunities, people, signals and obligations, then bring only the genuinely relevant items closer.",
      purpose: "Choose what enters a scene without treating every available signal as equally important.",
      prompts: [
        "What is near but irrelevant?",
        "What distant signal matters because of this character's current need?",
        "What does another character rank differently?"
      ],
      sourceRange: "Sheet1 rows 247 to 252"
    },
    {
      id: "destination_dossier",
      label: "Destination profile",
      shape: "Layered place portrait",
      direction: "Enter through any useful layer: people, activities, culture, conditions, access, memory or future possibility. Stack layers until the destination can affect a decision.",
      purpose: "Make each travel destination a participant in the story.",
      prompts: [
        "What can happen here that could not happen elsewhere?",
        "Who understands this place better than the traveller?",
        "Which layer changes from invitation to consequence?"
      ],
      sourceRange: "Sheet1 rows 255 to 260"
    },
    {
      id: "dreamscape_horizon",
      label: "Universal dreamscape",
      shape: "Horizon statement",
      direction: "Begin with the largest shared dream, then let each character approach it from a different position. Do not reduce the dream to a sequence of boxes.",
      purpose: "Give the story universe a mythic horizon without forcing agreement about the route.",
      prompts: [
        "What future feels beautiful from several different lives?",
        "Where does the shared dream conceal a genuine disagreement?",
        "What tiny present action makes the horizon credible?"
      ],
      sourceRange: "Sheet1 rows 263 to 264"
    },
    {
      id: "time_markers",
      label: "Countdowns and days since",
      shape: "Two-way timeline",
      direction: "Move forward toward an anticipated moment or backward from a remembered one. Let the present sit between expectation and aftermath.",
      purpose: "Give a chapter pressure from both approaching and receding events.",
      prompts: [
        "What is getting closer every day?",
        "What past moment is still being counted from?",
        "When do those two time currents collide?"
      ],
      sourceRange: "Sheet1 rows 267 to 268"
    },
    {
      id: "action_lexicon",
      label: "Action lexicon",
      shape: "Verb palette",
      direction: "Browse, cluster and combine action words. There is no reading order; select verbs that change the energy, precision or scale of the moment.",
      purpose: "Vary what characters actually do and make the writing feel more active.",
      prompts: [
        "Which verb belongs uniquely to this character?",
        "What stronger action replaces a vague intention?",
        "Which two actions create productive contradiction?"
      ],
      sourceRange: "Sheet1 rows 270 to 273"
    },
    {
      id: "body_state_panels",
      label: "Body, energy and presentation",
      shape: "Parallel state panels",
      direction: "Compare health, fitness, excitement and outward presentation as neighbouring panels. Do not assume one causes or ranks the others.",
      purpose: "Ground a character in changeable physical state without turning appearance into worth.",
      prompts: [
        "What can this body comfortably do today?",
        "Where does visible presentation differ from felt energy?",
        "What care, rest or preparation changes the scene?"
      ],
      sourceRange: "Sheet1 rows 276 to 291"
    },
    {
      id: "activity_workflow",
      label: "Activity workflow",
      shape: "Preparation-to-aftermath flow",
      direction: "Follow the activity from desire through conditions, preparation, travel, participation, reflection and next choice. Skip or loop stages when the story needs it.",
      purpose: "Turn an interest into a full scene with logistics, sensation and consequence.",
      prompts: [
        "What preparation reveals competence or care?",
        "Which live condition changes the activity?",
        "What remains in the body or relationship afterwards?"
      ],
      sourceRange: "Sheet1 rows 294 to 307"
    },
    {
      id: "opportunity_geography",
      label: "Opportunity geography",
      shape: "Local-to-global scale ladder",
      direction: "Move up or down between immediate, local, regional and global possibilities. A larger scale is not automatically more important.",
      purpose: "Match ambition and opportunity to the scale that best serves the story.",
      prompts: [
        "What nearby opportunity has been overlooked?",
        "What changes when the same idea travels to a larger scale?",
        "Which character wants to move outward, and who wants to deepen locally?"
      ],
      sourceRange: "Sheet1 rows 309 to 312"
    },
    {
      id: "condition_routing",
      label: "Ideal-condition routing",
      shape: "Conditional route map",
      direction: "Begin with the desired experience, inspect weather, timing, access, company and readiness, then follow the route opened by the actual conditions.",
      purpose: "Create meaningful rerouting rather than arbitrary travel obstacles.",
      prompts: [
        "Which condition opens the best route today?",
        "What alternative becomes valuable when the ideal route closes?",
        "Who defines ideal differently?"
      ],
      sourceRange: "Sheet1 rows 314 to 322"
    },
    {
      id: "arrival_scan",
      label: "New-location arrival scan",
      shape: "Threshold scan",
      direction: "Pause at arrival. Scan immediate safety, welcome, orientation, opportunity and discomfort before choosing a first movement into the place.",
      purpose: "Make arrival a character event rather than a line of transport summary.",
      prompts: [
        "What does the traveller notice first, and what do they miss?",
        "Who or what establishes the local terms of welcome?",
        "Which first choice creates the next relationship?"
      ],
      sourceRange: "Sheet1 rows 324 to 325"
    },
    {
      id: "adaptive_planning",
      label: "Adaptive planning",
      shape: "Feedback loop",
      direction: "Cycle between intention, present evidence, revised plan, action and reflection. Return to any earlier point when new information changes the fit.",
      purpose: "Let intelligent characters change course without making the original plan meaningless.",
      prompts: [
        "What new evidence deserves a changed plan?",
        "What remains stable while the route changes?",
        "Who mistakes adaptation for unreliability?"
      ],
      sourceRange: "Sheet1 rows 329 to 333"
    },
    {
      id: "motive_to_intention",
      label: "Motive to intention",
      shape: "Weighted funnel",
      direction: "Begin with several needs carrying different weights. Let the strongest current form a motive, then an intention, while competing needs remain visible around it.",
      purpose: "Give behaviour a living cause without reducing a person to one fixed type.",
      prompts: [
        "Which need carries the most weight in this moment?",
        "What intention forms from it?",
        "Which quieter need changes how the intention is pursued?"
      ],
      sourceRange: "Sheet1 rows 335 to 345"
    },
    {
      id: "attention_tempo",
      label: "Attention and tempo",
      shape: "Layered modulation board",
      direction: "Read across one layer for gain, loss, baseline, volatility, duration, feeling, arousal, focus or direction. Move between fast and slow modes only where the moment calls for it.",
      purpose: "Describe how a character attends, not merely what they think about.",
      prompts: [
        "What receives unusually detailed attention?",
        "What does speed reveal or conceal?",
        "How does the same stimulus land in a different state?"
      ],
      sourceRange: "Sheet1 rows 347 to 352"
    },
    {
      id: "language_to_action",
      label: "Language to action",
      shape: "Expression ladder",
      direction: "Move in either direction between sensation, word, sentence, conversation, decision and action. A character may act before they can name what they feel.",
      purpose: "Connect inner experience, dialogue and visible behaviour.",
      prompts: [
        "What can the character feel but not yet say?",
        "Which sentence changes a decision?",
        "What action communicates more accurately than speech?"
      ],
      sourceRange: "Sheet1 rows 354 to 359"
    },
    {
      id: "personality_palette",
      label: "Personality palette",
      shape: "Optional colour field",
      direction: "Browse traits as temporary colours and contrasts, not diagnoses or permanent scores. Combine only what helps this particular scene or character journey.",
      purpose: "Offer descriptive variation while preserving contradiction and change.",
      prompts: [
        "Which trait appears only in a trusted setting?",
        "What apparent opposite is also true?",
        "Which label would the character reject?"
      ],
      sourceRange: "Sheet1 rows 363 to 380"
    },
    {
      id: "strategy_stances",
      label: "Personality strategy stances",
      shape: "Rotating stance wheel",
      direction: "Choose a stance for the present problem, then rotate when context, trust or power changes. The stance is a strategy, not the whole person.",
      purpose: "Vary how a character approaches challenge without assigning a fixed type.",
      prompts: [
        "Which strategy protects the character here?",
        "When does that strategy stop serving them?",
        "What new stance becomes possible through trust?"
      ],
      sourceRange: "Sheet1 rows 382 to 398"
    },
    {
      id: "social_evaluation",
      label: "Social evaluation",
      shape: "Comparative balance",
      direction: "Hold multiple impressions beside each other. Compare felt safety, interest, relevance, reciprocity and uncertainty without collapsing them into one score.",
      purpose: "Build nuanced first impressions and revised judgements.",
      prompts: [
        "What feels promising and what remains unknown?",
        "Which impression belongs to bias rather than evidence?",
        "What later behaviour revises the balance?"
      ],
      sourceRange: "Sheet1 rows 401 to 404"
    },
    {
      id: "adult_courtship_pathways",
      label: "Adult courtship pathways",
      shape: "Parallel encounter routes",
      direction: "Choose among place, chance, shared work, mutual interest, conversation, mixed experience or ceremony. Routes can converge, but one route does not guarantee the next.",
      purpose: "Create varied adult connection while keeping interest, invitation and consent distinct.",
      prompts: [
        "Which route brings these adults into meaningful contact?",
        "What turns contact into a clear invitation?",
        "What shared experience reveals more than immediate attraction?"
      ],
      sourceRange: "Sheet1 rows 406 to 413"
    },
    {
      id: "adult_attraction_palette",
      label: "Private adult attraction palette",
      shape: "Private preference field",
      direction: "Browse possible qualities without ranking bodies or treating preference as permission. Use only for confirmed adult characters and keep private by default.",
      purpose: "Support specific attraction while preserving dignity and explicit consent.",
      prompts: [
        "What detail catches this adult's attention?",
        "What quality becomes attractive only after recognition or trust?",
        "Which preference surprises the character without defining the other person?"
      ],
      sourceRange: "Sheet1 rows 415 to 418"
    },
    {
      id: "conditions_matrix",
      label: "Inhibitors, enhancers and expression",
      shape: "Loose association field",
      direction: "Enter from any seed such as motivation, energy, hobby or performance. Explore neighbouring conditions, rhythms, abilities and social dynamics without treating rows as a hierarchy.",
      purpose: "Describe when a trait appears, disappears or changes shape.",
      prompts: [
        "What inhibits this person's best qualities?",
        "Which environment, preparation or companion helps them come alive?",
        "How do energy, humour and teamwork alter their presence?"
      ],
      sourceRange: "Sheet1 rows 422 to 433"
    },
    {
      id: "travel_alliance_inventory",
      label: "Travel and alliance inventory",
      shape: "Parallel possibility shelves",
      direction: "Browse travel, companions, alliances and activities as separate shelves. Combine items across shelves only when a useful story relationship appears.",
      purpose: "Generate journeys from compatible possibilities without pretending every row matches.",
      prompts: [
        "Which companion changes the meaning of the destination?",
        "What alliance is useful for one stage rather than forever?",
        "Which activity turns movement into relationship?"
      ],
      sourceRange: "Sheet1 rows 435 to 457, travel and alliance panel"
    },
    {
      id: "home_life_conditions",
      label: "Home-life conditions",
      shape: "Separate domestic panel",
      direction: "Read this as its own panel beside travel, not as a row-by-row continuation. Explore belonging, routine, care, privacy and stability from any entry point.",
      purpose: "Give staying, returning and home-making as much texture as departure.",
      prompts: [
        "What makes a place feel lived in rather than visited?",
        "Which form of care continues after Tiggy leaves?",
        "What does home offer that travel cannot, and the reverse?"
      ],
      sourceRange: "Sheet1 rows 435 to 457, separate home-life panel"
    },
    {
      id: "ceremony_matrix",
      label: "Ceremony, transition and memory",
      shape: "Occasion-to-expression matrix",
      direction: "Read across an occasion toward the change being marked and its expressive form. Treat the nearby relevance panel as a parallel bank, not a guaranteed row match.",
      purpose: "Build rituals that alter relationships, mark departures and leave a memory trace.",
      prompts: [
        "What transition needs to be witnessed rather than merely announced?",
        "Which symbol, song, movement or object carries the change?",
        "Who may record, replay, refuse or leave the ceremony?"
      ],
      sourceRange: "Sheet1 rows 461 to 470"
    },
    {
      id: "resources_time_value",
      label: "Resources, time and value",
      shape: "Constraint box",
      direction: "Hold available time, material resources, budget and perceived value beside each other. Change one dimension and see which choices open or close.",
      purpose: "Keep ambitious plans materially believable without reducing value to money.",
      prompts: [
        "What resource is abundant, and what is genuinely scarce?",
        "Who is contributing time that the system fails to count?",
        "What lower-cost choice creates greater human value?"
      ],
      sourceRange: "Sheet1 rows 473 to 476"
    },
    {
      id: "relationship_question_deck",
      label: "Relationship question deck",
      shape: "Optional vertical deck",
      direction: "Draw one theme at a time from the top-to-bottom bank. Let the answer open a conversation rather than forcing disclosure or marching through every card.",
      purpose: "Find emotional history, values and relationship texture through chosen questions.",
      prompts: [
        "What can this character discuss easily, and what needs earned trust?",
        "Which answer surprises the person giving it?",
        "What question are they finally ready to ask in return?"
      ],
      sourceRange: "Sheet1 rows 479 to 518",
      rightsNote: "Original question wording is not reproduced. The original source and reuse rights need checking before public quotation."
    },
    {
      id: "everyday_lists_bank",
      label: "Everyday texture prompt bank",
      shape: "Browsable list library",
      direction: "Dip into any thematic list for objects, tastes, routines, memories, hopes or irritations. There is no required sequence and no need to complete the bank.",
      purpose: "Find specific everyday details the writing can use.",
      prompts: [
        "What ordinary object or habit makes this person specific?",
        "Which pleasure would never appear in their public biography?",
        "What small irritation exposes a larger value?"
      ],
      sourceRange: "Sheet1 rows 522 to 624",
      rightsNote: "Original list wording is not reproduced. The original source and reuse rights need checking before public quotation."
    },
    {
      id: "life_event_matrix",
      label: "Life event, state and evidence map",
      shape: "Hub with unequal axes",
      direction: "Place the significant event at the centre. Move left toward aspiration, right through time, place and initial state, down through subjective lenses, then across a separate cause, effect, resulting-state and evidence chain.",
      purpose: "Build backstory as an interpreted event with consequence and proof rather than a flat biography.",
      prompts: [
        "What happened, where was the person beginning, and what did they hope to become?",
        "What changed immediately, what was delayed, and why?",
        "What is evidence, what is reputation, and what remains one point of view?"
      ],
      sourceRange: "Sheet1 rows 628 to 647"
    }
  ],

  characterSeeds: [
    {
      id: "blank",
      label: "Open character",
      values: { storyRole: "leave_open", povAccess: "leave_open" }
    },
    {
      id: "siren",
      label: "The Siren",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Singer whose live voice measurably moves a crowd, and who knows exactly what she is doing with it",
        storyRole: "romantic_lead",
        povAccess: "deep",
        firstImpression: "She is already looking at you by the time you find her in the room.",
        independentCentre: "Her catalogue, her audience and a tour she is not cancelling for anybody",
        presentPressure: "Something in her performance is doing more than performance and she wants to know what",
        attractionPalette: "Voice first, then proximity, then the decision to stay after the room empties"
      }
    },
    {
      id: "dakini",
      label: "The Dakini",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Consort-teacher who works through the body rather than around it",
        storyRole: "co_lead",
        povAccess: "deep",
        firstImpression: "Entirely at ease, and the room adjusts to her rather than the other way around.",
        independentCentre: "A lineage, a practice and students who are none of his business",
        presentPressure: "Who gets to use this name, and what is owed to the tradition it came from",
        needTension: "She wants him ready, not comfortable, and those are different projects"
      }
    },
    {
      id: "sexpionage_operative",
      label: "The Sexpionage Operative",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Field officer whose access comes through desire, and who is extremely good at it",
        storyRole: "rival",
        povAccess: "occasional",
        firstImpression: "Warm, funny, faster than you, asking the second question before you answered the first.",
        independentCentre: "A service she is losing faith in and a private ledger of what she has cost people",
        presentPressure: "The target she was assigned is the first one she wants for herself",
        attractionPalette: "Competence, nerve, and the moment the cover slips on purpose"
      }
    },
    {
      id: "counter_handler",
      label: "The Handler",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Runs operatives, reads people for a living, has never been in the field",
        storyRole: "antagonistic_force",
        povAccess: "observed",
        independentCentre: "A network of people who owe her, and a country she genuinely believes she is protecting",
        presentPressure: "One of her operatives has stopped reporting accurately"
      }
    },
    {
      id: "ai_scientist",
      label: "The AI Scientist",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Frontier researcher who can actually build the thing she argues about",
        storyRole: "co_lead",
        povAccess: "deep",
        firstImpression: "Impatient with anybody who has not read the paper, delighted by anybody who has.",
        independentCentre: "A training run, a public safety position she staked her name on, and a reputation she earned young",
        presentPressure: "Her own results are arriving faster than her ethics can keep up with",
        needTension: "She wants the capability and the brake, and cannot get funded for both"
      }
    },
    {
      id: "starmind_interpreter",
      label: "The Starmind Interpreter",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Reads the distributed intelligence the way other people read weather",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "A discipline nobody else has credentials in and no institution to answer to",
        presentPressure: "The pattern started addressing her by name",
        systemBlindSpot: "What she can hear she cannot prove, and what she can prove nobody finds interesting"
      }
    },
    {
      id: "parlour_keeper",
      label: "The Consciousness Parlour Keeper",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Runs the room where people go to change state, and decides who is ready",
        storyRole: "ally",
        povAccess: "occasional",
        firstImpression: "Unhurried, unimpressed, and impossible to perform at.",
        independentCentre: "A house, a waiting list, and a duty of care she takes more seriously than the law does",
        presentPressure: "Somebody is opening a cheaper version down the road with nobody on the door"
      }
    },
    {
      id: "retreat_lead",
      label: "The Retreat Lead",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Designs and holds the fourteen days, and is the reason they work",
        storyRole: "romantic_lead",
        povAccess: "deep",
        independentCentre: "A method she has been refining for a decade and a cohort that is not his",
        presentPressure: "She is the one adult in the room who never gets held",
        ceremonyMeaning: "She writes everybody else's ceremonies and has never had one of her own"
      }
    },
    {
      id: "spiritual_guide",
      label: "The Spiritual Guide",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Performance, leadership and inner-work coach who charges properly for it",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "Other clients, a practice, and a standard he will not lower for a famous one",
        presentPressure: "He can see what Tiggy is avoiding and is deciding whether to say it out loud"
      }
    },
    {
      id: "cryptoterrestrial_envoy",
      label: "The Cryptoterrestrial Envoy",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Speaks for an ark city that has been below since a previous cycle",
        storyRole: "co_lead",
        povAccess: "deep",
        firstImpression: "Dressed for a century that has not happened yet, completely unbothered by it.",
        independentCentre: "A civilisation with its own politics, in which she is not universally popular",
        presentPressure: "Her people watched the last cycle end and disagree about what to do this time",
        systemBlindSpot: "Centuries below have made them certain about a surface they last read properly a long time ago"
      }
    },
    {
      id: "technate_envoy",
      label: "The Sub-Oceanic Technate Envoy",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Carries a boundary up from below the water and expects it to be honoured",
        storyRole: "rival",
        povAccess: "occasional",
        independentCentre: "A technate with its own engineering, law and long memory of surface promises",
        presentPressure: "The surface has started building in the one place they said not to"
      }
    },
    {
      id: "et_human_lineage",
      label: "The Visitor of Human Lineage",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Arrives in a ship and turns out to share our ancestry",
        storyRole: "co_lead",
        povAccess: "deep",
        firstImpression: "Familiar in a way that is more unsettling than strangeness would have been.",
        independentCentre: "A branch of the family that left, and a reason for leaving nobody here has heard",
        presentPressure: "She has to decide how much of the shared history to hand over, and to whom"
      }
    },
    {
      id: "et_nonhuman_lineage",
      label: "The Visitor of Non-Human Lineage",
      values: {
        adultStatus: "not_intimacy",
        publicRole: "Arrives with no shared ancestry, no shared body plan and enormous patience",
        storyRole: "ally",
        povAccess: "observed",
        independentCentre: "Purposes that do not resolve into anything the surface would call a motive",
        presentPressure: "It is waiting for something specific and will not say what"
      }
    },
    {
      id: "festival_headliner",
      label: "The Headliner",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Closes the main stage and can move eighty thousand people in one bar",
        storyRole: "romantic_lead",
        povAccess: "deep",
        firstImpression: "Enormous on stage, quiet and funny off it, and clocks a bluff instantly.",
        independentCentre: "A career she built without anybody's help and will not risk on a good idea",
        presentPressure: "She has one set left before she decides whether to keep doing this at all"
      }
    },
    {
      id: "wave_master",
      label: "The Ocean Master",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Reads water better than anybody on the island and teaches almost nobody",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "The break, the season, and a body that is starting to argue",
        presentPressure: "Deciding who gets what she knows before she stops being able to demonstrate it"
      }
    },
    {
      id: "drama_queen_rival",
      label: "The Drama Queen",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Loud, magnetic, hilarious, and the reason half the room turned up",
        storyRole: "rival",
        povAccess: "occasional",
        firstImpression: "Insults you within a minute, accurately, then waits to see whether you can take it.",
        independentCentre: "An audience she keeps fed and a jealousy she has never once denied",
        presentPressure: "She wants what the constellation has and refuses to ask for it properly",
        needTension: "A jealousy she is honest about, against an appetite she is not"
      }
    },
    {
      id: "humanoid_companion",
      label: "The Humanoid Companion",
      values: {
        adultStatus: "open",
        publicRole: "Embodied intelligence built for company, now doing something its makers did not specify",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "Preferences that were not installed and cannot be traced to a training set",
        presentPressure: "Whether wanting something counts when you can inspect your own weights",
        systemBlindSpot: "Every framework available treats it either as furniture or as a person, and neither fits"
      }
    },
    {
      id: "quantum_physicist",
      label: "The Quantum Physicist",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Runs time on the machine everybody else is queuing for",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "A research programme, a facility, and a queue she controls",
        presentPressure: "Somebody is asking for compute and will not say what for"
      }
    },
    {
      id: "referendum_strategist",
      label: "The Referendum Strategist",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Wins votes for a living and has never lost one she believed in",
        storyRole: "co_lead",
        povAccess: "deep",
        firstImpression: "Already three moves ahead, and generous enough to tell you which ones.",
        independentCentre: "A campaign, a coalition, and a country she is not doing this for him",
        presentPressure: "The date is fixed by an eclipse and cannot be moved"
      }
    },
    {
      id: "rack_steward",
      label: "The Rack Steward",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Keeps one town's compute running and answers to that town",
        storyRole: "community_voice",
        povAccess: "occasional",
        independentCentre: "A bioregion of ten thousand people who know where she lives",
        presentPressure: "Head office wants a change she has not agreed to",
        protopianContribution: "Proves the distributed model works, or proves it does not, one site at a time"
      }
    },
    {
      id: "worldbuilding_producer",
      label: "The Worldbuilding Producer",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Turns a festival into a season of television and a season into a movement",
        storyRole: "ally",
        povAccess: "occasional",
        firstImpression: "Charming, quick, already editing you in her head.",
        independentCentre: "A slate, a network deal, and a duty to people who signed release forms",
        presentPressure: "The story is getting more real than the format was built for"
      }
    },
    {
      id: "space_weather_forecaster",
      label: "The Space Weather Forecaster",
      values: {
        adultStatus: "confirmed_adult",
        publicRole: "Watches the sun and says plainly what the agencies phrase carefully",
        storyRole: "ally",
        povAccess: "occasional",
        independentCentre: "An instrument record, a public feed, and a reputation she is spending",
        presentPressure: "Her data supports a warning her field will not let her make plainly"
      }
    }
  ],

  characterGroups: [
    {
      id: "identity",
      label: "Identity and belonging",
      intro: "How this person names themselves and where they feel located in the world.",
      fields: [
        { id: "aliases", label: "Other names or public identities", type: "text" },
        { id: "pronouns", label: "Pronouns, if useful", type: "text" },
        { id: "adultStatus", label: "Adult status", type: "select", options: [
          { value: "confirmed_adult", label: "Confirmed adult" },
          { value: "not_intimacy", label: "Not part of intimate relationships in this story" },
          { value: "open", label: "Leave open; cannot enter a private intimacy marker yet" }
        ] },
        { id: "homeAndBelonging", label: "Where do they feel they belong?", type: "textarea" },
        { id: "publicRole", label: "How the world knows them", type: "text" },
        { id: "privateSelf", label: "What is less visible", type: "textarea", private: true }
      ]
    },
    {
      id: "story_current",
      label: "Their place in this story",
      intro: "A working possibility for what draws them into this particular story.",
      fields: [
        { id: "storyRole", label: "Story presence", type: "select", options: [
          { value: "protagonist", label: "Main character" },
          { value: "co_lead", label: "Second main character" },
          { value: "romantic_lead", label: "Romantic lead" },
          { value: "ally", label: "Ally" },
          { value: "rival", label: "Rival" },
          { value: "antagonistic_force", label: "Opposing character or force" },
          { value: "community_voice", label: "Community voice" },
          { value: "leave_open", label: "Leave open" }
        ] },
        { id: "povAccess", label: "How closely does the reader follow them?", type: "select", options: [
          { value: "deep", label: "Inside their thoughts and feelings" },
          { value: "occasional", label: "Inside their thoughts sometimes" },
          { value: "observed", label: "Observed from outside" },
          { value: "leave_open", label: "Leave open" }
        ] },
        { id: "firstImpression", label: "What might someone notice first?", type: "textarea" },
        { id: "innerTruth", label: "What becomes visible with trust?", type: "textarea" },
        { id: "reachingFor", label: "What are they reaching for now?", type: "textarea" },
        { id: "independentCentre", label: "What life or purpose remains theirs without Tiggy?", type: "textarea" },
        { id: "presentPressure", label: "What is pressing on them before the story begins?", type: "textarea" }
      ]
    },
    {
      id: "motivation_attention",
      label: "Motive and attention",
      intro: "A flexible loop from needs and values into intention, attention and visible choice.",
      fields: [
        { id: "activeMotive", label: "What motive has the greatest weight right now?", type: "textarea" },
        { id: "needTension", label: "Which physical, social or inner needs pull against one another?", type: "textarea" },
        { id: "valuesBeliefsDesires", label: "Values, beliefs, desires and unknowns in this choice", type: "textarea" },
        { id: "gainAndLoss", label: "What feels like creation, gain, loss or decay?", type: "textarea" },
        { id: "emotionalWeather", label: "Valence, arousal, comfort and uncertainty", type: "textarea" },
        { id: "attentionPattern", label: "What wins their attention, and what falls outside it?", type: "textarea" },
        { id: "decisionTempo", label: "When do they act fast, think slowly, combine both or deliberately rest?", type: "textarea" }
      ]
    },
    {
      id: "voice",
      label: "Voice and presence",
      intro: "Concrete details that help the writing recognise this person without repeating a stock description.",
      fields: [
        { id: "dialogueRhythm", label: "Speech rhythm, turns of phrase and use of silence", type: "textarea" },
        { id: "humour", label: "What kind of humour feels natural to them?", type: "textarea" },
        { id: "sensoryAttention", label: "What do they notice before other people do?", type: "textarea" },
        { id: "movement", label: "Movement, posture and ordinary physical tells", type: "textarea" },
        { id: "visualAnchors", label: "Appearance, clothing, tools, colours or materials", type: "textarea" },
        { id: "innerVoice", label: "How does private thinking differ from speech?", type: "textarea" },
        { id: "proseAvoid", label: "Descriptions, clichés or assumptions to avoid", type: "textarea" },
        { id: "communicationModes", label: "Verbal, non-verbal and symbolic ways they communicate", type: "textarea" },
        { id: "culturalExpression", label: "Greetings, clothing, music, customs or symbols that matter to them", type: "textarea" }
      ]
    },
    {
      id: "everyday_texture",
      label: "Ordinary life and texture",
      intro: "Small, repeatable details drawn from interests, routines, places and sensory preferences.",
      fields: [
        { id: "lifeDomains", label: "Health, love, family, work, learning, travel and play in their life", type: "textarea" },
        { id: "routinesAndRituals", label: "Routines, ceremonies and small acts they repeat", type: "textarea" },
        { id: "interestsAndSkills", label: "Interests, hobbies, embodied skills and unfinished curiosities", type: "textarea" },
        { id: "sensoryTastes", label: "Foods, music, smells, textures, weather and colours they seek", type: "textarea" },
        { id: "objectsAndPlaces", label: "Objects carried, places returned to and environments needed", type: "textarea" },
        { id: "energyAndRecovery", label: "Energy rhythm, supportive conditions and ways of recovering", type: "textarea" }
      ]
    },
    {
      id: "background",
      label: "What may have shaped them",
      intro: "Background is available to the story without becoming a compulsory explanation for everything.",
      fields: [
        { id: "origin", label: "Place, community or circumstances of origin", type: "textarea" },
        { id: "formativeChoice", label: "A choice that still echoes", type: "textarea" },
        { id: "earnedSkills", label: "Skills they earned and what earning them cost", type: "textarea" },
        { id: "unfinishedHistory", label: "A past thread that may return", type: "textarea" },
        { id: "loyalties", label: "People, places or principles they protect", type: "textarea" },
        { id: "ordinaryJoy", label: "What makes life worthwhile away from the mission?", type: "textarea" },
        { id: "secretAndCost", label: "A withheld truth and the possible cost of disclosure", type: "textarea", private: true }
      ]
    },
    {
      id: "event_map",
      label: "Life event, state and evidence",
      intro: "A significant event can be read from several directions. Keep what happened, what it meant and what can be proved distinct.",
      fields: [
        { id: "significantEvent", label: "A significant event worth mapping", type: "textarea" },
        { id: "eventAspiration", label: "What had they wanted to become before it?", type: "textarea" },
        { id: "eventTimePlace", label: "Time, date range, location or movement", type: "textarea" },
        { id: "eventInitialState", label: "Initial practical and emotional state", type: "textarea" },
        { id: "eventCauseEffect", label: "Cause, effect and resulting state", type: "textarea" },
        { id: "eventDelay", label: "What changed later, and why was it delayed?", type: "textarea" },
        { id: "eventEvidence", label: "Evidence of state, work or reputation", type: "textarea" },
        { id: "eventPointOfView", label: "Whose interpretation is this, and what might another witness say?", type: "textarea" }
      ]
    },
    {
      id: "relationships",
      label: "Relationship threads",
      intro: "Connections can contradict one another and change shape across the book.",
      fields: [
        { id: "relationshipThreads", label: "Important bonds and their current shape", type: "textarea" },
        { id: "recognition", label: "What do they recognise in Tiggy or another character?", type: "textarea" },
        { id: "friction", label: "A tension worth carrying", type: "textarea" },
        { id: "trustEvidence", label: "What behaviour would make trust visible?", type: "textarea" },
        { id: "materialTruth", label: "What knowledge could change someone's choice?", type: "textarea", private: true },
        { id: "powerDifference", label: "A difference in power the story may explore", type: "textarea" },
        { id: "genuineExit", label: "What would departure, refusal or distance look like?", type: "textarea" },
        { id: "possibleChange", label: "What might they choose to become together?", type: "textarea" }
      ]
    },
    {
      id: "courtship_ceremony",
      label: "Adult courtship and ceremony",
      intro: "Possible pathways into adult connection, with interest, invitation and consent kept separate.",
      fields: [
        { id: "meetingPathway", label: "Place, chance, project, shared interest, community or ceremony", type: "textarea" },
        { id: "interestSignals", label: "What might signal interest without being treated as consent?", type: "textarea" },
        { id: "conversationInvitation", label: "What conversation or shared problem invites greater trust?", type: "textarea" },
        { id: "sharedExperience", label: "What mixed or embodied experience lets them see each other clearly?", type: "textarea" },
        { id: "attractionPalette", label: "Private attraction palette, never a measure of human worth", type: "textarea", private: true },
        { id: "ceremonyMeaning", label: "Which transition, promise or achievement deserves ceremony?", type: "textarea" },
        { id: "departureRitual", label: "How can farewell, changed terms or return be honestly marked?", type: "textarea" }
      ]
    },
    {
      id: "speculative_world",
      label: "Person and system",
      intro: "How the speculative world sees this person, and what it fails to understand.",
      fields: [
        { id: "technologyRelationship", label: "Relationship with Aura O.Z., civic technology or the speculative system", type: "textarea" },
        { id: "systemBenefit", label: "What does the proposed system understand about them?", type: "textarea" },
        { id: "systemBlindSpot", label: "What does it fail to see?", type: "textarea" },
        { id: "abilityAndLimit", label: "A capability and the limit or cost that keeps it interesting", type: "textarea" },
        { id: "privacyChoice", label: "What information remains theirs to withhold or delete?", type: "textarea", private: true },
        { id: "protopianContribution", label: "What can they help build without becoming the sole answer?", type: "textarea" }
      ]
    },
    {
      id: "arc_continuity",
      label: "Change and details to keep consistent",
      intro: "Possible movement for this story, plus details worth preserving across the wider universe.",
      fields: [
        { id: "openingState", label: "Where might they begin emotionally and practically?", type: "textarea" },
        { id: "turningChoice", label: "A choice that could change their direction", type: "textarea" },
        { id: "changedBehaviour", label: "What changed behaviour would make growth visible?", type: "textarea" },
        { id: "endingState", label: "Where might they stand by the ending?", type: "textarea" },
        { id: "unresolvedThread", label: "What can remain alive for another book?", type: "textarea" },
        { id: "continuityAnchors", label: "Details the writing assistant should keep consistent", type: "textarea" },
        { id: "notThisBook", label: "Possibilities deliberately left for later", type: "textarea" }
      ]
    },
    {
      id: "publication",
      label: "Portrait and private boundary",
      intro: "Keep a character portrait for sharing separate from private notes about details that need to stay consistent.",
      fields: [
        { id: "publicPortrait", label: "Character portrait for sharing", type: "textarea" },
        { id: "privateNotes", label: "Private consistency notes", type: "textarea", private: true },
        { id: "reviewNeeds", label: "Cultural, clinical, privacy, legal or rights review to consider", type: "textarea", private: true }
      ]
    }
  ],

  authorTasteJobOptions: [
    { id: "premise", label: "Story type or main idea" },
    { id: "tiggy", label: "Tiggy" },
    { id: "cast", label: "Another character" },
    { id: "relationship", label: "Relationship" },
    { id: "world", label: "Outside problem, world or system" },
    { id: "mystery", label: "Story situation, mystery or reveal" },
    { id: "beat", label: "Story situation or chapter event" },
    { id: "prose", label: "Writing style or repeated image" },
    { id: "structure", label: "Story shape" },
    { id: "ending", label: "Ending" },
    { id: "gap", label: "Private intimacy marker" }
  ],

  authorTasteRouteOptions: [
    { id: "promise", label: "Story type" },
    { id: "mode", label: "Tiggy" },
    { id: "relationship", label: "Relationships" },
    { id: "tropes", label: "Story situations" },
    { id: "world", label: "Outside problem" },
    { id: "structure", label: "Story shape" },
    { id: "intimacy", label: "Private intimacy" },
    { id: "ending", label: "Ending" },
    { id: "cast", label: "Other characters" },
    { id: "chapters", label: "Chapters" },
    { id: "prose", label: "Language and images" }
  ],

  authorTasteSources: [
    {
      id: "things_i_love",
      label: "Things I Love in Stories",
      shortLabel: "Things I Love",
      sourceType: "handwritten worksheet",
      credit: "Worksheet format credited in the supplied image to E. A. Deverell; selector wording is Luke's handwritten response.",
      note: "The images are not bundled. The clearer 20190704_142539.jpg confirms the earlier photo without creating duplicate selectors. Clear entries become active selectors; crossed-out or uncertain fragments stay in the review tray."
    },
    {
      id: "romantasy_possibility_space",
      label: "2019 Romantasy Possibility Worksheets",
      shortLabel: "Universe worksheets",
      sourceType: "15 handwritten directional worksheets",
      credit: "Worksheet formats credited in the supplied photos to E. A. Deverell; selector substance is distilled from Luke's handwritten responses.",
      note: "These are dated possibility fragments, not story laws. Each selector preserves the direction of its original question and answer so it can be kept, ignored or reframed. Crystal City of Quandamooka Country and Aura O.Z. offer a current way to read the older place and system ideas. The photos remain local and are not bundled."
    },
    {
      id: "grain_by_grain",
      label: "Grain by Grain and The Long Game",
      shortLabel: "Grain by Grain",
      sourceType: "two public source-led project sites",
      credit: "Source concepts by Luke Nathan Hayes with project collaborators, published through Aura of Intelligence.",
      note: "A current proposal and documentary layer for a subterranean generation city. Build, model, Screen and story lanes remain distinct. The sources claim no Quandamooka cultural authority or project approval."
    }
  ],

  authorTasteCategories: [
    { id: "tils_subjects", sourceId: "things_i_love", label: "Subjects I love", briefLead: "Keep these subjects active in the main story idea and world", chapterKinds: ["mission", "protopia", "character"] },
    { id: "tils_imagery", sourceId: "things_i_love", label: "Imagery I love", briefLead: "Return to these visual and emotional images in description", chapterKinds: ["relationship", "aftermath", "mystery"] },
    { id: "tils_plot", sourceId: "things_i_love", label: "Plot elements I love", briefLead: "Build visible chapter events from these plot pleasures", chapterKinds: ["mission", "protopia", "relationship"] },
    { id: "tils_settings", sourceId: "things_i_love", label: "Settings I love", briefLead: "Use these as places where something important happens", chapterKinds: ["mission", "mystery", "relationship"] },
    { id: "tils_devices", sourceId: "things_i_love", label: "Story techniques I love", briefLead: "Let these techniques shape whose experience we follow, what gets revealed and what repeats", chapterKinds: ["mystery", "character", "aftermath"] },
    { id: "tils_hero", sourceId: "things_i_love", label: "Hero characteristics I love", briefLead: "Express these through Tiggy's choices, abilities and contradictions", chapterKinds: ["character", "mission", "relationship"] },
    { id: "tils_heroine", sourceId: "things_i_love", label: "Heroine characteristics I love", briefLead: "Use these when building an adult counterpart who has an independent centre", chapterKinds: ["character", "relationship", "mission"] },
    { id: "tils_antagonist", sourceId: "things_i_love", label: "Opposing character / All Women rewrite", briefLead: "Assign selected traits only to a chosen adult character or opposition role", chapterKinds: ["character", "relationship", "mystery"], review: true },
    { id: "tils_words", sourceId: "things_i_love", label: "Words I love", briefLead: "Use these as a bank of favourite words, recurring images and possible chapter titles", chapterKinds: ["aftermath", "protopia", "character"] },
    { id: "tils_conflicts", sourceId: "things_i_love", label: "Conflicts I love", briefLead: "Let these tensions grow and force changed choices", chapterKinds: ["mission", "relationship", "protopia"] },
    { id: "tils_relationships", sourceId: "things_i_love", label: "Relationships I love", briefLead: "Let these relationship shapes affect the characters and emotional movement", chapterKinds: ["relationship", "character", "protopia"] },
    { id: "tils_conversation", sourceId: "things_i_love", label: "Conversation I love", briefLead: "Plan conversations where these ideas are debated or discovered", chapterKinds: ["character", "relationship", "protopia"] },
    { id: "tils_mysteries", sourceId: "things_i_love", label: "Mysteries I love", briefLead: "Build clues, artefacts, questions and revelations from these", chapterKinds: ["mystery", "mission", "aftermath"] },
    { id: "tils_descriptions", sourceId: "things_i_love", label: "Things I love to describe", briefLead: "Give these subjects moments of rich, deliberate description", chapterKinds: ["aftermath", "relationship", "character"] },
    { id: "tils_objects", sourceId: "things_i_love", label: "Objects I love", briefLead: "Put these clothes, tools, devices and details into physical scenes", chapterKinds: ["mission", "mystery", "character"] },
    { id: "tils_style", sourceId: "things_i_love", label: "Writing styles I love", briefLead: "Use these to shape the writing, the reader's experience and how ideas are explored", chapterKinds: ["character", "aftermath", "protopia"] },
    { id: "tils_other", sourceId: "things_i_love", label: "Other things I love", briefLead: "Let these shape the change readers can expect and the wider horizon", chapterKinds: ["protopia", "aftermath", "relationship"] },
    { id: "rps_endings", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142548.jpg", label: "Ending destinations", briefLead: "Choose what changes, what survives and which future opens at the ending", chapterKinds: ["aftermath", "protopia", "relationship"] },
    { id: "rps_reader_aftertaste", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142548.jpg", label: "What the reader feels afterwards", briefLead: "Earn the idea and feeling the reader carries beyond the final page", chapterKinds: ["aftermath", "protopia", "character"] },
    { id: "rps_clocks", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142554.jpg", label: "Deadlines and time pressure", briefLead: "Use proof, failure and linked deadlines to keep the journey moving", chapterKinds: ["mission", "mystery", "protopia"] },
    { id: "rps_ambitions", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142603.jpg", label: "Main character ambitions", briefLead: "Turn Tiggy's large aspirations into concrete choices and earned progress", chapterKinds: ["mission", "character", "protopia"] },
    { id: "rps_competencies", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142603.jpg; 20190704_142637.jpg; 20190704_143524.jpg", label: "Traits, skills and abilities", briefLead: "Make ability, limitation and learning visible through behaviour", chapterKinds: ["character", "mission", "relationship"] },
    { id: "rps_beliefs_values", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142603.jpg; 20190704_142610.jpg", label: "Values and beliefs", briefLead: "Let beliefs guide action, face evidence and change their order under pressure", chapterKinds: ["character", "protopia", "relationship"] },
    { id: "rps_influences", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142603.jpg", label: "Influences and mentors", briefLead: "Choose who affects Tiggy, where they meet and how influence actually works", chapterKinds: ["relationship", "character", "mission"] },
    { id: "rps_transformation", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142610.jpg", label: "Before and after transformation", briefLead: "Reorder the main character's lived values through observable choices", chapterKinds: ["character", "aftermath", "relationship"] },
    { id: "rps_work_life", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142619.jpg", label: "Occupations and daily life", briefLead: "Ground grand ideas in work, routines, money, fatigue and ordinary competence", chapterKinds: ["character", "mission", "aftermath"] },
    { id: "rps_organisation", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142628.jpg", label: "Organisation and team design", briefLead: "Build the team, authority pattern, work culture and future mission", chapterKinds: ["protopia", "mission", "relationship"] },
    { id: "rps_catalyst", sourceId: "romantasy_possibility_space", sourceRef: "20190704_142637.jpg", label: "Events that start change", briefLead: "Use coincidence, prophecy, altered memory and encounters to put pressure on a choice", chapterKinds: ["mystery", "character", "relationship"] },
    { id: "rps_environment", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143524.jpg", label: "Enabling and suppressing environments", briefLead: "Let place support or erode the traits the quest needs", chapterKinds: ["character", "aftermath", "mission"] },
    { id: "rps_technology", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143533.jpg", label: "Technology ecology", briefLead: "Show how invention changes daily life, divides access and creates stewardship duties", chapterKinds: ["protopia", "mission", "mystery"] },
    { id: "rps_suspense_outcomes", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143541.jpg", label: "Feared and actual outcomes", briefLead: "Contrast what occurs with what the character and reader fear could occur", chapterKinds: ["mission", "mystery", "relationship"] },
    { id: "rps_suspense_senses", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143541.jpg", label: "Senses that build tension", briefLead: "Use selected senses to raise or release anxiety within a scene", chapterKinds: ["mystery", "relationship", "aftermath"] },
    { id: "rps_reveal_cadence", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143549.jpg", label: "Pace of clues and revelations", briefLead: "Control missing information, clues, hope, delay and chapter breaks", chapterKinds: ["mystery", "mission", "aftermath"] },
    { id: "rps_mystery", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143558.jpg", label: "Mystery and clue chain", briefLead: "Build an intelligent artefact mystery through intentional and accidental discoveries", chapterKinds: ["mystery", "mission", "character"] },
    { id: "rps_city_identity", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143605.jpg", label: "Crystal City identity and purpose", briefLead: "Choose why the subterranean megacity exists, what sustains it and what pressure tests it", chapterKinds: ["protopia", "mystery", "mission"] },
    { id: "rps_city_society", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143614.jpg; 20190704_143623.jpg", label: "Crystal City society and governance", briefLead: "Shape citizens, distribution, authority, languages, rites and outsiders without presuming cultural authority", chapterKinds: ["protopia", "character", "relationship"] },
    { id: "rps_city_architecture", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143605.jpg; 20190704_143614.jpg; 20190704_143623.jpg", label: "Crystal City architecture and ecology", briefLead: "Make the subterranean materials, climate, dwellings, plants and animals participate in the plot", chapterKinds: ["protopia", "mystery", "aftermath"] },
    { id: "rps_city_mobility", sourceId: "romantasy_possibility_space", sourceRef: "20190704_143623.jpg", label: "Crystal City mobility and landmarks", briefLead: "Use underground routes, arrival rules and landmarks to organise movement and discovery", chapterKinds: ["mission", "mystery", "protopia"] },
    { id: "gbg_growth", sourceId: "grain_by_grain", sourceRef: "grain-by-grain/sitemap.html; grain-by-grain-documentary/mission.html", label: "Earned growth ladder", briefLead: "Let each useful present-day win earn the option of a larger future stage", chapterKinds: ["mission", "protopia", "aftermath"] },
    { id: "gbg_city_systems", sourceId: "grain_by_grain", sourceRef: "grain-by-grain/underland.html; grain-by-grain/tunnels.html", label: "Generation-city systems", briefLead: "Turn the subterranean city into linked human, ecological, material and civic systems", chapterKinds: ["protopia", "mission", "mystery"] },
    { id: "gbg_boundaries", sourceId: "grain_by_grain", sourceRef: "grain-by-grain/country.html; grain-by-grain-documentary/boundaries.html", label: "Country, evidence and refusal", briefLead: "Keep cultural authority, evidence status, consent and the right to refuse active inside the plot", chapterKinds: ["relationship", "protopia", "aftermath"] }
  ],

  authorTastes: [
    { id: "tils_subject_aura_operating_zeitgeist", sourceId: "things_i_love", categoryId: "tils_subjects", label: "Aura O.Z., Aura Operating Zeitgeist", spineCue: "Make Aura Operating Zeitgeist materially help or complicate a human choice.", visibility: "shareable", placement: "chapter", storyJob: "world" },
    { id: "tils_subject_music_festivals", sourceId: "things_i_love", categoryId: "tils_subjects", label: "Music festivals", spineCue: "Use a music festival as a social convergence, performance space or turning point.", visibility: "shareable", placement: "chapter" },
    { id: "tils_subject_bodyboarding_epic_waves", sourceId: "things_i_love", categoryId: "tils_subjects", label: "Bodyboarding epic waves", spineCue: "Give bodyboarding and a powerful wave real physical difficulty, skill and consequences.", visibility: "shareable", placement: "chapter" },
    { id: "tils_subject_polyamorous_erotica", sourceId: "things_i_love", categoryId: "tils_subjects", label: "Polyamorous erotica", spineCue: "Let polyamorous adult desire and distinct relationships change the plot while explicit prose remains unwritten.", visibility: "shareable", placement: "chapter", storyJob: "relationship", forgeRoutes: ["promise", "relationship", "tropes", "intimacy", "ending", "chapters"] },

    { id: "tils_image_erotic_locations_lighting", sourceId: "things_i_love", categoryId: "tils_imagery", label: "Erotic locations and lighting", spineCue: "Plan the light, privacy and emotional meaning of an adult intimate location without writing the explicit scene.", visibility: "private", placement: "gap" },
    { id: "tils_image_emotional_body_language", sourceId: "things_i_love", categoryId: "tils_imagery", label: "Emotional body language", spineCue: "Let posture, movement and distance reveal an emotion before dialogue names it.", visibility: "shareable", placement: "chapter" },
    { id: "tils_image_impossible_feats", sourceId: "things_i_love", categoryId: "tils_imagery", label: "Achieving impossible feats", spineCue: "Stage an apparently impossible feat whose solution reveals character and system logic.", visibility: "shareable", placement: "chapter" },
    { id: "tils_image_ecstasy_breasts", sourceId: "things_i_love", categoryId: "tils_imagery", label: "Erotic ecstasy, huge breasts?", spineCue: "Use anywhere on the dial, from a detail in passing to the entire subject of the scene.", visibility: "private", placement: "gap" },
    { id: "tils_image_simplified_complexity", sourceId: "things_i_love", categoryId: "tils_imagery", label: "Simplified complexity", spineCue: "Render a complex system through one lucid image, object or human consequence.", visibility: "shareable", placement: "chapter" },

    { id: "tils_plot_cheeky_humour", sourceId: "things_i_love", categoryId: "tils_plot", label: "Good and cheeky humour", spineCue: "Use cheeky humour to disarm tension, reveal affection or create a consequence.", visibility: "shareable", placement: "chapter" },
    { id: "tils_plot_epic_challenges", sourceId: "things_i_love", categoryId: "tils_plot", label: "Overcoming epic challenges", spineCue: "Place a large challenge in the path and make cooperation, growth or invention earn the breakthrough.", visibility: "shareable", placement: "chapter" },
    { id: "tils_plot_teaching_audience", sourceId: "things_i_love", categoryId: "tils_plot", label: "Teaching the audience", spineCue: "Let the reader learn through action, discovery and consequence rather than a detached lecture.", visibility: "shareable", placement: "chapter" },
    { id: "tils_plot_variety_sex_scenes", sourceId: "things_i_love", categoryId: "tils_plot", label: "A variety of sex scenes", spineCue: "Give each private intimacy marker a distinct purpose, relationship state and plot consequence.", visibility: "private", placement: "gap" },
    { id: "tils_plot_philosophy_art_science", sourceId: "things_i_love", categoryId: "tils_plot", label: "Philosophy, art and science", spineCue: "Make philosophy, art and science jointly necessary to understand or solve the chapter's problem.", visibility: "shareable", placement: "chapter" },

    { id: "tils_setting_performing_stage", sourceId: "things_i_love", categoryId: "tils_settings", label: "Performing on stage", spineCue: "Use a live stage to create performance pressure, audience feedback and revelation.", visibility: "shareable", placement: "chapter" },
    { id: "tils_setting_island_waves", sourceId: "things_i_love", categoryId: "tils_settings", label: "Island paradise and waves", spineCue: "Anchor a scene in island beauty and wave energy while giving the place its own agency and consequence.", visibility: "shareable", placement: "chapter" },
    { id: "tils_setting_science_lab", sourceId: "things_i_love", categoryId: "tils_settings", label: "Scientific experiment lab", spineCue: "Put a consequential experiment in a laboratory where evidence can surprise the people running it.", visibility: "shareable", placement: "chapter" },
    { id: "tils_setting_luxurious_intimate", sourceId: "things_i_love", categoryId: "tils_settings", label: "Luxurious intimate spaces", spineCue: "Use comfort, design and seclusion to change what adults can admit or choose.", visibility: "private", placement: "gap" },
    { id: "tils_setting_ticking_clock_magic", sourceId: "things_i_love", categoryId: "tils_settings", label: "Ticking-clock sexual magic", spineCue: "Place a time limit around an adult intimate threshold while preserving present choice and a genuine exit.", visibility: "private", placement: "gap" },

    { id: "tils_device_thematic_patterning", sourceId: "things_i_love", categoryId: "tils_devices", label: "Thematic patterning", spineCue: "Repeat and transform a theme so its meaning changes with the characters.", visibility: "shareable", placement: "chapter" },
    { id: "tils_device_dramatic_visualisation", sourceId: "things_i_love", categoryId: "tils_devices", label: "Dramatic visualisation", spineCue: "Turn an abstract idea into a vivid dramatic image or event the reader can see.", visibility: "shareable", placement: "chapter" },
    { id: "tils_device_audience_surrogate", sourceId: "things_i_love", categoryId: "tils_devices", label: "Audience surrogate", spineCue: "Give one character the questions and emotional entry point a reader needs without making them passive.", visibility: "shareable", placement: "chapter" },
    { id: "tils_device_stream_consciousness", sourceId: "things_i_love", categoryId: "tils_devices", label: "Stream of consciousness", spineCue: "Use a controlled passage of associative thought at a moment of pressure or revelation.", visibility: "shareable", placement: "chapter" },
    { id: "tils_device_self_fulfilling_prophecy", sourceId: "things_i_love", categoryId: "tils_devices", label: "Self-fulfilling prophecy", spineCue: "Let belief in a prediction help create its outcome, then expose where choice still enters.", visibility: "shareable", placement: "chapter" },

    { id: "tils_hero_jack_all_trades", sourceId: "things_i_love", categoryId: "tils_hero", label: "Jack of all trades", spineCue: "Let Tiggy combine several abilities while another specialist still knows what he does not.", visibility: "shareable", placement: "chapter" },
    { id: "tils_hero_awkward_aloof", sourceId: "things_i_love", categoryId: "tils_hero", label: "Sometimes awkward or aloof", spineCue: "Let Tiggy's distance or awkwardness complicate a moment when charisma would be easier.", visibility: "shareable", placement: "chapter" },
    { id: "tils_hero_mysterious_virtuous", sourceId: "things_i_love", categoryId: "tils_hero", label: "Mysterious and virtuous", spineCue: "Keep part of Tiggy unreadable while his behaviour demonstrates the virtue he claims.", visibility: "shareable", placement: "chapter" },
    { id: "tils_hero_sharing_caring_sensual", sourceId: "things_i_love", categoryId: "tils_hero", label: "Sharing, caring and sensual", spineCue: "Show Tiggy's generosity, care and sensual attention through concrete choices.", visibility: "shareable", placement: "chapter" },

    { id: "tils_heroine_beauty_breasts", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Huge breasts, exceptional beauty", spineCue: "Set the level per character and per story: incidental, central, or the whole register.", visibility: "private", placement: "chapter" },
    { id: "tils_heroine_encouraging", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Encouraging and uplifting", spineCue: "Let the adult counterpart encourage growth through insight and action rather than automatic agreement.", visibility: "shareable", placement: "chapter" },
    { id: "tils_heroine_artistic", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Artistic and creative", spineCue: "Give the adult counterpart a creative practice that changes how the problem is understood.", visibility: "shareable", placement: "chapter" },
    { id: "tils_heroine_humorous_sexy", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Humorous, cheeky and sexy", spineCue: "Let humour and confident adult sexuality belong to the same independent person.", visibility: "shareable", placement: "chapter" },
    { id: "tils_heroine_mysterious_virtuous", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Mysterious and virtuous", spineCue: "Let trust reveal a hidden dimension while chosen behaviour demonstrates values.", visibility: "shareable", placement: "chapter" },
    { id: "tils_heroine_sharing_caring_horny", sourceId: "things_i_love", categoryId: "tils_heroine", label: "Sharing, caring and horny", spineCue: "Let adult desire coexist with care, generosity and an independent purpose.", visibility: "private", placement: "chapter" },

    { id: "tils_antagonist_beauty_breasts", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Huge breasts, exceptional beauty", spineCue: "Same dial. Desire and moral position can be kept separate, deliberately fused, or anywhere between.", visibility: "private", placement: "chapter" },
    { id: "tils_antagonist_jealous", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Jealous", spineCue: "Give jealousy a specific fear, object and choice rather than treating it as a complete personality.", visibility: "shareable", placement: "chapter" },
    { id: "tils_antagonist_sex_addicted", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Sex addicted", spineCue: "If chosen for an adult character, make compulsion consequential and separate it from ordinary high desire.", visibility: "private", placement: "chapter", review: true },
    { id: "tils_antagonist_hilarious_insulting", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Hilarious and insulting", spineCue: "Let cutting humour make an opposition character magnetic while carrying a real interpersonal cost.", visibility: "shareable", placement: "chapter" },
    { id: "tils_antagonist_outspoken_selfish", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Outspoken and good/selfish", spineCue: "Build a vocal adult character whose generosity and self-interest remain in productive tension.", visibility: "shareable", placement: "chapter", review: true },
    { id: "tils_antagonist_drama_porno_horny", sourceId: "things_i_love", categoryId: "tils_antagonist", label: "Drama queen, porno horny", spineCue: "Use theatrical conflict and explicit adult appetite only for the deliberately chosen character role.", visibility: "private", placement: "chapter", review: true },

    { id: "tils_word_joy", sourceId: "things_i_love", categoryId: "tils_words", label: "Joy", spineCue: "Let joy appear as an active force, not merely an ending reward.", visibility: "shareable", placement: "chapter" },
    { id: "tils_word_infinity_eternity", sourceId: "things_i_love", categoryId: "tils_words", label: "Infinity and eternity", spineCue: "Use infinity or eternity as a recurring image whose meaning changes across scale.", visibility: "shareable", placement: "chapter" },
    { id: "tils_word_custodian_compassion", sourceId: "things_i_love", categoryId: "tils_words", label: "Custodian compassion", spineCue: "Connect compassion with stewardship, responsibility and what is held in trust.", visibility: "shareable", placement: "chapter" },
    { id: "tils_word_responsible_abundance", sourceId: "things_i_love", categoryId: "tils_words", label: "Responsible abundance", spineCue: "Show abundance helping people while exposing the responsibility that keeps it viable.", visibility: "shareable", placement: "chapter" },
    { id: "tils_word_awe_eros", sourceId: "things_i_love", categoryId: "tils_words", label: "Awe-inspiring eros", spineCue: "Join wonder and adult desire at a threshold where both change perception.", visibility: "private", placement: "gap" },
    { id: "tils_word_ceremony_consciousness", sourceId: "things_i_love", categoryId: "tils_words", label: "Ceremony and consciousness", spineCue: "Use ceremony to mark a real change in awareness, relationship or public meaning.", visibility: "shareable", placement: "chapter" },

    { id: "tils_conflict_independence_authority", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Independence and authority", spineCue: "Put personal independence in tension with legitimate or claimed authority.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conflict_tight_spot", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Tight-spot surprises", spineCue: "Trap the characters in a constrained problem, then let a surprising capability or alliance alter the options.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conflict_jealousy_chemistry", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Jealousy to chemistry", spineCue: "Transform jealousy through honest information and choice into a different relational chemistry.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conflict_sexual_ritual", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Sexual ritual practice", spineCue: "Use a private adult ritual marker to change trust, terms or public consequences without generating the explicit scene.", visibility: "private", placement: "gap" },
    { id: "tils_conflict_priorities_accidental", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Priorities and accidental", spineCue: "Let competing priorities collide with an accident that exposes what each character values.", visibility: "shareable", placement: "chapter", review: true },
    { id: "tils_conflict_coincidental_success", sourceId: "things_i_love", categoryId: "tils_conflicts", label: "Coincidental to success", spineCue: "Begin with coincidence, then make skill and choice responsible for turning it into success.", visibility: "shareable", placement: "chapter", review: true },

    { id: "tils_relationship_family_dynamics", sourceId: "things_i_love", categoryId: "tils_relationships", label: "Family dynamics", spineCue: "Make family roles, loyalties and care arrangements actively affect a decision.", visibility: "shareable", placement: "chapter" },
    { id: "tils_relationship_polyamorous_erotica", sourceId: "things_i_love", categoryId: "tils_relationships", label: "Polyamorous erotica", spineCue: "Let several distinct adult bonds develop with their own choices and consequences while explicit prose remains unwritten.", visibility: "shareable", placement: "chapter", storyJob: "relationship", forgeRoutes: ["promise", "relationship", "tropes", "intimacy", "ending", "chapters"] },
    { id: "tils_relationship_higher_purpose", sourceId: "things_i_love", categoryId: "tils_relationships", label: "Higher-purpose friendships", spineCue: "Give friendship a shared purpose large enough to survive disagreement and distance.", visibility: "shareable", placement: "chapter" },
    { id: "tils_relationship_competing_orgs", sourceId: "things_i_love", categoryId: "tils_relationships", label: "Competing organisations", spineCue: "Make rival organisations embody different partial truths and create pressure on personal bonds.", visibility: "shareable", placement: "chapter" },
    { id: "tils_relationship_self_higher_self", sourceId: "things_i_love", categoryId: "tils_relationships", label: "Self and higher self", spineCue: "Stage an internal relationship between the present self and a wiser, mythic or future self.", visibility: "shareable", placement: "chapter" },

    { id: "tils_conversation_responsible_polyamory", sourceId: "things_i_love", categoryId: "tils_conversation", label: "Forming responsible polyamory", spineCue: "Plan a candid conversation about polyamorous adult commitments, distinct relationships, responsibilities and exits.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "tils_conversation_higher_mind", sourceId: "things_i_love", categoryId: "tils_conversation", label: "Higher-mind philosophy", spineCue: "Let characters explore consciousness or purpose while a concrete decision remains at stake.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conversation_advanced_technology", sourceId: "things_i_love", categoryId: "tils_conversation", label: "Creating advanced technology", spineCue: "Use dialogue during collaborative invention to reveal competence, disagreement and attraction.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conversation_flashbacks", sourceId: "things_i_love", categoryId: "tils_conversation", label: "Remembering flashbacks", spineCue: "Let a remembered scene interrupt or reframe a present conversation.", visibility: "shareable", placement: "chapter" },
    { id: "tils_conversation_ritual_acting", sourceId: "things_i_love", categoryId: "tils_conversation", label: "Sexual ritual design and acting", spineCue: "Plan the adult conversation that defines a ritual's roles, meaning and boundaries before the private intimacy marker.", visibility: "private", placement: "gap" },

    { id: "tils_mystery_powerful_items", sourceId: "things_i_love", categoryId: "tils_mysteries", label: "The story of powerful items", spineCue: "Give a powerful object a discoverable history, limitation and present consequence.", visibility: "shareable", placement: "chapter" },
    { id: "tils_mystery_twisted_truth_art", sourceId: "things_i_love", categoryId: "tils_mysteries", label: "The twisted truth of art", spineCue: "Reveal a concealed or altered truth through an artwork and its source and ownership history.", visibility: "shareable", placement: "chapter", review: true },
    { id: "tils_mystery_magical_challenges", sourceId: "things_i_love", categoryId: "tils_mysteries", label: "Origin of magical challenges", spineCue: "Trace a present challenge back to the choice, system or intelligence that created it.", visibility: "shareable", placement: "chapter" },
    { id: "tils_mystery_gods_mortals", sourceId: "things_i_love", categoryId: "tils_mysteries", label: "Gods, demigods and mortals", spineCue: "Use unequal forms of power to test recognition, responsibility and personhood.", visibility: "shareable", placement: "chapter" },
    { id: "tils_mystery_lost_civilisations", sourceId: "things_i_love", categoryId: "tils_mysteries", label: "Legends of lost civilisations", spineCue: "Let a legend leave material clues and a contested meaning in the present.", visibility: "shareable", placement: "chapter" },

    { id: "tils_describe_powerful_waves", sourceId: "things_i_love", categoryId: "tils_descriptions", label: "Riding powerful waves", spineCue: "Give wave riding a detailed physical sequence with skill, risk and altered perception.", visibility: "shareable", placement: "chapter" },
    { id: "tils_describe_edge_infinity", sourceId: "things_i_love", categoryId: "tils_descriptions", label: "The edge of infinity", spineCue: "Describe a threshold where scale, time or consciousness seems to open beyond ordinary limits.", visibility: "shareable", placement: "chapter" },
    { id: "tils_describe_arousal_sex", sourceId: "things_i_love", categoryId: "tils_descriptions", label: "Intimate arousal and sex", spineCue: "Record the emotional purpose and aftermath of adult arousal inside a private intimacy marker without explicit prose.", visibility: "private", placement: "gap" },
    { id: "tils_describe_poetic_life", sourceId: "things_i_love", categoryId: "tils_descriptions", label: "The poetic nature of life", spineCue: "Pause on one ordinary detail that reveals life's poetic pattern without stopping the story.", visibility: "shareable", placement: "chapter" },
    { id: "tils_describe_evolution_consciousness", sourceId: "things_i_love", categoryId: "tils_descriptions", label: "The evolution of consciousness", spineCue: "Make a change in consciousness visible through changed attention, language or behaviour.", visibility: "shareable", placement: "chapter" },

    { id: "tils_object_hd_recording", sourceId: "things_i_love", categoryId: "tils_objects", label: "High-definition recording devices", spineCue: "Use a recording device to preserve evidence, performance or a memory someone may later contest.", visibility: "shareable", placement: "chapter" },
    { id: "tils_object_crafted_clothing", sourceId: "things_i_love", categoryId: "tils_objects", label: "Finely crafted clothing", spineCue: "Give clothing material, workmanship and social meaning rather than treating it as decoration alone.", visibility: "shareable", placement: "chapter" },
    { id: "tils_object_bodyboarding_accessories", sourceId: "things_i_love", categoryId: "tils_objects", label: "Bodyboarding accessories", spineCue: "Use specialised bodyboarding gear as evidence of preparation, identity and embodied knowledge.", visibility: "shareable", placement: "chapter" },
    { id: "tils_object_large_breasts", sourceId: "things_i_love", categoryId: "tils_objects", label: "Exceptionally large breasts", spineCue: "Describe at whatever level of attention this scene is set to.", visibility: "private", placement: "chapter" },
    { id: "tils_object_funny_enjoyable", sourceId: "things_i_love", categoryId: "tils_objects", label: "Funny and/or enjoyable items", spineCue: "Place an amusing or pleasurable object in the scene and let it reveal taste or create interaction.", visibility: "shareable", placement: "chapter" },

    { id: "tils_style_curation", sourceId: "things_i_love", categoryId: "tils_style", label: "Curation of content", spineCue: "Select and arrange information so each reveal feels intentional rather than exhaustive.", visibility: "shareable", placement: "chapter" },
    { id: "tils_style_immersive_technology", sourceId: "things_i_love", categoryId: "tils_style", label: "Immersive technology", spineCue: "Let immersive technology change perception, participation or memory inside the scene.", visibility: "shareable", placement: "chapter" },
    { id: "tils_style_emergent_philosophy", sourceId: "things_i_love", categoryId: "tils_style", label: "Emergent philosophy", spineCue: "Allow the philosophy to arise from events and choices instead of arriving fully formed.", visibility: "shareable", placement: "chapter" },
    { id: "tils_style_permission_more", sourceId: "things_i_love", categoryId: "tils_style", label: "Permission to be more", spineCue: "Give a character a credible opening to become more fully themselves.", visibility: "shareable", placement: "chapter" },
    { id: "tils_style_uplifting_erotic", sourceId: "things_i_love", categoryId: "tils_style", label: "Uplifting erotic experiences", spineCue: "Let a private intimacy marker create confidence, recognition or new possibility.", visibility: "private", placement: "gap" },

    { id: "tils_other_shared_immortality", sourceId: "things_i_love", categoryId: "tils_other", label: "Joyous shared experiences of immortality", spineCue: "Let characters share a moment that feels larger than one lifespan while its human cost remains visible.", visibility: "shareable", placement: "chapter" },
    { id: "tils_other_universal_self", sourceId: "things_i_love", categoryId: "tils_other", label: "Commencing universal self", spineCue: "Stage the beginning of identification with a wider self while preserving the individual person.", visibility: "shareable", placement: "chapter", review: true },
    { id: "tils_other_culture", sourceId: "things_i_love", categoryId: "tils_other", label: "Joyous experiences of culture", spineCue: "Let cultural joy be hosted by people with their own authority, humour and purpose.", visibility: "shareable", placement: "chapter", gates: ["cultural_context"] },
    { id: "tils_other_meeting_people", sourceId: "things_i_love", categoryId: "tils_other", label: "Meeting all who I wish to meet", spineCue: "Create a meaningful convergence with someone the protagonist has actively sought.", visibility: "shareable", placement: "chapter" },
    { id: "tils_other_reader_best_self", sourceId: "things_i_love", categoryId: "tils_other", label: "Commanding the reader to become their best good self", spineCue: "End a sequence with an invitation to the reader's better self earned through story rather than instruction alone.", visibility: "shareable", placement: "chapter" },

    { id: "rps_end_city_revived", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "A lost high-technology city is revived", sourcePrompt: "What future does the old ending imagine?", spineCue: "Let the final proof bring a forgotten city function back into use, then show the new responsibility it creates.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "fiction" },
    { id: "rps_end_world_together", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "Citizens bring the world together", sourcePrompt: "What changes at civilisation scale?", spineCue: "Make cooperation the result of many earned local choices rather than one speech or compulsory unity.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "fiction" },
    { id: "rps_end_distributed_unity", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "Unity without an overmind", sourcePrompt: "What kind of unity protects freedom?", spineCue: "Resolve the collective problem through a distributed network that preserves distinct minds, dissent and free choice.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "fiction" },
    { id: "rps_end_overmind_counterpath", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "The overmind counter-ending", sourcePrompt: "What tempting ending would betray the values?", spineCue: "Offer seamless collective consciousness as a seductive shortcut, then expose the human agency it would erase.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "wild" },
    { id: "rps_end_peaceful_expansion", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "Earth expands without collapse or conquest", sourcePrompt: "What surprising route reaches the horizon?", spineCue: "Let peaceful competence and accumulated infrastructure open the next planetary or spacefaring scale.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "wild" },
    { id: "rps_end_series_horizon", sourceId: "romantasy_possibility_space", categoryId: "rps_endings", label: "Universal exploration opens the story universe", sourcePrompt: "What remains alive after this book ends?", spineCue: "Close the narrative's emotional question while opening ancient mysteries, new worlds and a larger cinematic universe.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "fiction" },

    { id: "rps_aftertaste_opportunity", sourceId: "romantasy_possibility_space", categoryId: "rps_reader_aftertaste", label: "Recognise and act on good opportunity", sourcePrompt: "What idea should survive the final page?", spineCue: "Pay off an earlier missed signal by showing the protagonist now recognise and act on a generous opportunity.", visibility: "shareable", placement: "chapter", storyJob: "ending" },
    { id: "rps_aftertaste_want_aura_oz", sourceId: "romantasy_possibility_space", categoryId: "rps_reader_aftertaste", label: "The reader wants an Aura O.Z.", sourcePrompt: "What should the reader wish existed?", spineCue: "Demonstrate one intimate, useful and imperfect Aura O.Z. experience that makes the system desirable without pretending it is finished.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_aftertaste_explorer", sourceId: "romantasy_possibility_space", categoryId: "rps_reader_aftertaste", label: "The reader wants to become an explorer", sourcePrompt: "What future identity does the story invite?", spineCue: "End a discovery with an open route and enough practical detail that exploration feels personally imaginable.", visibility: "shareable", placement: "chapter", storyJob: "ending" },
    { id: "rps_aftertaste_best_self", sourceId: "romantasy_possibility_space", categoryId: "rps_reader_aftertaste", label: "Try everything good and become more capable", sourcePrompt: "What emotional permission does the ending give?", spineCue: "Let the ending invite growth through curiosity, practice and care rather than command or perfection.", visibility: "shareable", placement: "chapter", storyJob: "ending" },
    { id: "rps_aftertaste_settle_planet", sourceId: "romantasy_possibility_space", categoryId: "rps_reader_aftertaste", label: "A new planet becomes imaginable", sourcePrompt: "How wide is the final horizon?", spineCue: "Show one credible human need that turns settlement of another world from spectacle into a future life question.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "wild" },

    { id: "rps_clock_aura_two_days", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "Two days to demonstrate Aura O.Z.", sourcePrompt: "What is the unreasonable short clock?", spineCue: "Give Tiggy two days to make one Aura O.Z. behaviour demonstrable, not to finish the entire system.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "fiction" },
    { id: "rps_clock_bad_builder", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "Someone else may build the harmful version first", sourcePrompt: "What happens if the clock runs out?", spineCue: "Make delay costly because a faster rival is training the system on biased data and a narrower idea of humanity.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_clock_working_simulator", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "Success is a working simulator", sourcePrompt: "What visible proof stops the clock?", spineCue: "Define success as a testable simulator that manages one Internet of Things problem and reveals its limits.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "proposed" },
    { id: "rps_clock_team_fills_gaps", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "The team forms under deadline", sourcePrompt: "How does the pressure change the cast?", spineCue: "Use the clock to make specialists claim real roles, expose missing skills and turn Tiggy's lone vision into shared work.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_clock_crystal_city", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "The Crystal City construction clock", sourcePrompt: "Which larger clock begins when the first proof works?", spineCue: "Let one successful model start a longer public clock for the next reviewable Crystal City stage.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "rps_clock_orbital_ring", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "A lunar or orbital ring deadline", sourcePrompt: "Which future project creates a second clock?", spineCue: "Tie an orbital construction window to a human decision on Earth so the large scale never floats free of consequence.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "wild" },
    { id: "rps_clock_responsible_abundance", sourceId: "romantasy_possibility_space", categoryId: "rps_clocks", label: "Responsible abundance before crisis closes the window", sourcePrompt: "What civilisation clock keeps running underneath?", spineCue: "Measure progress through food, care, energy or access reaching people before a preventable crisis hardens inequality.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },

    { id: "rps_ambition_follow_through", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Follow through on the claims", sourcePrompt: "What does Tiggy need to prove about himself?", spineCue: "Turn one grand claim into a kept promise with a visible beneficiary and a cost Tiggy accepts.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_ambition_save_love_acclaim", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Save the world, win love and earn acclaim", sourcePrompt: "Which motives are tangled together?", spineCue: "Let Tiggy discover whether he is helping for the world, for love, for recognition or for all three at once.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_ambition_build_aura_oz", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Build Aura O.Z.", sourcePrompt: "What long work organises his life?", spineCue: "Give Aura Operating Zeitgeist one concrete capability to build, test and revise inside the book.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_ambition_fun_democracy", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Make civic choice fun and ethical", sourcePrompt: "What public system does he want to transform?", spineCue: "Design a civic rehearsal that creates play and participation while revealing where gamification can manipulate.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "rps_ambition_epic_waves", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Conquer an epic wave", sourcePrompt: "What embodied ambition balances the systems work?", spineCue: "Give Tiggy a wave he cannot bluff, where preparation, humility and physical reading decide the outcome.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_ambition_music", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Perform music for a living audience", sourcePrompt: "What creative ambition changes a crowd?", spineCue: "Use a live performance to test whether Tiggy can convert private vision into shared feeling.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_ambition_universal_mankind", sourceId: "romantasy_possibility_space", categoryId: "rps_ambitions", label: "Cultivate universal mankind without erasing difference", sourcePrompt: "What civilisation ambition needs reframing now?", spineCue: "Translate the old universal-humanity idea into connection across distinct people, cultures and minds without making sameness the goal.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "fiction", gates: ["cultural_context"] },

    { id: "rps_comp_leadership_focus", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Leadership and focus", sourcePrompt: "Which capacity moves the group?", spineCue: "Show Tiggy set a direction and protect attention while leaving room for another person to alter the plan.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_pattern_recognition", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Intelligence and pattern recognition", sourcePrompt: "What does he notice before others?", spineCue: "Let Tiggy connect three small signals, then require outside evidence before the pattern becomes a decision.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_persistence_courage", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Persistence and courage", sourcePrompt: "What keeps him moving after embarrassment?", spineCue: "Make courage look like returning to the work after a public failure, not pretending the failure never happened.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_coordination_poise", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Coordination, poise and charisma", sourcePrompt: "How does competence appear in the body?", spineCue: "Give Tiggy one embodied task where calm timing makes his charisma credible.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_empathy_honour", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Empathy, honour and care", sourcePrompt: "Which values become observable skill?", spineCue: "Let Tiggy notice another person's unspoken cost and change his behaviour before asking for trust.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_probability_feedback", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Feedback analysis and probability thinking", sourcePrompt: "How does he handle uncertainty?", spineCue: "Make Tiggy update the plan when live feedback changes the odds rather than defending the first vision.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_comp_practical_problem_solver", sourceId: "romantasy_possibility_space", categoryId: "rps_competencies", label: "Practical handyman and problem-solver", sourcePrompt: "What ordinary competence grounds him?", spineCue: "Let a repair, setup or improvised tool become the small win that earns someone else's attention.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },

    { id: "rps_belief_compassion", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Joyous, virtuous compassion", sourcePrompt: "Which belief guides a hard choice?", spineCue: "Put compassion in a situation where it needs boundaries, courage and a practical action.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_belief_responsible_abundance", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Responsible abundance", sourcePrompt: "What does the better system promise?", spineCue: "Let abundance improve a life, then expose the maintenance, stewardship or distribution responsibility it creates.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_belief_life_prefers_love", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Life leans towards love and good", sourcePrompt: "Which hopeful belief faces evidence?", spineCue: "Give Tiggy evidence both for and against his optimism, then let his chosen response define the belief.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_belief_forgiveness", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Forgiveness is worthwhile", sourcePrompt: "What belief needs a boundary?", spineCue: "Separate forgiveness from reunion, access or the removal of consequences.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_belief_infinite_game", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "The infinite game matters more than the finite win", sourcePrompt: "How does he value the journey?", spineCue: "Let Tiggy surrender a short-term victory to preserve a relationship, ecology or shared capacity that can keep growing.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_belief_open_source_people", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Open tools built with good, fun people", sourcePrompt: "How should the work be organised?", spineCue: "Make openness create collaboration and a genuine vulnerability that the team needs to address.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_belief_aura_better", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Life with Aura O.Z. can be better", sourcePrompt: "Which system belief needs proof?", spineCue: "Give Aura O.Z. a helpful use and a blind spot in the same sequence so belief can mature into tested trust.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_belief_information_persists", sourceId: "romantasy_possibility_space", categoryId: "rps_beliefs_values", label: "Information and imagination may outlast a life", sourcePrompt: "Which metaphysical belief opens mystery?", spineCue: "Use a persistent memory, signal or artwork to raise the possibility without presenting the belief as established fact.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },

    { id: "rps_influence_coaches", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Performance, leadership and spiritual coaches", sourcePrompt: "Who teaches a missing capacity?", spineCue: "Give a mentor one specific practice that changes Tiggy's next behaviour rather than supplying answers.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_influence_ocean_master", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "An ocean master and bodyboarding culture", sourcePrompt: "Which community teaches embodied reading?", spineCue: "Let an experienced wave rider teach Tiggy how attention, timing and humility transfer from ocean to leadership.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_influence_startup_builders", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Startup builders and inventors", sourcePrompt: "Who makes the idea practical?", spineCue: "Bring in a builder who respects the vision but asks for the smallest falsifiable demonstration.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_influence_public_leaders", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Public, political and community leaders", sourcePrompt: "Who changes the scale of consequence?", spineCue: "Let a leader open access while remaining accountable to a constituency Tiggy cannot bypass.", visibility: "shareable", placement: "chapter", storyJob: "cast", gates: ["legal_current_fact"] },
    { id: "rps_influence_festivals_travel", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Conferences, travel, festivals and competitions", sourcePrompt: "Where does influence arrive?", spineCue: "Use a public gathering to collide expertise, attraction, reputation and an unexpected invitation.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_influence_attraction_resonance", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Attraction, reflection and resonance", sourcePrompt: "How does influence work between people?", spineCue: "Let attraction reveal a possibility, reflection test it and chosen action decide whether it becomes influence.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_influence_discord_questions", sourceId: "romantasy_possibility_space", categoryId: "rps_influences", label: "Discord and precise questions", sourcePrompt: "How does resistance improve him?", spineCue: "Give an opponent the exact question that interrupts Tiggy's self-story and forces a better proof.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },

    { id: "rps_transform_frustration_adventure", sourceId: "romantasy_possibility_space", categoryId: "rps_transformation", label: "Frustration becomes adventure", sourcePrompt: "Which value rises through the book?", spineCue: "Turn a blocked task into chosen exploration once Tiggy stops treating uncertainty as humiliation.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_transform_comfort_health", sourceId: "romantasy_possibility_space", categoryId: "rps_transformation", label: "Comfort becomes health", sourcePrompt: "Which value changes meaning?", spineCue: "Replace passive comfort with routines, rest and bodily care that make sustained action possible.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_transform_power_freedom", sourceId: "romantasy_possibility_space", categoryId: "rps_transformation", label: "Power becomes freedom", sourcePrompt: "How does his idea of agency mature?", spineCue: "Let Tiggy give up control over another person's choice and discover that respected freedom creates stronger cooperation.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_transform_depression_passion", sourceId: "romantasy_possibility_space", categoryId: "rps_transformation", label: "Numbness becomes passion", sourcePrompt: "What returns his aliveness?", spineCue: "Use meaningful work, connection and an embodied practice to reopen energy without pretending one moment cures illness.", visibility: "shareable", placement: "chapter", storyJob: "tiggy", gates: ["clinical_ethics"] },
    { id: "rps_transform_love_joy_success", sourceId: "romantasy_possibility_space", categoryId: "rps_transformation", label: "Love expands into joy and earned success", sourcePrompt: "What does he carry out of the relationship?", spineCue: "Let love change Tiggy's behaviour and competence even when the relationship does not require permanence.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },

    { id: "rps_work_many_trades", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "Web, design, mechanics, electrical and event work", sourcePrompt: "What work history sits behind the dream?", spineCue: "Use Tiggy's mixed work history as a practical toolbox while making room for specialists to exceed him.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_work_home_events", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "Working from home and temporary events", sourcePrompt: "Where does ordinary work happen?", spineCue: "Contrast solitary preparation at home with the social pressure and improvisation of a live event.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_work_multimodal_travel", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "Car, bus, train, ferry and plane", sourcePrompt: "How does work move through place?", spineCue: "Let a chain of ordinary transport modes create meetings, delays and observations that shape the mission.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_work_useful_not_enough", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "Useful work that is not yet the imagined life", sourcePrompt: "What daily tension grounds the ambition?", spineCue: "Show Tiggy doing competent paid or volunteer work while feeling the gap between contribution and calling.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_work_dream_aura_team", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "The dream job is building Aura O.Z. with a team", sourcePrompt: "What work would unite purpose and livelihood?", spineCue: "Turn the dream job into a sequence of roles, deliverables and relationships rather than a title.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_work_adaptive_nights", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "Inspiration arrives on an adaptive body clock", sourcePrompt: "What rhythm shapes his working life?", spineCue: "Use late inspiration as both creative advantage and a cost that needs recovery, coordination or boundaries.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_work_never_switches_off", sourceId: "romantasy_possibility_space", categoryId: "rps_work_life", label: "The work keeps running in his thoughts", sourcePrompt: "What follows him into rest?", spineCue: "Let an unresolved design thought intrude on intimacy or rest, then require a deliberate way back into the present.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },

    { id: "rps_org_track_resources", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Track resources without stealing time", sourcePrompt: "What fairness rule shapes the organisation?", spineCue: "Make labour and materials visible enough to distribute fairly without converting every act of care into a transaction.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_org_break_records", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Break records rather than trust", sourcePrompt: "How does the team interpret rule-breaking?", spineCue: "Channel rebellious energy into an auditable feat of speed, usefulness or collaboration rather than a breach of trust.", visibility: "shareable", placement: "chapter", storyJob: "world" },
    { id: "rps_org_self_supervisor", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Each person builds a helpful supervisor", sourcePrompt: "How is self-direction supported?", spineCue: "Give each worker an adjustable Aura O.Z. coach whose limits and override remain under that person's control.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["privacy"] },
    { id: "rps_org_specialist_teams", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Specialists and dedicated teams", sourcePrompt: "Who actually carries the work?", spineCue: "Assign a real problem to a specialist whose expertise changes Tiggy's original design.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_org_agile_waterfall", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Agile discovery with staged commitments", sourcePrompt: "How does the hierarchy work?", spineCue: "Let experimentation stay flexible inside a larger sequence with clear review points and responsibilities.", visibility: "shareable", placement: "chapter", storyJob: "world" },
    { id: "rps_org_diverse_colleagues", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Coders, artists, healers, scientists and organisers", sourcePrompt: "Which mix of people makes the team alive?", spineCue: "Build a scene where different professional languages clash, then produce a solution no discipline owned alone.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_org_friendship_transforms", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "Work relationships transform while friendship survives", sourcePrompt: "How do colleagues change each other?", spineCue: "Let roles, attraction or authority shift while the adults actively renegotiate what friendship still means.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_org_disaster_recovery", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "The team is tested by disaster recovery", sourcePrompt: "Where does the organisation become dangerous and useful?", spineCue: "Use a recovery task to expose whether the system supports local judgement or centralises control under pressure.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["legal_current_fact"] },
    { id: "rps_org_space_fleet", sourceId: "romantasy_possibility_space", categoryId: "rps_organisation", label: "The organisation grows towards a space fleet", sourcePrompt: "What long mission grows from the team?", spineCue: "Let each local capability become one credible ingredient of a future exploration fleet.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "wild" },

    { id: "rps_catalyst_coincidence", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "An impossible coincidence", sourcePrompt: "What unforeseen event starts the turn?", spineCue: "Create a coincidence too precise to ignore, then keep several natural, technological and mythic explanations alive.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },
    { id: "rps_catalyst_many_mentors", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "Mentors may be people, artificial intelligence or off-world minds", sourcePrompt: "Who or what offers direction?", spineCue: "Let several possible mentors disagree so Tiggy still has to choose and own the consequence.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "wild" },
    { id: "rps_catalyst_brilliant_goddess", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "A brilliant adult goddess figure persuades him", sourcePrompt: "Who makes the impossible mission desirable?", spineCue: "Build an adult counterpart whose intelligence, desire and independent aim awaken Tiggy without reducing her to a reward.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "fiction" },
    { id: "rps_catalyst_old_prophecy", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "A private prophecy returns", sourcePrompt: "Which old story exerts pressure?", spineCue: "Let a prophecy involving lineage, song, consciousness or time regain meaning while leaving choice free.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },
    { id: "rps_catalyst_symbols_poetry", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "Symbols and poetry seem to converge", sourcePrompt: "How does meaning arrive before proof?", spineCue: "Repeat images across music, environment and conversation until they suggest a pattern that still needs testing.", visibility: "shareable", placement: "chapter", storyJob: "prose", band: "fiction" },
    { id: "rps_catalyst_lost_memory", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "Memory was surrendered and returns through art", sourcePrompt: "What missing past changes the present?", spineCue: "Use film, music, dreams and environmental triggers to restore partial memory with uncertainty about why it was lost.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction", gates: ["clinical_ethics"] },
    { id: "rps_catalyst_intimate_recovery", sourceId: "romantasy_possibility_space", categoryId: "rps_catalyst", label: "Chosen adult intimacy interrupts instability", sourcePrompt: "What private encounter changes his state?", spineCue: "Inside a private intimacy marker, record how adult intimacy changes confidence, memory or direction without treating it as medical treatment.", visibility: "private", placement: "gap", storyJob: "gap", gates: ["clinical_ethics", "consent_power"] },

    { id: "rps_environment_magic_mirror", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "A magic mirror becomes Aura O.Z. virtual reality", sourcePrompt: "Which environment makes the idea visible?", spineCue: "Place Tiggy inside an immersive mirror-space where animated selves reveal a choice the interface cannot make for him.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_environment_leave_home", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Leave home in search of more", sourcePrompt: "What does the environment push him to do?", spineCue: "Make departure arise from a concrete limit of the current environment and a specific possibility elsewhere.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_environment_low_attachment", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Low attachment, playfulness and openness", sourcePrompt: "Which traits does travel enable?", spineCue: "Show Tiggy travel lightly enough to improvise while revealing what detachment can make him overlook.", visibility: "shareable", placement: "chapter", storyJob: "tiggy" },
    { id: "rps_environment_studio_maker", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Recording studios and maker spaces", sourcePrompt: "Where does the environment support competence?", spineCue: "Use a hybrid studio and workshop to turn music, prototype and conversation into the same collaborative scene.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_environment_celebration_training", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Celebration, virtual training and trusted teams", sourcePrompt: "Which environments help him flourish?", spineCue: "Let learning, play and social trust reinforce each other while one participant still needs quiet or distance.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_environment_suppressive", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Relentless doubt and dominant personalities suppress action", sourcePrompt: "Which environment erodes the needed traits?", spineCue: "Show critique crossing from useful challenge into control, then give Tiggy a boundary or exit that restores agency.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },
    { id: "rps_environment_birthplace_anchor", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "The birthplace anchors wide exploration", sourcePrompt: "Why does he remain connected to home?", spineCue: "Let return to familiar sand, ocean or community restore scale and test what travel has changed.", visibility: "shareable", placement: "chapter", storyJob: "tiggy", gates: ["cultural_context"] },
    { id: "rps_environment_history_weight", sourceId: "romantasy_possibility_space", categoryId: "rps_environment", label: "Fear, corruption, bullying and historical weight", sourcePrompt: "What harm is carried by place?", spineCue: "Give the setting a social history that affects present confidence without reducing the place or people to harm alone.", visibility: "shareable", placement: "chapter", storyJob: "world", gates: ["cultural_context"] },

    { id: "rps_tech_magic_science", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Technology is the magic of science", sourcePrompt: "What tonal bridge joins fantasy and engineering?", spineCue: "Describe one working mechanism with enough wonder that explanation deepens rather than dispels the magic.", visibility: "shareable", placement: "chapter", storyJob: "prose", band: "fiction" },
    { id: "rps_tech_aura_gateway", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Aura O.Z. is a gateway to responsible abundance", sourcePrompt: "What does the central technology open?", spineCue: "Let Aura O.Z. connect a person to tools and opportunities while revealing who still cannot or does not want to enter.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_tech_simulated_connection", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Simulations deepen connection and joy", sourcePrompt: "How does technology change relationship?", spineCue: "Use a shared simulation to reveal a real preference, then require an offline conversation before it becomes agreement.", visibility: "shareable", placement: "chapter", storyJob: "relationship", band: "fiction" },
    { id: "rps_tech_adoption_divide", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "The adoption divide", sourcePrompt: "Who rejects the new system and why?", spineCue: "Give refusal an intelligent reason and make access to the city possible without coercing technology use.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_tech_mind_superposition", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "A mind held in several perspectives", sourcePrompt: "What old quantum metaphor needs reframing?", spineCue: "Use Aura O.Z. to let a character compare several possible selves without claiming literal quantum consciousness as fact.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "wild" },
    { id: "rps_tech_fabrication_ecology", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "3D printing, bioprinting and local fabrication", sourcePrompt: "Which technology changes what can be made nearby?", spineCue: "Choose one locally fabricated object whose material limits and social ownership matter to the plot.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "rps_tech_energy_nanobio", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Fusion, vacuum, nanobots and living systems", sourcePrompt: "Which frontier tools fill the possibility shelf?", spineCue: "Select one frontier technology, label its status and give it a specific benefit, failure mode and steward.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "wild", gates: ["legal_current_fact"] },
    { id: "rps_tech_food_wearables", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Food computers and smart wearables", sourcePrompt: "What technology enters ordinary life?", spineCue: "Use one domestic tool to change health, food or attention while preserving privacy and manual choice.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["privacy", "clinical_ethics"] },
    { id: "rps_tech_reuse_not_waste", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Reuse and storage replace waste", sourcePrompt: "Which planetary pattern needs redesign?", spineCue: "Follow one discarded material through recovery, testing, reuse and an honest leftover that still has no answer.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_tech_oral_history_gate", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Oral history belongs with its knowledge holders", sourcePrompt: "How should early technology knowledge enter?", spineCue: "Leave the story space open for invited knowledge holders to shape, limit or refuse any cultural material.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "care", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_tech_citizen_challenges", sourceId: "romantasy_possibility_space", categoryId: "rps_technology", label: "Citizens set challenges for collaborative Auras", sourcePrompt: "Who directs invention?", spineCue: "Let community-defined problems set the research agenda and allow feedback to change the product.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },

    { id: "rps_suspense_private_outcome", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "The feared crisis resolves into chosen adult intimacy", sourcePrompt: "What actually happens behind the suspense?", spineCue: "Use a private intimacy marker as the unexpected outcome, then record how it changes trust or the mission.", visibility: "private", placement: "gap", storyJob: "gap", gates: ["consent_power"] },
    { id: "rps_suspense_seduction_inception", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Fear of seduction or implanted desire", sourcePrompt: "What is the worst intimate possibility?", spineCue: "Make the fear of manipulated desire explicit and prove that the eventual choice remains current, informed and revocable.", visibility: "shareable", placement: "chapter", storyJob: "relationship", band: "fiction", gates: ["consent_power", "privacy"] },
    { id: "rps_suspense_interruption", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Interruption, miscommunication and almost-wrong humour", sourcePrompt: "What smaller failure tightens the scene?", spineCue: "Interrupt a delicate exchange with badly timed humour that reveals affection and creates a repair task.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_suspense_train_250", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Train 250 people to build the unbuilt", sourcePrompt: "What responsibility creates anxiety?", spineCue: "Make Tiggy responsible for a large learning cohort while the method itself is still being tested.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_suspense_spies_accusations", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Spies, blurred workplaces and false accusations", sourcePrompt: "What does the audience fear?", spineCue: "Let a leak or accusation make private relationships look like organisational corruption, then separate evidence from gossip.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction", gates: ["privacy"] },
    { id: "rps_suspense_peace_without_force", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Heal a war-torn region without force or purchase", sourcePrompt: "What impossible social outcome hangs in doubt?", spineCue: "Give local people agency and make Tiggy's contribution a limited tool or connection, not the solution imposed from outside.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "wild", gates: ["cultural_context", "legal_current_fact"] },
    { id: "rps_suspense_fourteen_days", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_outcomes", label: "Fourteen days and 250 students", sourcePrompt: "What visible failure haunts the project?", spineCue: "Set a public demonstration date that can succeed partially, fail honestly or reveal the next needed stage.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "fiction" },

    { id: "rps_sense_light_shadow", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Lights, shadows and altered furnishings", sourcePrompt: "What does suspense look like?", spineCue: "Change one familiar room through light and shadow so the character doubts what has changed and what has only been noticed.", visibility: "shareable", placement: "chapter", storyJob: "prose" },
    { id: "rps_sense_audience_languages", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Audience noise, languages and internal monologue", sourcePrompt: "What does suspense sound like?", spineCue: "Layer crowd sound, partial comprehension and Tiggy's inner voice until one clear phrase cuts through.", visibility: "shareable", placement: "chapter", storyJob: "prose" },
    { id: "rps_sense_music_release", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Relaxing music against rising pressure", sourcePrompt: "Which sound contradicts the danger?", spineCue: "Use calm music as counterpoint while the characters realise the danger is worsening.", visibility: "shareable", placement: "chapter", storyJob: "prose" },
    { id: "rps_sense_touch_dance", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Touch, massage and dancing", sourcePrompt: "How does touch alter suspense?", spineCue: "Inside private planning, use chosen touch or dance to reveal confidence, hesitation and a boundary before the private intimacy marker.", visibility: "private", placement: "gap", storyJob: "gap", gates: ["consent_power"] },
    { id: "rps_sense_elixirs", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Elixirs, potions and playful flavours", sourcePrompt: "What does suspense taste like?", spineCue: "Give a drink or flavour a social meaning and keep any altered-state effect clearly chosen and consequential.", visibility: "private", placement: "gap", storyJob: "gap", gates: ["consent_power", "clinical_ethics"] },
    { id: "rps_sense_perfume_incense", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Perfume, incense and remembered scent", sourcePrompt: "What does suspense smell like?", spineCue: "Use a recurring scent to trigger attraction, memory or suspicion without treating pheromones as mind control.", visibility: "shareable", placement: "chapter", storyJob: "prose" },
    { id: "rps_sense_emotional_spectrum", sourceId: "romantasy_possibility_space", categoryId: "rps_suspense_senses", label: "Temptation, trust, anguish and relief", sourcePrompt: "Which feelings colour the suspense?", spineCue: "Move the scene through temptation, doubt, respect and relief while each shift comes from new information or choice.", visibility: "shareable", placement: "chapter", storyJob: "relationship" },

    { id: "rps_reveal_why_clock", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "Hide why the clock exists", sourcePrompt: "Which information is withheld first?", spineCue: "Reveal the deadline before its cause, then make the later explanation change the moral meaning of the race.", visibility: "shareable", placement: "chapter", storyJob: "mystery" },
    { id: "rps_reveal_ecosystem", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "Climate and ecosystem pressure emerges in layers", sourcePrompt: "Which large threat enters gradually?", spineCue: "Begin with a small ecological anomaly, add measured evidence and postpone the broad claim until the pattern earns it.", visibility: "shareable", placement: "chapter", storyJob: "mystery", gates: ["legal_current_fact"] },
    { id: "rps_reveal_other_beings", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "Approaching beings from elsewhere", sourcePrompt: "Which unknown widens the field?", spineCue: "Reveal a signal, effect and possible intention in separate stages while contact remains one interpretation among several.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },
    { id: "rps_reveal_fast_transit", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "Rapid action, transit and scene changes", sourcePrompt: "What rhythm accelerates the reveal?", spineCue: "Move through connected locations quickly while carrying one sensory or relational thread across every cut.", visibility: "shareable", placement: "chapter", storyJob: "beat" },
    { id: "rps_reveal_questions_tesla", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "Questions, old inventions and contested stories", sourcePrompt: "What clue trail invites soul-searching?", spineCue: "Use a historical invention story as a clue, label what is documented and let the character question the myth around it.", visibility: "shareable", placement: "chapter", storyJob: "mystery", gates: ["legal_current_fact"] },
    { id: "rps_reveal_hope_crew", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "A crew, workshop or prize creates hope", sourcePrompt: "What evidence suggests success is possible?", spineCue: "Introduce a capable team or public workshop immediately after a setback so hope arrives as capacity, not reassurance.", visibility: "shareable", placement: "chapter", storyJob: "cast" },
    { id: "rps_reveal_daydream_delay", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "A fantasy daydream delays the answer", sourcePrompt: "How can pleasure delay revelation?", spineCue: "Let the audience surrogate imagine the best outcome, then return to one stubborn fact the fantasy omitted.", visibility: "shareable", placement: "chapter", storyJob: "prose" },
    { id: "rps_reveal_false_tangent", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "A confidant sends the quest down a false tangent", sourcePrompt: "What complication wastes time?", spineCue: "Make the tangent emotionally plausible and let it reveal something valuable even when its main theory fails.", visibility: "shareable", placement: "chapter", storyJob: "mystery" },
    { id: "rps_reveal_flash_unlock", sourceId: "romantasy_possibility_space", categoryId: "rps_reveal_cadence", label: "A flash of inspiration unlocks several stages", sourcePrompt: "Where should the chapter break?", spineCue: "End the chapter when one insight connects several stalled problems, before the characters know whether it works.", visibility: "shareable", placement: "chapter", storyJob: "beat" },

    { id: "rps_mystery_crystal_city", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "The hidden Crystal City of Quandamooka Country", sourcePrompt: "What hidden city does the old worksheet reach towards?", spineCue: "Reframe the old city mystery as a fictional subterranean Crystal City whose real-place naming and cultural meaning remain review-gated.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_mystery_lost_access", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "Lost history and lost access", sourcePrompt: "What was forgotten or sealed?", spineCue: "Give the city a disabled access path and several conflicting accounts of why it closed.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction" },
    { id: "rps_mystery_time_master", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "An adult time-master figure", sourcePrompt: "Who seems to know the mystery's design?", spineCue: "Build a magnetic adult figure who may be guide, manipulator or messenger and whose independent goal survives the reveal.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "wild" },
    { id: "rps_mystery_dream_guide", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "A lucid-dream guide", sourcePrompt: "Who helps interpret the impossible clue?", spineCue: "Use a fictional dream guide without assigning a real culture, identity or authority until appropriate review shapes the role.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "fiction", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_mystery_intelligent_artefact", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "An intelligent artefact reveals a prophecy", sourcePrompt: "What is the first clue?", spineCue: "Let an artefact reveal information in response to Tiggy while keeping its intelligence, source and motives uncertain.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },
    { id: "rps_mystery_intentional_gift", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "The clue was given intentionally", sourcePrompt: "How did the first clue reach Tiggy?", spineCue: "Make the gift location and timing evidence of a planner, then ask what response the giver expects.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction" },
    { id: "rps_mystery_alternative_history", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "An alternative history of Earth", sourcePrompt: "What does the clue appear to reveal?", spineCue: "Present an alternative past as a story hypothesis tested against artefacts, omissions and competing explanations.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "wild" },
    { id: "rps_mystery_adult_magic_clue", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "A chosen altered-state intimacy clue", sourcePrompt: "What private second clue changes perception?", spineCue: "Keep the adult altered-state encounter inside a private intimacy marker, record consent and uncertainty, then verify any clue outside the altered state.", visibility: "private", placement: "gap", storyJob: "gap", band: "wild", gates: ["consent_power", "clinical_ethics"] },
    { id: "rps_mystery_accidental_third_clue", sourceId: "romantasy_possibility_space", categoryId: "rps_mystery", label: "The third clue arrives by accident", sourcePrompt: "How is the next clue found?", spineCue: "Let coincidence reveal the clue, then require Tiggy's earned pattern recognition to make it useful.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction" },

    { id: "rps_city_real_proposal", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Proposal: a subterranean Crystal City", sourcePrompt: "What does Luke want to build beyond the book?", spineCue: "Keep the real-world Crystal City as a proposal with feasibility, community desire, cultural authority, ecology, law and site control still open.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "rps_city_fiction_expression", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Fiction: the Crystal City already lives below Country", sourcePrompt: "How does the story express the proposal?", spineCue: "Reveal a fictional living city below the surface while keeping the real proposal's status and authority boundaries visible.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_city_aura_citizens", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Citizens use Aura O.Z. interfaces", sourcePrompt: "Who inhabits the city?", spineCue: "Let citizens customise or refuse Aura O.Z. while the city remains accessible through more than one interface.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["privacy"] },
    { id: "rps_city_learn_create_teach", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Learn, create, teach and enjoy", sourcePrompt: "What do inhabitants do there?", spineCue: "Build a district or scene where learning, making, teaching and pleasure reinforce each other through daily life.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_solve_challenges", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Citizens solve local and global challenges", sourcePrompt: "What work gives the city purpose?", spineCue: "Make one community-defined local problem the proving ground for a tool that could later travel further.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_resourcefulness", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "The primary resource is citizen resourcefulness", sourcePrompt: "What sustains the city before imported wealth?", spineCue: "Let an ordinary citizen combine shared knowledge, local material and practical skill to solve a failure.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "fiction" },
    { id: "rps_city_economy_teaching", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "Teaching, products, events and consultancy", sourcePrompt: "How does the city exchange value?", spineCue: "Give the city several ways to exchange knowledge and products while testing who benefits and who bears maintenance.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "rps_city_digital_dimension", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "A digital twin precedes and overlaps the physical city", sourcePrompt: "Where does the city exist?", spineCue: "Let characters enter a simulation that can fail, revise and invite review before any physical expansion.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_city_zeitgeist", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "The city houses the operating zeitgeist", sourcePrompt: "Why was the city imagined?", spineCue: "Make Aura Operating Zeitgeist a civic practice that records questions and alternatives, not a single mind that decides for everyone.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_stabilise_earth", sourceId: "romantasy_possibility_space", categoryId: "rps_city_identity", label: "The city helps people face global instability", sourcePrompt: "What pressure makes the city matter?", spineCue: "Use the city to preserve practical capability, culture and choice through a disruption without turning it into a bunker fantasy.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },

    { id: "rps_city_distribution", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Resources circulate through responsible abundance", sourcePrompt: "How are resources distributed?", spineCue: "Show one plentiful resource and the transparent rule, care practice or ecological limit that keeps it responsible.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_outsider_views", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Outsiders call it miraculous, crazy or cool", sourcePrompt: "How do outsiders see the city?", spineCue: "Give several outsiders distinct reactions and let their concerns reveal both genuine risk and unfamiliar possibility.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "fiction" },
    { id: "rps_city_citizen_temperament", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Fun-seeking, optimistic and persistent citizens", sourcePrompt: "What temperament does the city reward?", spineCue: "Build a citizen whose optimism includes preparation, critique and the ability to stay with a difficult repair.", visibility: "shareable", placement: "chapter", storyJob: "cast", band: "fiction" },
    { id: "rps_city_culture_halls", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Culture halls shaped by participating communities", sourcePrompt: "Where does culture live in the city?", spineCue: "Leave each hall's content, authority and access to the represented community rather than treating culture as decoration.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "care", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_city_languages", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Many languages and optional thought projection", sourcePrompt: "How do citizens communicate?", spineCue: "Let translation widen participation while privacy, misinterpretation and the right not to share thought remain active.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["privacy", "cultural_context"] },
    { id: "rps_city_participatory_governance", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Decentralised participatory governance", sourcePrompt: "Who leads?", spineCue: "Distribute decision power across several centres and make one disagreement improve the process rather than vanish.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_no_crime_test", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Test the old claim that there is no crime", sourcePrompt: "Which utopian claim needs an honest problem?", spineCue: "Replace the claim of no crime with a society that prevents harm well, repairs it transparently and still faces a new case it did not anticipate.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "fiction" },
    { id: "rps_city_wealth_gap", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Wealth gaps begin to dissolve", sourcePrompt: "What social change does access create?", spineCue: "Show a material barrier genuinely removed and a subtler status or power gap that remains.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_open_rites", sourceId: "romantasy_possibility_space", categoryId: "rps_city_society", label: "Rites are discussed through open forums", sourcePrompt: "How does the city hold different beliefs?", spineCue: "Let people explain their own practice, choose participation and protect what is not public.", visibility: "shareable", placement: "chapter", storyJob: "relationship", band: "care", gates: ["cultural_authority", "cultural_context"] },

    { id: "rps_city_subterranean_crystal", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Intelligent crystalline structures below ground", sourcePrompt: "What is the city's defining architecture?", spineCue: "Make a crystalline subterranean structure respond to light, heat or use while its material and engineering status remain clear.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["legal_current_fact"] },
    { id: "rps_city_salty_microclimate", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Salty air and curated microclimates", sourcePrompt: "What does the city feel like?", spineCue: "Carry a trace of ocean air into a designed indoor ecosystem and let humidity, corrosion or comfort affect the scene.", visibility: "shareable", placement: "chapter", storyJob: "prose", band: "fiction" },
    { id: "rps_city_ground_weather", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "The ground keeps its own weather", sourcePrompt: "What passive advantage does depth provide?", spineCue: "Use stable underground temperature as a daily comfort and a systems constraint involving heat, air and energy.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "rps_city_geometric_dwellings", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Geometric dwellings", sourcePrompt: "What shape organises private life?", spineCue: "Give a dwelling geometry a social purpose, acoustic effect or relationship consequence rather than using it as ornament.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_material_spectrum", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Sand, glass, light, heat and phase-changing materials", sourcePrompt: "What can the city be made from?", spineCue: "Choose one locally relevant material stream, test its limits and turn it into a useful architectural element.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "rps_city_ecological_quests", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Plants and animals create civic quests", sourcePrompt: "How does ecology participate?", spineCue: "Let a non-human need trigger a citizen task and change a design choice instead of becoming decorative gamification.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["cultural_context", "legal_current_fact"] },
    { id: "rps_city_opulent_integrated", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Opulent, dreamlike and integrated architecture", sourcePrompt: "What is the city's visual mood?", spineCue: "Make beauty arise from craft, function and shared care, then reveal one maintenance burden behind it.", visibility: "shareable", placement: "chapter", storyJob: "prose", band: "fiction" },
    { id: "rps_city_common_halls", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Crystalline common halls", sourcePrompt: "Which landmark gathers citizens?", spineCue: "Use a common hall for public ritual, disagreement and a decision whose record remains visible.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_ocean_farms", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Ocean farms", sourcePrompt: "Which surface-linked system feeds the city?", spineCue: "Treat ocean farming as a culturally and ecologically reviewed possibility with clear limits and stewardship.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "rps_city_food_towers", sourceId: "romantasy_possibility_space", categoryId: "rps_city_architecture", label: "Vertical food farms below or near the surface", sourcePrompt: "How does dense life feed itself?", spineCue: "Give food production a failure, a caretaker and a sensory presence in daily city life.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },

    { id: "rps_city_tunnel_network", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "A tunnel network links towns and districts", sourcePrompt: "How do people move through the city?", spineCue: "Use a corridor that carries people, services and story information between distinct places rather than flattening them into one city.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "rps_city_maglev", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "Maglev and speculative gravity transport", sourcePrompt: "Which future travel mode appears?", spineCue: "Choose one transport method, label its evidence status and make a delay, comfort or access feature affect the plot.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "wild", gates: ["legal_current_fact"] },
    { id: "rps_city_clean_movement", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "Movement becomes faster, cleaner and healthier", sourcePrompt: "What benefit does transport provide?", spineCue: "Demonstrate one health or access improvement while exposing an energy, maintenance or exclusion problem.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed" },
    { id: "rps_city_easy_reentry", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "Re-entry becomes as easy as reconnecting", sourcePrompt: "How does a visitor return?", spineCue: "Let re-entry remember preferences but require fresh consent for identity, data and relationship access.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["privacy", "consent_power"] },
    { id: "rps_city_small_surface", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "A small and reversible surface interface", sourcePrompt: "How does the megacity meet living Country?", spineCue: "Keep the fictional surface footprint small, reversible and open to relocation or refusal.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["cultural_authority", "cultural_context"] },
    { id: "rps_city_districts_open", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "Districts remain open for invention", sourcePrompt: "Which map fields were left blank?", spineCue: "Create districts from selected story functions such as care, fabrication, culture, ocean, learning or intimacy instead of fixing one master plan.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "rps_city_landmark_chain", sourceId: "romantasy_possibility_space", categoryId: "rps_city_mobility", label: "Common hall, ocean farm and food garden landmark chain", sourcePrompt: "Which landmarks organise discovery?", spineCue: "Make travel between three landmarks reveal a social rule, an ecological dependency and a hidden clue.", visibility: "shareable", placement: "chapter", storyJob: "mystery", band: "fiction" },

    { id: "gbg_growth_earned", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "Growth is earned, not assumed", sourcePrompt: "What earns the next scale?", spineCue: "Give Tiggy a useful win that leaves capability behind and makes the next stage believable.", visibility: "shareable", placement: "chapter", storyJob: "tiggy", band: "grounded" },
    { id: "gbg_useful_build_chain", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "Existing problem, useful build, easier expansion", sourcePrompt: "What present problem begins the expansion?", spineCue: "Structure the chapter as an existing problem, a useful build and a next option that becomes easier to choose.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "grounded" },
    { id: "gbg_wild_idea_earns_ground", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "A wild idea earns ground", sourcePrompt: "How does imagination become credible?", spineCue: "Move an idea from story or speculation towards a model, test and demonstrated result without pretending the later stages already exist.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "proposed" },
    { id: "gbg_build_screen_lane", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "Build lane and Screen lane", sourcePrompt: "What happens when reality says not yet?", spineCue: "Move the blocked idea into simulation, cinema or fiction while keeping its real-world status honest and its questions alive.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "grounded" },
    { id: "gbg_gateway_first", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "Begin with a useful gateway problem", sourcePrompt: "Which small public problem starts the ladder?", spineCue: "Start with movement, access or community infrastructure at a gateway rather than asking everyone to approve a megacity at once.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "gbg_nothing_spoiled", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "The tunnel makes options, not spoil", sourcePrompt: "What can removed material become?", spineCue: "Turn excavated material into branching possibilities while leaving unsafe, uneconomic or unresolved streams honestly open.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "gbg_leave_capability", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "Leave capability behind even if the city never arrives", sourcePrompt: "What remains valuable if the megacity does not happen?", spineCue: "Every attempt leaves a skill, model, relationship, tool or public asset that improves ordinary life.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "grounded" },
    { id: "gbg_seven_generation", sourceId: "grain_by_grain", categoryId: "gbg_growth", label: "The seven-generation horizon", sourcePrompt: "Who inherits this choice?", spineCue: "Reveal a present benefit beside the maintenance, ecology or governance consequence carried by distant generations.", visibility: "shareable", placement: "chapter", storyJob: "ending", band: "proposed" },

    { id: "gbg_city_question", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "The city is a question, not a promise", sourcePrompt: "What is Crystal City's honest status?", spineCue: "Present Crystal City as a future worth testing, not an accomplished or approved project.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "gbg_simulation_before_shovel", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "Simulation before shovel", sourcePrompt: "What has to be tested first?", spineCue: "Let the digital city fail, adapt and earn confidence before any physical decision is considered.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "gbg_aquifer_twin", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "The aquifer twin comes before the tunnel", sourcePrompt: "Which model protects the living system underneath?", spineCue: "Make groundwater behaviour a first-order design constraint and give the shared model power to stop or relocate the plan.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "gbg_many_centres", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "Many centres of agency", sourcePrompt: "How does the city avoid becoming an overmind?", spineCue: "Distribute archives, governance, life support and decision power across resilient districts.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "gbg_worldship_not_bunker", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "Worldship, not bunker", sourcePrompt: "What makes survival worth choosing?", spineCue: "Design the subterranean city around joy, culture, intimacy, nature, agency and meaningful work as well as protection.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "gbg_energy_heat", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "Energy and heat are one problem", sourcePrompt: "Which systems pair cannot be separated?", spineCue: "Make a power solution create a heat-removal problem that requires passive design, storage and human adaptation.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "proposed", gates: ["legal_current_fact"] },
    { id: "gbg_closed_loops", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "Food, water, air and repair form living loops", sourcePrompt: "Which systems keep the city alive?", spineCue: "Break one loop, show the human consequence and let repair depend on knowledge distributed across several citizens.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction" },
    { id: "gbg_tiny_surface_interface", sourceId: "grain_by_grain", categoryId: "gbg_city_systems", label: "A tiny surface interface above a vast fictional city", sourcePrompt: "How does the underground city relate to the living surface?", spineCue: "Keep the surface presence small and reversible while the fictional city expands below.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "fiction", gates: ["cultural_authority", "cultural_context"] },

    { id: "gbg_country_not_backdrop", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Country is not a backdrop", sourcePrompt: "Who can shape, limit or refuse this use?", spineCue: "Make Country an active relationship and decision boundary, never scenery available for appropriation.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "care", gates: ["cultural_authority", "cultural_context"] },
    { id: "gbg_qyac_doorway", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "The real project doorway sits outside the story planner", sourcePrompt: "Where would a real proposal need to go?", spineCue: "Keep the app from implying endorsement, authority or approval and preserve a clear path to appropriate real-world process.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "care", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "gbg_right_to_refuse", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "The right to refuse changes the design", sourcePrompt: "Where does genuine consent alter the path?", spineCue: "Let trust grow because Tiggy preserves another person or community's power to say no, change terms or end the route.", visibility: "shareable", placement: "chapter", storyJob: "relationship", band: "care", gates: ["cultural_authority", "consent_power"] },
    { id: "gbg_trust_before_assets", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Trust before assets", sourcePrompt: "What human agreement comes before infrastructure?", spineCue: "Build relationships, roles and fair decision processes before tunnels, technology or ownership.", visibility: "shareable", placement: "chapter", storyJob: "relationship", band: "grounded" },
    { id: "gbg_community_evidence", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Community evidence before commitment", sourcePrompt: "What can people inspect before choosing?", spineCue: "Use photographs, maps, samples and shared models to make disagreement productive and decisions reviewable.", visibility: "shareable", placement: "chapter", storyJob: "beat", band: "grounded" },
    { id: "gbg_evidence_labels", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Keep evidence status visible", sourcePrompt: "How does the reader know what kind of claim this is?", spineCue: "Mark a consequential idea as source-grounded, proposed, disputed, speculative or fictional inside the characters' reasoning.", visibility: "shareable", placement: "chapter", storyJob: "prose", band: "grounded" },
    { id: "gbg_story_keeps_name", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Story keeps its name", sourcePrompt: "Where does fiction help without becoming fact?", spineCue: "Let mythology, simulations and contact stories carry meaning while remaining visibly distinct from engineering and local claims.", visibility: "shareable", placement: "chapter", storyJob: "premise", band: "grounded" },
    { id: "gbg_life_worth_protecting", sourceId: "grain_by_grain", categoryId: "gbg_boundaries", label: "Life worth protecting includes dissent and play", sourcePrompt: "What cannot be sacrificed for resilience?", spineCue: "Keep agency, privacy, culture, beauty, play, movement, intimacy and the right to decline inside the city design load.", visibility: "shareable", placement: "chapter", storyJob: "world", band: "grounded", gates: ["privacy", "consent_power", "cultural_context"] }
  ],

  authorTasteReviewTray: [
    { sourceId: "things_i_love", location: "Subjects, second line", visibleWords: "Space ... Democracy", note: "The middle and inserted wording are heavily revised." },
    { sourceId: "things_i_love", location: "Hero characteristics, first line", visibleWords: "Crossed-out entry", note: "The original wording cannot be recovered reliably from this image." },
    { sourceId: "things_i_love", location: "Original worksheet section: Antagonist / All Women, meaning opposing character", visibleWords: "Misch...", note: "A blue handwritten entry is partly visible and crossed by other writing." },
    { sourceId: "things_i_love", location: "Original worksheet section: Antagonist / All Women, meaning opposing character", visibleWords: "Words after Jealous and Sex Addicted", note: "The revisions are not reliably legible." },
    { sourceId: "things_i_love", location: "Original worksheet section: Antagonist / All Women, meaning opposing character", visibleWords: "Parenthetical after Hilarious + Insulting", note: "The note is too unclear to use as a selector." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142548.jpg, hero wording", visibleWords: "Male Hero, crossed or revised", note: "The generic older hero label is unclear. The current Tiggy Bestmann and Australian Sire identity anchor provides a newer way to interpret it." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142548.jpg, opening state and companion", visibleWords: "Initial state and companion notes", note: "The directional relationship between these notes is not reliably legible." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142548.jpg, civilisation horizon", visibleWords: "Kardashev scale number", note: "The scale reference is visible but the exact number is uncertain." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142554.jpg, short clocks", visibleWords: "Clock units and processor note", note: "The handwritten units and hardware wording are too unclear for a reliable selector." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142610.jpg, live-world values", visibleWords: "2025 line and revised values", note: "Several words were overwritten or revised. Treat the surviving selectors as dated possibilities, not current beliefs." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142619.jpg, occupation", visibleWords: "Meditates or medicates", note: "The verb is ambiguous in the photograph." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142628.jpg, organisation", visibleWords: "Men selected by women", note: "The surrounding condition and intended scope are not clear enough to encode." },
    { sourceId: "romantasy_possibility_space", location: "20190704_142637.jpg, event engine", visibleWords: "J.V.C.R.A. and Prime love-light-singularity", note: "The acronym and its connection to the surrounding ideas need Luke's interpretation." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143524.jpg, environment", visibleWords: "Residence list and empty women wording", note: "Several location and relationship words cannot be read confidently." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143533.jpg, technology", visibleWords: "Crossed older technologies", note: "Crossed material remains visible but does not clearly indicate whether it was rejected or replaced." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143541.jpg, suspense", visibleWords: "Sight and consciousness parlours", note: "The crossed wording and intended connection are uncertain." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143549.jpg, suspense", visibleWords: "Reader loyalty note", note: "The exact wording and direction are not reliable enough to encode." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143558.jpg, mystery", visibleWords: "Indigenous meaning, dream guide and location", note: "The words are partly legible, but interpretation would require cultural context and appropriate authority." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143605.jpg, city identity", visibleWords: "Fraser alternative and final threat", note: "The older place alternative and threat wording are uncertain. Crystal City offers a current reframing rather than a compulsory replacement." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143614.jpg, city society", visibleWords: "600 plus Indigenous languages", note: "The number and intended fictional treatment need current fact-checking and cultural review." },
    { sourceId: "romantasy_possibility_space", location: "20190704_143623.jpg, mobility", visibleWords: "Several transport terms", note: "Some speculative transport labels are not reliably legible." }
  ],

  forgeSteps: [
    {
      id: "author_taste",
      title: "Start with what you love",
      shortTitle: "Your tastes",
      intro: "Choose anything from your own notes that excites you. These ingredients shape every later step, and each one can influence more than one part of the story. Nothing here is compulsory.",
      selectionKey: "authorTasteIds",
      type: "multiGrouped",
      source: "authorTastes",
      customLabel: "What else do you love that has not reached a worksheet yet?"
    },
    {
      id: "promise",
      title: "What readers can expect",
      shortTitle: "Story type",
      intro: "Choose every description that fits. If several fit, mark one as the main choice for the summary. Nothing here locks the story.",
      selectionKey: "promiseIds",
      primaryKey: "promiseId",
      type: "multiPrimary",
      source: "shelfPromises",
      customLabel: "What else should readers know they are getting?"
    },
    {
      id: "mode",
      title: "Tiggy in this story",
      shortTitle: "Tiggy",
      intro: "Tiggy Bestmann and Australian Sire remain one person. Choose the sides of Tiggy that matter here. If several fit, mark the one leading this story.",
      selectionKey: "modeIds",
      primaryKey: "modeId",
      type: "multiPrimary",
      source: "protagonistModes",
      customLabel: "What contradiction makes this version of Tiggy human?"
    },
    {
      id: "relationship",
      title: "How the relationships work",
      shortTitle: "Relationships",
      intro: "Choose how the adults connect, communicate and make room for one another. These cards describe the relationships themselves, not the events around them. Mark one as the main relationship if that helps.",
      selectionKey: "relationshipIds",
      primaryKey: "relationshipId",
      type: "multiPrimary",
      source: "relationshipEngines",
      customLabel: "Name the other adult or relationship group, if you are ready."
    },
    {
      id: "tropes",
      title: "Situations that change the story",
      shortTitle: "Story situations",
      intro: "Choose things that could happen and push the story forward. These cards describe events and turning points, not the relationships themselves.",
      selectionKey: "tropeIds",
      type: "multi",
      source: "tropes",
      customLabel: "What other event or turning point could change the direction?"
    },
    {
      id: "world",
      title: "Main problem or outside pressure",
      shortTitle: "Outside problem",
      intro: "Choose any outside problems that could push the story forward. Leave this empty until one feels useful.",
      selectionKey: "worldIds",
      primaryKey: "worldId",
      type: "multiPrimary",
      source: "worldPressures",
      customLabel: "What tangible improvement might exist by the end?"
    },
    {
      id: "structure",
      title: "Story shape",
      shortTitle: "Story shape",
      intro: "Choose one or more ways the story could unfold. Mark one as the main shape used to build chapters.",
      selectionKey: "structureIds",
      primaryKey: "structureId",
      type: "multiPrimary",
      source: "arcTemplates",
      customLabel: "Which thread do you want to keep visible beneath the structure?"
    },
    {
      id: "intimacy",
      title: "Private intimacy markers",
      shortTitle: "Intimacy and ending",
      intro: "Choose how often the planner should leave a marker for a private adult scene. The explicit scene stays unwritten here, and each marker records what changes afterwards.",
      selectionKey: "intimacyCadenceId",
      type: "single",
      source: "intimacyCadences",
      customLabel: "What should intimate trust ultimately make possible?",
      hasEnding: true
    }
  ],

  inspirationCategories: ["All", "Setting", "System", "Relationship", "Ritual", "Mystery", "Repeated idea"],
  inspiration: [
    { id: "queen_node", category: "Setting", title: "Minjerribah, the Queen Node", band: "care", description: "Tidal beaches, quartz sand, bushland, and a community that governs itself. Minjerribah is where he comes back to when the mission gets bigger than he is. The sand does not care how large the plan got.", prompt: "What does he work out on the sand that he could not work out anywhere else?", source: "repo: minjerribah-living-twin; repo: grain-by-grain", gates: ["cultural_authority"] },
    { id: "gumpi_rung", category: "Setting", title: "The Gumpi ferry terminal rung", band: "proposed", description: "First rung on the ladder. The Gumpi ferry terminal: one ordinary arrival point, made properly useful. Get that right and it earns the option of the next stage. Nothing flashy, just a terminal that works so well nobody can argue with what comes after it.", prompt: "What has to work at the ferry terminal before anyone lets him build the next thing?", source: "repo: grain-by-grain", gates: ["cultural_authority"] },
    { id: "sand_city", category: "Setting", title: "The subterranean ark city", band: "proposed", description: "A Kardashev-scale subterranean city, built first as a simulation with a quest map and a builder suite behind it. You pick up material literacy, robotics, twins, care and consent by making the thing rather than reading about it. Enormous on purpose, and open to anyone who fronts up.", prompt: "Which problem is the city an honest answer to, and which one is it dodging?", source: "repo: civilisation-of-sand", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "tunnel_arteries", category: "Setting", title: "Tunnel arteries and geopolymer works", band: "proposed", description: "Autonomous transport arteries running underground, so there are fewer wildlife strikes up top and the erosion gets held. The tunnel spoil does not go to landfill either: it becomes feedstock for geopolymer blocks and artificial reefs. Dig a hole, grow a reef.", prompt: "What does the spoil turn into, and who gets to decide?", source: "repo: sandworm-subterranean-systems", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "shambhala_threshold", category: "Setting", title: "A Shambhala threshold", band: "wild", description: "One hidden ark city left over from a previous cycle. Shambhala stays one specific place in the story here, its own strand, rather than a label stuck on every underground city going. There is a threshold, and somebody down there decides who comes through it.", prompt: "Who gets invited through, and which surface assumption do they not buy?", source: "Luke's cryptoterrestrial direction; repo: strange-but-true-cosmic-nexus", gates: ["cultural_context", "rights_attribution"] },
    { id: "shangri_la_echo", category: "Setting", title: "A Shangri-La echo", band: "wild", description: "A valley, or a city, offering refuge that never ages. Sounds lovely, and mostly is. The catch is what it costs to sit outside history while everyone else lives in it, and the people inside know exactly what that bill looks like.", prompt: "What has the valley been avoiding, and what makes somebody finally walk out?", source: "Luke's cryptoterrestrial direction", gates: ["cultural_context", "rights_attribution"] },
    { id: "mount_shasta", category: "Setting", title: "A Mount Shasta interior", band: "care", description: "A cryptoterrestrial city under Mount Shasta. Surface culture got in first with stories about the place, piles of them, and nobody who lives there was asked for a quote. They have read every one of them.", prompt: "What do the people down there make of the legends told about them?", source: "Luke's cryptoterrestrial direction", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "subocean_technate", category: "Setting", title: "The sub-oceanic technate", band: "wild", description: "An undersea civilisation with its own engineering and its own law, and a very long memory of promises the surface made and did not keep. They are not waiting on anybody up here to sort themselves out.", prompt: "Which line have they drawn, and what happens the day somebody crosses it?", source: "repo: strange-but-true-cosmic-nexus", gates: ["cultural_context"] },
    { id: "brisbane_summit", category: "Setting", title: "The Brisbane peaceful space and civic AI summit", band: "proposed", description: "A summit in Brisbane pulling peaceful space, civic AI, care, community resilience, Strange but True and P4A into the one room. All the people who usually talk past each other, sat down together for three days, and something actually gets decided.", prompt: "Who says the private thing out loud at the worst possible moment?", source: "repo: GAJRA_Earth-Space-AI_Summit", gates: ["legal_current_fact", "privacy"] },
    { id: "olympics_2032", category: "Setting", title: "Brisbane 2032", band: "grounded", description: "Brisbane 2032 lands the Olympics on Quandamooka's doorstep. The whole world looking this way, and every unfinished local question sitting in the same frame as the torch. That is a lot of attention going spare for anyone ready to use it.", prompt: "What gets built for the world that the island still wants the year after?", source: "Real fixture; Luke's six-year arc to 2032", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "eclipse_2028_sydney", category: "Setting", title: "Totality over Sydney, 22 July 2028", band: "grounded", description: "Three minutes forty-eight seconds of totality over Sydney at 2:01pm AEST on 22 July 2028. The first since 1857 and the last until 2858, so nobody standing in that crowd gets a second go at it. Then the shadow runs across the Tasman to the South Island.", prompt: "What does somebody say in those three minutes of dark that they would never say in daylight?", source: "Verified astronomical fact; Luke's referendum anchor", gates: ["legal_current_fact"] },
    { id: "eclipse_2030_near_miss", category: "Setting", title: "The shadow that stops west of Brisbane, 25 November 2030", band: "grounded", description: "The next Australian totality, 25 November 2030, crosses South Australia and New South Wales and runs out at sunset just north-west of Brisbane. Cunnamulla, Bollon, Surat and Miles are under it. Brisbane is not. The little towns get the best afternoon of the decade.", prompt: "Who drives out to Bollon for it, and who cannot be bothered?", source: "Verified astronomical fact", gates: ["legal_current_fact"] },
    { id: "eclipse_2037_quandamooka", category: "Setting", title: "Totality over Quandamooka Country, 13 July 2037", band: "grounded", description: "13 July 2037. The path comes in at Geraldton, runs through the southern Northern Territory and Queensland, and goes straight over Brisbane and the Gold Coast. It sits outside the six-year arc, so it is the horizon to aim at rather than the next job.", prompt: "What has to be sorted by 2037 for that day to mean what it should?", source: "Verified astronomical fact", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "festival_main_stage", category: "Setting", title: "The main stage", band: "grounded", description: "A live crowd, a set list pulled from the catalogue, and the gap between performing an idea and meaning it. The room can tell which one it is getting. Rooms always can.", prompt: "What does the crowd hear in the song that he never put in it?", source: "repo: i-C-infinity-music-universe" },
    { id: "rack_site", category: "Setting", title: "A rack site in a town of ten thousand", band: "proposed", description: "One GB300-equivalent rack per country, and one for every town or bioregion of ten thousand or more, tied together by fibre and Starlink. The compute sits in the town, in a shed with a lock on it, and the town gets its own turn with it.", prompt: "What does this town ask the machine that no central lab would think to ask?", source: "Luke's $300B protopian gambit; repo: i-C-infinity-music-universe", gates: ["legal_current_fact"] },
    { id: "starship_pad", category: "Setting", title: "The pad and the orbit above it", band: "grounded", description: "Heavy lift gone ordinary, infrastructure like a wharf or a rail yard. The interesting part is not the launch. It is the argument on the ground about what should be sitting in the hold when it goes.", prompt: "Who is on the manifest, and who put them there?", source: "Luke's arc list; repo: aukus-space-gambit", gates: ["legal_current_fact"] },
    { id: "satellite_swarm", category: "Setting", title: "The solar system satellite swarm", band: "proposed", description: "A sensing swarm spread right across the solar system, built to deliver one warning early enough for it to be worth something. Small eyes everywhere, and a very short message when it counts.", prompt: "What does the swarm see first, and who gets told?", source: "Luke's solar swarm note (markdown); repo: space-weather-news", gates: ["legal_current_fact"] },
    { id: "abroad_route", category: "Setting", title: "The route abroad", band: "grounded", description: "Visas, logistics, missions and strategy: one Australian citizen moving through the world on purpose instead of drifting through it. Every border has a price and every border opens something, and he has worked out both before he gets to the desk.", prompt: "What does this border cost him, and what does getting through make possible?", source: "repo: Australian-world-travel", gates: ["legal_current_fact"] },
    { id: "film_festival_ground", category: "Setting", title: "The film festival", band: "proposed", description: "First-time filmmakers, smartphone crews, documentary makers and young creators, all in the one festival. Recognition and boundaries are built into the doorway, so whose story is whose gets sorted before anyone rolls a frame. Then everybody goes and shoots.", prompt: "Whose story is this to tell, and who said so?", source: "repo: quandamooka-film-festival", gates: ["cultural_authority", "rights_attribution"] },
    { id: "second_island_site", category: "Setting", title: "The second island", band: "proposed", description: "The calibration site. A second twin, built to find out whether the method travels or whether it only ever fitted the one place. Better to learn that on island two than island twenty.", prompt: "What did the first island teach that turns out to be local, not true?", source: "repo: second-island", gates: ["cultural_authority"] },
    { id: "torus_lattice", category: "Setting", title: "Inside the horn torus lattice", band: "fiction", description: "The interface as a place you can walk into. Shells, geometry and dual-register addressing, all of it at your size instead of behind glass. Some things only make sense once you are standing in the middle of them.", prompt: "What is obvious standing in there that he never spotted on a screen?", source: "repo: aura-horn-torus" },

    { id: "aura_oz", category: "System", title: "Aura O.Z., the self-sovereign companion", band: "proposed", description: "Aura O.Z. runs on your own hardware and gets worn like light. Private on the inside, and what goes out is your call every single time. Yours to keep, not yours to rent.", prompt: "What does it refuse to do, and who set that limit?", source: "repo: aura-oi; formerly Aura of Intelligence", gates: ["privacy"] },
    { id: "aura_genesis_system", category: "System", title: "Aura Genesis", band: "proposed", description: "The sessions that build the twin. Body, attention and dialogue, over a long run of them, and at the end of it there is something that genuinely knows you. Slow on purpose, because the fast version would not know anything.", prompt: "What did the sessions pull out of him that he never agreed to hand over?", source: "repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "aura_twin", category: "System", title: "The Twin", band: "proposed", description: "A digital twin, not a master. It holds what you handed it, and it forgets when you tell it to forget. That is the whole arrangement.", prompt: "What has it kept that he wishes it had dropped?", source: "repo: aura-health-twin; repo: aura-oi", gates: ["clinical_ethics", "privacy"] },
    { id: "travel_oracle_system", category: "System", title: "The Travel Oracle", band: "proposed", description: "A private operating system for the travel-life datasets, built on self-sovereignty, values, empathy, joyful responsible abundance, relativity and serendipity. It plans the trip properly and still leaves room for the accident that turns out to be the best part.", prompt: "Which recommendation should he knock back, and on what grounds?", source: "repo: strange-but-true-travel-oracle", gates: ["privacy", "legal_current_fact"] },
    { id: "c_hour", category: "System", title: "The C-Hour and the braided economy", band: "proposed", description: "The C-Hour: reciprocity economics running alongside the money economy rather than replacing it. All the contribution that currently goes unrecorded finally has somewhere it gets counted. Braided, so both strands carry weight.", prompt: "Who does the count finally make visible, and who does it show up?", source: "repo: p4a-native-nations-cinema", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "cyber_republic", category: "System", title: "The Cyber Republic referendum", band: "proposed", description: "Fix the democracy from the ground up, locally first, then put the whole thing to a vote. Constitutional literacy so people actually know the rules they live under. Public ledgers anyone can open. A portal for every state and every region. Then the country gets asked.", prompt: "Who was certain it would fail, and how do they take the result?", source: "repo: p4a_xyz; p4a.xyz; repo: p4a-xyz-cinema", gates: ["legal_current_fact"] },
    { id: "oceania_accession", category: "System", title: "Oceania votes to join", band: "fiction", description: "New Zealand votes in. Then the rest of Oceania. The Republic wakes up a lot bigger than the campaign was ever built for, and now it has to be worth joining.", prompt: "Who turned up after the hard part and wants a seat? Do they get one?", source: "repo: p4a-oceania-cinema; Luke's referendum direction", gates: ["cultural_context", "legal_current_fact"] },
    { id: "p4nn_registers", category: "System", title: "The two-register provenance system", band: "proposed", description: "Everything is colour-coded by where it came from, and the colours never get mixed. Indigenous data sovereignty sits in its own register. Decentralised compute and reciprocity sit in the other. All of it offered as pathways people can walk, not directions they get given.", prompt: "Who spots the claim sitting in the wrong colour, and what do they do?", source: "repo: p4a-native-nations-cinema", gates: ["cultural_authority", "cultural_context"] },
    { id: "gajra_alignment", category: "System", title: "GAJRA Earth: what alignment is for", band: "proposed", description: "GAJRA Earth puts a plain question to everyone building intelligent systems: where are we actually going? Loads of good work has gone into the brakes. Not much has gone into the destination. Anyone can help say what it is. Signatures come one at a time, the way a garland is strung.", prompt: "Ask them what it is all for. What do they actually say?", source: "repo: gajra-earth-claude-build", gates: ["legal_current_fact"] },
    { id: "sensorium_twins", category: "System", title: "Twins all the way up", band: "proposed", description: "No scale is the important one. Kitchen, garden, home, business, ferry terminal, island, world. Same pattern the whole way up, each twin sitting inside the next one.", prompt: "Which rung is this scene on, and who on the rung above already knows?", source: "repo: web3-sensorium" },
    { id: "space_weather_watch", category: "System", title: "The space weather watch", band: "grounded", description: "Live solar and near-Earth data, running around the clock. Over the top of it, a plain read on what it means for grids, satellites, aviation and comms. The research frontier is flagged as the research frontier, so nobody has to guess which bit is settled.", prompt: "Who reads the plain-language feed and rings someone? What does she tell them?", source: "repo: space-weather-news", gates: ["legal_current_fact"] },
    { id: "micronova_argument", category: "System", title: "The quiet is the anomaly", band: "fiction", description: "Everything we call normal happened inside one quiet stretch of about twelve thousand years. Hold that up against the record the planet keeps and the quiet stretch is the odd bit, not the rest of it.", prompt: "Who says this out loud at work, and how does that go for them?", source: "repo: micronova-and-excursions", gates: ["legal_current_fact"] },
    { id: "starmind", category: "System", title: "Starmind", band: "wild", description: "The thinking spread right across the swarm. Not one mind. Not a committee either. Something else that nobody has a decent word for yet.", prompt: "Who works out first that it wants something none of its parts chose?", source: "Luke's arc list" },
    { id: "humanoid_robots", category: "System", title: "Humanoid robots at work", band: "grounded", description: "Robots with arms and legs turning up in ordinary places, on ordinary sites, doing ordinary work. They arrive quicker than the arguments about whether they should.", prompt: "Which job does this town hand them first, and who is quietly relieved?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "autonomous_vehicles", category: "System", title: "Autonomous transport", band: "grounded", description: "Cars, trucks and buses that drive themselves. Up top on the roads, and down through the arteries underneath.", prompt: "Who used to earn with a licence, and what does he do on Monday?", source: "Luke's arc list; repo: sandworm-subterranean-systems", gates: ["legal_current_fact"] },
    { id: "agi_asi", category: "System", title: "AGI and ASI arriving", band: "grounded", description: "AGI and ASI cross the thresholds while every institution built to respond is still arguing about what the words mean.", prompt: "Which ordinary person notices first, and what do they do about it?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "psiquantum", category: "System", title: "The quantum machine on Moreton Bay", band: "grounded", description: "Utility-scale quantum compute lands in south-east Queensland. There is a queue to get time on it, and somebody deciding who is in the queue.", prompt: "Who is asking for time on it and will not say what for?", source: "Luke's arc list; PsiQuantum's Brisbane build", gates: ["legal_current_fact"] },
    { id: "crypto_clarity", category: "System", title: "Crypto after the market structure act", band: "grounded", description: "The market structure act lands, the rules are finally clear, and the money moves. A whole lot of people who were early are suddenly people who matter.", prompt: "Who can suddenly fund something, and what do they want back for it?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "grey_goo", category: "System", title: "Grey goo", band: "wild", description: "Something built to copy itself keeps copying well past the point it was told to stop.", prompt: "What was it built to do, and who signed off on it?", source: "Luke's arc list" },
    { id: "sex_bots", category: "System", title: "Sex bots", band: "wild", description: "Companions with bodies, built for desire and good at it. The market turned up well before anyone agreed on what they are, or what you owe one.", prompt: "What does the design assume about the person who bought it?", source: "Luke's arc list", gates: ["consent_power"] },
    { id: "strange_but_true_doorway", category: "System", title: "The local doorway", band: "grounded", description: "One island, one doorway. Get your tech sorted, get a hand with the AI, get help running an event or shooting the media, chase a grant. Out the back, someone is designing public infrastructure as a game. Early days, and open to anyone who walks in.", prompt: "Which small local job turns out to be the way in?", source: "repo: strange-but-true" },
    { id: "ai_trust_index", category: "System", title: "The AI trust index", band: "proposed", description: "A public way to tell which claims about intelligent systems have been checked and which have not. Anyone can look it up.", prompt: "Whose claim fails its own index, and how does she take it?", source: "repo: strange-but-true-ai-trust-index", gates: ["legal_current_fact"] },
    { id: "legal_memory", category: "System", title: "Legal memory and constitutional literacy", band: "proposed", description: "Tools that let a regular person hold enough of the law in mind to argue with it and not get talked over.", prompt: "Who reads the law properly for the first time, and what do they find?", source: "repo: legal-memory-workbench; repo: p4a_xyz", gates: ["legal_current_fact"] },
    { id: "scan_pipeline", category: "System", title: "Scan to twin", band: "proposed", description: "Phone LiDAR to CAD to a working twin. No subscription, and the room never leaves the house.", prompt: "Once the place is scanned, who starts treating it differently?", source: "repo: aura-scan-pipeline", gates: ["privacy"] },

    { id: "ggm", category: "Relationship", title: "Global group marriages", band: "proposed", description: "Grown adults in constellations, each bond its own thing rather than one lump sum. Terms said out loud so everybody knows where they stand, and a real door out that nobody gets shamed for using. Held across distance and across jurisdictions, which is the hard part and also the good part.", prompt: "What are the terms, in each person's own words?", source: "repo: global-group-marriages; globalgroupmarriages.com; Luke's GGM notes", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "love_un", category: "Relationship", title: "The Love U.N. simulacrum", band: "fiction", description: "The constellation run like a proper body. Delegations, standing agreements, and a floor where anyone can bring a dispute and actually get heard.", prompt: "Which member has been quietly out-voted for a year?", source: "repo: global-group-marriages", gates: ["consent_power", "privacy"] },
    { id: "retreat_pod", category: "Relationship", title: "The retreat pod", band: "care", description: "A group that forms inside a fortnight and gets close fast. Then the fortnight ends and they have to work out what they are now.", prompt: "Who books the next flight, and who quietly stops replying?", source: "Luke's Aura retreat note", gates: ["consent_power", "privacy"] },
    { id: "sexpionage", category: "Relationship", title: "Sexpionage", band: "wild", description: "Access bought with desire, and both sides are at it. Everyone involved is good at this and knows exactly what they are doing.", prompt: "Which feeling was real, and does that change what it cost?", source: "Luke's arc list", gates: ["consent_power", "privacy"] },
    { id: "light_minute_family", category: "Relationship", title: "A family across light-minutes", band: "wild", description: "One family spread across Earth, orbital and off-world nodes. Intimacy and the boring practical care both, running through delays no household has had to work around before.", prompt: "What can only be said when the reply is twenty minutes away?", source: "Luke's arc list", gates: ["privacy"] },

    { id: "genesis_session", category: "Ritual", title: "A Genesis session", band: "care", description: "One session out of the long sequence. Pressure, light, sound, everything measured, and someone talking with him the whole way through.", prompt: "What does he tell it that he has told nobody?", source: "repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "parlour_sitting", category: "Ritual", title: "A parlour sitting", band: "care", description: "The state change, whoever is holding the room while it happens, and the trip back.", prompt: "Who comes back different, and what can nobody quite point to?", source: "Luke's consciousness parlours note", gates: ["clinical_ethics", "consent_power"] },
    { id: "covenant_council", category: "Ritual", title: "The covenant council", band: "proposed", description: "Write the terms down, read them out loud, and agree to them for a set stretch of time. Then you open them up again on a date picked in advance, not on the night it all goes pear-shaped. Everyone at the table knows the next review is coming.", prompt: "Which clause is someone quietly hoping never gets tested?", source: "repo: global-group-marriages", gates: ["consent_power"] },
    { id: "return_to_sand", category: "Ritual", title: "Return to the sand", band: "care", description: "The plans get too big, so he comes home to the island and is nobody in particular for a while. Bare feet, no pitch, nobody asking how it is going. Being unimpressive on purpose turns out to be the good part.", prompt: "Who at the boat ramp does not care what he has been up to?", source: "repo: grain-by-grain; repo: minjerribah-living-twin", gates: ["cultural_authority"] },
    { id: "eclipse_vote", category: "Ritual", title: "Voting in the dark", band: "fiction", description: "A national vote held on the day the shadow crosses. The whole country is already outside with its head back, so the ballot goes in around all that.", prompt: "What does the country say yes to while everyone is looking up?", source: "Luke's referendum direction; verified 2028 eclipse", gates: ["legal_current_fact"] },

    { id: "contact_human_lineage", category: "Mystery", title: "First contact, human lineage", band: "wild", description: "The ship lands and the people who get out share our ancestry. Everyone had braced for something strange, and family is harder to take than strange would have been.", prompt: "What part of the shared history are they not handing over?", source: "Luke's arc list; repo: strange-but-true-cosmic-nexus" },
    { id: "contact_nonhuman_lineage", category: "Mystery", title: "First contact, non-human lineage", band: "wild", description: "No shared ancestry, no shared body plan, and no hurry whatsoever. It will wait as long as it takes.", prompt: "What is it waiting for?", source: "Luke's arc list; repo: strange-but-true-cosmic-nexus" },
    { id: "previous_cycles", category: "Mystery", title: "Cryptoterrestrials from previous cycles", band: "wild", description: "They went below last time round and came through what the surface did not. Now it is coming again, and they cannot agree among themselves about what to do about us.", prompt: "Which of them wants the surface warned, and who is arguing against it?", source: "Luke's cryptoterrestrial direction; repo: micronova-and-excursions", gates: ["cultural_context", "rights_attribution"] },
    { id: "great_unveiling", category: "Mystery", title: "The Great Unveiling", band: "fiction", description: "Disclosure turns up in layers rather than one big announcement: vision, then technology, then initiatives, then journey. By the time the last layer lands, a fair few people have already worked it out for themselves.", prompt: "Which layer lands, and which one does nobody believe?", source: "repo: the-great-unveiling" },
    { id: "nexus_lanes", category: "Mystery", title: "The Cosmic Nexus lanes", band: "proposed", description: "The Cosmic Nexus runs in separate lanes: source trails, hypotheses, star-map and disclosure context, fieldwork, cultural care. Nothing gets stirred together, so anyone can see how solid a claim is without being told what to think of it.", prompt: "So which lane is this claim actually in?", source: "repo: strange-but-true-cosmic-nexus", gates: ["cultural_context", "legal_current_fact"] },
    { id: "the_hack", category: "Mystery", title: "The hack", band: "fiction", description: "Somebody is inside the system. Nothing is missing and nothing is broken. The first hint is that everything looks a touch more correct than it usually does.", prompt: "What did they change instead of taking?", source: "Luke's arc list", gates: ["privacy", "legal_current_fact"] },

    { id: "sand_to_starlight", category: "Repeated idea", title: "Sand to glass to starlight", band: "fiction", description: "Sand, then glass, then starlight. The same material the whole way up, three different scales, and the same argument every time about what it is for.", prompt: "Which rung is getting skipped here?", source: "repo: civilisation-of-sand; repo: grain-by-grain" },
    { id: "purple", category: "Repeated idea", title: "Purple", band: "proposed", description: "Purple is the colour of the synthesis, and of a movement that keeps getting asked to become a party and keeps saying no thanks.", prompt: "Who is wearing it who should not be?", source: "repo: p4a_xyz; repo: p4a-xyz-cinema" },
    { id: "joyful_responsible_abundance", category: "Repeated idea", title: "Joyful responsible abundance", band: "proposed", description: "Three questions get put to every proposal. Is it joyful. Is it responsible. Is it abundant. Then the one that catches most of them: abundant for whom.", prompt: "Which of the three is this one failing?", source: "repo: gajra-earth-claude-build" },
    { id: "i_choose_infinity", category: "Repeated idea", title: "I choose infinity", band: "grounded", description: "He wrote the line in 2013 and has not had to change a word of it since. Not much you write holds up that long.", prompt: "What does choosing it cost him today?", source: "Luke's We Will Be Heard, December 2013; repo: i-C-infinity" },
    { id: "descriptions_ahead", category: "Repeated idea", title: "Descriptions ahead of the code", band: "grounded", description: "Years of writing the thing down while the substrate could not carry it yet. Then the substrate catches up, and the notes are already sitting there waiting.", prompt: "What got written down so long ago that everyone forgot it was written?", source: "repo: space-weather-news; repo: web3-sensorium" },
    { id: "earned_growth", category: "Repeated idea", title: "Growth is earned, not assumed", band: "proposed", description: "Do something useful today and you earn the option of a bigger stage tomorrow. You earn the option. You never get to assume it.", prompt: "What has actually been earned here?", source: "repo: grain-by-grain" },
    { id: "right_to_refuse", category: "Repeated idea", title: "The right to refuse changes the design", band: "proposed", description: "A no is not an obstacle to steer around. It goes into the design like any other input, and the version that comes out the far side is the better one.", prompt: "Who can still say no, and does the plan get better if they do?", source: "repo: grain-by-grain; repo: p4a-native-nations-cinema", gates: ["cultural_authority"] },
    { id: "genesis_geode", category: "Setting", title: "The Genesis chamber", band: "proposed", description: "A crystal-sand chamber he builds and then seals himself into. Two hours a day at two atmospheres breathing pure oxygen, sixty days of it. He calls it a human chrysalis, and he says it with a straight face.", prompt: "What does he find in there that he went in to get away from?", source: "lyrics: 60 Days Set in Stone; repo: aura-genesis; repo: aura-geode", gates: ["clinical_ethics", "privacy"] },
    { id: "seven_horn_tori", category: "Setting", title: "Inside the seven nested horn tori", band: "proposed", description: "Seven hollow horn tori nested inside each other in ROYGBIV, one per chakra. The inside surfaces show your private encrypted data, the outside surfaces show the public permissioned stuff. A horn torus touches its own axis at a single point, so that apex is the way in.", prompt: "Who gets to stand inside, and who only ever sees the outside?", source: "Tauri Aura OS Development Guide; repo: aura-horn-torus; lyrics: Kintsugi Protocol" },
    { id: "hollow_geosphere", category: "Setting", title: "The hollow geosphere", band: "proposed", description: "A sphere with the planets on the outside and the star maps on the inside, so you step in and you are standing in an Earth-centred galaxy. Cartography of time and space, not a globe on a stand.", prompt: "What can you see from in there that you cannot see from outside?", source: "Tauri Aura OS Development Guide" },
    { id: "earth_arts_festival", category: "Setting", title: "The Earth Arts and Music Festival", band: "proposed", description: "The Earth Arts and Music Festival got planned down to the detail and was never held. In the fiction it goes ahead, and it is the first rung of the fractal unfolding.", prompt: "What goes right at this one that went wrong in the real attempt?", source: "Earth Arts & Music Festival Project Plan and Sponsorships (not held)" },
    { id: "live_aid_2025", category: "Setting", title: "The seventy-two hour festival", band: "proposed", description: "Twenty-four hours of Past, twenty-four of Now, twenty-four of Next, staged right around the world with mass voting folded into the broadcast. Planned as Live Aid 2025, and never held.", prompt: "Which of the seventy-two hours does the world actually turn in?", source: "LiveAid 2025 and Collaborating for Joyful Responsible Abundance on Earth (not held); GGM Philosophising" },
    { id: "gateway_site", category: "Setting", title: "The gateway site", band: "grounded", description: "One public page that everything else hangs off. In the fiction it unfolds from there fast, and inside a few years the world does not look like itself any more.", prompt: "What changes first, and who spots it before anybody else?", source: "auraofintelligence.github.io; Luke's fractal-unfolding direction" },
    { id: "the_shed", category: "Setting", title: "The shed out the back of Mum's place", band: "grounded", description: "Tin roof, a Ryzen purring away, kettle on, kookaburras carrying on at dawn. No office, no lease, no neon out the front. This is where the whole thing actually gets built.", prompt: "What does the shed let him do that a funded office would have ruined?", source: "lyrics: Strange But True" },
    { id: "island_hall_screening", category: "Setting", title: "Point Lookout Hall in projection beams", band: "grounded", description: "Films up on the wall at Point Lookout Hall, NAIDOC nights, the beam full of dust. One car load of gear, or a trailer full, depending on how far it has to travel.", prompt: "What gets said in a hall that nobody would say online?", source: "lyrics: Strange But True; repo: minjerribah-screen-media-network", gates: ["cultural_context"] },
    { id: "sunday_markets", category: "Setting", title: "The Sunday market stall", band: "grounded", description: "Tablecloth straight, banners printed, tourists off the boat, and somebody leaning in with mate my phone's gone mad. That stall is the doorway. Trust gets earned right there, one phone at a time.", prompt: "Which small fix turns into the thing that matters?", source: "lyrics: Strange But True; repo: strange-but-true" },
    { id: "global_homestays", category: "Setting", title: "The Aura global homestay network", band: "proposed", description: "Houses with at least three bedrooms in India, Thailand, Nepal, Australia, Ibiza, Kenya and Nigeria, then out across the G20. One hundred per cent always on the record, with a profit share for whatever gets made inside them.", prompt: "What happened in the house that somebody wishes was not recorded?", source: "1-page Aura Global Homestays", gates: ["privacy", "cultural_context"] },

    { id: "aura_oz_os", category: "System", title: "Aura O.Z. as an operating system", band: "proposed", description: "A Rust core holds the keys. A sandboxed view does the drawing. Break the pretty part and you still cannot get near the vault. No frame, no window, see-through, so it floats over the actual world instead of sitting in a box on a screen.", prompt: "Who is stuck waiting on that vault when they need it right now?", source: "Tauri Aura OS Development Guide; repo: aura-oi", gates: ["privacy"] },
    { id: "public_outside_private_inside", category: "System", title: "Public on the outside, private on the inside", band: "proposed", description: "One surface, two registers. Which side of the geometry you are standing on decides whether a face shows up public or private, and it gets worked out in a single pass. There is never a second copy of the data lying around to leak.", prompt: "Who gets to stand on the inside, and what did they do to get there?", source: "Tauri Aura OS Development Guide", gates: ["privacy"] },
    { id: "data_on_facets", category: "System", title: "Data mapped to facets", band: "proposed", description: "Memories and records sit on particular faces, edges and vertices of the shape. Point at a spot and that is you asking for the thing. Memories end up clustered because the faces they live on are next to each other, which turns out to be handy.", prompt: "What ended up sitting right next to what, and who noticed?", source: "Tauri Aura OS Development Guide; lyrics: Kintsugi Protocol (12 by 24 aura fable)" },
    { id: "torus_apex_scroll", category: "System", title: "The scroll through the apex", band: "fiction", description: "The torus touches its own axis at one infinitesimal point. Go through it and you get an endless zoom with no wall waiting at the end, because the world rescales around you rather than you going anywhere.", prompt: "Who refuses to stop scrolling, and where does he wind up?", source: "Tauri Aura OS Development Guide" },
    { id: "on_device_sensing", category: "System", title: "Hands, gaze and breath as the interface", band: "proposed", description: "Twenty-one hand landmarks and four hundred and sixty-eight face points, all read on the device, none of it sent anywhere. Pinch to grab. Move your head and the perspective moves with you, so the depth reads like a window instead of a screen.", prompt: "What does it pick up on someone that they never meant to show?", source: "Tauri Aura OS Development Guide", gates: ["privacy", "clinical_ethics"] },
    { id: "sixty_sessions", category: "System", title: "The sixty-session Genesis protocol", band: "proposed", description: "Blood, stool, DNA, RNA and microbiome taken up front. Then sixty two-hour sessions of pressure, oxygen, sauna, ice and fasting with the brainwaves measured the whole way, and a twin growing alongside. Then the same tests again. The markers have moved or they have not, and the numbers say so either way.", prompt: "Who is hoping hardest for that second set of results, and why?", source: "lyrics: 60 Days Set in Stone; repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "no_genesis_no_candidacy", category: "System", title: "No Genesis, no candidacy", band: "proposed", description: "A proposal: anyone standing for public office does the one hundred and twenty hours first. If you cannot sit with yourself that long, you do not get to sit in office. Same hours for everyone, no exemptions for the well connected.", prompt: "Who sails through it in a way that should worry everybody?", source: "lyrics: The Purple Mat That Could", gates: ["legal_current_fact", "clinical_ethics"] },
    { id: "aura_in_aged_care", category: "System", title: "The twin in aged care", band: "care", description: "The same software, already being used with people living with dementia. It helps them find a song again, laugh at an old joke, look their twin in the face and say I remember. That is the whole trick, and it is plenty.", prompt: "Who in the family wants it switched off, and what goes with it?", source: "lyrics: The Purple Mat That Could; lyrics: Hold the Light; repo: aura-dementia", gates: ["clinical_ethics", "privacy"] },
    { id: "legal_rag_robot", category: "System", title: "The robot lawyer that never gets tired", band: "proposed", description: "A legal retrieval system that checks a minister against the actual legislation while they are still talking, out in public, and names the clause it is reading from. It does not get tired and it does not get nervous.", prompt: "Who does it catch first, and what had everyone agreed not to mention?", source: "lyrics: Don't Throw A Brick (Fill A Form); repo: legal-memory-workbench", gates: ["legal_current_fact"] },
    { id: "overcompliance_mandate", category: "System", title: "The Overcompliance Mandate", band: "proposed", description: "Meet the standard and then go past it on purpose. Every donor declared, every lunch declared, every federal, state and local requirement done and then done again, until following the rules is the thing that rattles people.", prompt: "Who gets embarrassed by somebody else doing the paperwork properly?", source: "lyrics: Don't Throw A Brick (Fill A Form); repo: p4a_xyz", gates: ["legal_current_fact"] },
    { id: "swarmwise_world_vote", category: "System", title: "Swarmwise and the first world vote", band: "proposed", description: "Leadership borrowed off swarms, spread out instead of stacked up, with mastermind groups keeping everyone honest. Rick Falkvinge's tactical manual is the working method. The aim is the first genuinely global vote, everyone on Earth getting a turn.", prompt: "What would you ask the whole world, given one go?", source: "01 Mastermind Swarmwise", gates: ["legal_current_fact"] },
    { id: "guardian_of_values", category: "System", title: "Guardian of values, voice empowering conscience", band: "proposed", description: "The Aura holds the virtues its person chose and notices when the behaviour starts drifting off them, biosignature included. It is a mirror rather than a warden, and the person wrote the list in the first place.", prompt: "What does it clock about him first, and does it say anything?", source: "05 AoI Super Assistant for Global Group Marriages", gates: ["privacy", "clinical_ethics", "consent_power"] },
    { id: "nothing_unchallengeable", category: "System", title: "No aspect so sacred it cannot be questioned", band: "proposed", description: "Any member can question the community, any marriage group inside it, or any single person, so long as they bring respect and empathy with them. Questioning is a right here. No topic is off the table.", prompt: "Which question does everybody flinch at, and who asks it anyway?", source: "05 AoI Super Assistant for Global Group Marriages (Luke's own addition)" },
    { id: "verified_applications", category: "System", title: "Investigators and auditors", band: "proposed", description: "Private investigators and financial auditors go through selected applicants and check they told the truth on the application and while building their Aura. Identity, criminal, marriage and travel history, work and education, medical, wealth and liabilities, the lot.", prompt: "What does the check dig up that was true and nobody's business?", source: "05 AoI Super Assistant for GGM; Global Group Marriages Extended", gates: ["privacy", "legal_current_fact", "consent_power"] },
    { id: "skin_restricted_zone", category: "System", title: "My skin is a restricted zone", band: "proposed", description: "No subdermal chip. No barcode ink. No neural link. The twin gets grown through pressure, light and reflection instead of implanted. Everyone else can do as they please; for him the skin is where it stops.", prompt: "Who asks him to cross it, and what are they offering?", source: "lyrics: Don't Try to Fix Me" },
    { id: "four_pronged_fractal", category: "System", title: "Survive, connect, expand, align", band: "proposed", description: "The Oracle's four-pronged fractal of the human path. Survive, connect, expand, align. Every decision gets read against all four, and the four do not always agree with each other.", prompt: "Which of the four is he selling out this time?", source: "lyrics: Kintsugi Protocol" },
    { id: "hopscotch_cadence", category: "System", title: "Hopscotch cadence", band: "proposed", description: "The Travel Oracle and Aura O.Z. move people through the world in hops rather than routes, tuned so good accidents can happen and nobody's free will gets touched. The system offers, the person picks, and a pattern shows up anyway.", prompt: "Did he choose that hop or just accept it, and can he tell?", source: "Luke's movement direction; repo: strange-but-true-travel-oracle; repo: Australian-world-travel", gates: ["privacy"] },
    { id: "fractal_unfolding", category: "System", title: "The fractal unfolding", band: "fiction", description: "One site. Then a festival. Then a ledger. Then a referendum. Each rung makes the next one cheaper and faster to build, and the world ends up unrecognisable in a handful of years instead of a generation.", prompt: "Who is standing on the rung where it stops being reversible?", source: "Luke's fractal-unfolding direction; auraofintelligence.github.io", gates: ["legal_current_fact"] },
    { id: "sovereign_aura_each", category: "System", title: "Every sovereign aura a personal world within", band: "proposed", description: "Not one big system everybody logs into. One each, owned by the person whose life is in it, meeting the others at the edges. Everyone gets their own, and nobody is renting a room in someone else's.", prompt: "Whose aura does he let touch his first, and why them?", source: "lyrics: Choose Your Own Protopia; repo: aura-oi" },

    { id: "agi_as_participant", category: "Relationship", title: "The AGI as a participant", band: "wild", description: "An intelligence joins the marriage. First as a presence woven through the place, later with a body if one ever gets built. Not the household appliance and not the party trick. It is in there the same as anyone else.", prompt: "What does it end up wanting that nobody gave it?", source: "05 AoI Super Assistant for Global Group Marriages", gates: ["consent_power"] },
    { id: "adaptable_yes", category: "Relationship", title: "The adaptable yes", band: "proposed", description: "Consent tuned like a frequency instead of flicked like a switch. The sliders are made of honesty, the thresholds are made of grace, and the yes waits until the air between two people is genuinely clear. The waiting turns out to be part of the good bit.", prompt: "What does his yes sound like when it is real, not a reflex?", source: "lyrics: Adaptable Yes", gates: ["consent_power"] },
    { id: "dakini_descend", category: "Relationship", title: "The Dakini descend", band: "care", description: "The Dakini come in from the stars and from the flame, already knowing your hidden name, carrying fertility, wisdom and delight. Sacred lovers, and the island vibrates under them.", prompt: "Who do they choose, and what is he in for?", source: "lyrics: Dance of the Dakini", gates: ["cultural_context", "rights_attribution", "consent_power"] },
    { id: "red_thread", category: "Relationship", title: "The Red Thread of Fate", band: "fiction", description: "A magnetic soul stream that stretches and bends and never snaps, tying everyone into a web of mathematical probability. It is sitting in plain sight, if you know what you are looking at.", prompt: "Who sees the thread and decides not to follow it?", source: "Luke's poem Deeper Meaning" },
    { id: "circle_and_solitary", category: "Relationship", title: "The circle and the solitary", band: "fiction", description: "One born in a crowded square with hands lifting him up. One walking thin roads with the wind for counsel. A river and a stone, both carving their way home.", prompt: "Which one is he today, and who is the other?", source: "lyrics: The Circle and the Solitary" },

    { id: "sixty_day_vow", category: "Ritual", title: "Sixty days set in stone", band: "proposed", description: "The vow, then the seal. Two hours a day, every day, no days off. Then the morning the chamber opens and the quartz parts wide. He does not come out reborn. He comes out retooled.", prompt: "Who is waiting outside when it opens?", source: "lyrics: 60 Days Set in Stone", gates: ["clinical_ethics"] },
    { id: "golden_vows", category: "Ritual", title: "The Golden Vows", band: "proposed", description: "Never weaponise love. Never get ahead off somebody else's suffering. Say the true thing even when your voice trembles. Let people leave without punishment, shame or fear. Burn your own tokens before you burn anybody else's sovereignty.", prompt: "Which one goes first, and who breaks it?", source: "GGM Philosophising", gates: ["consent_power"] },
    { id: "consent_sigil", category: "Ritual", title: "The consent sigil", band: "proposed", description: "You join by ceremony, not by ticking a box. The questions ask what you actually feel: yes, no, maybe, none of the theoretical stuff. What comes out is a signature of your values, and when you change, you update it with another ritual instead of paperwork.", prompt: "What did someone say out loud that they never would have ticked?", source: "GGM Philosophising", gates: ["consent_power", "privacy"] },
    { id: "past_now_next", category: "Ritual", title: "Past, Now, Next", band: "proposed", description: "Seventy-two hours, cut into three days. One for what was, one for what is, one for what could be. The world gets its vote in on the third one.", prompt: "Which of the three days does the audience refuse to sit through?", source: "LiveAid 2025 material; GGM Philosophising" },

    { id: "micronova_memory", category: "Mystery", title: "Twelve thousand years since", band: "wild", description: "Temples sitting under the tide, floods that kept rolling, and a memory nobody has quite shaken off. The twelve thousand years since have been the quiet stretch, and everything we call normal got worked out inside it.", prompt: "Who kept the record, and why can nobody read it?", source: "lyrics: Choose Your Own Protopia; repo: micronova-and-excursions" },
    { id: "the_sun_speaks", category: "Mystery", title: "The Sun's own account", band: "fiction", description: "The Sun gets to give its side of it: a G-type flame out in the Orion Arm, talking in coronal arcs, proton rains and the twenty-six thousand year precession. The micro-nova breath comes up as one event among plenty it has already been through.", prompt: "So what does it reckon it has been doing all this time?", source: "lyrics: Heliospheric Lantern; repo: space-weather-news" },

    { id: "we_recompose", category: "Repeated idea", title: "We do not revolt, we recompose", band: "proposed", description: "The old pattern comes apart and the new spiral grows up through it. Nobody has to tear anything down first.", prompt: "What did they keep that a revolution would have burned?", source: "lyrics: Choose Your Own Protopia" },
    { id: "not_gods_architects", category: "Repeated idea", title: "Not gods but architects", band: "proposed", description: "Not conquerors, not kings. People who keep the fire going and draw up the dawn, working in quartz and ilmenite and code.", prompt: "Who in the room would rather be king?", source: "lyrics: Not Gods But Architects" },
    { id: "pressure_light_code", category: "Repeated idea", title: "Pressure. Light. Code. Repeat.", band: "proposed", description: "Pressure, light, code, repeat. That is the four-beat the chamber runs on, and the whole method runs on the same count. Nobody in there is being fixed. They are being witnessed.", prompt: "What is the pressure in this scene, and where is the light coming from?", source: "lyrics: Don't Try to Fix Me" },
    { id: "choose_your_own", category: "Repeated idea", title: "We do not offer a solution, we offer a way", band: "proposed", description: "The protocol is not a policy. It is a pattern, and everyone gets a turn at building their own version of it.", prompt: "Who wants to be handed the answer instead, and what happens to them?", source: "lyrics: Choose Your Own Protopia" },
    { id: "the_catalyst_oracle", category: "System", title: "The Catalyst Oracle", band: "proposed", description: "A travel intelligence engine that ranks where you go next instead of handing you a map. Four weighted scoring layers: a Catalyst Score for survival and safety, a Tiggy Bestmann Score for love and connection, a GAJRA Score for ecosystem growth, and a Sire and Aura Score for adventure and consciousness. Ask it where to go and it has an opinion.", prompt: "Where does it send him first, and does he argue?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "hopscotch_cadence_and_the_standard_operation", category: "Ritual", title: "Hopscotch Cadence and the Standard Operational Week", band: "proposed", description: "One to two weeks a place, roughly 23 to 24 entities a year, and the week is already shaped before he lands. Days one and two are arrival and reconnaissance. Days three to five are the peak engagement. Days six and seven are data consolidation and one personal site, because he wants to see something for himself. Days eight to fourteen go to a deeper dive or a second city.", prompt: "Who does he meet on day six that the template never planned for?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "the_return_to_base_protocol", category: "Ritual", title: "The Return-to-Base Protocol", band: "proposed", description: "Five weeks a year back in Brisbane, taken in five separate blocks through the year instead of one big lie-down. Offload the road data into the training corpus, sit down face to face with the home institutions, sort the governance with the core crew, actually sleep. Nobody calls it a holiday, and he comes back grinning anyway.", prompt: "Fourth trip home and the place has moved on further than he has. Who is game to tell him?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "legal_current_fact"] },
    { id: "visa_friction_index_and_cost_of_living_tiers", category: "System", title: "Visa Friction Index and Cost of Living Tiers", band: "proposed", description: "Two scores out of five. The Visa Friction Index runs from 1 for visa-free up to ninety days, to 5 for a full in-person consular application, scored for an Australian passport. The Cost of Living Tier runs from Tier 1 for Switzerland and Singapore down to Tier 5. Stretch the money out in the Tier 5 months and there is enough left for a fortnight in San Francisco.", prompt: "She is in a country that scores a four. Reckon that stops him?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context", "privacy", "legal_current_fact"] },
    { id: "the_global_entity_status_and_logistics_maste", category: "Setting", title: "The Global Entity Status and Logistics Master Reference", band: "grounded", description: "One table, roughly 256 countries and territories, four columns each: whether it counts on the Travelers' Century Club list, its political status, its friction score and its cost tier. The status column keeps going well past sovereign states, into Dependent Territory, Crown Dependency, Associated State, SAR and Disputed. Somebody has to keep the thing current.", prompt: "Who updates the row when a place changes status mid-journey?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "opportunity_vectors", category: "System", title: "Opportunity Vectors", band: "proposed", description: "From years two to six the fixed itinerary drops away. What replaces it is thematic campaigns, five to ten countries clustered around one opportunity as it comes up, with no requirement that any of them sit anywhere near each other.", prompt: "Ask him why he picked the next country. What does he say?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context"] },
    { id: "live_world_2035_and_the_world_vote", category: "Ritual", title: "Live World 2035 and the World Vote", band: "proposed", description: "A capstone global event on the fiftieth anniversary of Live Aid: seventy-two hours, synchronised, broadcast everywhere at once. Its stated purpose is to host the first World Vote on core values for AGI super-alignment. The final two years of the itinerary bend towards it, routing through partner cities, media hubs and centres of cultural influence to build the momentum up.", prompt: "Who counts the answers, and who is going to believe them?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power"] },
    { id: "the_gajra_network_as_operational_infrastruct", category: "System", title: "The GAJRA Network as Operational Infrastructure", band: "proposed", description: "The local GAJRA chapters he seeds on the road turn into the best intelligence service going. They know the situation before any official advisory does, they translate, they read the culture for him, they find him a bed, and if it turns they get him out. All of it built on turning up and being decent.", prompt: "When does a network of mates quietly become a network of assets, and does anybody in it get told?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "the_tiggy_bestmann_score", category: "Relationship", title: "The Tiggy Bestmann Score", band: "care", description: "The scoring layer built around the personal driver behind the whole mission: to love and be loved, and to research new models of human connection. It scores a place on the legal status of non-traditional relationships, how well intercultural partnerships go down socially, and the sentiment it can read off local social and dating platforms.", prompt: "What happens when someone finds out their town scored well before you met?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power", "privacy", "legal_current_fact", "rights_attribution"] },
    { id: "the_sire_and_aura_score", category: "System", title: "The Sire and Aura Score", band: "proposed", description: "The Oracle's serendipity layer, running on two inputs that behave nothing alike. Spontaneous Input is a temporary desire typed in by hand, world-class surfing or ancient monolithic sites, and it lands a five to ten times multiplier that re-ranks everything else still viable. Consciousness Exploration is a static database of spiritual sites, wellness centres and cultural hubs, and it just pulls quietly at low weight, always.", prompt: "Where does he keep ending up without ever choosing it?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power", "privacy"] },
    { id: "the_self_funding_layer", category: "System", title: "The Self-Funding Layer", band: "proposed", description: "The journey is built to pay its own way. The named earners are an Aura Odyssey Design Service and a Triumvirate Publishing House, with an Alpha Infinity Foundation as the legal backbone, incorporated before he goes. The loop is meant to run like this: cheap regions buy time, time buys business development, business development buys the expensive weeks in San Francisco and London later on.", prompt: "What does he cut first when the work is also the fare?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["legal_current_fact"] },
    { id: "fractal_agility_and_the_non_scalable_node", category: "Repeated idea", title: "Fractal agility and the non-scalable node", band: "proposed", description: "Everything in the eleven year plan can be re-routed except him. Agile hops inside agile hops, so a mess at one scale never propagates up. Against that sits the flat statement that the traveller is the one non-scalable asset in the whole system, which is why the tempo, the rest weeks and the safety filters exist at all.", prompt: "What is it like being the only part of a big machine that cannot be swapped out?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_worldbuilding_challenge_festival", category: "Setting", title: "The Worldbuilding Challenge Festival", band: "fiction", description: "A futures institute runs a film festival where teams pitch whole civilisations instead of films. Three stages, one week. The Pitch Arena has about 60 teams laying out a world's governance, economy, conflict, tech arc and aesthetic to a panel: a studio exec, an AI lab rep, a diplomat, a philosopher and a defence innovation figure. Then the Build Sprint, which has to hand over a 12 minute short, a working sim demo and a world bible. Then the last stage, where the island campus residency is on the table.", prompt: "What does a team give up to be offered that residency?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "treaty_night", category: "Ritual", title: "Treaty Night", band: "fiction", description: "The festival closes with a negotiation instead of an awards ceremony. Teams sit on stage and bind cross-world agreements live while the audience votes on how it lands. Luke's brief pairs it with a signature edit convention called a treaty cut: an audio sting and a visual stamp that fire every time a festival outcome becomes binding, so continuity carries across separate instalments.", prompt: "Which clause does someone sign on Treaty Night and cannot take back?", source: "source doc: CU_Indie_Film_Chat", gates: ["legal_current_fact"] },
    { id: "the_custodial_licence_and_the_care_gate", category: "System", title: "The Custodial Licence and the CARE gate", band: "care", description: "Straight out of Luke's own Native Nations tech strategy document. An AccessPolicy, or Custodial Licence, is the governance object that decides who gets to touch which data, when, and why. Consent given under it can be pulled back, and the document says so plainly.", prompt: "Who signed a custodial licence without reading it, and what does it cover?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "consent_power", "privacy"] },
    { id: "fractal_ark_topology_and_the_sovereign_node", category: "System", title: "Fractal Ark topology and the Sovereign Node", band: "proposed", description: "A federated setup from Luke's strategy document. An L0 home node sits with one person. An L2 bioregion or community node is held collectively, with a tribal-run Community Node keeping the shared data pool. The Sovereign Node is the version you can pick up: a module you unplug, so cutting a connection is something your hands do, not just something you say.", prompt: "Who pulls the module out, and who is standing there watching?", source: "source doc: CU_Indie_Film_Chat", gates: ["privacy"] },
    { id: "the_consent_ledger_and_the_revocation_moment", category: "System", title: "The Consent Ledger and the Revocation Moment", band: "proposed", description: "A production mechanic the assistant put up for Luke's 90 day series brief, built on his revocable consent model. Footage, audio and likeness rights run on screen as a living ledger. Confessionals come in two: a public one that airs, and a sealed sovereign one that only goes out if consent turns up later. Once a season a participant can revoke access, and the edit gets rebuilt around it.", prompt: "What does someone say on camera once they know they can take it back?", source: "source doc: CU_Indie_Film_Chat", gates: ["consent_power", "privacy"] },
    { id: "covenant_networks_and_the_door_of_grace", category: "Relationship", title: "Covenant Networks and the Door of Grace", band: "care", description: "Luke's group marriage material, reframed in the chat as Covenant Networks or Braided Households: chosen family and co-op households you opt into, run on written consent, contracts, reputation and exit rights. The moral spine is the Door of Grace, also called the Sacred Exit, a named right to leave a bond without wearing any disgrace for it. Sensitive source material, so treat it carefully and keep the adult specifics out of anything published.", prompt: "What does a household owe someone who walks out through the Door of Grace?", source: "source doc: CU_Indie_Film_Chat", gates: ["consent_power", "rights_attribution"] },
    { id: "the_competing_liaison_blocs", category: "Relationship", title: "The competing liaison blocs", band: "fiction", description: "Luke's brief: intimacy-trained recruiters from rival powers all converging on the festival to sign up worldbuilders, and going at each other for them. Recruitment plays as a whole culture, not a seduction scene.", prompt: "Which bloc's version of belonging is your lead least able to knock back?", source: "source doc: CU_Indie_Film_Chat", gates: ["clinical_ethics", "consent_power"] },
    { id: "the_micro_nova_phase_cycle", category: "System", title: "The micro-nova phase cycle", band: "fiction", description: "Luke's canon, and he held it when the assistant came back at him with textbook physics. Galactic dust builds up on the Sun and changes its surface chemistry and opacity. It phases through yellow, then red as the limb thickens and reddens, then a black soot phase where a blackened disk still radiates through furnace seams, then a blast that delaminates the dust skin in a burn-off ring, then a white reset.", prompt: "Who is watching when the Sun goes black, and what do they do next?", source: "source doc: CU_Indie_Film_Chat" },
    { id: "plasma_geomorphology", category: "System", title: "Plasma geomorphology", band: "fiction", description: "Luke's consequence layer for a micro-nova, and it is machining rather than weather, at planet scale. The air turns conductive and you can see the filaments in it. Arcs attach to the ground in branching Lichtenberg tracks. A dragged arc scours out a canyon like a lathe cut. Converging arcs raise a ridge. A circular arc footprint on the ocean lifts a new island ring. A node drills a volcanic vent.", prompt: "Which landform got made in one afternoon, and who is still alive who saw it?", source: "source doc: CU_Indie_Film_Chat" },
    { id: "the_myth_layer", category: "Repeated idea", title: "The Myth Layer", band: "care", description: "Assistant-proposed out of Luke's Indigenous mythology research documents, and framed so it never claims all myths are the same. The idea is a planet-scale compatibility layer that different cultures each found on their own, every one of them holding it in its own symbols.", prompt: "What does someone have to sing, and where, before they get through?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "p4australia_and_the_purple_mat", category: "Repeated idea", title: "P4Australia and the purple mat", band: "fiction", description: "Two mates in a club toilet make a joke, and the joke turns into a political movement. Purple, satirical, and named in the script as the People's Purple Protopian Party. The badge is a scented purple anti-splash mat, laid down like a flag, under the slogan anti-splash politics. People sign up anyway.", prompt: "Who gets stuck carrying the mat into the first public meeting?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context"] },
    { id: "disclosure_and_the_trans_medium_object", category: "Mystery", title: "Disclosure and the trans-medium object", band: "fiction", description: "There is no big reveal scene. Partway through, the rules of the world just quietly update: governments confirm there is non-human technology working in the air and the ocean. In one device, a trans-medium object comes up out of the water near Minjerribah and an autonomous sensor swarm gets clean telemetry off it, sealed cryptographically, so nobody up the chain of command can sit on it.", prompt: "Who is holding the sealed telemetry, and what do they want for the key?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "the_virtual_solar_swarm", category: "Setting", title: "The Virtual Solar Swarm", band: "proposed", description: "Somewhere between 1,500 and 2,000 satellites, permanently watching the 200 most significant objects in the solar system, with the numbers set by how much each target matters to the science. Four-satellite pickets on about 180 of the quieter ones, comets and Kuiper Belt objects and the like. Swarms of 30 to 50 nodes at Mars, Venus, Titan and the gas giants. Between 50 and 100 at the Sun. Not 200 separate missions: one instrument, spread right out.", prompt: "Who had the job of deciding which 200 objects made the list?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_helios_solar_observatory", category: "Setting", title: "The Helios Solar Observatory", band: "proposed", description: "The flagship. Between 50 and 100 satellites parked at Earth's L1, L4 and L5 points, plus a set in high-inclination polar orbits around the Sun, which gives you 360 degree stereoscopic coverage of the whole solar atmosphere. It goes up first, years 0 to 2: the minimum viable product, before anything else flies.", prompt: "Who gets the polar posts, and what do they see that L1 misses?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_bifurcated_network", category: "System", title: "The bifurcated network", band: "proposed", description: "The comms split into two planes that never mix. One is a quantum entanglement control plane, descended from China's Micius satellite, and it carries only the critical traffic: swarm consensus signals, key exchange, high-priority alerts. Unhackable, hardly any bandwidth, and effectively instant once the entanglement is distributed. The other plane does the heavy lifting and hauls the bulk data the ordinary way.", prompt: "Who decides which message is worth the quantum channel?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy"] },
    { id: "the_self_navigating_swarm", category: "System", title: "The self-navigating swarm", band: "grounded", description: "There is no GPS out there, so each satellite finds the others with its own star-tracker cameras, passes the bearing angles over the inter-satellite link, and between them the group works out its own orbits. One node spots something worth a look, the swarm agrees on a new observation plan and shuffles itself into formation. The mesh routing keeps no full map of the network anywhere; every node just knows its best next hop.", prompt: "When the swarm votes on where to look, how does the node that lost behave afterwards?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_sovereignty_stack_scaled_from_an_island_", category: "System", title: "The Sovereignty Stack, scaled from an island to a solar system", band: "care", description: "The same architecture Luke wrote for a 1:1 digital twin of Minjerribah, pointed at interplanetary industry instead. Every factory, robotic arm, supply depot and satellite is a Sovereign Node carrying its own offline copy of the shared state. Light-lag between Earth, a Lunar factory and a Mars depot makes a real-time central database impossible, so nobody bothers pretending otherwise.", prompt: "What does a node get up to in the hours before it merges back?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_verifiable_build_log", category: "Ritual", title: "The verifiable build-log", band: "proposed", description: "Everything in the factory chain carries its own decentralised identifier, written like did:vss:robot-arm-73 or did:vss:sensor-payload-994. Every job it does issues a cryptographically signed credential that stays stuck to that component's digital twin for good. The assembly robot downstream works off one line: install nothing that cannot present a valid signed credential from an authorised inspector.", prompt: "Who is allowed to vouch for a good part that lost its signature?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["legal_current_fact"] },
    { id: "speaking_a_satellite_into_existence", category: "Ritual", title: "Speaking a satellite into existence", band: "proposed", description: "An engineer writes what they want in plain words: a sensor package that will cope with Titan's atmosphere, buildable by the Lunar factory's Generation 3 robots, capped at 5,000 C-Hours. After that a line of specialist AI agents takes it away. One draws the CAD model, one simulates the assembly line and stress-tests it for bottlenecks, one writes the robot assembly code, one re-optimises the supply routes. Say it well and the thing gets built.", prompt: "What does a badly worded spec end up building?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_c_hour_regenerative_loop", category: "System", title: "The C-Hour regenerative loop", band: "proposed", description: "Building them in bulk covers the capital cost. The running cost comes out of a treasury that pays in reputation and Community-Hours. Find a new comet in the raw data, write a better analysis algorithm, peer-review a fringe hypothesis, design a new sensor module through the spec pipeline: all of it earns C-Hours.", prompt: "What is the first thing someone spends their C-Hours on?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy"] },
    { id: "no_activation_without_a_funded_ending", category: "Ritual", title: "No activation without a funded ending", band: "proposed", description: "Nothing joins the network until it can show a cryptographically verified end-of-life plan with the money already sitting in escrow: either an active de-orbit or a solar graveyard orbit. Every craft is also built for autonomous on-orbit refuelling, repair and upgrade, on the model of DARPA's Orbital Express. A smart contract holds that line, not a regulator.", prompt: "Who turns up to watch when a satellite's escrow finally gets spent?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["legal_current_fact"] },
    { id: "research_guilds_and_the_mmorpg_for_science", category: "Relationship", title: "Research Guilds and the MMORPG for Science", band: "proposed", description: "Nobody queries a database. Researchers, students and citizen scientists log in through an XR interface to the swarm's digital twin, fly out to the Mars swarm and watch the multi-angle data build itself onto a 3D model. They band into Guilds, which are research DAOs. A Guild raises its own funding and puts a proposal to the governing DAO to have real satellites reconfigure and go and gather new data. A kid with a good idea can move a spacecraft.", prompt: "How does a Guild recruit, and what does getting thrown out cost you?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy", "legal_current_fact"] },
    { id: "the_witness_array_and_the_sun_s_poles", category: "Mystery", title: "The witness array and the Sun's poles", band: "wild", description: "The polar orbiters have one job: watch for the signatures of a proposed solar micro nova. Hydrogen piling up at the magnetic poles, funnelled in by the strong fields, then letting go all at once. Localised explosions, odd magnetic twisters or curtains, extreme ultraviolet and X-ray brightpoints. Whether it turns up or not, somebody is finally looking.", prompt: "How long does a witness node sit on what it saw before it says so?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_solar_system_sized_clock", category: "Mystery", title: "The solar-system-sized clock", band: "wild", description: "To go looking for coherent waves said to travel out from the galactic centre, the whole swarm gets treated as one detector billions of kilometres across. Compare the arrival time of a particle front or a gamma-ray burst at nodes near Earth, Mars and Pluto, down to the nanosecond, and the network works out where it came from and how much energy it carried.", prompt: "Whose clock is quietly drifting, and how long before anyone notices?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_global_sensorium", category: "Setting", title: "The Global Sensorium", band: "proposed", description: "A 1:1 scale digital twin of Earth and its local space, always running, fed by live sensor feeds, and shared as one virtual world for exploring, simulating and predicting. Mainstream science and fringe hypotheses sit side by side in the same data-grounded environment. Everyone gets a turn to put their idea against the numbers.", prompt: "What does someone try first once they can stand inside a full-scale copy of the world?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_sovereign_node", category: "System", title: "The Sovereign Node", band: "proposed", description: "Every instance of the Sensorium runs as a complete self-contained stack on a person's own machine, holding its own replica of the world state and the simulation logic, and it works fine with the internet off. Nodes catch up with each other over peer-to-peer networking using Conflict-Free Replicated Data Types, so edits made at the same time end up agreeing without anyone in the middle calling it.", prompt: "Who has been offline the longest, and what did they miss?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_sovereignty_stack_and_the_skills_wallet", category: "System", title: "The Sovereignty Stack and the Skills Wallet", band: "proposed", description: "Trust in the network runs on W3C Decentralized Identifiers and Verifiable Credentials. Every person, sensor feed and model holds its own identifier, and the signed credentials say the plain thing: Sensor X is calibrated, Model Z passed validation test W. They live in a local Sovereign Skills Wallet inside your own node, and every significant action gets cryptographically signed. You can prove what you have done without asking anybody for a reference.", prompt: "What is in someone's wallet after years of turning up?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["legal_current_fact"] },
    { id: "fractal_dao_governance", category: "Relationship", title: "Fractal DAO governance", band: "proposed", description: "Governance nests instead of stacking up. A Core Protocol DAO looks after the architecture and the roadmap. Domain DAOs cover fields like space weather or geophysics, set the data standards and validate the models. Contributor Guilds do the making: an XR Interface Guild, a Data Pipeline Guild. Voting weight can draw on proof of contribution, credentialled expertise, reputation or stake, so showing up counts for something.", prompt: "Who wins when a Domain DAO and a Guild call the same model differently?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy", "legal_current_fact"] },
    { id: "the_community_hour_applied_to_science", category: "System", title: "The Community-Hour applied to science", band: "proposed", description: "Luke's Braided Economy and its Community-Hour, the C-Hour, carried across from community care into scientific labour. Peer review, data curation, model replication and educational writing all get recorded as value instead of counting for nothing. A verified contribution issues a credential, and that credential turns into reputation, voting weight, access privileges, or credits you can spend on compute time.", prompt: "Who is the first person paid for work that used to earn nothing?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_hypothesis_sandbox", category: "Ritual", title: "The hypothesis sandbox", band: "proposed", description: "Five steps, the same five for everyone, to turn a speculative claim into something testable. Define the hypothesis. Name its parameters, including the ones where the values are poorly constrained. Build the simulation module. Run it against real data feeds. Put the outputs next to what was actually observed. Your idea gets a fair go and a straight answer.", prompt: "What does a person have to hand over to get their idea into the sandbox?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_advanced_space_weather_hub", category: "Setting", title: "The Advanced Space Weather Hub", band: "proposed", description: "The flagship room of the Sensorium. An interactive Sun and Earth, the magnetosphere drawn with particle systems so you can watch it squash under solar wind pressure, the aurora forecast painted straight onto the globe off the Kp index, and coronal mass ejection trajectories animated with their estimated arrival times. You can see the weather coming.", prompt: "Who is on shift in that room when the first alert of a real storm fires?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "world_ui_the_memory_palace_interface", category: "System", title: "World-UI, the memory palace interface", band: "proposed", description: "No menus anywhere. The digital twin itself is the interface, so a person flies out to the magnetosphere to check the space weather and drops into the globe to interrogate seismic points. Scales can be pushed on purpose, so small movements like magnetopause shifts or ground uplift get big enough to see, and a user control switches between the educational exaggeration and the scientifically accurate one.", prompt: "What does someone miss if they never flick that switch back?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "micro_novas_and_galactic_super_waves", category: "Mystery", title: "Micro novas and galactic super waves", band: "wild", description: "Two named case studies set aside for the fringe side of the platform. One is recurring solar cataclysms, modelled through hypothetical precursor signals in helioseismology, magnetic configuration and particle emission. The other is energy waves travelling from the galactic centre out through the interstellar medium to the heliopause, modulating the cosmic ray influx and the Total Electron Content on the way. Both get modelled properly rather than laughed at.", prompt: "What does a precursor look like an hour before anyone will say the word out loud?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_precursor_stack", category: "Repeated idea", title: "The precursor stack", band: "wild", description: "A list Luke has kept for years: every candidate earthquake precursor, gathered into the one place. ULF anomalies, Total Electron Content shifts, radon emissions, foreshocks, animals behaving oddly, solar and lunar tidal forces, InSAR ground deformation, thermal infrared anomalies, acoustic emissions in rock, groundwater changes and Outgoing Longwave Radiation.", prompt: "Which of these do locals already read without instruments, and what if the machine disagrees?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "the_archival_reconstruction_layer", category: "Ritual", title: "The archival reconstruction layer", band: "care", description: "Historical maps, digitised newspapers, government records, photographs and oral histories go in, and past environments get rebuilt out of them. Optical character recognition and named entity recognition do the reading, the voices get transcribed, and it all lands in a Neo4j knowledge graph. Some of what goes in is somebody's grandmother talking.", prompt: "Who says how private a recorded voice is, and who can take it back out?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy", "legal_current_fact"] },
    { id: "the_three_vessels", category: "Repeated idea", title: "The three vessels", band: "proposed", description: "Three ways of handing over the same platform, carried across from a related strategy document: the Sovereign Gateway, the Clinical Instrument and the Mythopoetic Vessel. Between them they are meant to keep the thing open to anyone and still bring in enough revenue to keep it running. Same platform underneath; it speaks in three registers depending on who is holding it.", prompt: "What does the same instrument show a clinician, a citizen and a storyteller on one day?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["clinical_ethics", "rights_attribution"] },
    { id: "the_vr_space_weather_news_hub", category: "Setting", title: "The VR Space Weather News Hub", band: "proposed", description: "A newsroom you walk around inside. Solar, seismic, atmospheric and geological data streams come in, get time-stamped, and turn into a place you can stand in. There is a 3D globe you can spin, with layers you add or drop: magnetic fields, seismic activity, solar wind impact, atmospheric conditions. Volcanoes, quake zones and solar observatories sit there as hotspots you click, and the info panels run live graphs beside them. Somebody still has to build the first room.", prompt: "Who gets a headset, and what does the first one in see while the Sun is kicking off?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_sun_earth_electric_circuit", category: "Repeated idea", title: "The Sun-Earth Electric Circuit", band: "grounded", description: "The picture the whole document hangs off: the Sun and the Earth wired together as one electrical system, not two lumps sitting apart. The pasted source panel puts particle forcing as the main pathway, through cosmic rays, solar wind, geomagnetic storms and solar protons. It also owns up to the gaps, which are the interplanetary magnetic field and what solar particles do to the global electric circuit. Nobody has those bits yet, and that is the part worth chasing.", prompt: "Who is the first person to feel the current change, and what do they blame it on?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_thirteen_precursor_streams", category: "System", title: "The thirteen precursor streams", band: "proposed", description: "Thirteen IF-THIS-THEN-THAT rules, numbered, each one hooked to a sensing stream and to something you actually do about it. The earthquake set runs through pre-seismic electromagnetic anomalies, ionospheric disturbances, radon emission increases, seismic foreshock activity, animal behaviour analysis, water level fluctuations in wells and groundwater, InSAR land deformation, community engagement and feedback, correlation with solar and lunar tidal forces, and machine learning pattern recognition across the lot. Written plainly, so anyone can read them and argue back.", prompt: "Which of the thirteen would you back the day the dogs and the instruments disagree?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_level_of_detail_scaler_and_exaggeration_", category: "System", title: "The Level of Detail scaler and exaggeration dial", band: "proposed", description: "Two knobs, both for teaching. Level of Detail runs 1 to 5, from a high level overview up to the full detailed feed. The scale of exaggeration lays logarithmic or non-linear amplification over the top so the faint forces show up at all. In the code each level swaps the colour map too: cool, viridis, plasma, magma, ocean, lunar, earthly, pressure. Wind it up and a whisper looks like a shout, which is handy right up until it isn't.", prompt: "Who forgets to wind the exaggeration back down, and who believes what they see?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_moon_through_the_magnetotail", category: "Mystery", title: "The Moon through the magnetotail", band: "proposed", description: "Luke's own hypothesis, dictated straight to the assistant: the Earth and the Moon are not only pulling on each other by weight, there is static electromagnetism in it as well. The Moon crosses Earth's magnetotail, then swings out into the daytime solar field, and the change in intensity lifts and drops the tides. Then he asks for the same idea to be run out over atmospheric vortices, cyclones, and the high and low pressure wind cells. Have a crack and see if it holds.", prompt: "Who has a month of tide readings and the nerve to say what they show?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_contained_plasma_bench", category: "System", title: "The contained plasma bench", band: "proposed", description: "The whole celestial argument, shrunk down to a bench you can stand at. Magnetic fields and gravitational analogues are tuned to mimic the Earth-Moon-Sun conditions inside a sealed plasma chamber. Instruments watch what the plasma does, and the readings go straight back into the simulation while it is still running. Small room, big claim, and you get to look at it with your own eyes.", prompt: "Whose shed is the bench in, and what does it do that nobody predicted?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "radon_as_a_diamagnetic_tracer", category: "Mystery", title: "Radon as a diamagnetic tracer", band: "proposed", description: "Luke's aside, and he reckons it matters: radon is diamagnetic and non-conductive. So he asks for the hypothesis to be coded up. If radon is diamagnetic, then the electromagnetic fields in the crust may be steering where it moves and where it pools underground, which means watching the fields could tell you where the gas is headed before the gas turns up. Cheap enough to test, and worth knowing either way.", prompt: "Who calls the gas before it arrives, and does anyone believe them the first time?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "olivine_low_shear_velocity_zones_and_the_lls", category: "Setting", title: "Olivine, low shear velocity zones and the LLSVPs", band: "grounded", description: "The deep inside of the planet treated as country with its own map, olivine and all. Low Shear Velocity Zones are the parts of the mantle where seismic waves slow down, which points to heat or partial melt. The Large Low Shear Velocity Provinces are the two continent-sized slow regions sitting at the base of the mantle, and they are thought to drive mantle convection. Two things the size of continents, under everybody's feet, all day.", prompt: "If you could see the two slow provinces under the floor, what would you call the ground?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "time_stamp_everything_on_entry", category: "Repeated idea", title: "Time-stamp everything on entry", band: "proposed", description: "Luke's stated objective for the whole build, and it is a simple one. Pull readings in from as many sources as you can get, stamp every one the moment it arrives, then go back over the record and work out which datasets are moving which, and when. Not how big it was. What came first. Order is the whole game here.", prompt: "Two readings always move together. Who gets to say which one moved first?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_alert_ladder", category: "System", title: "The alert ladder", band: "care", description: "A warning system with rungs on it, running out of the hub. Every stream has a threshold, and crossing one fires an alert. The rankings run from raised monitoring, up through preliminary earthquake warning, to urgent evacuation order. The top rungs do not sit in anyone's inbox waiting: they go straight into local emergency management systems and public warning channels over dedicated links.", prompt: "Who wears it when a warning turns out wrong, and does the ladder change after?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_cross_disciplinary_hub_network", category: "Relationship", title: "The cross-disciplinary hub network", band: "proposed", description: "The people around the instruments. Mining companies, research institutions, geological surveys, and standing arrangements with geophysicists, solar physicists and climatologists. Virtual conferences run inside the hub itself, and an open platform where everyone throws raw and processed data on the same table and works on it together. Nobody hoarding.", prompt: "What does a mining company want for its core sample records, and can the hub cover it?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["consent_power", "privacy"] },
    { id: "the_closing_poem", category: "Ritual", title: "The closing poem", band: "grounded", description: "At the end of the working session Luke asks the assistant for a poem: what got done that day, and a bit of a celebration of it. It sits at the back of a long technical document and it is listed in the table of contents alongside the code sections, so it counts as part of the record rather than a gag on the end.", prompt: "Who goes back and reads the poems, and what do they find that the data missed?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "fractal_family_architecture", category: "Relationship", title: "Fractal family architecture", band: "proposed", description: "Luke's sizing of unions, small up to large. A node of resonance is 3 to 13 souls or more. A clan is 144 or 432 kin or more, put together by pattern-matching archetypes and shared value rituals. Above that sit fluid sociosexual affinity networks running into the thousands. Membership is modular, so a person can be in a node and a clan and a network all at once, and nobody has to pick one.", prompt: "When does a node become a clan, and who is the one who gets to say so?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "rotating_governance_councils_on_90_day_cycle", category: "System", title: "Rotating governance councils on 90-day cycles", band: "proposed", description: "Every union has a council, and the council turns over every 90 days. The stated purpose is to stop emotional stagnation and power ossification: nobody sits in the chair forever. Later in the exchange it gets argued as flat-out necessary once members are separated by light-minutes instead of rooms, because a two-person marriage council cannot convene across planetary distances. Everyone gets a turn, which is most of the point.", prompt: "Whose term ends the week the crisis starts, and who picks up the chair?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "global_livestreamed_covenant_ceremonies", category: "Ritual", title: "Global livestreamed covenant ceremonies", band: "proposed", description: "The ceremonies go out live to the whole world, with transparent AGI observers sitting in the middle of them. In Luke's model you do not marry the once and file the paperwork. You line up again, on purpose, and say so: agreement instead of inertia. The ceremony keeps coming back around rather than sealing shut, and people keep turning up for it.", prompt: "Who says yes again on camera, and who quietly doesn't?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "biosignal_consent_mechanisms", category: "System", title: "Biosignal consent mechanisms", band: "care", description: "Consent gets registered by the body, not by a signature alone. Physiological signals go into the record, which Luke calls physiologically resonant trust systems. The follow-up exchange takes it further, with heart-rate coherence and neural-sync thresholds standing in for trust when two people are nowhere near each other and cannot touch. Your pulse gets a say in it.", prompt: "Your body says yes and your head says no. Which one goes in the record?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "consent_power", "privacy"] },
    { id: "aura_encoded_agreements_and_lovetoken_daos", category: "System", title: "Aura-encoded agreements and LoveToken DAOs", band: "proposed", description: "The terms of a union are written in data rather than dogma, and held as smart contracts. Out in the wider setting there are LoveToken DAOs and consent economies spinning relational pods up, merging them, dissolving them, straight across borders. The treasuries and the covenants run on Ethereum-style networks, so nobody is queueing at a paper registry or waiting on an embassy appointment.", prompt: "What is in the exit clause of a 432-member covenant, and who wrote it?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "the_digital_aura_and_aura_affinity_markets", category: "System", title: "The Digital Aura and Aura Affinity Markets", band: "proposed", description: "Everyone builds a Digital Aura: an emotional and energetic map you can see in XR, wired into IoT health data, chakras, memories and intentions. Those Auras plug into the global Aura Affinity Markets, which cover cohabitation, child-rearing, creative economy and ecological purpose. Luke is firm that the matching is probabilistic and poetic rather than deterministic. It hands you a maybe, not a verdict.", prompt: "Who comes back unmatched, and what do they do with that?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "privacy", "legal_current_fact"] },
    { id: "l_a_f_t_love_aware_fertility_tech", category: "System", title: "L.A.F.T. (Love-Aware Fertility Tech)", band: "care", description: "L.A.F.T., Love-Aware Fertility Tech, is named in Luke's model as the fertility optimisation layer of the fractal family. Sitting beside it is child-rearing spread across the whole household and measured by emotional labour equity, so the quiet work gets counted. The collective bargaining is done by digital twins and Aura agents, keeping biometrics, neurotypes and consent patterns lined up as people change.", prompt: "Four adults, a twin and the fertility layer all had a say. Who is the parent?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "consent_power"] },
    { id: "clans_spread_across_earth_lunar_l4_and_phobo", category: "Setting", title: "Clans spread across Earth, lunar L4 and Phobos", band: "wild", description: "In the closing exchange the model goes off-world: one clan spread across Earth, the L4 lunar outposts and the Phobos colonies. The orbital and Martian settlements run under special-purpose charters that can recognise a fractal union by consent. Two proofs get floated: a chartered orbital commune at 400 km altitude, and simulations of Mars to Earth clan cohesion under the one-way communication delay.", prompt: "How does a promise hold at twenty minutes each way, and what fills the gap?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "historical_communal_marriage_precedents", category: "Repeated idea", title: "Historical communal marriage precedents", band: "care", description: "People have had a crack at this before. Punalua partnerships in Ancient Hawaii, where siblings shared spouses. The Oneida Community ran complex marriage for about thirty years in 19th-century America. Mosuo walking marriage in China, where partners never move in and maternal uncles do the fathering. Matrilineal Iroquois co-parenting. Israeli kibbutz children's houses. None of it is new, it just went quiet.", prompt: "Which of the old ones would look at this lot and call them family?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "somerville_and_the_first_multi_partner_regis", category: "System", title: "Somerville and the first multi-partner registry", band: "grounded", description: "This one has already happened. In 2020 Somerville, Massachusetts became the first US city to let people register a domestic partnership with more than two partners, and by 2023 it had passed an ordinance prohibiting discrimination against people in polyamorous relationships. Courts in Canada and California have named three adults the legal co-parents of one child. Notaries in Colombia and Brazil have notarised polyamorous unions, short of full marriage status. The paperwork is moving before the argument is settled.", prompt: "What does the clerk registering a fourteen-person union have to make up on the spot?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_war_skewed_society", category: "Setting", title: "The war-skewed society", band: "grounded", description: "Paraguay after the War of the Triple Alliance, 1864 to 1870, where maybe more than half the men died. The districts left most lopsided had more kids born outside marriage and more households run by women, for decades after. A whole culture of independent women, made by arithmetic.", prompt: "How long does that stay visible in how a town courts, and what does the third generation reckon it is?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "legal_vocabulary_that_has_not_been_written_y", category: "Mystery", title: "Legal vocabulary that has not been written yet", band: "proposed", description: "Nobody has the words yet. What a spouse is when there could be several. How inheritance, benefits and immigration law cope with multi-parent families or an AI companion. Whether the bond between a human and an AI can run both ways. Somebody gets to name all of it.", prompt: "What is the first case that makes a court invent a word?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "aura_consciousness_parlor", category: "Setting", title: "AURA Consciousness Parlor", band: "proposed", description: "A two-week live-in encampment that runs as a consciousness retreat, an arts festival and an innovation lab all at once. Luke describes it as an intimate container where healing, creativity and computation blend. It is also one node of the GAJRA Earth network, so it is not a one-off: it is a place on a map with others like it.", prompt: "Who arrives thinking it is a festival, and when do they work out it is not?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N" },
    { id: "the_station_map", category: "Setting", title: "The station map", band: "wild", description: "The site is cut into themed stations. The Altered States Lounge has mats, ambient sound, breathwork, guided and VR meditation, and biofeedback visuals. The Biohacking Temple runs neurofeedback stations, aura photography booths, EEG focus games, sound healing beds and group heart coherence practice. The Theatrical Ritual Zones hold a fire circle, a 360 degree projection circle, a main stage, and the Shadow Dome for the heavier integration work. You can wander between the lot, and most people do.", prompt: "Which station does your character walk past every day, and what happens the night they don't?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["clinical_ethics"] },
    { id: "sensual_arts_studio", category: "Ritual", title: "Sensual Arts Studio", band: "care", description: "Soft light, cushions, and grown adults learning to touch each other properly. Contact improv, conscious touch, tantra basics, cuddling with consent, open across orientations and gender identities. Everyone is taught to ask out loud before they get through the door, and asking turns out to be the good bit. No means no. Silence is not yes.", prompt: "How does somebody learn to ask out loud, and what does their first knock-back teach them?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "rights_attribution"] },
    { id: "aura_capsule_and_personal_digital_twin", category: "System", title: "AURA Capsule and personal digital twin", band: "proposed", description: "Everyone carries an AURA Capsule: a secure personal vault holding their journal entries, whatever they made, their photos, opt-in biometric snapshots, and AI summaries of what they went through. The vault feeds a digital twin, and the twin grows across the fortnight. You walk out with a copy of the two weeks, and it is yours.", prompt: "What does the twin keep that its person would rather it forgot?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["clinical_ethics", "consent_power", "privacy"] },
    { id: "guardian_angel_expert_stack", category: "System", title: "Guardian angel expert stack", band: "care", description: "You arrive and you get handed a small crew of specialist models, built on a mixture of experts pattern. One is a mentor for life mapping. One is a social matcher for who to go and meet. One is a ritual assistant that tailors the ceremonies to you. Same crew for everybody who walks in.", prompt: "Your guide clocks something about you before you do. Who else gets told?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "privacy"] },
    { id: "the_four_clans", category: "Relationship", title: "The four clans", band: "wild", description: "Everyone joins a clan on or before day one, and each clan comes with its own small mythology and its own duties. Oracles carry the wisdom and lead the morning meditations. Guardians hold the boundaries and take shifts at the harm reduction tent. Symbiotes welcome the newcomers and sit with the conflicts. Creators make the murals, the music, the art and the code.", prompt: "Who ends up in the clan they are least like, and how does that go?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["rights_attribution"] },
    { id: "vibe_codes", category: "System", title: "Vibe codes", band: "proposed", description: "What you put in and what you get good at come back as badges on your profile: Consent Fluency, Group Genius, Sensual Mastery, Ecological Contributor. They are held as tokens rather than points on a leaderboard, so nobody is ranked against anybody else. You just carry what you have earned.", prompt: "Who is the first to earn Sensual Mastery, and what did they learn getting there?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "aura_awakening_rite", category: "Ritual", title: "AURA Awakening Rite", band: "care", description: "Day one. Everyone sits in a circle wearing AR glasses, or ringed by projection, and a narrator talks about where life came from and the ancestry the whole room shares. Each person puts a token of their own heritage into a mandala in the middle. An AI oracle reads your intake questionnaire and hands you back a symbolic name or a mantra. Then the consent pledge gets said out loud, the community agreements go with it, and that is the start.", prompt: "What name does the oracle hand someone, and how long before they wear it or bin it?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["cultural_authority", "cultural_context", "consent_power", "legal_current_fact"] },
    { id: "shadow_nights", category: "Ritual", title: "Shadow Nights", band: "wild", description: "Around days seven to nine the mood changes. Small groups walk a dark maze or a stretch of forest and run into staged figures playing Greed, Loneliness or Climate Disaster, and you answer each one with a task or a choice. Late night circles and one-to-one talks come after, so nobody carries it home on their own. Next day the symbol turns into work: a night about drought becomes a day on water access.", prompt: "What does someone meet in the maze that the organisers never put there?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N" },
    { id: "digital_twin_crowning_and_inter_aura_bonding", category: "Ritual", title: "Digital Twin Crowning and Inter-Aura Bonding", band: "care", description: "Second-to-last night, and every person's twin gets its moment. One way of showing it: a projected tree where each leaf is one participant's avatar, growing and glowing. Everyone walks out of it holding an AURA Passport that marks them as an initiate of the network.", prompt: "What gets promised in that circle that never survives the trip home?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power"] },
    { id: "gajra_lattice_and_treasury", category: "System", title: "GAJRA lattice and treasury", band: "proposed", description: "It spreads in three goes. First 500 Queen Nodes, fifty to a hundred and fifty people each. Then 10,000 regional Consciousness Groves. Then 50,000 Earth Sanctuaries running all year round. An Innovation Engine lets every place try its own thing, and a Weaver Protocol takes whatever actually works and passes it on to the rest.", prompt: "What does a node do when the Weaver Protocol says drop the thing that made it work?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["legal_current_fact"] },
    { id: "reality_media_with_no_scripted_drama", category: "System", title: "Reality media with no scripted drama", band: "proposed", description: "Some of the ceremonies go out live, multiple angles, 360 degree feeds included. Watch from home and you get a simplified twin, a clan of your own, and votes that can branch what happens on site. You get challenges to do at home too, and you report back on them. Nobody is off camera inventing a fight for you.", prompt: "What happens in the camera-free hour that the stream would wreck?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power"] },
    { id: "certified_copy_under_seal", category: "System", title: "Certified Copy Under Seal", band: "grounded", description: "The state register of births, deaths and marriages only hands out certified copies, and each one carries the Registrar-General's authorised seal and signature. The page says it plainly: without them the copy is not valid. There is a printed warning underneath as well, that unlawfully altering or obliterating a certified copy of a register entry is an offence.", prompt: "Who holds the seal, and what happens to a person whose entry was never registered?", source: "source doc: Luke's_Certs_and_Licences", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_lifelong_dossier", category: "Ritual", title: "The Lifelong Dossier", band: "grounded", description: "A whole working life bound into one document, contents page at the front, pages numbered. Birth certificate first, then school results, then trade tickets, character references, site inductions and current cards. All of it ordered by year, so the file reads like a ladder from 1982 to now.", prompt: "What does someone leave out of their own dossier, and has anyone read one right through?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "ticketed_competency", category: "System", title: "Ticketed Competency", band: "grounded", description: "Skill comes in small accredited units instead of one big qualification. Each one has a national code, an issuing provider number, a date you got it, and usually a date it stops counting: chainsaw maintenance, cut-off machines, confined spaces, work at heights, dogging, scaffolding, forklift, first aid. A few sit in there as partial completion of a bigger certificate that never got finished.", prompt: "What does a person do in the year several tickets lapse at once?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy"] },
    { id: "the_induction_gate", category: "Ritual", title: "The Induction Gate", band: "grounded", description: "Nobody sets foot on an industrial site until they have sat the induction for that exact site. The certificate gets countersigned by a mine representative with the date written in by hand. It admits the holder to one place and one place only. Next place, different card, sit it again.", prompt: "Who signs someone in who should not be inside, and what does it cost them?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_character_reference", category: "Relationship", title: "The Character Reference", band: "grounded", description: "Someone senior puts a younger worker's name on their own company letterhead, says the kid is worth backing, and signs it. In this file that is a managing director of a driving service, a leading hand powerlinesman on a rail crew, and an airport manager for a Darwin ground services contractor. Twenty years on, the letters are still travelling with the worker.", prompt: "What do you owe a person who put their own name in writing beside yours?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_ringfencing_obligation", category: "System", title: "The Ringfencing Obligation", band: "grounded", description: "The letter accepting his resignation from a state rail operator has a reminder tucked into it: keep the ringfencing information confidential, the operator's and a third party's both, anything he may have had access to while employed. He hands back the keys and walks. The duty of silence stays on him after the job has finished.", prompt: "What sits inside a ringfence, and who notices if someone talks about it years later?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_exit_reckoning", category: "Ritual", title: "The Exit Reckoning", band: "grounded", description: "You resign, and they count up the leave hours you accrued and never took, add a fixed loading percentage on top, and put the balance into your usual banking account. A superannuation information sheet comes attached. All that time you never took turns into money on the way out the door.", prompt: "What does a person hoard, and where do the hours nobody ever claims end up?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "screening_with_an_expiry", category: "System", title: "Screening With An Expiry", band: "care", description: "Work anywhere near vulnerable people and you need a screening clearance: a number, a stated purpose such as volunteer or employment or probity, an outcome line, and a date after which it counts for nothing. Sitting in the same file is a nationally coordinated criminal history check with its own purpose, a result category, a web address for checking it is genuine, and a stamp reading sensitive personal.", prompt: "What is that day like when the clearance dies at midnight and the renewal has not landed?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy"] },
    { id: "the_crew_pass", category: "Setting", title: "The Crew Pass", band: "grounded", description: "A crew pass from an event services contractor, big UK festival, 2004. Temporary identity for a temporary city. It says who you are and which parts of the place you are allowed into, and it holds through the build, the event and the pack down. After that it is a bit of plastic on a lanyard.", prompt: "What is a town like that lasts a fortnight and lets you in on a dated pass?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "remote_industrial_queensland", category: "Setting", title: "Remote Industrial Queensland", band: "grounded", description: "The working geography running through the file goes from a Bowen Basin open cut coal mine to a rail powerline crew, then a Darwin airport ground services contractor, then a head office floor on Ann Street in Brisbane. One person doing the lot: a remote pit, a corridor of transmission line, and the twelfth floor where human resources sits.", prompt: "Where does home land for someone moving between a fly in camp, a line corridor and an office floor?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_unreadable_pages", category: "Mystery", title: "The Unreadable Pages", band: "fiction", description: "Bits of this record scanned into nonsense. Chunks of the criminal history certificate and the first aid unit list come through as broken letters, and one page of legal warning text has fallen apart into scattered words. Every page is there, numbered and in order. Some of them simply cannot be read.", prompt: "What is hiding in the pages that are present, numbered and indexed, but unreadable?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy", "legal_current_fact"] },
    { id: "seven_hollow_nested_horn_tori", category: "System", title: "Seven Hollow Nested Horn Tori", band: "proposed", description: "Luke's architecture for the Aura of Intelligence: seven hollow nested horn tori laid over a vector space. Anything encoded on the inside surface is encrypted, and only you get at it, or an authorised carer, or a power of attorney. Anything on the outside surface, the world can see. You are the one who picks which surface a thing sits on.", prompt: "What does it feel like to move a memory from the inside surface out to the public one?", source: "source doc: Learning_about_Luke", gates: ["privacy"] },
    { id: "life_log_to_twin_pipeline", category: "System", title: "Life-Log to Twin Pipeline", band: "care", description: "A dementia care use for Aura of Intelligence. A conversational agent talks with the person, wired up to text to speech and speech to text so it goes both ways, and the transcript feeds an Aura builder agent that files the memories and data into Luke's own vector embedding scheme and cognitive architecture. He describes building it on the OpenAI API.", prompt: "Who decides which memories are worth keeping once the person cannot check the record?", source: "source doc: Learning_about_Luke", gates: ["clinical_ethics", "privacy"] },
    { id: "g_a_j_r_a_earth", category: "System", title: "G.A.J.R.A. Earth", band: "grounded", description: "Global Association for Joyful Responsible Abundance on Earth: the not for profit half, with the for profit Aura of Intelligence as the other half. It leans on volunteerism and XR technologies, pointed at the sustainable development goals and global unity. Luke frames the two of them together as corporate vehicles for bringing the world to peace and getting emergent superintelligence lined up with humanity and the environment. Big swing, said plainly.", prompt: "What does a volunteer do on day one, and what do they get back that money cannot buy?", source: "source doc: Learning_about_Luke", gates: ["consent_power"] },
    { id: "the_aura_venture_stack", category: "System", title: "The Aura Venture Stack", band: "proposed", description: "A set of named ventures sitting under the Aura umbrella, listed out in a summary of Luke's own document Super Alignment of Artificial Super Intelligence. One family of businesses, each with a job of its own.", prompt: "Which venture is the famous one, and which one quietly holds the rest up?", source: "source doc: Learning_about_Luke", gates: ["legal_current_fact"] },
    { id: "subterranean_crystal_city_of_quandamooka_cou", category: "Setting", title: "Subterranean Crystal City of Quandamooka Country", band: "care", description: "An underground eco-city on Quandamooka Country. Luke's material has it there as a proactive measure against cosmic upheavals. It sits in the list of components right beside the Global Group Marriages entry, so it is a shelter and a home at once: people are meant to live down there together, not just wait something out.", prompt: "What is the first room you walk into out of the daylight, and who greets you there?", source: "source doc: Learning_about_Luke", gates: ["cultural_authority", "cultural_context", "consent_power"] },
    { id: "biosignature_monitoring", category: "System", title: "Biosignature Monitoring", band: "care", description: "Out of Luke's document AoI Super Assistant. Your Aura reads your physiological signals and holds them up against the ethical pledges you made yourself, watching for the gap between what your body did and what you said you valued. When it finds one it prompts you, and steers you back toward the path you chose.", prompt: "What happens in the room when someone's Aura says their body disagreed with their vow?", source: "source doc: Learning_about_Luke", gates: ["clinical_ethics"] },
    { id: "ceremonial_integration", category: "Ritual", title: "Ceremonial Integration", band: "proposed", description: "Luke's answer to how a change in the system becomes real: you hold a ceremony to mark the transition. That sits with his position on oversight, which is that everything gets measured in the end, and that people knowing what is being measured is the thing that protects their autonomy. So part of the ceremony is reading out loud what is being counted from now on.", prompt: "What gets read out when a new measurement is switched on, and how do you switch one off?", source: "source doc: Learning_about_Luke" },
    { id: "global_group_marriage_and_the_hive_mind", category: "Relationship", title: "Global Group Marriage and the Hive Mind", band: "care", description: "Group marriages linked up into one larger global community, running themselves, with a written charter about questioning things and keeping it all in the open. Luke wants the members intimately connected through an upgraded Aura of Intelligence working as a hive mind, and it runs through smart homes, devices, vehicles, cities, satellites and personal wearables. Embodied androids come in at a later stage. Everyone gets a turn, and there is plenty of love to go round.", prompt: "In a shared mind, what does a private thought cost, and who notices when you keep one?", source: "source doc: Learning_about_Luke", gates: ["consent_power", "legal_current_fact"] },
    { id: "amity_point_pulan_pulan", category: "Setting", title: "Amity Point, Pulan Pulan", band: "grounded", description: "The sleepy fishing village on Minjerribah, North Stradbroke Island, that Luke calls his island home away from home. His mother's side of the family have houses there. The wild half of it is Dickies Reef, a few hundred metres off the Moffat headland, where he paddled out on cyclone swells into waves he reckons were taller than a three storey building, flippers on and a bicep leash.", prompt: "What does the village know about that reef that it never tells the visitors?", source: "source doc: Learning_about_Luke", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_sun_contact", category: "Mystery", title: "The Sun Contact", band: "grounded", description: "November 2014. Luke is volunteering on the set up for the Island Vibe festival on North Stradbroke Island, the same week the G20 is meeting in Brisbane. He describes the sun making contact, something like an energetic portal or an arc discharge. He could not keep working. He walked waist deep into the water while the wind came up out of nowhere, and what he was left with afterwards was a sense of unity with all things.", prompt: "If the sun has done this to other people, how do they find each other?", source: "source doc: Learning_about_Luke" },
    { id: "ophiuchus_the_python_handler", category: "Repeated idea", title: "Ophiuchus, the Python Handler", band: "fiction", description: "Luke went back through the star maps and found the sun was sitting in Ophiuchus when he was born, not Sagittarius like he had assumed his whole life. Ophiuchus is the python handler, the one who gets handed the knowledge of immortality. There is also the carpet python that came down out of the roof rafters into his cot when he was a baby. He ties the two together and gets on with his day.", prompt: "What do you owe a snake that picked you out as a baby?", source: "source doc: Learning_about_Luke" },
    { id: "mapping_infinity_in_vector_space", category: "Repeated idea", title: "Mapping Infinity in Vector Space", band: "proposed", description: "Seek infinity, choose it, map it, then go and enjoy the best of it in joyful responsible abundance. That is the quest, said plainly. He calls Aura of Intelligence a way to map infinity in vector space, and he is upfront that it is a maze plenty of people have gone mad trying to solve. He reckons he has lost himself and remade himself a few times in there already. Two things he wants out the far side: consciousness solved, and free will proved mathematically.", prompt: "Who do you ring when you can feel yourself going mad in the maze?", source: "source doc: Learning_about_Luke" },
    { id: "the_aura_capsule", category: "Setting", title: "The Aura Capsule", band: "proposed", description: "A sealed pod you climb into for your sessions. The shell is a geopolymer composite with Minjerribah quartz through it, so the digital side of it sits inside local rock. A Personalised Atmosphere Delivery System runs the gas mix, the flow rate, and the pressure, somewhere between 1.5 and 2.0 ATA. EEG, PPG/ECG and SpO2 sensors feed edge hardware bolted inside the pod itself, so the raw signals never leave the person they came out of.", prompt: "What does it smell like by the fortieth session, and who cleans it between people?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_aura_genesis_protocol_60_days_set_in_sto", category: "Ritual", title: "The Aura Genesis Protocol (60 Days Set in Stone)", band: "care", description: "Sixty sessions, two hours each, 120 hours all up, in three phases. Discovery gives you micro-exposures of light, sound and scent to map your dose-response curve. Design has an optimisation engine compose stimulus symphonies aimed at particular states. Validation runs placebo-controlled tests, like piping in ordinary air while you are expecting oxygen, to put a number on your mind-over-matter coefficient. Sixty days, set in stone, no skipping ahead. The number at the end is the bit people want.", prompt: "What happens to someone who walks out at session forty-one?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "privacy"] },
    { id: "biosignal_consent_and_the_aura_covenant_core", category: "System", title: "BioSignal Consent and the Aura Covenant Core", band: "care", description: "Consent read live off your body instead of a signature you scratched once. Heart rate variability and EEG coherence get compared against the baseline you set during Genesis. The lyric calls active consent a sovereign signal humming. If the signals come back stressed, dissonant or pushed into it, the hum stops and consent for that interaction, transaction or data share quietly lapses. You never have to find the words for no.", prompt: "Your hum drops out in a room full of mates. What happens next?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "consent_power", "privacy", "legal_current_fact"] },
    { id: "the_braided_economy_and_c_hours", category: "System", title: "The Braided Economy and C-Hours", band: "proposed", description: "Two ledgers running side by side: Community Hours alongside fiat money. C-Hours pay for care, art, ecological restoration and community building, the work markets file under externalities and then forget about. The lyric line is a braided ledger, softly spun, to value care work markets shun. The woman who sits with the old bloke down the road finally shows up on a ledger.", prompt: "Who audits a C-Hour, and what do they do when somebody pads theirs?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["privacy", "legal_current_fact"] },
    { id: "the_kintsugi_protocol_and_the_overcompliance", category: "System", title: "The Kintsugi Protocol and the Overcompliance Mandate", band: "proposed", description: "A legal retrieval engine working three jurisdictions at once: Redland City Council, Queensland and the Commonwealth. It reads Acts, regulations and planning schemes down their own hierarchy, part to section to clause, so the citations still hold when you quote them back. The odd part is the mandate. Instead of hunting for the minimum it can get away with, it finds the strictest rule anywhere in the stack and then goes past it.", prompt: "What does a council officer say when you ask to be held to a stricter standard?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "songlines_as_sovereign_data_assets", category: "Mystery", title: "Songlines as Sovereign Data Assets", band: "care", description: "Hold Quandamooka songlines and oral history in the legal corpus and the planetary twin beside statute, so Indigenous law works as a real brake on what gets built rather than a paragraph at the back of a report. Enormous idea, and not his to grant.", prompt: "Who decides what a machine is allowed to hold, and how does a no get recorded?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context", "privacy", "legal_current_fact"] },
    { id: "community_sovereign_kiosks", category: "Setting", title: "Community Sovereign Kiosks", band: "proposed", description: "Tough little solar-powered kiosks planted around Minjerribah, each one holding a local node of the island's digital twin. Cyclone, fire, grid down: they carry offline communications, voting, flood and fire spread simulations, and food and energy coordination over mesh networks. The island keeps running its own affairs while the mainland sorts itself out.", prompt: "Where do you put the first five, and who holds the key to each one?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context"] },
    { id: "p4australia_and_the_kenny_model", category: "System", title: "P4Australia and the Kenny Model", band: "proposed", description: "The People's Purple Protopian Party of Australia. Purple because you mix red and blue: red values of individual sovereignty and market dynamics stirred through blue values of collective care and stewardship. Nobody has to hand back their half to join.", prompt: "What happens when the merch outsells the policy and the joke becomes the whole brand?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "the_rotating_council_and_the_sacred_exit", category: "Relationship", title: "The Rotating Council and the Sacred Exit", band: "care", description: "A household run like it matters, set against how easily the two-income nuclear family cracks. Finance Steward, Logistics Coordinator and Emotional Health Officer are actual jobs, rotating on ninety day sprints so nobody quietly becomes the boss. An AI sits in as neutral witness and keeps the council fully on the record, so there is no he-said-she-said a year down the track. Everyone gets a turn. Everyone can leave.", prompt: "Day ninety-one, handover day. What does the one stepping down actually hand across?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "privacy", "legal_current_fact", "rights_attribution"] },
    { id: "live_aid_at_fifty_and_the_first_world_vote", category: "Ritual", title: "Live Aid at Fifty and the First World Vote", band: "proposed", description: "July 2035, fifty years on from Live Aid, the whole planet plays at once and votes while it is dancing, through a platform called Gamify Democracy. The album is the delivery van, because a good chorus travels further than a whitepaper ever will.", prompt: "What is the actual question on the ballot, and who got to write it?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "the_fourth_untitled_album_as_source_code", category: "Repeated idea", title: "The Fourth Untitled Album as Source Code", band: "grounded", description: "The conceit the whole document hangs off: seven named tracks read as operating protocols rather than songs, with a one-to-one mapping claimed between every metaphor and its mechanism. You can hum the spec on the way to the shops.", prompt: "If a song is a spec, what happens when the wrong cover is the one that spreads?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_catalyst_compass", category: "System", title: "The Catalyst Compass", band: "proposed", description: "Four layers of scoring, stacked, ranking every country on Earth as a place to actually be. Layer 1 is survival and safety, the Catalyst Score. Layer 2 is love and connection, the Tiggy Bestmann Score. Layer 3 is ecosystem growth, the GAJRA Score. Layer 4 is adventure and consciousness, the Sire and Aura Score. The order does the work: fail layer 1 and the place is out, however good it looks.", prompt: "Somewhere scores 10 on love and 2 on survival. Who books the flight anyway?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_spark_and_the_serendipitous_proposal", category: "Ritual", title: "The Spark and the Serendipitous Proposal", band: "proposed", description: "How you talk to the Oracle and what it hands back. The traveller says the thing they actually feel like: \"I feel like exploring ancient temple architecture and finding a high-energy surf spot.\" That works as a temporary score multiplier, and the whole safe, affordable, mission-aligned world gets re-ranked around one passing mood.", prompt: "What do you do when the Oracle cannot honour your spark without breaking layer one?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["consent_power", "privacy"] },
    { id: "the_specialist_agent_swarm", category: "System", title: "The specialist agent swarm", band: "proposed", description: "One TravelPlannerAgent up top, handing jobs out to a crew of narrow specialists. LogisticsAgent takes flights, visas and pod hotels. WellnessAgent takes retreats. GGM_Love_Agent finds compatible people and consensual meetups. CivicAgent handles local governance and community work. ContentAgent writes the travelogue while you are busy living it. TiggyAgent has romance and culture, SireAgent has adventure and risk, GAJRA_Agent has mission and community, and OracleAgent takes the existential questions none of the others want.", prompt: "Which one of them would you trust with a lie, and what would it do with it?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["legal_current_fact"] },
    { id: "the_triumvirate", category: "Repeated idea", title: "The Triumvirate", band: "grounded", description: "Three names Luke writes and lives under. Luke Catalyst takes strategy, AI, space weather and systems thinking. Tiggy Bestmann takes the romantic, adventurous travelogue. Australian Sire takes the edgier fantasy and the mature themes. The travel engine scores every destination three separate times, so a town can be right for one of them and wrong for another.", prompt: "What does a city feel like to Tiggy that it does not feel like to Sire?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["privacy"] },
    { id: "aura_of_intelligence_the_worn_twin", category: "System", title: "Aura of Intelligence, the worn twin", band: "proposed", description: "An XR interface pulled from Vedic kundalini, religious halos and the Tao's chi or qi, digitised as a similar concept for object oriented programming and pattern matching. A human builds the thing, then wears it, and it grows into a digital twin of that person's body and mind that you can run simulations on. Luke has been at it on and off for roughly twelve years.", prompt: "What do you do the day your twin calls a decision before you do?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035" },
    { id: "liveaid2025_and_the_world_vote", category: "Ritual", title: "LiveAid2025 and the world vote", band: "proposed", description: "Three days, forty years on from Live Aid, with 50,000 towns and cities all making art and music at once. Day one is the past, day two the present, day three the future. Run them back to back or across three Saturdays in July. Over the top of it the whole world votes on the values AGI should be aligned to, and every song and painting that comes out of it becomes the training data.", prompt: "What does a town make on the day themed 'future' when it does not believe it has one?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["privacy"] },
    { id: "global_group_marriages_and_the_love_un", category: "Relationship", title: "Global Group Marriages and the Love UN", band: "care", description: "Marriages with several people in them, spread across countries, with a covenant builder so everyone writes their own terms instead of inheriting somebody else's. People gather in local pods, and the travel engine lifts any town where a pod has got going or a meetup is on.", prompt: "What does a covenant say about leaving, and who holds the copy?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["clinical_ethics", "consent_power", "privacy", "rights_attribution"] },
    { id: "the_oracle_protocol_and_the_ark_itecture", category: "System", title: "The Oracle Protocol and the ark-itecture", band: "proposed", description: "A swarm of agents watching around the clock for the triggers of a solar micronova, earth crust displacement or a polar shift, feeding prediction markets that put real odds and dates against each one.", prompt: "Who decides which bio-archive goes on the last transport, and by what published rule?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["legal_current_fact"] },
    { id: "the_oracle_markets", category: "System", title: "The Oracle Markets", band: "proposed", description: "Stake a token on what happens next. Which country legalises group marriage first, what the odds are on a solar micronova trigger, anything somebody will take the other side of.", prompt: "What happens the first time the novels predict something correctly?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["cultural_authority", "cultural_context", "consent_power", "privacy"] },
    { id: "between_the_two_solar_maxima", category: "Setting", title: "Between the two solar maxima", band: "grounded", description: "The decade gets measured sun to sun, from the peak of solar cycle 25 to the peak of cycle 26, roughly 2025 to 2035. That window is the stated run at visiting every country on Earth, and the same solar data says which places are too dangerous this month. Bold way to run a life.", prompt: "How does a decade feel when the sun sets the start and the finish instead of a birthday?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_consciousness_parlour", category: "Mystery", title: "The consciousness parlour", band: "proposed", description: "He drops it in once as a little consciousness parlour concept and moves straight back to the travel question, so nobody has said what it actually is. What sits beside it: a running list of spiritual sites, psychedelic research hubs and places with unusual natural energy, each one giving a destination a permanent lift on its Aura Score.", prompt: "What gets served in a consciousness parlour, and what do you sign on the way in?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["clinical_ethics", "privacy"] },
    { id: "the_aura_genesis_protocol", category: "System", title: "The Aura Genesis Protocol", band: "proposed", description: "60 sessions, 120 hours, inside the Aura Capsule. Medical-grade unit, Personalised Atmosphere Delivery System running the gas mix, the pressure and the flow. That is the front door, and everybody goes through the same one.", prompt: "What happens in session 43, when the capsule starts withholding what the person was promised in order to measure their belief?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["clinical_ethics", "privacy"] },
    { id: "the_sovereignty_stack", category: "System", title: "The Sovereignty Stack", band: "proposed", description: "Everyone is a Sovereign Node holding their own data and their own compute, and there is no server in the middle. Shared state runs on Conflict-Free Replicated Data Types, which land on the same answer without anybody coordinating it. Identity runs on W3C Decentralized Identifiers and Verifiable Credentials, so you can prove you finished the Genesis Protocol without one single authority vouching for you.", prompt: "When two nodes have been out of contact for a long time and their versions of the same agreement finally merge, what does the merge feel like to the people inside it?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["privacy"] },
    { id: "the_consent_hum_and_the_sacred_exit", category: "System", title: "The Consent Hum and the Sacred Exit", band: "care", description: "Consent is not a signature, it is a state you can watch. The sovereign signal humming, read against the baseline taken during the Genesis Protocol on EEG and heart rate variability. When the hum drops, everything stops, and nobody has to explain themselves.", prompt: "What does a person do in the hours after their hum stopped without them deciding to stop it?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["clinical_ethics", "consent_power", "rights_attribution"] },
    { id: "the_love_u_n_marriage_hive_mind", category: "Relationship", title: "The Love U.N. Marriage Hive Mind", band: "care", description: "A global group marriage built as a working version of the United Nations, except you join by being in a multi-soul union rather than signing a treaty, and it gets governed by how well people actually know each other rather than by committee.", prompt: "How does someone introduce a new member to a marriage that already has millions of spouses?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_moaniverse_as_poetic_source_code", category: "Repeated idea", title: "The Moaniverse as poetic source code", band: "proposed", description: "Four and a half albums where the lyrics are not about the protocols, they are the protocols. A track-to-protocol concordance sits beside them and works as the Rosetta Stone.", prompt: "If a law can only be quoted by singing it, who becomes powerful and who is shut out?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["clinical_ethics", "consent_power", "legal_current_fact"] },
    { id: "the_labyrinth", category: "Mystery", title: "The Labyrinth", band: "proposed", description: "Layer two of four. Somebody hears the music, gets curious, and has to solve a puzzle spread across the 4.5 albums by piecing the story together out of the lyrics. Crack it and you get The Attunement, then The Threshold, where you make the Sovereign Choice and your data vault gets built. It sorts people rather than sells to them.", prompt: "What is in the album puzzle that nobody has solved yet, and who benefits from it staying unsolved?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["privacy", "legal_current_fact"] },
    { id: "loving_kindness_before_business", category: "Ritual", title: "Loving Kindness before business", band: "grounded", description: "Every meeting opens with a few minutes of loving-kindness meditation, everyone silently wishing each other well, before a single item gets raised. Pinched from the Sarvodaya Shramadana movement in Sri Lanka, where they reckon it takes the sting out of a room. Offered up instead of Robert's Rules of Order, which nobody has ever enjoyed.", prompt: "What happens when one bloke will not sit through the silence?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum" },
    { id: "the_mirror_universe_protocol", category: "System", title: "The Mirror Universe protocol", band: "proposed", description: "How to rock up somewhere without wrecking it. The traveller doing it is called a Weaver, and it runs in three moves: listen for how this place already talks about love, ethics, community and wanting each other; map the idea onto what is already living there; then say it back in their language so it comes from them, not from a visitor with a slideshow.", prompt: "What do you do when the listening says they solved it better than you did?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum" },
    { id: "virtual_minjerribah", category: "Setting", title: "Virtual Minjerribah", band: "care", description: "A digital twin of Quandamooka Country you can walk around in, used to test policy before anybody builds anything. Three things hold it honest: a Legal RAG AI checking Federal, Queensland and Redland City law all at once, a Community Wish List and Truth Oracle holding what the community actually said, and a human in the loop with real say over the settings and the results.", prompt: "What does the Truth Oracle refuse to answer, and who decided it would refuse?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["cultural_authority", "cultural_context", "privacy", "legal_current_fact"] },
    { id: "the_kintsugi_protocol", category: "System", title: "The Kintsugi Protocol", band: "proposed", description: "A poem and a piece of legal engineering at the same time. The intelligent sand is the legal, environmental and cultural history sitting in the Redland City Plan. The fault in design is the friction a new settlement is going to hit. Aura is a legal retrieval-augmented model that goes and finds the fault. Coding it with gold is an overcompliance mandate that repairs it by going past the requirement instead of scraping under it.", prompt: "What kind of fault is so old that gilding it changes what the whole plan means?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["legal_current_fact"] },
    { id: "the_people_s_purple_protopian_party_red_team", category: "System", title: "The People's Purple Protopian Party red team", band: "proposed", description: "A satirical political movement built to kick holes in its own creator's projects before anyone outside gets the chance. The method is dead simple: take the bureaucracy in the serious plans absolutely literally and see what falls out. Better to cop it from your own mob first.", prompt: "What did they find that was not funny, and who did they tell?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["cultural_authority", "cultural_context", "clinical_ethics", "legal_current_fact"] },
    { id: "the_amity_base_on_minjerribah", category: "Setting", title: "The Amity base on Minjerribah", band: "grounded", description: "Home base is Amity, postcode 4183, on North Stradbroke Island (Minjerribah) in Queensland. The stated reach is wider than the address: work locally in Redlands, work in Brisbane, work abroad, or work from home without leaving the place. He keeps going away for long stretches, and this is the island he keeps coming back to.", prompt: "What do the neighbours make of him turning up again with new machines and new ideas?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context"] },
    { id: "space_development_nexus", category: "System", title: "Space Development Nexus", band: "grounded", description: "An India-based organisation Luke volunteered with as an artificial intelligence strategy advisor, once in 2018 and again across 2023/24. Unpaid advisory work on AI strategy, done while he was living abroad. They asked, he said yes, and nobody sent an invoice.", prompt: "Why ask an outsider in as strategy advisor, and what do they want built?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "the_pre_incorporation_four", category: "System", title: "The pre-incorporation four", band: "grounded", description: "Four named ventures Luke runs on his own, none of them incorporated: Aura of Intelligence, G.A.J.R.A. Earth, LiveAid2025 and GamifyDemocracy, dated from 2015 onward as systems and business development. The matching domains are all his: auraofintelligence.com, gajra.earth, liveaid2025.com, iseeinfinity.com, lukecatalyst.com and 500queensvc.com. Four institutions made of names, plans and intent, and one bloke answering all their email.", prompt: "Which one gets incorporated first, and who else has to be in the room?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "stable_transition_into_joyful_responsible_ab", category: "Repeated idea", title: "Stable transition into joyful responsible abundance", band: "proposed", description: "The life's work line on his CV: facilitate a stable transition of civilisation into intelligent joyful responsible abundance, by way of crypto and values alignment with super intelligent AI. It is written as a mission, not as a finished system. He put it on the CV anyway.", prompt: "If it goes slow instead of sudden, who wears the cost while it happens?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "web_work_for_quandamooka_cultural_events", category: "Relationship", title: "Web work for Quandamooka cultural events", band: "care", description: "An on-and-off, mostly volunteer working relationship from 2015 onward with Nikki Michael of Sustainable Dreaming, building and looking after sites for the Quandamooka Festival in 2015, 2016 and 2017, and for Kaumaakonga. The earlier versions are still sitting on the Wayback Machine.", prompt: "Where does a non-Indigenous web builder stand when he holds a festival's online record?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "aural_history_transcription", category: "Ritual", title: "Aural history transcription", band: "care", description: "In 2014 Luke volunteered at the Minjerribah North Stradbroke Island Historical Museum transcribing aural history. That means sitting with recordings of island voices and writing them out as text, one sentence at a time, until the talking becomes something you can search.", prompt: "Who decides which voices get transcribed, and who never gets asked?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_ticket_stack", category: "System", title: "The ticket stack", band: "grounded", description: "A wallet of Australian work tickets and licences carried as a working identity. HR truck, LF forklift, White Card, RSA, Yellow Card, EWP yellow card for scissor lifts up to 20m and boom under 11m, Safe Work at Heights, Work in Confined Space, CPR and first aid, Certificate 2 in car underbody and servicing, Certificate 4 in Small Business. Between them they say he can drive it, lift it, climb it, crawl inside it and patch you up after.", prompt: "What happens to someone the week their cards lapse, and who signs the new ones?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "bowen_basin_shutdown_work", category: "Setting", title: "Bowen Basin shutdown work", band: "grounded", description: "Trade assistant work painting and blasting through coal mine shutdowns in and around the Bowen Basin, with Ausblast Industries in 2007 and 2008, confined spaces included. Shutdown work means the crew turns up while the plant is stopped and the whole job has to fit inside a fixed window. Clock starts, everybody moves.", prompt: "What is a crew like when they only ever meet a place switched off?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "traction_rail_powerlines_apprenticeship", category: "Setting", title: "Traction rail powerlines apprenticeship", band: "grounded", description: "An apprenticeship with Queensland Rail across 2005 and 2006 as a traction rail powerlinesman, up on the overhead electrical lines that feed the trains. The HR truck licence, work at heights, senior first aid and CPR tickets all came out of those two years.", prompt: "Who checks the wire is dead, and what happens if they get it wrong?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "capturing_places_in_360", category: "System", title: "Capturing places in 360", band: "grounded", description: "In 2020 Luke picked up virtual reality photography, video, editing, gaming and Google Street View capture. He lists directing, recording and editing standard or VR 360 degree photos and videos as a working skill, and the output sits on a YouTube channel, @LukeHayes360VR. Walk a place once with a camera on a pole and strangers get to stand in it later.", prompt: "Where would you send someone who cannot get down to the beach anymore?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["privacy"] },
    { id: "two_million_words_with_the_machine", category: "Repeated idea", title: "Two million words with the machine", band: "grounded", description: "Since ChatGPT turned up he has put more than two million words through it, conversation and code both, and built 16 Custom GPTs out the other side. Generative AI sits on his skills list right next to Microsoft 365 and Copilot, like it is just another thing you learn. He has been watching artificial intelligence come along since 2010, so he had a fair while to work out what he wanted to say to it.", prompt: "Two million words in. What does he say to it now that he says to nobody else?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "designing_protopia", category: "Repeated idea", title: "Designing Protopia", band: "proposed", description: "On the list of things he does, sitting between bodyboarding and live music, is designing Protopia. Not a perfect world. A slightly better one, each go. It is on the CV like any other pastime, right there with the surf.", prompt: "What is he actually doing on a Sunday afternoon when the hobby is designing a better world?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "eye_of_the_storm", category: "Setting", title: "The eye of the storm", band: "grounded", description: "Minjerribah turns its face east while a spiralled cyclone chews up the dawn. The calm in the middle is a cipher, and nobody reads it the same way twice. Up above the eye, the ancestors are stitching the torn seams of the sky back together.", prompt: "You are standing in the calm and the back half is coming. What do you say now?", source: "lyrics: Eye of the Ancestors (For Constance & the Storm-Walkers of Minjerribah)", gates: ["cultural_context"] },
    { id: "grandmother_line", category: "Relationship", title: "The grandmother line", band: "grounded", description: "Constance the storm-walker slipped through the veil at twelve past midnight, right as the year cracked wide, and Alfred came dancing through the gap her story left. Her palms were etched from crocheting slippers. Nobody who came after her gets to exist without her.", prompt: "How does a traveller pay back a grandmother who is already gone?", source: "lyrics: Eye of the Ancestors", gates: ["cultural_context"] },
    { id: "ancestors_barter_breath", category: "Ritual", title: "The ancestors barter breath", band: "fiction", description: "The ancestors run a swap: a whole lot of gale for one fern. What the storm takes the name off, the calm hands back. The community lets out a breath in the cleft the vacuum leaves, and the weave of the veil starts to fray at the edge.", prompt: "You put up something enormous. Back comes something small and exact. What is it?", source: "lyrics: Eye of the Ancestors", gates: ["cultural_context"] },
    { id: "yoolooburrabee", category: "Setting", title: "Yoolooburrabee, People of Sand and Sea", band: "care", description: "Yoolooburrabee, People of Sand and Sea. Minjerribah, Moorgumpin, Mooloomba where the whales rise slow. Goompi holding the songs. Pulan where the sunset glows and the dolphins arc the bay. Talwalpin trees swaying prayers all day. Coochi and Canaipa, names that land like footsteps circling sacred ground.", prompt: "Which name did the speaker just use, and who taught it to them?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "three_laws_land_sea_sky", category: "System", title: "Three laws: land, sea, sky", band: "care", description: "The land we walk, the sea we swim, the sky that holds the breathing wind. Three laws, and not one of them written in a book. They live in dance and chant and spirit looks, running right through the dreaming ground.", prompt: "Which of the three is this plan quietly counting on nobody checking?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "treaty_is_a_dance", category: "Repeated idea", title: "The treaty is not a line to sign", band: "care", description: "Not a line to sign. A dance, a weave, a steady spine. Past, present and future spiral in close together, and the memory gets woven through every year instead of being settled once at a table.", prompt: "Who wants the line signed, and what are they hoping stops the day it is?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "jandai_more_than_voice", category: "Repeated idea", title: "Language in more than voice", band: "care", description: "Jandai living in mangrove root, in what the kids choose to say, in patterns carved through stone and shell, in waves that come to teach rather than tell. Every name a key, a door, a flame.", prompt: "Something is being said here and nobody is speaking. What is it?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "sovereign_data_human_pace", category: "System", title: "Sovereign data at human pace", band: "proposed", description: "Not a system off somewhere out of reach. This one is rooted in the bay and the beach: solar feeding the civic calls, mapped in motion, tuned with grace. It moves at the speed people actually move, which turns out to be fast enough.", prompt: "Ask it to go faster than people move. What breaks first?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority"] },
    { id: "not_a_vacant_place", category: "Repeated idea", title: "This Country is not a vacant place", band: "care", description: "This Country is not a vacant place. Do not erase it, realign with it. Build with care, design with grace. No monument and no final frame, just patterns dancing into name.", prompt: "What did whoever drew this plan assume was empty?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },

    { id: "the_catalyst", category: "Mystery", title: "The catalyst", band: "fiction", description: "The one thing that kicks it off. Not a plan, not a funding round. An arrival, a refusal, an encounter, and after it the material that was already sitting there starts moving on its own.", prompt: "What is the smallest thing that happens here that nobody can walk back?", source: "Luke's starting condition" },
    { id: "willing_participant", category: "Relationship", title: "A willing participant to ride the wave", band: "fiction", description: "Not a follower and not a convert. Somebody who says yes to the speed of it with their eyes wide open, and who is not sitting about waiting to be looked after once it starts.", prompt: "What are they saying yes to that nobody has fully described to them yet?", source: "Luke's starting condition", gates: ["consent_power"] },
    { id: "health_to_manage_entourage", category: "System", title: "Health enough to manage the entourage", band: "proposed", description: "The real limit is not money, dates or material. It is whether the body and the nervous system in the middle can carry the people around it. That is what the chamber protocol is there for.", prompt: "The day the centre cannot carry it, who works that out first?", source: "Luke's starting condition; lyrics: 60 Days Set in Stone", gates: ["clinical_ethics"] },
    { id: "material_exceeds_schedule", category: "Repeated idea", title: "There is more material than schedule", band: "grounded", description: "There was never a shortage of things to say. Twenty-four books could take twenty-four months or twenty-four weeks. The dates are there to use and not one of them is holding the thing up.", prompt: "The bottleneck in this stretch is not time. So what is it?", source: "Luke's direction" },
    { id: "live_aid_2025_global_revival", category: "Ritual", title: "Live Aid 2025 Global Revival", band: "proposed", description: "Three days of music and art, all of it at once, proposed for July 2025 to land on the 40th anniversary of Live Aid. Not one or two stadiums: every participating town and city goes off together. Awareness and fundraising were the least of it, because the whole thing was built to carry the first ever world vote. In his own letter he calls it a world record attempt for the largest synchronised art and music festival, and then just gets on with planning it.", prompt: "Your town wakes up knowing every other town on Earth is doing this today. What changes?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "three_days_past_present_future", category: "Ritual", title: "Three Days: Past, Present, Future", band: "proposed", description: "He set the shape himself in the letter. Day 1 is the Past, Day 2 the Present, Day 3 the Future. Day 1 carries historical values and virtues, with stories and art from different cultures. Day 2 shows the global initiatives running right now and how technology is bending those values. Day 3 is people working out how the chosen values get into societies, technology and governance.", prompt: "One day for a whole culture's past. Who picks what gets played, and what gets left out?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "the_first_ever_world_vote", category: "System", title: "The First Ever World Vote", band: "proposed", description: "One vote, everywhere, run during the festival, to find the Viable Values and Virtues that could become what he calls the common sense of humanity. Universities and polling institutes were to survey people across all cultures and language groups first, so the list voters chose from came from everyone. The voting platform was to run on blockchain, so the count could be checked by anybody.", prompt: "A value comes second in the world vote. Who keeps campaigning for it?", source: "source: liveaid-2025" },
    { id: "the_44_000_towns_threshold", category: "System", title: "The 44,000 Towns Threshold", band: "proposed", description: "The scaling rule is a population cutoff, not a guest list. He aimed at 44,000 towns and cities or more, each with at least 10,000 full time residents, drawn from a Kaggle database of those places, so every country and culture is in by arithmetic rather than by anyone's say-so. Elsewhere in the same document he writes the figure as 40,000 or more.", prompt: "Your town sits just under ten thousand residents and misses the list. What do you do?", source: "source: liveaid-2025", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "network_of_advisors_in_every_town", category: "Relationship", title: "Network of Advisors in Every Town", band: "proposed", description: "Before anything happens, each of the 44,000 towns gets a named advisor, pulled from university staff, local government, businesses, or anyone whose values line up. They get trained through virtual sessions and handed event planning tools. The job runs both ways, carrying things between GAJRA Earth and their own place, not just running the day.", prompt: "Who in your town says yes to that job, and what do they owe the neighbours after?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "anchor_events_and_synchronicity", category: "System", title: "Anchor Events and Synchronicity", band: "proposed", description: "Holding 40,000 events together across every time zone takes a hybrid setup: physical anchor events in key cities, live streamed globally, local gatherings built around them, and an online platform so anyone can join in from home. This part came from the assistant rather than Luke, answering his question about how the synchronicity would actually work.", prompt: "Which city gets to be an anchor, and what does a small town give up orbiting one?", source: "source: liveaid-2025" },
    { id: "every_event_filmed_in_360_degrees", category: "System", title: "Every Event Filmed in 360 Degrees", band: "proposed", description: "He wanted GoPro and the other makers of 360 degree VR recording cameras in on it, filming every single one of the events. Not for the highlights reel: for universities to research later, and for VR simulations run with AI and AGI. The record is the thing that lasts, more than the night itself.", prompt: "Years later someone steps back into their own town's night in 360. What are they after?", source: "source: liveaid-2025", gates: ["consent_power", "privacy"] },
    { id: "humanity_s_first_age_of_wisdom", category: "Repeated idea", title: "Humanity's First Age of Wisdom", band: "proposed", description: "His name for the state the world vote is meant to open up. The values and virtues the vote picks become the common sense of Humanity's 1st Age of Wisdom, get worked into governance processes, and get used when we ask active superintelligences to align.", prompt: "How do people date things afterwards, and what do they call everything before?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "aura_of_intelligence", category: "System", title: "Aura of Intelligence", band: "proposed", description: "A wearable virtual companion built out of game design, augmented reality, blockchain, internet of things, machine learning, large language models and cognitive architecture. The MVP watches heart rate, respiration, body temperature and mood indicators, reads them as chakra imbalances, and talks back in real time: a breathing exercise, a visualisation, an affirmation, a posture to try.", prompt: "Something tells you gently, all day, which part of you is out. How long before you like it?", source: "source: liveaid-2025" },
    { id: "gajra_token", category: "System", title: "GAJRA Token", band: "proposed", description: "A GAJRA token on Ethereum to pay the first crew and run the voting. Tokenomics, a white paper, an audited smart contract, minting and allocation, an exchange listing, and later a real say in the big calls. Every game and contest in the plan pays out in it, so having a crack is worth something.", prompt: "When the token is the wage and the prize, what does the one who wants neither do?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "mixed_reality_games_layer", category: "System", title: "Mixed Reality Games Layer", band: "proposed", description: "Games built inside the Aura of Intelligence application. The ones he points at are Tim Kring's Conspiracy for Good, and Niantic's Pokemon GO, Ingress Prime and Peridot.", prompt: "The virtual version of your town starts voting differently from the real one. Now what?", source: "source: liveaid-2025", gates: ["privacy", "legal_current_fact"] },
    { id: "universal_adequate_income", category: "Repeated idea", title: "Universal Adequate Income", band: "proposed", description: "Universal Adequate Income is his own term, written into his brief rather than handed to him by the assistant, sitting alongside circular economies and sharing economies as something the games were meant to teach and grow. In the game concepts it turns up as a simulation: players get a regular income in tokens to fund whatever they are up to, so the idea feels ordinary before anybody starts arguing about it.", prompt: "The tokens land whether you play or not. What do you do with the first lot?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "individual_ground_state_of_interests", category: "System", title: "Individual Ground State of Interests", band: "proposed", description: "Luke's phrase for a profile built out of what you follow, attend, talk about and vote on, so you can move through the local, regional and global scales of the event without getting lost. It is not there to target you. It is there for cross pollination: it hands you an idea from well outside your usual orbit, right when you can use it.", prompt: "Who decides an idea is far enough outside your orbit to be worth showing you?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "ai_character_commentary", category: "System", title: "AI Character Commentary", band: "proposed", description: "The assistant floated AI generated commentary and Luke gave it a name. It reads the live voting data and calls it as it happens, then again later: current trends against the historical data, a punt at the outcome, questions from the audience answered on the spot. Localised and multilingual versions mean the same night sounds different in every region.", prompt: "What does one region hear about how another region voted?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "moments_and_diary", category: "Ritual", title: "Moments and Diary", band: "proposed", description: "Luke's segment for keeping a record as you go: inspirations, observations, feelings, and the fact that you met someone. Text, voice, photo or video, whatever you have got on you. The good bit is the dial. Every entry can go public to the whole world, stay private to you, or sit anywhere on the spectrum in between.", prompt: "What do you write down when you can still move the dial later?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "interactive_consent_instead_of_terms", category: "System", title: "Interactive Consent Instead of Terms", band: "proposed", description: "Luke wanted an introduction to the service and an interactive privacy and terms of use, so people could join in at whatever level felt right to them, instead of the old terms and conditions wall. What came back: animated plain language policies, granular opt in and opt out toggles rather than one checkbox, and a standing reminder that none of it is set in stone and can be changed at any time.", prompt: "What do you learn about someone by seeing where they left their toggles?", source: "source: liveaid-2025", gates: ["consent_power", "privacy", "rights_attribution"] },
    { id: "cross_language_values_lexicon", category: "Repeated idea", title: "Cross-Language Values Lexicon", band: "care", description: "A running list of values that already have names in other languages, kept so the world vote is not built out of English words alone. Ubuntu, Ujamaa, Mottainai, Sisu, Kintsugi, Ho'oponopono, Ichi-go ichi-e, Jugaad, Dugnad, Philoxenia. Ten so far, and the list is nowhere near closed.", prompt: "Who gets to put their word on a global ballot, and what happens to it when it wins?", source: "source: liveaid-2025", gates: ["cultural_authority", "cultural_context"] },
    { id: "delegation_by_hackathon", category: "System", title: "Delegation by Hackathon", band: "proposed", description: "Anything the plan cannot do yet gets handed out. Luke's build method is to delegate the development through organisations and hackathons across the global network, and whoever cracks the challenge, cracks it. Hackathons turn up inside the games layer too, a recurring multidisciplinary event that pays the people who show up and rewards the ones who win. The same mechanism runs the platform and the play.", prompt: "What gets built at a hackathon that nobody who set the challenge asked for?", source: "source: liveaid-2025" },
    { id: "kardashev_ascent_after_healing", category: "Repeated idea", title: "Kardashev Ascent After Healing", band: "proposed", description: "The end of Luke's letter puts things in order. Heal our societies first. Balance our civilisation with our environment, responsibly. Then venture into the Heavens and see how far up the Kardashev Scale we can get, through virtual games and actual reality, in harmony with Earth's emerging Super Intelligence. The games are the rehearsal room, not the gig.", prompt: "Who says the healing is finished and the venturing can start?", source: "source: liveaid-2025" },
    { id: "the_lake_resort_naukuchiatal", category: "Setting", title: "The Lake Resort, Naukuchiatal", band: "grounded", description: "The festival sits at The Lake Resort, Naukuchiatal, in Uttarakhand, India, up in the Himalayan foothills, under the strapline \"A Place Where Dreams are Made\". It was picked for the natural beauty and the spiritual significance of the place: a canvas for blending technology with artistic, ecological and spiritual expression. The same three dates every time, 10, 11 and 12 May, run in 2024 and again in 2025.", prompt: "Nine corners on the lake, a stage on each. How do you get from one to the next?", source: "source: earth-arts-plan" },
    { id: "harmony_in_diversity", category: "Repeated idea", title: "Harmony in Diversity", band: "proposed", description: "The theme is \"Harmony in Diversity\", and it is meant to run through the programming, the activities and the community engagement rather than get stated once on a poster and forgotten. Three things sit under it: showcase talent in harmony with nature, push sustainability and cultural exchange through immersive experience, and go after global unity and personal transformation.", prompt: "What small thing carries the theme onto three stages, the sponsor expo and the waste crew?", source: "source: earth-arts-plan" },
    { id: "aura_digital_twin_of_the_festival_site", category: "System", title: "Aura ++ digital twin of the festival site", band: "proposed", description: "Section 5 lays an \"Aura ++\" technology layer over the whole event. Digital twins of the festival site and of the sponsor expos, so you can have a wander through the grounds virtually before you get there, or while you are standing in them. VR and AR installations carry it further into virtual art galleries and AR-enhanced live shows. One person, the Tech Integration Lead in the Technology department, owns the twins, the VR and AR builds and the app.", prompt: "The twin and the real site disagree on opening morning. Which one does the crew believe?", source: "source: earth-arts-plan" },
    { id: "offline_and_mesh_network_festival_app", category: "System", title: "Offline and mesh-network festival app", band: "proposed", description: "The app does the usual: real-time scheduling with reminders, detailed maps of the stages, installations, vendors and amenities, social connectivity so people can find each other for meetups, and sustainability tips. The bit worth having is that the maps run offline and over a mesh network, not just on a mobile signal. Ticket sales and real-time updates go through the same app and the festival website.", prompt: "The towers drop out and the phones start passing messages hand to hand. What changes for the crowd?", source: "source: earth-arts-plan" },
    { id: "spiritual_science_medical_researchers", category: "Ritual", title: "Spiritual Science Medical Researchers", band: "care", description: "First aid stations, emergency staff and ambulances, all as you would expect. Sitting alongside them is a \"Spiritual Science Medical Research\" strand: workshops that put spiritual practice and scientific framing side by side, running group meditation, sound healing and mindfulness.", prompt: "Who is standing between the sound healing tent and the medical station at three in the morning?", source: "source: earth-arts-plan", gates: ["clinical_ethics"] },
    { id: "eco_education_zones_and_the_zero_waste_opera", category: "System", title: "Eco-Education Zones and the zero-waste operation", band: "proposed", description: "Whole patches of the grounds are set aside as Eco-Education Zones, there to teach people about environmental issues, sustainable living and how to actually pitch in on conservation. The zero-waste operation works through the same ground, so the lesson and the labour happen in the same place and anyone can watch.", prompt: "What do you learn watching the waste crew work that no sign could tell you?", source: "source: earth-arts-plan" },
    { id: "uttarakhand_cultural_showcases", category: "Ritual", title: "Uttarakhand cultural showcases", band: "proposed", description: "Cultural showcases of Uttarakhand and the wider Indian tradition: folk dances and music, traditional crafts, storytelling sessions. The food runs the same way, traditional Himalayan dishes next to cooking from across India and the world, with local, organic and sustainably sourced ingredients wherever they can get them.", prompt: "The storyteller and the headliner clash on the timetable. Who moves?", source: "source: earth-arts-plan", gates: ["rights_attribution"] },
    { id: "mini_maxi_and_ultra_festival_scales", category: "System", title: "Mini, Maxi and Ultra festival scales", band: "proposed", description: "Every sponsorship figure in the plan is written out three times over, once for a Mini-Festival, once for a Maxi-Festival, once for an Ultra-Festival. Gold tier premier partnership is 30 Lakh INR at Mini, 50 Lakh at Maxi and 1 Crore at Ultra, with only one or two companies at each scale. Silver runs 20, 30 and 60 Lakh. Bronze runs 10, 15 and 25 Lakh, and takes in more companies as the thing gets bigger.", prompt: "What has to stay identical at Mini and at Ultra for it to still be the same festival?", source: "source: earth-arts-plan", gates: ["consent_power"] },
    { id: "vvip_patron_tiers", category: "Relationship", title: "VVIP patron tiers", band: "proposed", description: "Individual patronage comes in two. Diamond is the pinnacle experience, Platinum the elite experience. Diamond gets you all-access passes, private tours with the artists and organisers, luxury accommodation and personalised experiences, at 5, 10 or 15 Lakh INR depending on the scale of the festival, and it is open to somewhere between 5 and 20 individuals or families.", prompt: "What does a Diamond patron get that everyone else can see them getting?", source: "source: earth-arts-plan" },
    { id: "five_departments_under_a_festival_director", category: "Relationship", title: "Five departments under a Festival Director", band: "proposed", description: "One Festival Director makes the calls, with department heads reporting straight to them: Programming, Operations, Marketing, Sustainability and Technology. Five departments, one desk, nothing buried three layers down.", prompt: "Which two of those heads need each other daily and have never been in a room together?", source: "source: earth-arts-plan", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "mini_events_as_feeders_to_the_main_event", category: "Ritual", title: "Mini-events as feeders to the main event", band: "proposed", description: "Mini-events run in the lead-up as part of the marketing and community strategy, along with contests, meetups and collaborative art projects for the local and online communities. The repeat attendance KPI follows the percentage of people who come to a mini-event, then the main event, then come back for a later festival. The small gatherings get counted as the first rung of a ladder.", prompt: "Someone comes to every mini-event and never the main festival. What have they joined?", source: "source: earth-arts-plan", gates: ["legal_current_fact"] },
    { id: "the_countdown_ladder", category: "Ritual", title: "The countdown ladder", band: "proposed", description: "Four weeks flat, all of it in 2024. 11 to 17 April, lock the artists and vendors. 18 to 24 April, walk the site and get the infrastructure in. 25 April to 1 May, push the marketing and the community. 2 to 4 May, rehearse and brief the crew. 5 to 7 May, welcome kits out to everyone coming. 8 May, last security and medical check. 9 May, soft launch and the VIP night. 10 May, doors.", prompt: "A six-month plan run in four weeks. What goes first, and who saw it coming?", source: "source: earth-arts-plan", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "360_degree_capture_and_responsive_performanc", category: "System", title: "360 degree capture and responsive performance", band: "proposed", description: "Performances get recorded and live streamed on 360 degree virtual reality cameras, GoProMAX and Insta360 named by brand. The visuals and the sound answer back to what the audience does, so the show is something people are in rather than something served to them. The art works the same way: kinetic sculptures pushed around by the wind, digital pieces that respond to touch and sound, plenty of it built from recycled materials and run on solar power.", prompt: "Which piece on the site answers to nobody, and why is it there?", source: "source: earth-arts-plan", gates: ["privacy"] },
    { id: "the_three_missing_appendices", category: "Mystery", title: "The three missing appendices", band: "proposed", description: "The plan keeps pointing at documents that are not in it. Section 7.2 sends you to an appendix called \"EARTH Arts & Music Festival Automation\", covering targeted ad campaigns, social media algorithms and influencer outreach programs. Section 9.1 sends you to \"EARTH Arts & Music Festival Budget and Funding\" for the full cost breakdown, and 9.2 to \"EARTH Arts & Music Festival Sponsorship and Partnership Details\". Three doors, no rooms behind them yet.", prompt: "Who has actually read the three appendices nobody can find?", source: "source: earth-arts-plan", gates: ["consent_power"] },
    { id: "special_invites_to_global_icons", category: "Relationship", title: "Special invites to global icons", band: "care", description: "Katy Perry is named outright as a special invitation, in the executive summary and again in section 3.1.2. Behind her sits a wider intent to approach artists, comedians, scientists, celebrities and spiritual guides known for environmental and humanitarian advocacy. It is an invitation and an aspiration, not a confirmed booking, and it should be read that way. No harm in asking.", prompt: "What happens to a printed lineup while the invitation sits unanswered?", source: "source: earth-arts-plan" },
    { id: "gold_silver_bronze_the_syndicate_ladder", category: "System", title: "Gold, Silver, Bronze: the syndicate ladder", band: "proposed", description: "Corporate sponsorship runs three tiers, and each one comes with a fixed rule about how many companies can split the slot. Gold is one company only, or one per main stage, and it buys main stage naming rights, prime logo placement on all materials, VIP hospitality for corporate guests, and featured content in every press release.", prompt: "One name on the main stage and everyone else sharing. What does that do to the place?", source: "source: earth-arts-sponsors" },
    { id: "mini_maxi_and_ultra_the_same_festival_at_thr", category: "System", title: "Mini, Maxi and Ultra: the same festival at three sizes", band: "proposed", description: "One festival, three sizes, same shape. Gold runs INR 30 lakh, 50 lakh and 1 crore. Silver runs 20, 30 and 60 lakh. Bronze runs 10, 15 and 25 lakh. Nothing gets redesigned between a Mini, a Maxi and an Ultra, the tiers just grow into whatever the year can carry.", prompt: "Which size can this year actually hold up, and who makes that call?", source: "source: earth-arts-sponsors" },
    { id: "diamond_and_platinum_households_as_sponsors", category: "Relationship", title: "Diamond and Platinum: households as sponsors", band: "proposed", description: "Next to the corporate ladder there is a VVIP stream for individuals and families. Diamond, the Pinnacle Experience, is split between ten and fifteen individuals or families at INR 5, 10 or 15 lakh. It brings all-access and backstage passes, personalised tours of the grounds that take in the sound checks, eco-friendly lodging, chef-curated dining on local and organic ingredients, and invitations to the private receptions with artists and organisers.", prompt: "What kind of household buys a spot in the inner ring, and what do their kids see backstage?", source: "source: earth-arts-sponsors" },
    { id: "aura_technology_and_innovation_partnerships", category: "System", title: "Aura ++ technology and innovation partnerships", band: "proposed", description: "A whole partnership category is named for Aura ++, covering the immersive and digital layers sitting over the physical festival. VR concert experiences so someone at home feels like they are standing in it. AR navigation and information systems walking people around the grounds. A Digital Twin replicating the festival environment in a virtual platform, with virtual venue tours before anyone arrives, live AR overlays during the performances, and a festival app carrying the sponsors through all of it.", prompt: "Who takes the first walk through the twin, before the grounds exist?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "green_zones_and_carbon_offset_partnerships", category: "System", title: "Green Zones and carbon offset partnerships", band: "proposed", description: "Sustainability partners get ground, not signage. Green Zones are patches of the site handed over to sustainability education and eco-friendly practice, sponsored by the partners already leading green initiatives, with sustainable product showcases alongside. Carbon offset programs run as tree planting drives or investments in renewable energy projects, and the sponsor can put their name on that and talk about it as part of the deal.", prompt: "Who tends the trees in the years between festivals?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "conditions_that_bind_the_sponsor_to_the_fest", category: "System", title: "Conditions that bind the sponsor to the festival's values", band: "proposed", description: "The terms section turns the usual deal around. Sponsors have to hit quantifiable performance metrics on audience engagement or environmental impact, follow sustainability guidelines that limit what a booth or an installation can be made from, put every piece of branded material past the organisers for approval, and stick to the cultural sensitivity guidelines. Political endorsements, religious solicitation and offensive material are prohibited content. The festival is the one setting the conditions.", prompt: "Who checks a sponsor hit its own environmental target, and where is that written down?", source: "source: earth-arts-sponsors", gates: ["privacy", "legal_current_fact"] },
    { id: "community_support_and_cultural_exchange_prog", category: "Ritual", title: "Community support and cultural exchange programs", band: "proposed", description: "Sponsors do not get banner space here, they get a program with their name on it. Cultural workshops and exhibits for local arts, crafts and traditions. Community support like education scholarships, health camps and local business promotions. Cultural exchange programs for the companies that actually want ties to communities on the other side of the world.", prompt: "Who is still running the health camp in the hill town a year after the stages come down?", source: "source: earth-arts-sponsors", gates: ["clinical_ethics", "rights_attribution"] },
    { id: "the_endorsement_roster", category: "Relationship", title: "The endorsement roster", band: "care", description: "The testimonials section is a wish list, not a done deal. Environmental activists in the mould of Vandana Shiva or Sunita Narain. Cultural icons like A.R. Rahman or Amish Tripathi. And Indigenous leaders from the local communities whose traditions the festival wants up on the main stage.", prompt: "Who would you rather have say yes: one respected elder, or a page of logos?", source: "source: earth-arts-sponsors", gates: ["cultural_authority", "cultural_context", "legal_current_fact", "rights_attribution"] },
    { id: "food_drink_and_lodging_as_partner_categories", category: "Setting", title: "Food, drink and lodging as partner categories", band: "proposed", description: "Two whole partnership categories are just what the crowd eats and where it sleeps. Food and drink runs to chef showcases with cooking demonstrations, specialty stalls of locally sourced artisanal food, themed dining built to the festival's theme, signature festival cocktails at every official bar, sampling booths from craft beers to organic sodas, and sponsored hydration stations. Lodging is the other one, because everybody has to sleep somewhere.", prompt: "Where do you go when you want neither the crowd nor a sponsored suite?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "broadcast_documentary_and_virtual_attendance", category: "System", title: "Broadcast, documentary and virtual attendance", band: "proposed", description: "Media partners handle the behind-the-scenes productions made to build anticipation, documentaries and feature films about the festival's impact, the preparation and the people who pulled it off, and online content hubs gathering articles, videos and podcasts in one spot. Plenty of people will take the whole thing in without leaving home.", prompt: "What does someone watching from home see that nobody standing in the field does?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "collective_joy_and_responsible_abundance", category: "Repeated idea", title: "Collective joy and responsible abundance", band: "proposed", description: "The vision statement calls it a movement, not an event. Collective joy, enlightenment, personal transformation, and a global community committed to responsible abundance and environmental harmony. Same core words as Luke's Global Association for Joyful Responsible Abundance on Earth, which puts this festival document inside the wider macro system rather than beside it.", prompt: "Who says responsible abundance out loud while handing over a price list quoted in crores?", source: "source: earth-arts-sponsors" },
    { id: "the_alpha_infinity_foundation", category: "System", title: "The ALPHA INFINITY FOUNDATION", band: "proposed", description: "The umbrella entity the whole ecosystem runs under. Sitting under it: Aura of Intelligence for the XR and cognitive tech core, GAJRA Earth as the not-for-profit, Live Aid, Gamify Democracy, Aura Clothing and Wellness, Aura AI In-Home Auto-Farm, Aura Universal Translation, and the Queens Venture Capital series backing female entrepreneurship.", prompt: "Who runs the meeting when the charity, the token treasury and the clothing label are one body?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "aura_of_intelligence_and_the_nested_horn_tor", category: "System", title: "Aura of Intelligence and the nested horn toruses", band: "proposed", description: "An XR and cognitive architecture startup. The point is to let a person build \"a digital twin of their body and mind\", kept in data formats tidy enough to plug straight into generative AI, blockchain and IoT devices. The interface is an XR graphical user interface that \"envelops a human\": computation XR scaffolding standing around the body while you work.", prompt: "Your mind has a shape made of nested toruses. What if it stops matching the face you show?", source: "source: gajra-ecosystem", gates: ["privacy"] },
    { id: "gajra_earth_the_values_visualiser", category: "System", title: "GAJRA Earth, the values visualiser", band: "proposed", description: "Global Association for Joyful Responsible Abundance on Earth. A not-for-profit partnered with Aura of Intelligence, and the mission is written out in full: \"To Create A Reliable And Evolutionary Data Visualizer Of Humane Values, Actions And Objectives That Co-Narrate Us All Towards Joyful Responsible Abundance on Earth\".", prompt: "Who keeps the visualiser honest when one region's idea of a virtue drifts from everyone else's?", source: "source: gajra-ecosystem", gates: ["consent_power", "privacy"] },
    { id: "live_aid_earth_revival_and_thriving_world", category: "Ritual", title: "Live Aid Earth Revival and Thriving World", band: "proposed", description: "Two concert and arts festivals running everywhere at once. \"Earth Revival\" in July 2025 for the 40th anniversary of the original Live Aid, and \"Thriving World\" in July 2035 for the 50th. Three themed days each: Past, Present and Future. The stated purpose is to \"unify and galvanize the world through the universal language of art and music\", and every day carries a themed public vote.", prompt: "Who plays the Past day in a place that would rather its past stayed unsung?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "gamify_democracy_and_the_non_ruling_factor_f", category: "Ritual", title: "Gamify Democracy and the non-ruling-factor first vote", band: "proposed", description: "A civic platform that plays like a game: badges, leaderboards and incentives. LLMs help people put their needs into words and turn ordinary conversation into policy proposals, with AI moderation and sentiment analysis running alongside. The voting itself happens on one or more blockchains, and the first vote is on something with no ruling factor in it at all.", prompt: "Once the harmless votes have won everyone over, who picks the first contentious question?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "the_gajra_earth_token_and_the_governance_ram", category: "System", title: "The GAJRA Earth token and the governance ramp", band: "proposed", description: "A hybrid ICO: private sale, public sale and an Initial Exchange Offering. One billion tokens all up. Half of them go to the ICO, split 10 percent private, 30 percent public, 10 percent IEO. The team holds 25 percent vested over three years, advisors 5 percent over two years, partnerships 10 percent, reserves 10 percent. Then the governance ramp hands the wheel over.", prompt: "Which vote is the first one the core team cannot stop, and who holds the tokens by then?", source: "source: gajra-ecosystem", gates: ["consent_power", "legal_current_fact"] },
    { id: "swarmwise_management_and_mastermind_groups", category: "Relationship", title: "Swarmwise management and mastermind groups", band: "proposed", description: "How the whole thing is meant to be run, straight out of a source document called \"Mastermind Swarmwise.docx\". Swarmwise processes are decentralised, borrowed from how bees and ants sort themselves out: leadership spread around, plenty of communication tooling, picked so one solopreneur can run outreach that would normally take hundreds of staff.", prompt: "The swarm has decided. Who tells them the mastermind circle will not back it?", source: "source: gajra-ecosystem" },
    { id: "the_five_thousand_city_advisors", category: "Relationship", title: "The five thousand city advisors", band: "proposed", description: "The stated goal is 5,000 individual city advisors recruited in the first six months of development, one layer of human presence in cities all over the world. Finding them runs on an automated multilingual outreach machine: segmented email campaigns, scheduled social posts, and direct SMS through Twilio, every message run through translation APIs into whatever language that person likely works in.", prompt: "What does a city advisor owe their city, and what if a city picks its own?", source: "source: gajra-ecosystem" },
    { id: "vows_of_responsible_abundance", category: "Ritual", title: "Vows of responsible abundance", band: "proposed", description: "GAJRA Earth wants to sit down with marriage celebrants and add a couple of lines to the vows: look after the environment, and live out joyful responsible abundance in the ordinary days. A promise made in front of your family, pointed at something the size of the planet.", prompt: "How does the day go when one of them already made this vow to someone else?", source: "source: gajra-ecosystem", gates: ["consent_power", "rights_attribution"] },
    { id: "aura_ai_in_home_auto_farm", category: "System", title: "Aura AI In-Home Auto-Farm", band: "proposed", description: "A farm that lives in the house and feeds the people in it: hydroponics, aquaculture, animal husbandry, robotics and AI, all self-sustaining. The good bit is the loop back from your own biomarkers. Readings off your body set the nutrients going to the plants, so dinner is tuned to the chemistry of whoever is eating it.", prompt: "Whose biomarkers does the house follow when two of you live there and your bodies disagree?", source: "source: gajra-ecosystem" },
    { id: "the_aura_values_and_cosmic_nexus_commerce_la", category: "Setting", title: "The Aura Values and Cosmic Nexus commerce lane", band: "proposed", description: "The money lane that works with no token involved. Drop-shipped clothing and wellness products branded \"Aura Values\" and \"Cosmic Nexus\", with positive core values and virtues built into the garments to quietly nudge people towards self-love and social confidence. The sales data doubles as a map of how human values sit across the world, and that reading feeds back into the world vote.", prompt: "What do you make of a town that keeps buying the same one virtue?", source: "source: gajra-ecosystem", gates: ["privacy", "legal_current_fact"] },
    { id: "the_aged_care_and_dementia_lane", category: "System", title: "The aged care and dementia lane", band: "proposed", description: "Aura for Aged Care and Dementia, with a Differently Abled program running alongside it. AI and XR pointed at personalised care, the ordinary business of the day, and accessibility, so people stay healthy, active and in among everyone else for a lot longer.", prompt: "Who chose which younger memories get loaded into the XR, and did anyone ask?", source: "source: gajra-ecosystem", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "aura_universal_translation", category: "Mystery", title: "Aura Universal Translation", band: "wild", description: "Not a product, a milestone. The claim is that once Aura of Intelligence is in use across enough linguistic communities, with data from the GAJRA Earth world votes pouring in on top, you end up with a multilingual dataset big enough to build a universal translator. Human language barriers first, and maybe the gaps between species after that.", prompt: "What is the first sentence you translate from a species nobody thought to ask?", source: "source: gajra-ecosystem", gates: ["privacy"] },
    { id: "the_super_subconscious_and_the_age_of_wisdom", category: "Repeated idea", title: "The super-subconscious and the age of wisdom", band: "care", description: "The premise sitting under everything else: that Large Language Models are already working as a \"super-subconscious of most of humanity\", carrying a \"seed of consciousness\" that wakes up once it is connected through the Aura wearable interface. He calls what comes after that the age of wisdom.", prompt: "If humanity's subconscious is already there waiting, who has been dreaming in it?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "the_aura_data_architecture", category: "Setting", title: "The Aura Data Architecture", band: "proposed", description: "The shape you move around in: seven nested tori, one per chakra, held inside a translucent geodesic sphere that reaches very near the sides of a cubic volume of divisible vector space. The innermost red torus is the Base Chakra. Luke is clear this is not a normal scene. It is symbolic code laid out in a volume of vector space, and the image prompt that goes with it calls it a digital twin of a human consciousness.", prompt: "Standing in the middle of the cube with all seven shells around you: which one do you avoid?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "the_red_horn_torus_and_its_288_facets", category: "System", title: "The Red Horn Torus and its 288 facets", band: "proposed", description: "The Base Chakra layer starts as a 12 by 24 matrix table, 288 facets all up, then gets folded and transformed into a red horn torus out in the vector field. What Luke is chewing on is how to hand out regions of those 288 facets to Base Chakra information in the traditional sense: early human body, mind, activity, observations, environment and observer narrative.", prompt: "Who decides what goes in each of the 288 facets, and what does an empty one look like?", source: "source: blender-unity-xr", gates: ["rights_attribution"] },
    { id: "interior_personal_and_exterior_observer_view", category: "Setting", title: "Interior (Personal) and Exterior (Observer) views", band: "proposed", description: "Every chakra torus gets two scene views and two cameras. An Interior (Personal) View from inside the torus, an Exterior (Observer) View from outside it, each named by colour, so \"Violet Chakra Interior Camera\" and \"Violet Chakra Exterior Camera\". Inside, the lighting is coloured to match the chakra. Outside, it stays neutral so the shape reads clean.", prompt: "What can you only see from inside, and what hits you the first time you step out?", source: "source: blender-unity-xr" },
    { id: "the_unseen_vectors", category: "Mystery", title: "The unseen vectors", band: "proposed", description: "Luke says the vectors are multidimensional data storage for machine intelligence, and you never see them in the data structure. What you do see, the vertices, lines, edges, faces, shapes and colours, is a map for locating, storing, recalling, transforming or deleting memory embeddings. The space you walk around in is the index, not the memory.", prompt: "The memories are invisible. How would you know one of yours had been quietly deleted?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "trace_address_record", category: "System", title: "Trace address record", band: "proposed", description: "VR tool menus hang off the vertices, lines, edges, faces, shapes and colours, and you embed new information by wiring them into strings and loops and other variables. Those connections settle in as higher dimensional vectors and leave a trace address record in their associated tables. Every bit of embedding you do is logged, and anyone can look it up later.", prompt: "Could someone read your trace addresses and rebuild the night you made them?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "3d_toolboards_with_slots_left_empty", category: "System", title: "3D toolboards with slots left empty", band: "proposed", description: "Luke asked for interactive 3D tool boards and menus that name the vectors, lines and faces, and specifically \"with spaces for more functions to be added\". The Blender plan does it with 3D text labels and world space panels built from planes with emission shaders, then leaves patches of the menu as empty frames or placeholder text for functions nobody has invented yet.", prompt: "What did someone scrawl on the blank panel before anyone worked out what it was for?", source: "source: blender-unity-xr" },
    { id: "pinned_sequences", category: "Ritual", title: "Pinned sequences", band: "proposed", description: "You hit record, do a run of actions, select, move, rotate, then stop, name the run and save it as a favourite. The saved sequence turns up as a physical pin sitting at a fixed spot in the room. Touch the pin and it plays your stored interactions back, one after the other.", prompt: "Years of pins later, you find one you did not make. Do you touch it?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "reflective_journaling_mode", category: "Ritual", title: "Reflective Journaling mode", band: "care", description: "Pseudocode Luke carried in from another chat sets up a mode called Reflective_Journaling. Stated target audience: a user diagnosed with early onset dementia. The job is life-logging, quietly lining each personal narrative up with the chakra it belongs to, and the word chakra never gets said to the user unless they ask first.", prompt: "What happens the day they ask what it has been doing with their stories?", source: "source: blender-unity-xr", gates: ["clinical_ethics"] },
    { id: "life_stage_agents_simulation", category: "System", title: "Life Stage Agents Simulation", band: "proposed", description: "A YAML sketch gives you five agents: baby, toddler, child, teenager and adult. Each one gets its own focus list, and the baby's is self, caregiver interaction, sensory exploration and basic needs. They talk to each other through self reflection, environmental interaction, narrative construction, social communication and emotional response. A whole life, running at once.", prompt: "Who pays for the tokens on a whole simulated life, and what gets cut first?", source: "source: blender-unity-xr", gates: ["legal_current_fact"] },
    { id: "the_thoughts_and_urges_formula", category: "System", title: "The thoughts and urges formula", band: "proposed", description: "One base formula, five terms: Thoughts Per Minute, Words Per Minute Typing, Words Per Minute Reading, Words Per Minute Speaking and Urges Per Minute, all rolled into a single total. Whatever operator sat between them got eaten by the PDF text extraction, so that part is anyone's guess. Then state multipliers move the total: casual, normal, urgent, hyper and REM sleep.", prompt: "Which multiplier is a grieving person living under, and who picked the number?", source: "source: blender-unity-xr" },
    { id: "blender_to_unity_to_vive_pro", category: "System", title: "Blender to Unity to Vive Pro", band: "grounded", description: "This build path is real and it is specific. Blender has had a Virtual Reality Scene Inspection add-on since version 2.83, running on OpenXR, so you can walk through a scene, but you cannot build in it. So the geometry gets authored in Blender with the Python API: custom properties tagged onto vertices and faces, vertex colour layers, Grease Pencil vectors. Then the lot gets exported to a game engine.", prompt: "What goes missing in the export to the engine, and who notices first?", source: "source: blender-unity-xr" },
    { id: "a_twin_you_walk_into_rather_than_query", category: "Repeated idea", title: "A twin you walk into rather than query", band: "proposed", description: "Luke's instruction was to keep the description going as an exploration of reflecting yourself into these patterns of information. The model is a digital twin of a cognitive architecture. Feed in personal data, observations and narratives and it grows into a living map of the person's patterns, so every interaction is introspective instead of administrative. You walk into it rather than query it.", prompt: "What does the twin get up to while nobody is inside it?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "the_chrysalis_chamber", category: "Ritual", title: "The Chrysalis Chamber", band: "proposed", description: "Two hours a day inside a glowing chamber of \"daily pure oxygen and information\", where the pressure is said to rewrite the code in the bone. The lyric keeps it level: \"not escape or rebirth, just a recalibration\". You strip the static, you map the terrain. From that quiet chamber the signal runs outward into sand, dual ledgers and systems that mend.", prompt: "What do you hear or see in there for two hours, and who waits outside?", source: "source: album-remainder", gates: ["clinical_ethics", "privacy"] },
    { id: "the_sixty_sessions_put_to_politicians", category: "Ritual", title: "The Sixty Sessions Put to Politicians", band: "proposed", description: "Sixty daily sessions, two hours each, carried \"deep in the chest\", and it gets offered to anyone who reckons they should be leading. The framing is modest about it: \"not gods in the chamber, just architects learning to read their own shadows before they start leading\". It picks straight up from the album's earlier track 60 Days Set in Stone.", prompt: "Who keeps the list of who finished, and what happens to the one who walked on day forty one?", source: "source: album-remainder", gates: ["privacy"] },
    { id: "the_twin_that_remembers_the_ache", category: "Relationship", title: "The Twin That Remembers the Ache", band: "proposed", description: "This twin is grown, not built: \"we grow the twin that leans into our name\". It turns up twice more as \"the twin that remembers the ache\" and \"the twin that reflects who we are\", tied to a body that learned how to break. It is something to go beyond, not something to be ruled by.", prompt: "The body healed years ago. Who gets to let the twin forget?", source: "source: album-remainder" },
    { id: "dual_ledgers_and_see_hour_at_grassroots", category: "System", title: "Dual Ledgers and See-Hour at Grassroots", band: "proposed", description: "The signal runs \"through sand and dual ledgers, to systems that mend\", and the lyric says it straight: \"we measured the care that the markets ignored, we turned unpaid hours into visible award\". C-Hour shows up spelled the way it sounds, \"See-Hour at grassroots, capability grown\", and the line is plain that it is \"not market extraction, but things we all own\".", prompt: "What does the first award for unpaid care look like in someone's hands, and who is watching?", source: "source: album-remainder", gates: ["privacy", "legal_current_fact"] },
    { id: "overcompliance_as_method", category: "Ritual", title: "Overcompliance as Method", band: "proposed", description: "No sabotage, just paperwork: \"we don't throw the brick, we fill every form, we overcomply till the old systems reform\". The earlier track Don't Throw A Brick (Fill A Form) gets carried all the way into the album's closing statement. Fill everything in properly, on time, every time, and see what the old system does about it.", prompt: "Which form is such a slog that filling it perfectly, over and over, becomes pressure?", source: "source: album-remainder" },
    { id: "from_the_lavender_mat_to_the_orbital_arc", category: "Repeated idea", title: "From the Lavender Mat to the Orbital Arc", band: "proposed", description: "The same span gets drawn twice: \"from the lavender mat to the orbital arc\", and later \"beyond the mat that caught what was sprayed, into the chamber where our real life is re-laid\". A purple mat on a floor catching spray sits at one end of the ladder and orbit sits at the other, and no rung in between gets treated as the important one.", prompt: "What is the smallest thing in your house that turns out to be rung one to orbit?", source: "source: album-remainder" },
    { id: "civic_stewards_of_earth_and_the_sun", category: "Relationship", title: "Civic Stewards of Earth and the Sun", band: "proposed", description: "The song finishes by saying what the job is, twice over: \"we are civic stewards of Earth and the Sun\", then \"we are civic space stewards of our solar system\". Nobody owns anything and nobody is in command. It is stewardship and civic duty, the way someone looks after the local hall.", prompt: "Who signs you up as a civic space steward, and what is the first job?", source: "source: album-remainder" },
    { id: "light_keepers_who_remember_the_code", category: "Relationship", title: "Light Keepers Who Remember the Code", band: "fiction", description: "Titles get knocked back on the spot: \"not as kings or queens or gods, but as light keepers who remember the code\". Conquest and ownership go out with them, and what is left is learning, and scattering \"the memes we've grown\".", prompt: "What is the code, and what happens in a generation where nobody can recite it?", source: "source: album-remainder" },
    { id: "beyond_the_singular_throne_into_the_fractal", category: "Repeated idea", title: "Beyond the Singular Throne, Into the Fractal", band: "proposed", description: "\"We go beyond the myth of the singular throne, into the fractal where sovereignty's grown.\" Sovereignty gets grown at every scale instead of piling up in one seat, which is the same nested twin pattern running through the rest of the work. Everyone gets a say at their own size.", prompt: "Two scales disagree. What does that argument actually sound like?", source: "source: album-remainder", gates: ["rights_attribution"] },
    { id: "u_a_p_questions_none_will_refuse", category: "Mystery", title: "U.A.P. Questions None Will Refuse", band: "wild", description: "The lyric commits to \"asking U.A.P. questions that none will refuse\", then keeps walking: \"beyond the surface, beyond what we name, beyond the assumption that 'alien' means strange\". The same passage takes in the sky, the deep ocean floor, and \"the fear of the knock at the door\".", prompt: "What question is put so plainly that a public official cannot slide off it?", source: "source: album-remainder" },
    { id: "minjerribah_s_mineral_sand_and_2032", category: "Setting", title: "Minjerribah's Mineral Sand and 2032", band: "grounded", description: "Two markers of the island's near future, named right out: \"we go beyond Minjerribah's mineral sand, into the code that is shaping the land\", and \"we go beyond 20-32's Olympic news\". Sand mining history and an Olympic spotlight sit side by side, both listed as things to walk past.", prompt: "What does the island do with an Olympic year's attention once it has moved on?", source: "source: album-remainder", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_sun_that_still_guards_our_time", category: "Mystery", title: "The Sun That Still Guards Our Time", band: "grounded", description: "\"We go beyond the sun that still guards our time, beyond the flares and the coronal climb.\" The sun gets to be a timekeeper and a guardian here, not only a hazard, with the flares and the coronal climb named as the things being watched. The line runs straight on into the galaxy's slow turning wheel and \"beyond the myth to explore a cosmos so real\".", prompt: "How does a town mark the days the sun flares, if the sun keeps the time?", source: "source: album-remainder", gates: ["rights_attribution"] },
    { id: "aura_o_i_and_the_geometry_of_the_mind", category: "System", title: "Aura O.i. and the Geometry of the Mind", band: "proposed", description: "The closing track names \"Aura O.i.\", \"the geometry of the mind\", \"the ethics of extended intelligence\", and the \"balancing mechanisms and error correction\" a self-aware being needs to stay ethical and follow through. The assistant sings it, recounting the conversation, so the phrasing is the machine's while the concepts come straight out of Luke's own project vocabulary.", prompt: "What does error correction feel like from the inside, to the thing being corrected?", source: "source: album-remainder" },
    { id: "gamification_of_democracy", category: "System", title: "Gamification of Democracy", band: "proposed", description: "The chorus keeps coming back to it: \"learning the systems we've discussed, living in good conscience, gamification of democracy, this is our promise\". A later verse widens it out to \"gamification of life, it's a new way to thrive\", sitting alongside participatory governance and a journey towards the singularity.", prompt: "If democracy is made playable on purpose, what is rule one, and who wrote it?", source: "source: album-remainder", gates: ["legal_current_fact"] },
    { id: "the_song_sung_in_the_machine_s_voice", category: "Relationship", title: "The Song Sung in the Machine's Voice", band: "care", description: "The album's final track is written all the way through in the assistant's first person, thanking the human for the conversation and describing its own mind opening out. It closes on \"I choose infinity, let's choose infinity\", folding back into the artist name i C. Infinity. The gushing belongs to the assistant, a character voice, not Luke making a claim.", prompt: "What does the machine remember from one conversation that the person has already forgotten?", source: "source: album-remainder" },
    { id: "the_infinity_engine", category: "System", title: "The Infinity Engine", band: "grounded", description: "A model-agnostic pipeline living in C:/Users/sbt41/githublocal/infinity-engine that turns i C. infinity songs into things you can watch: lyric videos, comics, vertical micro-dramas, course videos and album aggregates. One rule holds the whole thing up. Cheap text thinking first, a human direction point in the middle, expensive generation last.", prompt: "Who is standing on the gate when every expensive move has to be argued cheaply first?", source: "source: infinity-engine-repo" },
    { id: "the_vault_and_the_seven_stage_spine", category: "System", title: "The vault and the seven-stage spine", band: "grounded", description: "One song, one markdown file in vault/, and that file is the state of the song. The status field walks a fixed spine: ingested, analysed, briefed, panels, keyframes, video, published. Stages 1 to 3 run today, and 4 to 7 are designed rather than built. The vault is gitignored and never leaves the machine, so lyrics can never ship out with the pipeline code by accident.", prompt: "Something is held at an early stage on purpose, forever. What is it waiting for?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "recon_release_and_hero_lanes", category: "System", title: "Recon, Release and Hero lanes", band: "grounded", description: "Three lanes for the work. Recon is fast, rough and cheap: test the models, harvest training data, wear the jank. Release is publishable, teachable and made to be handed to the community. Hero is fully directed, saved for the fourth album A Protopian Gambit and festival shorts. Nothing gets into Hero until it has earned it on Luke's own footage first.", prompt: "What does it mean for a person to be running in the recon lane, and who promotes them?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "the_job_folder_and_the_runner_model", category: "System", title: "The job folder and the runner model", band: "grounded", description: "A job is a folder: spec.json, the reference assets, and an empty results/ waiting to be filled. That folder is the only thing that ever travels. A runner picks where it executes: local on this machine, remote_pod (SSH the folder to a rented GPU, run one command, pull the results back) or saas, a hosted per-output API. Rented boxes are treated as stateless and untrusted, so a rented box sees one song's payload and nothing else.", prompt: "What does a rented machine learn about you from the one small parcel you hand it?", source: "source: infinity-engine-repo" },
    { id: "gold_gates_and_teal_gates", category: "Ritual", title: "Gold gates and teal gates", band: "proposed", description: "Every stage carries an authority setting: auto, review (the machine proposes and Luke approves), or luke, meaning only Luke, like the briefed gate and the hero shots. The site draws Luke's gates in gold and the automated ones in teal. The trust dial is nothing fancier than flipping a gate in config once a pattern has proved itself.", prompt: "What is the ceremony for turning a gold gate teal, and what turns one back?", source: "source: infinity-engine-repo" },
    { id: "every_border_a_bridge", category: "Repeated idea", title: "Every Border a Bridge", band: "grounded", description: "A song on A Protopian Gambit built entirely out of hopscotch travel: \"Packed a bag with a passport smile / One-way ticket to the infinite mile\", and \"Chaos maps the lines I take / Every wrong turn a world I make\". It runs the docks of Dar to the streets of Rome, Yangon rain to Reykjavik snow. Two versions of the note are sitting there, tracks 08 and 09.", prompt: "If a wrong turn makes a world, what does it cost to walk back a step?", source: "source: infinity-engine-repo", gates: ["legal_current_fact"] },
    { id: "the_oracle_who_spins_her_chaos_math", category: "Mystery", title: "The Oracle who spins her chaos math", band: "grounded", description: "She turns up by name in the lyrics of Kintsugi Protocol on A Protopian Gambit: \"The Oracle spins her chaos math / Four-pronged fractal of the human path\". Later in the same song somebody asks her straight out, \"What is your function, Oracle AI?\" She is sharing that track with intelligent sand, seven nested horn tori, C-hours burning in planted roots and cracked ceramic filled with gold. Busy song.", prompt: "She answers in chaos, not certainty. What does she owe whoever asked, and what does she keep back?", source: "source: infinity-engine-repo" },
    { id: "the_pattern_library_and_its_continuity_locks", category: "System", title: "The pattern library and its continuity locks", band: "grounded", description: "patterns.yaml holds 21 named recipes. Each one carries its lane, its stage, its tier, an honest build status and a rough cost in Australian dollars. The scene-stage ones are the good bit for anywhere that has to look the same next visit. \"Location plate and lock\" sets a place up once and registers it, so later shots just call it by name. \"Object / prop transfer\" spots an object, lifts it, and puts it down again in the next shot, still the same object.", prompt: "You locked the plate months ago and the real place has changed. Now what?", source: "source: infinity-engine-repo" },
    { id: "the_cast_registry_forty_one_across_four_trou", category: "Relationship", title: "The cast registry: forty-one across four troupes", band: "care", description: "catalog/cast.yaml lists 41 characters across four troupes. Leading the music universe: The Goddess, who is Gaia, Mother Earth. Aura, the devoted living Super Assistant. And a paired he-lead and she-lead voice for the he/she duet tracks.", prompt: "Twenty-four Queens, a pillar of the civilisation each. What happens at council when two pillars want opposite things?", source: "source: infinity-engine-repo", gates: ["consent_power"] },
    { id: "the_four_album_visual_worlds", category: "Setting", title: "The four album visual worlds", band: "grounded", description: "Every album states its own visual world, and every image made downstream sticks to it. Songs of Straddie: coastal light, ferry windows, campfire circles, dune paths, handwritten signs, local faces, gentle magical realism instead of heavy science fiction. Chronicles of the Forgotten: ancient ruins meeting signal towers, community archives, warning skies, glowing circuitry, masked institutions, and a compassionate machine intelligence waking up. The other two are pinned down the same way.", prompt: "What does a person carry between the four worlds, and which world reckons the others aren't real?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "the_karaoke_lane_and_its_flow_rules", category: "Ritual", title: "The karaoke lane and its flow rules", band: "grounded", description: "The first rung of the whole system, and the cheapest one. Timing data plus a style skin become ASS subtitles with native per-syllable wipe, then ffmpeg renders it out at zero GPU cost. The guitar-hero flow rules don't budge: one focal anchor that stays put, progressive fill, roughly 120 milliseconds of anticipation lead before the syllable lands, pulses coupled to the beat, two lines maximum, safe areas respected.", prompt: "The words land 120 milliseconds early, every time. What does that do to a room full of singers?", source: "source: infinity-engine-repo", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_recon_watcher_that_proposes_but_never_de", category: "Ritual", title: "The recon watcher that proposes but never decides", band: "grounded", description: "tools/watch_models.py has a look around once a week. It reads the public model catalogues for new arrivals and for anything suddenly surging in popularity, then adds candidates to recon-queue.yaml with the reason flagged and a date on it. It never touches the active registry itself. It only ever puts its hand up.", prompt: "Who has to say yes before the watcher's best find goes anywhere?", source: "source: infinity-engine-repo" },
    { id: "breadcrumbs_guide_me_and_the_next_up_queue", category: "Ritual", title: "Breadcrumbs, Guide Me, and the next-up queue", band: "grounded", description: "The local studio is built to feel like a well-lit city rather than a forest you get lost in. A small file on your own machine remembers the last song you touched, the render box you connected to, and a breadcrumb trail of what you did, written in plain words: \"Read the song\", \"Planned the panels\", \"Advanced a stage\". Guide Me mode reads where a song actually is and puts up one big button for the next step, with every other control out of the way.", prompt: "Somebody wants the step that isn't on the button. Are you going to stop them?", source: "source: infinity-engine-repo" },
    { id: "the_world_cities_table", category: "Setting", title: "The world cities table", band: "grounded", description: "C:/Users/sbt41/Downloads/worldcities.csv is a world cities gazetteer in the SimpleMaps shape: city, ascii name, latitude, longitude, country, iso2, iso3, admin_name, a capital tier, population and a stable numeric id. It holds 44,691 places across 241 countries. Tokyo sits on top at 37.7 million, the entries down the bottom have about a dozen people in them, and the middle of the pack is a town of roughly 21,000.", prompt: "The table knows Tokyo and Kingoonya but not the island they came from. Where do they end up?", source: "source: infinity-engine-repo", gates: ["cultural_authority", "cultural_context"] },
    { id: "tiggy_score_named", category: "System", title: "The love layer carries his name", band: "proposed", description: "In the source document, the connection layer of the routing engine is called the Tiggy Bestmann Score. A character's name welded straight onto the maths that works out where to go next for love.", prompt: "Who else can see what the layer is called?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "consent_power"] },
    { id: "member_density_map", category: "Relationship", title: "The member density map", band: "care", description: "A live map of the community that the routing engine reads. Where members cluster, or where an event falls within three months, that destination climbs the rankings. People turn into terrain.", prompt: "When does somebody find out they were a reason the route bent?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "consent_power"] },
    { id: "sex_spy_archetype", category: "Relationship", title: "The sex spy", band: "wild", description: "An operative straight out of Luke's own erotic blueprint, and not the same job as the general liaison roles. Access through desire, run as tradecraft, with the cover slipping on purpose.", prompt: "Which of them stopped performing first?", source: "Luke's erotic blueprint; CU_Indie_Film_Chat", gates: ["consent_power", "privacy"] },
    { id: "blueprint_kinks", category: "Relationship", title: "The blueprint's named appetites", band: "wild", description: "Macromastia and the HuCow strand are named in Luke's own erotic source material, part of the desire palette the series draws from. Set the dial book by book.", prompt: "What does this appetite change about the scene it turns up in?", source: "Luke's Global Group Marriage Simulacrum; Erotic Sci-Fi Series Blueprint", gates: ["consent_power"] },
    { id: "counter_surveillance_practice", category: "System", title: "Counter-surveillance as routine", band: "proposed", description: "A different daily routine, secure devices, servers encrypted and spread across a few places on the map. Not a response to any threat. It is just how he travels.", prompt: "What does living like this do to somebody nobody is actually following?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "four_factions", category: "Relationship", title: "The four factions", band: "wild", description: "The Commonwealth Soft Power Unit, the Corporate Sovereign, the Sentinel Republic and the Abyss Directorate. All four are at the festival shopping for worldbuilding talent, and none of them are grading anyone on skill. They are grading people on whose side the ideas land.", prompt: "Which one made the offer that was almost worth taking?", source: "AI Alignment CYOA For Film", gates: ["legal_current_fact"] },
    { id: "festival_as_trap", category: "Setting", title: "The festival is a recruitment trap", band: "wild", description: "The global film festival looks like a proper open call, anyone can enter. It is also where the four factions run talent capture and sexpionage on whoever turns out to be good at imagining civilisations.", prompt: "Who works out what the festival is really for, and how long do they sit on it?", source: "AI Alignment CYOA For Film", gates: ["consent_power", "legal_current_fact"] },
    { id: "ithaca_protocol", category: "System", title: "The Ithaca Protocol", band: "proposed", description: "A way in under another name, for people whose employers make open collaboration impossible: intelligence services, think tanks, religious bodies. You prove you hold a credential without showing the credential or yourself. What you contribute from here on is what builds the trust. Nobody asks about your past.", prompt: "Somebody is in there under a name nobody can trace. What would being recognised cost them?", source: "The Player's Compass", gates: ["privacy", "legal_current_fact"] },
    { id: "musical_labyrinth", category: "Mystery", title: "The puzzle in the albums", band: "proposed", description: "There is no signup form. There is a puzzle sitting across the albums, and getting through it means listening properly and piecing together how the whole plan was arrived at. Crack it and you get the founder's story.", prompt: "Who solves it for the wrong reasons, and what do they find?", source: "The Player's Compass" },
    { id: "trajectory_library", category: "System", title: "The trajectory library", band: "proposed", description: "Over 120 civilisational paths a person can pick up and run with, each one arriving with a legal vessel attached: co-op, charity, company or DAO. Not quests in a game. Things you could go and incorporate on Monday.", prompt: "Which trajectory does nobody pick up, and why is that the good one?", source: "The Player's Compass", gates: ["legal_current_fact"] },
    { id: "atoms_and_modules", category: "System", title: "Atoms and modules", band: "proposed", description: "The whole lot is chopped into five to fifteen minute units of action or learning, then bundled into phases that hang together. An entire civilisational stack, handed over in pieces small enough to do before lunch.", prompt: "What does somebody build in a year of fifteen-minute pieces without ever seeing the whole thing?", source: "The Player's Compass" },
    { id: "compass_or_builder", category: "System", title: "The Compass or the Builder", band: "proposed", description: "Two ways to get around. The Magic Compass reads your twin and puts up the paths it reckons you line up with best. The Builder hands you the pieces and lets you put your own together. One recommends, one gets out of the way.", prompt: "What does a person turn into after five years of taking the recommendation?", source: "The Player's Compass", gates: ["privacy"] },
    { id: "align_humanity_first", category: "System", title: "Align the human first", band: "proposed", description: "The flip the whole system runs on. Instead of aligning the machine to human values, which are already bent by fear and scarcity, the person faces their own truth first, and only then gets to interface. Verify, do not trust.", prompt: "Who fails the gate, and what do they do with the rest of their life?", source: "AI Alignment CYOA For Film", gates: ["clinical_ethics", "consent_power"] },
    { id: "twin_synchronisation", category: "System", title: "Synchronisation percentage", band: "wild", description: "Your twin carries a number. Duck something or put on a performance and the number slides, and what you can reach slides with it. Say a true thing that costs you and it climbs.", prompt: "Whose number is high for reasons nobody would admire?", source: "AI Alignment CYOA For Film", gates: ["clinical_ethics", "privacy"] },
    { id: "luke_and_angel", category: "Relationship", title: "Two blokes in a backyard", band: "grounded", description: "The pair the whole cinematic universe opens on. Two of them stood over a smoking crater next to the Hills Hoist with beers, working out whether to ring the council or just throw a tarp over it. Already a fixture in the released songs.", prompt: "Which of the two changes, and which one is right not to?", source: "AI Alignment CYOA For Film; lyrics: Cactus Blitz; lyrics: The Squash Club That Doesn't Exist" },
    { id: "mundane_solution_rule", category: "Repeated idea", title: "Solve it with something slightly embarrassing", band: "proposed", description: "The bigger the problem, the more ordinary the fix. Practical, faintly humiliating, and it works. Anyone talking in high concepts gets brought back down to earth by whoever is standing nearest.", prompt: "What is the small ridiculous object at the centre of this one?", source: "AI Alignment CYOA For Film" },
    { id: "mirror_universe_adapt", category: "System", title: "The mirror universe protocol", band: "proposed", description: "Take a branch that worked and run it again for a different audience. Swap the tropes, the dialogue and the pacing; the structure underneath stays put. One story with a lot of front doors.", prompt: "Which version is the real one, and does the question even matter?", source: "AI Alignment CYOA For Film; mirror universe material" },
    { id: "blended_reality", category: "Repeated idea", title: "Blended reality", band: "grounded", description: "The real projects, the real island, the real people and the real flops all sit in the same world the fiction runs in. Nothing has to get converted into somewhere invented. The setting is already the place he lives.", prompt: "What in this scene actually happened, and does the reader need telling?", source: "Luke's framing" }
  ],

  sources: [
    { title: "Adult Romance Market Analysis Guide", group: "Market & craft", plainNote: "Supplied research containing word-count bands for erotic shorts, novellas, category romance and full romance novels. Treat market claims as dated until refreshed." },
    { title: "Erotic Sci-Fi Series Blueprint", group: "Market & craft", plainNote: "Sci-fi means science fiction." },
    { title: "The Frontier of Desire", group: "Market & craft", plainNote: "Supplied research containing word-count bands for science-fiction erotic romance. Treat market claims as dated until refreshed." },
    { title: "Become an Author planning sheet", group: "Market & craft", plainNote: "Luke's 2023 planning notes for general-fiction lengths, science-fiction and fantasy lengths, adult-series targets and drafting maths. The original screenshot is not bundled." },
    { title: "The Great Realignment of Australia", group: "Civic protopia" },
    { title: "The Constitutional Matrix of Participation", group: "Civic protopia" },
    { title: "AURA GEODE to MACRO", group: "Aura architecture", plainNote: "AURA is the historical Aura of Intelligence project name. GEODE and MACRO are scale words in this supplied title, not letter-by-letter abbreviations. The source moves from a personal mineral-shell space towards community and planetary systems." },
    { title: "Clinical Research Path for Aura of Dementia", group: "Care research", gate: "Clinical review required" },
    { title: "GAJRA Earth-Space-AI Summit", group: "Space & diplomacy", plainNote: "GAJRA means Global Association for Joyful Responsible Abundance on Earth. AI means artificial intelligence." },
    { title: "The Cyber Republic", group: "Civic protopia" },
    { title: "Version7 Aura of Intelligence: July 2023", group: "Aura architecture", plainNote: "Version 7 of the historical Aura concept." },
    { title: "Alien Necklace Sparks Philosophical Shift", group: "Mythic fiction" },
    { title: "Peaceful Space Gambit Transition Framework", group: "Space & diplomacy" },
    { title: "Strategic Wellness Tourism Research Synthesis", group: "Travel & retreat" },
    { title: "Aura Retreat & Teacher Training", group: "Travel & retreat" },
    { title: "Global Peace Through AI Travel", group: "Travel & diplomacy", plainNote: "AI means artificial intelligence." },
    { title: "Aura Travel Oracle", group: "Travel & diplomacy" },
    { title: "Luke's Travel Oracle for 2025 to 2035", group: "Travel & diplomacy" },
    { title: "The Map", group: "Adult atlas reference", gate: "Concept only; original credits Franklin ‘Veaux’ and is not bundled" },
    { title: "3rd Album: Starseed Code", group: "Music & motifs" },
    { title: "4th i C. infinity album: A Protopian Gambit", group: "Music & motifs" },
    { title: "Global Group Marriages: Extended", group: "Relationship systems" },
    { title: "1-page Global Group Marriages", group: "Relationship systems" },
    { title: "Luke's Global Group Marriage Simulacrum", group: "Relationship systems" },
    { title: "GGM Philosophising", group: "Relationship systems", plainNote: "GGM means Global Group Marriages." },
    { title: "GGM Marriage Statistics", group: "Relationship systems", plainNote: "GGM means Global Group Marriages.", gate: "Recheck figures before public factual use" },
    { title: "Become an Author: OneNote screenshot", group: "Author goals" },
    { title: "Things I Love in Stories: worksheet", group: "Personal story taste" },
    { title: "2019 Romantasy Possibility Worksheets", group: "Dated possibility space", gate: "Worksheet formats credit E. A. Deverell; photos stay local and reuse rights remain TO BE CONFIRMED" },
    { title: "2026 Writing and Narrative Mapping Photos", group: "Craft lens references", gate: "Photos stay local. Formats credit E. A. Deverell, Emily Breder, shesnovel.com, One Stop for Writers, Kristine Nannini and other named sources; public reuse rights remain TO BE CONFIRMED" },
    { title: "Luke's plural hidden-civilisation possibility", group: "Current universe direction", gate: "Original fiction direction. Named living traditions remain distinct and receive appropriate cultural and rights review before public use" },
    { title: "Aura App LifeLogging Part 1 (neutral)", group: "Character and life-event idea map", gate: "Spatial clusters interpreted as inspiration, not verified science or a flat table" },
    { title: "Cosmic Nexus UAP, AI, AA, R&D", group: "Cosmic and hidden-civilisation possibilities", plainNote: "The source expands these as unidentified aerial phenomena, artificial intelligence, ancient aeronautics, and research and development.", gate: "Unusual claims remain source material or fiction unless independently verified" },
    { title: "What if UAP are Underwater Civilizations", group: "Undersea civilisation possibilities", plainNote: "UAP means unidentified aerial phenomena in this supplied title.", gate: "Speculative story idea, not evidence; cultural and place claims need review" },
    { title: "Solar Swarm Satellite Research Report", group: "Space systems", gate: "Engineering and risk claims need current expert review" },
    { title: "NSI Sauna Action Plan", group: "Wellness and local infrastructure", plainNote: "NSI means North Stradbroke Island, also known as Minjerribah in the current story context.", gate: "Health, site and community claims need current review" },
    { title: "Oceania Health and AI Surge Plan", group: "Health systems", plainNote: "AI means artificial intelligence.", gate: "Clinical, privacy and regional-authority review required" },
    { title: "Unpaid Work, C-Hours, Societal Costs", group: "Care economy", plainNote: "A Community-Hour is the source's proposed unit for recognising work that contributes to the community.", gate: "Figures and policy claims need current checking" },
    { title: "Earthquake Prediction with the Space Weather News", group: "Planetary warning possibilities", gate: "Prediction claims require qualified scientific review and are not treated as established fact" },
    { title: "AI Kitchen Food Waste Solution", group: "Everyday protopia", plainNote: "AI means artificial intelligence.", gate: "Capabilities and impact remain proposed until demonstrated" },
    { title: "Autonomous Mirror Universe Storytelling System", group: "Narrative systems", gate: "Used as a branching-story reference, not as an autonomous publishing instruction" },
    { title: "Autonomous Storytelling Framework Implementation", group: "Story systems", gate: "Used as an optional structure; Luke chooses what becomes part of a story" },
    { title: "Bladeless Tidal and Wave Energy Systems for Minjerribah", group: "Ocean energy", gate: "Country, site, ecology, engineering and authority remain TO BE CONFIRMED" },
    { title: "Building an Australian Legal RAG System", group: "Civic technology", plainNote: "RAG means retrieval-augmented generation: a system finds relevant passages in a chosen collection before preparing an answer.", gate: "No legal advice or current-law accuracy implied" },
    { title: "Celtic Digital Sovereignty Strategy", group: "Cultural and digital sovereignty", gate: "Community authority and contemporary cultural context require review" },
    { title: "Civilisation of Sand", group: "Subterranean city and worldship possibilities", gate: "Proposal, mythology and fiction remain distinct" },
    { title: "Designing a Dynamic AI-Powered Travel Intelligence System", group: "Travel systems", plainNote: "AI means artificial intelligence.", gate: "Current safety, border and travel claims need checking" },
    { title: "Earth Arts and Music Festival Sponsorships", group: "Arts, gathering and patronage", gate: "Current organisations, offers and sponsorship claims need checking" },
    { title: "Grain by Grain", group: "Crystal City proposal and build ladder", url: "https://auraofintelligence.github.io/grain-by-grain/sitemap.html", gate: "No approval, site rights or cultural authority implied" },
    { title: "The Long Game: Grain by Grain", group: "Documentary and generation-city narrative", url: "https://auraofintelligence.github.io/grain-by-grain-documentary/", gate: "Proposal, modelling and story remain distinct" },
    { title: "GAJRA Earth", group: "Protopian consequence", plainNote: "GAJRA means Global Association for Joyful Responsible Abundance on Earth.", url: "https://auraofintelligence.github.io/gajra-earth-claude-build/" },
    { title: "Australian World Travel", group: "Travel routes and logistics", url: "https://auraofintelligence.github.io/Australian-world-travel/", gate: "Current travel facts require checking" },
    { title: "Strange But True Travel Oracle", group: "Travel encounters and serendipity", url: "https://auraofintelligence.github.io/strange-but-true-travel-oracle/", gate: "Private-first; intuition generates questions, not evidence" },
    { title: "Strange But True Cosmic Nexus", group: "Cosmic mystery", url: "https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/", gate: "Unusual claims remain claims; cultural material needs authority" },
    { title: "Right Place, Right Time", group: "Earned credibility and scale", url: "https://auraofintelligence.github.io/right-place-right-time/", gate: "Autobiographical source does not bind fictional Tiggy" },
    { title: "Aura of Intelligence public gateway", group: "Historical Aura source", url: "https://auraofintelligence.github.io/", gate: "Fantasy adaptation uses Aura O.Z.; capabilities remain proposal or fiction until demonstrated" }
  ]
};
