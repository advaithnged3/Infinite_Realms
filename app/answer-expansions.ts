import { questionSets, type AnswerOption, type Question } from "./quiz-data";

type Extra = [string, 10 | 30 | 60 | 85 | 100, string[]?];
const banks: Record<string, { topic: string; rows: Extra[] }> = {
  "mcu-01": { topic: "heroes, villains and supporting characters from the Marvel Cinematic Universe", rows: [
    ["Sam Wilson",10,["Falcon","Captain America"]],["James Rhodes",10,["War Machine","Rhodey"]],["Wanda Maximoff",10,["Scarlet Witch"]],["Vision",10],["Pietro Maximoff",30,["Quicksilver"]],["Scott Lang",10,["Ant-Man"]],["Hope van Dyne",30,["Wasp"]],["Carol Danvers",10,["Captain Marvel"]],["Peter Parker",10,["Spider-Man"]],["T'Challa",10,["Black Panther"]],["Bucky Barnes",30,["Winter Soldier"]],["Rocket Raccoon",10,["Rocket"]],["Nebula",10],["Okoye",30],["Valkyrie",30],["Wong",30],["Pepper Potts",30,["Rescue"]],["Maria Hill",30],["Nick Fury",10],["Shuri",30],["M'Baku",30],["Nakia",60],["Korg",60],["Miek",85],["Luis",60],["Jimmy Woo",60],["Monica Rambeau",30],["Yelena Belova",30],["Kate Bishop",30],["She-Hulk",30,["Jennifer Walters"]],["Shang-Chi",30],["Sersi",60],["Dane Whitman",85],["Phastos",60],["Makkari",60],["Gilgamesh",60],["Thena",60],["Red Skull",30],["Obadiah Stane",30],["Justin Hammer",60],["Whiplash",30,["Ivan Vanko"]],["Aldrich Killian",30],["Yellowjacket",30,["Darren Cross"]],["Kaecilius",30],["Dormammu",30],["Baron Mordo",30],["Ego",30,["Ego the Living Planet"]],["Ronan the Accuser",30],["Korath",60],["Ayesha",60],["Arnim Zola",30],["Baron Strucker",60],["Crossbones",30,["Brock Rumlow"]],["Ulysses Klaue",30],["Erik Killmonger",10,["Killmonger"]],["Mysterio",10,["Quentin Beck"]],["Vulture",10,["Adrian Toomes"]],["Shocker",30,["Herman Schultz"]],["The High Evolutionary",30],["Dreykov",60],["Taskmaster",30],["Ghost",30,["Ava Starr"]],["Sonny Burch",85],["Yellowjacket",30],["The Mandarin",30],["A.I.M. scientist",85],["Malekith",30],["Kur se",85]
  ]},
  "mcu-02": { topic: "Infinity Stones, their keepers and their MCU history", rows: [
    ["Tesseract",10,["The Cube"]],["Eye of Agamotto",30],["Aether",30],["The Orb",30],["Infinity Gauntlet",10],["Eitri",85],["Odin",60],["Heimdall",60],["Malekith",60],["Sif",85],["Jane Foster",60],["Thor",10],["Loki",10],["Vision",10],["Ultron",30],["Wanda Maximoff",30,["Scarlet Witch"]],["Quicksilver",60,["Pietro Maximoff"]],["Doctor Strange",30],["Wong",60],["Agatha Harkness",85],["Kang the Conqueror",85],["Sylvie",60],["He Who Remains",85],["Nebula",30],["Gamora",30],["Eros",100],["Adam Warlock",60],["Carina",100],["Malekith the Accursed",85]
  ]},
  "mcu-03": { topic: "organisations and teams operating in the MCU", rows: [
    ["Avengers",10,["The Avengers"]],["S.H.I.E.L.D.",10,["SHIELD"]],["Hydra",10],["S.W.O.R.D.",30,["SWORD"]],["Damage Control",30],["Nova Corps",30],["Ravagers",30],["Guardians of the Galaxy",10],["Masters of the Mystic Arts",30],["Ten Rings",10],["Red Room",30],["Eternals",30],["Deviants",60],["Black Order",30],["Children of Thanos",30],["Thunderbolts",30],["Young Avengers",60],["Midnight Sons",85],["Illuminati",60],["Time Variance Authority",30,["TVA"]],["Strategic Homeland Intervention Enforcement and Logistics Division",85],["Department of Damage Control",60],["Dora Milaje",30],["War Dogs",60],["Hand",60],["Tracksuit Mafia",60],["Flag Smashers",60],["Extremis soldiers",85],["A.I.M.",60,["Advanced Idea Mechanics","AIM"]]
  ]},
  "mcu-04": { topic: "Asgardians and Thor allies in the MCU", rows: [
    ["Loki",10,["God of Mischief"]],["Heimdall",10],["Sif",10],["Odin",10],["Frigga",30],["Hela",10],["Valkyrie",10,["Brunnhilde"]],["Korg",30],["The Warriors Three",30],["Hogun",60],["Fandral",60],["Volstagg",60],["Skurge",30],["Lady Sif",10],["Jane Foster",10,["Mighty Thor"]],["Thor",10],["Vision",30],["Steve Rogers",10,["Captain America"]],["Throg",60],["Eitri",60],
  ]},
  "mcu-05": { topic: "places and realms visited or shown in the MCU", rows: [
    ["New York City",10,["New York"]],["Wakanda",10],["Asgard",10],["Midgard",30],["Vormir",30],["Knowhere",30],["Titan",30],["Morag",30],["Sakaar",30],["Xandar",30],["Nidavellir",30],["Jotunheim",60],["Svartalfheim",60],["Vanaheim",60],["Alfheim",85],["Muspelheim",60],["Niflheim",85],["Quantum Realm",10],["Mirror Dimension",30],["Dark Dimension",30],["Ta Lo",30],["Kamar-Taj",30],["Westview",30],["The Void",30],["New Asgard",30],["The Soul World",60],["Ego's Planet",30],["Counter-Earth",60],["Hala",30],["The Quantum Realm",10]
  ]},
  "mcu-06": { topic: "the Guardians of the Galaxy and their wider Ravager circle", rows: [
    ["Kraglin",30],["Yondu Udonta",10,["Yondu"]],["Stakar Ogord",60],["Aleta Ogord",85],["Charlie-27",85],["Martinex",85],["Mainframe",85],["Chili",100],["Taserface",60],["The Broker",85],["Cosmo",30,["Cosmo the Spacedog"]],["Howard the Duck",60],["Kraglin Obfonteri",30],["Phyla",60],["Pip the Troll",100],["Mantis",10],["Drax",10,["Drax the Destroyer"]],["Rocket Raccoon",10],["Groot",10],["Gamora",10],["Nebula",10],["Peter Quill",10,["Star-Lord"]],["Kylos",100],["Korath",60],["Ronan",30,["Ronan the Accuser"]],["The Collector",60],["The Grandmaster",60],["The High Evolutionary",30],["Adam Warlock",30]
  ]},
  "mcu-07": { topic: "MCU multiverse stories, variants and branching timelines", rows: [
    ["Sylvie Laufeydottir",30,["Sylvie"]],["Classic Loki",30],["Kid Loki",30],["Alligator Loki",30],["Boastful Loki",60],["President Loki",60],["Renslayer",30,["Ravonna Renslayer"]],["Miss Minutes",30],["Mobius",30,["Mobius M. Mobius"]],["He Who Remains",30],["Kang the Conqueror",30],["Immortus",60],["Rama-Tut",60],["Scarlet Witch",10,["Wanda Maximoff"]],["America Chavez",10],["Doctor Strange",10],["Clea",60],["Christine Palmer",30],["Sinister Strange",60],["Defender Strange",60],["Captain Carter",30,["Peggy Carter"]],["Supreme Strange",60],["Zombie Strange",60],["The Watcher",30],["Uatu",30],["Ultron",10],["Infinity Ultron",60],["Spider-Man 2099",30,["Miguel O'Hara"]],["The Spot",30],["Prowler",60,["Aaron Davis"]]
  ]},
  "dcm-01": { topic: "characters appearing in Justice League film continuities", rows: [
    ["Superman",10,["Clark Kent"]],["Batman",10,["Bruce Wayne"]],["Wonder Woman",10,["Diana Prince"]],["Aquaman",10,["Arthur Curry"]],["The Flash",10,["Barry Allen"]],["Cyborg",10,["Victor Stone"]],["Martha Kent",60],["Lois Lane",30],["Alfred Pennyworth",30],["Commissioner Gordon",30,["Jim Gordon"]],["Mera",30],["Steppenwolf",30],["Darkseid",30],["Desaad",85],["Jesse Quick",100],["Martian Manhunter",30,["J'onn J'onzz"]],["Green Lantern",60],["Silas Stone",60],["Iris West",30],["Black Canary",60],["Deathstroke",30],["Lex Luthor",10],["Joker",10],["Shazam",30,["Billy Batson"]],["Black Adam",30],["Peacemaker",30]
  ]},
  "dcm-02": { topic: "cities, planets and locations featured in DC films", rows: [
    ["Gotham City",10,["Gotham"]],["Metropolis",10],["Themyscira",10],["Atlantis",10],["Kahndaq",30],["Central City",10],["Smallville",30],["Apokolips",30],["Krypton",10],["Oa",60],["Belle Reve",30],["Corto Maltese",30],["Fawcett City",60],["Jotunheim",60],["Nanda Parbat",60],["The Rock of Eternity",30],["Themysciran coast",85],["Blackgate Penitentiary",60],["Arkham Asylum",10],["Wayne Manor",10],["Hall of Justice",30],["Themyscira's hidden cove",85],["The Pit",60],["Stryker's Island",60]
  ]},
  "dcm-03": { topic: "Batman allies, family and adversaries in DC films", rows: [
    ["Robin",10],["Dick Grayson",30],["Jason Todd",30],["Barbara Gordon",30],["Batgirl",10],["Batwoman",60],["Catwoman",10,["Selina Kyle"]],["The Riddler",10,["Edward Nygma"]],["The Penguin",10,["Oswald Cobblepot"]],["Two-Face",10,["Harvey Dent"]],["Scarecrow",10,["Jonathan Crane"]],["Bane",10],["Poison Ivy",30,["Pamela Isley"]],["Mr. Freeze",30,["Victor Fries"]],["Ra's al Ghul",30],["Talia al Ghul",30],["Hush",60,["Thomas Elliot"]],["Black Mask",30,["Roman Sionis"]],["Firefly",60,["Garfield Lynns"]],["Mad Hatter",60,["Jervis Tetch"]],["Killer Croc",30],["Victor Zsasz",30],["Carmine Falcone",30],["Sal Maroni",60],["The Court of Owls",60],["Alberto Falcone",85],["Sofia Falcone",85],["Calendar Man",85]
  ]},
  "dcm-04": { topic: "villains appearing in DC superhero films", rows: [
    ["General Zod",10],["Doomsday",10],["Ares",10],["Cheetah",30],["Ocean Master",30,["Orm"]],["Black Manta",10,["David Kane"]],["Enchantress",10,["June Moone"]],["Starro",30],["Bloodsport",30,["Robert DuBois"]],["King Shark",30],["Polka-Dot Man",60],["Savant",60],["Javelin",60],["Weasel",60],["The Thinker",30,["Clifford DeVoe"]],["Reverse-Flash",30,["Eobard Thawne"]],["Zod",10],["Lex Luthor",10],["Joker",10],["Harley Quinn",10],["Black Adam",30],["Sabbac",60],["Doctor Sivana",30],["Mister Mind",85],["Ivo",85,["Professor Ivo"]],["The Riddler",10],["The Penguin",10],["Falcone",30],
  ]},
  "dcm-05": { topic: "Task Force X, Suicide Squad and their film allies", rows: [
    ["Deadshot",10,["Floyd Lawton"]],["Captain Boomerang",10,["Digger Harkness"]],["Killer Croc",10],["Katana",10,["Tatsu Yamashiro"]],["Slipknot",30],["Rick Flag",10],["Amanda Waller",10],["June Moone",30],["Enchantress",30],["Bloodsport",10],["Peacemaker",10,["Christopher Smith"]],["Ratcatcher 2",30,["Cleo Cazo"]],["King Shark",10,["Nanaue"]],["Polka-Dot Man",30,["Abner Krill"]],["Savant",30],["Javelin",30],["Weasel",30],["Blackguard",60],["Mongal",60],["TDK",60],["The Thinker",30],["Milton",85],["Harley Quinn",10],["The Joker",30],["Cheetah",60]
  ]},
  "dcm-06": { topic: "characters crossing DC film continuities and eras", rows: [
    ["Batman",10,["Bruce Wayne"]],["Superman",10,["Clark Kent"]],["Joker",10],["Lex Luthor",10],["Alfred Pennyworth",30],["Commissioner Gordon",30],["Wonder Woman",10],["Harley Quinn",10],["The Flash",10],["Aquaman",10],["Lois Lane",30],["Catwoman",30],["Zod",30,["General Zod"]],["Green Lantern",60],["Shazam",30],["Black Adam",30],["Deadshot",30],["Amanda Waller",10],["Peacemaker",30],["Deathstroke",60],["Robin",30],["Supergirl",30],["Cyborg",30],["Mera",30]
  ]},
  "dcm-07": { topic: "magic and supernatural characters from DC films", rows: [
    ["Zatanna",60],["John Constantine",10,["Constantine"]],["Doctor Fate",10,["Kent Nelson"]],["Enchantress",10],["Incubus",60],["Etrigan",60],["The Demon",60],["Shazam",10,["Billy Batson"]],["Sabbac",30],["Mister Mind",60],["Black Adam",10,["Teth-Adam"]],["The Wizard",30],["Ares",10],["Circe",30],["Cheetah",30],["The Spectre",85],["Swamp Thing",60],["Deadman",85],["Raven",85],["Trigon",60],["Felix Faust",85],["The Phantom Stranger",100]
  ]},
  "mar-01": { topic: "X-Men members across Marvel Comics eras", rows: [
    ["Cyclops",10,["Scott Summers"]],["Jean Grey",10],["Storm",10,["Ororo Munroe"]],["Wolverine",10,["Logan","James Howlett"]],["Beast",10,["Hank McCoy"]],["Iceman",10,["Bobby Drake"]],["Angel",10,["Warren Worthington III"]],["Professor X",10,["Charles Xavier"]],["Jubilee",30],["Gambit",10,["Remy LeBeau"]],["Rogue",10],["Nightcrawler",10,["Kurt Wagner"]],["Colossus",10,["Piotr Rasputin"]],["Kitty Pryde",10,["Shadowcat","Katherine Pryde"]],["Psylocke",30,["Betsy Braddock"]],["Bishop",30,["Lucas Bishop"]],["Cable",30,["Nathan Summers"]],["Domino",30],["Forge",30],["Dazzler",30],["Longshot",60],["Multiple Man",30,["Jamie Madrox"]],["Polaris",30,["Lorna Dane"]],["Havok",30,["Alex Summers"]],["Banshee",30,["Sean Cassidy"]],["Sunfire",30],["Sunspot",30,["Roberto da Costa"]],["Cannonball",30,["Sam Guthrie"]],["Magik",30,["Illyana Rasputin"]],["Armor",60,["Hisako Ichiki"]],["Pixie",60,["Megan Gwynn"]],["Dust",60,["Sooraya Qadir"]],["X-23",30,["Laura Kinney"]],["Warpath",30,["James Proudstar"]],["Thunderbird",30,["John Proudstar"]],["Stepford Cuckoos",60],["Hope Summers",60],["Legion",60,["David Haller"]],["Mimic",85],["Blink",60],["Chamber",60],["Marrow",60],["M",60,["Monet St. Croix"]],["Frenzy",60],["Magma",60],["Cecilia Reyes",85],["Synch",60],["Prodigy",60],["Elixir",60],["Anole",60],["Rockslide",60]
  ]},
  "mar-02": { topic: "Spider-Man villains and recurring adversaries", rows: [
    ["Green Goblin",10,["Norman Osborn"]],["Doctor Octopus",10,["Doc Ock","Otto Octavius"]],["Venom",10,["Eddie Brock"]],["Carnage",10,["Cletus Kasady"]],["Sandman",10,["Flint Marko"]],["Electro",10,["Max Dillon"]],["Vulture",10,["Adrian Toomes"]],["Mysterio",10,["Quentin Beck"]],["Kraven the Hunter",10,["Kraven","Sergei Kravinoff"]],["Lizard",10,["Curt Connors"]],["Rhino",10,["Aleksei Sytsevich"]],["Scorpion",10,["Mac Gargan"]],["Shocker",10,["Herman Schultz"]],["Kingpin",10,["Wilson Fisk"]],["Hobgoblin",30],["Black Cat",30,["Felicia Hardy"]],["Tombstone",30,["Lonnie Lincoln"]],["Hammerhead",30],["Mister Negative",30,["Martin Li"]],["Morbius",30],["Jackal",30,["Miles Warren"]],["Chameleon",30,["Dmitri Smerdyakov"]],["Prowler",30,["Aaron Davis","Hobie Brown"]],["Beetle",30],["Boomerang",30],["Speed Demon",60],["Overdrive",60],["Silvermane",60],["Swarm",60],["Hydro-Man",30],["Molten Man",30],["Screwball",60],["Spot",30,["The Spot"]],["Kindred",60],["Morlun",60],["Shriek",60],["Fisk",10],["Sin-Eater",60],["Foreigner",85],["Slyde",85]
  ]},
  "mar-03": { topic: "Marvel characters who have wielded or used an Infinity Gem or Stone", rows: [
    ["Thanos",10],["Adam Warlock",10],["Magus",60],["Pip the Troll",60],["Gamora",10],["Drax the Destroyer",30],["Nebula",10],["Eros",60,["Starfox"]],["The Collector",30,["Taneleer Tivan"]],["The Grandmaster",30,["En Dwi Gast"]],["Silver Surfer",30],["Doctor Strange",10],["Reed Richards",30],["Mister Fantastic",30],["Black Widow",30,["Natasha Romanoff"]],["Iron Man",10,["Tony Stark"]],["Captain America",10,["Steve Rogers"]],["Hulk",10,["Bruce Banner"]],["Wolverine",30,["Logan"]],["She-Hulk",30,["Jennifer Walters"]],["Nebula",10],["Loki",10],["Ultron",30],["Ronan the Accuser",30],["The Hood",60,["Parker Robbins"]],["Turk Barrett",85],["Rune",100],["The Stranger",60],["Eternity",85],["The Living Tribunal",85],["The In-Betweener",100],["Thane",60],["Black Panther",30,["T'Challa"]],["Moon Knight",60,["Marc Spector"]],["Requiem",100]
  ]},
  "mar-04": { topic: "cosmic entities and abstract beings in Marvel Comics", rows: [
    ["Eternity",10],["Infinity",10],["Death",10],["Oblivion",30],["The Living Tribunal",10],["The One-Above-All",10,["One Above All","TOAA"]],["The One-Below-All",30],["The Beyonder",10],["Molecule Man",30,["Owen Reece"]],["Galactus",10],["Master Order",30],["Lord Chaos",30],["The In-Betweener",30],["The Phoenix Force",10,["Phoenix Force"]],["The First Firmament",60],["The Fulcrum",85],["The Stranger",30],["The Celestials",10],["The Watchers",30],["Uatu",30],["The Infinites",60],["The Elders of the Universe",30],["The Queen of Nevers",85],["The Griever at the End of All Things",60],["The Ivory Kings",85],["The Black Winter",60],["Knull",30],["The Enigma",60],["Chthon",30],["Set",60],["Cyttorak",30],["Shuma-Gorath",30],["Dormammu",10],["Mephisto",10],["Satannish",60],["Amatsu-Mikaboshi",60],["Gaea",30],["Kronos",60],["Arishem",30],["Eson",60],["Tiamut",60],["Exitar",60]
  ]},
  "mar-05": { topic: "Fantastic Four members and close allies in Marvel Comics", rows: [
    ["Reed Richards",10,["Mister Fantastic"]],["Sue Storm",10,["Invisible Woman"]],["Johnny Storm",10,["Human Torch"]],["Ben Grimm",10,["The Thing"]],["Franklin Richards",30],["Valeria Richards",30],["Alicia Masters",30],["H.E.R.B.I.E.",60,["Herbie"]],["Crystal",30],["Medusa",30],["Black Bolt",30],["Namor",10,["Sub-Mariner"]],["She-Hulk",30,["Jennifer Walters"]],["Luke Cage",60],["Spider-Man",10,["Peter Parker"]],["Ant-Man",30,["Scott Lang","Hank Pym"]],["Silver Surfer",10],["Wyatt Wingfoot",60],["Dragon Man",60],["Thundra",60],["T'Challa",30,["Black Panther"]],["Storm",30,["Ororo Munroe"]],["Psycho-Man",60],["Impossible Man",30],["Mole Man",30],["Annihilus",30],["Super-Skrull",30],["Puppet Master",30],["Wizard",30],["Diablo",60],["Red Ghost",60],["Mad Thinker",60],["Mister Fantastic's father Nathaniel Richards",85],["H.E.R.B.I.E. the robot",60],["Agatha Harkness",60]
  ]},
  "mar-06": { topic: "street-level Marvel heroes", rows: [
    ["Daredevil",10,["Matt Murdock"]],["Luke Cage",10],["Iron Fist",10,["Danny Rand"]],["Jessica Jones",10],["Punisher",10,["Frank Castle"]],["Moon Knight",10,["Marc Spector"]],["Misty Knight",30],["Colleen Wing",30],["White Tiger",30],["Echo",30,["Maya Lopez"]],["Shang-Chi",10],["Cloak",30,["Tyrone Johnson"]],["Dagger",30,["Tandy Bowen"]],["Misty Knight",30],["Hellcat",30,["Patsy Walker"]],["Elektra",10],["Black Cat",10,["Felicia Hardy"]],["Spider-Man",10,["Peter Parker"]],["Miles Morales",10],["Silk",30,["Cindy Moon"]],["Spider-Woman",30,["Jessica Drew"]],["Mackay's Black Knight",85],["Hawkeye",10,["Clint Barton"]],["Kate Bishop",10],["Mockingbird",30,["Bobbi Morse"]],["America Chavez",30],["Squirrel Girl",30,["Doreen Green"]],["Songbird",60,["Melissa Gold"]],["Nighthawk",60],["Night Thrasher",60],["Speedball",60],["D-Man",85,["Demolition Man"]],["Rage",60],["Shroud",60],["Paladin",60],["Tarantula",60],["Silver Sable",30],["The Prowler",30]
  ]},
  "mar-07": { topic: "mutant nations, islands and major mutant communities", rows: [
    ["Krakoa",10],["Arakko",10],["Utopia",30],["Genosha",10],["Muir Island",30],["Madripoor",30],["Transia",60],["Wundagore Mountain",60],["The Morlocks' tunnels",30,["Morlock Tunnels"]],["The Savage Land",30],["The Xavier Institute",10,["Xavier's School"]],["The Jean Grey School",30],["The Massachusetts Academy",30],["The Hellfire Academy",60],["The Quiet Council",30],["The Great Ring of Arakko",60],["The Green Lagoon",60],["The Crucible",60],["The Waiting Room",60],["The White Hot Room",30],["Otherworld",30],["Avalon",30],["Genoshan nation",10],["New Tian",60],["The Exiles' reality",85],["The Age of Apocalypse",30],["House of M",30],["The Mojoverse",60],["The Peak",85],["X-Force's Krakoan habitat",85]
  ]},
  "dcc-01": { topic: "Justice League members across DC Comics eras", rows: [
    ["Superman",10],["Batman",10],["Wonder Woman",10],["The Flash",10,["Barry Allen","Wally West"]],["Green Lantern",10,["Hal Jordan","John Stewart","Guy Gardner","Kyle Rayner"]],["Aquaman",10,["Arthur Curry"]],["Martian Manhunter",10,["J'onn J'onzz"]],["Green Arrow",10,["Oliver Queen"]],["Black Canary",10,["Dinah Lance"]],["Hawkgirl",10],["Hawkman",10],["Zatanna",30],["Atom",30,["Ray Palmer"]],["Firestorm",30],["Red Tornado",30],["Plastic Man",30],["Blue Beetle",30,["Ted Kord","Jaime Reyes"]],["Booster Gold",30],["Mister Miracle",60],["Big Barda",60],["Captain Marvel",30,["Shazam"]],["Vixen",30],["Doctor Fate",30],["The Question",30],["Cyborg",10],["Steel",30],["Supergirl",30],["Power Girl",30],["Animal Man",60],["Metamorpho",60],["Captain Atom",30],["Katana",60],["Orion",60],["Stargirl",30],["The Atom Smasher",60],["Plastic Man",30],["Jesse Quick",60],["Aztek",85],["Gypsy",85],["Mister Terrific",30]
  ]},
  "dcc-02": { topic: "Green Lanterns and other recognised Lantern Corps members", rows: [
    ["Hal Jordan",10],["John Stewart",10],["Guy Gardner",10],["Kyle Rayner",10],["Jessica Cruz",10],["Simon Baz",10],["Alan Scott",10],["Jo Mullein",30],["Keli Quintela",30,["Teen Lantern"]],["Jade",30,["Jennifer-Lynn Hayden"]],["Kilowog",10],["Abin Sur",10],["Sinestro",10],["Soranik Natu",30],["Tomar-Re",30],["Tomar-Tu",60],["Arisia Rrab",30],["Ch'p",30],["B'dg",60],["Mogo",30],["G'nort",30],["Larfleeze",10],["Saint Walker",30],["Atrocitus",10],["Bleez",30],["Carol Ferris",10,["Star Sapphire"]],["Fatality",30],["Indigo-1",30],["Black Hand",10],["Arkillo",30],["Munk",60],["Lyssa Drak",60],["Razer",30],["Rond Vidar",60],["Rot Lop Fan",60],["Dkrtzy RRR",85],["Vath Sarn",60],["Isamot Kol",60],["Iolande",60],["Boodikka",60],["Kreon",60],["Hannu",60],["Sodam Yat",30],["M'ten",85],["Medphyll",60],["Xrill-Vrex",85],["Two-Six",85],["Chaselon",60],["Apros",60],["Ash",60],["Bzzd",60],["Stel",60],["Driq",85],["Turytt",60],["Waverly Sayre",85],["Green Man",60],["Jack T. Chance",60],["Laira",60],["Ke'Haan",60],["Graf Toren",85],["Morro",85],["Rot Lop Fan",60],["Bzzd",60],["Hannu",60],["Mogo",30],
  ]},
  "dcc-03": { topic: "members of the Bat-family across comics and major continuities", rows: [
    ["Bruce Wayne",10,["Batman"]],["Dick Grayson",10,["Nightwing","Robin"]],["Jason Todd",10,["Red Hood"]],["Tim Drake",10,["Robin","Red Robin"]],["Damian Wayne",10,["Robin"]],["Barbara Gordon",10,["Batgirl","Oracle"]],["Cassandra Cain",30,["Batgirl","Orphan"]],["Stephanie Brown",30,["Spoiler","Batgirl"]],["Duke Thomas",30,["The Signal"]],["Kate Kane",30,["Batwoman"]],["Luke Fox",30,["Batwing"]],["Jean-Paul Valley",60,["Azrael"]],["Helena Bertinelli",30,["Huntress"]],["Harper Row",60,["Bluebird"]],["Bette Kane",60,["Flamebird"]],["Alfred Pennyworth",10],["Lucius Fox",30],["Julia Pennyworth",60],["Onyx Adams",60],["Cluemaster",60],["Holly Robinson",60],["Harley Quinn",30],["Catwoman",10,["Selina Kyle"]],["Ace the Bat-Hound",60],["Bat-Mite",60],["Gotham Girl",85],["Gordon",10,["James Gordon"]],["The Huntress",30],["Terry McGinnis",30,["Batman Beyond"]],["Carrie Kelley",30],["Talia al Ghul",30],["Damian's mother Talia",60]
  ]},
  "dcc-04": { topic: "speedsters from DC Comics", rows: [
    ["Barry Allen",10,["The Flash"]],["Wally West",10],["Jay Garrick",10],["Bart Allen",10,["Impulse","Kid Flash"]],["Jesse Quick",30,["Jesse Chambers"]],["Max Mercury",30],["Johnny Quick",30],["XS",30,["Jenni Ognats"]],["Avery Ho",30],["Wallace West",30,["Ace West"]],["Iris West II",60],["Godspeed",30,["August Heart"]],["Eobard Thawne",10,["Reverse-Flash"]],["Hunter Zolomon",30,["Zoom"]],["Savitar",30],["Daniel West",60,["Reverse-Flash"]],["Inertia",60,["Thaddeus Thawne"]],["The Rival",60],["Black Flash",30],["Fastback",60],["Bizarro Flash",60],["Lady Flash",60],["Cobalt Blue",30,["Malcolm Thawne"]],["The Turtle",30],["Trajectory",60],["Red Trinity",60],["Blue Trinity",60],["White Lightning",85],["Negative Flash",85],["Godspeed's clones",85],["The Flash of Earth-2",30],["The Flash of Earth-3",60],["The Flash of Earth-12",85]
  ]},
  "dcc-05": { topic: "enemies of Superman in DC Comics", rows: [
    ["Lex Luthor",10],["General Zod",10],["Brainiac",10],["Doomsday",10],["Bizarro",10],["Mister Mxyzptlk",10],["Parasite",10],["Metallo",10],["Toyman",10],["Livewire",30],["Silver Banshee",30],["Cyborg Superman",10,["Hank Henshaw"]],["Eradicator",30],["Manchester Black",30],["Lobo",10],["Ultra-Humanite",30],["Mongul",10],["Titano",30],["Atomic Skull",30],["Kryptonite Man",30],["The Prankster",30],["The Toyman",10],["Intergang",30],["Bloodsport",30],["Volcana",60],["Blaze",60],["Lord Satanus",60],["The Elite",30],["Maxima",30],["The Cyborg",60],["Kancer",85],["La Encantadora",85],["Kru-El",85],["Nam-Ek",60],["Faora",30],["Jax-Ur",60],["Non",60],["Mala",85],["Draaga",85],["The Phantom Zone criminals",30]
  ]},
  "dcc-06": { topic: "DC cosmic characters, forces and New Gods", rows: [
    ["Darkseid",10],["Highfather",10],["Orion",10],["Mister Miracle",10],["Big Barda",10],["Metron",10],["Lightray",30],["Kalibak",30],["Granny Goodness",30],["Desaad",30],["Forager",30],["Himon",60],["Beautiful Dreamer",60],["Mark Moonrider",60],["Serifan",60],["Vykin",60],["Takion",30],["The Anti-Monitor",10],["Monitor",10],["Perpetua",30],["The Great Darkness",30],["The Source",10],["The Source Wall",30],["The Spectre",10],["Mister Mind",30],["Nekron",30],["The Endless",10],["Dream",10,["Morpheus"]],["Death of the Endless",30],["Destiny",30],["Destruction",30],["Desire",30],["Despair",30],["Delirium",30],["The Presence",10],["Lucifer Morningstar",10],["Michael Demiurgos",30],["Elaine Belloc",60],["The Time Trapper",30],["Krona",30],["The Guardians of the Universe",10],["The Controllers",60],["The Zamarons",30],["The Darkstars",30],["Lords of Order",30],["Lords of Chaos",30],["Eclipso",30],["Black Racer",30],["The New Gods",10],["The Forever People",30]
  ]},
  "dcc-07": { topic: "Teen Titans members across generations", rows: [
    ["Robin",10,["Dick Grayson","Tim Drake","Damian Wayne"]],["Nightwing",10],["Starfire",10,["Koriand'r"]],["Raven",10],["Beast Boy",10,["Changeling","Garfield Logan"]],["Cyborg",10,["Victor Stone"]],["Donna Troy",10],["Wally West",10,["Kid Flash"]],["Roy Harper",10,["Speedy","Arsenal","Red Arrow"]],["Garth",30,["Aqualad","Tempest"]],["Lilith Clay",30,["Omen"]],["Mal Duncan",30,["Herald","Guardian"]],["Bumblebee",30,["Karen Beecher"]],["Terra",10,["Tara Markov"]],["Jericho",30,["Joseph Wilson"]],["Ravager",30,["Rose Wilson"]],["Superboy",10,["Conner Kent"]],["Wonder Girl",10,["Cassie Sandsmark"]],["Blue Beetle",10,["Jaime Reyes"]],["Miss Martian",30,["M'gann M'orzz"]],["Static",30,["Virgil Hawkins"]],["Bunker",60,["Miguel Barragan"]],["Skitter",60],["Solstice",60,["Kiran Singh"]],["Red Star",30,["Leonid Kovar"]],["Argent",30,["Toni Monetti"]],["Risk",30,["Cody Driscoll"]],["Hot Spot",60,["Isaiah Crockett"]],["Joto",60,["Hotspot"]],["Pantha",60],["Phantasm",60,["Danny Chase"]],["Kole",60],["Gnarrk",85],["Golden Eagle",60],["Hawk",30,["Hank Hall"]],["Dove",30,["Dawn Granger"]],["Power Boy",85],["Mammoth",60],["Wildebeest",60],["Rose Wilson",30],["Cyborgirl",85],["Ravager",30],["Solstice",60]
  ]}
};


