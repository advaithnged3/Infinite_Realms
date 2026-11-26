export type Universe = "mixed" | "mcu" | "dc-movies" | "marvel-comics" | "dc-comics";
export type AnswerOption = { value:string; aliases:string[]; points:10|30|60|85|100; explanation:string };
export type Question = { id:string; universe:Exclude<Universe,"mixed">; prompt:string; hint:string; answers:AnswerOption[]; visual:string; visualAlt:string };
export const universeLabels:Record<Universe,string>={mixed:"Daily Convergence",mcu:"Marvel Cinematic Universe","dc-movies":"DC Films","marvel-comics":"Marvel Comics","dc-comics":"DC Comics"};
export const rarity:Record<number,{name:string;description:string;color:string}>={
 10:{name:"STREET-LEVEL",description:"A familiar face from the front lines",color:"#a8c8ff"},
 30:{name:"DEEP CUT",description:"A detail true fans remember",color:"#65d6c2"},
 60:{name:"SUPERHUMAN",description:"A serious fan's pull",color:"#a98cff"},
 85:{name:"COSMIC",description:"Knowledge from the far reaches",color:"#ffad70"},
 100:{name:"OMNIVERSAL",description:"An extraordinary deep-lore discovery",color:"#ffe078"}
};
const A=(rows:[string,10|30|60|85|100,string,string[]?][]):AnswerOption[]=>rows.map(([value,points,explanation,aliases=[]])=>({value,points,explanation,aliases}));
const Q=(id:string,universe:Question["universe"],prompt:string,hint:string,visual:string,visualAlt:string,rows:[string,10|30|60|85|100,string,string[]?][]):Question=>({id,universe,prompt,hint,visual,visualAlt,answers:A(rows)});
export const questionSets:Record<Exclude<Universe,"mixed">,Question[]>={
 mcu:[
 Q("mcu-01","mcu","Name an Avenger who fought in the Battle of New York.","Earth's Mightiest Heroes assembled against the Chitauri.","avengers","The Battle of New York",[
 ["Iron Man",10,"Tony Stark leads the aerial assault and carries the nuclear missile through the portal."],["Captain America",10,"Steve Rogers coordinates the team on the ground."],["Thor",10,"Thor battles the Chitauri and confronts Loki."],["Black Widow",30,"Natasha Romanoff closes the portal using the Tesseract device."],["Hawkeye",30,"Clint Barton fights from the rooftops with his bow."],["Hulk",30,"Bruce Banner transforms and defeats the Chitauri leviathan."],
 ["Maria Hill",60,"S.H.I.E.L.D. Deputy Director Maria Hill coordinates the response during the New York invasion."],
 ["Nick Fury",60,"Nick Fury directs the Avengers Initiative and oversees the response."],
 ["Erik Selvig",85,"Selvig is manipulated by Loki into operating the portal device."],
 ["Agent Phil Coulson",100,"Coulson is a S.H.I.E.L.D. agent whose actions directly shape the Avengers' response."]
 ]),
 Q("mcu-02","mcu","Name an Infinity Stone that appears in the MCU.","There are six, each with a distinct colour and power.","stones","The six Infinity Stones",[
 ["Space Stone",10,"The blue Space Stone is housed in the Tesseract."],["Mind Stone",10,"The yellow Mind Stone is first seen in Loki's sceptre."],["Time Stone",10,"The green Time Stone is protected in the Eye of Agamotto."],["Power Stone",10,"The purple Power Stone is hidden inside the Orb."],["Reality Stone",30,"The red Reality Stone takes the form of the Aether."],["Soul Stone",30,"The orange Soul Stone is hidden on Vormir."],
 ["Thanos",85,"Thanos is the central figure seeking to collect all six Stones."],
 ["The Collector",100,"Taneleer Tivan keeps the Reality Stone and studies cosmic artefacts."]
 ]),
 Q("mcu-03","mcu","Name an organisation or team that operates in the MCU.","Think agencies, secret groups, alien crews and superhero teams.","factions","The many factions of the MCU",[
 ["S.H.I.E.L.D.",10,"S.H.I.E.L.D. is the intelligence agency led by Nick Fury.",["SHIELD"]],["HYDRA",10,"HYDRA is the clandestine organisation that infiltrates S.H.I.E.L.D."],["The Avengers",10,"The Avengers are Earth's principal superhero team."],["The Guardians of the Galaxy",30,"The Guardians are a band of cosmic misfits who protect the galaxy.",["Guardians"]],["The TVA",30,"The Time Variance Authority monitors branching timelines."],["The Ravagers",60,"The Ravagers are spacefaring crews led by figures such as Yondu."],["Nova Corps",85,"The Nova Corps is the interstellar peacekeeping force based on Xandar."],["The Dora Milaje",60,"The Dora Milaje are Wakanda's elite royal guard."],
 ["Damage Control",30,"The Department of Damage Control handles superhuman-related incidents."],
 ["The Ten Rings",30,"The Ten Rings is an ancient organisation led in the modern era by Wenwu."],
 ["The Masters of the Mystic Arts",30,"The sorcerers protect Earth from mystical threats."],
 ["The Eternals",30,"The Eternals are an ancient group of engineered protectors."],
 ["The Flag Smashers",60,"The Flag Smashers emerge in the post-Blip world."],
 ["The Red Room",85,"The Red Room trains Black Widow operatives."],
 ["S.W.O.R.D.",100,"Sentient Weapon Observation and Response Division is an organisation introduced in WandaVision."]
 ]),
 Q("mcu-04","mcu","Name a character who has lifted or wielded Mjolnir in the MCU.","The enchanted hammer has judged more than one hero worthy.","mjolnir","The enchanted hammer Mjolnir",[
 ["Thor",10,"Thor is Mjolnir's traditional wielder."],["Steve Rogers",30,"Steve Rogers proves worthy and lifts Mjolnir in Endgame.",["Captain America"]],["Vision",60,"Vision lifts Mjolnir shortly after being created in Age of Ultron."],["Jane Foster",30,"Jane Foster becomes the Mighty Thor and wields Mjolnir in Love and Thunder.",["Mighty Thor"]],
 ["Odin",100,"Odin wielded Mjolnir in the past and later enchants the hammer."],
 ["Hela",85,"Hela is shown wielding Mjolnir in a flashback before destroying it."],
 ["Jane Foster as Mighty Thor",30,"Jane Foster becomes the Mighty Thor and wields the reforged Mjolnir."],
 ["Steve Rogers as Captain America",30,"Steve proves worthy and lifts Mjolnir in Endgame."]
 ]),
 Q("mcu-05","mcu","Name a place or realm visited in the MCU.","From hidden nations on Earth to strange corners of space.","places","A map of MCU worlds",[
 ["New York City",10,"New York is a recurring centre of MCU events.",["New York"]],["Wakanda",10,"Wakanda is the hidden African nation powered by vibranium."],["Asgard",10,"Asgard is the home realm of Thor and Loki."],["Sakaar",30,"Sakaar is the chaotic planet where Thor is forced into gladiatorial combat."],["Vormir",60,"Vormir is the remote world where the Soul Stone is obtained."],["Knowhere",30,"Knowhere is a settlement built inside the severed head of a Celestial."],["Ta Lo",85,"Ta Lo is the mystical village reached through a hidden dimension in Shang-Chi."],["The Quantum Realm",60,"The Quantum Realm is a subatomic dimension central to the Ant-Man stories."],
 ["Jotunheim",30,"Jotunheim is the realm of the Frost Giants."],
 ["Midgard",30,"Midgard is the Asgardian name for Earth."],
 ["Svartalfheim",60,"Svartalfheim is the realm of the Dark Elves."],
 ["Nidavellir",30,"Nidavellir is the forge world where Stormbreaker is created."],
 ["Xandar",30,"Xandar is the homeworld of the Nova Corps."],
 ["Ego's Planet",60,"Ego's living planet is central to Guardians of the Galaxy Vol. 2."],
 ["The Citadel at the End of Time",85,"The Citadel is where He Who Remains resides beyond the Sacred Timeline."],
 ["The Dark Dimension",100,"The Dark Dimension is ruled by Dormammu and appears in Doctor Strange."]
 ]),
 Q("mcu-06","mcu","Name a character who has been part of the Guardians of the Galaxy.","The roster has changed across the films.","guardians","The Guardians' changing roster",[
 ["Star-Lord",10,"Peter Quill is the team's founding leader.",["Peter Quill"]],["Gamora",10,"Gamora is a key member of the original team."],["Drax",10,"Drax joins the Guardians after seeking revenge on Ronan."],["Rocket",10,"Rocket is the team's sharp-tongued marksman and engineer."],["Groot",10,"Groot is the tree-like Guardian whose sacrifice saves the team."],["Nebula",30,"Nebula eventually joins the Guardians after reconciling with Gamora."],["Mantis",30,"Mantis joins the team after leaving Ego."],["Kraglin",60,"Kraglin becomes part of the expanded team after Yondu's death."],["Cosmo",85,"Cosmo the Spacedog joins the Guardians' later roster."],["Adam Warlock",85,"Adam Warlock joins the new Guardians team at the end of Vol. 3."],
 ["Phyla",60,"Phyla joins the new Guardians roster shown at the end of Vol. 3."],
 ["Kraglin Obfonteri",60,"Kraglin becomes part of the expanded Guardians team."],
 ["Stakar Ogord",100,"Stakar is a Ravager captain and a key figure in the Guardians' wider cosmic circle."]
 ]),
 Q("mcu-07","mcu","Name a character connected to the MCU's multiverse or branching timelines.","Think variants, incursions, time travel and alternate realities.","multiverse","A fracture between MCU timelines",[
 ["Loki",10,"Loki's story becomes central to the branching timeline crisis."],["Doctor Strange",10,"Stephen Strange encounters incursions and alternate realities."],["Sylvie",30,"Sylvie's actions help fracture the Sacred Timeline.",["Lady Loki"]],["America Chavez",30,"America Chavez can travel between universes."],["Spider-Man",10,"Peter Parker's identity spell draws visitors from other universes.",["Peter Parker"]],["Kang",30,"Kang variants are tied to the multiverse and timeline conflict."],["The Watcher",85,"The Watcher observes events across the multiverse in What If...?"],["Clea",100,"Clea appears in the post-credit scene warning Strange about an incursion."],
 ["The Ancient One",30,"The Ancient One explains branching timelines and alternate realities to Bruce Banner."],
 ["Deadpool",60,"Deadpool crosses into the MCU-facing multiverse in Deadpool & Wolverine."],
 ["Wolverine",60,"A variant of Wolverine appears in Deadpool & Wolverine."],
 ["Tobey Maguire's Spider-Man",85,"Maguire's Peter Parker crosses into the MCU in No Way Home."],
 ["Andrew Garfield's Spider-Man",85,"Garfield's Peter Parker crosses into the MCU in No Way Home."]
 ])
 ],
 "dc-movies":[
 Q("dcm-01","dc-movies","Name a character who appears in a Justice League film.","The League has brought together heroes from very different worlds.","league","The Justice League assembles",[
 ["Batman",10,"Bruce Wayne helps assemble the League.",["Bruce Wayne"]],["Superman",10,"Clark Kent returns to help the League defeat Steppenwolf.",["Clark Kent"]],["Wonder Woman",10,"Diana Prince is one of the League's founding members.",["Diana Prince"]],["Aquaman",10,"Arthur Curry joins the League to defend Earth.",["Arthur Curry"]],["The Flash",10,"Barry Allen brings super-speed to the team.",["Flash","Barry Allen"]],["Cyborg",30,"Victor Stone's connection to the Mother Boxes makes him essential.",["Victor Stone"]],["Martian Manhunter",85,"J'onn J'onzz appears in the Snyder Cut epilogue.",["J'onn J'onzz"]],
 ["Green Lantern",60,"A Green Lantern appears in the Snyder Cut epilogue."],
 ["Mera",30,"Mera fights alongside the heroes in the Snyder Cut's final battle."],
 ["Lois Lane",30,"Lois Lane is central to Superman's return and the League's story."],
 ["Commissioner Gordon",30,"James Gordon works with Batman and the League in Gotham."],
 ["Silas Stone",60,"Silas Stone's work with the Mother Box is crucial to Cyborg's story."],
 ["Ryan Choi",85,"Ryan Choi appears in the Snyder Cut epilogue as a S.T.A.R. Labs scientist."],
 ["Steppenwolf",100,"Steppenwolf appears as the invading antagonist in Justice League; the prompt now includes characters, not only heroes."]
 ]),
 Q("dcm-02","dc-movies","Name a city or place featured in a DC superhero film.","Think of the heroes' home cities and key story locations.","dcplaces","Cities of the DC film worlds",[
 ["Gotham City",10,"Gotham is Batman's home and the setting of multiple DC films.",["Gotham"]],["Metropolis",10,"Metropolis is Superman's adopted home city."],["Themyscira",30,"Themyscira is Diana's Amazon homeland."],["Central City",30,"Central City is associated with Barry Allen in The Flash."],["Atlantis",10,"Atlantis is the underwater kingdom ruled by Arthur Curry."],["Apokolips",60,"Apokolips is Darkseid's homeworld."],["Kahndaq",60,"Kahndaq is the country at the centre of Black Adam."],["Belle Reve",85,"Belle Reve is the prison facility associated with the Suicide Squad."],
 ["Smallville",30,"Smallville is Clark Kent's hometown."],
 ["Corto Maltese",30,"Corto Maltese is the island nation targeted in The Suicide Squad."],
 ["Krypton",10,"Krypton is Superman's destroyed homeworld."],
 ["Belle Reve Penitentiary",85,"Belle Reve is the prison facility associated with Task Force X."],
 ["Nanda Parbat",100,"Nanda Parbat is a hidden DC location referenced in the wider film-connected world."]
 ]),
 Q("dcm-03","dc-movies","Name a member of the Bat-family or an ally of Batman shown in DC films.","Gotham's protector rarely works entirely alone.","batfamily","The Bat-family",[
 ["Alfred Pennyworth",10,"Alfred is Bruce Wayne's trusted confidant and caretaker."],["Commissioner Gordon",10,"James Gordon is one of Batman's most important allies."],["Robin",30,"Robin is Batman's young partner; a Robin suit appears in Batman v Superman."],["Catwoman",30,"Selina Kyle is a complex ally and adversary of Batman."],["Batgirl",60,"Barbara Gordon is a major Bat-family hero in DC film adaptations."],["Lucius Fox",60,"Lucius Fox supports Bruce with technology and resources."],["The Riddler",30,"The Riddler is an antagonist whose clues challenge Batman."],
 ["Harvey Dent",30,"Harvey Dent is Gotham's district attorney and a major figure in Batman films."],
 ["John Blake",60,"John Blake is a Gotham police officer and key ally in The Dark Knight Rises."],
 ["Talia al Ghul",85,"Talia is a major figure in The Dark Knight Rises and connected to Bruce Wayne."],
 ["Ra's al Ghul",100,"Ra's al Ghul is a mentor and adversary who trains Bruce Wayne in Batman Begins."]
 ]),
 Q("dcm-04","dc-movies","Name a villain who has appeared in a DC superhero film.","From street-level masterminds to world-ending threats.","villains","DC's cinematic rogues",[
 ["Joker",10,"The Joker is Batman's infamous nemesis."],["Lex Luthor",10,"Lex Luthor is a recurring enemy of Superman."],["General Zod",10,"Zod is the Kryptonian antagonist of Man of Steel."],["Steppenwolf",30,"Steppenwolf leads the invasion in Justice League."],["Darkseid",30,"Darkseid is the ruler of Apokolips."],["Black Manta",30,"Black Manta seeks revenge against Aquaman."],["Cheetah",60,"Barbara Minerva becomes Cheetah in Wonder Woman 1984."],["Starro",60,"Starro is the enormous alien threat in The Suicide Squad."],["Doctor Sivana",85,"Doctor Sivana is the villain of Shazam!."],
 ["Ares",30,"Ares is the antagonist of Wonder Woman."],
 ["Ocean Master",30,"Orm is the antagonist of Aquaman."],
 ["Black Adam",30,"Black Adam is an antihero and antagonist in his solo film."],
 ["Ishmael Gregor",60,"Ishmael Gregor becomes Sabbac in Black Adam."],
 ["Sabbac",60,"Sabbac is the demonic threat in Black Adam."],
 ["The Enchantress",30,"June Moone becomes the Enchantress in Suicide Squad."],
 ["Maxwell Lord",100,"Maxwell Lord is the antagonist of Wonder Woman 1984."]
 ]),
 Q("dcm-05","dc-movies","Name a member or key operator of Task Force X in the films.","The roster is deliberately unpredictable.","squad","Task Force X",[
 ["Harley Quinn",10,"Harley Quinn is a central member of the cinematic squad."],["Deadshot",10,"Floyd Lawton is a skilled marksman in Suicide Squad."],["Bloodsport",30,"Bloodsport leads the team in The Suicide Squad."],["Peacemaker",30,"Peacemaker is part of the Corto Maltese mission."],["King Shark",10,"King Shark is the team's powerful, surprisingly gentle member."],["Ratcatcher 2",60,"Cleo Cazo is able to control rats."],["Polka-Dot Man",60,"Abner Krill weaponises multicoloured polka-dot energy."],["Rick Flag",10,"Rick Flag commands Task Force X."],["Captain Boomerang",30,"George Harkness is a returning squad member."],
 ["Savant",60,"Savant is part of the team sent to Corto Maltese."],
 ["Javelin",60,"Javelin is a member of the opening squad in The Suicide Squad."],
 ["Blackguard",60,"Blackguard is part of the squad's ill-fated first wave."],
 ["Mongal",60,"Mongal joins the first wave of the Corto Maltese mission."],
 ["Weasel",30,"Weasel is included in the squad's deployment."],
 ["T.D.K.",85,"The Detachable Kid is part of the opening team."],
 ["Amanda Waller",100,"Amanda Waller creates and oversees Task Force X in the Suicide Squad films."]
 ]),
 Q("dcm-06","dc-movies","Name a character who has appeared in more than one DC film continuity or era.","Consider heroes, villains and recurring supporting characters.","crossovers","DC film legacies",[
 ["Batman",10,"Batman has appeared across multiple cinematic eras."],["Superman",10,"Superman has been portrayed across multiple film continuities."],["Joker",10,"The Joker has appeared in several distinct film interpretations."],["Wonder Woman",30,"Diana appears across multiple films in the DCEU."],["Aquaman",30,"Arthur Curry appears in Justice League and solo films."],["Lex Luthor",60,"Lex Luthor has been reimagined in multiple film eras."],["Alfred Pennyworth",30,"Alfred appears across several Batman film series."],
 ["Commissioner Gordon",30,"Gordon appears across several Batman film continuities."],
 ["Harvey Dent",30,"Harvey Dent appears in multiple Batman film interpretations."],
 ["Catwoman",30,"Catwoman appears in several distinct Batman film eras."],
 ["The Penguin",30,"The Penguin has been portrayed in multiple Batman film continuities."],
 ["Riddler",60,"The Riddler appears in more than one Batman film era."],
 ["Two-Face",60,"Two-Face appears in multiple Batman films."],
 ["Bane",60,"Bane appears in more than one cinematic Batman continuity."],
 ["The Scarecrow",85,"Jonathan Crane appears in Christopher Nolan's Batman trilogy."],
 ["Ra's al Ghul",100,"Ra's al Ghul is a recurring Batman adversary across major film adaptations."]
 ]),
 Q("dcm-07","dc-movies","Name a magical or supernatural character from a DC film.","Not every DC hero relies on gadgets or super-strength.","magic","The supernatural side of DC films",[
 ["Shazam",10,"Billy Batson transforms through a magical word."],["Black Adam",10,"Teth-Adam's powers originate from ancient magic."],["Doctor Fate",30,"Kent Nelson wields the power of the Lords of Order."],["Enchantress",30,"June Moone becomes the supernatural Enchantress."],["Zatanna",60,"Zatanna is a powerful stage magician and sorceress in DC stories."],["Constantine",60,"John Constantine is an occult detective in DC adaptations."],["Etrigan",100,"Etrigan is a demon bound to Jason Blood in DC lore."],
 ["The Wizard",30,"The Wizard grants Billy Batson his powers in Shazam!."],
 ["Sabbac",30,"Sabbac is a demonic supernatural antagonist in Black Adam."]
 ])
 ],
 "marvel-comics":[
 Q("mar-01","marvel-comics","Name a member of the X-Men.","The mutant team has had dozens of rosters over the decades.","xmen","The X-Men",[
 ["Wolverine",10,"Logan is one of the X-Men's most recognisable members."],["Cyclops",10,"Scott Summers is a longtime field leader."],["Storm",10,"Ororo Munroe is a powerful weather manipulator and leader."],["Jean Grey",10,"Jean Grey is a founding X-Man and Phoenix host."],["Beast",30,"Hank McCoy is a brilliant scientist and longtime X-Man."],["Nightcrawler",30,"Kurt Wagner is a teleporting mutant."],["Rogue",30,"Rogue can absorb memories and powers through touch."],["Kitty Pryde",30,"Kitty Pryde phases through solid matter."],["Bishop",60,"Bishop is a time-displaced mutant from a dystopian future."],["Magik",60,"Illyana Rasputin is a sorceress and mutant teleporter."],["Forge",85,"Forge is a mutant inventor with an intuitive gift for technology."],["Jubilee",60,"Jubilation Lee generates explosive energy plasmoids."],
 ["Iceman",10,"Bobby Drake is a founding X-Man."],
 ["Angel",10,"Warren Worthington III is one of the original X-Men."],
 ["Polaris",30,"Lorna Dane is a magnetic mutant closely tied to the X-Men."],
 ["Havok",30,"Alex Summers is Cyclops's brother and an X-Man."],
 ["Banshee",30,"Sean Cassidy is a longtime X-Man."],
 ["Sunfire",60,"Shiro Yoshida has served with the X-Men."],
 ["Warpath",60,"James Proudstar is a mutant warrior and X-Man."],
 ["Psylocke",30,"Betsy Braddock is a prominent X-Man."],
 ["Chamber",85,"Jonothon Starsmore is a Generation X member and has served with the X-Men."],
 ["Cannonball",30,"Sam Guthrie is a New Mutant who later joins the X-Men."],
 ["Dazzler",60,"Alison Blaire is a mutant performer and X-Man."],
 ["Longshot",85,"Longshot is an extradimensional hero who joins the X-Men."],
 ["X-23",60,"Laura Kinney is a clone of Wolverine and a member of the X-Men."],
 ["Hope Summers",85,"Hope is a mutant central to the post-Decimation era."],
 ["Legion",100,"David Haller is a mutant with vast reality-warping abilities and has been associated with the X-Men."]
 ]),
 Q("mar-02","marvel-comics","Name a villain who has fought Spider-Man.","New York's web-slinger has one of comics' deepest rogues galleries.","spidey","Spider-Man's rogues gallery",[
 ["Green Goblin",10,"Norman Osborn is one of Spider-Man's defining enemies."],["Doctor Octopus",10,"Otto Octavius is a brilliant scientist with mechanical arms."],["Venom",10,"Venom is an alien symbiote bonded to hosts including Eddie Brock."],["Sandman",30,"Flint Marko can transform his body into sand."],["Mysterio",30,"Quentin Beck uses illusion and technology."],["Kraven the Hunter",30,"Kraven sees Spider-Man as the ultimate prey."],["The Vulture",30,"Adrian Toomes uses a flight harness."],["Tombstone",60,"Tombstone is a formidable crime boss with enhanced durability."],["The Jackal",85,"Miles Warren is the geneticist known as the Jackal."],["Morbius",60,"Michael Morbius is a living vampire who has clashed with Spider-Man."],
 ["Electro",10,"Max Dillon manipulates electricity and is a classic Spider-Man foe."],
 ["Rhino",10,"Aleksei Sytsevich uses a powerful armoured suit."],
 ["Scorpion",30,"Mac Gargan becomes the armoured Scorpion."],
 ["Shocker",30,"Herman Schultz uses vibro-shock gauntlets."],
 ["Chameleon",30,"Dmitri Smerdyakov is a master of disguise."],
 ["Hobgoblin",30,"Several characters have taken the Hobgoblin identity."],
 ["Silvermane",60,"Silvio Manfredi is a crime boss and Spider-Man enemy."],
 ["The Spot",60,"Jonathan Ohnn can create interdimensional portals."],
 ["Morlun",85,"Morlun hunts Spider-totems across realities."],
 ["Overdrive",85,"Overdrive is a technology-enhanced criminal who clashes with Spider-Man."],
 ["The Sin-Eater",100,"Stanley Carter is the Sin-Eater, a major Spider-Man-related antagonist."]
 ]),
 Q("mar-03","marvel-comics","Name a character who has wielded an Infinity Gem or Stone in Marvel Comics.","The Gems have passed through many hands and storylines.","infinity","The Infinity Gems",[
 ["Thanos",10,"Thanos famously assembles the Infinity Gauntlet."],["Adam Warlock",10,"Adam Warlock is closely tied to the Soul Gem."],["Nebula",30,"Nebula briefly takes control of the completed Gauntlet."],["Magus",60,"The Magus uses the Infinity Gems in his cosmic schemes."],["Reed Richards",60,"Reed Richards has been entrusted with the Infinity Gems."],["Pip the Troll",85,"Pip has been part of the Infinity Watch and its Gem storylines."],["Gamora",30,"Gamora has served as a member of the Infinity Watch."],["Doctor Strange",30,"Doctor Strange has used and guarded powerful cosmic artefacts."],
 ["The Collector",30,"The Collector has possessed and sought cosmic artefacts including Gems."],
 ["The Grandmaster",60,"The Grandmaster has been involved in cosmic contests around the Gems."],
 ["Rune",85,"Rune is a powerful vampire who has wielded the Infinity Gems in a crossover."],
 ["Loki",30,"Loki has sought and used Infinity Gems in Marvel stories."],
 ["The Gardener",100,"The Gardener is an Elder of the Universe who has wielded the Time Gem."]
 ]),
 Q("mar-04","marvel-comics","Name a cosmic entity or abstract being in Marvel Comics.","Think beyond superheroes to the forces that shape existence.","cosmic","Marvel's cosmic hierarchy",[
 ["Galactus",10,"Galactus is the Devourer of Worlds."],["Eternity",10,"Eternity embodies the universe."],["The Living Tribunal",30,"The Living Tribunal oversees multiversal balance."],["Death",30,"Death is a cosmic abstract personification."],["The Beyonder",30,"The Beyonder is an immensely powerful being from beyond the multiverse."],["The One-Above-All",60,"The One-Above-All is the supreme creative force in Marvel cosmology.",["One Above All","TOAA"]],["The Phoenix Force",10,"The Phoenix Force is a cosmic force of life and rebirth."],["The In-Betweener",85,"The In-Betweener embodies the balance between opposing cosmic forces."],["Oblivion",85,"Oblivion represents non-existence."],
 ["The Celestials",10,"The Celestials are ancient cosmic beings who shape life."],
 ["The Watcher",10,"Uatu observes major events across the universe."],
 ["Master Order",30,"Master Order embodies order as a cosmic abstract."],
 ["Lord Chaos",30,"Lord Chaos embodies chaos as a cosmic abstract."],
 ["The Stranger",60,"The Stranger is an immensely powerful cosmic entity."],
 ["The Queen of Nevers",85,"The Queen of Nevers is a cosmic entity associated with the House of Ideas."],
 ["The First Firmament",85,"The First Firmament is the first cosmos in Marvel cosmology."],
 ["The Fulcrum",100,"The Fulcrum is a mysterious cosmic being linked to the Celestials and Watchers."]
 ]),
 Q("mar-05","marvel-comics","Name a member of the Fantastic Four or a close ally.","The First Family's circle reaches well beyond its original four.","fantastic4","The Fantastic Four",[
 ["Mister Fantastic",10,"Reed Richards is the team's elastic genius.",["Reed Richards"]],["Invisible Woman",10,"Sue Storm can turn invisible and create force fields.",["Sue Storm"]],["Human Torch",10,"Johnny Storm controls flame.",["Johnny Storm"]],["The Thing",10,"Ben Grimm is the team's rocky powerhouse.",["Ben Grimm"]],["She-Hulk",30,"Jennifer Walters has joined the team in several stories."],["Crystal",60,"Crystal of the Inhumans has been closely associated with the team."],["Franklin Richards",30,"Franklin is Reed and Sue's son, with extraordinary reality-warping powers."],["Valeria Richards",60,"Valeria is Reed and Sue's exceptionally gifted daughter."],["H.E.R.B.I.E.",85,"H.E.R.B.I.E. is the team's robotic companion."],
 ["Ant-Man",30,"Scott Lang has worked with the Fantastic Four."],
 ["Medusa",30,"Medusa of the Inhumans has allied with the Fantastic Four."],
 ["Black Bolt",30,"Black Bolt has been a close ally of the Fantastic Four."],
 ["Namor",30,"Namor has a long and complicated relationship with the team."],
 ["Wyatt Wingfoot",60,"Wyatt Wingfoot is a longtime friend and ally of the Fantastic Four."],
 ["Alicia Masters",30,"Alicia Masters is Ben Grimm's longtime partner and close ally."],
 ["Agatha Harkness",85,"Agatha has served as a mentor to Franklin Richards."],
 ["Dragon Man",60,"Dragon Man has been an adversary and later ally of the Fantastic Four."],
 ["Impossible Man",100,"The Impossible Man has repeatedly interacted with and challenged the Fantastic Four."]
 ]),
 Q("mar-06","marvel-comics","Name a street-level Marvel hero.","Not every hero saves the universe; some protect a neighbourhood.","street","Marvel's street-level defenders",[
 ["Daredevil",10,"Matt Murdock protects Hell's Kitchen."],["Luke Cage",10,"Luke Cage is a super-strong hero from Harlem."],["Jessica Jones",30,"Jessica Jones is a private investigator with superhuman strength."],["Iron Fist",30,"Danny Rand channels the power of the Iron Fist."],["Moon Knight",30,"Marc Spector is the vigilante avatar of Khonshu."],["Misty Knight",60,"Misty Knight is a detective and martial artist with a bionic arm."],["Cloak",60,"Cloak can access the Darkforce Dimension."],["Dagger",60,"Dagger generates light daggers."],["Punisher",30,"Frank Castle is a lethal vigilante who wages a one-man war on crime.",["Frank Castle"]],
 ["Echo",30,"Maya Lopez is a skilled fighter and street-level hero."],
 ["White Tiger",30,"Several heroes have carried the White Tiger mantle."],
 ["Elektra",30,"Elektra is an assassin who has also operated as Daredevil."],
 ["Colleen Wing",30,"Colleen Wing is a martial artist and ally of Iron Fist."],
 ["Shang-Chi",10,"Shang-Chi is a master martial artist and street-level hero."],
 ["Patsy Walker",60,"Hellcat has operated as a street-level hero and investigator."],
 ["The Prowler",60,"Hobie Brown is a costumed hero and occasional ally."],
 ["Silver Sable",85,"Silver Sable is a mercenary and occasional ally of Spider-Man."],
 ["Night Thrasher",100,"Dwayne Taylor is a street-level hero and founder of the New Warriors."]
 ]),
 Q("mar-07","marvel-comics","Name a mutant nation, island or major mutant community.","Mutant history has been shaped by places of refuge and conflict.","mutantlands","Mutant homelands and communities",[
 ["Krakoa",10,"Krakoa becomes a sovereign mutant homeland in the modern X-Men era."],["Genosha",10,"Genosha is a nation whose history is tied to mutant oppression."],["Utopia",30,"Utopia is an island base for mutants off the coast of San Francisco."],["Muir Island",30,"Muir Island has hosted important mutant research and refuge."],["Arakko",60,"Arakko is an ancient mutant land connected to Amenth."],["Asteroid M",60,"Asteroid M has served as a mutant base under Magneto."],["The Savage Land",85,"The Savage Land has been a refuge and battleground for mutants."],["Limbo",85,"Limbo is a mystical dimension ruled by beings including Magik."],
 ["Akkaba",60,"Akkaba is a community associated with Apocalypse."],
 ["Island M",60,"Island M has served as a base for Magneto."],
 ["The Krakoan nation",10,"Krakoa is the sovereign mutant nation."],
 ["The Morlock Tunnels",100,"The tunnels beneath New York are the hidden community and refuge of the Morlocks."]
 ])
 ],
 "dc-comics":[
 Q("dcc-01","dc-comics","Name a member of the Justice League.","The League's roster spans Earth, space and the supernatural.","justiceleague","The Justice League",[
 ["Batman",10,"Bruce Wayne is one of the League's founding members."],["Superman",10,"Clark Kent is a central member of the League."],["Wonder Woman",10,"Diana is a founding member and one of its strongest leaders."],["The Flash",10,"Several speedsters have served as the League's Flash.",["Flash"]],["Green Lantern",10,"Multiple Green Lanterns have served the League."],["Aquaman",10,"Arthur Curry is a founding League member in many continuities."],["Martian Manhunter",30,"J'onn J'onzz is a classic founding member."],["Zatanna",60,"Zatanna has served with the Justice League."],["Hawkgirl",30,"Hawkgirl is a longtime League member."],["Mister Miracle",85,"Scott Free has been associated with the League."],
 ["Green Arrow",30,"Oliver Queen has served on multiple Justice League rosters."],
 ["Black Canary",30,"Dinah Lance is a longtime League member."],
 ["Atom",60,"Ray Palmer and other Atoms have served with the League."],
 ["Red Tornado",60,"Red Tornado is a recurring Justice League member."],
 ["Firestorm",60,"Firestorm has served on the Justice League."],
 ["Plastic Man",30,"Plastic Man has been a member of the League."],
 ["Booster Gold",60,"Booster Gold has served with the Justice League."],
 ["Blue Beetle",30,"Ted Kord and Jaime Reyes have been associated with League teams."],
 ["Vixen",60,"Mari McCabe has served on the Justice League."],
 ["The Question",85,"Vic Sage and Renee Montoya have worked with League-related teams."],
 ["Animal Man",100,"Animal Man has been part of Justice League lineups in comics."]
 ]),
 Q("dcc-02","dc-comics","Name a Green Lantern from any sector or era.","The Corps is much larger than one ring-bearer.","lanterns","The Green Lantern Corps",[
 ["Hal Jordan",10,"Hal Jordan is one of Earth's best-known Green Lanterns."],["John Stewart",10,"John Stewart is an architect and prominent Lantern."],["Guy Gardner",30,"Guy Gardner is a brash and powerful Lantern."],["Kyle Rayner",30,"Kyle Rayner becomes a major Green Lantern after Hal Jordan."],["Jessica Cruz",30,"Jessica Cruz overcomes fear to become a Green Lantern."],["Simon Baz",60,"Simon Baz is a Green Lantern of Lebanese-American heritage."],["Kilowog",30,"Kilowog is a veteran Lantern and drill instructor."],["Tomar-Re",60,"Tomar-Re is a respected alien Green Lantern."],["Soranik Natu",85,"Soranik Natu is a doctor and Green Lantern from Korugar."],["Mogo",100,"Mogo is a sentient planet and a member of the Corps."],
 ["Arisia Rrab",30,"Arisia is a Green Lantern from Sector 2815."],
 ["Chaselon",60,"Chaselon is an alien Green Lantern from Sector 1416."],
 ["Boodikka",60,"Boodikka is a Green Lantern known for her formidable combat skills."],
 ["Laira",60,"Laira is a Green Lantern from Sector 112."],
 ["Salaak",30,"Salaak is a veteran Lantern and administrator of the Corps."],
 ["G'nort",60,"G'nort is a comedic but genuine Green Lantern."],
 ["Stel",85,"Stel is a robotic Green Lantern from Sector 3009."],
 ["Rot Lop Fan",85,"Rot Lop Fan is a Green Lantern who perceives sound rather than light."],
 ["Keli Quintela",100,"Keli Quintela is Teen Lantern, who uses a gauntlet with Lantern technology."]
 ]),
 Q("dcc-03","dc-comics","Name a member of the Bat-family.","Gotham's network includes partners, protégés and allies.","batfamily","The Bat-family",[
 ["Nightwing",10,"Dick Grayson becomes Nightwing after leaving the Robin identity."],["Robin",10,"Several heroes have carried the Robin mantle."],["Batgirl",10,"Barbara Gordon is one of the best-known Batgirls."],["Alfred Pennyworth",10,"Alfred is Bruce Wayne's loyal confidant."],["Red Hood",30,"Jason Todd returns as the antihero Red Hood."],["Red Robin",30,"Tim Drake takes on the Red Robin identity."],["Batwoman",30,"Kate Kane is a Gotham vigilante and Bat-family ally."],["Spoiler",60,"Stephanie Brown operates as Spoiler and has also been Robin."],["Orphan",60,"Cassandra Cain becomes the vigilante Orphan."],["The Signal",85,"Duke Thomas protects Gotham as the Signal."],
 ["Huntress",30,"Helena Bertinelli has worked alongside Batman and the Bat-family."],
 ["Azrael",30,"Jean-Paul Valley has served as Batman and an ally."],
 ["Batwing",60,"Luke Fox operates as Batwing in Gotham."],
 ["Bluebird",60,"Harper Row becomes the vigilante Bluebird."],
 ["Ghost-Maker",60,"Ghost-Maker is a vigilante ally and rival of Batman."],
 ["Clownhunter",85,"Bao Pham becomes the Gotham vigilante Clownhunter."],
 ["Julia Pennyworth",100,"Julia Pennyworth is Alfred's daughter and an intelligence operative allied with Batman."]
 ]),
 Q("dcc-04","dc-comics","Name a speedster from the DC Universe.","The Speed Force has empowered heroes and villains alike.","speedsters","The Speed Force",[
 ["Barry Allen",10,"Barry Allen is the best-known modern Flash."],["Wally West",10,"Wally West succeeds Barry and becomes one of the fastest heroes."],["Jay Garrick",30,"Jay Garrick is the Golden Age Flash."],["Bart Allen",30,"Bart Allen has served as Impulse, Kid Flash and the Flash."],["Jesse Quick",60,"Jesse Chambers is a speedster who has used the Jesse Quick identity."],["Max Mercury",60,"Max Mercury is a veteran speedster and Speed Force mentor."],["Eobard Thawne",30,"Eobard Thawne is the Reverse-Flash."],["Godspeed",60,"August Heart becomes the speedster villain Godspeed."],["Johnny Quick",85,"Johnny Quick is a speedster from the Crime Syndicate's world."],
 ["XS",30,"Jenni Ognats is a speedster from the Legion of Super-Heroes."],
 ["Inertia",60,"Thaddeus Thawne is a speedster antagonist."],
 ["Savitar",30,"Savitar is a speedster villain who claims to be the god of motion."],
 ["The Rival",60,"The Rival is a Golden Age speedster villain."],
 ["Black Flash",85,"The Black Flash personifies death for speedsters."],
 ["Zoom",30,"Hunter Zolomon becomes the villain Zoom."],
 ["Cobalt Blue",60,"Malcolm Thawne is a speedster enemy of the Flash."],
 ["Avery Ho",85,"Avery Ho is the Flash of China and a member of the Flash family."],
 ["Jai West",100,"Jai West is one of Wally West's children and has super-speed powers."]
 ]),
 Q("dcc-05","dc-comics","Name an enemy of Superman.","The Man of Steel has faced threats from Earth and beyond.","supermanvillains","Superman's rogues gallery",[
 ["Lex Luthor",10,"Lex Luthor is Superman's defining human adversary."],["General Zod",10,"Zod is a Kryptonian military leader and recurring foe."],["Brainiac",10,"Brainiac collects cities and knowledge across the universe."],["Doomsday",10,"Doomsday is the monster who famously kills Superman."],["Darkseid",30,"Darkseid is a cosmic tyrant and enemy of the Justice League."],["Bizarro",30,"Bizarro is a distorted counterpart of Superman."],["Metallo",60,"Metallo uses a kryptonite-powered heart."],["Mongul",60,"Mongul rules the Warworld."],["Parasite",30,"Parasite drains energy and powers from others."],["Manchester Black",85,"Manchester Black leads the Elite and challenges Superman's ideals."],
 ["Livewire",30,"Leslie Willis becomes the electricity-powered villain Livewire."],
 ["Toyman",30,"Winslow Schott is a recurring Superman enemy."],
 ["Silver Banshee",30,"Silver Banshee is a supernatural enemy of Superman."],
 ["Kryptonite Man",60,"Kryptonite Man is empowered by kryptonite radiation."],
 ["Atomic Skull",60,"Atomic Skull is a radioactive Superman foe."],
 ["Cyborg Superman",30,"Hank Henshaw impersonates Superman with cybernetic powers."],
 ["Eradicator",60,"The Eradicator is a Kryptonian construct that becomes an antagonist."],
 ["Lobo",30,"Lobo is an intergalactic bounty hunter who has fought Superman."],
 ["Ultra-Humanite",85,"Ultra-Humanite is an early supervillain who has battled Superman."],
 ["Mister Mxyzptlk",100,"Mister Mxyzptlk is an imp from the Fifth Dimension who repeatedly challenges Superman."]
 ]),
 Q("dcc-06","dc-comics","Name a cosmic or New Gods character from DC Comics.","The Fourth World and DC's cosmic realms are full of powerful figures.","newgods","The New Gods and cosmic DC",[
 ["Darkseid",10,"Darkseid rules Apokolips and seeks the Anti-Life Equation."],["Highfather",30,"Highfather leads New Genesis."],["Orion",30,"Orion is the warrior son of Darkseid raised on New Genesis."],["Mister Miracle",30,"Scott Free is the master escape artist of the New Gods."],["Big Barda",30,"Big Barda is a powerful New God and former Female Fury."],["Metron",60,"Metron travels the cosmos in the Mobius Chair."],["Lightray",60,"Lightray is a heroic New God of New Genesis."],["The Anti-Monitor",30,"The Anti-Monitor threatens the multiverse in Crisis on Infinite Earths."],["Perpetua",85,"Perpetua is a creator figure tied to the multiverse's origin."],["The Great Darkness",100,"The Great Darkness is an ancient primordial force in DC cosmology."],
 ["Granny Goodness",30,"Granny Goodness trains the forces of Apokolips."],
 ["Kalibak",30,"Kalibak is Darkseid's brutal son."],
 ["Desaad",30,"Desaad is Darkseid's torturer and chief scientist."],
 ["Forager",60,"Forager is an insectoid New Genesis hero."],
 ["Himon",60,"Himon is a brilliant New Genesis inventor."],
 ["Beautiful Dreamer",60,"Beautiful Dreamer is a member of the Forever People."],
 ["Mark Moonrider",85,"Mark Moonrider is a member of the Forever People."],
 ["Serifan",85,"Serifan is a member of the Forever People."],
 ["Vykin",85,"Vykin the Black is a member of the Forever People."],
 ["Takion",100,"Takion is a powerful New God connected to the Source."]
 ]),
 Q("dcc-07","dc-comics","Name a member of the Teen Titans.","The Titans have been a home for young heroes across generations.","titans","The Teen Titans",[
 ["Nightwing",10,"Dick Grayson led the original generation as Robin."],["Starfire",10,"Koriand'r is an alien princess with energy powers."],["Raven",10,"Raven is an empath with demonic heritage."],["Beast Boy",10,"Garfield Logan can transform into animals."],["Cyborg",10,"Victor Stone is a founding Titan in many continuities."],["Donna Troy",30,"Donna Troy is a longtime Titan and Wonder Woman ally."],["Blue Beetle",30,"Jaime Reyes has joined the Titans in modern stories."],["Superboy",30,"Conner Kent has served with the Titans."],["Kid Flash",30,"Wally West and other speedsters have been Kid Flash."],["Terra",60,"Tara Markov is a complicated and famous member of the Titans' history."],
 ["Aqualad",30,"Garth and Jackson Hyde have both used the Aqualad identity."],
 ["Wonder Girl",30,"Donna Troy and Cassie Sandsmark have served with the Titans."],
 ["Ravager",60,"Rose Wilson is a fighter and member of the Titans."],
 ["Jericho",60,"Joey Wilson is a Titan with possession powers."],
 ["Bumblebee",30,"Karen Beecher is a longtime Titan."],
 ["Omen",60,"Lilith Clay is a Titan with psychic abilities."],
 ["Hawk",30,"Hank Hall is one half of the duo Hawk and Dove."],
 ["Dove",30,"Dawn Granger is one half of Hawk and Dove."],
 ["Argent",85,"Toni Monetti is a member of the Titans."],
 ["Red Star",85,"Leonid Kovar is a longtime Teen Titans member."],
 ["Risk",100,"Cody Driscoll is a member of the 1990s Teen Titans roster."]
 ])
 ]
};
export const mixedQuestions:Question[]=[questionSets.mcu[0],questionSets["dc-movies"][1],questionSets["marvel-comics"][1],questionSets["dc-comics"][3],questionSets.mcu[5],questionSets["dc-movies"][4],questionSets["marvel-comics"][3]];
