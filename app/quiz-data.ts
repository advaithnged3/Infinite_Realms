export type Universe = "mixed" | "mcu" | "dc-movies" | "marvel-comics" | "dc-comics";
export type Question = {
  id: string;
  universe: Exclude<Universe, "mixed">;
  prompt: string;
  hint: string;
  answer: string;
  aliases: string[];
  points: 10 | 30 | 60 | 85 | 100;
  explanation: string;
  visual: string;
  visualAlt: string;
};

export const universeLabels: Record<Universe, string> = {
  mixed: "Daily Mixed",
  mcu: "MCU",
  "dc-movies": "DC Movies",
  "marvel-comics": "Marvel Comics",
  "dc-comics": "DC Comics"
};

export const rarity: Record<number, {name:string; description:string}> = {
  10: { name: "COMMON", description: "A familiar legend" },
  30: { name: "UNCOMMON", description: "A well-known name" },
  60: { name: "RARE", description: "A deeper cut" },
  85: { name: "EPIC", description: "For devoted fans" },
  100: { name: "MYTHIC", description: "A multiverse-level recall" }
};

export const questionSets: Record<Exclude<Universe, "mixed">, Question[]> = {
  mcu: [
    {id:"mcu-01",universe:"mcu",prompt:"What is the name of the intelligence agency directed by Nick Fury?",hint:"Its initials are spoken throughout the Avengers films.",answer:"S.H.I.E.L.D.",aliases:["shield","s.h.i.e.l.d","strategic homeland intervention enforcement and logistics division"],points:10,explanation:"S.H.I.E.L.D. is the intelligence and peacekeeping agency Nick Fury leads in the MCU, bringing several heroes together before the Battle of New York.",visual:"agency",visualAlt:"A classified intelligence dossier"},
    {id:"mcu-02",universe:"mcu",prompt:"On which planet is the Soul Stone found in Avengers: Infinity War?",hint:"A desolate world tied to a sacrifice.",answer:"Vormir",aliases:["vormir"],points:30,explanation:"Thanos reaches Vormir, where the Red Skull guards the Soul Stone and explains its terrible price.",visual:"planet",visualAlt:"A distant, desolate planet"},
    {id:"mcu-03",universe:"mcu",prompt:"What is the name of the kingdom hidden behind the Bifrost, ruled by Odin?",hint:"Thor's home realm.",answer:"Asgard",aliases:["asgard"],points:10,explanation:"Asgard is the home of Thor, Loki and the royal family, and one of the Nine Realms in the MCU.",visual:"asgard",visualAlt:"A golden celestial city"},
    {id:"mcu-04",universe:"mcu",prompt:"What is the name of the AI that Tony Stark creates and that becomes Vision's foundation?",hint:"A name associated with a peaceful, harmonious future.",answer:"J.A.R.V.I.S.",aliases:["jarvis","j.a.r.v.i.s"],points:60,explanation:"J.A.R.V.I.S. begins as Tony Stark's AI assistant. After Ultron destroys its original form, its operating matrix becomes part of Vision.",visual:"ai",visualAlt:"A glowing artificial intelligence core"},
    {id:"mcu-05",universe:"mcu",prompt:"Which organisation does Scott Lang steal the Ant-Man suit from?",hint:"Hank Pym once worked there.",answer:"Pym Technologies",aliases:["pym technologies","pym tech"],points:85,explanation:"Darren Cross takes control of Pym Technologies. Scott Lang breaks into the facility to steal the suit, setting the Ant-Man story in motion.",visual:"tech",visualAlt:"A futuristic research laboratory"},
    {id:"mcu-06",universe:"mcu",prompt:"What is the name of the Wakandan flower that grants the Black Panther enhanced abilities?",hint:"It grows in a vibranium-rich land.",answer:"Heart-Shaped Herb",aliases:["heart shaped herb","heart-shaped herb"],points:60,explanation:"The Heart-Shaped Herb grants the Black Panther enhanced strength, agility and senses. It is closely tied to Wakanda's royal tradition.",visual:"herb",visualAlt:"A luminous purple flower"},
    {id:"mcu-07",universe:"mcu",prompt:"What is the name of the prison asteroid where the Guardians first meet?",hint:"The Collector has a connection to the place.",answer:"Kyln",aliases:["the kyln"],points:100,explanation:"The Kyln is a Nova Corps prison facility where Peter Quill, Gamora, Rocket, Groot and Drax are brought together.",visual:"space",visualAlt:"A prison station floating in deep space"}
  ],
  "dc-movies": [
    {id:"dcm-01",universe:"dc-movies",prompt:"What is the name of the fictional city protected by Superman in Man of Steel?",hint:"A major city in the DC universe.",answer:"Metropolis",aliases:["metropolis"],points:10,explanation:"Metropolis is Superman's adopted home city and the setting for much of his public life as a hero.",visual:"city",visualAlt:"A towering modern city"},
    {id:"dcm-02",universe:"dc-movies",prompt:"What is the name of Diana's homeland in Wonder Woman?",hint:"An island inhabited by the Amazons.",answer:"Themyscira",aliases:["themyscira","paradise island"],points:30,explanation:"Themyscira is the hidden island home of the Amazons, where Diana is raised and trained.",visual:"island",visualAlt:"A hidden island paradise"},
    {id:"dcm-03",universe:"dc-movies",prompt:"What is the name of the device used to terraform Earth in Man of Steel?",hint:"It is deployed by General Zod.",answer:"The World Engine",aliases:["world engine"],points:60,explanation:"The World Engine is Kryptonian technology designed to transform a planet's environment to resemble Krypton.",visual:"machine",visualAlt:"A colossal alien terraforming machine"},
    {id:"dcm-04",universe:"dc-movies",prompt:"What is the name of Aquaman's underwater kingdom in the 2018 film?",hint:"It is ruled by Orm before Arthur challenges him.",answer:"Atlantis",aliases:["atlantis"],points:10,explanation:"Atlantis is the underwater civilisation at the centre of Arthur Curry's struggle to claim his heritage and prevent war.",visual:"underwater",visualAlt:"A vast underwater kingdom"},
    {id:"dcm-05",universe:"dc-movies",prompt:"What is the name of Diana’s sword in Wonder Woman (2017)?",hint:"It is presented as a weapon capable of killing a god.",answer:"Godkiller",aliases:["the godkiller"],points:100,explanation:"The sword Diana believes to be the Godkiller is central to the film’s final confrontation, although the story later reveals a twist about who the true Godkiller is.",visual:"script",visualAlt:"Ancient carved inscriptions"},
    {id:"dcm-06",universe:"dc-movies",prompt:"What is the name of the alien warlord who seeks the Anti-Life Equation in Zack Snyder's Justice League?",hint:"He is Darkseid's younger, conquering self.",answer:"Darkseid",aliases:["darkseid"],points:30,explanation:"Darkseid is the ruler of Apokolips and seeks the Anti-Life Equation to impose his will across the universe.",visual:"cosmic",visualAlt:"A menacing cosmic ruler"},
    {id:"dcm-07",universe:"dc-movies",prompt:"What is the name of the speedster who travels back in time in The Flash (2023)?",hint:"Barry Allen's superhero identity.",answer:"The Flash",aliases:["flash","barry allen"],points:10,explanation:"Barry Allen is the Flash. His attempt to change the past creates a fractured timeline with consequences across realities.",visual:"lightning",visualAlt:"A streak of lightning through a city"}
  ],
  "marvel-comics": [
    {id:"mar-01",universe:"marvel-comics",prompt:"What is the name of the cosmic entity that embodies the universe's balance and judges threats to reality?",hint:"A three-faced cosmic judge.",answer:"The Living Tribunal",aliases:["living tribunal"],points:30,explanation:"The Living Tribunal is a powerful cosmic entity tasked with maintaining multiversal balance, acting under the authority of the One-Above-All.",visual:"cosmic",visualAlt:"A vast cosmic tribunal"},
    {id:"mar-02",universe:"marvel-comics",prompt:"What is the name of the hidden city where the Inhumans traditionally live?",hint:"It is located on the Moon in many stories.",answer:"Attilan",aliases:["attilan"],points:60,explanation:"Attilan is the Inhuman city-state, often relocated throughout Marvel continuity and famously associated with the Moon.",visual:"mooncity",visualAlt:"A hidden lunar city"},
    {id:"mar-03",universe:"marvel-comics",prompt:"What is the name of the ancient cosmic being who created the Infinity Gems in the original Thanos Quest-era lore?",hint:"A primordial being whose name starts with N.",answer:"Nemesis",aliases:["nemesis"],points:100,explanation:"In the Infinity Gems origin story revealed in the 1990s, the Gems are remnants of Nemesis, a primordial being who ended its own existence.",visual:"gem",visualAlt:"Six cosmic gems"},
    {id:"mar-04",universe:"marvel-comics",prompt:"What is the name of the Shi'ar royal guard's leader who is also known as the Gladiator?",hint:"His real name is Kallark.",answer:"Kallark",aliases:["kallark","gladiator"],points:85,explanation:"Kallark, better known as Gladiator, is the powerful praetor of the Shi'ar Imperial Guard.",visual:"star",visualAlt:"A cosmic imperial guard"},
    {id:"mar-05",universe:"marvel-comics",prompt:"What is the name of the dimension ruled by Dormammu?",hint:"Doctor Strange has defended Earth from it.",answer:"The Dark Dimension",aliases:["dark dimension"],points:10,explanation:"The Dark Dimension is Dormammu's domain, a realm beyond ordinary space and time that he seeks to expand into other realities.",visual:"dimension",visualAlt:"A dark interdimensional realm"},
    {id:"mar-06",universe:"marvel-comics",prompt:"What is the name of the mutant island nation established by the Quiet Council?",hint:"It is also the name of a living mutant.",answer:"Krakoa",aliases:["krakoa"],points:30,explanation:"Krakoa becomes a sovereign mutant homeland in the modern X-Men era, with its own government, culture and resurrection protocols.",visual:"island",visualAlt:"A living island nation"},
    {id:"mar-07",universe:"marvel-comics",prompt:"What is the name of the cosmic force that chooses hosts such as Jean Grey and Rachel Summers?",hint:"It is associated with rebirth and a fiery bird.",answer:"Phoenix Force",aliases:["the phoenix force","phoenix"],points:10,explanation:"The Phoenix Force is a powerful cosmic entity associated with life, death, rebirth and the evolution of consciousness.",visual:"phoenix",visualAlt:"A cosmic phoenix made of fire"}
  ],
  "dc-comics": [
    {id:"dcc-01",universe:"dc-comics",prompt:"What is the name of the planet where the Green Lantern Corps is headquartered?",hint:"The Guardians of the Universe reside there.",answer:"Oa",aliases:["oa"],points:10,explanation:"Oa is the homeworld of the Guardians of the Universe and the central base of the Green Lantern Corps.",visual:"oa",visualAlt:"A luminous planet in deep space"},
    {id:"dcc-02",universe:"dc-comics",prompt:"What is the name of the fifth-dimensional imp who frequently torments Superman?",hint:"His name is famously difficult to say backwards.",answer:"Mister Mxyzptlk",aliases:["mr mxyzptlk","mxyzptlk","mister mxyzptlk"],points:60,explanation:"Mister Mxyzptlk is a reality-warping fifth-dimensional trickster whose appearances often turn Superman's world upside down.",visual:"dimension",visualAlt:"A surreal fifth-dimensional realm"},
    {id:"dcc-03",universe:"dc-comics",prompt:"What is the name of the emotional spectrum's orange power associated with avarice?",hint:"Its sole ring-bearer is famously possessive.",answer:"Avarice",aliases:["avarice","greed"],points:85,explanation:"Orange light represents avarice. Larfleeze is its most prominent wielder and fiercely guards his power.",visual:"orange",visualAlt:"An orange cosmic energy ring"},
    {id:"dcc-04",universe:"dc-comics",prompt:"What is the name of the planet ruled by Darkseid?",hint:"Its counterpart is New Genesis.",answer:"Apokolips",aliases:["apokolips"],points:10,explanation:"Apokolips is Darkseid's industrial hell-world, a place of fire pits, oppression and the brutal rule of its tyrant.",visual:"planet",visualAlt:"A volcanic industrial planet"},
    {id:"dcc-05",universe:"dc-comics",prompt:"What is the name of the event in which Barry Allen sacrifices himself to save the multiverse?",hint:"The title begins with Crisis.",answer:"Crisis on Infinite Earths",aliases:["crisis on infinite earths"],points:60,explanation:"In the original 1985–86 Crisis on Infinite Earths comic, Barry Allen gives his life while destroying the Anti-Monitor’s antimatter cannon.",visual:"mystic",visualAlt:"A realm of ancient magic"},
    {id:"dcc-06",universe:"dc-comics",prompt:"What is the name of the city most closely associated with the Flash (Barry Allen)?",hint:"It is a major city in the American Midwest in many DC stories.",answer:"Central City",aliases:["central city"],points:10,explanation:"Central City is Barry Allen’s home city and the setting for many of the Flash’s adventures.",visual:"city",visualAlt:"A strange comic-book city"},
    {id:"dcc-07",universe:"dc-comics",prompt:"What is the name of the anti-matter universe's primary villain in the original Crisis on Infinite Earths?",hint:"A being who threatens the multiverse.",answer:"The Anti-Monitor",aliases:["anti-monitor","antimonitor"],points:30,explanation:"The Anti-Monitor is the central antagonist of Crisis on Infinite Earths, destroying universes from the anti-matter universe.",visual:"antimatter",visualAlt:"An anti-matter cosmic storm"}
  ]
};

export const mixedQuestions: Question[] = [
  questionSets.mcu[0], questionSets["dc-movies"][1], questionSets["marvel-comics"][1],
  questionSets["dc-comics"][3], questionSets.mcu[5], questionSets["dc-movies"][5],
  questionSets["marvel-comics"][6]
];