const deepCuts: Record<string, Extra[]> = {
  "mcu-01": [["Ajak",60],["Ikaris",30],["Sprite",60],["Druig",30],["Kingo",30],["Arishem",30],["Xu Wenwu",30,["Wenwu"]],["Xialing",30],["Ying Li",60],["Katy Chen",30,["Katy"]],["Trevor Slattery",30],["Dar-Benn",60],["G'iah",30],["Talos",30],["Elektra Natchios",60],["Echo",30,["Maya Lopez"]],["Jack Duquesne",60,["Swordsman"]],["Arthur Harrow",30],["Khonshu",30],["Layla El-Faouly",30,["Scarlet Scarab"]],["Ravonna Renslayer",30],["Brad Wolfe",60,["X-5"]],["O.B.",60,["Ouroboros"]],["B-15",30],["The Ancient One",30],["Mordo",30,["Karl Mordo"]],["Ramonda",30]],
  "mcu-02": [["The Infinity Gauntlet",10,["Gauntlet"]],["The Tesseract",10,["Cosmic Cube"]],["The Eye of Agamotto",30],["The Aether",30],["The Orb of Morag",30],["Eson the Searcher",60],["The Celestials",60],["The Black Order",60],["Cull Obsidian",60],["Ebony Maw",30],["Corvus Glaive",60],["Proxima Midnight",60],["Johann Schmidt",30,["Red Skull"]],["The Living Tribunal",100],["Eternity",60],["Death",85],["The Grandmaster",85]],
  "mcu-03": [["The Howling Commandos",30],["The Strategic Scientific Reserve",60,["SSR"]],["The Winter Guard",85],["The United States Air Force",60],["Stark Industries",30],["Pym Technologies",30],["The Roxxon Corporation",30,["Roxxon"]],["The Midnight Angels",60],["The Ancestral Council",60],["The Kree Empire",30],["The Skrull Empire",30],["The Council of Kangs",60],["The TVA Minutemen",60],["The Hand",60],["The Tracksuit Mafia",60],["The War Dogs",60],["The Extremis program",60]],
  "mcu-04": [["Baldur",60],["Tyr",60],["Love",60],["Gorr the God Butcher",30],["Bor",60,["Borr"]],["The Destroyer",60],["The Frost Giants",60],["The Einherjar",60],["The Valkyries",30],["Beta Ray Bill",85],["The Serpent",100]],
  "mcu-05": [["London",10],["San Francisco",10],["Los Angeles",30],["Washington, D.C.",10,["Washington DC"]],["Queens",10],["Brooklyn",10],["Sokovia",30],["Latveria",60],["K'un-Lun",60,["Kun Lun"]],["Madripoor",30],["New York Sanctum",30],["Hong Kong Sanctum",60],["London Sanctum",60],["The Ancestral Plane",30],["The Garden",60],["The Sacred Timeline",30],["The Quantum Void",60],["The World Forge",85]],
  "mcu-06": [["The Abilisk",60],["The Sovereign",30],["J'son",85],["The Universal Church of Truth",60],["Rhomann Dey",60],["Irani Rael",60],["Nova Prime",60],["The Badoon",60],["The Stark",85],["The Kree Accusers",60]],
  "mcu-07": [["Victor Timely",30],["The Beyonder",85],["Earth-838 Reed Richards",60],["Earth-838 Captain Carter",60],["Earth-838 Black Bolt",60],["Earth-838 Maria Rambeau",60],["Earth-838 Professor X",60],["The Council of Kangs",30],["The TVA Minutemen",60],["The Void's Alioth",60]],
  "dcm-01": [["Freddy Freeman",30],["Mary Bromfield",30,["Mary Marvel"]],["Darla Dudley",60],["Eugene Choi",60],["Pedro Peña",60],["Antiope",30],["Hippolyta",10],["Steve Trevor",10],["Nuidis Vulko",30],["King Nereus",60],["Atlanna",30],["Martha Wayne",30],["Thomas Wayne",30],["Patty Spivot",60],["Henry Allen",30],["Nora Allen",30],["Alura In-Ze",60],["Zor-El",60],["Jor-El",10],["Faora-Ul",30],["Lara Lor-Van",60],["Krypto",30],["Jimmy Olsen",30]],
  "dcm-02": [["Blüdhaven",30,["Bludhaven"]],["Chernobyl",60],["Gotham Harbor",30],["Gotham City Police Department",30,["GCPD"]],["Themysciran palace",60],["Kryptonopolis",85],["Argo City",60],["Phantom Zone",30],["Bialya",85],["Markovia",85],["Santa Prisca",60],["The Batcave",10],["The Fortress of Solitude",10],["The Daily Planet",10],["Themyscira",10]],
  "dcm-03": [["Lucius Fox",10],["Leslie Thompkins",60],["Cassandra Cain",30],["Stephanie Brown",30],["Duke Thomas",60],["Kate Kane",30],["Azrael",60,["Jean-Paul Valley"]],["Huntress",30,["Helena Bertinelli"]],["The Ventriloquist",60],["Professor Pyg",85],["Hugo Strange",60],["Killer Moth",60],["Anarky",60],["Talon",60],["Julia Pennyworth",60],["Bette Kane",60]],
  "dcm-04": [["The Eradicator",60],["Manchester Black",60],["Mongul",30],["Lobo",30],["Black Hand",60],["Felix Faust",60],["Klarion the Witch Boy",60],["Circe",30],["The Anti-Monitor",30],["Parademons",30],["The Furies",60],["Professor Zoom",30],["Captain Cold",30],["Heat Wave",60],["Mirror Master",60],["Weather Wizard",60],["Gorilla Grodd",30]],
  "dcm-05": [["Chato Santana",60,["El Diablo"]],["Christopher Weiss",60,["Slipknot"]],["George Harkness",60,["Captain Boomerang"]],["Cassandra Cain",60],["Bronze Tiger",60],["Black Spider",60],["Plastique",60],["Killer Frost",30],["Rick Flag Jr.",60],["Cleo Cazo",30,["Ratcatcher 2"]],["Mongal",60],["Blackguard",60],["TDK",60]],
  "dcm-06": [["Thomas Wayne",30],["Martha Wayne",30],["Jor-El",10],["Lara Lor-Van",60],["Zod",10,["Dru-Zod"]],["Kara Zor-El",30,["Supergirl"]],["Krypto",30],["Alfred Pennyworth",10],["Lois Lane",10],["Jimmy Olsen",30],["Perry White",30],["Lucius Fox",30],["Harvey Dent",30],["Selina Kyle",10],["Edward Nygma",30],["Oswald Cobblepot",30],["Diana Prince",10],["Arthur Curry",10],["Barry Allen",10]],
  "dcm-07": [["Etrigan",30],["Jason Blood",30],["John Constantine",10],["Zatanna Zatara",10],["Madame Xanadu",30],["Deadman",30],["Swamp Thing",30],["The Spectre",30],["Ragman",60],["The Demon",30],["Neron",60],["Trigon",30],["Mordru",60],["Felix Faust",30],["Klarion",60],["Circe",30],["Doctor Fate",10],["Kent Nelson",30],["Nabu",60]],
  "mar-01": [["Forge",30],["Banshee",30],["Sunfire",30],["Thunderbird",30,["John Proudstar"]],["Warpath",30,["James Proudstar"]],["Cecilia Reyes",60],["M",30,["Monet St. Croix"]],["Chamber",30,["Jono Starsmore"]],["Husk",30,["Paige Guthrie"]],["Skin",30,["Angelo Espinosa"]],["Magma",30,["Amara Aquilla"]],["Cypher",30,["Doug Ramsey"]],["Warlock",30],["Karma",30,["Xi'an Coy Manh"]],["Mirage",30,["Dani Moonstar"]],["Cannonball",30,["Sam Guthrie"]],["Wolfsbane",30,["Rahne Sinclair"]],["Boom-Boom",30,["Tabitha Smith"]],["Rictor",30,["Julio Richter"]],["Shatterstar",30],["Frenzy",60],["Mimic",60],["Exodus",60],["Hope Summers",30],["Bishop",30,["Lucas Bishop"]],["Polaris",30,["Lorna Dane"]],["Daken",60,["Akihiro"]],["X-23",30,["Laura Kinney"]]],
  "mar-02": [["The Jackal",30,["Miles Warren"]],["Tombstone",30,["Lonnie Lincoln"]],["Hammerhead",30],["Silvermane",60],["The Rose",60,["Richard Fisk"]],["The Enforcers",60],["Spencer Smythe",60],["Alistair Smythe",60],["The Spot",30,["Jonathan Ohnn"]],["Mister Negative",30,["Martin Li"]],["Screwball",60],["The Lizard",10,["Curt Connors"]],["The Chameleon",30,["Dmitri Smerdyakov"]],["The Beetle",30],["The Puma",60,["Thomas Fireheart"]],["Swarm",60],["Slyde",85],["The Thousand",85],["Sin-Eater",60],["Kindred",60],["Demogoblin",60],["Shriek",60],["Carrion",60],["Cardiac",60]],
  "mar-03": [["The Living Tribunal",30],["Eternity",10],["Infinity",30],["Death",30],["Oblivion",30],["The In-Betweener",60],["Master Order",60],["Lord Chaos",60],["The Beyonder",30],["Molecule Man",30,["Owen Reece"]],["Magus",30],["Pip the Troll",60],["The Watcher",30,["Uatu"]],["Nebula",30],["Gamora",30],["Silver Surfer",30],["Doctor Doom",30,["Victor von Doom","Victor Von Doom","Victor Doom","Doom","Dr. Doom","Dr Doom"]],["Reed Richards",30,["Mister Fantastic"]],["Sue Storm",30,["Invisible Woman"]],["Namor",30],["Black Panther",30,["T'Challa"]],["Wolverine",30,["Logan"]]],
  "mar-04": [["The One Above All",10],["The One Below All",30],["The Living Tribunal",10],["Eternity",10],["Infinity",10],["Death",10],["Oblivion",30],["The Beyonder",10],["Molecule Man",30,["Owen Reece"]],["The Phoenix Force",10],["The First Firmament",60],["The Fulcrum",60],["The In-Betweener",30],["Master Order",30],["Lord Chaos",30],["The Stranger",30],["The Elders of the Universe",30],["The Celestials",10],["The Watchers",30],["The Builders",60],["The Aspirants",60]],
  "mar-05": [["Doctor Doom",10,["Doom","Victor von Doom","Victor Von Doom","Victor Doom","Dr. Doom","Dr Doom","Doctor Victor von Doom"]],["Valeria Richards",30],["Franklin Richards",30],["Alicia Masters",30],["H.E.R.B.I.E.",60,["Herbie"]],["Crystal",30],["Medusa",30],["Black Bolt",30],["Lockjaw",30],["Wyatt Wingfoot",60],["Lyja",60],["Dragon Man",60],["The Wizard",30,["Bentley Wittman"]],["Puppet Master",30,["Phillip Masters"]],["Mole Man",10,["Harvey Elder"]],["Annihilus",10],["Super-Skrull",30,["Kl'rt"]],["Blastaar",60],["Terrax",60],["Klaw",30],["Galactus",10],["The Impossible Man",60],["The Mad Thinker",30],["Red Ghost",60],["Diablo",60],["Kristoff Vernard",60]],
  "mar-06": [["Cloak",30,["Tyrone Johnson"]],["Dagger",30,["Tandy Bowen"]],["Misty Knight",30],["Colleen Wing",30],["White Tiger",30],["Ava Ayala",60],["Jessica Jones",10],["Luke Cage",10,["Power Man"]],["Iron Fist",10,["Danny Rand"]],["Daredevil",10,["Matt Murdock"]],["Punisher",10,["Frank Castle"]],["Moon Knight",30,["Marc Spector"]],["Echo",30,["Maya Lopez"]],["Ronin",30],["Night Thrasher",60],["D-Man",60,["Demolition Man"]],["Cardiac",60],["Paladin",60],["Silver Sable",30],["Prowler",30],["The Hood",30,["Parker Robbins"]]],
  "mar-07": [["Utopia",30],["Genosha",10],["Muir Island",30],["Madripoor",30],["Wundagore Mountain",30],["The Xavier Institute",10,["X-Mansion","Xavier's School"]],["The Jean Grey School",30],["The Hellfire Club",30],["The Savage Land",30],["The Morlock Tunnels",30],["The Living Island",60,["Krakoa"]],["The Quiet Council",30],["The Green Lagoon",60],["Arak Coral",60],["The White Hot Room",60],["Otherworld",30],["Avalon",30],["The Vault",60]],
  "dcc-01": [["Zatanna",30],["Green Arrow",10,["Oliver Queen"]],["Black Canary",10,["Dinah Lance"]],["Hawkman",30],["Hawkgirl",30],["The Atom",30,["Ray Palmer"]],["Firestorm",30],["Red Tornado",30],["Plastic Man",30],["The Question",30,["Vic Sage"]],["Mister Terrific",30],["Booster Gold",30],["Blue Beetle",30,["Ted Kord","Jaime Reyes"]],["Vixen",30,["Mari McCabe"]],["Doctor Fate",30],["Captain Atom",30],["Animal Man",60],["Metamorpho",30],["Black Lightning",30],["Power Girl",30],["Huntress",30],["The Spectre",60],["Orion",60],["Mister Miracle",60]],
  "dcc-02": [["Rot Lop Fan",85],["Dkrtzy RRR",100],["B'dg",60],["Bzzd",85],["Ash",60],["Apros",60],["Chaselon",60],["Galius Zed",85],["Stel",60],["Vath Sarn",60],["Isamot Kol",60],["Soranik Natu",30],["Iolande",60],["Mogo",30],["Arisia Rrab",30],["Katma Tui",30],["Tomar-Tu",60],["Salaak",30],["Keli Quintela",30,["Teen Lantern"]],["Jo Mullein",30],["Simon Baz",10],["Jessica Cruz",10],["Jade",30,["Jennifer-Lynn Hayden"]],["Alan Scott",10],["Guy Gardner",10],["Kyle Rayner",10],["John Stewart",10],["Kilowog",10],["Sinestro",10],["Saint Walker",30],["Atrocitus",30],["Larfleeze",30],["Carol Ferris",30,["Star Sapphire"]],["Bleez",60],["Dex-Starr",30]],
  "dcc-03": [["Batwing",30,["Luke Fox"]],["Bluebird",30,["Harper Row"]],["Orphan",30,["Cassandra Cain"]],["Spoiler",30,["Stephanie Brown"]],["The Signal",30,["Duke Thomas"]],["Flamebird",60],["Huntress",30,["Helena Bertinelli"]],["Batwoman",30,["Kate Kane"]],["Azrael",30,["Jean-Paul Valley"]],["Bat-Mite",60],["Bat-Cow",85],["Ace the Bat-Hound",60],["Gotham Girl",60],["Onyx",60],["Ghost-Maker",30],["Clownhunter",60],["Talon",30],["Julia Pennyworth",60],["Bette Kane",60]],
  "dcc-04": [["Jesse Quick",30],["Max Mercury",30],["Johnny Quick",30],["XS",30,["Jenni Ognats"]],["Impulse",10,["Bart Allen"]],["Jesse Chambers",30],["The Rival",60],["Inertia",60],["Savitar",30],["Godspeed",30,["August Heart"]],["Black Flash",30],["Fast Track",60],["The Turtle",60],["Speed Demon",60],["Cobalt Blue",30],["Eobard Thawne",10,["Reverse-Flash"]],["Daniel West",60],["Avery Ho",30],["Wallace West",30]],
  "dcc-05": [["Manchester Black",30],["Mongul",30],["Lobo",30],["Cyborg Superman",10,["Hank Henshaw"]],["Superboy-Prime",30],["Atomic Skull",30],["Livewire",30,["Leslie Willis"]],["Silver Banshee",30],["Toyman",30,["Winslow Schott"]],["The Prankster",60],["Ultra-Humanite",30],["Titano",30],["The Elite",30],["The Eradicator",30],["The Kryptonite Man",60]],
  "dcc-06": [["The Anti-Life Equation",10],["The Omega Effect",30],["The Life Equation",60],["The Emotional Spectrum",30],["The Emotional Entities",30],["The Controllers",60],["The Zamarons",30],["The Guardians of Oa",10],["The Green Lantern Corps",10],["The Sinestro Corps",10],["The Red Lantern Corps",30],["The Orange Lantern Corps",30],["The Blue Lantern Corps",30],["The Indigo Tribe",30],["The Star Sapphires",30],["The Black Lantern Corps",30],["The White Lantern Corps",30],["The Ultraviolet Corps",60],["The Darkstars",30]],
  "dcc-07": [["Red Robin",30,["Tim Drake"]],["Red Hood",30,["Jason Todd"]],["Blue Beetle",30,["Jaime Reyes"]],["Bumblebee",30,["Karen Beecher"]],["Ravager",30,["Rose Wilson"]],["Jericho",30,["Joseph Wilson"]],["Omen",30,["Lilith Clay"]],["Herald",30,["Mal Duncan"]],["Pantha",60],["Wildebeest",60],["Mammoth",30],["Jinx",30],["Psimon",30],["Brother Blood",30],["Trigon",10],["Blackfire",30,["Komand'r"]],["Terra",10,["Tara Markov"]],["Bunker",60],["Solstice",60],["Roundhouse",60],["Djinn",60],["Crush",60],["Kole",60],["Gnarrk",85]]
};
for (const [id, rows] of Object.entries(deepCuts)) banks[id].rows.push(...rows);

