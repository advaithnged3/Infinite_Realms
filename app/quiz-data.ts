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
 Q("mcu-01","mcu","Name a hero, villain or supporting character from the Marvel Cinematic Universe.","Earth's Mightiest Heroes assembled against the Chitauri.","avengers","The Battle of New York",[
 ["Iron Man",10,"Tony Stark leads the aerial assault and carries the nuclear missile through the portal."],["Captain America",10,"Steve Rogers coordinates the team on the ground."],["Thor",10,"Thor battles the Chitauri and confronts Loki."],["Black Widow",30,"Natasha Romanoff closes the portal using the Tesseract device."],["Hawkeye",30,"Clint Barton fights from the rooftops with his bow."],["Hulk",30,"Bruce Banner transforms and defeats the Chitauri leviathan."],
 ["Maria Hill",60,"S.H.I.E.L.D. Deputy Director Maria Hill coordinates the response during the New York invasion."],
 ["Nick Fury",60,"Nick Fury directs the Avengers Initiative and oversees the response."],
 ["Erik Selvig",85,"Selvig is manipulated by Loki into operating the portal device."],
 ["Agent Phil Coulson",100,"Coulson is a S.H.I.E.L.D. agent whose actions directly shape the Avengers' response."]
 ]),
 Q("mcu-02","mcu","Name an Infinity Stone, an artefact containing one, or a character connected to the Stones in the MCU.","There are six, each with a distinct colour and power.","stones","The six Infinity Stones",[
 ["Space Stone",10,"The blue Space Stone is housed in the Tesseract."],["Mind Stone",10,"The yellow Mind Stone is first seen in Loki's sceptre."],["Time Stone",10,"The green Time Stone is protected in the Eye of Agamotto."],["Power Stone",10,"The purple Power Stone is hidden inside the Orb."],["Reality Stone",30,"The red Reality Stone takes the form of the Aether."],["Soul Stone",100,"The orange Soul Stone is hidden on Vormir."],
 ["Thanos",85,"Thanos is the central figure seeking to collect all six Stones."],
 ["The Collector",85,"Taneleer Tivan keeps the Reality Stone and studies cosmic artefacts."],["Red Skull",60,"Red Skull guards the Soul Stone on Vormir."],["Ronan the Accuser",30,"Ronan obtains the Orb containing the Power Stone."],["Loki",30,"Loki wields the sceptre containing the Mind Stone."],["Tony Stark",60,"Tony Stark uses the completed Infinity Gauntlet in Endgame."],["Bruce Banner",60,"Bruce Banner uses the Gauntlet to reverse the Blip."],["Star-Lord",30,"Peter Quill briefly touches the Power Stone on Morag."],["Gamora",30,"Gamora seeks the Soul Stone and discovers its location."],["Jane Foster",85,"Jane Foster is briefly entrusted with the Reality Stone as the Aether."]]),
 Q("mcu-03","mcu","Name an organisation, team, faction or agency in the MCU.","Think agencies, secret groups, alien crews and superhero teams.","factions","The many factions of the MCU",[
 ["S.H.I.E.L.D.",10,"S.H.I.E.L.D. is the intelligence agency led by Nick Fury.",["SHIELD"]],["HYDRA",10,"HYDRA is the clandestine organisation that infiltrates S.H.I.E.L.D."],["The Avengers",10,"The Avengers are Earth's principal superhero team."],["The Guardians of the Galaxy",30,"The Guardians are a band of cosmic misfits who protect the galaxy.",["Guardians"]],["The TVA",30,"The Time Variance Authority monitors branching timelines."],["The Ravagers",60,"The Ravagers are spacefaring crews led by figures such as Yondu."],["Nova Corps",85,"The Nova Corps is the interstellar peacekeeping force based on Xandar."],["The Dora Milaje",60,"The Dora Milaje are Wakanda's elite royal guard."],
 ["Damage Control",30,"The Department of Damage Control handles superhuman-related incidents."],
 ["The Ten Rings",30,"The Ten Rings is an ancient organisation led in the modern era by Wenwu."],
 ["The Masters of the Mystic Arts",30,"The sorcerers protect Earth from mystical threats."],
 ["The Eternals",30,"The Eternals are an ancient group of engineered protectors."],
 ["The Flag Smashers",60,"The Flag Smashers emerge in the post-Blip world."],
 ["The Red Room",85,"The Red Room trains Black Widow operatives."],
 ["S.W.O.R.D.",100,"Sentient Weapon Observation and Response Division is an organisation introduced in WandaVision."]
 ]),
 Q("mcu-04","mcu","Name an Asgardian, a Thor ally or someone who has wielded Mjolnir in the MCU.","The enchanted hammer has judged more than one hero worthy.","mjolnir","The enchanted hammer Mjolnir",[
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
 Q("mcu-06","mcu","Name a character from the Guardians of the Galaxy films, including allies, enemies and Ravager connections.","The roster has changed across the films.","guardians","The Guardians' changing roster",[
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
 Q("dcm-02","dc-movies","Name a city, island, planet or hidden base featured in a DC film.","Think of the heroes' home cities and key story locations.","dcplaces","Cities of the DC film worlds",[
 ["Gotham City",10,"Gotham is Batman's home and the setting of multiple DC films.",["Gotham"]],["Metropolis",10,"Metropolis is Superman's adopted home city."],["Themyscira",30,"Themyscira is Diana's Amazon homeland."],["Central City",30,"Central City is associated with Barry Allen in The Flash."],["Atlantis",10,"Atlantis is the underwater kingdom ruled by Arthur Curry."],["Apokolips",60,"Apokolips is Darkseid's homeworld."],["Kahndaq",60,"Kahndaq is the country at the centre of Black Adam."],["Belle Reve",85,"Belle Reve is the prison facility associated with the Suicide Squad."],
 ["Smallville",30,"Smallville is Clark Kent's hometown."],
 ["Corto Maltese",30,"Corto Maltese is the island nation targeted in The Suicide Squad."],
 ["Krypton",10,"Krypton is Superman's destroyed homeworld."],
 ["Belle Reve Penitentiary",85,"Belle Reve is the prison facility associated with Task Force X."],
 ["The Rock of Eternity",100,"The Rock of Eternity is the Wizard’s mystical lair in Shazam!."]
 ]),
 Q("dcm-03","dc-movies","Name a member, ally or adversary of Batman from DC films, including animated films.","Gotham's protector rarely works entirely alone.","batfamily","The Bat-family",[
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
 Q("dcm-05","dc-movies","Name a character from a Suicide Squad or Task Force X film, including team members, handlers and opponents.","The roster is deliberately unpredictable.","squad","Task Force X",[
 ["Harley Quinn",10,"Harley Quinn is a central member of the cinematic squad."],["Deadshot",10,"Floyd Lawton is a skilled marksman in Suicide Squad."],["Bloodsport",30,"Bloodsport leads the team in The Suicide Squad."],["Peacemaker",30,"Peacemaker is part of the Corto Maltese mission."],["King Shark",10,"King Shark is the team's powerful, surprisingly gentle member."],["Ratcatcher 2",60,"Cleo Cazo is able to control rats."],["Polka-Dot Man",60,"Abner Krill weaponises multicoloured polka-dot energy."],["Rick Flag",10,"Rick Flag commands Task Force X."],["Captain Boomerang",30,"George Harkness is a returning squad member."],
 ["Savant",60,"Savant is part of the team sent to Corto Maltese."],
 ["Javelin",60,"Javelin is a member of the opening squad in The Suicide Squad."],
 ["Blackguard",60,"Blackguard is part of the squad's ill-fated first wave."],
 ["Mongal",60,"Mongal joins the first wave of the Corto Maltese mission."],
 ["Weasel",30,"Weasel is included in the squad's deployment."],
 ["T.D.K.",85,"The Detachable Kid is part of the opening team."],
 ["Amanda Waller",100,"Amanda Waller creates and oversees Task Force X in the Suicide Squad films."]
 ]),
 Q("dcm-06","dc-movies","Name a DC character who has appeared in live-action or animated films.","Consider heroes, villains and recurring supporting characters.","crossovers","DC film legacies",[
 ["Batman",10,"Batman has appeared across multiple cinematic eras."],["Superman",10,"Superman has been portrayed across multiple film continuities."],["Joker",10,"The Joker has appeared in several distinct film interpretations."],["Wonder Woman",30,"Diana appears across multiple films in the DCEU."],["Aquaman",30,"Arthur Curry appears in Justice League and solo films."],["Lex Luthor",60,"Lex Luthor has been reimagined in multiple film eras."],["Alfred Pennyworth",30,"Alfred appears across several Batman film series."],
 ["Commissioner Gordon",30,"Gordon appears across several Batman film continuities."],
 ["Harvey Dent",30,"Harvey Dent appears in multiple Batman film interpretations."],
 ["Catwoman",100,"Catwoman appears in several distinct Batman film eras."],
 ["The Penguin",30,"The Penguin has been portrayed in multiple Batman film continuities."],
 ["Riddler",60,"The Riddler appears in more than one Batman film era."],
 ["Two-Face",60,"Two-Face appears in multiple Batman films."],
 ["Bane",60,"Bane appears in more than one cinematic Batman continuity."],
 ["The Scarecrow",85,"Jonathan Crane appears in Christopher Nolan's Batman trilogy."],
 ["Ra's al Ghul",100,"Ra's al Ghul is a recurring Batman adversary across major film adaptations."]
 ]),
 Q("dcm-07","dc-movies","Name a magic user, supernatural being or mythic character from a DC film, including animated films.","Not every DC hero relies on gadgets or super-strength.","magic","The supernatural side of DC films",[
 ["Shazam",10,"Billy Batson transforms through a magical word."],["Black Adam",10,"Teth-Adam's powers originate from ancient magic."],["Doctor Fate",30,"Kent Nelson wields the power of the Lords of Order."],["Enchantress",30,"June Moone becomes the supernatural Enchantress."],["Zatanna",60,"Zatanna is a powerful stage magician and sorceress in DC stories."],["Constantine",60,"John Constantine is an occult detective in DC adaptations."],["The Wizard",100,"The Wizard is the ancient sorcerer who grants Billy Batson his powers in Shazam!."],
 
 ["Sabbac",30,"Sabbac is a demonic supernatural antagonist in Black Adam."]
 ])
 ],
 "marvel-comics":[
 Q("mar-01","marvel-comics","Name a mutant who has been an X-Men member or ally in Marvel Comics.","The mutant team has had dozens of rosters over the decades.","xmen","The X-Men",[
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
 ["Namor",100,"Namor has been a member of the X-Men and brings his Atlantean powers to the team."]
 ]),
 Q("mar-02","marvel-comics","Name a villain or recurring adversary who has fought Spider-Man.","New York's web-slinger has one of comics' deepest rogues galleries.","spidey","Spider-Man's rogues gallery",[
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
 Q("mar-03","marvel-comics","Name a character, artefact or cosmic being connected to the Infinity Gems in Marvel Comics.","The Gems have passed through many hands and storylines.","infinity","The Infinity Gems",[
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
 Q("mar-05","marvel-comics","Name a member, ally, associate or recurring opponent of the Fantastic Four.","The First Family's circle reaches well beyond its original four.","fantastic4","The Fantastic Four",[
 ["Mister Fantastic",10,"Reed Richards is the team's elastic genius.",["Reed Richards"]],["Invisible Woman",10,"Sue Storm can turn invisible and create force fields.",["Sue Storm"]],["Human Torch",10,"Johnny Storm controls flame.",["Johnny Storm"]],["The Thing",10,"Ben Grimm is the team's rocky powerhouse.",["Ben Grimm"]],["She-Hulk",30,"Jennifer Walters has joined the team in several stories."],["Crystal",60,"Crystal of the Inhumans has been closely associated with the team."],["Valeria Richards",60,"Valeria is Reed and Sue's exceptionally gifted daughter."],["H.E.R.B.I.E.",85,"H.E.R.B.I.E. is the team's robotic companion."],
 ["Ant-Man",30,"Scott Lang has worked with the Fantastic Four."],
 ["Medusa",30,"Medusa of the Inhumans has allied with the Fantastic Four."],
 ["Black Bolt",30,"Black Bolt has been a close ally of the Fantastic Four."],
 ["Namor",30,"Namor has a long and complicated relationship with the team."],
 ["Wyatt Wingfoot",60,"Wyatt Wingfoot is a longtime friend and ally of the Fantastic Four."],
 ["Alicia Masters",30,"Alicia Masters is Ben Grimm's longtime partner and close ally."],
 ["Agatha Harkness",85,"Agatha has served as a mentor to Franklin Richards."],
 ["Dragon Man",60,"Dragon Man has been an adversary and later ally of the Fantastic Four."],
 ["Franklin Richards",100,"Franklin is Reed and Sue’s son and an essential member of the extended Fantastic Four family."]
 ]),
 Q("mar-06","marvel-comics","Name a street-level hero or vigilante from Marvel Comics.","Not every hero saves the universe; some protect a neighbourhood.","street","Marvel's street-level defenders",[
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
 Q("mar-07","marvel-comics","Name a mutant homeland, refuge, school, island or major mutant community.","Mutant history has been shaped by places of refuge and conflict.","mutantlands","Mutant homelands and communities",[
 ["Krakoa",10,"Krakoa becomes a sovereign mutant homeland in the modern X-Men era."],["Genosha",10,"Genosha is a nation whose history is tied to mutant oppression."],["Utopia",30,"Utopia is an island base for mutants off the coast of San Francisco."],["Muir Island",30,"Muir Island has hosted important mutant research and refuge."],["Arakko",60,"Arakko is an ancient mutant land connected to Amenth."],["Asteroid M",60,"Asteroid M has served as a mutant base under Magneto."],["The Savage Land",85,"The Savage Land has been a refuge and battleground for mutants."],["Limbo",85,"Limbo is a mystical dimension ruled by beings including Magik."],
 ["Akkaba",60,"Akkaba is a community associated with Apocalypse."],
 ["Island M",60,"Island M has served as a base for Magneto."],
 ["The Krakoan nation",10,"Krakoa is the sovereign mutant nation."],
 ["The Morlock Tunnels",100,"The tunnels beneath New York are the hidden community and refuge of the Morlocks."]
 ])
 ],
 "dc-comics":[
 Q("dcc-01","dc-comics","Name a hero who has served in the Justice League across DC Comics eras.","The League's roster spans Earth, space and the supernatural.","justiceleague","The Justice League",[
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
 Q("dcc-02","dc-comics","Name a Lantern from any DC Corps, sector or era.","The Corps is much larger than one ring-bearer.","lanterns","The Green Lantern Corps",[
 ["Hal Jordan",10,"Hal Jordan is one of Earth's best-known Green Lanterns."],["John Stewart",10,"John Stewart is an architect and prominent Lantern."],["Guy Gardner",30,"Guy Gardner is a brash and powerful Lantern."],["Kyle Rayner",30,"Kyle Rayner becomes a major Green Lantern after Hal Jordan."],["Jessica Cruz",30,"Jessica Cruz overcomes fear to become a Green Lantern."],["Simon Baz",60,"Simon Baz is a Green Lantern of Lebanese-American heritage."],["Kilowog",30,"Kilowog is a veteran Lantern and drill instructor."],["Tomar-Re",60,"Tomar-Re is a respected alien Green Lantern."],["Soranik Natu",85,"Soranik Natu is a doctor and Green Lantern from Korugar."],["Mogo",100,"Mogo is a sentient planet and a member of the Corps."],
 ["Arisia Rrab",30,"Arisia is a Green Lantern from Sector 2815."],
 ["Chaselon",60,"Chaselon is an alien Green Lantern from Sector 1416."],
 ["Boodikka",60,"Boodikka is a Green Lantern known for her formidable combat skills."],
 ["Laira",60,"Laira is a Green Lantern from Sector 112."],
 ["Salaak",30,"Salaak is a veteran Lantern and administrator of the Corps."],
 ["G'nort",60,"G'nort is a comedic but genuine Green Lantern."],
 ["Stel",85,"Stel is a robotic Green Lantern from Sector 3009."],
 ["Rot Lop Fan",85,"Rot Lop Fan is a Green Lantern who perceives sound rather than light."],
 ["Abin Sur",10,"Abin Sur is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Alan Scott",10,"Alan Scott is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Amanita",85,"Amanita is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Amnee Pree",85,"Amnee Pree is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Anya Savenlovich",85,"Anya Savenlovich is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Apros",60,"Apros is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Archon Z'gmora",100,"Archon Z'gmora is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ard Rennat",85,"Ard Rennat is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ares Bandet",85,"Ares Bandet is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Arkkis Chummuck",85,"Arkkis Chummuck is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["AR-N-O-Q",100,"AR-N-O-Q is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Artis Chep",85,"Artis Chep is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Arx",85,"Arx is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ash",85,"Ash is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ash-Pak-Glif",100,"Ash-Pak-Glif is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Avir",85,"Avir is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ayria",85,"Ayria is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Barin",85,"Barin is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Barin Char",85,"Barin Char is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Barreer Wot",85,"Barreer Wot is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["B'dg",60,"B'dg is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Bivvix",85,"Bivvix is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Blish Rrab",85,"Blish Rrab is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Bogosar",85,"Bogosar is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Branwilla",85,"Branwilla is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Breeon",85,"Breeon is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Brik",60,"Brik is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Brin",85,"Brin is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Brokk",85,"Brokk is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["B'rr",85,"B'rr is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Bruks",85,"Bruks is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["B'Shi",85,"B'Shi is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Burkett",85,"Burkett is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Bzzd",60,"Bzzd is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Cary Wren",85,"Cary Wren is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Celeste Rockfish",85,"Celeste Rockfish is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Charlie Vicker",60,"Charlie Vicker is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Charqwep",100,"Charqwep is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Cherniss",85,"Cherniss is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Chogar",85,"Chogar is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Chthos-Chthas Chthatis",100,"Chthos-Chthas Chthatis is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Cimfet Tau",85,"Cimfet Tau is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["The Collective",85,"The Collective is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Cundiff Cood",100,"Cundiff Cood is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Dalor",85,"Dalor is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Daniel Young",85,"Daniel Young is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["D'aran Tuu",100,"D'aran Tuu is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Davo Yull",85,"Davo Yull is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Deeter",85,"Deeter is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Diamalon",85,"Diamalon is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Dkrtzy RRR",100,"Dkrtzy RRR is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Dob Zagil",100,"Dob Zagil is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Donna Parker",85,"Donna Parker is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Driq",85,"Driq is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Droxelle",85,"Droxelle is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ebikar Hrui",85,"Ebikar Hrui is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Eddore",85,"Eddore is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ekron",85,"Ekron is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["El'Qa Sqa Zreenah",100,"El'Qa Sqa Zreenah is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ermey",100,"Ermey is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Fentara Rrab",85,"Fentara Rrab is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Flodo Span",85,"Flodo Span is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Gala De",100,"Gala De is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Galius Zed",60,"Galius Zed is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Galte-Re",85,"Galte-Re is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Garl Rathbone",100,"Garl Rathbone is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Garmin Vid",85,"Garmin Vid is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ghrelk",100,"Ghrelk is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ghr'll",100,"Ghr'll is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["G'hu",85,"G'hu is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Gion",100,"Gion is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Gk'd",100,"Gk'd is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Gpaak",85,"Gpaak is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Graf Toren",60,"Graf Toren is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Greb",100,"Greb is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Greet",100,"Greet is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Gretti",85,"Gretti is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Grojamm",100,"Grojamm is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Grumb",100,"Grumb is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Hammeroon",100,"Hammeroon is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Harvid",85,"Harvid is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Hollika Rahn",85,"Hollika Rahn is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Horoq Nnot",100,"Horoq Nnot is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Jeryll",85,"Jeryll is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Jewelius Blak",100,"Jewelius Blak is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Joanqin",85,"Joanqin is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Jong Li",85,"Jong Li is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kaylark",85,"Kaylark is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ke'Haan",60,"Ke'Haan is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Khen-To",85,"Khen-To is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kentor Omoto",100,"Kentor Omoto is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kho Kharhi",100,"Kho Kharhi is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Ki-nilg",100,"Ki-nilg is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kkrudd",100,"Kkrudd is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kraken",85,"Kraken is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Krista X",85,"Krista X is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Krydel-4",85,"Krydel-4 is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["K'ryssma",100,"K'ryssma is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["KT21",100,"KT21 is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kwo Varrikk",100,"Kwo Varrikk is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Kworri",100,"Kworri is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Laham",85,"Laham is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lan Dibbux",100,"Lan Dibbux is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Larvox",60,"Larvox is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lashorr",85,"Lashorr is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Leezle Pon",85,"Leezle Pon is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Liana",85,"Liana is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lin Canar",85,"Lin Canar is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lodar Monak",100,"Lodar Monak is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lok Neboora",85,"Lok Neboora is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ["Lysandra",85,"Lysandra is recorded as a member of the Green Lantern Corps in DCU Guide's membership index."],
 ]),
 Q("dcc-03","dc-comics","Name a Bat-Family member, ally or extended associate from DC Comics.","Gotham's network includes partners, protégés and allies.","batfamily","The Bat-family",[
 ["Nightwing",10,"Dick Grayson becomes Nightwing after leaving the Robin identity."],["Robin",10,"Several heroes have carried the Robin mantle."],["Batgirl",10,"Barbara Gordon is one of the best-known Batgirls."],["Alfred Pennyworth",10,"Alfred is Bruce Wayne's loyal confidant."],["Red Hood",30,"Jason Todd returns as the antihero Red Hood."],["Red Robin",30,"Tim Drake takes on the Red Robin identity."],["Batwoman",30,"Kate Kane is a Gotham vigilante and Bat-family ally."],["Spoiler",60,"Stephanie Brown operates as Spoiler and has also been Robin."],["Orphan",60,"Cassandra Cain becomes the vigilante Orphan."],["The Signal",85,"Duke Thomas protects Gotham as the Signal."],
 ["Huntress",30,"Helena Bertinelli has worked alongside Batman and the Bat-family."],
 ["Azrael",30,"Jean-Paul Valley has served as Batman and an ally."],
 ["Batwing",60,"Luke Fox operates as Batwing in Gotham."],
 ["Bluebird",60,"Harper Row becomes the vigilante Bluebird."],
 ["Ghost-Maker",60,"Ghost-Maker is a vigilante ally and rival of Batman."],
 ["Clownhunter",85,"Bao Pham becomes the Gotham vigilante Clownhunter."],
 ["Julia Pennyworth",100,"Julia Pennyworth is Alfred's daughter and an intelligence operative allied with Batman."]
 ]),
 Q("dcc-04","dc-comics","Name a speedster or Speed Force-connected character from DC Comics.","The Speed Force has empowered heroes and villains alike.","speedsters","The Speed Force",[
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
 Q("dcc-05","dc-comics","Name an enemy, rival or recurring adversary of Superman in DC Comics.","The Man of Steel has faced threats from Earth and beyond.","supermanvillains","Superman's rogues gallery",[
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
 Q("dcc-06","dc-comics","Name a cosmic character, force, group or realm from DC Comics.","The Fourth World and DC's cosmic realms are full of powerful figures.","newgods","The New Gods and cosmic DC",[
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
 Q("dcc-07","dc-comics","Name a member or close ally of the Teen Titans across DC Comics eras.","The Titans have been a home for young heroes across generations.","titans","The Teen Titans",[
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

questionSets.mcu.push(
 Q("mcu-08","mcu","Name a named Wakandan character from the MCU.","The royal family, Dora Milaje and Wakandan allies all count.","factions","Wakanda's people",[
 ["T'Chaka",30,"T'Chaka is the former king of Wakanda."],["Zuri",30,"Zuri is a trusted Wakandan elder."],["W'Kabi",30,"W'Kabi leads Wakanda's Border Tribe."],["Ayo",30,"Ayo is a Dora Milaje warrior."],["Aneka",60,"Aneka is a Dora Milaje warrior who becomes a Midnight Angel."],["N'Jobu",60,"N'Jobu is T'Challa's uncle."],["N'Jadaka",30,"N'Jadaka is Erik Killmonger's Wakandan name."],["Toussaint",60,"Toussaint is the name given to T'Challa and Nakia's son."],["Queen Ramonda",10,"Ramonda is the queen mother of Wakanda."],["Bashenga",85,"Bashenga is the first Black Panther in Wakandan legend."],["M'Kathu",85,"M'Kathu is a Wakandan tribal elder."],["Jabari Tribe Elder",85,"The Jabari elder represents the mountain tribe."],["Yibambe Warrior",100,"Wakandan warriors defend their nation in battle."]
 ]),
 Q("mcu-09","mcu","Name a character from an MCU television series or special.","Think of the people who made the Disney+ and television stories matter.","script","Stories beyond the films",[
 ["Darcy Lewis",10,"Darcy Lewis appears in the Thor films and WandaVision."],["Jimmy Woo",30,"Jimmy Woo is an FBI agent who investigates Westview."],["Monica Rambeau",10,"Monica Rambeau becomes a super-powered hero."],["Agatha Harkness",10,"Agatha Harkness is the witch at the centre of WandaVision."],["Billy Maximoff",30,"Billy is one of Wanda's magically created twins."],["Tommy Maximoff",30,"Tommy is Wanda's other magically created twin."],["Ravonna Renslayer",30,"Ravonna is a TVA judge."],["Miss Minutes",30,"Miss Minutes is the TVA's animated mascot."],["Hunter B-15",30,"B-15 is a TVA hunter who questions the organisation."],["Casey",60,"Casey is a TVA employee."],["Layla El-Faouly",30,"Layla becomes the Scarlet Scarab."],["Arthur Harrow",30,"Arthur Harrow is the antagonist of Moon Knight."],["Kamran",60,"Kamran is a character in Ms. Marvel."],["Nakia Bahadir",60,"Nakia is Kamala Khan's friend."],["Bruno Carrelli",30,"Bruno is Kamala's close friend and scientific confidant."],["Maya Lopez",10,"Maya Lopez is the lead of Echo."],["Alaqua Cox's character Echo",60,"Echo is the hearing-impaired Choctaw hero Maya Lopez."],["Jack Duquesne",30,"Jack Duquesne is known as the Swordsman."],["Eleanor Bishop",60,"Eleanor is Kate Bishop's mother."],["He Who Remains",30,"He Who Remains is a Kang variant who founded the TVA."]
 ["Uatu",100,"Uatu is the Watcher who narrates and observes the events of What If...?"],
 ["Infinity Ultron",100,"Ultron becomes an existential threat after taking the Infinity Stones in What If...?."]
 ]),
 Q("mcu-10","mcu","Name a villain or antagonist from the MCU.","The MCU's rogues gallery stretches from street crime to cosmic threats.","villains","The MCU's rogues gallery",[
 ["Justin Hammer",30,"Justin Hammer is an arms manufacturer and rival of Tony Stark."],["Alexander Pierce",30,"Pierce is a senior HYDRA infiltrator."],["Yellowjacket",30,"Darren Cross becomes Yellowjacket."],["Kaecilius",60,"Kaecilius is a zealot serving Dormammu."],["Ego",30,"Ego is a Celestial and Peter Quill's father."],["Ayesha",60,"Ayesha leads the Sovereign."],["Taserface",60,"Taserface is a Ravager mutineer."],["Aldrich Killian",30,"Killian leads the Advanced Idea Mechanics plot in Iron Man 3."],["Malekith",30,"Malekith leads the Dark Elves."],["Kurse",60,"Algrim transforms into Kurse."],["Kaecilius",60,"Kaecilius is a former Master of the Mystic Arts."],["Dreykov",60,"Dreykov controls the Red Room."],["Taskmaster",30,"Antonia Dreykov is forced into the Taskmaster identity."],["Mysterio",10,"Quentin Beck uses illusions to deceive Spider-Man."],["The High Evolutionary",30,"The High Evolutionary conducts cruel genetic experiments."],["Dar-Benn",60,"Dar-Benn is a Kree revolutionary."],["Gravik",60,"Gravik leads a Skrull rebellion."],["Valentina Allegra de Fontaine",30,"Valentina recruits antiheroes for covert operations."]
 ["Silas Stone",100,"Silas Stone is Victor Stone's father and a key supporting character in Justice League."],
 ])
);
questionSets["dc-movies"].push(
 Q("dcm-08","dc-movies","Name a supporting character from a live-action DC film.","The heroes' worlds are filled with friends, family and allies.","dcplaces","The people behind the heroes",[
 ["Martha Kent",10,"Martha Kent is Clark's adoptive mother."],["Jonathan Kent",10,"Jonathan Kent raises Clark in Smallville."],["Lois Lane",10,"Lois Lane is a Daily Planet reporter."],["Perry White",30,"Perry White is the Daily Planet editor."],["Jimmy Olsen",30,"Jimmy Olsen is a Daily Planet photographer."],["Lucius Fox",30,"Lucius Fox supports Bruce Wayne's operations."],["Jim Gordon",10,"Jim Gordon is Gotham's police commissioner."],["Harvey Dent",30,"Harvey Dent is Gotham's district attorney."],["Alfred Pennyworth",10,"Alfred is Bruce Wayne's loyal butler and confidant."],["Nuidis Vulko",60,"Vulko is an Atlantean adviser."],["Mera",10,"Mera is an Atlantean warrior and queen."],["Hippolyta",30,"Hippolyta is the queen of the Amazons."],["Antiope",30,"Antiope trains Diana."],["Steve Trevor",10,"Steve Trevor is a pilot and Diana's ally."],["Freddy Freeman",30,"Freddy is part of the Shazam family."],
 ["Talon",100,"Talon is a Court of Owls assassin featured in animated Batman stories."]
 ]),
 Q("dcm-09","dc-movies","Name a character from an animated DC film.","Animated DC films explore heroes and villains across many continuities.","planet","Animated worlds of DC",[
 ["Terry McGinnis",30,"Terry McGinnis becomes Batman Beyond."],["Barbara Gordon",10,"Barbara Gordon is Batgirl and later Oracle."],["Damian Wayne",10,"Damian is Bruce Wayne's son and a Robin."],["Jason Todd",10,"Jason Todd is the second Robin and later Red Hood."],["Tim Drake",30,"Tim Drake becomes the third major Robin."],["Cassandra Cain",30,"Cassandra Cain is a highly trained Bat-family member."],["Jonah Hex",60,"Jonah Hex appears in animated DC stories."],["Vandal Savage",30,"Vandal Savage is an immortal adversary."],["The Question",30,"The Question is a conspiracy-minded detective."],["Ragman",60,"Ragman is a supernatural hero."],["Etrigan",30,"Etrigan is a demon bound to Jason Blood."],["John Constantine",10,"Constantine is a cynical occult detective."],["Zatanna",10,"Zatanna is a stage magician and real sorceress."],["Deadman",30,"Deadman is the spirit of Boston Brand."],["The Phantom Stranger",60,"The Phantom Stranger is a mysterious supernatural figure."],
 ["The Wizard Shazam",100,"The ancient wizard grants Billy Batson the power of Shazam."]
 ]),
 Q("dcm-10","dc-movies","Name a character from a DC film centred on Wonder Woman, Aquaman or Shazam.","Think Themyscira, Atlantis and the Shazam family.","underwater","Mythic kingdoms and hidden worlds",[
 ["Diana Prince",10,"Diana is Wonder Woman."],["Queen Atlanna",30,"Atlanna is Arthur Curry's mother."],["King Orm",30,"Orm is Aquaman's half-brother and rival."],["Black Manta",10,"Black Manta is Aquaman's nemesis."],["King Nereus",60,"Nereus rules Xebel."],["Murk",60,"Murk is an Atlantean commander."],["Dr. Sivana",10,"Sivana is a Shazam adversary."],["Mary Bromfield",30,"Mary is part of the Shazam family."],["Eugene Choi",60,"Eugene gains powers as part of the Shazam family."],["Darla Dudley",60,"Darla is one of Billy's foster siblings."],["Pedro Peña",60,"Pedro becomes one of the Shazam champions."],["Eugene",60,"Eugene is one of Billy's foster siblings."],["Hespera",60,"Hespera is one of the Daughters of Atlas."],["Kalypso",60,"Kalypso is one of the Daughters of Atlas."],["Anthea",60,"Anthea is one of the Daughters of Atlas."],["Ladón",85,"Ladon is the dragon guardian in Shazam! Fury of the Gods."]
 ["Cul Borson",100,"Cul Borson, the Serpent, is an Asgardian fear god and Odin's brother."],
 ])
);
questionSets["marvel-comics"].push(
 Q("mar-08","marvel-comics","Name an Asgardian or a character from the Nine Realms in Marvel Comics.","Thor's mythology reaches far beyond the royal family.","asgard","The Nine Realms",[
 ["Thor Odinson",10,"Thor is the God of Thunder."],["Loki Laufeyson",10,"Loki is the God of Mischief."],["Odin Borson",10,"Odin is the All-Father of Asgard."],["Frigga",30,"Frigga is queen of Asgard."],["Heimdall",10,"Heimdall guards the Bifrost."],["Sif",30,"Sif is an Asgardian warrior."],["Balder the Brave",30,"Balder is Thor's half-brother in many stories."],["Hela",10,"Hela is the Goddess of Death."],["Enchantress",30,"Amora is a powerful Asgardian sorceress."],["Executioner",30,"Skurge is known as the Executioner."],["Volstagg",30,"Volstagg is one of the Warriors Three."],["Fandral",30,"Fandral is one of the Warriors Three."],["Hogun",30,"Hogun is one of the Warriors Three."],["Beta Ray Bill",10,"Beta Ray Bill is a Korbinite worthy of wielding Stormbreaker."],["Angela",60,"Angela is an Asgardian warrior and Thor's sister in Marvel continuity."],
 ["Starfox",100,"Eros of Titan is an Eternal and has served with the Avengers."]
 ]),
 Q("mar-09","marvel-comics","Name a member or ally of the Avengers from Marvel Comics.","The roster has changed dramatically since the team's first assembly.","avengers","Earth's Mightiest Heroes",[
 ["Captain America",10,"Steve Rogers is a central Avenger."],["Iron Man",10,"Tony Stark is a founding Avenger."],["Thor",10,"Thor is a founding Avenger."],["Hulk",10,"Hulk is a founding Avenger."],["Ant-Man",10,"Hank Pym is a founding Avenger."],["Wasp",10,"Janet van Dyne is a founding Avenger."],["Black Panther",10,"T'Challa has served as an Avenger."],["Hawkeye",10,"Clint Barton is a longtime Avenger."],["Scarlet Witch",10,"Wanda Maximoff has served on several Avengers rosters."],["Quicksilver",30,"Pietro Maximoff has been an Avenger."],["Wonder Man",30,"Simon Williams is a longtime Avenger."],["Beast",30,"Hank McCoy has served with the Avengers."],["Sersi",60,"Sersi is an Eternal and an Avenger."],["Firestar",60,"Angelica Jones joins the Avengers."],["Justice",60,"Vance Astrovik has served with the Avengers."],["Triathlon",85,"Delroy Garrett has served as an Avenger."],["Stingray",85,"Walter Newell has been an Avenger reserve member."],
 ["The Marquis of Death",100,"The Marquis of Death is an immensely powerful multiversal villain."]
 ]),
 Q("mar-10","marvel-comics","Name a Marvel Comics supervillain who is not primarily a Spider-Man foe.","Look across the Avengers, X-Men, Fantastic Four and cosmic stories.","villains","Marvel's wider rogues gallery",[
 ["Doctor Doom",10,"Victor von Doom is the Fantastic Four's iconic adversary."],["Magneto",10,"Magneto is a major X-Men antagonist and sometimes ally."],["Red Skull",10,"Johann Schmidt is a longtime Captain America foe."],["Ultron",10,"Ultron is an artificial intelligence enemy of the Avengers."],["Kang the Conqueror",10,"Kang is a time-travelling conqueror."],["Apocalypse",10,"En Sabah Nur is an ancient mutant villain."],["Mister Sinister",30,"Nathaniel Essex is a geneticist obsessed with mutants."],["Annihilus",30,"Annihilus rules the Negative Zone."],["Super-Skrull",30,"Kl'rt is a Skrull warrior with Fantastic Four powers."],["The Leader",30,"Samuel Sterns is a gamma-powered intellectual enemy of Hulk."],["Baron Zemo",10,"Helmut Zemo has led the Masters of Evil and Thunderbolts."],["The Mandarin",10,"The Mandarin is a major Iron Man adversary."],["Mephisto",30,"Mephisto is a demonic entity who bargains for souls."],["Surtur",30,"Surtur is a fire demon prophesied to destroy Asgard."],["The Beyonder",60,"The Beyonder is an immensely powerful cosmic being."],
 ["Rot Lop Fan",100,"Rot Lop Fan is a Green Lantern who perceives the spectrum without sight."]
 ])
);
questionSets["dc-comics"].push(
 Q("dcc-08","dc-comics","Name a member of the Green Lantern Corps or another Lantern Corps.","Look beyond Hal Jordan: every colour of the emotional spectrum has its champions.","lanterns","The Lantern Corps",[
 ["Hal Jordan",10,"Hal Jordan is one of Earth's best-known Green Lanterns."],["John Stewart",10,"John Stewart is a former Marine and Green Lantern."],["Guy Gardner",10,"Guy Gardner is a brash Green Lantern."],["Kyle Rayner",10,"Kyle Rayner becomes a Green Lantern after the Corps is devastated."],["Jessica Cruz",10,"Jessica Cruz overcomes fear to become a Green Lantern."],["Simon Baz",30,"Simon Baz is a Green Lantern from Dearborn."],["Jo Mullein",30,"Jo Mullein is the Green Lantern of Far Sector."],["Kilowog",10,"Kilowog trains new Green Lantern recruits."],["Sinestro",10,"Sinestro founded the Sinestro Corps."],["Saint Walker",30,"Saint Walker is a Blue Lantern."],["Atrocitus",10,"Atrocitus leads the Red Lantern Corps."],["Larfleeze",30,"Larfleeze is the sole Orange Lantern."],["Carol Ferris",30,"Carol Ferris becomes a Star Sapphire."],["Munk",60,"Munk is an Indigo Tribe member."],["Indigo-1",30,"Indigo-1 leads the Indigo Tribe."],["Black Hand",30,"Black Hand is central to the Black Lantern Corps."],["Nekron",30,"Nekron commands the Black Lanterns."],["Krona",60,"Krona becomes a major figure in the emotional spectrum."],
 ["Cornelius Stirk",100,"Cornelius Stirk is a hallucination-inducing serial killer from Gotham."]
 ]),
 Q("dcc-09","dc-comics","Name a Batman villain or recurring criminal from Gotham City.","Gotham's rogues gallery is far bigger than the Joker.","batfamily","The rogues of Gotham",[
 ["Joker",10,"The Joker is Batman's most notorious enemy."],["Penguin",10,"Oswald Cobblepot is a crime lord."],["Riddler",10,"Edward Nygma leaves elaborate puzzles."],["Catwoman",10,"Selina Kyle is thief, rival and ally."],["Two-Face",10,"Harvey Dent becomes Two-Face."],["Scarecrow",10,"Jonathan Crane uses fear toxin."],["Poison Ivy",10,"Pamela Isley controls plant life."],["Bane",10,"Bane famously breaks Batman."],["Mr. Freeze",10,"Victor Fries seeks to save Nora."],["Mad Hatter",30,"Jervis Tetch uses mind-control technology."],["Calendar Man",30,"Julian Day commits themed crimes."],["Killer Moth",30,"Killer Moth is an insect-themed criminal."],["Firefly",30,"Garfield Lynns uses a flamethrower and flight suit."],["Black Mask",30,"Roman Sionis is a Gotham crime boss."],["Hush",30,"Thomas Elliot is a childhood friend turned enemy."],["Clayface",10,"Several characters have used the Clayface identity."],["Victor Zsasz",30,"Zsasz is a serial killer who marks his victims."],["Professor Pyg",60,"Lazlo Valentin is the grotesque Professor Pyg."],
 ["The Empty Hand",100,"The Empty Hand is a multiversal threat connected to the Gentry."]
 ]),
 Q("dcc-10","dc-comics","Name a major Justice League enemy or threat from DC Comics.","The League has defended Earth from threats beyond ordinary villains.","newgods","Threats to the Justice League",[
 ["Darkseid",10,"Darkseid seeks the Anti-Life Equation."],["Lex Luthor",10,"Lex Luthor has repeatedly opposed the League."],["Brainiac",10,"Brainiac threatens entire worlds."],["The Anti-Monitor",10,"The Anti-Monitor threatens the multiverse."],["Starro",10,"Starro is a conqueror with mind-controlling spores."],["Despero",30,"Despero is a powerful alien tyrant."],["Vandal Savage",30,"Vandal Savage is an immortal strategist."],["The Crime Syndicate",30,"The Crime Syndicate are evil counterparts of the League."],["Amazo",30,"Amazo can copy the powers of metahumans."],["Doctor Light",30,"Arthur Light has fought the Justice League."],["Felix Faust",30,"Felix Faust is a powerful sorcerer."],["Mongul",30,"Mongul rules Warworld."],["Grail",60,"Grail is the daughter of Darkseid."],["Perpetua",60,"Perpetua is a multiversal creator."],["The Legion of Doom",10,"The Legion of Doom is an alliance of supervillains."],
 ["Infinity Ultron",100,"Infinity Ultron is a multiversal threat in What If...?."]
 ])
);


questionSets.mcu.push(
 Q("mcu-11","mcu","Name a named character from the MCU's alternate timelines or animated multiverse.","What If...? introduced many alternate versions and unexpected allies.","multiverse","Alternate realities",[
 ["Captain Carter",30,"Peggy Carter becomes Captain Carter in an alternate timeline."],["T'Challa Star-Lord",60,"In one universe T'Challa becomes Star-Lord."],["Doctor Strange Supreme",30,"An alternate Stephen Strange becomes obsessed with saving Christine."],["Party Thor",60,"An alternate Thor lives a more carefree life."],["Zombie Captain America",60,"A zombie version of Steve Rogers appears in What If...?"],["Zombie Wanda",60,"Wanda becomes a powerful zombie in an alternate universe."],["Infinity Ultron",30,"Ultron obtains the Infinity Stones in an alternate timeline."],["Kahhori",30,"Kahhori is an original hero introduced in What If...?"],["The Watcher",10,"Uatu observes the multiverse."],["Evil Strange",60,"An alternate Strange destroys realities in pursuit of power."],["Supreme Strange",60,"Supreme Strange is another title for the powerful alternate Strange."],["Gamora the Destroyer",85,"An alternate Gamora is raised by Thanos."],["King Killmonger",85,"An alternate Killmonger takes control of Wakanda."],["Hydra Stomper Steve",60,"Steve Rogers pilots the Hydra Stomper in an alternate timeline."],["The Marvel Zombies",30,"The Marvel Zombies are undead heroes and villains."],
 ["The Other",100,"The Other is a mysterious alien emissary who serves Thanos."]
 ]),
 Q("mcu-12","mcu","Name a named character from the wider MCU television and streaming stories.","Look across the connected series, from S.H.I.E.L.D. to Daredevil and beyond.","script","The wider television universe",[
 ["Melinda May",30,"Melinda May is a senior S.H.I.E.L.D. agent."],["Daisy Johnson",10,"Daisy Johnson becomes the powered hero Quake."],["Leo Fitz",30,"Leo Fitz is a S.H.I.E.L.D. scientist."],["Jemma Simmons",30,"Jemma Simmons is a S.H.I.E.L.D. biochemist."],["Alphonso Mackenzie",30,"Mack becomes director of S.H.I.E.L.D."],["Grant Ward",30,"Grant Ward is a S.H.I.E.L.D. agent and HYDRA infiltrator."],["Bobbi Morse",30,"Bobbi Morse is Mockingbird."],["Lance Hunter",60,"Lance Hunter is a mercenary and S.H.I.E.L.D. ally."],["Deke Shaw",60,"Deke Shaw is a time-displaced ally."],["Peggy Carter",10,"Peggy Carter is a founding S.H.I.E.L.D. figure."],["Edwin Jarvis",30,"Edwin Jarvis is Howard Stark's butler."],["Karen Page",10,"Karen Page is a close ally of Matt Murdock."],["Foggy Nelson",10,"Foggy Nelson is Matt Murdock's friend and law partner."],["Elektra Natchios",30,"Elektra is an assassin and Matt Murdock's complicated ally."],["Bullseye",10,"Bullseye is a deadly adversary of Daredevil."],["Colleen Wing",30,"Colleen Wing is a martial artist and Iron Fist ally."],["Misty Knight",30,"Misty Knight is a detective in the New York series."],["Tandy Bowen",30,"Tandy Bowen is Dagger."],["Tyrone Johnson",30,"Tyrone Johnson is Cloak."],["The Hand",30,"The Hand is a secretive criminal and mystical organisation."],
 ["Nyssa al Ghul",100,"Nyssa al Ghul is a recurring character in the Arrowverse."]
 ])
);
questionSets["dc-movies"].push(
 Q("dcm-11","dc-movies","Name a character from a DC television or streaming story adapted for screen.","Think beyond the theatrical films: Gotham, Krypton, Titans and more.","script","DC on television",[
 ["John Diggle",30,"John Diggle is a close ally of Oliver Queen."],["Felicity Smoak",10,"Felicity Smoak is a technology expert and ally of Green Arrow."],["Laurel Lance",10,"Laurel Lance becomes the Black Canary."],["Thea Queen",30,"Thea Queen becomes Speedy."],["Roy Harper",10,"Roy Harper becomes Arsenal."],["Slade Wilson",10,"Slade Wilson is Deathstroke."],["Sara Lance",10,"Sara Lance becomes the White Canary."],["Ray Palmer",30,"Ray Palmer becomes the Atom."],["Nora Fries",60,"Nora Fries appears in Gotham."],["Jerome Valeska",30,"Jerome is one of Gotham's Joker-like villains."],["Oswald Cobblepot",10,"Oswald Cobblepot becomes the Penguin."],["Edward Nygma",10,"Edward Nygma becomes the Riddler."],["Barbara Kean",30,"Barbara Kean is a major Gotham character."],["Kara Danvers",10,"Kara Danvers is Supergirl."],["J'onn J'onzz",30,"J'onn J'onzz is the Martian Manhunter."],["Lena Luthor",30,"Lena Luthor is Lex Luthor's sister."],["Brainiac 5",30,"Brainiac 5 is a Legion of Super-Heroes member."],["Kory Anders",30,"Kory Anders is Starfire in Titans."],
 ["Vandal Savage",100,"Vandal Savage is an immortal villain featured in DC animated series."],
 ["The Unspoken",100,"The Unspoken is a former king of the Inhumans with powerful abilities."]
 ]),
 Q("dcm-12","dc-movies","Name a character from a DC animated series or animated universe.","The animated catalogue includes heroes, villains and alternate versions.","planet","DC animated worlds",[
 ["Static",10,"Virgil Hawkins becomes the electric hero Static."],["Gear",60,"Richie Foley becomes Gear."],["Talia al Ghul",10,"Talia is the daughter of Ra's al Ghul."],["Ra's al Ghul",10,"Ra's al Ghul leads the League of Assassins."],["Amanda Waller",10,"Amanda Waller directs Task Force X."],["Peacemaker",10,"Christopher Smith is the antihero Peacemaker."],["The Question",30,"Vic Sage is the faceless investigative hero."],["Huntress",30,"Helena Bertinelli is a Gotham vigilante."],["Black Lightning",10,"Jefferson Pierce is Black Lightning."],["Katana",30,"Tatsu Yamashiro wields the Soultaker sword."],["Sportsmaster",60,"Sportsmaster is a recurring adversary."],["Cheshire",30,"Jade Nguyen is the assassin Cheshire."],["Artemis Crock",30,"Artemis Crock becomes a Young Justice hero."],["Miss Martian",30,"M'gann M'orzz is the Martian heroine Miss Martian."],["Aqualad",10,"Kaldur'ahm is a leader of the Team."],["Blue Beetle",10,"Jaime Reyes is bonded to a Reach scarab."],["Impulse",10,"Bart Allen is the time-travelling speedster Impulse."],["Rocket",30,"Raquel Ervin is the hero Rocket."],
 ["Jack Flag",100,"Jack Flag is a superhero who has served with the Guardians of the Galaxy."]
 ]),
 Q("mar-11","marvel-comics","Name a member or ally of the Inhumans from Marvel Comics.","The Inhuman royal family has a large circle of allies and rivals.","city","Attilan and the Inhumans",[
 ["Black Bolt",10,"Blackagar Boltagon is the silent king."],["Medusa",10,"Medusa is queen of the Inhumans."],["Crystal",10,"Crystal commands the elements."],["Karnak",30,"Karnak can perceive the flaw in anything."],["Gorgon",30,"Gorgon is a powerful Inhuman warrior."],["Triton",30,"Triton is adapted to underwater life."],["Maximus",10,"Maximus is Black Bolt's ambitious brother."],["Lockjaw",10,"Lockjaw is the teleporting canine companion."],["Auran",60,"Auran is an Inhuman royal guard."],["Lash",30,"Lash is an Inhuman antagonist."],["Iso",60,"Iso is an Inhuman with density powers."],["Reader",60,"Reader is a powerful Inhuman whose book controls his abilities."],["Dante Pertuz",60,"Dante Pertuz becomes Inferno."],["Naja",85,"Naja is an Inhuman hero."],["The Unspoken",60,"The Unspoken is a former Inhuman king."],
 ["The Red Bee",100,"The Red Bee is a Golden Age hero associated with the Justice Society."]
 ]),
 Q("mar-12","marvel-comics","Name a member of the Guardians of the Galaxy from Marvel Comics.","The roster includes cosmic adventurers from many species and worlds.","guardians","Guardians of the Galaxy",[
 ["Star-Lord",10,"Peter Quill leads many Guardians teams."],["Gamora",10,"Gamora is known as the deadliest woman in the galaxy."],["Drax",10,"Drax seeks vengeance against Thanos."],["Rocket Raccoon",10,"Rocket is a brilliant engineer and marksman."],["Groot",10,"Groot is a Flora colossus."],["Mantis",30,"Mantis has empathic abilities."],["Phyla-Vell",30,"Phyla-Vell has served as Quasar and a Guardian."],["Moondragon",30,"Heather Douglas is a powerful telepath."],["Adam Warlock",10,"Adam Warlock is a genetically engineered cosmic hero."],["Cosmo",30,"Cosmo is a telepathic space dog."],["Bug",60,"Bug is an insectoid adventurer."],["Major Victory",60,"Vance Astro is also known as Major Victory."],["Charlie-27",60,"Charlie-27 is a member of the original Guardians."],["Martinex",60,"Martinex is a crystalline hero from the original team."],["Yondu",30,"Yondu Udonta leads a Ravager crew."]
 ]),
 Q("dcc-11","dc-comics","Name a member of the Justice Society of America.","The JSA helped define the Golden Age of superheroes.","justiceleague","The Justice Society",[
 ["Doctor Mid-Nite",30,"Several heroes have used the Doctor Mid-Nite identity."],["Starman",10,"Several heroes have carried the Starman legacy."],["Hourman",30,"Rex Tyler is the original Hourman."],["Sandman",10,"Wesley Dodds is the Golden Age Sandman."],["Wildcat",10,"Ted Grant is the original Wildcat."],["Hawkman",10,"Carter Hall is a longtime JSA member."],["Hawkgirl",30,"Shiera Hall is a classic JSA heroine."],["The Spectre",30,"Jim Corrigan becomes the Spectre."],["Johnny Thunder",30,"Johnny Thunder commands the Thunderbolt."],["Jakeem Thunder",60,"Jakeem Williams becomes the new Thunderbolt wielder."],["Cyclone",30,"Maxine Hunkel is Cyclone."],["Damage",30,"Grant Emerson is the hero Damage."],["Obsidian",30,"Todd Rice is the son of Alan Scott."],["Jade",30,"Jennifer-Lynn Hayden is the daughter of Alan Scott."],["Atom Smasher",10,"Al Rothstein is a powerful JSA member."]
 ]),
 Q("dcc-12","dc-comics","Name a member of the Legion of Super-Heroes.","The Legion protects the future across the 30th and 31st centuries.","space","The Legion of Super-Heroes",[
 ["Cosmic Boy",10,"Rokk Krinn is a founding Legion member."],["Saturn Girl",10,"Imra Ardeen is a founding Legion member."],["Lightning Lad",10,"Garth Ranzz is a founding Legion member."],["Brainiac 5",10,"Querl Dox is the Legion's scientific genius."],["Phantom Girl",30,"Tinya Wazzo can phase through matter."],["Chameleon Boy",30,"Reep Daggle can shapeshift."],["Colossal Boy",30,"Gim Allon can grow to enormous size."],["Invisible Kid",30,"Several Legionnaires have used the identity."],["Triplicate Girl",30,"Luornu Durgo can split into multiple bodies."],["Shrinking Violet",30,"Salu Digby can shrink."],["Dream Girl",30,"Nura Nal has prophetic dreams."],["Star Boy",30,"Thom Kallor manipulates mass."],["Wildfire",30,"Drake Burroughs is an energy being."],["Timber Wolf",30,"Brin Londo has enhanced strength and senses."],["Dawnstar",30,"Dawnstar is a tracker with wings."],["Mon-El",10,"Lar Gand is a powerful Daxamite hero."],["Ultra Boy",30,"Jo Nah can use one superpower at a time."],["Bouncing Boy",30,"Chuck Taine can inflate and bounce."],
 ["Dragonmage",100,"Dragonmage is a magical Legionnaire from the future."]
 ])
);

export const mixedQuestions:Question[]=[questionSets.mcu[0],questionSets["dc-movies"][1],questionSets["marvel-comics"][1],questionSets["dc-comics"][3],questionSets.mcu[5],questionSets["dc-movies"][4],questionSets["marvel-comics"][3]];
