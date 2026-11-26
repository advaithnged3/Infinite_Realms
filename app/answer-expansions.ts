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
    ["Deadshot",10,["Floyd Lawton"]],["Captain Boomerang",10,["Digger Harkness"]],["Killer Croc",10],["Katana",10,["Tatsu Yamashiro"]],["Slipknot",30],["Rick Flag",10],["Amanda Waller",10],["June Moone",30],["Enchantress",30],["Bloodsport",10],["Peacemaker",10,["Christopher Smith"]],["Ratcatcher 2",30,["Cleo Cazo"]],["King Shark",10,["Nanaue"]],["Polka-Dot Man",30,["Abner Krill"]],["Savant",30],["Javelin",30],["Weasel",30],["Blackguard",60],["Mongal",60],["TDK",60],["The Thinker",30],["Milton",85],["Bronze Tiger",60],["Black Spider",60],["Duela Dent",85],["Harley Quinn",10],["The Joker",30],["Cheetah",60]
  ]},
  "dcm-06": { topic: "characters crossing DC film continuities and eras", rows: [
    ["Batman",10,["Bruce Wayne"]],["Superman",10,["Clark Kent"]],["Joker",10],["Lex Luthor",10],["Alfred Pennyworth",30],["Commissioner Gordon",30],["Wonder Woman",10],["Harley Quinn",10],["The Flash",10],["Aquaman",10],["Lois Lane",30],["Catwoman",30],["Zod",30,["General Zod"]],["Green Lantern",60],["Shazam",30],["Black Adam",30],["Deadshot",30],["Amanda Waller",10],["Peacemaker",30],["Deathstroke",60],["Robin",30],["Supergirl",30],["Cyborg",30],["Mera",30],["Joker's henchmen",85]
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
    ["Hal Jordan",10],["John Stewart",10],["Guy Gardner",10],["Kyle Rayner",10],["Jessica Cruz",10],["Simon Baz",10],["Alan Scott",10],["Jo Mullein",30],["Keli Quintela",30,["Teen Lantern"]],["Jade",30,["Jennifer-Lynn Hayden"]],["Kilowog",10],["Abin Sur",10],["Sinestro",10],["Soranik Natu",30],["Tomar-Re",30],["Tomar-Tu",60],["Arisia Rrab",30],["Ch'p",30],["B'dg",60],["Mogo",30],["G'nort",30],["Larfleeze",10],["Saint Walker",30],["Atrocitus",10],["Bleez",30],["Carol Ferris",10,["Star Sapphire"]],["Fatality",30],["Indigo-1",30],["Black Hand",10],["Arkillo",30],["Munk",60],["Lyssa Drak",60],["Razer",30],["Rond Vidar",60],["Rot Lop Fan",60],["Dkrtzy RRR",85],["Vath Sarn",60],["Isamot Kol",60],["Iolande",60],["Boodikka",60],["Kreon",60],["Hannu",60],["Sodam Yat",30],["M'ten",85],["Medphyll",60],["Xrill-Vrex",85],["Two-Six",85],["Chaselon",60],["Apros",60],["Ash",60],["Bzzd",60],["Stel",60],["Driq",85],["Turytt",60],["Waverly Sayre",85],["Green Man",60],["Jack T. Chance",60],["Laira",60],["Ke'Haan",60],["Graf Toren",85],["Morro",85],["Rot Lop Fan",60],["Bzzd",60],["Hannu",60],["Mogo",30],["The Weaponers of Qward",85]
  ]},
  "dcc-03": { topic: "members of the Bat-family across comics and major continuities", rows: [
    ["Bruce Wayne",10,["Batman"]],["Dick Grayson",10,["Nightwing","Robin"]],["Jason Todd",10,["Red Hood"]],["Tim Drake",10,["Robin","Red Robin"]],["Damian Wayne",10,["Robin"]],["Barbara Gordon",10,["Batgirl","Oracle"]],["Cassandra Cain",30,["Batgirl","Orphan"]],["Stephanie Brown",30,["Spoiler","Batgirl"]],["Duke Thomas",30,["The Signal"]],["Kate Kane",30,["Batwoman"]],["Luke Fox",30,["Batwing"]],["Jean-Paul Valley",60,["Azrael"]],["Helena Bertinelli",30,["Huntress"]],["Harper Row",60,["Bluebird"]],["Bette Kane",60,["Flamebird"]],["Alfred Pennyworth",10],["Lucius Fox",30],["Julia Pennyworth",60],["Onyx Adams",60],["Cluemaster",60],["Holly Robinson",60],["Harley Quinn",30],["Catwoman",10,["Selina Kyle"]],["Ace the Bat-Hound",60],["Bat-Mite",60],["Gotham Girl",85],["Gotham",85,["Gotham the character"]],["Gordon",10,["James Gordon"]],["The Huntress",30],["The Question",60],["Terry McGinnis",30,["Batman Beyond"]],["Carrie Kelley",30],["Talia al Ghul",30],["Damian's mother Talia",60]
  ]},
  "dcc-04": { topic: "speedsters from DC Comics", rows: [
    ["Barry Allen",10,["The Flash"]],["Wally West",10],["Jay Garrick",10],["Bart Allen",10,["Impulse","Kid Flash"]],["Jesse Quick",30,["Jesse Chambers"]],["Max Mercury",30],["Johnny Quick",30],["XS",30,["Jenni Ognats"]],["Avery Ho",30],["Wallace West",30,["Ace West"]],["Iris West II",60],["Godspeed",30,["August Heart"]],["Eobard Thawne",10,["Reverse-Flash"]],["Hunter Zolomon",30,["Zoom"]],["Savitar",30],["Daniel West",60,["Reverse-Flash"]],["Inertia",60,["Thaddeus Thawne"]],["The Rival",60],["Black Flash",30],["Fastback",60],["Bizarro Flash",60],["Lady Flash",60],["Cobalt Blue",30,["Malcolm Thawne"]],["The Turtle",30],["The Top",30],["Trajectory",60],["Red Trinity",60],["Blue Trinity",60],["White Lightning",85],["Negative Flash",85],["Godspeed's clones",85],["The Flash of Earth-2",30],["The Flash of Earth-3",60],["The Flash of Earth-12",85]
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

export function findAnswerSuggestion(question: Question, raw: string): AnswerOption | null {
  const typed = clean(raw);
  if (typed.length < 4) return null;
  const threshold = typed.length <= 6 ? 1 : typed.length <= 10 ? 2 : 3;
  let best: { option: AnswerOption; score: number } | null = null;
  let tied = false;
  for (const option of question.answers) {
    for (const spelling of [option.value, ...option.aliases]) {
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
  }
}