const identityAliases: Record<string, string[]> = {
  "doctor doom": ["Doom","Dr Doom","Dr. Doom","Victor von Doom","Victor Von Doom","Victor Doom","Doctor Victor von Doom"],
  "peter parker": ["Spider-Man","Spiderman","Peter Benjamin Parker"],
  "miles morales": ["Spider-Man","Spiderman","Miles Gonzalo Morales"],
  "tony stark": ["Iron Man","Anthony Edward Stark"],
  "steve rogers": ["Captain America","The First Avenger","Steven Rogers"],
  "sam wilson": ["Falcon","Sam Wilson-Captain America"],
  "natasha romanoff": ["Black Widow","Natalia Romanova"],
  "clint barton": ["Hawkeye","Clinton Barton"],
  "bruce banner": ["Hulk","Dr Bruce Banner","Robert Bruce Banner"],
  "james rhodes": ["War Machine","Rhodey","James Rupert Rhodes"],
  "t'challa": ["Black Panther","King of Wakanda"],
  "thor": ["Thor Odinson","The God of Thunder"],
  "jane foster": ["Mighty Thor","Dr Jane Foster"],
  "scott lang": ["Ant-Man","Scott Edward Harris Lang"],
  "hope van dyne": ["Wasp","Hope Pym"],
  "wade wilson": ["Deadpool","The Merc with a Mouth"],
  "logan": ["Wolverine","James Howlett","Weapon X"],
  "james howlett": ["Wolverine","Logan"],
  "charles xavier": ["Professor X","Professor Charles Xavier"],
  "erik lehnsherr": ["Magneto","Max Eisenhardt"],
  "max eisenhardt": ["Magneto","Erik Lehnsherr"],
  "jean grey": ["Marvel Girl","Phoenix","Jean Elaine Grey"],
  "ororo munroe": ["Storm"],
  "scott summers": ["Cyclops"],
  "kurt wagner": ["Nightcrawler"],
  "hank mccoy": ["Beast"],
  "anna marie": ["Rogue"],
  "remy lebeau": ["Gambit"],
  "pietro maximoff": ["Quicksilver"],
  "wanda maximoff": ["Scarlet Witch"],
  "matt murdock": ["Daredevil","The Man Without Fear"],
  "frank castle": ["The Punisher"],
  "jennifer walters": ["She-Hulk"],
  "marc spector": ["Moon Knight"],
  "stephen strange": ["Doctor Strange","Dr Strange"],
  "carol danvers": ["Captain Marvel"],
  "kamala khan": ["Ms Marvel","Ms. Marvel"],
  "norman osborn": ["Green Goblin"],
  "otto octavius": ["Doctor Octopus","Doc Ock"],
  "eddie brock": ["Venom"],
  "cletus kasady": ["Carnage"],
  "wilson fisk": ["Kingpin"],
  "harvey elder": ["Mole Man"],
  "bentley wittman": ["The Wizard"],
  "reed richards": ["Mister Fantastic","Mr Fantastic"],
  "susan storm": ["Invisible Woman","Sue Storm"],
  "ben grimm": ["The Thing","Benjamin Grimm"],
  "johnny storm": ["Human Torch"],
  "bruce wayne": ["Batman","The Dark Knight"],
  "clark kent": ["Superman","Kal-El","Kal El"],
  "diana prince": ["Wonder Woman","Diana of Themyscira"],
  "barry allen": ["The Flash","Flash"],
  "wally west": ["The Flash","Kid Flash"],
  "arthur curry": ["Aquaman","Orin"],
  "oliver queen": ["Green Arrow"],
  "dinah lance": ["Black Canary"],
  "selina kyle": ["Catwoman"],
  "harvey dent": ["Two-Face","Two Face"],
  "edward nygma": ["The Riddler","Riddler"],
  "oswald cobblepot": ["The Penguin","Penguin"],
  "pamela isley": ["Poison Ivy"],
  "victor fries": ["Mr Freeze","Mister Freeze"],
  "slade wilson": ["Deathstroke","The Terminator"],
  "dick grayson": ["Nightwing","Robin","Richard Grayson"],
  "jason todd": ["Red Hood","Robin"],
  "tim drake": ["Red Robin","Robin"],
  "damian wayne": ["Robin"],
  "barbara gordon": ["Batgirl","Oracle"],
  "kara zor-el": ["Supergirl","Kara Zor El"],
  "billy batson": ["Shazam","Captain Marvel"],
  "teth-adam": ["Black Adam","Teth Adam"],
  "j'onn j'onzz": ["Martian Manhunter","Jonn Jonzz"],
  "harleen quinzel": ["Harley Quinn","Dr Harleen Quinzel"],
  "christopher smith": ["Peacemaker"],
  "victor stone": ["Cyborg"],
  "koriand'r": ["Starfire","Kori Anders"],
  "garfield logan": ["Beast Boy","Changeling"],
  "conner kent": ["Superboy"],
  "cassie sandsmark": ["Wonder Girl"],
  "jaime reyes": ["Blue Beetle"],
  "hal jordan": ["Green Lantern"],
  "john stewart": ["Green Lantern"],
  "guy gardner": ["Green Lantern"],
  "kyle rayner": ["Green Lantern"],
  "jessica cruz": ["Green Lantern"],
  "simon baz": ["Green Lantern"],
  "alan scott": ["Green Lantern"],
  "eobard thawne": ["Reverse-Flash","Professor Zoom"],
  "august heart": ["Godspeed"],
  "jenni ognats": ["XS"],
  "bart allen": ["Impulse","Kid Flash"],
  "jennifer-lynn hayden": ["Jade"],
  "lucas bishop": ["Bishop"],
  "laura kinney": ["X-23","Wolverine"],
  "monet st. croix": ["M"],
  "dani moonstar": ["Mirage"],
  "sam guthrie": ["Cannonball"],
  "doug ramsey": ["Cypher"],
  "xi'an coy manh": ["Karma"],
  "tandy bowen": ["Dagger"],
  "tyrone johnson": ["Cloak"],
  "maya lopez": ["Echo"],
  "patsy walker": ["Hellcat"]
};


