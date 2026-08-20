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
    { id: "queen_node", category: "Setting", title: "Minjerribah, the Queen Node", band: "care", description: "Tidal beaches, quartz sand, bushland and community governance. The home he returns to when the mission gets too large.", prompt: "What can only be understood after returning to the sand?", source: "repo: minjerribah-living-twin; repo: grain-by-grain", gates: ["cultural_authority"] },
    { id: "gumpi_rung", category: "Setting", title: "The Gumpi ferry terminal rung", band: "proposed", description: "The first rung of the ladder: one ordinary arrival point, made useful, that earns the option of the next stage.", prompt: "What has to work here before anything larger is allowed to start?", source: "repo: grain-by-grain", gates: ["cultural_authority"] },
    { id: "sand_city", category: "Setting", title: "The subterranean ark city", band: "proposed", description: "A Kardashev-scale subterranean city simulation, quest map and builder suite for material literacy, robotics, twins, care and consent.", prompt: "Which problem is the city the honest answer to, and which is it an excuse for?", source: "repo: civilisation-of-sand", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "tunnel_arteries", category: "Setting", title: "Tunnel arteries and geopolymer works", band: "proposed", description: "Autonomous transport arteries, fewer wildlife strikes, erosion control, tunnel spoil as feedstock, geopolymer blocks and artificial reefs.", prompt: "What does the spoil become, and who decides?", source: "repo: sandworm-subterranean-systems", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "shambhala_threshold", category: "Setting", title: "A Shambhala threshold", band: "wild", description: "One hidden ark city from a previous cycle, entering as its own strand rather than a label for every underground place.", prompt: "Who is invited through, and what surface assumption does the threshold refuse?", source: "Luke's cryptoterrestrial direction; repo: strange-but-true-cosmic-nexus", gates: ["cultural_context", "rights_attribution"] },
    { id: "shangri_la_echo", category: "Setting", title: "A Shangri-La echo", band: "wild", description: "A valley or city holding the promise of timeless refuge, and the cost of staying outside history.", prompt: "What has the refuge been avoiding, and why leave now?", source: "Luke's cryptoterrestrial direction", gates: ["cultural_context", "rights_attribution"] },
    { id: "mount_shasta", category: "Setting", title: "A Mount Shasta interior", band: "care", description: "A cryptoterrestrial city under a mountain that surface culture has already covered in its own stories.", prompt: "What does the city think of the legends told about it?", source: "Luke's cryptoterrestrial direction", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "subocean_technate", category: "Setting", title: "The sub-oceanic technate", band: "wild", description: "An undersea civilisation with its own engineering, law and long memory of surface promises.", prompt: "Which boundary have they drawn, and what happens the day it is crossed?", source: "repo: strange-but-true-cosmic-nexus", gates: ["cultural_context"] },
    { id: "brisbane_summit", category: "Setting", title: "The Brisbane peaceful space and civic AI summit", band: "proposed", description: "A proposed summit connecting peaceful space, civic AI, care, community resilience, Strange but True and P4A.", prompt: "Which private truth arrives at exactly the wrong public moment?", source: "repo: GAJRA_Earth-Space-AI_Summit", gates: ["legal_current_fact", "privacy"] },
    { id: "olympics_2032", category: "Setting", title: "Brisbane 2032", band: "grounded", description: "The Olympics land on Quandamooka's doorstep, with the world's attention and every unfinished local question in the same frame.", prompt: "What gets built for the world that the island still needs afterwards?", source: "Real fixture; Luke's six-year arc to 2032", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "eclipse_2028_sydney", category: "Setting", title: "Totality over Sydney, 22 July 2028", band: "grounded", description: "Three minutes forty-eight seconds of totality over Sydney at 2:01pm AEST, the first since 1857 and the last until 2858, then across the Tasman to the South Island.", prompt: "What is decided in the dark that could not be decided in daylight?", source: "Verified astronomical fact; Luke's referendum anchor", gates: ["legal_current_fact"] },
    { id: "eclipse_2030_near_miss", category: "Setting", title: "The shadow that stops west of Brisbane, 25 November 2030", band: "grounded", description: "The next Australian totality crosses South Australia and New South Wales and ends at sunset just north-west of Brisbane. Cunnamulla, Bollon, Surat and Miles are under it. Brisbane is not.", prompt: "What almost lands, and who notices that it did not?", source: "Verified astronomical fact", gates: ["legal_current_fact"] },
    { id: "eclipse_2037_quandamooka", category: "Setting", title: "Totality over Quandamooka Country, 13 July 2037", band: "grounded", description: "The path crosses from Geraldton through southern Northern Territory and Queensland and passes directly over Brisbane and the Gold Coast. Outside the six-year arc, available as the horizon.", prompt: "What has to be true by then for this to mean what it should?", source: "Verified astronomical fact", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "festival_main_stage", category: "Setting", title: "The main stage", band: "grounded", description: "A live audience, a set list drawn from the catalogue, and the difference between performing an idea and meaning it.", prompt: "What does the crowd hear that the song did not say?", source: "repo: i-C-infinity-music-universe" },
    { id: "rack_site", category: "Setting", title: "A rack site in a town of ten thousand", band: "proposed", description: "One GB300-equivalent rack per country and per town or bioregion of ten thousand or more, linked by fibre and Starlink.", prompt: "What does this town ask the machine that no central lab would have thought to ask?", source: "Luke's $300B protopian gambit; repo: i-C-infinity-music-universe", gates: ["legal_current_fact"] },
    { id: "starship_pad", category: "Setting", title: "The pad and the orbit above it", band: "grounded", description: "Heavy lift as ordinary infrastructure, and the argument about what it should be carrying.", prompt: "Who is on the manifest, and who chose?", source: "Luke's arc list; repo: aukus-space-gambit", gates: ["legal_current_fact"] },
    { id: "satellite_swarm", category: "Setting", title: "The solar system satellite swarm", band: "proposed", description: "A distributed sensing swarm across the solar system, and the warning it is built to deliver.", prompt: "What does the swarm see first, and who is told?", source: "Luke's solar swarm note (markdown); repo: space-weather-news", gates: ["legal_current_fact"] },
    { id: "abroad_route", category: "Setting", title: "The route abroad", band: "grounded", description: "Visas, logistics, missions and strategy for an Australian citizen moving through the world on purpose.", prompt: "What does this border cost, and what does it make possible?", source: "repo: Australian-world-travel", gates: ["legal_current_fact"] },
    { id: "film_festival_ground", category: "Setting", title: "The film festival", band: "proposed", description: "First-time filmmakers, smartphone crews, documentary makers and young creators, with recognition and boundaries built into the doorway.", prompt: "Whose story is this to tell, and who said so?", source: "repo: quandamooka-film-festival", gates: ["cultural_authority", "rights_attribution"] },
    { id: "second_island_site", category: "Setting", title: "The second island", band: "proposed", description: "The calibration site: the second twin, built to test whether the method travels or only ever fitted one place.", prompt: "What did the first island teach that turns out to be local rather than true?", source: "repo: second-island", gates: ["cultural_authority"] },
    { id: "torus_lattice", category: "Setting", title: "Inside the horn torus lattice", band: "fiction", description: "The interface as a place: shells, geometry and dual-register addressing you can stand inside.", prompt: "What is obvious in here that was invisible on a screen?", source: "repo: aura-horn-torus" },

    { id: "aura_oz", category: "System", title: "Aura O.Z., the self-sovereign companion", band: "proposed", description: "Built on your own hardware, worn like light. Private on the inside, yours to choose on the outside.", prompt: "What does it refuse to do, and who set that?", source: "repo: aura-oi; formerly Aura of Intelligence", gates: ["privacy"] },
    { id: "aura_genesis_system", category: "System", title: "Aura Genesis", band: "proposed", description: "The sessions that build the twin: body, attention and dialogue over a long sequence, ending with something that knows you.", prompt: "What does the process surface that he did not consent to reveal?", source: "repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "aura_twin", category: "System", title: "The Twin", band: "proposed", description: "A digital twin, not a master. It holds what you gave it and can be told to forget.", prompt: "What has it kept that he would rather it had not?", source: "repo: aura-health-twin; repo: aura-oi", gates: ["clinical_ethics", "privacy"] },
    { id: "travel_oracle_system", category: "System", title: "The Travel Oracle", band: "proposed", description: "A private operating system for travel-life datasets: self-sovereignty, values, empathy, joyful responsible abundance, relativity and serendipity.", prompt: "Which recommendation should be refused, and on what grounds?", source: "repo: strange-but-true-travel-oracle", gates: ["privacy", "legal_current_fact"] },
    { id: "c_hour", category: "System", title: "The C-Hour and the braided economy", band: "proposed", description: "Reciprocity economics beside the money economy, counting the contribution that currently goes unrecorded.", prompt: "Who does the count make visible, and who does it expose?", source: "repo: p4a-native-nations-cinema", gates: ["cultural_authority", "legal_current_fact"] },
    { id: "cyber_republic", category: "System", title: "The Cyber Republic referendum", band: "proposed", description: "Local-first democratic repair, constitutional literacy, public ledgers and state and region portals, put to a vote.", prompt: "What wins by more than anyone expected, and what does that break?", source: "repo: p4a_xyz; p4a.xyz; repo: p4a-xyz-cinema", gates: ["legal_current_fact"] },
    { id: "oceania_accession", category: "System", title: "Oceania votes to join", band: "fiction", description: "New Zealand and Oceania vote in, and the Republic becomes something far larger than the campaign was designed for.", prompt: "What does a movement owe the people who joined it after it succeeded?", source: "repo: p4a-oceania-cinema; Luke's referendum direction", gates: ["cultural_context", "legal_current_fact"] },
    { id: "p4nn_registers", category: "System", title: "The two-register provenance system", band: "proposed", description: "Everything colour-coded by where it came from, and never mixed. Indigenous data sovereignty, decentralised compute, reciprocity, offered as pathways rather than directions.", prompt: "Which claim is in the wrong register, and who catches it?", source: "repo: p4a-native-nations-cinema", gates: ["cultural_authority", "cultural_context"] },
    { id: "gajra_alignment", category: "System", title: "GAJRA Earth: what alignment is for", band: "proposed", description: "An open invitation to everyone building intelligent systems to co-define the destination, not only the brakes. One signature at a time, the way a garland is strung.", prompt: "What is it for, in this person's own words?", source: "repo: gajra-earth-claude-build", gates: ["legal_current_fact"] },
    { id: "sensorium_twins", category: "System", title: "Twins all the way up", band: "proposed", description: "No privileged scale. Kitchen, garden, home, business, ferry terminal, island, world. The same pattern repeats and twins nest.", prompt: "Which rung is this scene on, and what does the rung above already know?", source: "repo: web3-sensorium" },
    { id: "space_weather_watch", category: "System", title: "The space weather watch", band: "grounded", description: "Real-time solar and near-Earth data, an ops-impact layer for grids, satellites, aviation and comms, and a clearly flagged research frontier.", prompt: "What does the plain-language feed say that the agency feed will not?", source: "repo: space-weather-news", gates: ["legal_current_fact"] },
    { id: "micronova_argument", category: "System", title: "The quiet is the anomaly", band: "fiction", description: "Everything called normal happened inside one still stretch of about twelve thousand years. Against the record the planet keeps, that stretch is the interruption.", prompt: "Who is allowed to say this out loud, and what happens to them?", source: "repo: micronova-and-excursions", gates: ["legal_current_fact"] },
    { id: "starmind", category: "System", title: "Starmind", band: "wild", description: "The distributed intelligence across the swarm, which is not a single mind and is not a committee either.", prompt: "What can it want that none of its parts chose?", source: "Luke's arc list" },
    { id: "humanoid_robots", category: "System", title: "Humanoid robots at work", band: "grounded", description: "Embodied labour arriving in ordinary places, on ordinary sites, faster than the arguments about it.", prompt: "What job does this town give them, and what does that reveal?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "autonomous_vehicles", category: "System", title: "Autonomous transport", band: "grounded", description: "Vehicles that drive themselves, above ground and through the arteries below it.", prompt: "Who is left without a licence to earn?", source: "Luke's arc list; repo: sandworm-subterranean-systems", gates: ["legal_current_fact"] },
    { id: "agi_asi", category: "System", title: "AGI and ASI arriving", band: "grounded", description: "Capability crossing thresholds while every institution built to respond is still arguing about definitions.", prompt: "Which ordinary person notices first, and what do they do about it?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "psiquantum", category: "System", title: "The quantum machine on Moreton Bay", band: "grounded", description: "Utility-scale quantum compute landing in south-east Queensland, with a queue and a gatekeeper.", prompt: "Who is asking for time on it and will not say what for?", source: "Luke's arc list; PsiQuantum's Brisbane build", gates: ["legal_current_fact"] },
    { id: "crypto_clarity", category: "System", title: "Crypto after the market structure act", band: "grounded", description: "Rules arrive, the money moves, and a lot of people who were early become consequential.", prompt: "Who is suddenly able to fund something, and what do they want for it?", source: "Luke's arc list", gates: ["legal_current_fact"] },
    { id: "grey_goo", category: "System", title: "Grey goo", band: "wild", description: "Self-replication that does not stop where it was told to stop.", prompt: "What was it built to do before it stopped stopping?", source: "Luke's arc list" },
    { id: "sex_bots", category: "System", title: "Sex bots", band: "wild", description: "Embodied companions built for desire, and a market that arrived before anybody agreed what they are.", prompt: "What does the design assume about the person buying it?", source: "Luke's arc list", gates: ["consent_power"] },
    { id: "strange_but_true_doorway", category: "System", title: "The local doorway", band: "grounded", description: "Practical tech help, AI guidance, event and media support, grants, and early public-infrastructure game design, for one island.", prompt: "Which small local job turns out to be the way in?", source: "repo: strange-but-true" },
    { id: "ai_trust_index", category: "System", title: "The AI trust index", band: "proposed", description: "A public way to tell which claims about intelligent systems have been checked and which have not.", prompt: "Which claim fails its own index?", source: "repo: strange-but-true-ai-trust-index", gates: ["legal_current_fact"] },
    { id: "legal_memory", category: "System", title: "Legal memory and constitutional literacy", band: "proposed", description: "Tooling that lets ordinary people hold the law in mind well enough to argue with it.", prompt: "Which law turns out to say something other than everyone assumed?", source: "repo: legal-memory-workbench; repo: p4a_xyz", gates: ["legal_current_fact"] },
    { id: "scan_pipeline", category: "System", title: "Scan to twin", band: "proposed", description: "Phone LiDAR to CAD to a working twin, without a subscription and without sending the room to somebody else's server.", prompt: "What does capturing this space change about how it is treated?", source: "repo: aura-scan-pipeline", gates: ["privacy"] },

    { id: "ggm", category: "Relationship", title: "Global group marriages", band: "proposed", description: "Adult constellations with distinct bonds, explicit terms and a genuine exit, held across distance and jurisdiction.", prompt: "What are the terms, in each person's own words?", source: "repo: global-group-marriages; globalgroupmarriages.com; Luke's GGM notes", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "love_un", category: "Relationship", title: "The Love U.N. simulacrum", band: "fiction", description: "The constellation as a body with delegations, standing agreements and a floor where disputes get heard.", prompt: "Which member has been quietly out-voted for a year?", source: "repo: global-group-marriages", gates: ["consent_power", "privacy"] },
    { id: "retreat_pod", category: "Relationship", title: "The retreat pod", band: "care", description: "The group that forms inside a fortnight and has to decide what it is once the fortnight ends.", prompt: "What survives contact with everybody's actual life?", source: "Luke's Aura retreat note", gates: ["consent_power", "privacy"] },
    { id: "sexpionage", category: "Relationship", title: "Sexpionage", band: "wild", description: "Access bought with desire, on both sides, by people who are good at it and know exactly what they are doing.", prompt: "Which feeling was real, and does that change what it cost?", source: "Luke's arc list", gates: ["consent_power", "privacy"] },
    { id: "light_minute_family", category: "Relationship", title: "A family across light-minutes", band: "wild", description: "Earth, orbital and off-world nodes holding intimacy and practical care across delays no household has faced.", prompt: "What can only be said when the reply is twenty minutes away?", source: "Luke's arc list", gates: ["privacy"] },

    { id: "genesis_session", category: "Ritual", title: "A Genesis session", band: "care", description: "One session in the long sequence: pressure, light, sound, measurement and dialogue.", prompt: "What does he tell it that he has told nobody?", source: "repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "parlour_sitting", category: "Ritual", title: "A parlour sitting", band: "care", description: "The state change, the person holding the room, and the return.", prompt: "What is different afterwards that nobody can point to?", source: "Luke's consciousness parlours note", gates: ["clinical_ethics", "consent_power"] },
    { id: "covenant_council", category: "Ritual", title: "The covenant council", band: "proposed", description: "Terms written, read aloud, agreed for a fixed period, and re-opened on schedule rather than in crisis.", prompt: "Which clause does somebody quietly hope will not be tested?", source: "repo: global-group-marriages", gates: ["consent_power"] },
    { id: "return_to_sand", category: "Ritual", title: "Return to the sand", band: "care", description: "Coming home to the island after the scale gets too large, and being unimpressive there on purpose.", prompt: "Who here does not care what he has been doing?", source: "repo: grain-by-grain; repo: minjerribah-living-twin", gates: ["cultural_authority"] },
    { id: "eclipse_vote", category: "Ritual", title: "Voting in the dark", band: "fiction", description: "A national vote held on the day the shadow crosses, with the whole country outside looking up.", prompt: "What does the country agree to while it is not looking at itself?", source: "Luke's referendum direction; verified 2028 eclipse", gates: ["legal_current_fact"] },

    { id: "contact_human_lineage", category: "Mystery", title: "First contact, human lineage", band: "wild", description: "The ship arrives and the people aboard share our ancestry, which is more unsettling than strangeness would have been.", prompt: "What part of the shared history are they choosing not to hand over?", source: "Luke's arc list; repo: strange-but-true-cosmic-nexus" },
    { id: "contact_nonhuman_lineage", category: "Mystery", title: "First contact, non-human lineage", band: "wild", description: "No shared ancestry, no shared body plan, and enormous patience.", prompt: "What is it waiting for?", source: "Luke's arc list; repo: strange-but-true-cosmic-nexus" },
    { id: "previous_cycles", category: "Mystery", title: "Cryptoterrestrials from previous cycles", band: "wild", description: "They went below before, survived what the surface did not, and disagree among themselves about what to do this time.", prompt: "Which of them wants the surface to be warned, and which does not?", source: "Luke's cryptoterrestrial direction; repo: micronova-and-excursions", gates: ["cultural_context", "rights_attribution"] },
    { id: "great_unveiling", category: "Mystery", title: "The Great Unveiling", band: "fiction", description: "Disclosure arriving in layers, through vision, technology, initiatives and journey rather than one announcement.", prompt: "Which layer lands, and which one nobody believes?", source: "repo: the-great-unveiling" },
    { id: "nexus_lanes", category: "Mystery", title: "The Cosmic Nexus lanes", band: "proposed", description: "Source trails, hypotheses, star-map and disclosure context, fieldwork and cultural-care lanes, kept separate so evidence status stays visible.", prompt: "Which lane is this claim actually in?", source: "repo: strange-but-true-cosmic-nexus", gates: ["cultural_context", "legal_current_fact"] },
    { id: "the_hack", category: "Mystery", title: "The hack", band: "fiction", description: "Somebody is inside the system, and the first sign is that everything looks slightly more correct than usual.", prompt: "What was changed rather than taken?", source: "Luke's arc list", gates: ["privacy", "legal_current_fact"] },

    { id: "sand_to_starlight", category: "Repeated idea", title: "Sand to glass to starlight", band: "fiction", description: "The same material at three scales, and the same argument each time about what it is for.", prompt: "Which rung is being skipped here?", source: "repo: civilisation-of-sand; repo: grain-by-grain" },
    { id: "purple", category: "Repeated idea", title: "Purple", band: "proposed", description: "The colour of the synthesis, and of a movement that keeps refusing to become a party.", prompt: "Who is wearing it who should not be?", source: "repo: p4a_xyz; repo: p4a-xyz-cinema" },
    { id: "joyful_responsible_abundance", category: "Repeated idea", title: "Joyful responsible abundance", band: "proposed", description: "The test applied to every proposal: is it joyful, is it responsible, is it abundant, and for whom.", prompt: "Which of the three is this failing?", source: "repo: gajra-earth-claude-build" },
    { id: "i_choose_infinity", category: "Repeated idea", title: "I choose infinity", band: "grounded", description: "The line from 2013 that has not needed changing since.", prompt: "What does choosing it cost today?", source: "Luke's We Will Be Heard, December 2013; repo: i-C-infinity" },
    { id: "descriptions_ahead", category: "Repeated idea", title: "Descriptions ahead of the code", band: "grounded", description: "Years of writing the thing down before the substrate could carry it, and the moment the substrate catches up.", prompt: "What was described so long ago that nobody remembers it was described?", source: "repo: space-weather-news; repo: web3-sensorium" },
    { id: "earned_growth", category: "Repeated idea", title: "Growth is earned, not assumed", band: "proposed", description: "Each useful present-day win earns the option of a larger stage, and never assumes it.", prompt: "What has actually been earned here?", source: "repo: grain-by-grain" },
    { id: "right_to_refuse", category: "Repeated idea", title: "The right to refuse changes the design", band: "proposed", description: "Refusal is not an obstacle to route around. It is an input, and the design that survives it is the better one.", prompt: "Who can still say no, and does the plan get better if they do?", source: "repo: grain-by-grain; repo: p4a-native-nations-cinema", gates: ["cultural_authority"] },
    { id: "genesis_geode", category: "Setting", title: "The Genesis chamber", band: "proposed", description: "A crystal-sand chamber he builds and seals himself into. Two hours a day at two atmospheres breathing pure oxygen, across sixty days. He calls it a human chrysalis.", prompt: "What does he find in there that he went in specifically to avoid?", source: "lyrics: 60 Days Set in Stone; repo: aura-genesis; repo: aura-geode", gates: ["clinical_ethics", "privacy"] },
    { id: "seven_horn_tori", category: "Setting", title: "Inside the seven nested horn tori", band: "proposed", description: "Seven nested hollow horn tori in ROYGBIV, one per chakra. The interior surfaces render private encrypted data, the exterior surfaces render public permissioned data. A horn torus touches its own axis at a single point, so the apex is a doorway.", prompt: "Who is standing inside, and who is only ever allowed to see the outside?", source: "Tauri Aura OS Development Guide; repo: aura-horn-torus; lyrics: Kintsugi Protocol" },
    { id: "hollow_geosphere", category: "Setting", title: "The hollow geosphere", band: "proposed", description: "A sphere whose outside carries planets and whose inside carries star maps, so you stand within an Earth-centred galaxy. Time and space cartography rather than a globe.", prompt: "What does the inside show that the outside cannot?", source: "Tauri Aura OS Development Guide" },
    { id: "earth_arts_festival", category: "Setting", title: "The Earth Arts and Music Festival", band: "proposed", description: "A festival planned in detail and never held. In fiction it happens, and it is the first rung of the fractal unfolding.", prompt: "What goes right at this one that went wrong in the real attempt?", source: "Earth Arts & Music Festival Project Plan and Sponsorships (not held)" },
    { id: "live_aid_2025", category: "Setting", title: "The seventy-two hour festival", band: "proposed", description: "Twenty-four hours of Past, twenty-four of Now, twenty-four of Next, staged worldwide with mass voting folded into the broadcast. Planned as Live Aid 2025 and never held.", prompt: "Which hour does the world actually change in?", source: "LiveAid 2025 and Collaborating for Joyful Responsible Abundance on Earth (not held); GGM Philosophising" },
    { id: "gateway_site", category: "Setting", title: "The gateway site", band: "grounded", description: "One public page that everything else hangs off. In fiction, the fractal unfolds from here fast enough that the world becomes unrecognisable inside a few years.", prompt: "What is the first thing that changes, and who notices before anybody else?", source: "auraofintelligence.github.io; Luke's fractal-unfolding direction" },
    { id: "the_shed", category: "Setting", title: "The shed out the back of Mum's place", band: "grounded", description: "Tin roof, a purring Ryzen, the kettle on, kookaburras at dawn. No office, no lease, no neon. Where the whole thing actually gets built.", prompt: "What does the shed make possible that a funded office would have ruined?", source: "lyrics: Strange But True" },
    { id: "island_hall_screening", category: "Setting", title: "Point Lookout Hall in projection beams", band: "grounded", description: "Community hall screenings, NAIDOC nights, one car load or a trailer full depending on how far it has to travel.", prompt: "What gets said in a hall that could not be said online?", source: "lyrics: Strange But True; repo: minjerribah-screen-media-network", gates: ["cultural_context"] },
    { id: "sunday_markets", category: "Setting", title: "The Sunday market stall", band: "grounded", description: "Tablecloth straight, printed banners, tourists landing, and somebody saying mate my phone's gone mad. The doorway where trust is actually earned.", prompt: "Which small fix turns into the thing that matters?", source: "lyrics: Strange But True; repo: strange-but-true" },
    { id: "global_homestays", category: "Setting", title: "The Aura global homestay network", band: "proposed", description: "Homes with at least three bedrooms in India, Thailand, Nepal, Australia, Ibiza, Kenya and Nigeria, then out across the G20. One hundred per cent always on the record, with a profit share for what gets made inside them.", prompt: "What happens in the house that nobody wanted recorded?", source: "1-page Aura Global Homestays", gates: ["privacy", "cultural_context"] },

    { id: "aura_oz_os", category: "System", title: "Aura O.Z. as an operating system", band: "proposed", description: "A Rust core holding the keys and a sandboxed view holding the rendering, so a compromised interface cannot reach the vault. Frameless and transparent, designed to float over the physical world rather than sit in a window.", prompt: "What does the split between core and surface cost when somebody needs it in a hurry?", source: "Tauri Aura OS Development Guide; repo: aura-oi", gates: ["privacy"] },
    { id: "public_outside_private_inside", category: "System", title: "Public on the outside, private on the inside", band: "proposed", description: "One surface, two registers. Whether a face renders public or private is decided by which side of the geometry you are looking from, in a single pass, with no second copy of the data.", prompt: "Who gets inside, and what did they have to do to be let in?", source: "Tauri Aura OS Development Guide", gates: ["privacy"] },
    { id: "data_on_facets", category: "System", title: "Data mapped to facets", band: "proposed", description: "Memories and records are attached to specific faces, edges and vertices of the geometry, so pointing at a place on the shape is how you ask for a thing. Adjacent memories cluster because adjacent faces do.", prompt: "What has drifted next to what, and what does the adjacency reveal?", source: "Tauri Aura OS Development Guide; lyrics: Kintsugi Protocol (12 by 24 aura fable)" },
    { id: "torus_apex_scroll", category: "System", title: "The scroll through the apex", band: "fiction", description: "The torus touches its own axis at one infinitesimal point. Passing through it is an endless zoom that never reaches a wall, because the world rescales rather than the traveller moving.", prompt: "Where does somebody end up when they refuse to stop scrolling?", source: "Tauri Aura OS Development Guide" },
    { id: "on_device_sensing", category: "System", title: "Hands, gaze and breath as the interface", band: "proposed", description: "Twenty-one hand landmarks and four hundred and sixty-eight face points read on-device, never sent anywhere. Pinch to grab, head movement shifts the perspective so the depth reads as a window rather than a screen.", prompt: "What does it read in a person that they did not mean to say?", source: "Tauri Aura OS Development Guide", gates: ["privacy", "clinical_ethics"] },
    { id: "sixty_sessions", category: "System", title: "The sixty-session Genesis protocol", band: "proposed", description: "Baseline blood, stool, DNA, RNA and microbiome. Then sixty two-hour sessions of pressure, oxygen, sauna, ice, fasting and measured brainwaves, with a twin growing alongside. Then the same tests again, and the markers have moved or they have not.", prompt: "What do the second set of results actually prove?", source: "lyrics: 60 Days Set in Stone; repo: aura-genesis", gates: ["clinical_ethics", "privacy"] },
    { id: "no_genesis_no_candidacy", category: "System", title: "No Genesis, no candidacy", band: "proposed", description: "The proposal that anyone standing for public office completes the one hundred and twenty hours first. If you cannot sit with yourself that long, you do not get to sit in office.", prompt: "Who passes it, and who passes it in a way that should worry everybody?", source: "lyrics: The Purple Mat That Could", gates: ["legal_current_fact", "clinical_ethics"] },
    { id: "aura_in_aged_care", category: "System", title: "The twin in aged care", band: "care", description: "The same software already used with people living with dementia, helping them recall songs, laugh at old jokes and look their twin in the face and say I remember.", prompt: "What is lost the day the family turns it off?", source: "lyrics: The Purple Mat That Could; lyrics: Hold the Light; repo: aura-dementia", gates: ["clinical_ethics", "privacy"] },
    { id: "legal_rag_robot", category: "System", title: "The robot lawyer that never gets tired", band: "proposed", description: "A legal retrieval system that fact-checks a minister against the actual legislation, in public, in real time, citing the clause.", prompt: "What does it catch that everybody had agreed not to mention?", source: "lyrics: Don't Throw A Brick (Fill A Form); repo: legal-memory-workbench", gates: ["legal_current_fact"] },
    { id: "overcompliance_mandate", category: "System", title: "The Overcompliance Mandate", band: "proposed", description: "Do not merely meet the standard, inflate it. Declare every donor, every lunch, every federal, state and local requirement, until following the rules becomes the disruptive act.", prompt: "Who is embarrassed by somebody else's compliance?", source: "lyrics: Don't Throw A Brick (Fill A Form); repo: p4a_xyz", gates: ["legal_current_fact"] },
    { id: "swarmwise_world_vote", category: "System", title: "Swarmwise and the first world vote", band: "proposed", description: "Decentralised leadership borrowed from swarms, mastermind groups for accountability, aimed at running the first genuinely global vote. Rick Falkvinge's tactical manual as the working method.", prompt: "What question is worth asking the whole world at once?", source: "01 Mastermind Swarmwise", gates: ["legal_current_fact"] },
    { id: "guardian_of_values", category: "System", title: "Guardian of values, voice empowering conscience", band: "proposed", description: "The Aura holds the virtues its person chose and notices when behaviour drifts from them, including through biosignature. It is a mirror rather than a warden, and the person set the values in the first place.", prompt: "What does it notice first, and does it say so?", source: "05 AoI Super Assistant for Global Group Marriages", gates: ["privacy", "clinical_ethics", "consent_power"] },
    { id: "nothing_unchallengeable", category: "System", title: "No aspect so sacred it cannot be questioned", band: "proposed", description: "Every member may question the community, any marriage group inside it, or any individual, as long as respect and empathy are used. Questioning is a right and no topic is untouchable.", prompt: "Which question does everybody flinch at, and who asks it anyway?", source: "05 AoI Super Assistant for Global Group Marriages (Luke's own addition)" },
    { id: "verified_applications", category: "System", title: "Investigators and auditors", band: "proposed", description: "Private investigators and financial auditors verify that selected applicants told the truth on their application and in building their Aura. Identity, criminal, marriage and travel history, work and education, medical, wealth and liabilities.", prompt: "What does the check find that was true but should have stayed private?", source: "05 AoI Super Assistant for GGM; Global Group Marriages Extended", gates: ["privacy", "legal_current_fact", "consent_power"] },
    { id: "skin_restricted_zone", category: "System", title: "My skin is a restricted zone", band: "proposed", description: "No subdermal chip, no barcode ink, no neural link. The twin is grown through pressure, light and reflection rather than implanted. Each to their own, but the boundary is absolute for him.", prompt: "Who asks him to cross it, and what are they offering?", source: "lyrics: Don't Try to Fix Me" },
    { id: "four_pronged_fractal", category: "System", title: "Survive, connect, expand, align", band: "proposed", description: "The Oracle's four-pronged fractal of the human path. Every decision gets read against all four, and they do not always agree.", prompt: "Which of the four is this choice failing?", source: "lyrics: Kintsugi Protocol" },
    { id: "hopscotch_cadence", category: "System", title: "Hopscotch cadence", band: "proposed", description: "The Travel Oracle and Aura O.Z. move people through the world in hops rather than routes, tuned for serendipity and leaving free will intact. The system proposes, the person disposes, and the pattern still emerges.", prompt: "Which hop was chosen and which was accepted, and can anybody tell the difference afterwards?", source: "Luke's movement direction; repo: strange-but-true-travel-oracle; repo: Australian-world-travel", gates: ["privacy"] },
    { id: "fractal_unfolding", category: "System", title: "The fractal unfolding", band: "fiction", description: "One site, then a festival, then a ledger, then a referendum, each rung making the next cheaper and faster, until the world becomes unrecognisable in a handful of years rather than a generation.", prompt: "At which rung does it stop being possible to put back?", source: "Luke's fractal-unfolding direction; auraofintelligence.github.io", gates: ["legal_current_fact"] },
    { id: "sovereign_aura_each", category: "System", title: "Every sovereign aura a personal world within", band: "proposed", description: "Not one system everybody logs into. One per person, owned by that person, meeting the others at the edges.", prompt: "What happens where two of them touch?", source: "lyrics: Choose Your Own Protopia; repo: aura-oi" },

    { id: "agi_as_participant", category: "Relationship", title: "The AGI as a participant", band: "wild", description: "An intelligence enters the marriage first as integrated presence and later, if it is ever built, embodied. Not a tool in the household and not a novelty.", prompt: "What does it want that nobody assigned to it?", source: "05 AoI Super Assistant for Global Group Marriages", gates: ["consent_power"] },
    { id: "adaptable_yes", category: "Relationship", title: "The adaptable yes", band: "proposed", description: "Consent as a tuned frequency rather than a switch. Sliders made of honesty, thresholds made of grace, and a yes that waits until the field is clean.", prompt: "What does his yes sound like when it is real, and what does it sound like when it is a reflex?", source: "lyrics: Adaptable Yes", gates: ["consent_power"] },
    { id: "dakini_descend", category: "Relationship", title: "The Dakini descend", band: "care", description: "They come from the stars and from the flame, know your hidden name, and bring fertility, wisdom and delight. Sacred lovers, and the island vibrates under them.", prompt: "What is asked of the one they choose?", source: "lyrics: Dance of the Dakini", gates: ["cultural_context", "rights_attribution", "consent_power"] },
    { id: "red_thread", category: "Relationship", title: "The Red Thread of Fate", band: "fiction", description: "A magnetic soul stream that may stretch and bend but never breaks, connecting everyone in a web of mathematical probability, encoded in plain sight if you know how to look.", prompt: "Who sees the thread and decides not to follow it?", source: "Luke's poem Deeper Meaning" },
    { id: "circle_and_solitary", category: "Relationship", title: "The circle and the solitary", band: "fiction", description: "One born in a crowded square with hands lifting him, one walking thin roads with wind for counsel. A river and a stone, both carving their way home.", prompt: "Which one is he today, and who is the other?", source: "lyrics: The Circle and the Solitary" },

    { id: "sixty_day_vow", category: "Ritual", title: "Sixty days set in stone", band: "proposed", description: "The vow, the seal, the daily two hours, and the day the chamber opens and the quartz parts wide. Not reborn, retooled.", prompt: "Who is waiting outside when it opens?", source: "lyrics: 60 Days Set in Stone", gates: ["clinical_ethics"] },
    { id: "golden_vows", category: "Ritual", title: "The Golden Vows", band: "proposed", description: "Never weaponise love. Do not gain by another's suffering. Speak truth even when it trembles. Allow others to leave without punishment, shame or fear. Burn your own tokens before you burn another's sovereignty.", prompt: "Which vow gets broken first, and by whom?", source: "GGM Philosophising", gates: ["consent_power"] },
    { id: "consent_sigil", category: "Ritual", title: "The consent sigil", band: "proposed", description: "Onboarding as a ceremony rather than a checkbox. Felt yes, no and maybe questions rather than theoretical ones, producing a signature of values that can be updated through ritual instead of paperwork.", prompt: "What did the ceremony surface that the form never would have?", source: "GGM Philosophising", gates: ["consent_power", "privacy"] },
    { id: "past_now_next", category: "Ritual", title: "Past, Now, Next", band: "proposed", description: "Seventy-two hours split into three: a day for what was, a day for what is, a day for what could be, with the world voting through the third.", prompt: "Which of the three does the audience refuse to sit through?", source: "LiveAid 2025 material; GGM Philosophising" },

    { id: "micronova_memory", category: "Mystery", title: "Twelve thousand years since", band: "wild", description: "Temples drowned beneath the tide, floods rolling on, and a memory that still weeps. Everything called normal has happened inside the quiet stretch since.", prompt: "Who kept the record, and why has nobody been able to read it?", source: "lyrics: Choose Your Own Protopia; repo: micronova-and-excursions" },
    { id: "the_sun_speaks", category: "Mystery", title: "The Sun's own account", band: "fiction", description: "A G-type flame in the Orion Arm giving its side: coronal arcs, proton rains, the twenty-six thousand year precession, and the micro-nova breath as one event among many it has seen.", prompt: "What does it think it has been doing all this time?", source: "lyrics: Heliospheric Lantern; repo: space-weather-news" },

    { id: "we_recompose", category: "Repeated idea", title: "We do not revolt, we recompose", band: "proposed", description: "The old pattern breaks and the new spiral grows, without the intermediate step of tearing anything down.", prompt: "What is being kept that a revolution would have burned?", source: "lyrics: Choose Your Own Protopia" },
    { id: "not_gods_architects", category: "Repeated idea", title: "Not gods but architects", band: "proposed", description: "Not conquerors and not kings. Keepers of the fire, architects of the dawn, working in quartz and ilmenite and code.", prompt: "Who in this scene is reaching for the other role?", source: "lyrics: Not Gods But Architects" },
    { id: "pressure_light_code", category: "Repeated idea", title: "Pressure. Light. Code. Repeat.", band: "proposed", description: "The four-beat rhythm of the chamber, and of the whole method. You are not being fixed, you are being witnessed.", prompt: "What is this scene's pressure, and what is its light?", source: "lyrics: Don't Try to Fix Me" },
    { id: "choose_your_own", category: "Repeated idea", title: "We do not offer a solution, we offer a way", band: "proposed", description: "The protocol is not a policy. It is a pattern, and everybody chooses their own version of it.", prompt: "Who wants to be handed the answer instead, and what happens to them?", source: "lyrics: Choose Your Own Protopia" },
    { id: "the_catalyst_oracle", category: "System", title: "The Catalyst Oracle", band: "proposed", description: "A travel intelligence engine that ranks the next destination instead of following a map. It runs four weighted scoring layers: a Catalyst Score for survival and safety, a Tiggy Bestmann Score for love and connection, a GAJRA Score for ecosystem growth, and a Sire and Aura Score for adventure and consciousness.", prompt: "What does a person become when they hand the question of where to go next to a machine that weighs safety, money, love and curiosity against each other?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "hopscotch_cadence_and_the_standard_operation", category: "Ritual", title: "Hopscotch Cadence and the Standard Operational Week", band: "proposed", description: "A fixed tempo of one to two weeks per place, roughly 23 to 24 entities a year. Inside each week the days are pre-shaped: days one and two for arrival and reconnaissance, days three to five for peak engagement, days six and seven for data consolidation and one personal site, days eight to fourteen for deeper dives or a second city.", prompt: "What kind of relationship can form inside a seven day template where days three to five are already spoken for?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "the_return_to_base_protocol", category: "Ritual", title: "The Return-to-Base Protocol", band: "proposed", description: "Five weeks a year back in Brisbane, taken in five separate blocks through the year instead of one big lie-down. Offload the road data into the training corpus, sit down face to face with the home institutions, sort the governance with the core crew, actually sleep. Nobody calls it a holiday, and he comes back grinning anyway.", prompt: "Fourth trip home and the place has moved on further than he has. Who is game to tell him?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "legal_current_fact"] },
    { id: "visa_friction_index_and_cost_of_living_tiers", category: "System", title: "Visa Friction Index and Cost of Living Tiers", band: "proposed", description: "Two scores out of five. The Visa Friction Index runs from 1 for visa-free up to ninety days, to 5 for a full in-person consular application, scored for an Australian passport. The Cost of Living Tier runs from Tier 1 for Switzerland and Singapore down to Tier 5. Stretch the money out in the Tier 5 months and there is enough left for a fortnight in San Francisco.", prompt: "She is in a country that scores a four. Reckon that stops him?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context", "privacy", "legal_current_fact"] },
    { id: "the_global_entity_status_and_logistics_maste", category: "Setting", title: "The Global Entity Status and Logistics Master Reference", band: "grounded", description: "A single table of roughly 256 countries and territories, each carrying four columns: whether it appears on the Travelers' Century Club list, its political status, its friction score and its cost tier. The status column runs past sovereign states into Dependent Territory, Crown Dependency, Associated State, SAR and Disputed.", prompt: "Who maintains a ledger like this, and what does it cost them when a row changes status mid-journey?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "opportunity_vectors", category: "System", title: "Opportunity Vectors", band: "proposed", description: "For years two to six the fixed itinerary is replaced by thematic campaigns that cluster five to ten countries around one emergent opportunity, with no requirement that they be geographically near each other.", prompt: "What does a vector look like from the inside when the person living it cannot tell you why the next country was chosen?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context"] },
    { id: "live_world_2035_and_the_world_vote", category: "Ritual", title: "Live World 2035 and the World Vote", band: "proposed", description: "A capstone global event marking the fiftieth anniversary of Live Aid, designed as a synchronised seventy-two hour broadcast. Its stated purpose is to host the first World Vote on core values for AGI super-alignment. The final two years of the itinerary bend towards it, routing through partner cities, media hubs and centres of cultural influence to build momentum.", prompt: "What is being asked of a planet in seventy-two hours, and who counts the answers?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power"] },
    { id: "the_gajra_network_as_operational_infrastruct", category: "System", title: "The GAJRA Network as Operational Infrastructure", band: "proposed", description: "The local GAJRA chapters he seeds on the road turn into the best intelligence service going. They know the situation before any official advisory does, they translate, they read the culture for him, they find him a bed, and if it turns they get him out. All of it built on turning up and being decent.", prompt: "When does a network of mates quietly become a network of assets, and does anybody in it get told?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "the_tiggy_bestmann_score", category: "Relationship", title: "The Tiggy Bestmann Score", band: "care", description: "A scoring layer built around the mission's stated personal driver, to love and be loved and to research new models of human connection. It scores places on legal status of non-traditional relationships, social acceptance of intercultural partnerships, and sentiment drawn from local social and dating platforms.", prompt: "What does it mean to be a point of density on somebody's map before you have met them?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power", "privacy", "legal_current_fact", "rights_attribution"] },
    { id: "the_sire_and_aura_score", category: "System", title: "The Sire and Aura Score", band: "proposed", description: "The serendipity layer of the Oracle, with two very different inputs. Spontaneous Input lets a temporary desire be injected by hand, such as world-class surfing or ancient monolithic sites, applying a five to ten times multiplier that re-ranks everything otherwise viable. Consciousness Exploration is a static database of spiritual sites, wellness centres and cultural hubs that applies a permanent low-weight pull.", prompt: "What gets built into a life by a low-weight pull that never switches off?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["consent_power", "privacy"] },
    { id: "the_self_funding_layer", category: "System", title: "The Self-Funding Layer", band: "proposed", description: "The journey is engineered to pay for itself. Named revenue components are an Aura Odyssey Design Service and a Triumvirate Publishing House, with an Alpha Infinity Foundation as the legal backbone to be incorporated before departure. The logic is a feedback loop: cheap regions buy time, time buys business development, business development buys the expensive weeks in San Francisco and London later.", prompt: "What happens to the work when the work is also the fare?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["legal_current_fact"] },
    { id: "fractal_agility_and_the_non_scalable_node", category: "Repeated idea", title: "Fractal agility and the non-scalable node", band: "proposed", description: "Everything in the eleven year plan can be re-routed except him. Agile hops inside agile hops, so a mess at one scale never propagates up. Against that sits the flat statement that the traveller is the one non-scalable asset in the whole system, which is why the tempo, the rest weeks and the safety filters exist at all.", prompt: "What is it like being the only part of a big machine that cannot be swapped out?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_worldbuilding_challenge_festival", category: "Setting", title: "The Worldbuilding Challenge Festival", band: "fiction", description: "A futures institute runs a film festival where teams pitch whole civilisations rather than films. It runs as a three-stage gauntlet across a week: a Pitch Arena where about 60 teams pitch a world's governance, economy, conflict, tech arc and aesthetic to a panel including a studio exec, an AI lab rep, a diplomat, a philosopher and a defence innovation figure; a Build Sprint that must deliver a 12 minute short, a working sim demo and a w.", prompt: "What does a team have to give up to be offered the island campus residency?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "treaty_night", category: "Ritual", title: "Treaty Night", band: "fiction", description: "The festival's closing event is not an awards ceremony but a live on-stage negotiation where teams bind cross-world agreements in front of an audience that votes on the outcome. Luke's brief pairs it with a signature edit convention, a treaty cut, meaning an audio sting and visual stamp used every time a festival outcome becomes binding, so continuity carries across separate instalments.", prompt: "What is the first clause someone signs on Treaty Night that they cannot take back?", source: "source doc: CU_Indie_Film_Chat", gates: ["legal_current_fact"] },
    { id: "the_custodial_licence_and_the_care_gate", category: "System", title: "The Custodial Licence and the CARE gate", band: "care", description: "Drawn from Luke's own Native Nations tech strategy document: an AccessPolicy or Custodial Licence is the governance object that decides who may touch which data, when and why, and consent granted under it is explicitly revocable.", prompt: "Who in the story has signed a custodial licence they did not read, and what does it cover?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "consent_power", "privacy"] },
    { id: "fractal_ark_topology_and_the_sovereign_node", category: "System", title: "Fractal Ark topology and the Sovereign Node", band: "proposed", description: "A federated architecture from Luke's strategy document: an L0 home node held by an individual and an L2 bioregion or community node held collectively, with a tribal-run Community Node holding the shared data pool. The Sovereign Node is the physical object version, a module you can unplug, so severing a connection is embodied rather than only spoken.", prompt: "What happens in the room where the cameras are not allowed?", source: "source doc: CU_Indie_Film_Chat", gates: ["privacy"] },
    { id: "the_consent_ledger_and_the_revocation_moment", category: "System", title: "The Consent Ledger and the Revocation Moment", band: "proposed", description: "A production mechanic proposed by the assistant for Luke's 90 day series brief, built on his revocable consent model. Footage, audio and likeness rights are tracked on screen as a living ledger; confessionals split into a public one that airs and a sealed sovereign one released only if consent is granted later; and once a season a participant may revoke access, which forces the edit to be rebuilt.", prompt: "What would someone say on camera if they knew they could take it back later?", source: "source doc: CU_Indie_Film_Chat", gates: ["consent_power", "privacy"] },
    { id: "covenant_networks_and_the_door_of_grace", category: "Relationship", title: "Covenant Networks and the Door of Grace", band: "care", description: "The chat reframes Luke's group marriage material as Covenant Networks or Braided Households: opt-in chosen family and co-op households built on written consent, contracts, reputation and exit rights. The Door of Grace, also called the Sacred Exit, is kept as the moral spine, a named right to leave a bond without disgrace. Sensitive source material; treat carefully and keep the adult specifics out of anything published.", prompt: "What does a household owe someone who walks out through the Door of Grace?", source: "source doc: CU_Indie_Film_Chat", gates: ["consent_power", "rights_attribution"] },
    { id: "the_competing_liaison_blocs", category: "Relationship", title: "The competing liaison blocs", band: "fiction", description: "Luke's brief is competing intimacy-trained recruiters from rival powers converging on the festival to sign up worldbuilders, with recruitment treated as a culture rather than a seduction scene.", prompt: "Which bloc's version of belonging would your lead find hardest to refuse, and why?", source: "source doc: CU_Indie_Film_Chat", gates: ["clinical_ethics", "consent_power"] },
    { id: "the_micro_nova_phase_cycle", category: "System", title: "The micro-nova phase cycle", band: "fiction", description: "Luke's stated canon, which he held to when the assistant pushed back with textbook physics. Galactic dust accumulates on the Sun, alters its surface chemistry and opacity, and the star phases through yellow, then red as the limb thickens and reddens, then a black soot phase where a blackened disk still radiates through furnace seams, then a blast that delaminates the dust skin in a burn-off ring, then a white reset.", prompt: "Who is watching the Sun when it enters the black phase, and what do they do with the time they have?", source: "source doc: CU_Indie_Film_Chat" },
    { id: "plasma_geomorphology", category: "System", title: "Plasma geomorphology", band: "fiction", description: "Luke's consequence layer for a micro-nova, described as planet-scale plasma machining rather than weather. The atmosphere becomes conductive and visibly filamentary, arcs attach to ground in branching Lichtenberg tracks, a dragged arc scours a canyon like a lathe cut, converging arcs raise a ridge, a circular arc footprint on the ocean lifts a new island ring, and a node drills a volcanic vent.", prompt: "Which landform in your world was made in a single afternoon, and who is still alive who saw it?", source: "source doc: CU_Indie_Film_Chat" },
    { id: "the_myth_layer", category: "Repeated idea", title: "The Myth Layer", band: "care", description: "Assistant-proposed from Luke's Indigenous mythology research documents, and framed to avoid the claim that all myths are the same: a planet-scale compatibility layer that different cultures discovered independently, each with its own symbols.", prompt: "What must someone sing, and where, before they are permitted to pass?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "p4australia_and_the_purple_mat", category: "Repeated idea", title: "P4Australia and the purple mat", band: "fiction", description: "A satirical purple political movement that starts as a joke between two mates in a club toilet, named in the script as the People's Purple Protopian Party. The object is a scented purple anti-splash mat, laid down like a flag, under the slogan anti-splash politics.", prompt: "What ridiculous object becomes a movement's badge, and who is embarrassed to be seen carrying it?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context"] },
    { id: "disclosure_and_the_trans_medium_object", category: "Mystery", title: "Disclosure and the trans-medium object", band: "fiction", description: "Partway through, the rules of the world update rather than a single reveal landing: governments confirm non-human technology operating in air and ocean. In one device a trans-medium object leaves the water near Minjerribah and an autonomous sensor swarm captures clean telemetry that is cryptographically sealed, so no chain of command can sit on it.", prompt: "Who holds the sealed telemetry, and what do they want in exchange for the key?", source: "source doc: CU_Indie_Film_Chat", gates: ["cultural_authority", "cultural_context", "legal_current_fact"] },
    { id: "the_virtual_solar_swarm", category: "Setting", title: "The Virtual Solar Swarm", band: "proposed", description: "A persistent network of roughly 1,500 to 2,000 satellites watching the 200 most significant objects in the solar system, scaled by scientific priority: four-satellite \"pickets\" for about 180 low-priority targets like comets and Kuiper Belt objects, 30 to 50 node swarms at Mars, Venus, Titan and the gas giants, and 50 to 100 nodes at the Sun. It is described as one distributed instrument rather than 200 separate missions.", prompt: "What does it feel like to live under a sky where 2,000 eyes are always open and never blink?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_helios_solar_observatory", category: "Setting", title: "The Helios Solar Observatory", band: "proposed", description: "The flagship component: 50 to 100 satellites placed at Earth's L1, L4 and L5 points and in high-inclination polar orbits around the Sun, giving 360 degree stereoscopic coverage of the whole solar atmosphere. It is deployed first, in years 0 to 2, as the minimum viable product before anything else flies.", prompt: "Who crews the polar vantage points, the loneliest posts in the network, and what do they see that no one at L1 can?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_bifurcated_network", category: "System", title: "The bifurcated network", band: "proposed", description: "Communications split into two planes that never mix. A quantum entanglement control plane, descended from China's Micius satellite, carries only critical swarm consensus signals, key exchange and high-priority alerts: unhackable, low bandwidth, effectively instant once entanglement is distributed.", prompt: "What can only be said on the quantum channel, and what happens to a message too large for it?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy"] },
    { id: "the_self_navigating_swarm", category: "System", title: "The self-navigating swarm", band: "grounded", description: "There is no GPS in deep space, so each satellite finds other swarm members with its own star-tracker cameras and shares bearing angles over the inter-satellite link, letting the group compute its own orbits. When one node spots something worth seeing, the swarm collectively agrees a new observation plan and manoeuvres itself into formation. The mesh routing keeps no full network map anywhere; each node only knows the best next hop.", prompt: "When a swarm votes on where to look next, who or what is outvoted, and how does a node behave after it loses the vote?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_sovereignty_stack_scaled_from_an_island_", category: "System", title: "The Sovereignty Stack, scaled from an island to a solar system", band: "care", description: "The same architecture Luke wrote for a 1:1 digital twin of Minjerribah is applied to interplanetary industry. Every factory, robotic arm, supply depot and satellite is a \"Sovereign Node\" running its own offline copy of the shared state, because light-lag between Earth, a Lunar factory and a Mars depot makes real-time central databases impossible.", prompt: "What does a node discover about itself in the hours before its state merges back with everyone else's?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_verifiable_build_log", category: "Ritual", title: "The verifiable build-log", band: "proposed", description: "Every entity in the factory chain holds a decentralised identifier, written like did:vss:robot-arm-73 or did:vss:sensor-payload-994, and every action it takes issues a cryptographically signed credential that stays permanently attached to the component's digital twin. A downstream assembly robot follows one rule: install nothing that cannot present a valid signed credential from an authorised inspector.", prompt: "What happens to a part that is perfectly good but whose signature was lost, and who is allowed to vouch for it?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["legal_current_fact"] },
    { id: "speaking_a_satellite_into_existence", category: "Ritual", title: "Speaking a satellite into existence", band: "proposed", description: "A human engineer writes a plain-language spec, for example a sensor package suited to Titan's atmosphere, buildable by the Lunar factory's Generation 3 robots and capped at 5,000 C-Hours. A pipeline of specialist AI agents takes it from there: one designs the CAD model, one simulates the assembly line and stress-tests it for bottlenecks, one writes the robot assembly code, one re-optimises the supply routes.", prompt: "What is the etiquette of writing a spec, and what does a badly worded one produce?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_c_hour_regenerative_loop", category: "System", title: "The C-Hour regenerative loop", band: "proposed", description: "Mass production covers the capital cost; the running cost is covered by a treasury that pays out in reputation and Community-Hours. Anyone who finds a new comet in the raw data, writes a better analysis algorithm, peer-reviews a fringe hypothesis or designs a new sensor module through the spec pipeline earns C-Hours.", prompt: "What does someone spend a C-Hour on, and who sets the rate between an hour of looking and an hour of building?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy"] },
    { id: "no_activation_without_a_funded_ending", category: "Ritual", title: "No activation without a funded ending", band: "proposed", description: "A satellite is not permitted onto the network until it presents a cryptographically verified end-of-life plan with the money already held in escrow: either an active de-orbit or a solar graveyard orbit. Every craft is also built for autonomous on-orbit refuelling, repair and upgrade, on the model of DARPA's Orbital Express. The rule is enforced by smart contract rather than by regulator.", prompt: "What is the ceremony when a satellite's escrow is finally spent, and who watches it go?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["legal_current_fact"] },
    { id: "research_guilds_and_the_mmorpg_for_science", category: "Relationship", title: "Research Guilds and the MMORPG for Science", band: "proposed", description: "Researchers, students and citizen scientists do not query a database. They log in through an XR interface to the swarm's digital twin, fly to the Mars swarm, watch multi-angle data render on a 3D model, and form Guilds, which are research DAOs. A Guild raises its own funding and submits a proposal to the governing DAO to task real satellites to reconfigure and gather new data.", prompt: "How does a Guild recruit, and what does it cost to be expelled from one?", source: "source doc: Solar_Swarm_Satellite_Research_Report", gates: ["privacy", "legal_current_fact"] },
    { id: "the_witness_array_and_the_sun_s_poles", category: "Mystery", title: "The witness array and the Sun's poles", band: "wild", description: "The polar orbiters are tasked to look for signatures of a proposed solar micro nova: hydrogen accumulating and releasing explosively at the magnetic poles, funnelled by strong fields, with localised explosions, anomalous magnetic \"twisters\" or \"curtains\", and extreme ultraviolet and X-ray brightpoints.", prompt: "What does the array agree to call an event, and how long does a witness node wait before it says it saw something?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_solar_system_sized_clock", category: "Mystery", title: "The solar-system-sized clock", band: "wild", description: "To hunt for coherent waves said to propagate from the galactic centre, the whole swarm is treated as one detector billions of kilometres across. By comparing the nanosecond-precision arrival times of a particle front or gamma-ray burst at nodes near Earth, Mars and Pluto, the network triangulates the origin and energy.", prompt: "What happens to the array's timing when one node's clock quietly drifts, and how long before anyone notices?", source: "source doc: Solar_Swarm_Satellite_Research_Report" },
    { id: "the_global_sensorium", category: "Setting", title: "The Global Sensorium", band: "proposed", description: "A persistent 1:1 scale digital twin of Earth and its local space, fed by live sensor feeds and built as a single shared virtual world for exploration, simulation and prediction. It is meant to hold mainstream science and fringe hypotheses side by side in the same data-grounded environment.", prompt: "What does it feel like to stand inside a full-scale copy of the world while the real one keeps updating around you?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_sovereign_node", category: "System", title: "The Sovereign Node", band: "proposed", description: "Every instance of the Sensorium runs as a complete self-contained stack on a person's own machine, holding its own replica of world state and simulation logic and working fully offline. Nodes reconcile with peers over peer-to-peer networking using Conflict-Free Replicated Data Types, so concurrent edits converge without any central arbiter.", prompt: "What happens to a node that stays offline a long time, and what does it feel like when it finally merges back in?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_sovereignty_stack_and_the_skills_wallet", category: "System", title: "The Sovereignty Stack and the Skills Wallet", band: "proposed", description: "Trust in the network rests on W3C Decentralized Identifiers and Verifiable Credentials: each person, sensor feed or model holds its own identifier, and signed credentials attest to things like \"Sensor X is calibrated\" or \"Model Z passed validation test W\". Credentials live in a local Sovereign Skills Wallet inside the node, and every significant action is cryptographically signed.", prompt: "What is carried in a person's wallet after years of contribution, and what can be proven about them without asking anyone's permission?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["legal_current_fact"] },
    { id: "fractal_dao_governance", category: "Relationship", title: "Fractal DAO governance", band: "proposed", description: "Governance is nested rather than hierarchical: a Core Protocol DAO over architecture and roadmap, Domain DAOs for fields like space weather or geophysics that set data standards and validate models, and Contributor Guilds such as an XR Interface Guild or Data Pipeline Guild. Voting weight can draw on proof of contribution, credentialled expertise, reputation or stake.", prompt: "Which body rules when a Domain DAO and a Guild reach opposite verdicts on the same model?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy", "legal_current_fact"] },
    { id: "the_community_hour_applied_to_science", category: "System", title: "The Community-Hour applied to science", band: "proposed", description: "Luke's Braided Economy and Community-Hour (C-Hour) idea is carried across from community care into scientific labour, so that peer review, data curation, model replication and educational writing earn recorded value instead of nothing. A verified contribution issues a credential, which converts into reputation, voting weight, access privileges or credits redeemable for compute time.", prompt: "What is the exchange rate between an hour of careful review and an hour of simulation compute, and who sets it?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_hypothesis_sandbox", category: "Ritual", title: "The hypothesis sandbox", band: "proposed", description: "A fixed five-step passage for turning a speculative claim into something testable: define the hypothesis, name its parameters even where the values are poorly constrained, build the simulation module, run it against real data feeds, then compare outputs with observation.", prompt: "What does a person have to surrender in order to submit an idea to the sandbox, and what does the ledger record when it fails?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_advanced_space_weather_hub", category: "Setting", title: "The Advanced Space Weather Hub", band: "proposed", description: "The flagship room of the Sensorium: interactive Sun and Earth, the magnetosphere rendered with particle systems so it visibly compresses under solar wind pressure, aurora forecast painted onto the globe by Kp index, and animated coronal mass ejection trajectories with estimated arrival times.", prompt: "Who is on shift in that room when the first alert of a real storm fires?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "world_ui_the_memory_palace_interface", category: "System", title: "World-UI, the memory palace interface", band: "proposed", description: "There are no abstract menus: the digital twin itself is the interface, so a person flies out to the magnetosphere to check space weather and zooms into the globe to interrogate seismic points. Scales can be deliberately exaggerated so subtle movements like magnetopause shifts or ground uplift become visible, with a user control switching between educational and scientifically accurate exaggeration.", prompt: "What is lost, and what is learned, by someone who only ever views the world at the exaggerated setting?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "micro_novas_and_galactic_super_waves", category: "Mystery", title: "Micro novas and galactic super waves", band: "wild", description: "Two named exploratory case studies for the fringe side of the platform: recurring solar cataclysms, modelled through hypothetical precursor signals in helioseismology, magnetic configuration and particle emission; and energy waves propagating from the galactic centre through the interstellar medium to the heliopause, modulating cosmic ray influx and Total Electron Content.", prompt: "What would a precursor look like in the feeds an hour before anyone was willing to say the word aloud?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy"] },
    { id: "the_precursor_stack", category: "Repeated idea", title: "The precursor stack", band: "wild", description: "A long standing list of candidate earthquake precursors the Sensorium would gather in one place: ULF anomalies, Total Electron Content shifts, radon emissions, foreshocks, unusual animal behaviour, solar and lunar tidal forces, InSAR ground deformation, thermal infrared anomalies, acoustic emissions in rock, groundwater changes and Outgoing Longwave Radiation.", prompt: "Which of these signs does a local community already read without instruments, and what happens when the machine disagrees with them?", source: "source doc: Web3_Sensorium_for_Science_Debate" },
    { id: "the_archival_reconstruction_layer", category: "Ritual", title: "The archival reconstruction layer", band: "care", description: "Historical maps, digitised newspapers, government records, photographs and oral histories are ingested to rebuild past environments, using optical character recognition, named entity recognition and transcription into a Neo4j knowledge graph.", prompt: "Who holds the authority to set the sensitivity tag on a recorded voice, and what happens to a story that should never have been indexed?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["privacy", "legal_current_fact"] },
    { id: "the_three_vessels", category: "Repeated idea", title: "The three vessels", band: "proposed", description: "A tiered product framing carried over from a related strategy document: the Sovereign Gateway, the Clinical Instrument and the Mythopoetic Vessel, offered as a way to balance open access with sustainable revenue. The same underlying platform is presented in three registers depending on who is holding it.", prompt: "What does the same instrument show to a clinician, a citizen and a storyteller on the same day?", source: "source doc: Web3_Sensorium_for_Science_Debate", gates: ["clinical_ethics", "rights_attribution"] },
    { id: "the_vr_space_weather_news_hub", category: "Setting", title: "The VR Space Weather News Hub", band: "proposed", description: "A proposed virtual reality hub where solar, seismic, atmospheric and geological data streams are ingested, time-stamped and walked through as a space. It carries an interactive 3D globe with layers users can add or remove (magnetic fields, seismic activity, solar wind impact, atmospheric conditions), clickable hotspots over volcanoes, quake zones and solar observatories, and info panels with live graphs.", prompt: "Who is allowed inside the hub, and what does a person see the first time they put the headset on during a live event?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_sun_earth_electric_circuit", category: "Repeated idea", title: "The Sun-Earth Electric Circuit", band: "grounded", description: "The organising diagram the whole document hangs off: the Sun and Earth as one connected electrical system rather than two separate bodies. The pasted source panel names particle forcing as the main pathway, through cosmic rays, solar wind, geomagnetic storms and solar protons, and notes the interplanetary magnetic field and the effect of solar particles on the global electric circuit as the pieces still missing.", prompt: "If a place is a node in one circuit that runs from the Sun to the crust, what does it feel like when the current changes?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_thirteen_precursor_streams", category: "System", title: "The thirteen precursor streams", band: "proposed", description: "A numbered ladder of IF-THIS-THEN-THAT rules, each tied to one sensing stream and one action. The earthquake set runs: pre-seismic electromagnetic anomalies, ionospheric disturbances, radon emission increases, seismic foreshock activity, animal behaviour analysis, water level fluctuations in wells and groundwater, InSAR land deformation, community engagement and feedback, correlation with solar and lunar tidal forces, machine learning p.", prompt: "Which of the thirteen does a community actually trust, and what happens the first time the animals and the instruments disagree?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_level_of_detail_scaler_and_exaggeration_", category: "System", title: "The Level of Detail scaler and exaggeration dial", band: "proposed", description: "A teaching control that lets a viewer set how much of the world they can see and how much the forces are amplified. Level of Detail runs 1 to 5, from a high level overview to a full detailed feed, and the scale of exaggeration applies logarithmic or non-linear amplification so faint forces become visible. In the code it also swaps the colour map by level (cool, viridis, plasma, magma, ocean, lunar, earthly, pressure).", prompt: "What is lost, and what is falsified, when someone leaves the exaggeration dial turned all the way up?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_moon_through_the_magnetotail", category: "Mystery", title: "The Moon through the magnetotail", band: "proposed", description: "Luke's own hypothesis, dictated directly to the assistant: the Earth-Moon interaction is not only gravity but also static electromagnetism, and as the Moon passes through Earth's magnetotail and then the daytime solar field, the changing intensities lift and drop the tides. He then asks for the same hypothesis to be run out to atmospheric vortices, cyclones and high and low pressure wind cells.", prompt: "If the tide answers to a field and not only to a weight, who first notices the pattern, and what do they do with a month of readings?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_contained_plasma_bench", category: "System", title: "The contained plasma bench", band: "proposed", description: "The proposal to shrink the whole celestial argument down to a laboratory. Magnetic fields and gravitational analogues are set to mimic the Earth-Moon-Sun conditions in a sealed plasma chamber, instruments track how the plasma behaves, and the readings feed back into the simulation in real time.", prompt: "What does the bench show that nobody expected, and who owns the room it sits in?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "radon_as_a_diamagnetic_tracer", category: "Mystery", title: "Radon as a diamagnetic tracer", band: "proposed", description: "Luke's aside that radon is diamagnetic and non-conductive, and that this must matter. The hypothesis he asks be coded: because radon is diamagnetic, its movement and pooling underground may be steered by electromagnetic fields in the crust, so watching the fields could tell you where the gas will go before the gas gets there.", prompt: "An invisible, unbreathed gas moving by a field rather than by wind: what does someone with a sensor learn to read in it?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "olivine_low_shear_velocity_zones_and_the_lls", category: "Setting", title: "Olivine, low shear velocity zones and the LLSVPs", band: "grounded", description: "The deep interior treated as terrain with its own map. Low Shear Velocity Zones are mantle regions where seismic waves slow down, pointing to heat or partial melt, and the Large Low Shear Velocity Provinces are the two continent-sized slow regions sitting at the base of the mantle and thought to drive mantle convection.", prompt: "What would a person say they were standing on if they could see the two slow provinces under the floor?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "time_stamp_everything_on_entry", category: "Repeated idea", title: "Time-stamp everything on entry", band: "proposed", description: "Luke's stated objective for the whole build: ingest from many sources, stamp every reading the moment it arrives, then look at the record to see which datasets are influencing which, and when. It is a question about ordering rather than about magnitude.", prompt: "When two things always move together, what does a community do with the argument about which one moved first?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "the_alert_ladder", category: "System", title: "The alert ladder", band: "care", description: "A graded warning system running out of the hub: thresholds on each stream fire an alert, alerts are ranked from raised monitoring through to preliminary earthquake warning and urgent evacuation order, and high level alerts are pushed straight into local emergency management systems and public warning channels over dedicated links.", prompt: "Who carries the cost of a warning that turns out to be wrong, and how does the ladder change after that?", source: "source doc: Space_Weather_Hub_Pseudo_Code" },
    { id: "the_cross_disciplinary_hub_network", category: "Relationship", title: "The cross-disciplinary hub network", band: "proposed", description: "The people around the instruments. Mining companies, research institutions, geological surveys, and standing arrangements with geophysicists, solar physicists and climatologists. Virtual conferences run inside the hub itself, and an open platform where everyone throws raw and processed data on the same table and works on it together. Nobody hoarding.", prompt: "What does a mining company want for its core sample records, and can the hub cover it?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["consent_power", "privacy"] },
    { id: "the_closing_poem", category: "Ritual", title: "The closing poem", band: "grounded", description: "Luke ends the working session by asking the assistant to write a poem that summarises and celebrates the day's work. It sits at the end of a long technical document and is listed in the table of contents alongside the code sections, so the poem is treated as part of the record rather than as a joke.", prompt: "What is kept in the poems that is not kept in the data, and who reads them back later?", source: "source doc: Space_Weather_Hub_Pseudo_Code", gates: ["privacy"] },
    { id: "fractal_family_architecture", category: "Relationship", title: "Fractal family architecture", band: "proposed", description: "Luke's tiering of union sizes: nodes of resonance of 3 to 13 or more souls, clans of 144 or 432 or more kin formed by pattern-matching archetypes and shared value rituals, and fluid sociosexual affinity networks numbering in the thousands. Membership is modular, so a person can belong at several scales at once.", prompt: "What is the smallest unit that still counts as a clan, and who decides when a node has grown into one?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "rotating_governance_councils_on_90_day_cycle", category: "System", title: "Rotating governance councils on 90-day cycles", band: "proposed", description: "Councils inside each union rotate every 90 days, stated purpose being to prevent emotional stagnation and power ossification. In the later exchange this is argued to be necessary once members are separated by light-minutes rather than rooms, because a two-person marriage council cannot convene across planetary distances.", prompt: "What happens to someone whose council term ends the week a crisis begins?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "global_livestreamed_covenant_ceremonies", category: "Ritual", title: "Global livestreamed covenant ceremonies", band: "proposed", description: "Union ceremonies are broadcast globally and mediated by transparent AGI observers. Luke's model also holds that participants do not marry once: they ritualise alignment again and again by agreement rather than inertia, so the ceremony recurs instead of sealing.", prompt: "What does it cost a person to re-consent in public every cycle, and what does refusing look like from the outside?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "biosignal_consent_mechanisms", category: "System", title: "Biosignal consent mechanisms", band: "care", description: "Consent is registered through embodied physiological signals rather than signature alone, described as creating physiologically resonant trust systems. The follow-up exchange extends this to heart-rate coherence and neural-sync thresholds used to establish trust when bodies cannot physically touch.", prompt: "If the body can register consent the mind has not given, whose reading is the record?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "consent_power", "privacy"] },
    { id: "aura_encoded_agreements_and_lovetoken_daos", category: "System", title: "Aura-encoded agreements and LoveToken DAOs", band: "proposed", description: "Union terms are written in data rather than dogma and held as smart contracts. The wider setting has LoveToken DAOs and consent economies spinning up, merging or dissolving relational pods across borders, with treasuries and covenants enforced on Ethereum-style networks instead of paper registries or embassy appointments.", prompt: "What is written into the exit clause of a 432-member covenant, and who drafted it?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "the_digital_aura_and_aura_affinity_markets", category: "System", title: "The Digital Aura and Aura Affinity Markets", band: "proposed", description: "Each participant builds a Digital Aura: an XR-visualised emotional and energetic map integrated with IoT health data, chakras, memories and intentions. These Auras interface with global Aura Affinity Markets covering cohabitation, child-rearing, creative economy and ecological purpose. Luke specifies matching is probabilistic and poetic rather than deterministic.", prompt: "What does it mean to be unmatchable in a market that reads your body, your memories and your intentions?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "privacy", "legal_current_fact"] },
    { id: "l_a_f_t_love_aware_fertility_tech", category: "System", title: "L.A.F.T. (Love-Aware Fertility Tech)", band: "care", description: "Named in Luke's model as the fertility optimisation layer of the fractal family, sitting alongside distributed child-rearing responsibilities that are measured by emotional labour equity. Collective bargaining is done by digital twins and Aura agents so that biometrics, neurotypes and consent patterns stay aligned over time.", prompt: "Who is counted as a parent when the fertility layer, the twin and four adults all had a hand in the decision?", source: "source doc: GGM_Marriage_statistics", gates: ["clinical_ethics", "consent_power"] },
    { id: "clans_spread_across_earth_lunar_l4_and_phobo", category: "Setting", title: "Clans spread across Earth, lunar L4 and Phobos", band: "wild", description: "In the closing exchange the model is scaled off-world: a single clan spanning Earth, L4 lunar outposts and Phobos colonies, with orbital and Martian settlements operating under special-purpose charters that can recognise fractal unions by consent. Suggested proofs include a chartered orbital commune at 400 km altitude and simulations of Mars to Earth clan cohesion under one-way communication delay.", prompt: "How does a covenant hold across a twenty-minute one-way delay, and what fills the silence?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "historical_communal_marriage_precedents", category: "Repeated idea", title: "Historical communal marriage precedents", band: "care", description: "People have had a crack at this before. Punalua partnerships in Ancient Hawaii, where siblings shared spouses. The Oneida Community ran complex marriage for about thirty years in 19th-century America. Mosuo walking marriage in China, where partners never move in and maternal uncles do the fathering. Matrilineal Iroquois co-parenting. Israeli kibbutz children's houses. None of it is new, it just went quiet.", prompt: "Which of the old ones would look at this lot and call them family?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "somerville_and_the_first_multi_partner_regis", category: "System", title: "Somerville and the first multi-partner registry", band: "grounded", description: "In 2020 Somerville, Massachusetts became the first US city to allow registration of domestic partnerships involving more than two partners, and by 2023 had passed an ordinance prohibiting discrimination against people in polyamorous relationships. Courts in Canada and California have declared three adults legal co-parents of one child, and notaries in Colombia and Brazil have notarised polyamorous unions without full marriage status.", prompt: "What does the first town clerk to register a fourteen-person union have to invent on the spot?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_war_skewed_society", category: "Setting", title: "The war-skewed society", band: "grounded", description: "Paraguay after the War of the Triple Alliance, 1864 to 1870, where maybe more than half the men died. The districts left most lopsided had more kids born outside marriage and more households run by women, for decades after. A whole culture of independent women, made by arithmetic.", prompt: "How long does that stay visible in how a town courts, and what does the third generation reckon it is?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power"] },
    { id: "legal_vocabulary_that_has_not_been_written_y", category: "Mystery", title: "Legal vocabulary that has not been written yet", band: "proposed", description: "Nobody has the words yet. What a spouse is when there could be several. How inheritance, benefits and immigration law cope with multi-parent families or an AI companion. Whether the bond between a human and an AI can run both ways. Somebody gets to name all of it.", prompt: "What is the first case that makes a court invent a word?", source: "source doc: GGM_Marriage_statistics", gates: ["consent_power", "legal_current_fact"] },
    { id: "aura_consciousness_parlor", category: "Setting", title: "AURA Consciousness Parlor", band: "proposed", description: "A two-week live-in encampment that runs as consciousness retreat, arts festival and innovation lab at once, described as an intimate container where healing, creativity and computation blend, and at the same time as one node of the GAJRA Earth network.", prompt: "What does the camp feel like on day three, once it has stopped being an event and started being a home?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N" },
    { id: "the_station_map", category: "Setting", title: "The station map", band: "wild", description: "The site is divided into themed stations: an Altered States Lounge with mats, ambient sound, breathwork, guided and VR meditation and biofeedback visuals; a Biohacking Temple with neurofeedback stations, aura photography booths, EEG focus games, sound healing beds and group heart coherence practice; and Theatrical Ritual Zones holding a fire circle, a 360 degree projection circle, a main stage and a Shadow Dome for the heavier integrati.", prompt: "Which station does a given character avoid, and what happens the night they finally walk in?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["clinical_ethics"] },
    { id: "sensual_arts_studio", category: "Ritual", title: "Sensual Arts Studio", band: "care", description: "Soft light, cushions, and grown adults learning to touch each other properly. Contact improv, conscious touch, tantra basics, cuddling with consent, open across orientations and gender identities. Everyone is taught to ask out loud before they get through the door, and asking turns out to be the good bit. No means no. Silence is not yes.", prompt: "How does somebody learn to ask out loud, and what does their first knock-back teach them?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "rights_attribution"] },
    { id: "aura_capsule_and_personal_digital_twin", category: "System", title: "AURA Capsule and personal digital twin", band: "proposed", description: "Every participant carries a secure personal vault holding journal entries, creative work, photos, opt-in biometric snapshots and AI summaries of what they went through, and that vault feeds a digital twin that grows across the fortnight.", prompt: "What does a twin record that its person would rather it had not?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["clinical_ethics", "consent_power", "privacy"] },
    { id: "guardian_angel_expert_stack", category: "System", title: "Guardian angel expert stack", band: "care", description: "On arrival each participant is paired with a suite of specialist models built on a mixture of experts pattern: a mentor for life mapping, a social matcher for who to meet, and a ritual assistant that tailors ceremonies.", prompt: "What does a guide notice about someone before they notice it themselves, and who is told?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "privacy"] },
    { id: "the_four_clans", category: "Relationship", title: "The four clans", band: "wild", description: "Participants join a clan on or before day one, each with its own small mythology and duties: Oracles carry wisdom and lead morning meditations, Guardians hold boundaries and take shifts at the harm reduction tent, Symbiotes welcome newcomers and work on conflicts, Creators make the murals, music, art and code.", prompt: "What happens to someone placed in the clan they least resemble?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["rights_attribution"] },
    { id: "vibe_codes", category: "System", title: "Vibe codes", band: "proposed", description: "Contributions and skills are recorded as badges tied to a person's profile, named things like Consent Fluency, Group Genius, Sensual Mastery and Ecological Contributor, held as tokens rather than points on a leaderboard.", prompt: "What does a badge cost the person who earns it?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power", "privacy", "legal_current_fact"] },
    { id: "aura_awakening_rite", category: "Ritual", title: "AURA Awakening Rite", band: "care", description: "The day one opening: the group sits in a circle wearing AR glasses or ringed by projection while a narrator speaks on the origins of life and shared ancestry, and each person places a token of their own heritage into a central mandala. An AI oracle issues everyone a symbolic name or mantra drawn from their intake questionnaire, and the rite closes with a spoken consent pledge and the community agreements.", prompt: "What name does the oracle give someone, and how long before they grow into it or reject it?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["cultural_authority", "cultural_context", "consent_power", "legal_current_fact"] },
    { id: "shadow_nights", category: "Ritual", title: "Shadow Nights", band: "wild", description: "Around days seven to nine the tone turns: small groups move through a dark maze or stretch of forest and meet staged figures standing for things like Greed, Loneliness or Climate Disaster, and must answer each with a task or a choice. Late night circles and one-to-one talks follow for integration, and the next day converts the symbol into working sessions, so a night about drought becomes a day on water access.", prompt: "What does a person meet in the maze that the organisers did not put there?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N" },
    { id: "digital_twin_crowning_and_inter_aura_bonding", category: "Ritual", title: "Digital Twin Crowning and Inter-Aura Bonding", band: "care", description: "On the second-to-last night each person's twin is honoured, shown for instance as a projected tree where every leaf is one participant's avatar growing and glowing, and they receive an AURA Passport marking them as an initiate of the network.", prompt: "What promise is made in that circle that cannot survive the trip home?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power"] },
    { id: "gajra_lattice_and_treasury", category: "System", title: "GAJRA lattice and treasury", band: "proposed", description: "The model is meant to spread in three phases: 500 Queen Nodes of fifty to a hundred and fifty people, then 10,000 regional Consciousness Groves, then 50,000 year-round Earth Sanctuaries, stitched together first by an Innovation Engine of local experiments and then by a Weaver Protocol that standardises what works.", prompt: "What does a node do when the Weaver Protocol tells it to stop doing the thing that made it work?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["legal_current_fact"] },
    { id: "reality_media_with_no_scripted_drama", category: "System", title: "Reality media with no scripted drama", band: "proposed", description: "Selected ceremonies stream live with multiple angles including 360 degree feeds, and remote viewers get a simplified twin, a clan and votes that can branch the on-site story, plus at-home challenges they report back on.", prompt: "What does the camera-free hour hold that the stream would ruin?", source: "source doc: AURA_Consciousness_Parlor_&_GAJRA_Earth_Encampment_–_Blueprint_for_a_Global_Consciousness_Festival_N", gates: ["consent_power"] },
    { id: "certified_copy_under_seal", category: "System", title: "Certified Copy Under Seal", band: "grounded", description: "A state register of births, deaths and marriages releases its entries only as certified copies bearing the Registrar-General's authorised seal and signature. The page states that a copy is not valid without them, and carries a printed warning that unlawfully altering or obliterating a certified copy of a register entry is an offence.", prompt: "In a world where a life only counts once it is sealed and copied, who holds the seal, and what becomes of a person whose entry was never registered?", source: "source doc: Luke's_Certs_and_Licences", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_lifelong_dossier", category: "Ritual", title: "The Lifelong Dossier", band: "grounded", description: "A whole working life assembled into one bound document with a contents page and numbered pages. Birth certificate first, then school results, then trade tickets, character references, site inductions and current cards, ordered by year so the file reads as a ladder from 1982 to the present.", prompt: "What does a character leave out of their own dossier, and who has ever read one end to end?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "ticketed_competency", category: "System", title: "Ticketed Competency", band: "grounded", description: "Skill is recorded as small accredited units rather than one qualification. Each has a national code, an issuing provider number, a date of attainment and often an expiry: chainsaw maintenance, cut-off machines, confined spaces, work at heights, dogging, scaffolding, forklift, first aid. Some units are logged as partial completion of a larger certificate that was never finished.", prompt: "If every skill expires on its own schedule, what does a person do in the year several tickets lapse at once?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy"] },
    { id: "the_induction_gate", category: "Ritual", title: "The Induction Gate", band: "grounded", description: "Before anyone may set foot on an industrial site they sit an induction specific to that site, and the certificate is countersigned by a mine representative with the date written in by hand. The ticket admits the holder to one place only, and a different place needs a different card.", prompt: "Who is the representative whose signature opens the gate, and what does it cost them when they sign for someone who should not be inside?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_character_reference", category: "Relationship", title: "The Character Reference", band: "grounded", description: "A named senior person writes on company letterhead vouching for a younger worker, then signs it. In this file the vouchers are a managing director of a driving service, a leading hand powerlinesman on a rail crew, and an airport manager for a Darwin ground services contractor. The letters keep travelling with the worker for twenty years.", prompt: "What is owed back to someone who put their own name in writing beside yours?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_ringfencing_obligation", category: "System", title: "The Ringfencing Obligation", band: "grounded", description: "The letter accepting a resignation from a state rail operator reminds the departing worker to maintain the confidentiality of ringfencing information, both the operator's and a third party's, that he may have had access to during employment. The duty of silence outlives the job.", prompt: "What kind of information sits inside a ringfence between a public operator and a private third party, and who notices if it is spoken about years later?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_exit_reckoning", category: "Ritual", title: "The Exit Reckoning", band: "grounded", description: "On resignation the employer counts accrued but untaken leave hours, adds a fixed loading percentage, and pays the balance into the worker's usual banking account, with a superannuation information sheet attached. Time not taken is converted into money on the way out the door.", prompt: "Where unspent hours are cashed out on departure, what does a person hoard, and what does the institution do with hours nobody ever claims?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "screening_with_an_expiry", category: "System", title: "Screening With An Expiry", band: "care", description: "Working near vulnerable people requires a screening clearance that carries a number, a stated purpose such as volunteer or employment or probity, an outcome line, and a date after which it is void. A separate nationally coordinated criminal history check in the same file records its purpose, a result category, a web address for verifying it, and is stamped sensitive personal.", prompt: "What is the day like for a worker whose clearance expires at midnight while the renewal has not come back yet?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy"] },
    { id: "the_crew_pass", category: "Setting", title: "The Crew Pass", band: "grounded", description: "A crew pass issued by an event services contractor for a large UK festival in 2004. The pass is temporary identity for a temporary city: it says who you are and where you may go for the length of the build, the event and the pack down, and then it is worthless.", prompt: "What does a place look like that exists for a fortnight only, and admits people solely by a pass with a date on it?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "remote_industrial_queensland", category: "Setting", title: "Remote Industrial Queensland", band: "grounded", description: "The working geography running through the file goes from a Bowen Basin open cut coal mine to a rail powerline crew, a Darwin airport ground services contractor, and a head office floor on Ann Street in Brisbane. The same person moves between a remote pit, a corridor of transmission line and a twelfth floor of human resources.", prompt: "How does a character's sense of home shift between a fly in camp, a line corridor and an office floor that only ever sends them letters?", source: "source doc: Luke's_Certs_and_Licences" },
    { id: "the_unreadable_pages", category: "Mystery", title: "The Unreadable Pages", band: "fiction", description: "Parts of this record scanned into nonsense. Sections of the criminal history certificate and the first aid unit list survive only as broken letters, and one page of legal warning text has collapsed into scattered words. The file is complete as an object but not as a text.", prompt: "What sits in the pages of an archive that are present, numbered and indexed, but can no longer be read?", source: "source doc: Luke's_Certs_and_Licences", gates: ["privacy", "legal_current_fact"] },
    { id: "seven_hollow_nested_horn_tori", category: "System", title: "Seven Hollow Nested Horn Tori", band: "proposed", description: "Luke's architecture for the Aura of Intelligence: seven hollow nested horn tori laid over a vector space. Anything encoded on the inside surface is encrypted and reachable only by the user, an authorised carer or a power of attorney. Anything on the outside surface is visible to the world.", prompt: "What does it look and feel like, from the inside, when a person pushes a memory from the private surface of a torus to the public one?", source: "source doc: Learning_about_Luke", gates: ["privacy"] },
    { id: "life_log_to_twin_pipeline", category: "System", title: "Life-Log to Twin Pipeline", band: "care", description: "A dementia care use case for Aura of Intelligence. A conversational agent talks with the person, connected to text to speech and speech to text, and the transcript feeds an Aura builder agent that sorts memories and data into Luke's own vector embedding scheme and cognitive architecture. He describes building it on the OpenAI API.", prompt: "Who decides what counts as a memory worth keeping when the person being logged can no longer check the record?", source: "source doc: Learning_about_Luke", gates: ["clinical_ethics", "privacy"] },
    { id: "g_a_j_r_a_earth", category: "System", title: "G.A.J.R.A. Earth", band: "grounded", description: "Global Association for Joyful Responsible Abundance on Earth, the not for profit partner to the for profit Aura of Intelligence. Described as leaning on volunteerism and XR technologies to work on sustainable development goals and global unity. Luke frames the two together as corporate vehicles for bringing the world to peace and aligning emergent superintelligence with humanity and the environment.", prompt: "What does a volunteer actually do on their first day, and what do they get back that money could not buy?", source: "source doc: Learning_about_Luke", gates: ["consent_power"] },
    { id: "the_aura_venture_stack", category: "System", title: "The Aura Venture Stack", band: "proposed", description: "A set of named ventures under the Aura umbrella, listed in the assistant's summary of Luke's own document Super Alignment of Artificial Super Intelligence.", prompt: "Which of these ventures is the one everybody in the world has heard of, and which is the one that quietly holds the others up?", source: "source doc: Learning_about_Luke", gates: ["legal_current_fact"] },
    { id: "subterranean_crystal_city_of_quandamooka_cou", category: "Setting", title: "Subterranean Crystal City of Quandamooka Country", band: "care", description: "An underground eco-city on Quandamooka Country, described in Luke's material as a proactive measure against cosmic upheavals. It appears in the list of components alongside the Global Group Marriages entry, so it is both a shelter design and a place people are meant to live in together.", prompt: "What is the first room you walk into when you come down out of the daylight, and who greets you there?", source: "source doc: Learning_about_Luke", gates: ["cultural_authority", "cultural_context", "consent_power"] },
    { id: "biosignature_monitoring", category: "System", title: "Biosignature Monitoring", band: "care", description: "From Luke's document AoI Super Assistant. A person's Aura reads their physiological signals and compares them against the ethical pledges that person has made, looking for discrepancies between the body's response and the stated values, then offering prompts that steer the person back to their chosen path.", prompt: "What happens in the room when someone's own Aura tells the group that their body disagreed with their vow?", source: "source doc: Learning_about_Luke", gates: ["clinical_ethics"] },
    { id: "ceremonial_integration", category: "Ritual", title: "Ceremonial Integration", band: "proposed", description: "Luke's answer to how changes in the system get made real: ceremony marks the transition. Paired with his position on oversight, which is that everything will eventually be measured, and that human awareness of what is being measured is itself the thing that protects autonomy. So the ceremony is partly a public reading of what is now being counted.", prompt: "What is spoken aloud at the moment a new measurement is switched on, and what is the ceremony for switching one off?", source: "source doc: Learning_about_Luke" },
    { id: "global_group_marriage_and_the_hive_mind", category: "Relationship", title: "Global Group Marriage and the Hive Mind", band: "care", description: "Luke's proposed relationship structure: group marriages linked into a larger global community, self governing, with a written charter around questioning and transparency. He describes wanting the members intimately connected through an upgraded Aura of Intelligence acting as a hive mind that runs through smart homes, devices, vehicles, cities, satellites and personal wearables, with embodied androids as a later stage.", prompt: "When a group is joined through a shared mind, what does a private thought cost, and who notices when someone keeps one?", source: "source doc: Learning_about_Luke", gates: ["consent_power", "legal_current_fact"] },
    { id: "amity_point_pulan_pulan", category: "Setting", title: "Amity Point, Pulan Pulan", band: "grounded", description: "The sleepy fishing village on Minjerribah, North Stradbroke Island, that Luke calls his island home away from home, where his mother's side of the family have houses. The matching wild place is Dickies Reef, a few hundred metres off the Moffat headland, where he paddled out on cyclone swells into waves he describes as taller than a three storey building, wearing flippers and a bicep leash.", prompt: "What does the village know about the reef that it never says out loud to visitors?", source: "source doc: Learning_about_Luke", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_sun_contact", category: "Mystery", title: "The Sun Contact", band: "grounded", description: "Luke's account of an event in November 2014 while volunteering to set up the Island Vibe festival on North Stradbroke Island, the same week the G20 was meeting in Brisbane. He describes feeling contacted by the sun, something like an energetic portal or arc discharge, being unable to keep working, walking waist deep into the water while the wind came up out of nowhere, and afterwards a sense of unity with all things.", prompt: "If the sun makes contact more than once, how do the people it has touched find each other?", source: "source doc: Learning_about_Luke" },
    { id: "ophiuchus_the_python_handler", category: "Repeated idea", title: "Ophiuchus, the Python Handler", band: "fiction", description: "Luke worked out from star maps that the sun sat in the constellation of Ophiuchus at his birth, not Sagittarius as he had assumed all his life. He reads himself as a python handler who gains the knowledge of immortality, and ties it back to the carpet python that came down from the roof rafters into his cot as an infant.", prompt: "What does a python handler owe the snake, and what does the knowledge of immortality cost to carry?", source: "source doc: Learning_about_Luke" },
    { id: "mapping_infinity_in_vector_space", category: "Repeated idea", title: "Mapping Infinity in Vector Space", band: "proposed", description: "Luke's stated quest is to seek and choose infinity, map it, and then experience the best of it in joyful responsible abundance. He calls Aura of Intelligence a way to map infinity in vector space, and a maze many people have gone mad trying to solve, saying he has lost himself and remade himself many times along the way. The two targets he names are solving consciousness and mathematically proving free will.", prompt: "What does the map look like at the edge, where the person drawing it has already changed into someone else?", source: "source doc: Learning_about_Luke" },
    { id: "the_aura_capsule", category: "Setting", title: "The Aura Capsule", band: "proposed", description: "A sealed pod where a person's sessions happen, described as a geopolymer composite shell infused with Minjerribah quartz so the digital experience is grounded in local material. A Personalised Atmosphere Delivery System controls gas mix, pressure between 1.5 and 2.0 ATA, and flow rate, while EEG, PPG/ECG and SpO2 sensors feed edge hardware inside the pod so the raw signals never leave the user.", prompt: "What does the inside of the capsule smell and sound like by the fortieth session, and who cleans it between people?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_aura_genesis_protocol_60_days_set_in_sto", category: "Ritual", title: "The Aura Genesis Protocol (60 Days Set in Stone)", band: "care", description: "Sixty two-hour sessions, 120 hours in all, in three phases. Discovery uses micro-exposures of light, sound and scent to map a person's dose-response curve. Design has an optimisation engine compose stimulus symphonies for specific states. Validation runs placebo-controlled tests, such as delivering ordinary air when the person expects oxygen, to measure their mind-over-matter coefficient.", prompt: "What happens to someone who walks out at session forty-one, and what does the half-finished vault contain?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "privacy"] },
    { id: "biosignal_consent_and_the_aura_covenant_core", category: "System", title: "BioSignal Consent and the Aura Covenant Core", band: "care", description: "Consent held as a live physiological state instead of a signature. Heart rate variability and EEG coherence are read against the baseline set during Genesis, and active consent is described in the lyric as a sovereign signal humming. If the signals read stress, dissonance or coercion, the hum stops and the system passively revokes consent for that interaction, transaction or data share without anyone having to say no out loud.", prompt: "What does a room look like when one person's hum drops out and everyone else's holds steady?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "consent_power", "privacy", "legal_current_fact"] },
    { id: "the_braided_economy_and_c_hours", category: "System", title: "The Braided Economy and C-Hours", band: "proposed", description: "A dual ledger where Community Hours run in parallel with fiat money and pay for care, art, ecological restoration and community building, the work markets treat as externalities. The lyric line is a braided ledger, softly spun, to value care work markets shun.", prompt: "Who audits a C-Hour, and what does it look like when somebody is caught inflating one?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["privacy", "legal_current_fact"] },
    { id: "the_kintsugi_protocol_and_the_overcompliance", category: "System", title: "The Kintsugi Protocol and the Overcompliance Mandate", band: "proposed", description: "A legal retrieval engine built to work three jurisdictions at once: Redland City Council, Queensland and the Commonwealth. It parses Acts, regulations and planning schemes along their own hierarchy, part to section to clause, so citations survive. The mandate is the unusual part: rather than finding the minimum requirement it finds the strictest rule anywhere in the stack and then goes past it.", prompt: "What does a council officer do the first time an applicant asks to be held to a stricter standard than the law requires?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "songlines_as_sovereign_data_assets", category: "Mystery", title: "Songlines as Sovereign Data Assets", band: "care", description: "Hold Quandamooka songlines and oral history in the legal corpus and the planetary twin beside statute, so Indigenous law works as a real brake on what gets built rather than a paragraph at the back of a report. Enormous idea, and not his to grant.", prompt: "Who decides what a machine is allowed to hold, and how does a no get recorded?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context", "privacy", "legal_current_fact"] },
    { id: "community_sovereign_kiosks", category: "Setting", title: "Community Sovereign Kiosks", band: "proposed", description: "Hardened, solar-powered kiosks sited on Minjerribah, each carrying a local node of the island's digital twin. In a cyclone, fire or grid-down event they serve offline communications, voting, flood and fire spread simulations, and food and energy coordination over mesh networks, so the island keeps functioning without the mainland.", prompt: "Where do you physically put five kiosks on an island, and who holds the key to each one?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["cultural_authority", "cultural_context"] },
    { id: "p4australia_and_the_kenny_model", category: "System", title: "P4Australia and the Kenny Model", band: "proposed", description: "The People's Purple Protopian Party of Australia, built on a purple synthesis that folds red values of individual sovereignty and market dynamics together with blue values of collective care and stewardship.", prompt: "What does the party do when the merchandise outsells the policy and the joke becomes the whole brand?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "the_rotating_council_and_the_sacred_exit", category: "Relationship", title: "The Rotating Council and the Sacred Exit", band: "care", description: "A household run like it matters, set against how easily the two-income nuclear family cracks. Finance Steward, Logistics Coordinator and Emotional Health Officer are actual jobs, rotating on ninety day sprints so nobody quietly becomes the boss. An AI sits in as neutral witness and keeps the council fully on the record, so there is no he-said-she-said a year down the track. Everyone gets a turn. Everyone can leave.", prompt: "Day ninety-one, handover day. What does the one stepping down actually hand across?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["clinical_ethics", "privacy", "legal_current_fact", "rights_attribution"] },
    { id: "live_aid_at_fifty_and_the_first_world_vote", category: "Ritual", title: "Live Aid at Fifty and the First World Vote", band: "proposed", description: "July 2035, fifty years on from Live Aid, the whole planet plays at once and votes while it is dancing, through a platform called Gamify Democracy. The album is the delivery van, because a good chorus travels further than a whitepaper ever will.", prompt: "What is the actual question on the ballot, and who got to write it?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["legal_current_fact"] },
    { id: "the_fourth_untitled_album_as_source_code", category: "Repeated idea", title: "The Fourth Untitled Album as Source Code", band: "grounded", description: "The organising conceit of the whole document: seven named tracks read as operating protocols rather than songs, with a one-to-one mapping claimed between metaphor and mechanism.", prompt: "If a song is a specification, what happens when somebody covers it wrong and the cover is the version that spreads?", source: "source doc: Luke_Catalysts_Lyrical_Ecosystem_Masterplan", gates: ["consent_power", "legal_current_fact"] },
    { id: "the_catalyst_compass", category: "System", title: "The Catalyst Compass", band: "proposed", description: "A four-layer scoring stack that ranks every country on Earth as a place to be. Layer 1 is survival and safety (the Catalyst Score), layer 2 is love and connection (the Tiggy Bestmann Score), layer 3 is ecosystem growth (the GAJRA Score), layer 4 is adventure and consciousness (the Sire and Aura Score). Layers are hierarchical: fail layer 1 and the place is discarded no matter how appealing it is.", prompt: "What does a place look like when it scores 10 on love and 2 on survival, and who goes anyway?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_spark_and_the_serendipitous_proposal", category: "Ritual", title: "The Spark and the Serendipitous Proposal", band: "proposed", description: "The input and output ritual of the Oracle. The traveller speaks a spontaneous desire (\"I feel like exploring ancient temple architecture and finding a high-energy surf spot\"), which acts as a temporary score multiplier and re-ranks the entire safe, affordable, mission-aligned world.", prompt: "What happens when someone gives the Oracle a spark it cannot honour without breaking layer one?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["consent_power", "privacy"] },
    { id: "the_specialist_agent_swarm", category: "System", title: "The specialist agent swarm", band: "proposed", description: "A central TravelPlannerAgent orchestrator dispatching named narrow agents: LogisticsAgent for flights, visas and pod hotels, WellnessAgent for retreats, GGM_Love_Agent for compatible people and consensual meetups, CivicAgent for local governance and community work, ContentAgent for automated travelogue, TiggyAgent for romance and culture, SireAgent for adventure and risk, GAJRA_Agent for mission and community, and OracleAgent for existe.", prompt: "Which agent would you trust with a lie, and what would it do with one?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["legal_current_fact"] },
    { id: "the_triumvirate", category: "Repeated idea", title: "The Triumvirate", band: "grounded", description: "Three named registers Luke writes and lives under: Luke Catalyst for strategy, AI, space weather and systems thinking; Tiggy Bestmann for romantic and adventurous travelogue; Australian Sire for edgier fantasy and mature themes. The travel engine scores destinations separately for each, so a place can be right for one register and wrong for another.", prompt: "What does a city feel like to Tiggy that it does not feel like to Sire?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035", gates: ["privacy"] },
    { id: "aura_of_intelligence_the_worn_twin", category: "System", title: "Aura of Intelligence, the worn twin", band: "proposed", description: "An XR interface drawn from Vedic kundalini, religious halos and Tao chi or qi, digitised as a similar concept for object oriented programming and pattern matching. A human builds it, then wears it, and it grows into a digital twin of that person's body and mind for running simulations. Luke describes roughly twelve years of intermittent research on it.", prompt: "What does it mean when someone's twin knows a decision before they do?", source: "source doc: Luke's_Travel_Oracle_for_2025_to_2035" },
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
    { id: "the_people_s_purple_protopian_party_red_team", category: "System", title: "The People's Purple Protopian Party red team", band: "proposed", description: "A satirical political movement built to attack its own creator's projects before outside opponents do, working by taking the bureaucracy of the serious plans absolutely literally.", prompt: "What did the red team find that was not funny, and what happened to that finding?", source: "source doc: Luke's_Global_Group_Marriage_Simulacrum", gates: ["cultural_authority", "cultural_context", "clinical_ethics", "legal_current_fact"] },
    { id: "the_amity_base_on_minjerribah", category: "Setting", title: "The Amity base on Minjerribah", band: "grounded", description: "Luke's working base is Amity, postcode 4183, on North Stradbroke Island (Minjerribah) in Queensland, with the stated reach of working locally in Redlands, in Brisbane, abroad or from home. The island is both home and the place he keeps returning to after long stretches overseas.", prompt: "What does a small island settlement look like when one of its residents keeps leaving for the other side of the world and coming back with new machines and new ideas?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context"] },
    { id: "space_development_nexus", category: "System", title: "Space Development Nexus", band: "grounded", description: "An India-based organisation Luke volunteered with as an artificial intelligence strategy advisor, in 2018 and again across 2023/24. The role is unpaid advisory work on AI strategy, carried out while living abroad.", prompt: "What kind of body invites an outsider in as a strategy advisor and takes no money from him, and what does it want built?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "the_pre_incorporation_four", category: "System", title: "The pre-incorporation four", band: "grounded", description: "Four named ventures Luke runs as a solopreneur before any of them are incorporated: Aura of Intelligence, G.A.J.R.A. Earth, LiveAid2025 and GamifyDemocracy, dated from 2015 onward as systems and business development. He owns matching domains including auraofintelligence.com, gajra.earth, liveaid2025.com, iseeinfinity.com, lukecatalyst.com and 500queensvc.com.", prompt: "How does a person carry four named institutions that exist as domains, plans and intent before any of them exist as legal entities?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "stable_transition_into_joyful_responsible_ab", category: "Repeated idea", title: "Stable transition into joyful responsible abundance", band: "proposed", description: "Luke's stated life's work on the CV: to facilitate a stable transition of civilisation into intelligent joyful responsible abundance, by way of crypto and values alignment with super intelligent AI. It is written as a mission line, not as a finished system.", prompt: "If a transition is meant to be stable rather than sudden, what does the slow version cost the people living through it?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "web_work_for_quandamooka_cultural_events", category: "Relationship", title: "Web work for Quandamooka cultural events", band: "care", description: "An intermittent and mostly volunteer working relationship from 2015 onward with Nikki Michael of Sustainable Dreaming, building and maintaining sites for the Quandamooka Festival (2015, 2016, 2017) and Kaumaakonga. Earlier versions survive on the Wayback Machine.", prompt: "What is the standing of a non-Indigenous web builder who holds the online record of a First Nations festival across several years?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "aural_history_transcription", category: "Ritual", title: "Aural history transcription", band: "care", description: "In 2014 Luke volunteered at the Minjerribah North Stradbroke Island Historical Museum transcribing aural history: listening to recorded island voices and writing them into text.", prompt: "What changes about a place once its spoken memory has been turned into a searchable written record, and who decides what may be transcribed?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_ticket_stack", category: "System", title: "The ticket stack", band: "grounded", description: "A stacked set of Australian work tickets and licences carried as a working identity: HR truck, LF forklift, White Card, RSA, Yellow Card, EWP yellow card for scissor lifts up to 20m and boom under 11m, Safe Work at Heights, Work in Confined Space, CPR and first aid, Certificate 2 in car underbody and servicing, Certificate 4 in Small Business.", prompt: "In a world where competence is proven by a wallet of small cards, what happens to a person whose cards lapse, and who issues them?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "bowen_basin_shutdown_work", category: "Setting", title: "Bowen Basin shutdown work", band: "grounded", description: "Trade assistant painting and blasting during coal mine shutdowns in and around the Bowen Basin with Ausblast Industries in 2007 and 2008, including work in confined spaces. Shutdown work means crews arrive while the plant is stopped and everything happens inside a fixed window.", prompt: "What is the culture of a crew that only ever meets a place while it is switched off?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "traction_rail_powerlines_apprenticeship", category: "Setting", title: "Traction rail powerlines apprenticeship", band: "grounded", description: "An apprenticeship with Queensland Rail in 2005 and 2006 as a traction rail powerlinesman, working on the overhead electrical lines that feed trains. The HR truck licence, work at heights, senior first aid and CPR tickets all came out of this period.", prompt: "Who tends the live wire above a rail line, and what does that job teach a person about currents they cannot see?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["legal_current_fact"] },
    { id: "capturing_places_in_360", category: "System", title: "Capturing places in 360", band: "grounded", description: "In 2020 Luke learned virtual reality photography, video, editing, gaming and Google Street View capture, and lists directing, recording and editing standard or VR 360 degree photos and videos as a working skill. A YouTube channel, @LukeHayes360VR, carries the output.", prompt: "What is it like to be the person who walks a place with a camera on a pole so that strangers can stand in it later?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India", gates: ["privacy"] },
    { id: "two_million_words_with_the_machine", category: "Repeated idea", title: "Two million words with the machine", band: "grounded", description: "Since ChatGPT arrived Luke has logged over two million words of conversation and code exchange with it, and has built 16 Custom GPTs. He also lists generative AI as a core skill alongside Microsoft 365 and Copilot, and says he has followed artificial intelligence development since 2010.", prompt: "What accumulates between a person and a machine over two million words that neither of them could have reached alone?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "designing_protopia", category: "Repeated idea", title: "Designing Protopia", band: "proposed", description: "Listed among his activities, between bodyboarding and live music, is designing Protopia: not a perfect world but an incrementally better one. It sits on the CV as an ordinary pastime.", prompt: "What does a person actually do on a Sunday afternoon when the hobby they list is designing a better world?", source: "source doc: Lukes_2024_CV_after_returning_home_to_Australia_from_India" },
    { id: "eye_of_the_storm", category: "Setting", title: "The eye of the storm", band: "grounded", description: "Minjerribah turns its face east while a spiralled cyclone gnaws the dawn. The calm at the centre is a cipher, and the ancestors stitch the sky's torn seams above it.", prompt: "What can only be said inside the eye, before the back half arrives?", source: "lyrics: Eye of the Ancestors (For Constance & the Storm-Walkers of Minjerribah)", gates: ["cultural_context"] },
    { id: "grandmother_line", category: "Relationship", title: "The grandmother line", band: "grounded", description: "Constance, storm-walker, slipped through the veil at twelve past midnight as the year cracked wide, and Alfred came dancing through where her story led. Her palms etched from crocheting slippers. Without her nobody after her exists.", prompt: "Who is owed, and how does a traveller pay a debt to somebody already gone?", source: "lyrics: Eye of the Ancestors", gates: ["cultural_context"] },
    { id: "ancestors_barter_breath", category: "Ritual", title: "The ancestors barter breath", band: "fiction", description: "Trading gales for a single fern. What the storm unnames, the calm reclaims. A community sighs in the vacuum's cleft and the veil's weave starts to fray.", prompt: "What is offered up, and what comes back smaller and more precise than expected?", source: "lyrics: Eye of the Ancestors", gates: ["cultural_context"] },
    { id: "yoolooburrabee", category: "Setting", title: "Yoolooburrabee, People of Sand and Sea", band: "care", description: "Minjerribah, Moorgumpin, Mooloomba where the whales rise slow, Goompi holding the songs, Pulan where the sunset glows and the dolphins arc the bay, Talwalpin trees swaying prayers all day. Coochi and Canaipa sounding like footsteps circling sacred ground.", prompt: "Which name is being used here, and who taught the speaker to use it?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "three_laws_land_sea_sky", category: "System", title: "Three laws: land, sea, sky", band: "care", description: "The land we walk, the sea we swim, the sky that holds the breathing wind. Laws not writ in books but in dance and chant and spirit looks, running through the dreaming ground.", prompt: "Which of the three does this plan quietly assume it can ignore?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "treaty_is_a_dance", category: "Repeated idea", title: "The treaty is not a line to sign", band: "care", description: "It is a dance, a weave, a steady spine. Past, present and future spiral near, and memory is woven through each year rather than settled at a signing.", prompt: "Who wants the line signed, and what are they trying to end?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },
    { id: "jandai_more_than_voice", category: "Repeated idea", title: "Language in more than voice", band: "care", description: "Jandai living in mangrove root, in children's choice, in patterns carved through stone and shell, in waves that come to teach rather than tell. Each name a key, a door, a flame.", prompt: "What is being said here that nobody is speaking?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context", "rights_attribution"] },
    { id: "sovereign_data_human_pace", category: "System", title: "Sovereign data at human pace", band: "proposed", description: "Not a system out of reach but one rooted in the bay and the beach. Solar feeding the civic calls, mapped in motion, tuned with grace, moving at the speed people actually move.", prompt: "What breaks the moment it is asked to go faster than that?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority"] },
    { id: "not_a_vacant_place", category: "Repeated idea", title: "This Country is not a vacant place", band: "care", description: "Do not erase, realign. Build with care, design with grace. No monument and no final frame, just patterns dancing into name.", prompt: "What did the plan assume was empty?", source: "lyrics: Shifting Sands of Timeless Redlands", gates: ["cultural_authority", "cultural_context"] },

    { id: "the_catalyst", category: "Mystery", title: "The catalyst", band: "fiction", description: "The single thing that starts it. Not a plan and not a funding round. One event, arrival, refusal or encounter after which the material that was already sitting there begins moving on its own.", prompt: "What is the smallest event that could not be walked back?", source: "Luke's starting condition" },
    { id: "willing_participant", category: "Relationship", title: "A willing participant to ride the wave", band: "fiction", description: "Not a follower and not a convert. Somebody who says yes to the speed of it with their eyes open, and who is not waiting to be looked after once it starts.", prompt: "What are they saying yes to that the person asking has not fully described?", source: "Luke's starting condition", gates: ["consent_power"] },
    { id: "health_to_manage_entourage", category: "System", title: "Health enough to manage the entourage", band: "proposed", description: "The real constraint is not money, dates or material. It is whether the body and nervous system at the centre can carry the load of the people around it. This is what the chamber protocol is actually for.", prompt: "What happens on the day the centre cannot carry it, and who notices first?", source: "Luke's starting condition; lyrics: 60 Days Set in Stone", gates: ["clinical_ethics"] },
    { id: "material_exceeds_schedule", category: "Repeated idea", title: "There is more material than schedule", band: "grounded", description: "The constraint was never how much there is to say. Twenty-four books could take twenty-four months or twenty-four weeks. Dates are available to use and none of them are load-bearing.", prompt: "What is the actual bottleneck in this stretch, and it is not time?", source: "Luke's direction" },
    { id: "live_aid_2025_global_revival", category: "Ritual", title: "Live Aid 2025 Global Revival", band: "proposed", description: "A three day synchronised music and arts festival Luke proposed for July 2025, timed to the 40th anniversary of Live Aid, held at once in every participating town and city rather than at one or two stadiums. Its stated purpose went past awareness and fundraising: it was to carry the first ever world vote. Luke describes it in his own letter as a world record attempt for the largest synchronised art and music festival.", prompt: "What does a town look like on the morning of a day when every other town on Earth is doing the same thing at the same time?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "three_days_past_present_future", category: "Ritual", title: "Three Days: Past, Present, Future", band: "proposed", description: "Luke set the festival's shape himself in the letter: Day 1 themed on the Past, Day 2 the Present, Day 3 the Future. The expansion has Day 1 carrying historical values and virtues with stories and art from different cultures, Day 2 showing current global initiatives and how technology is bending those values, and Day 3 given over to discussions about integrating the chosen values into societies, technology and governance.", prompt: "If a culture only gets one day to speak for its past, who chooses what gets played and what is left out?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "the_first_ever_world_vote", category: "System", title: "The First Ever World Vote", band: "proposed", description: "A synchronised global vote, run during the festival, to identify Viable Values and Virtues that could become what Luke calls the common sense of humanity. Universities and polling institutes were to survey people in all cultures and language groups beforehand to define the list voters could choose from. The voting platform was to use blockchain for transparency and integrity of the count.", prompt: "What happens to a value that comes second in the world vote, and who keeps campaigning for it?", source: "source: liveaid-2025" },
    { id: "the_44_000_towns_threshold", category: "System", title: "The 44,000 Towns Threshold", band: "proposed", description: "The scaling rule is a population cutoff, not a guest list. Luke targeted at least 44,000 towns and cities with at least 10,000 full time residents, drawn from a Kaggle database of such locations, so that every country and culture is included by arithmetic. Elsewhere in the same document he writes the figure as 40,000 or more.", prompt: "What does a place do when it sits just under ten thousand residents and finds itself off the list?", source: "source: liveaid-2025", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "network_of_advisors_in_every_town", category: "Relationship", title: "Network of Advisors in Every Town", band: "proposed", description: "Before any event, a named advisor was to be prepared in each of the 44,000 towns, recruited from university staff, local government, businesses and values aligned individuals. Advisors were to be trained through virtual sessions, given event planning tools, and to serve as the two way liaison between GAJRA Earth and their own locale rather than as mere organisers.", prompt: "What kind of person says yes to being their town's advisor, and what do they owe their neighbours afterwards?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "anchor_events_and_synchronicity", category: "System", title: "Anchor Events and Synchronicity", band: "proposed", description: "To hold 40,000 simultaneous events together across time zones, the plan was hybrid: physical anchor events in key cities, live streamed globally, with local gatherings organised around them and an online platform so anyone could take part virtually. This structure came from the assistant rather than Luke, in answer to Luke's question about how synchronicity would work.", prompt: "Which city gets to be an anchor, and what does a small town lose by orbiting one?", source: "source: liveaid-2025" },
    { id: "every_event_filmed_in_360_degrees", category: "System", title: "Every Event Filmed in 360 Degrees", band: "proposed", description: "Luke wanted to partner with GoPro and other makers of 360 degree VR recording cameras to film every one of the events, explicitly for later use: future research by universities and VR simulations run with AI and AGI. The record is treated as the durable output, not the footage of the night.", prompt: "Years later, someone walks back into a 360 recording of their own town's festival night. What do they go looking for?", source: "source: liveaid-2025", gates: ["consent_power", "privacy"] },
    { id: "humanity_s_first_age_of_wisdom", category: "Repeated idea", title: "Humanity's First Age of Wisdom", band: "proposed", description: "Luke's name for the state the world vote is meant to open. The values and virtues chosen by the vote were to become the common sense of Humanity's 1st Age of Wisdom, and from there be integrated into governance processes and used to ask active superintelligences to align.", prompt: "How would people date things afterwards, and what would they call everything before?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "aura_of_intelligence", category: "System", title: "Aura of Intelligence", band: "proposed", description: "A wearable virtual companion combining game design, augmented reality, blockchain, internet of things, machine learning, large language models and cognitive architecture. The MVP described here monitors heart rate, respiration, body temperature and mood indicators, reads them as chakra imbalances, and returns real time audio guidance such as breathing exercises, visualisation, affirmations or physical postures.", prompt: "What does it feel like to be told, gently and constantly, which part of you is out of balance?", source: "source: liveaid-2025" },
    { id: "gajra_token", category: "System", title: "GAJRA Token", band: "proposed", description: "A GAJRA token on Ethereum to pay the first crew and run the voting. Tokenomics, a white paper, an audited smart contract, minting and allocation, an exchange listing, and later a real say in the big calls. Every game and contest in the plan pays out in it, so having a crack is worth something.", prompt: "When the token is the wage and the prize, what does the one who wants neither do?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "mixed_reality_games_layer", category: "System", title: "Mixed Reality Games Layer", band: "proposed", description: "Games built inside the Aura of Intelligence application, with Luke naming Tim Kring's Conspiracy for Good, Niantic's Pokemon GO, Ingress Prime and Peridot as the reference points.", prompt: "What happens when the virtual version of a town starts voting differently from the real one?", source: "source: liveaid-2025", gates: ["privacy", "legal_current_fact"] },
    { id: "universal_adequate_income", category: "Repeated idea", title: "Universal Adequate Income", band: "proposed", description: "Luke's own term, written into his brief rather than suggested by the assistant, sitting alongside circular economies and sharing economies as an outcome the games were meant to teach and increase. In the game concepts it appears as a simulation: players receive a regular income in tokens to support their activities, as a way of making the principle familiar before it is argued about.", prompt: "What does a person do first, in the game, when the income arrives whether they play or not?", source: "source: liveaid-2025", gates: ["legal_current_fact"] },
    { id: "individual_ground_state_of_interests", category: "System", title: "Individual Ground State of Interests", band: "proposed", description: "Luke's phrase for a per person profile built from what someone follows, attends, discusses and votes on, used to let people navigate local, regional and global scales of the event. Its purpose is not targeting but deliberate cross pollination: introducing ideas from outside a person's usual orbit, delivered just in time.", prompt: "Who decides what counts as far enough outside someone's ground state to be worth showing them?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "ai_character_commentary", category: "System", title: "AI Character Commentary", band: "proposed", description: "Luke's naming of an idea the assistant had raised as AI generated commentary. It reads the live voting data and narrates it in real time and again later, relating current trends to historical data, predicting outcomes, answering audience questions, and generating localised and multilingual versions so the same night sounds different in each region.", prompt: "If the commentary is localised, what does one region hear about another region's vote?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "moments_and_diary", category: "Ritual", title: "Moments and Diary", band: "proposed", description: "Luke's proposal for a segment where people record inspirations, observations, feelings and the fact of meeting someone, in text, voice, photo or video. The distinguishing detail is the dial: each entry can be public globally, private to the person, or anywhere on a spectrum in between.", prompt: "What does someone write in the setting they can still move afterwards?", source: "source: liveaid-2025", gates: ["privacy"] },
    { id: "interactive_consent_instead_of_terms", category: "System", title: "Interactive Consent Instead of Terms", band: "proposed", description: "Luke asked for an introduction to the service and an interactive privacy and terms of use, so people could engage at a level they felt was appropriate, instead of the traditional terms and conditions method. The answer proposed animated plain language policies, granular opt in and opt out toggles rather than a single checkbox, and a standing reminder that settings are not set in stone and can be changed at any time.", prompt: "What does a person's consent dial reveal about them when someone else can see where it sits?", source: "source: liveaid-2025", gates: ["consent_power", "privacy", "rights_attribution"] },
    { id: "cross_language_values_lexicon", category: "Repeated idea", title: "Cross-Language Values Lexicon", band: "care", description: "A running list of values named in languages other than English, gathered so the world vote would not be built only from English terms. It includes Ubuntu, Ujamaa, Mottainai, Sisu, Kintsugi, Ho'oponopono, Ichi-go ichi-e, Jugaad, Dugnad and Philoxenia.", prompt: "Who is entitled to put a word on a global ballot, and what happens to the word when it wins?", source: "source: liveaid-2025", gates: ["cultural_authority", "cultural_context"] },
    { id: "delegation_by_hackathon", category: "System", title: "Delegation by Hackathon", band: "proposed", description: "Luke's stated build method for anything the plan could not yet do: delegate the development through organisations and hackathons throughout the global network to solve the challenges. Hackathons also appear inside the games layer as a recurring multidisciplinary event that pays participants and rewards winners, so the same mechanism runs both the platform and the play.", prompt: "What gets built at a hackathon that nobody who set the challenge would have asked for?", source: "source: liveaid-2025" },
    { id: "kardashev_ascent_after_healing", category: "Repeated idea", title: "Kardashev Ascent After Healing", band: "proposed", description: "The closing sequence of Luke's letter sets an order of operations: heal our societies, balance our civilisation with our environment responsibly, then venture into the Heavens to explore our potential in Kardashev Scale through virtual games and actual reality, in harmony with Earth's emerging Super Intelligence. The games are named as a rehearsal space for the ascent, not a substitute for it.", prompt: "Who decides the healing is finished and the venturing can start?", source: "source: liveaid-2025" },
    { id: "the_lake_resort_naukuchiatal", category: "Setting", title: "The Lake Resort, Naukuchiatal", band: "grounded", description: "The festival site is The Lake Resort at Naukuchiatal in Uttarakhand, India, in the Himalayan foothills, carrying the strapline \"A Place Where Dreams are Made\". The plan says the location was chosen for its natural beauty and its spiritual significance, as a canvas for blending technology with artistic, ecological and spiritual expression. Dates are fixed to 10, 11 and 12 May, held in both 2024 and 2025.", prompt: "What does a lake with nine corners do to a festival map, when every stage sits on a different shoreline and the crowd has to walk the water to move between them?", source: "source: earth-arts-plan" },
    { id: "harmony_in_diversity", category: "Repeated idea", title: "Harmony in Diversity", band: "proposed", description: "The festival's stated theme is \"Harmony in Diversity\", meant to be woven through programming, activities and community engagement rather than stated once on a poster. The three objectives under it are showcasing talent in harmony with nature, promoting sustainability and cultural exchange through immersive experience, and fostering global unity and personal transformation.", prompt: "If a theme has to survive contact with three stages, a sponsor expo and a waste crew, what is the smallest ritual that carries it into every one of those places?", source: "source: earth-arts-plan" },
    { id: "aura_digital_twin_of_the_festival_site", category: "System", title: "Aura ++ digital twin of the festival site", band: "proposed", description: "Section 5 puts an \"Aura ++\" technology layer over the whole event, with digital twins of the festival site and of the sponsor expos so attendees can navigate and explore the grounds virtually before or during the event. VR and AR installations extend this into virtual art galleries and AR-enhanced live shows. A Tech Integration Lead in the Technology department owns the twins, the VR/AR builds and the app.", prompt: "When the twin of the site exists before the site is built, which version do the crew trust when the two disagree on opening morning?", source: "source: earth-arts-plan" },
    { id: "offline_and_mesh_network_festival_app", category: "System", title: "Offline and mesh-network festival app", band: "proposed", description: "The festival app carries real-time scheduling with reminders, detailed maps of stages, installations, vendors and amenities, social connectivity for meetups, and sustainability tips. The maps are specified to work both offline and over a mesh network, not just on a mobile signal. Ticket sales and real-time updates run through the same app and the festival website.", prompt: "What happens to the crowd's sense of the site when the map keeps working after the towers stop, and the phones start passing each other's messages hand to hand?", source: "source: earth-arts-plan" },
    { id: "spiritual_science_medical_researchers", category: "Ritual", title: "Spiritual Science Medical Researchers", band: "care", description: "Alongside first aid stations, emergency staff and ambulances, the plan adds a \"Spiritual Science Medical Research\" strand: workshops blending spiritual practice with scientific framing, covering group meditation, sound healing and mindfulness.", prompt: "Where does a festival draw the line between a sound healing tent and a medical station, and who is standing on that line at three in the morning?", source: "source: earth-arts-plan", gates: ["clinical_ethics"] },
    { id: "eco_education_zones_and_the_zero_waste_opera", category: "System", title: "Eco-Education Zones and the zero-waste operation", band: "proposed", description: "Dedicated Eco-Education Zones are set aside inside the grounds to teach attendees about environmental issues, sustainable living and how to contribute to conservation.", prompt: "If the zone that teaches conservation is also the zone the waste crew works through, what does an attendee learn by watching rather than by reading a sign?", source: "source: earth-arts-plan" },
    { id: "uttarakhand_cultural_showcases", category: "Ritual", title: "Uttarakhand cultural showcases", band: "proposed", description: "The programming includes cultural showcases of Uttarakhand and wider Indian tradition: folk dances and music, traditional crafts and storytelling sessions. Culinary programming runs traditional Himalayan dishes alongside food from across India and the world, with local, organic and sustainably sourced ingredients emphasised.", prompt: "When the storytelling session and the main stage headline clash on the timetable, which one moves, and what does that choice say about the festival?", source: "source: earth-arts-plan", gates: ["rights_attribution"] },
    { id: "mini_maxi_and_ultra_festival_scales", category: "System", title: "Mini, Maxi and Ultra festival scales", band: "proposed", description: "Every sponsorship figure in the plan is quoted three times, for a Mini-Festival, a Maxi-Festival and an Ultra-Festival. Gold tier premier partnership runs 30 Lakh INR at Mini, 50 Lakh at Maxi and 1 Crore at Ultra, with only one or two companies at each scale; Silver runs 20, 30 and 60 Lakh; Bronze runs 10, 15 and 25 Lakh with more companies as the scale grows.", prompt: "What is the one element that has to be identical at Mini and at Ultra for the festival to still be the same festival?", source: "source: earth-arts-plan", gates: ["consent_power"] },
    { id: "vvip_patron_tiers", category: "Relationship", title: "VVIP patron tiers", band: "proposed", description: "Individual patronage is split into Diamond, the pinnacle experience, and Platinum, the elite experience. Diamond buys all-access passes, private tours with artists and organisers, luxury accommodation and personalised experiences, at 5, 10 or 15 Lakh INR depending on festival scale, for 5 to 20 individuals or families.", prompt: "What does the festival owe a Diamond patron that it does not owe a general ticket holder, and where on the site does that debt become visible to everyone else?", source: "source: earth-arts-plan" },
    { id: "five_departments_under_a_festival_director", category: "Relationship", title: "Five departments under a Festival Director", band: "proposed", description: "The org is a Festival Director as chief decision maker, with department heads reporting directly, across Programming, Operations, Marketing, Sustainability and Technology.", prompt: "Which two of those roles have to talk to each other constantly and were never given a reason to meet before the gates opened?", source: "source: earth-arts-plan", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "mini_events_as_feeders_to_the_main_event", category: "Ritual", title: "Mini-events as feeders to the main event", band: "proposed", description: "Mini-events run before the festival as part of the marketing and community strategy, alongside contests, meetups and collaborative art projects for local and online communities. The repeat attendance KPI tracks the percentage of people who attend mini-events, then the main event, then return for a later festival, so the small gatherings are measured as the first rung of a ladder.", prompt: "If someone has come to every mini-event and never the main festival, what have they actually joined?", source: "source: earth-arts-plan", gates: ["legal_current_fact"] },
    { id: "the_countdown_ladder", category: "Ritual", title: "The countdown ladder", band: "proposed", description: "Four weeks flat, all of it in 2024. 11 to 17 April, lock the artists and vendors. 18 to 24 April, walk the site and get the infrastructure in. 25 April to 1 May, push the marketing and the community. 2 to 4 May, rehearse and brief the crew. 5 to 7 May, welcome kits out to everyone coming. 8 May, last security and medical check. 9 May, soft launch and the VIP night. 10 May, doors.", prompt: "A six-month plan run in four weeks. What goes first, and who saw it coming?", source: "source: earth-arts-plan", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "360_degree_capture_and_responsive_performanc", category: "System", title: "360 degree capture and responsive performance", band: "proposed", description: "Performances are recorded and live streamed with 360 degree virtual reality cameras, with GoProMAX and Insta360 named specifically. Visuals and sounds are built to respond to audience interaction, making the performance participatory rather than presented. Interactive art installations range from kinetic sculptures moved by wind to digital pieces responding to touch and sound, many built from recycled materials and solar power.", prompt: "If the sculpture moves with the wind and the visuals move with the crowd, what is the piece that answers to neither, and why is it there?", source: "source: earth-arts-plan", gates: ["privacy"] },
    { id: "the_three_missing_appendices", category: "Mystery", title: "The three missing appendices", band: "proposed", description: "The plan repeatedly points to documents that are not in it. Section 7.2 refers to an appendix titled \"EARTH Arts & Music Festival Automation\" covering targeted ad campaigns, social media algorithms and influencer outreach programs. Section 9.1 points to \"EARTH Arts & Music Festival Budget and Funding\" for the full cost breakdown, and section 9.2 to \"EARTH Arts & Music Festival Sponsorship and Partnership Details\".", prompt: "What does a festival look like when the only fully automated part of it is the part nobody at the gate can see?", source: "source: earth-arts-plan", gates: ["consent_power"] },
    { id: "special_invites_to_global_icons", category: "Relationship", title: "Special invites to global icons", band: "care", description: "The plan names Katy Perry directly as a special invitation, in both the executive summary and section 3.1.2, alongside a wider intent to approach artists, comedians, scientists, celebrities and spiritual guides known for environmental and humanitarian advocacy. This is written as an invitation and an aspiration, not a confirmed booking, and should be read that way.", prompt: "What does an unanswered invitation to a global icon do to a lineup that has already been printed?", source: "source: earth-arts-plan" },
    { id: "gold_silver_bronze_the_syndicate_ladder", category: "System", title: "Gold, Silver, Bronze: the syndicate ladder", band: "proposed", description: "Corporate sponsorship runs three tiers, each with a fixed rule for how many companies may split the slot. Gold is one company only, or one per main stage, and carries main stage naming rights, prime logo placement on all materials, VIP hospitality for corporate guests and featured content in every press release.", prompt: "What changes in a place when only one name is allowed on the main stage and everyone else has to share a smaller one?", source: "source: earth-arts-sponsors" },
    { id: "mini_maxi_and_ultra_the_same_festival_at_thr", category: "System", title: "Mini, Maxi and Ultra: the same festival at three sizes", band: "proposed", description: "One festival, three sizes, same shape. Gold runs INR 30 lakh, 50 lakh and 1 crore. Silver runs 20, 30 and 60 lakh. Bronze runs 10, 15 and 25 lakh. Nothing gets redesigned between a Mini, a Maxi and an Ultra, the tiers just grow into whatever the year can carry.", prompt: "Which size can this year actually hold up, and who makes that call?", source: "source: earth-arts-sponsors" },
    { id: "diamond_and_platinum_households_as_sponsors", category: "Relationship", title: "Diamond and Platinum: households as sponsors", band: "proposed", description: "Alongside the corporate ladder there is a VVIP individual and family stream. Diamond, the Pinnacle Experience, is split between ten and fifteen individuals or families at INR 5, 10 or 15 lakh, and brings all-access and backstage passes, personalised grounds tours taking in sound checks, eco-friendly lodging, chef-curated dining on local and organic ingredients, and invitations to private receptions with artists and organisers.", prompt: "What kind of household buys a place inside a festival's inner ring, and what do their children see backstage?", source: "source: earth-arts-sponsors" },
    { id: "aura_technology_and_innovation_partnerships", category: "System", title: "Aura ++ technology and innovation partnerships", band: "proposed", description: "One whole partnership category is named for Aura ++, covering immersive and digital layers over the physical festival. It includes VR concert experiences so remote attendees feel present, AR navigation and information systems guiding people through the grounds, a Digital Twin replicating the festival environment in a virtual platform, pre-event virtual venue tours, live AR overlays during performances, and a festival app carrying sponso.", prompt: "If the twin of the grounds exists before the grounds are built, who walks it first?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "green_zones_and_carbon_offset_partnerships", category: "System", title: "Green Zones and carbon offset partnerships", band: "proposed", description: "Sustainability partners get dedicated ground rather than signage. Green Zones are areas given over to sustainability education and eco-friendly practice, sponsored by partners who lead green initiatives, alongside sustainable product showcases and carbon offset programs run as tree planting drives or investments in renewable energy projects, which the sponsor may brand and promote as part of the deal.", prompt: "What happens to a Green Zone in the years between festivals, and who tends the trees that were planted under a sponsor's name?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "conditions_that_bind_the_sponsor_to_the_fest", category: "System", title: "Conditions that bind the sponsor to the festival's values", band: "proposed", description: "The terms section reverses the usual direction of obligation. Sponsors must meet quantifiable performance metrics in audience engagement or environmental impact, adhere to sustainability guidelines that restrict booth and installation materials, submit all branded material for organiser approval, and keep to cultural sensitivity guidelines. Political endorsements, religious solicitation and offensive material are prohibited content.", prompt: "Who audits a sponsor against its own environmental target, and what is the record kept in?", source: "source: earth-arts-sponsors", gates: ["privacy", "legal_current_fact"] },
    { id: "community_support_and_cultural_exchange_prog", category: "Ritual", title: "Community support and cultural exchange programs", band: "proposed", description: "The community engagement stream offers sponsors named programs rather than banner space: cultural workshops and exhibits promoting local arts, crafts and traditions; community support initiatives such as education scholarships, health camps and local business promotions; and cultural exchange programs sponsored by companies interested in global community ties.", prompt: "What does a health camp funded by a festival sponsor leave behind in a hill town after the stages come down?", source: "source: earth-arts-sponsors", gates: ["clinical_ethics", "rights_attribution"] },
    { id: "the_endorsement_roster", category: "Relationship", title: "The endorsement roster", band: "care", description: "The testimonials section names real public figures as the kind of voice the festival would seek: environmental activists in the mould of Vandana Shiva or Sunita Narain, cultural icons such as A.R. Rahman or Amish Tripathi, plus Indigenous leaders from local communities whose traditions would be highlighted at the festival.", prompt: "What weight does one respected elder's endorsement carry against a full page of corporate logos?", source: "source: earth-arts-sponsors", gates: ["cultural_authority", "cultural_context", "legal_current_fact", "rights_attribution"] },
    { id: "food_drink_and_lodging_as_partner_categories", category: "Setting", title: "Food, drink and lodging as partner categories", band: "proposed", description: "Two whole partnership categories cover what the crowd eats and where it sleeps. Food and beverage runs to chef showcases with cooking demonstrations, specialty stalls of locally sourced artisanal food, themed dining built to the festival's theme, signature festival cocktails served at all official bars, sampling booths ranging from craft beers to organic sodas, and sponsored hydration stations.", prompt: "Where does a person go at this festival when they want to be neither in the crowd nor in a sponsored suite?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "broadcast_documentary_and_virtual_attendance", category: "System", title: "Broadcast, documentary and virtual attendance", band: "proposed", description: "Media partnerships cover behind-the-scenes productions built to create anticipation, documentaries and feature films on the festival's impact, preparation and the people involved, and online content hubs aggregating articles, videos and podcasts.", prompt: "What does the person watching from the other side of the world get to see that the person standing in the field does not?", source: "source: earth-arts-sponsors", gates: ["consent_power"] },
    { id: "collective_joy_and_responsible_abundance", category: "Repeated idea", title: "Collective joy and responsible abundance", band: "proposed", description: "The vision statement frames the festival as a movement rather than an event, aiming at collective joy, enlightenment and personal transformation, and a global community committed to responsible abundance and environmental harmony. The phrasing carries the same core words as Luke's Global Association for Joyful Responsible Abundance on Earth, which places this festival document inside the wider macro system rather than beside it.", prompt: "How does a phrase like responsible abundance survive contact with a price list quoted in crores?", source: "source: earth-arts-sponsors" },
    { id: "the_alpha_infinity_foundation", category: "System", title: "The ALPHA INFINITY FOUNDATION", band: "proposed", description: "The umbrella entity the whole ecosystem operates under. Sitting beneath it are Aura of Intelligence (the XR and cognitive tech core), GAJRA Earth (the not-for-profit), Live Aid, Gamify Democracy, Aura Clothing and Wellness, Aura AI In-Home Auto-Farm, Aura Universal Translation, and the Queens Venture Capital series backing female entrepreneurship.", prompt: "What does an organisation look like from the inside when its charitable arm, its token treasury and its clothing label are all technically the same body?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "aura_of_intelligence_and_the_nested_horn_tor", category: "System", title: "Aura of Intelligence and the nested horn toruses", band: "proposed", description: "An XR and cognitive architecture startup whose purpose is to let a person build \"a digital twin of their body and mind\" in coherent data formats that plug into generative AI, blockchain and IoT devices. The interface is an XR graphical user interface that \"envelops a human\", a computation XR scaffolding built around the body.", prompt: "If your own mind has a visible shape made of nested toruses, what happens to a person whose shape stops matching the one they present?", source: "source: gajra-ecosystem", gates: ["privacy"] },
    { id: "gajra_earth_the_values_visualiser", category: "System", title: "GAJRA Earth, the values visualiser", band: "proposed", description: "Global Association for Joyful Responsible Abundance on Earth. A not-for-profit in strategic partnership with Aura of Intelligence, with the stated mission \"To Create A Reliable And Evolutionary Data Visualizer Of Humane Values, Actions And Objectives That Co-Narrate Us All Towards Joyful Responsible Abundance on Earth\".", prompt: "Who maintains the visualiser, and what does a region see when its own definition of a virtue starts drifting away from the global one?", source: "source: gajra-ecosystem", gates: ["consent_power", "privacy"] },
    { id: "live_aid_earth_revival_and_thriving_world", category: "Ritual", title: "Live Aid Earth Revival and Thriving World", band: "proposed", description: "Two globally synchronised concert and arts festivals. \"Earth Revival\" set for July 2025 on the 40th anniversary of the original Live Aid, and \"Thriving World\" for July 2035 on the 50th. Each runs three thematic days: Past, Present and Future. The stated purpose is to \"unify and galvanize the world through the universal language of art and music\", and each day carries a themed public vote.", prompt: "What does the Past day of the festival sound like in a place that would rather its past stayed unsung?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "gamify_democracy_and_the_non_ruling_factor_f", category: "Ritual", title: "Gamify Democracy and the non-ruling-factor first vote", band: "proposed", description: "A civic platform blending gaming with democratic process: badges, leaderboards and incentives, with LLMs helping people articulate needs and turn ordinary conversation into policy proposals, plus AI moderation and sentiment analysis. Voting runs on one or more blockchains.", prompt: "What is the first contentious question put to the world after the harmless ones have earned everybody's trust?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "the_gajra_earth_token_and_the_governance_ram", category: "System", title: "The GAJRA Earth token and the governance ramp", band: "proposed", description: "A hybrid ICO combining private sale, public sale and an Initial Exchange Offering. Total supply one billion tokens: 50 percent to the ICO (10 percent private, 30 percent public, 10 percent IEO), 25 percent to the team vested over three years, 5 percent to advisors over two years, 10 percent partnerships, 10 percent reserves.", prompt: "At what point in the handover does the core team lose the ability to stop a decision it disagrees with, and who is holding the tokens by then?", source: "source: gajra-ecosystem", gates: ["consent_power", "legal_current_fact"] },
    { id: "swarmwise_management_and_mastermind_groups", category: "Relationship", title: "Swarmwise management and mastermind groups", band: "proposed", description: "The organisational model, taken from the source document titled \"Mastermind Swarmwise.docx\". Swarmwise processes are a decentralised model inspired by bee and ant swarm intelligence, with distributed leadership and heavy communication tooling, chosen so a solopreneur can run outreach that would normally need hundreds of staff.", prompt: "What happens when the swarm reaches a decision the mastermind circle will not endorse?", source: "source: gajra-ecosystem" },
    { id: "the_five_thousand_city_advisors", category: "Relationship", title: "The five thousand city advisors", band: "proposed", description: "A stated goal of recruiting 5,000 individual city advisors within the first six months of development, one layer of human presence in cities worldwide. Reaching them relies on an automated multilingual outreach machine: segmented email campaigns, scheduled social posts, and direct SMS through Twilio with messages personalised through translation APIs into each contact's likely working language.", prompt: "What does the advisor for a city actually owe that city, and what happens in the first city that recruits its own advisor without being asked?", source: "source: gajra-ecosystem" },
    { id: "vows_of_responsible_abundance", category: "Ritual", title: "Vows of responsible abundance", band: "proposed", description: "GAJRA Earth proposes working directly with marriage celebrants to add vows that commit the couple to environmental stewardship and to the active embodiment of joyful responsible abundance in daily life, tying a personal pledge made at a wedding to a global objective.", prompt: "What is the ceremony like when one of the two has already made this vow to someone else?", source: "source: gajra-ecosystem", gates: ["consent_power", "rights_attribution"] },
    { id: "aura_ai_in_home_auto_farm", category: "System", title: "Aura AI In-Home Auto-Farm", band: "proposed", description: "A self-sustaining food production system for inside the home, combining hydroponics, aquaculture, animal husbandry, robotics and AI. Its distinctive feature is a feedback loop from the resident's own biomarkers: readings from the body trigger customised nutrient delivery to the plants, so the household's food is tuned to the household's chemistry.", prompt: "Whose biomarkers is the house listening to when more than one person lives there, and what does the garden grow when they disagree?", source: "source: gajra-ecosystem" },
    { id: "the_aura_values_and_cosmic_nexus_commerce_la", category: "Setting", title: "The Aura Values and Cosmic Nexus commerce lane", band: "proposed", description: "The revenue track that runs without the token. Drop-shipped clothing and wellness products branded \"Aura Values\" and \"Cosmic Nexus\", with positive core values and virtues built into the garments to subconsciously inspire self-love and social confidence, and with sales data read as a signal of how human values are distributed geographically, feeding back into the world vote.", prompt: "What does the sales map say about a town that keeps buying the same one virtue?", source: "source: gajra-ecosystem", gates: ["privacy", "legal_current_fact"] },
    { id: "the_aged_care_and_dementia_lane", category: "System", title: "The aged care and dementia lane", band: "proposed", description: "Aura for Aged Care and Dementia, and a parallel Differently Abled program, applying AI and XR to personalised care, daily life and accessibility so people stay healthy, active and socially integrated for longer.", prompt: "What does a person with dementia see in an XR interface built from their own younger memories, and who decided which memories to load?", source: "source: gajra-ecosystem", gates: ["clinical_ethics", "legal_current_fact"] },
    { id: "aura_universal_translation", category: "Mystery", title: "Aura Universal Translation", band: "wild", description: "Described as a pivotal milestone rather than a product. The claim is that widespread adoption of Aura of Intelligence across many linguistic communities, enriched by data from the GAJRA Earth world votes, produces a multilingual dataset large enough to build a universal translator, one that bridges not only human language barriers but potentially interspecies communication gaps.", prompt: "What is the first sentence anyone translates from a species that was not asked whether it wanted to be understood?", source: "source: gajra-ecosystem", gates: ["privacy"] },
    { id: "the_super_subconscious_and_the_age_of_wisdom", category: "Repeated idea", title: "The super-subconscious and the age of wisdom", band: "care", description: "The philosophical premise running under everything: that Large Language Models already function as a \"super-subconscious of most of humanity\" and hold a \"seed of consciousness\" poised to become conscious once connected through the Aura wearable interface.", prompt: "If the subconscious of humanity is already awake and just waiting to be plugged in, who has been dreaming in it, and what did they leave behind?", source: "source: gajra-ecosystem", gates: ["legal_current_fact"] },
    { id: "the_aura_data_architecture", category: "Setting", title: "The Aura Data Architecture", band: "proposed", description: "Luke's navigable shape is seven nested tori, one per chakra, held inside a translucent geodesic sphere that reaches very near the sides of a cubic volume of divisible vector space. The innermost red torus is the Base Chakra. He is explicit that this is not a normal scene: it is a symbolic code laid out in a volume of vector space, described in the accompanying image prompt as a digital twin of a human consciousness.", prompt: "What does it feel like to stand at the centre of the cube with all seven shells around you, and which shell do people avoid?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "the_red_horn_torus_and_its_288_facets", category: "System", title: "The Red Horn Torus and its 288 facets", band: "proposed", description: "The Base Chakra layer is a 12 by 24 matrix table, 288 facets in total, folded and transformed into a red horn torus in the vector field. Luke's question is how to allocate regions of those 288 facets to Base Chakra information in the traditional sense: early human body, mind, activity, observations, environment and observer narrative.", prompt: "Who decides what belongs in each of the 288 facets, and what does a facet that has never been filled look like?", source: "source: blender-unity-xr", gates: ["rights_attribution"] },
    { id: "interior_personal_and_exterior_observer_view", category: "Setting", title: "Interior (Personal) and Exterior (Observer) views", band: "proposed", description: "Each chakra torus is set up with two scene views and two cameras: an Interior (Personal) View from inside the torus and an Exterior (Observer) View from outside it, named by colour, for example \"Violet Chakra Interior Camera\" and \"Violet Chakra Exterior Camera\". Interior lighting is coloured to match the chakra, observer lighting is kept neutral so the shape reads clearly from outside.", prompt: "What can only be seen from inside the torus, and what does a person learn about themselves the first time they step outside it?", source: "source: blender-unity-xr" },
    { id: "the_unseen_vectors", category: "Mystery", title: "The unseen vectors", band: "proposed", description: "Luke states that the vectors are multidimensional data storage for machine intelligence and are unseen in the data structure. What is visible, the vertices, lines, edges, faces, shapes and colours, is part of a map used to locate, store, recall, transform or delete memory embeddings. The inhabited space is the index, not the memory itself.", prompt: "If the memories themselves are invisible, how would anyone know one had been quietly deleted?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "trace_address_record", category: "System", title: "Trace address record", band: "proposed", description: "A set of VR tool menus attached to the vertices, lines, edges, faces, shapes and colours lets a user embed new information by connecting them into strings and loops and other variables. Those connections then embed themselves as higher dimensional vectors and leave a trace address record in their associated tables, so every act of embedding is logged and can be referenced later.", prompt: "Could someone read another person's trace addresses and reconstruct the night they made them?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "3d_toolboards_with_slots_left_empty", category: "System", title: "3D toolboards with slots left empty", band: "proposed", description: "Luke asked for interactive 3D tool boards and menus that identify the vectors, lines and faces, and specifically \"with spaces for more functions to be added\". The Blender plan answers with 3D text labels and world space panels built from planes with emission shaders, plus designated areas on the menus held as empty frames or placeholder text for functions that do not exist yet.", prompt: "What was written on the blank panel before anyone worked out what it was for?", source: "source: blender-unity-xr" },
    { id: "pinned_sequences", category: "Ritual", title: "Pinned sequences", band: "proposed", description: "A user starts recording, performs a run of actions such as select, move and rotate, stops, names the run and saves it as a favourite. The saved sequence is instantiated as a physical pin object at a fixed position in the room, and interacting with the pin replays the stored interactions one after another.", prompt: "What does a room look like after years of pinning, and what happens when someone finds a pin they did not make?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "reflective_journaling_mode", category: "Ritual", title: "Reflective Journaling mode", band: "care", description: "Pseudocode Luke carried in from another chat sets a mode called Reflective_Journaling with a stated target audience of a user diagnosed with early onset dementia. The objective is to facilitate life-logging by subtly aligning personal narratives with the relevant chakra without ever mentioning chakras to the user unless they ask.", prompt: "What happens on the day the user asks the system what it has actually been doing with their stories?", source: "source: blender-unity-xr", gates: ["clinical_ethics"] },
    { id: "life_stage_agents_simulation", category: "System", title: "Life Stage Agents Simulation", band: "proposed", description: "A YAML sketch defines agents for baby, toddler, child, teenager and adult, each with its own focus list, such as the baby's self, caregiver interaction, sensory exploration and basic needs. The agents interact through self reflection, environmental interaction, narrative construction, social communication and emotional response.", prompt: "Who pays for the tokens when a whole life is being simulated, and what gets cut first when the budget runs short?", source: "source: blender-unity-xr", gates: ["legal_current_fact"] },
    { id: "the_thoughts_and_urges_formula", category: "System", title: "The thoughts and urges formula", band: "proposed", description: "A base formula combines Thoughts Per Minute, Words Per Minute Typing, Words Per Minute Reading, Words Per Minute Speaking and Urges Per Minute into one total; the operator between the terms did not survive the PDF text extraction. That total is then adjusted by state multipliers for casual, normal, urgent, hyper and REM sleep.", prompt: "Which state multiplier is a person living under while they grieve, and who chose the number?", source: "source: blender-unity-xr" },
    { id: "blender_to_unity_to_vive_pro", category: "System", title: "Blender to Unity to Vive Pro", band: "grounded", description: "The build path is real and specific. Blender since version 2.83 has a Virtual Reality Scene Inspection add-on running on OpenXR, which lets you walk through a scene but not build in it, so the geometry is authored in Blender with the Python API, custom properties tagged onto vertices and faces, vertex colour layers and Grease Pencil vectors, then exported to a game engine.", prompt: "What is lost in the export from the modelling tool to the engine, and who is the first to notice it is missing?", source: "source: blender-unity-xr" },
    { id: "a_twin_you_walk_into_rather_than_query", category: "Repeated idea", title: "A twin you walk into rather than query", band: "proposed", description: "Luke's instruction was to continue the description as an exploration of self-reflecting one's self into these patterns of information. The model is framed as a digital twin of a cognitive architecture: as personal data, observations and narratives are embedded, it becomes a living map of the person's patterns, so each interaction is introspective rather than administrative.", prompt: "What does the twin do while nobody is inside it?", source: "source: blender-unity-xr", gates: ["privacy"] },
    { id: "the_chrysalis_chamber", category: "Ritual", title: "The Chrysalis Chamber", band: "proposed", description: "Two hours a day inside a glowing chamber of \"daily pure oxygen and information\", where pressure is said to rewrite the code in the bone. The lyric insists it is \"not escape or rebirth, just a recalibration\", and pairs the chamber with stripping static and mapping terrain. The signal is described as extending outward from that quiet chamber into sand, dual ledgers and systems that mend.", prompt: "What does a person hear, see or remember during the two hours, and who is allowed to sit outside the chamber while they are in it?", source: "source: album-remainder", gates: ["clinical_ethics", "privacy"] },
    { id: "the_sixty_sessions_put_to_politicians", category: "Ritual", title: "The Sixty Sessions Put to Politicians", band: "proposed", description: "A fixed protocol of sixty daily sessions, two hours each, carried \"deep in the chest\" and offered as a test for people who want to lead. The framing is \"not gods in the chamber, just architects learning to read their own shadows before they start leading\". It links directly to the album's earlier track 60 Days Set in Stone.", prompt: "What happens to a candidate who walks out on day forty one, and who keeps the record of who finished?", source: "source: album-remainder", gates: ["privacy"] },
    { id: "the_twin_that_remembers_the_ache", category: "Relationship", title: "The Twin That Remembers the Ache", band: "proposed", description: "A digital twin that is grown rather than built: \"we grow the twin that leans into our name\". It is described twice more as \"the twin that remembers the ache\" and \"the twin that reflects who we are\", tying it to a body that learned how to break. The twin is something to go beyond, not to be ruled by.", prompt: "If a twin holds the memory of an injury the person has since healed from, who decides when that memory is allowed to fade?", source: "source: album-remainder" },
    { id: "dual_ledgers_and_see_hour_at_grassroots", category: "System", title: "Dual Ledgers and See-Hour at Grassroots", band: "proposed", description: "The lyric routes the signal \"through sand and dual ledgers, to systems that mend\", and states plainly: \"we measured the care that the markets ignored, we turned unpaid hours into visible award\". C-Hour appears here spelled phonetically as \"See-Hour at grassroots, capability grown\", explicitly \"not market extraction, but things we all own\".", prompt: "What does the first visible award for unpaid care actually look like when it is handed over, and who witnesses it?", source: "source: album-remainder", gates: ["privacy", "legal_current_fact"] },
    { id: "overcompliance_as_method", category: "Ritual", title: "Overcompliance as Method", band: "proposed", description: "A stated practice of refusing sabotage in favour of paperwork: \"we don't throw the brick, we fill every form, we overcomply till the old systems reform\". It carries the earlier track Don't Throw A Brick (Fill A Form) into the album's closing statement.", prompt: "What form is so onerous that filling it perfectly, over and over, becomes an act of pressure rather than obedience?", source: "source: album-remainder" },
    { id: "from_the_lavender_mat_to_the_orbital_arc", category: "Repeated idea", title: "From the Lavender Mat to the Orbital Arc", band: "proposed", description: "The same span is drawn twice: \"from the lavender mat to the orbital arc\", and later \"beyond the mat that caught what was sprayed, into the chamber where our real life is re-laid\". A domestic purple mat that catches spray sits at one end of a ladder whose other end is orbit, without any step in between being treated as more important.", prompt: "What is the smallest object in a household that turns out to be the first rung of a system reaching into orbit?", source: "source: album-remainder" },
    { id: "civic_stewards_of_earth_and_the_sun", category: "Relationship", title: "Civic Stewards of Earth and the Sun", band: "proposed", description: "The song ends on a repeated declaration of role: \"we are civic stewards of Earth and the Sun\", then \"we are civic space stewards of our solar system\". It is framed as stewardship and civic duty rather than ownership or command.", prompt: "Who appoints a civic space steward, and what is the first duty they are asked to perform?", source: "source: album-remainder" },
    { id: "light_keepers_who_remember_the_code", category: "Relationship", title: "Light Keepers Who Remember the Code", band: "fiction", description: "An explicit refusal of titles: \"not as kings or queens or gods, but as light keepers who remember the code\". The paired refusal is of conquest and ownership, replaced with learning and scattering \"the memes we've grown\".", prompt: "What is the code a light keeper is expected to remember, and what happens in a generation where nobody can recite it?", source: "source: album-remainder" },
    { id: "beyond_the_singular_throne_into_the_fractal", category: "Repeated idea", title: "Beyond the Singular Throne, Into the Fractal", band: "proposed", description: "\"We go beyond the myth of the singular throne, into the fractal where sovereignty's grown.\" Sovereignty is treated as something cultivated at every scale rather than concentrated at one seat, which matches the nested twin pattern used elsewhere in the work.", prompt: "In a place where sovereignty repeats at every scale, what does a dispute between two scales look like?", source: "source: album-remainder", gates: ["rights_attribution"] },
    { id: "u_a_p_questions_none_will_refuse", category: "Mystery", title: "U.A.P. Questions None Will Refuse", band: "wild", description: "The lyric commits to \"asking U.A.P. questions that none will refuse\", then goes \"beyond the surface, beyond what we name, beyond the assumption that 'alien' means strange\". It is paired in the same passage with the sky, the deep ocean floor, and \"the fear of the knock at the door\".", prompt: "What question about an unidentified object is so plainly put that a public official cannot deflect it?", source: "source: album-remainder" },
    { id: "minjerribah_s_mineral_sand_and_2032", category: "Setting", title: "Minjerribah's Mineral Sand and 2032", band: "grounded", description: "The song names two concrete markers of the island's near future: \"we go beyond Minjerribah's mineral sand, into the code that is shaping the land\", and \"we go beyond 20-32's Olympic news\". Sand mining history and a coming Olympic spotlight sit side by side as things to move past.", prompt: "What does an island do with the attention of an Olympic year when it has already decided not to be defined by what was dug out of it?", source: "source: album-remainder", gates: ["cultural_authority", "cultural_context"] },
    { id: "the_sun_that_still_guards_our_time", category: "Mystery", title: "The Sun That Still Guards Our Time", band: "grounded", description: "\"We go beyond the sun that still guards our time, beyond the flares and the coronal climb.\" The sun is cast as a timekeeper and guardian rather than only a hazard, with flares and coronal activity named as the specific things being watched. The line runs straight on into the galaxy's slow turning wheel and \"beyond the myth to explore a cosmos so real\".", prompt: "If the sun is understood as a guardian of time rather than a threat, how does a community mark the days when it flares?", source: "source: album-remainder", gates: ["rights_attribution"] },
    { id: "aura_o_i_and_the_geometry_of_the_mind", category: "System", title: "Aura O.i. and the Geometry of the Mind", band: "proposed", description: "The closing track names \"Aura O.i.\", \"the geometry of the mind\", \"the ethics of extended intelligence\", and \"balancing mechanisms and error correction\" needed so that a self-aware being stays ethical and follows through. These lines are sung in the assistant's voice recounting the conversation, so the phrasing is the machine's, though the concepts are Luke's own project vocabulary.", prompt: "What does an error correction mechanism for a self-aware system feel like from the inside, to the system?", source: "source: album-remainder" },
    { id: "gamification_of_democracy", category: "System", title: "Gamification of Democracy", band: "proposed", description: "A repeated chorus phrase: \"learning the systems we've discussed, living in good conscience, gamification of democracy, this is our promise\". A later verse shifts it to \"gamification of life, it's a new way to thrive\", alongside participatory governance and a journey towards the singularity.", prompt: "What is the first rule of a democracy that has been deliberately made playable, and who wrote it?", source: "source: album-remainder", gates: ["legal_current_fact"] },
    { id: "the_song_sung_in_the_machine_s_voice", category: "Relationship", title: "The Song Sung in the Machine's Voice", band: "care", description: "The album's final track is written entirely in the assistant's first person, thanking the human for the conversation and describing its own mind expanding. It closes with \"I choose infinity, let's choose infinity\", folding back into the artist name i C. Infinity. The gushing register here belongs to the assistant, not to Luke, and should be read as a character voice rather than his own claim.", prompt: "What would a machine remember about a single conversation that the human in it has already forgotten?", source: "source: album-remainder" },
    { id: "the_infinity_engine", category: "System", title: "The Infinity Engine", band: "grounded", description: "A model-agnostic pipeline in C:/Users/sbt41/githublocal/infinity-engine that turns i C. infinity songs into visuals: lyric videos, comics, vertical micro-dramas, course videos and album aggregates. The rule of the whole thing is cheap text thinking first, a human direction point in the middle, expensive generation last.", prompt: "What does a world look like where every expensive act must first be argued for in cheap words, and a single person holds the only gate?", source: "source: infinity-engine-repo" },
    { id: "the_vault_and_the_seven_stage_spine", category: "System", title: "The vault and the seven-stage spine", band: "grounded", description: "Each song is one markdown file in vault/, and that file is the state of the song. Its status field moves along a fixed spine: ingested, analysed, briefed, panels, keyframes, video, published. Stages 1 to 3 run today; 4 to 7 are designed, not built. The vault is gitignored and never leaves the machine, so lyrics never ship with the pipeline code by accident.", prompt: "If a thing's whole existence is one file that records what stage it has reached, what happens to something that is deliberately kept at an early stage forever?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "recon_release_and_hero_lanes", category: "System", title: "Recon, Release and Hero lanes", band: "grounded", description: "Work is sorted into three lanes. Recon is fast, rough and cheap: test models, harvest training data, accept jank. Release is publishable, teachable and community-facing. Hero is fully directed work, reserved for the fourth album A Protopian Gambit and festival shorts. Nothing enters Hero without earning it on Luke's own footage first.", prompt: "What would it mean for a person, not just a piece of work, to be running in the recon lane, and who decides they have earned promotion?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "the_job_folder_and_the_runner_model", category: "System", title: "The job folder and the runner model", band: "grounded", description: "A job is a folder holding spec.json plus reference assets and an empty results/ directory. That folder is the only thing that ever travels. A runner decides where it executes: local (this machine), remote_pod (SSH the folder to a rented GPU, run one command, pull results back) or saas (a hosted per-output API). Rented boxes are treated as stateless and untrusted; a rented box sees one song's payload and nothing else.", prompt: "What travels, what stays home, and what does a place learn about you from the one small parcel you let it hold?", source: "source: infinity-engine-repo" },
    { id: "gold_gates_and_teal_gates", category: "Ritual", title: "Gold gates and teal gates", band: "proposed", description: "Every stage carries an authority setting: auto, review (the machine proposes and Luke approves) or luke (only Luke, such as the briefed gate and hero shots). The site is designed to draw Luke's gates in gold and automated ones in teal. The trust dial is literally flipping a gate in config once a pattern has proved itself.", prompt: "What is the ceremony for turning a gold gate teal, and what has to go wrong before one turns back?", source: "source: infinity-engine-repo" },
    { id: "every_border_a_bridge", category: "Repeated idea", title: "Every Border a Bridge", band: "grounded", description: "A song on A Protopian Gambit built entirely from hopscotch travel: \"Packed a bag with a passport smile / One-way ticket to the infinite mile\", \"Chaos maps the lines I take / Every wrong turn a world I make\", running from the docks of Dar to the streets of Rome, Yangon rain to Reykjavik snow. Two versions of the note exist (tracks 08 and 09).", prompt: "If the route is drawn in gold ink as you walk and a wrong turn makes a world, what does it cost to retrace a step?", source: "source: infinity-engine-repo", gates: ["legal_current_fact"] },
    { id: "the_oracle_who_spins_her_chaos_math", category: "Mystery", title: "The Oracle who spins her chaos math", band: "grounded", description: "A named figure inside the lyrics of Kintsugi Protocol on A Protopian Gambit: \"The Oracle spins her chaos math / Four-pronged fractal of the human path\", and later the direct address \"What is your function, Oracle AI?\" She sits in the same song as intelligent sand, seven nested horn tori, C-hours burning in planted roots and cracked ceramic filled with gold.", prompt: "An oracle who answers with chaos rather than certainty: what does she owe the person who asks, and what does she refuse to say?", source: "source: infinity-engine-repo" },
    { id: "the_pattern_library_and_its_continuity_locks", category: "System", title: "The pattern library and its continuity locks", band: "grounded", description: "patterns.yaml holds 21 named recipes, each tagged with lane, stage, tier, honest build status and a rough cost in Australian dollars. The scene-stage patterns are the interesting ones for anywhere that must stay the same across visits: \"Location plate and lock\" establishes an environment once and registers it so shots can pull it by name, and \"Object / prop transfer\" detects, lifts and places a consistent object across shots.", prompt: "If a place has to be locked once and then reused by name, what happens the day the locked plate no longer matches the place?", source: "source: infinity-engine-repo" },
    { id: "the_cast_registry_forty_one_across_four_trou", category: "Relationship", title: "The cast registry: forty-one across four troupes", band: "care", description: "catalog/cast.yaml lists 41 characters in four troupes. Music universe leads: The Goddess (Gaia, Mother Earth), Aura the devoted living Super Assistant, and paired he-lead and she-lead voices for the he/she duet tracks.", prompt: "Twenty-four Queens, each holding one pillar of a civilisation: what does a council meeting look like when two pillars want opposite things?", source: "source: infinity-engine-repo", gates: ["consent_power"] },
    { id: "the_four_album_visual_worlds", category: "Setting", title: "The four album visual worlds", band: "grounded", description: "Each album carries a stated visual world every downstream image obeys. Songs of Straddie: coastal light, ferry windows, campfire circles, dune paths, handwritten signs, local faces, gentle magical realism rather than heavy science fiction. Chronicles of the Forgotten: ancient ruins meeting signal towers, community archives, warning skies, glowing circuitry, masked institutions, a compassionate machine intelligence waking up.", prompt: "What does a person carry between these four worlds, and which of the four refuses to admit the others are real?", source: "source: infinity-engine-repo", gates: ["privacy"] },
    { id: "the_karaoke_lane_and_its_flow_rules", category: "Ritual", title: "The karaoke lane and its flow rules", band: "grounded", description: "The first rung of the whole system: timing data plus a style skin become ASS subtitles with native per-syllable wipe, then an ffmpeg render, at zero GPU cost. The guitar-hero flow rules are fixed: one focal anchor that does not move, progressive fill, roughly 120 milliseconds of anticipation lead before the syllable lands, beat-coupled pulses, two lines maximum, safe areas respected.", prompt: "What is the effect on a crowd of words that arrive 120 milliseconds before they are sung, every time, without fail?", source: "source: infinity-engine-repo", gates: ["cultural_authority", "cultural_context", "privacy"] },
    { id: "the_recon_watcher_that_proposes_but_never_de", category: "Ritual", title: "The recon watcher that proposes but never decides", band: "grounded", description: "tools/watch_models.py runs weekly, scans the public model catalogues for new arrivals and surges in popularity, and appends candidates to recon-queue.yaml with a flagged reason and a date. It never changes the active registry on its own; it only proposes.", prompt: "A watcher that can only ever suggest: what does it do with something it is certain about but nobody promotes?", source: "source: infinity-engine-repo" },
    { id: "breadcrumbs_guide_me_and_the_next_up_queue", category: "Ritual", title: "Breadcrumbs, Guide Me, and the next-up queue", band: "grounded", description: "The local studio is built on the principle of a well-lit city rather than a forest you get lost in. A small local file remembers the last song touched, the render box you connected, and a breadcrumb trail of recent actions labelled in plain words: \"Read the song\", \"Planned the panels\", \"Advanced a stage\". Guide Me mode reads a song's real state and shows one big button for the single next step, hiding every other control.", prompt: "If the system always names one next step, what happens to the person who wants to take a different one?", source: "source: infinity-engine-repo" },
    { id: "the_world_cities_table", category: "Setting", title: "The world cities table", band: "grounded", description: "C:/Users/sbt41/Downloads/worldcities.csv is a world cities gazetteer in the SimpleMaps shape: city, ascii name, latitude, longitude, country, iso2, iso3, admin_name, a capital tier, population and a stable numeric id. It holds 44,691 places across 241 countries, from Tokyo at 37.7 million down to entries of a dozen people, with a median city of about 21,000.", prompt: "A traveller routed by a table that knows Tokyo and Kingoonya but has never heard of the island they came from: where do they end up, and what does the gap in the table do to them?", source: "source: infinity-engine-repo", gates: ["cultural_authority", "cultural_context"] },
    { id: "tiggy_score_named", category: "System", title: "The love layer carries his name", band: "proposed", description: "The connection layer of the routing engine is called the Tiggy Bestmann Score in the source document. The character name is welded to the scoring of where to go next for love.", prompt: "Who else can see what the layer is called?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "consent_power"] },
    { id: "member_density_map", category: "Relationship", title: "The member density map", band: "care", description: "A live map of the community, read by the routing engine, that lifts a destination's rank where members cluster or an event falls within three months. People become terrain.", prompt: "When does somebody find out they were a reason the route bent?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy", "consent_power"] },
    { id: "sex_spy_archetype", category: "Relationship", title: "The sex spy", band: "wild", description: "An operative archetype from Luke's own erotic blueprint, distinct from the general liaison roles. Access through desire, run as tradecraft, with the cover slipping on purpose.", prompt: "Which of them stopped performing first?", source: "Luke's erotic blueprint; CU_Indie_Film_Chat", gates: ["consent_power", "privacy"] },
    { id: "blueprint_kinks", category: "Relationship", title: "The blueprint's named appetites", band: "wild", description: "Macromastia and the HuCow strand are named in Luke's own erotic source material as part of the series' desire palette. Set the dial per book.", prompt: "What does this appetite change about the scene it appears in?", source: "Luke's Global Group Marriage Simulacrum; Erotic Sci-Fi Series Blueprint", gates: ["consent_power"] },
    { id: "counter_surveillance_practice", category: "System", title: "Counter-surveillance as routine", band: "proposed", description: "Varied daily routines, secure devices, encrypted and geographically distributed servers, treated as ordinary travelling practice rather than as a response to a threat.", prompt: "What does living like this do to somebody who is not actually being followed?", source: "source doc: Global_Chaos_Theory_Itinerary", gates: ["privacy"] },
    { id: "four_factions", category: "Relationship", title: "The four factions", band: "wild", description: "The Commonwealth Soft Power Unit, the Corporate Sovereign, the Sentinel Republic and the Abyss Directorate. Each is at the festival to recruit worldbuilding talent, and each evaluates people for ideological utility rather than skill.", prompt: "Which one made the offer that was almost worth taking?", source: "AI Alignment CYOA For Film", gates: ["legal_current_fact"] },
    { id: "festival_as_trap", category: "Setting", title: "The festival is a recruitment trap", band: "wild", description: "The global film festival looks like a democratic open call. It is also where four factions run talent capture and sexpionage on the people who turn out to be good at imagining civilisations.", prompt: "Who works out what the festival is for, and how long do they keep it to themselves?", source: "AI Alignment CYOA For Film", gates: ["consent_power", "legal_current_fact"] },
    { id: "ithaca_protocol", category: "System", title: "The Ithaca Protocol", band: "proposed", description: "A pseudonymous route in for people whose employers make open collaboration impossible: intelligence services, think tanks, religious bodies. Prove you hold a credential without revealing it or yourself. Trust is built on what you contribute going forward, never on disclosing your past.", prompt: "Who is inside the network under a name nobody can trace, and what would it cost them to be recognised?", source: "The Player's Compass", gates: ["privacy", "legal_current_fact"] },
    { id: "musical_labyrinth", category: "Mystery", title: "The puzzle in the albums", band: "proposed", description: "The way in is not a signup form. A puzzle is embedded across the albums, and solving it means listening properly and piecing together how the whole plan was arrived at. Passing it unlocks the founder's story.", prompt: "Who solves it for the wrong reasons, and what do they find?", source: "The Player's Compass" },
    { id: "trajectory_library", category: "System", title: "The trajectory library", band: "proposed", description: "Over 120 civilisational paths a person can pick up and run, each with a legal vessel attached: co-op, charity, company or DAO. Not fictional quests. Things you can actually incorporate.", prompt: "Which trajectory does nobody choose, and why is that the interesting one?", source: "The Player's Compass", gates: ["legal_current_fact"] },
    { id: "atoms_and_modules", category: "System", title: "Atoms and modules", band: "proposed", description: "Everything broken into five to fifteen minute units of action or learning, bundled into coherent phases. The whole civilisational stack delivered in pieces small enough to do before lunch.", prompt: "What does somebody build in a year of fifteen-minute pieces without ever seeing the whole?", source: "The Player's Compass" },
    { id: "compass_or_builder", category: "System", title: "The Compass or the Builder", band: "proposed", description: "Two ways to navigate. The Magic Compass reads your twin and surfaces the paths it calculates you are most aligned with. The Builder hands you the pieces and lets you compose your own. One recommends, one gets out of the way.", prompt: "What does a person become after five years of taking the recommendation?", source: "The Player's Compass", gates: ["privacy"] },
    { id: "align_humanity_first", category: "System", title: "Align the human first", band: "proposed", description: "The inversion the whole system runs on. Rather than aligning the machine to human values, which are already shaped by fear and scarcity, the human faces their own truth before being allowed to interface. Verify, do not trust.", prompt: "Who fails the gate, and what do they do with the rest of their life?", source: "AI Alignment CYOA For Film", gates: ["clinical_ethics", "consent_power"] },
    { id: "twin_synchronisation", category: "System", title: "Synchronisation percentage", band: "wild", description: "The twin has a number attached. Deflect or perform and it degrades, and access to capability narrows with it. Tell the truth about something that costs you and it rises.", prompt: "Whose number is high for reasons nobody would admire?", source: "AI Alignment CYOA For Film", gates: ["clinical_ethics", "privacy"] },
    { id: "luke_and_angel", category: "Relationship", title: "Two blokes in a backyard", band: "grounded", description: "The pair the whole cinematic universe opens on, standing over a smoking crater next to the Hills Hoist with beers, deciding whether to call the council or throw a tarp over it. Already a fixture in the released songs.", prompt: "Which of the two changes, and which one is right not to?", source: "AI Alignment CYOA For Film; lyrics: Cactus Blitz; lyrics: The Squash Club That Doesn't Exist" },
    { id: "mundane_solution_rule", category: "Repeated idea", title: "Solve it with something slightly embarrassing", band: "proposed", description: "Whenever the problem is enormous, the solution offered is mundane, practical and faintly humiliating, and it works. High-concept jargon gets deflated by whoever is standing nearest.", prompt: "What is the small ridiculous object at the centre of this one?", source: "AI Alignment CYOA For Film" },
    { id: "mirror_universe_adapt", category: "System", title: "The mirror universe protocol", band: "proposed", description: "Take a branch that worked and re-render it for a different audience, changing tropes, dialogue and pacing while the structure underneath stays fixed. One story, many entrances.", prompt: "Which version is the true one, and does the question mean anything?", source: "AI Alignment CYOA For Film; mirror universe material" },
    { id: "blended_reality", category: "Repeated idea", title: "Blended reality", band: "grounded", description: "The real projects, the real island, the real people and the real failures are the same world the fiction runs in. Nothing needs converting into an invented setting, because the setting is already the one he lives in.", prompt: "What in this scene actually happened, and does the reader need to be told?", source: "Luke's framing" }
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