const breadthWave: Record<string, Extra[]> = {
  "mcu-01": [["Melina Vostokoff",60],["Alexei Shostakov",30,["Red Guardian"]],["Ava Starr",30,["Ghost"]],["Dreykov's daughter Antonia",60,["Antonia Dreykov"]],["Valentina Allegra de Fontaine",30,["Val"]],["U.S. Agent",30,["John Walker"]],["Emil Blonsky",30,["Abomination"]],["Morris",85],["Xu Xialing",30,["Xialing"]],["Ying Nan",60],["Kingo's valet Karun",60,["Karun"]],["Sprite",60],["Druig",30],["Ikaris",30],["Ajak",60],["Eros",60],["Pip the Troll",85],["Razor Fist",60],["Death Dealer",60],["The Mandarin",30]],
  "mcu-02": [["The Power Stone",10],["The Space Stone",10],["The Mind Stone",10],["The Time Stone",10],["The Reality Stone",10],["The Soul Stone",10],["The Infinity Stones",10],["The Infinity Gauntlet",10],["The Nano Gauntlet",30],["The Eternals",60],["The Celestial Engine",85],["The Orb",30],["The Tesseract",10],["The Aether",30],["The Eye of Agamotto",30],["The Scepter",30,["Loki's Scepter"]],["The Darkhold",60],["The Ten Rings",60]],
  "mcu-03": [["The United Nations",60],["The World Security Council",30],["The Avengers Initiative",30],["The Strategic Homeland Intervention Enforcement and Logistics Division",60],["The Department of Damage Control",30],["The Global Repatriation Council",60],["The Wakandan Border Tribe",60],["The Wakandan Royal Guard",60],["The Midnight Angels",60],["The Ancestral Council",60],["The Black Order",30],["The Nova Corps",30],["The Ravagers",30],["The Sovereign",30],["The Kree Starforce",60],["The Starforce",60],["The Skrulls",30],["The Ten Rings organisation",30],["The Hand",60],["The Tracksuit Mafia",60]],
  "mcu-04": [["The Frost Giants",30],["The Einherjar",60],["The Valkyries",30],["The Asgardian Royal Guard",60],["The Destroyer",60],["The Serpent",100],["Bor",60],["Baldur",60],["Tyr",60],["Love",60],["The Grandmaster",60],["Beta Ray Bill",85],["Hela's wolf Fenris",60,["Fenris"]],["Frost Beast",85],["Surtur",30],["Gorr",30,["Gorr the God Butcher"]]],
  "mcu-05": [["New Jersey",30],["Jersey City",30],["Kamar-Taj",30],["The New York Sanctum",30],["The London Sanctum",60],["The Hong Kong Sanctum",60],["The Ancestral Plane",30],["The Soul World",60],["The Garden",60],["The Void",30],["The TVA",30],["The Citadel at the End of Time",60],["The Quantum Void",60],["The World Forge",85],["The Imperial Palace of Wakanda",60],["Birnin Zana",30],["The Golden City",30],["The Great Pyramid of Giza",60]],
  "mcu-06": [["The Ravager Yondu",30],["The Original Guardians",60],["The Ravager faction",30],["The Sovereign High Priestess",60,["Ayesha"]],["The Abilisk",60],["The Hellspawn",85],["The Universal Church of Truth",60],["The Badoon",60],["The Chitauri",30],["The Sakaaran Army",60],["The Kree Accusers",60],["Rhomann Dey",60],["Irani Rael",60],["Nova Prime",60],["The Broker",85]],
  "mcu-07": [["The Council of Kangs",30],["Victor Timely",30],["Rama-Tut",60],["Immortus",60],["The Beyonder",85],["The Watcher",30,["Uatu"]],["Captain Carter",30,["Peggy Carter"]],["Zombie Wanda",60],["Defender Strange",60],["Sinister Strange",60],["Supreme Strange",60],["Earth-838 Professor X",60],["Earth-838 Black Bolt",60],["Earth-838 Reed Richards",60],["Earth-838 Captain Carter",60]],
  "dcm-01": [["Martha Kent",30],["Jonathan Kent",30],["General Swanwick",60],["Faora-Ul",30],["Nam-Ek",60],["Jor-El",10],["Lara Lor-Van",60],["Alfred Pennyworth",10],["Perry White",30],["Jimmy Olsen",30],["Mera",30],["Nuidis Vulko",60],["Hippolyta",10],["Antiope",30],["Steve Trevor",10],["Shazam Family",30],["Freddy Freeman",30],["Mary Bromfield",30],["Eugene Choi",60],["Darla Dudley",60]],
  "dcm-02": [["The Batcave",10],["The Fortress of Solitude",10],["The Daily Planet",10],["The Hall of Justice",30],["The Watchtower",30],["Themysciran palace",60],["Themysciran arena",60],["Argo City",60],["Kryptonopolis",85],["Phantom Zone",30],["Blüdhaven",30,["Bludhaven"]],["Santa Prisca",60],["Markovia",85],["Bialya",85],["Gotham Harbor",30],["Gotham City Police Department",30,["GCPD"]],["Wayne Tower",10],["Wayne Manor",10]],
  "dcm-03": [["Lucius Fox",10],["Leslie Thompkins",60],["Harvey Bullock",30],["Renee Montoya",30],["Vicki Vale",30],["Cassandra Cain",30],["Stephanie Brown",30],["Duke Thomas",60],["Kate Kane",30],["Bette Kane",60],["Azrael",60],["Huntress",30],["Ghost-Maker",30],["Clownhunter",60],["Bat-Mite",60],["Ace the Bat-Hound",60],["Bat-Cow",85],["The Court of Owls",30],["Talon",60],["Professor Pyg",85]],
  "dcm-04": [["Mongul",30],["Lobo",30],["Manchester Black",60],["Cyborg Superman",10,["Hank Henshaw"]],["Superboy-Prime",30],["Atomic Skull",30],["Silver Banshee",30],["Livewire",30],["Toyman",30],["The Prankster",60],["Ultra-Humanite",30],["Titano",30],["The Eradicator",30],["The Kryptonite Man",60],["Captain Cold",30],["Mirror Master",60],["Heat Wave",60],["Gorilla Grodd",30],["Weather Wizard",60],["Savitar",30]],
  "dcm-05": [["El Diablo",30,["Chato Santana"]],["Slipknot",30,["Christopher Weiss"]],["Killer Frost",30],["Bronze Tiger",60],["Black Spider",60],["Plastique",60],["Mongal",60],["Blackguard",60],["TDK",60],["Milton",85],["The Thinker",30,["Clifford DeVoe"]],["The Javelin",60],["The Detachable Kid",60],["Ratcatcher",30,["Otis Flannegan"]],["Cleo Cazo",30],["June Moone",30],["Rick Flag Jr.",60],["The Enchantress",30]],
  "dcm-06": [["Kara Zor-El",30,["Supergirl"]],["Krypto",30],["Jor-El",10],["Lara Lor-Van",60],["Alura In-Ze",60],["Faora-Ul",30],["Nam-Ek",60],["Martha Kent",30],["Jonathan Kent",30],["Perry White",30],["Jimmy Olsen",30],["Lucius Fox",30],["Harvey Dent",30],["Selina Kyle",10],["Edward Nygma",30],["Oswald Cobblepot",30],["Thomas Wayne",30],["Martha Wayne",30]],
  "dcm-07": [["Etrigan",30],["Jason Blood",30],["John Constantine",10],["Zatanna Zatara",10],["Madame Xanadu",30],["Deadman",30],["Swamp Thing",30],["Ragman",60],["Nabu",60],["Kent Nelson",30],["Klarion the Witch Boy",60],["Mordru",60],["Trigon",30],["Neron",60],["The Spectre",30],["Felix Faust",30],["Enchantress",30],["Circe",30]],
  "mar-01": [["Mimic",30],["Exodus",30],["Hope Summers",30],["Bishop",30,["Lucas Bishop"]],["Polaris",30,["Lorna Dane"]],["Daken",60],["X-23",30,["Laura Kinney"]],["Cecilia Reyes",60],["Chamber",30],["Husk",30],["Skin",30],["Magma",30],["Cypher",30],["Warlock",30],["Karma",30],["Mirage",30],["Cannonball",30],["Wolfsbane",30],["Boom-Boom",30],["Rictor",30]],
  "mar-02": [["The Jackal",30,["Miles Warren"]],["Tombstone",30],["Hammerhead",30],["Silvermane",60],["The Rose",60],["The Enforcers",60],["Spencer Smythe",60],["Alistair Smythe",60],["Mister Negative",30],["Screwball",60],["The Chameleon",30],["The Beetle",30],["The Puma",60],["Swarm",60],["Slyde",85],["The Thousand",85],["Sin-Eater",60],["Kindred",60],["Demogoblin",60],["Carrion",60]],
  "mar-03": [["Eternity",10],["Infinity",30],["Death",30],["Oblivion",30],["The In-Betweener",60],["Master Order",60],["Lord Chaos",60],["The Beyonder",30],["Molecule Man",30],["Magus",30],["Pip the Troll",60],["The Watcher",30,["Uatu"]],["Nebula",30],["Gamora",30],["Silver Surfer",30],["Doctor Doom",30,["Doom","Dr Doom","Victor von Doom","Victor Von Doom","Victor Doom","Dr. Doom"]],["Reed Richards",30],["Sue Storm",30],["Namor",30],["Black Panther",30]],
  "mar-04": [["The One Above All",10],["The One Below All",30],["The Living Tribunal",10],["Eternity",10],["Infinity",10],["Death",10],["Oblivion",30],["The Beyonder",10],["Molecule Man",30],["The Phoenix Force",10],["The First Firmament",60],["The Fulcrum",60],["The In-Betweener",30],["Master Order",30],["Lord Chaos",30],["The Stranger",30],["The Elders of the Universe",30],["The Celestials",10],["The Watchers",30],["The Builders",60]],
  "mar-05": [["Valeria Richards",30],["Franklin Richards",30],["Alicia Masters",30],["H.E.R.B.I.E.",60,["Herbie"]],["Crystal",30],["Medusa",30],["Black Bolt",30],["Lockjaw",30],["Wyatt Wingfoot",60],["Lyja",60],["Dragon Man",60],["The Wizard",30],["Puppet Master",30],["Mole Man",10],["Annihilus",10],["Super-Skrull",30],["Blastaar",60],["Terrax",60],["The Impossible Man",60],["The Mad Thinker",30]],
  "mar-06": [["Cloak",30,["Tyrone Johnson"]],["Dagger",30,["Tandy Bowen"]],["Misty Knight",30],["Colleen Wing",30],["White Tiger",30],["Ava Ayala",60],["Jessica Jones",10],["Luke Cage",10],["Iron Fist",10],["Daredevil",10],["Punisher",10],["Moon Knight",30],["Echo",30],["Ronin",30],["Night Thrasher",60],["D-Man",60],["Cardiac",60],["Paladin",60],["Silver Sable",30],["The Hood",30]],
  "mar-07": [["Utopia",30],["Genosha",10],["Muir Island",30],["Madripoor",30],["Wundagore Mountain",30],["The Xavier Institute",10],["The Jean Grey School",30],["The Hellfire Club",30],["The Savage Land",30],["The Morlock Tunnels",30],["The Living Island",60],["The Quiet Council",30],["The Green Lagoon",60],["Arak Coral",60],["The White Hot Room",60],["Otherworld",30],["Avalon",30],["The Vault",60]],
  "dcc-01": [["Zatanna",30],["Green Arrow",10],["Black Canary",10],["Hawkman",30],["Hawkgirl",30],["The Atom",30],["Firestorm",30],["Red Tornado",30],["Plastic Man",30],["The Question",30],["Mister Terrific",30],["Booster Gold",30],["Vixen",30],["Doctor Fate",30],["Captain Atom",30],["Animal Man",60],["Metamorpho",30],["Black Lightning",30],["Power Girl",30],["Huntress",30]],
  "dcc-02": [["Tomar-Re",10],["Ch'p",30],["G'nort",30],["G'Hu",60],["Boodikka",30],["Laira",30],["Sodam Yat",30],["Hannu",60],["Ke'Haan",60],["Graf Toren",60],["Jack T. Chance",60],["Medphyll",60],["Arkkis Chummuck",60],["Xrill-Vrex",85],["Gpaak",85],["Bivvix",85],["Penelops",85],["Miri Riam",60],["Queen Aga'po",60],["Fatality",30],["Ganthet",30],["Sayd",30],["Munk",60],["Brother Warth",60],["Sister Sercy",60],["Brother Hymn",60],["Glomulus",60],["Lex Luthor as Orange Lantern",60],["The Predator",60],["Indigo-1",30],["Munk",60]],
  "dcc-03": [["Batwing",30],["Bluebird",30],["Orphan",30],["Spoiler",30],["The Signal",30],["Flamebird",60],["Batwoman",30],["Azrael",30],["Bat-Mite",60],["Bat-Cow",85],["Ace the Bat-Hound",60],["Gotham Girl",60],["Onyx",60],["Ghost-Maker",30],["Clownhunter",60],["Talon",30],["Julia Pennyworth",60],["Bette Kane",60],["The Cavalier",85],["The Ventriloquist",60]],
  "dcc-04": [["Jesse Quick",30],["Max Mercury",30],["Johnny Quick",30],["XS",30],["Impulse",10],["The Rival",60],["Inertia",60],["Savitar",30],["Godspeed",30],["Black Flash",30],["Fast Track",60],["The Turtle",60],["Speed Demon",60],["Cobalt Blue",30],["Daniel West",60],["Avery Ho",30],["Wallace West",30],["Jesse Chambers",30],["The Flash of Earth-2",60]],
  "dcc-05": [["Manchester Black",30],["Mongul",30],["Lobo",30],["Cyborg Superman",10],["Superboy-Prime",30],["Atomic Skull",30],["Livewire",30],["Silver Banshee",30],["Toyman",30],["The Prankster",60],["Ultra-Humanite",30],["Titano",30],["The Elite",30],["The Eradicator",30],["The Kryptonite Man",60],["Bizarro",10],["Metallo",10],["Parasite",10]],
  "dcc-06": [["The Anti-Life Equation",10],["The Omega Effect",30],["The Life Equation",60],["The Emotional Spectrum",30],["The Emotional Entities",30],["The Controllers",60],["The Zamarons",30],["The Guardians of Oa",10],["The Green Lantern Corps",10],["The Sinestro Corps",10],["The Red Lantern Corps",30],["The Orange Lantern Corps",30],["The Blue Lantern Corps",30],["The Indigo Tribe",30],["The Star Sapphires",30],["The Black Lantern Corps",30],["The White Lantern Corps",30],["The Ultraviolet Corps",60],["The Darkstars",30],["The Forever People",30]],
  "dcc-07": [["Red Robin",30],["Red Hood",30],["Blue Beetle",30],["Bumblebee",30],["Ravager",30],["Jericho",30],["Omen",30],["Herald",30],["Pantha",60],["Wildebeest",60],["Mammoth",30],["Jinx",30],["Psimon",30],["Brother Blood",30],["Trigon",10],["Blackfire",30],["Bunker",60],["Solstice",60],["Roundhouse",60],["Djinn",60],["Crush",60],["Kole",60],["Gnarrk",85]]
};
for (const [id, rows] of Object.entries(breadthWave)) banks[id].rows.push(...rows);
// Additional MCU roster imported from the public mcuapi character catalogue.
// Filtered to continuity === "MCU"; names and listed character aliases are preserved.
banks["mcu-01"].rows.push(
[  "Tony Stark", 30, ["Iron Man"]],
[  "Steve Rogers", 30, ["Captain America"]],
[  "Thor Odinson", 30, ["Thor"]],
[  "Bruce Banner", 30, ["Hulk"]],
[  "Natasha Romanoff", 30, ["Black Widow"]],
[  "Clint Barton", 30, ["Hawkeye"]],
[  "Nick Fury", 30, []],
[  "James Rhodes", 30, ["War Machine"]],
[  "Pepper Potts", 30, []],
[  "Happy Hogan", 30, []],
[  "Phil Coulson", 30, []],
[  "Maria Hill", 30, []],
[  "Peter Parker", 30, ["Spider-Man"]],
[  "Michelle Jones", 30, ["MJ"]],
[  "Ned Leeds", 30, []],
[  "Quentin Beck", 30, ["Mysterio"]],
[  "Peter Quill", 30, ["Star-Lord"]],
[  "Gamora", 30, []],
[  "Drax", 30, ["Drax the Destroyer"]],
[  "Rocket Raccoon", 30, ["Rocket"]],
[  "Groot", 30, []],
[  "Nebula", 30, []],
[  "Stephen Strange", 30, ["Doctor Strange"]],
[  "Wong", 30, []],
[  "Christine Palmer", 30, []],
[  "Karl Mordo", 30, []],
[  "America Chavez", 30, []],
[  "Charles Xavier", 30, ["Professor X"]],
[  "Reed Richards", 85, ["Mister Fantastic"]],
[  "Maria Rambeau", 85, ["Captain Marvel"]],
[  "Peggy Carter", 85, ["Captain Carter"]],
[  "T'Challa", 30, ["Black Panther"]],
[  "Shuri", 30, []],
[  "Okoye", 30, []],
[  "Erik Killmonger", 30, ["Killmonger"]],
[  "Carol Danvers", 30, ["Captain Marvel"]],
[  "Monica Rambeau", 30, ["Photon"]],
[  "Kamala Khan", 30, ["Ms. Marvel"]],
[  "Scott Lang", 30, ["Ant-Man"]],
[  "Hope van Dyne", 30, ["Wasp"]],
[  "Hank Pym", 30, ["Ant-Man"]],
[  "Janet van Dyne", 30, ["Wasp"]],
[  "Cassandra Lang", 30, []],
[  "Darren Cross", 30, ["Yellowjacket"]],
[  "M.O.D.O.K.", 30, []],
[  "Loki Laufeyson", 30, ["Loki"]],
[  "Sylvie Laufeydottir", 85, ["Sylvie"]],
[  "Mobius M. Mobius", 30, ["Mobius"]],
[  "Ravonna Renslayer", 30, []],
[  "Hunter B-15", 30, []],
[  "He Who Remains", 85, []],
[  "Wanda Maximoff", 30, ["Scarlet Witch"]],
[  "Vision", 30, []],
[  "Agatha Harkness", 30, ["Agatha"]],
[  "Billy Maximoff", 30, ["Wiccan"]],
[  "Tommy Maximoff", 30, ["Speed"]],
[  "Pietro Maximoff", 30, ["Quicksilver"]],
[  "Ralph Bohner", 30, []],
[  "Tyler Hayward", 30, []],
[  "Darcy Lewis", 30, []],
[  "Jimmy Woo", 30, []],
[  "Shang-Chi", 30, []],
[  "Katy Chen", 30, []],
[  "Wenwu", 30, ["The Mandarin"]],
[  "Trevor Slattery", 30, []],
[  "Sersi", 30, []],
[  "Ikaris", 30, []],
[  "Thena", 30, []],
[  "Valkyrie", 30, []],
[  "Korg", 30, []],
[  "Hela", 30, []],
[  "James Buchanan Barnes", 30, ["Bucky"]],
[  "Sam Wilson", 30, ["Falcon, Captain America"]],
[  "Sharon Carter", 30, ["Power Broker"]],
[  "Helmut Zemo", 30, ["Baron Zemo"]],
[  "John Walker", 30, ["U.S. Agent"]],
[  "Sue Storm", 30, ["Invisible Woman"]],
[  "Johnny Storm", 30, ["Human Torch"]],
[  "Ben Grimm", 30, ["The Thing"]],
[  "Logan Howlett", 60, ["Wolverine"]],
[  "Cassandra Nova", 60, []],
[  "Thanos", 60, []],
[  "Ultron", 60, []],
[  "Kang the Conqueror", 60, ["Kang"]],
[  "Victor Von Doom", 60, ["Doctor Doom"]],
[  "Emil Blonsky", 60, ["Abomination"]],
[  "Matt Murdock", 60, ["Daredevil"]],
[  "Wilson Fisk", 60, ["Kingpin"]],
[  "Jessica Jones", 60, []],
[  "Luke Cage", 60, []],
[  "Danny Rand", 60, ["Iron Fist"]],
[  "Frank Castle", 60, ["The Punisher"]],
[  "Elektra Natchios", 60, ["Elektra"]],
[  "Karen Page", 60, []],
[  "Foggy Nelson", 60, []],
[  "Billy Russo", 60, ["Jigsaw"]],
[  "Colleen Wing", 60, []],
[  "Misty Knight", 60, []],
[  "Trish Walker", 60, ["Hellcat"]],
[  "Jeri Hogarth", 60, []],
[  "Kate Bishop", 60, ["Hawkeye"]],
[  "Yelena Belova", 60, ["Black Widow"]],
[  "Maya Lopez", 60, ["Echo"]],
[  "Jack Duquesne", 60, ["Swordsman"]],
[  "Eleanor Bishop", 60, []],
[  "Jennifer Walters", 60, ["She-Hulk"]],
[  "Titania", 60, []],
[  "Nikki Ramos", 60, []],
[  "Bruno Carrelli", 60, []],
[  "Nakia Bahadir", 60, []],
[  "Zoe Zimmer", 60, []],
[  "Najma", 60, []],
[  "Marc Spector", 60, ["Moon Knight"]],
[  "Steven Grant", 60, ["Moon Knight"]],
[  "Jake Lockley", 60, ["Moon Knight"]],
[  "Layla El-Faouly", 60, ["Scarlet Scarab"]],
[  "Arthur Harrow", 60, []],
[  "Valentina Allegra de Fontaine", 60, ["Val"]],
[  "Everett K. Ross", 60, []],
[  "Skrull Nick Fury", 60, []],
[  "Skrull Maria Hill", 60, []],
[  "Talos", 60, []],
[  "Soren", 60, []],
[  "Jennifer Kale", 60, []],
[  "Alice Gulliver", 60, []],
[  "Lilia Calderu", 60, []],
[  "Simon Williams", 60, ["Wonder Man"]],
[  "Melinda May", 60, ["The Cavalry"]],
[  "Daisy Johnson", 60, ["Quake"]],
[  "Leo Fitz", 60, []],
[  "Jemma Simmons", 60, []],
[  "Robbie Reyes", 60, ["Ghost Rider"]],
[  "Jeffrey Mace", 60, ["Patriot"]],
[  "Graviton", 60, []],
[  "Edwin Jarvis", 60, []],
[  "Daniel Sousa", 60, []],
[  "Jack Thompson", 60, []],
[  "Alex Wilder", 60, []],
[  "Nico Minoru", 60, []],
[  "Karolina Dean", 60, []],
[  "Gert Yorkes", 60, []],
[  "Chase Stein", 60, []],
[  "Molly Hernandez", 60, []],
[  "Tandy Bowen", 60, ["Dagger"]],
[  "Tyrone Johnson", 60, ["Cloak"]],
[  "Melissa Bowen", 60, []],
[  "Ana Helstrom", 60, []],
[  "Daimon Helstrom", 60, []],
[  "Victoria Helstrom", 60, []],
[  "Blade", 60, []],
[  "Malcolm Ducasse", 60, []],
[  "Dinah Madani", 60, []],
[  "Kurt Wagner", 60, ["Nightcrawler"]],
[  "Remy LeBeau", 60, ["Gambit"]],
[  "Robert Reynolds", 60, ["Sentry"]],
[  "Ava Starr", 60, ["Ghost"]],
[  "Alexei Shostakov", 60, ["Red Guardian"]],
[  "Namor", 60, ["K'uk'ulkan"]],
[  "M'Baku", 60, []],
[  "Joaquin Torres", 60, ["Falcon"]],
[  "Mr. Paradox", 60, ["Paradox"]],
[  "Eric Brooks", 85, ["Blade"]],
[  "Jane Foster", 60, ["Mighty Thor"]],
[  "Odin", 60, []],
[  "Red Skull", 60, ["Johann Schmidt"]],
[  "Obadiah Stane", 60, ["Iron Monger"]],
[  "Ivan Vanko", 60, ["Whiplash"]],
[  "Justin Hammer", 60, []],
[  "Ronan", 60, ["Ronan the Accuser"]],
[  "Kaecilius", 60, []],
[  "The Ancient One", 60, []],
[  "Adrian Toomes", 60, ["Vulture"]],
[  "Nakia", 60, []],
[  "Xialing", 60, []],
[  "Gorr", 60, ["Gorr the God Butcher"]],
[  "Mantis", 60, []],
[  "Khonshu", 60, []],
[  "Isaiah Bradley", 60, []],
[  "May Parker", 60, ["Aunt May"]],
[  "Melina Vostokoff", 60, []],
[  "Betty Ross", 60, []],
[  "Kingo", 60, []],
[  "Sprite", 60, []],
[  "Phastos", 60, []],
[  "Makkari", 60, []],
[  "Druig", 85, []],
[  "Ajak", 85, []],
[  "Gilgamesh", 85, []],
[  "Rio Vidal", 85, []],
[  "Gravik", 85, []],
[  "Jack Russell", 85, ["Werewolf by Night"]],
[  "Elsa Bloodstone", 85, []],
[  "Antonia Dreykov", 85, ["Taskmaster"]],
[  "Riri Williams", 85, ["Ironheart"]],
[  "J.A.R.V.I.S.", 85, []],
[  "F.R.I.D.A.Y.", 85, []],
[  "E.D.I.T.H.", 85, []],
[  "Dum-E", 85, []],
[  "U", 85, []],
[  "Vanessa Fisk", 85, []],
[  "Heather Glenn", 85, []],
[  "Sheila Rivera", 85, []],
[  "Kirsten McDuffie", 85, []],
[  "BB Urich", 85, []],
[  "Cherry", 85, []],
[  "Benjamin Poindexter", 85, ["Bullseye"]],
[  "Daniel Blake", 85, []],
[  "Buck Cashman", 85, []],
[  "Mr. Charles", 85, []],
[  "Mac Gargan", 85, ["Scorpion"]],
[  "Bill Metzger", 85, []],
[  "Jean Grey", 85, []],
[  "Ghost Rider", 85, []],
[  "Toussaint", 85, ["T'Challa II"]],
[  "Thaddeus Ross", 85, ["Red Hulk"]],
[  "Victor Timely", 85, ["Kang"]],
[  "Rama-Tut", 85, ["Kang"]],
[  "Immortus", 85, ["Kang"]],
[  "Scarlet Centurion", 85, ["Kang"]],
[  "Blackagar Boltagon", 85, ["Black Bolt"]],
[  "Rintrah", 85, []],
[  "Sara Wolfe", 85, []],
[  "Erik Selvig", 85, []],
[  "The Other", 85, []],
[  "Volstagg", 85, ["Volstagg the Voluminous"]],
[  "Sif", 85, ["Lady Sif"]],
[  "Taneleer Tivan", 85, ["The Collector"]],
[  "Cosmo the Spacedog", 85, ["Cosmo"]],
[  "Howard the Duck", 85, []],
[  "Wolfgang von Strucker", 85, ["Baron Strucker"]],
[  "Jonathan Pangborn", 85, []],
[  "Kraglin Obfonteri", 85, []],
[  "Yondu Udonta", 85, []],
[  "Stakar Ogord", 85, []],
[  "Martinex", 85, []],
[  "Charlie-27", 85, []],
[  "Aleta Ogord", 85, []],
[  "Mainframe", 85, []],
[  "Krugarr", 85, []],
[  "Ayesha", 85, []],
[  "Adam Warlock", 85, []],
[  "P. Cleary", 85, []],
[  "Sadie Deever", 85, []],
[  "Zeus", 85, []],
[  "Hercules", 85, []],
[  "Heimdall", 85, []],
[  "Axl", 85, []],
[  "Madisynn King", 85, []],
[  "Phyla-Vell", 85, ["Phyla"]],
[  "Blurp", 85, []],
[  "Jason Quill", 85, []],
[  "Topaz", 85, []],
[  "Samuel Sterns", 85, ["The Leader"]],
[  "Parker Robbins", 85, ["The Hood"]],
[  "Zelma Stanton", 85, []],
[  "Franklin Richards", 85, []],
[  "H.E.R.B.I.E.", 85, []],
[  "En Dwi Gast", 85, ["Grandmaster"]],
[  "Goose", 85, []],
[  "J. Jonah Jameson", 85, []],
[  "White Vision", 85, []],
[  "Classic Loki", 85, []],
[  "Kid Loki", 85, []],
[  "Boastful Loki", 85, []],
[  "Alligator Loki", 85, []],
[  "Xu Xialing", 85, []],
[  "Eros", 85, ["Starfox"]],
[  "Pip the Troll", 85, []],
[  "Dane Whitman", 85, []],
[  "Clea", 85, []],
[  "Pizza Poppa", 85, []],
[  "Scott Summers", 85, ["Cyclops"]],
[  "Ororo Munroe", 85, ["Storm"]],
[  "Emma Frost", 85, []],
[  "Rogue", 85, []],
[  "Nathaniel Milbury", 85, ["Mister Sinister"]],
[  "Paladin", 85, []],
[  "Jocasta", 85, []],
[  "Lisa Molinari", 85, []],
[  "Raza", 85, []],
[  "Namora", 85, []],
[  "Attuma", 85, []]
);


function clean(value: string) {
  return Array.from(value.toLowerCase().normalize("NFKD"))
    .filter((character) => {
      const code = character.charCodeAt(0);
      return code < 0x300 || code > 0x36f;
    })
    .join("")
    .replace(/[^a-z0-9]/g, "");
}

function distance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 3) return 99;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    previous = current;
  }
  return previous[b.length];
}

function aliasesForIdentity(value: string): string[] {
  const key = Object.keys(identityAliases).find(candidate => clean(candidate) === clean(value));
  return key ? identityAliases[key] : [];
}

function allSpellings(option: AnswerOption): string[] {
  const identities = aliasesForIdentity(option.value);
  return Array.from(new Set([option.value, ...option.aliases, ...identities]));
}

export function answerIdentityKeys(option: AnswerOption): string[] {
  return Array.from(new Set(allSpellings(option).map(clean).filter(Boolean)));
}

export function resolveAnswer(question: Question, raw: string): AnswerOption | null {
  const typed = clean(raw);
  if (!typed) return null;
  const canonical = question.answers.filter(option => clean(option.value) === typed);
  if (canonical.length === 1) return canonical[0];
  if (canonical.length > 1) return null;
  const matches = question.answers.filter(option => allSpellings(option).some(spelling => clean(spelling) === typed));
  return matches.length === 1 ? matches[0] : null;
}

export function findAnswerSuggestion(question: Question, raw: string): AnswerOption | null {
  const typed = clean(raw);
  if (typed.length < 4) return null;
  const threshold = typed.length <= 6 ? 1 : typed.length <= 10 ? 2 : 3;
  let best: { option: AnswerOption; score: number } | null = null;
  let tied = false;
  for (const option of question.answers) {
    for (const spelling of allSpellings(option)) {
      const candidate = clean(spelling);
      if (!candidate || candidate === typed) continue;
      const score = distance(typed, candidate);
      if (score > threshold) continue;
      if (!best || score < best.score) {
        best = { option, score };
        tied = false;
      } else if (score === best.score && option.value !== best.option.value) {
        tied = true;
      }
    }
  }
  return best && !tied ? best.option : null;
}
const rarityFor = (points: Extra[1]): AnswerOption["points"] => points;
for (const questions of Object.values(questionSets)) {
  for (const question of questions) {
    const bank = banks[question.id];
    if (!bank) continue;
    const seen = new Set(question.answers.flatMap((a) => [a.value, ...a.aliases]).map(clean));
    const additions: AnswerOption[] = bank.rows
      .filter(([name, , aliases = []]) => {
        const keys = [name, ...aliases].map(clean);
        if (keys.some((key) => seen.has(key))) return false;
        keys.forEach((key) => seen.add(key));
        return true;
      })
      .map(([value, points, aliases = []]) => ({
        value,
        aliases,
        points: rarityFor(points),
        explanation: `${value} is a recognised answer connected to ${bank.topic}.`
      }));
    question.answers.push(...additions);
    const canonicalKeys = new Set(question.answers.map(option => clean(option.value)));
    for (const option of question.answers) {
      const extra = aliasesForIdentity(option.value);
      const safeExtra = extra.filter(alias => {
        const key = clean(alias);
        return key !== clean(option.value) && !canonicalKeys.has(key);
      });
      option.aliases = Array.from(new Set([...option.aliases, ...safeExtra]));
    }
  }
}
