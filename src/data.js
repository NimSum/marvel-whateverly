let marvelMovies = {
  civilWar: {
    title: 'Captain America: Civil War',
    releaseYear: 2016,
    directors: ['Joe Russo', 'Anthony Russo'],
    rating: 'PG13',
    stars: ['Chris Evans', 'Robert Downey Jr.', 'Sebtastian Stan', 'Paul Rudd', 'Elizabeth Olsen', 'Paul Bettany', 'Jeremy Renner', 'Scarlett Johansson', 'Anthony Mackie', 'Tom Holland'],
    imdbRating: 7.8,
    characters: ['Iron Man', 'Captain America', 'Bucky Barnes', 'Scarlet Witch', 'Spider-Man', 'Vision', 'Ant-Man', 'Hawkeye', 'Black Widow', 'Falcon'],
    basedOn: ['Civil War']
  },
  logan: {
    title: 'Logan',
    releaseYear: 2017,
    directors: ['James Mangold'],
    rating: 'R',
    stars: ['Hugh Jackman', 'Patrick Stewart'],
    imdbRating: 8.1,
    characters: ['Wolverine', 'X-23', 'Professor Xavier'],
    basedOn: ['Old Man Logan']
  },
  avengers: {
    title: 'The Avengers',
    releaseYear: 2012,
    directors: ['Joss Whedon'],
    rating: 'PG13',
    stars: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson', 'Chris Hemsworth', 'Samuel L. Jackson', 'Tom Hiddleston', 'Mark Ruffalo', 'Jeremy Renner'],
    imdbRating: 8.1,
    characters: ['Captain America', 'Iron Man', 'Black Widow', 'Thor', 'Nick Fury', 'Loki', 'Hulk', 'Hawkeye'],
    basedOn: ['The New Avengers']
  },
  ragnarok: {
    title: 'Thor Ragnarok',
    releaseYear: 2017,
    directors: ['Taika Waititi'],
    rating: 'PG13',
    stars: ['Chris Hemsworth', 'Tom Hiddleston', 'Mark Ruffalo', 'Cate Blanchett', 'Jeff Goldblum', 'Anthony Hopkins', 'Taika Waititi'],
    imdbRating: 7.9,
    characters: ['Thor', 'Loki', 'Hulk', 'Valkyrie', 'Hela', 'Surtur', 'Grandmaster', 'Odin', 'Korg', 'Miek'],
    basedOn: ['Ragnarok', 'Unworthy Thor', 'Planet Hulk']
  },
  blackPanther: {
    title: 'Black Panther',
    releaseYear: 2018,
    directors: ['Ryan Coogler'],
    rating: 'PG13',
    stars: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong\'o', 'Martin Freeman', 'Danai Gurira', 'Angela Bassett', 'Winston Duke', 'Leticia Wright', 'Daniel Kaluuya'],
    imdbRating: 7.3,
    characters: ['Black Panther', 'Shuri', 'M\'Baku', 'Okoye', 'Killmonger', 'Nakia'],
    basedOn: ['Jungle Action Vol. 2 #6']
  },
  doctorStrange: {
    title: 'Doctor Strange',
    releaseYear: 2016,
    directors: ['Scott Derrickson'],
    rating: 'PG13',
    stars: ['Benedict Cumberbatch', 'Chiwetel Ejiofor', 'Rachel McAdams', 'Benedict Wong', 'Mads Mikkelsen', 'Tilda Swinton'],
    imdbRating: 7.5,
    characters: ['Doctor Stephen Strange', 'Ancient One', 'Karl Mordo', 'Wong'],
    basedOn: ['Strange Tales #115']
  },
  antman: {
    title: 'Ant-Man',
    releaseYear: 2015,
    directors: ['Peyton Reed'],
    rating: 'PG13',
    stars: ['Paul Rudd', 'Evageline Lilly', 'Michael Peña', 'Tip \'T.I.\' Harris', 'Anthony Mackie'],
    imdbRating: 7.3,
    characters: ['Ant-Man', 'Wasp', 'Hank Pym', 'Yellow Jacket', 'Falcon'],
    basedOn: ['Marvel Premiere Vol 1 #47']
  },
  captainMarvel: {
    title: 'Captain Marvel',
    releaseYear: 2019,
    directors: ['Anna Boden', 'Ryan Fleck'],
    rating: 'PG13',
    stars: ['Brie Larson', 'Samuel L. Jackson','Ben Mendelsohn', 'Lee Pace', 'Clark Gregg'],
    imdbRating: 7.2,
    characters: ['Captain Marvel', 'Nick Fury', 'Talos', 'Korath', 'Phil Coulson', 'Ronan'],
    basedOn: ['Captain Marvel Vol. 7 #1']
  },
  spiderman: {
    title: 'Spider-Man: Homecoming',
    releaseYear: 2017,
    directors: ['Jon Watts'],
    rating: 'PG13',
    stars: ['Tom Holland', 'Michael Keaton', 'Jon Favreau', 'Donald Glover', 'Robert Downey Jr.'],
    imdbRating: 7.5,
    characters: ['Spider-Man', 'Iron Man', 'Vulture'],
    basedOn: ['Ultimate Spider-Man']
  },
  xmen: {
    title: 'X2',
    releaseYear: 2003,
    directors: ['Brian Singer'],
    rating: 'PG13',
    stars: ['Hugh Jackman', 'Patrick Stewart', 'Ian McKellen', 'Halle Berry', 'James Marsden', 'Anna Paquin', 'Alan Cumming', 'Famke Janssen'],
    imdbRating: 7.5,
    characters: ['Wolverine', 'Professor Xavier', 'Magneto', 'Storm', 'Jean Grey', 'Cyclops', 'Rogue', 'Mystique', 'Nightcrawler'],
    basedOn: ['Marvel Graphic Novel Vol 1 #5', 'Ultimate X-Men Vol 1 #7']
  },
  deadpool: {
    title: 'Deadpool',
    releaseYear: 2016,
    directors: ['Tim Miller'],
    rating: 'R',
    stars: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller', 'Ed Skrein', 'Brianna Hildebrand'],
    imdbRating: 8,
    characters: ['Deadpool', 'Negasonic Teenage Warhead', 'Ajax', 'Colossus'],
    basedOn: ['Deadpool Vol. 1 #1']
  },
  guardians: {
    title: 'Guardians of the Galaxy',
    releaseYear: 2014,
    directors: ['James Gunn'],
    rating: 'PG13',
    stars: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper', 'Lee Pace', 'Michael Rooker', 'Karen Gillian'],
    imdbRating: 8.1,
    characters: ['Star-Lord', 'Gamora', 'Groot', 'Rocket Raccoon', 'Drax', 'Nebula', 'Ronan', 'Yondu'],
    basedOn: ['Annihilation: Conquest']
  },
  infinityWar: {
  title: 'Avengers: Infinty War',
  releaseYear: 2018,
  directors: ['Anthony Russo', 'Joe Russo'],
  rating: 'PG13',
  stars: ['Robert Downey Jr.', 'Chris Hemsworth', 'Chris Evans', 'Josh Brolin', 'Mark Ruffalo', 'Scarlett Johansson', 'Don Cheadle', 'Benedict Cumberbatch', 'Tom Holland', 'Chadwick Boseman', 'Zoe Saldana', 'Tom Hiddleston', 'Anthony Mackie', 'Karen Gillian', 'Chris Pratt', 'Dave Bautista', 'Sebastian Stan', 'Elizabeth Olsen', 'Bradley Cooper', 'Samuel L. Jackson', 'Jeremy Renner'],
  imdbRating: 8.5,
  characters: ['Iron Man', 'Captain America', 'Thor', 'Thanos', 'Hulk', 'Black Widow', 'War Machine', 'Doctor Strange', 'Spider-Man', 'Black Panther', 'Gamora', 'Loki', 'Falcon', 'Gamora', 'Star-Lord', 'Drax', 'Bucky Barnes', 'Scarlet Witch', 'Rocket Raccoon', 'Nick Fury', 'Hawkeye'],
  basedOn: ['The Infinity Gauntlet']
  },
}

const marvelComics = {
  infinityWar: {
    title: 'The Infinity Gauntlet',
    publishDate: 1991,
    writers: ['Jim Starlin'],
    pencillers: ['George Pérez', 'Ron Lim'],
    inkers: ['Josef Rubinstein', 'Rom Christopher', 'Bruce N Solotoff'],
    letterers: ['Jack Morelli'],
    colorists: ['Max Scheele', 'Ian Laughlin'],
    editors: ['Craig Anderson'],
    mainCharacters: ['Thanos', 'Mistress Death', 'Adam Warlock', 'Silver Surfer', 'Doctor Strange', 'Nebula', 'Mephisto'],
    adapted: true,
    summary: 'Thanos, a powerful being, takes the task of correcting the imbalance of living beings and intends to kill half the universe. The Silver Surfer, learning of these plans, notifies the Avengers in attempt to stop him.'
  },
  civilWar: {
    title: 'Civil War',
    publishDate: 2006,
    writers: ['Mark Millar'],
    pencillers: ['Steve McNiven'],
    inkers: ['Dexter Vines'],
    letterers: ['Chris Eliopoulos'],
    colorists: ['Morry Hollowell'],
    editors: ['Molly Lazer', 'Aubrey Sitterson', 'Andy Schmidt', 'Tom Brevoort'],
    mainCharacters: ['Iron Man', 'Spider-Man', 'Doctor Strange', 'Luke Cage', 'Mister Fantastic', 'Henry Pym', 'Captain America', 'Black Panther'],
    adapted: true,
    summary: 'After a huge number of civilian lives lost, the government tries to enact The Superhero Registration Act, an authoritarian law where all heroes will have to register with the government. Some heroes, like Iron Man, are in favor of the law while others, like Captain America, are not.'
  },
  houseOfM: {
    title: 'House of M',
    publishDate: 2005,
    writers: ['Brian Michael Bendis'],
    pencillers: ['Oliver Coipel'],
    inkers: ['Tim Townsend'],
    letterers: undefined,
    colorists: ['Frank D\'Armata'],
    editors: [undefined],
    mainCharacters: ['Scarlet Witch', 'Quicksilver', 'Magneto', 'Professor Xavier', 'Captain America', 'Emma Frost', 'Doctor Strange'],
    adapted: false,
    summary: 'Mutant Scarlet Witch suffers a breakdown and cannot control her powers. The Avengers quarrel on how to help her, some of them think there is no other way than to kill her, while others think they could control her magic. When they try to talk to her, she alters the reality of Earth and the lives of the heroes in it.'
  },
  ragnarok: {
    title: 'Ragnarök: Part the First',
    publishDate: 2006,
    writers: ['Michael Avon Oeming', 'Daniel Berman'],
    pencillers: ['Andrea Divito'],
    inkers: ['Andrea Divito'],
    letterers: ['Randy Gentile'],
    colorists: ['Laura Villari'],
    editors: ['Tom Brevoot'],
    mainCharacters: ['Thor', 'Odin', 'Loki', 'Surtur', 'Fenris'],
    adapted: true,
    summary: 'The fall of Asgard has come and Thor must defend his home against those who would see it crumble.'
  },
  unworthyThor: {
    title: 'Unworthy Thor Vol. 1 "The Hammer from Heaven"',
    publishDate: 2017,
    writers: ['Jason Aaron'],
    pencillers: ['Olivier Coipel'],
    inkers: ['Olivier Coipel'],
    letterers: ['Joe Sabino'],
    colorists: ['Matthew Wilson'],
    editors: ['Wil Moss', 'Charles Beacham', 'Tom Brevoort'],
    mainCharacters: ['Thor', 'Odin'],
    adapted: true,
    summary: 'Thor loses Mjolnir, the most powerful weapon and is desperate to regain his purpose in the cosmos.'
  },
  professorHulk: {
    title: 'Incredible Hulk Vol. 1 #377 "Honey, I Shrunk the Hulk"',
    publishDate: 1991,
    writers: ['Peter David'],
    pencillers: ['Dale Keown'],
    inkers: ['Bob McLeod'],
    letterers: ['Joe Rosen'],
    colorists: ['Glynis Oliver'],
    editors: ['Bobbie Chase'],
    mainCharacters: ['Hulk'],
    adapted: false,
    summary: 'Bruce Banner\'s multiple personalities have begun to merge into a separate personality, eventually known as Professor Hulk.'
  },
  planetHulk: {
    title: 'Incredible Hulk Vol. 2 #92 "Exile, Part 1"',
    publishDate: 2006,
    writers: ['Greg Pak'],
    pencillers: ['Carlo Pagualayan'],
    inkers: ['Jeffrey Huet'],
    letterers: ['Randy Gentile'],
    colorists: ['Chris Sotomayor'],
    editors: ['Mark Paniccia', 'Nathan Cosby'],
    mainCharacters: ['Hulk', 'Mister Fantastic', 'Doctor Strange', 'Iron Man', 'Black Bolt'],
    adapted: true,
    summary: 'The Hulk lands on an alien planet known as Sakaar and winds up a gladiator alongside other creatures, such as Miek and Korg, fighting under the Red King.'
  },
  newAgeOfApocalypse: {
    title: 'X-Men: Age of Apocalypse Vol. 1 #1 "Like Father Like Daughter"',
    publishDate: 2005,
    writers: ['Akira Yoshida'],
    pencillers: ['Chris Bachalo'],
    inkers: ['Tim Townsend'],
    letterers: ['Chris Eliopoulos', 'Mike Marts'],
    colorists: ['Studio F', 'Edgar Delgado'],
    editors: ['Mike Marts'],
    mainCharacters: ['Quicksilver', 'Rogue', 'Magneto', 'Storm', 'Gambit', 'Sunfire', 'Nightcrawler', 'Wolfsbane', 'X-23', 'Wolverine'],
    adapted: false,
    summary: 'Apocalypse has been defeated but now the Mr. Sinister and the Sinister Six have appeared and sought out Weapon-X, better known as Wolverine.'
  },
  ageOfApocalypse: {
    title: 'X-Men: Alpha Vol. 1 #1 "Beginnings..."',
    publishDate: 1995,
    writers: ['Scott Lobdell', 'Mark Waid'],
    pencillers: ['Roger Cruz', 'Steve Epting'],
    inkers: ['Tim Townsend', 'Dan Panosian'],
    letterers: ['Richard Starkings', 'Comicraft'],
    colorists: ['Steve Buccallato', 'Electric Crayon'],
    editors: ['Bob Harras'],
    mainCharacters: ['Magneto', 'Rogue', 'Iceman', 'Quicksilver', 'Sabretooth', 'Wild Child', 'Morph', 'Bishop', 'Storm', 'Nightcrawler'],
    adapted: true,
    summary: 'Charles Xavier\'s son goes back in time and attempts to kill Magneto, but Charles gives his life instead causing an alternate reality where the X-Men now need to fight an eternal mutant, Apocalypse.'
  },
  oldManLogan: {
    title: 'Old Man Logan Vol. 1 #1',
    publishDate: 2015,
    writers: ['Brian Michael Bendis'],
    pencillers: ['Andrea Sorrentino'],
    inkers: ['Andrea Sorrentino'],
    letterers: ['Cory Petit'],
    colorists: ['Marcelo Maiolo'],
    editors: ['Mike Marts', 'Mark Paniccia', 'Xander Jarowey'],
    mainCharacters: ['Wolverine'],
    adapted: true,
    summary: 'Logan begins a journey across a wasteland America where villains are ruling and heroes are murdered.'
  },
  newMutants: {
    title: 'New Mutants Vol. 1 #98 "The Beginning of the End, Pt. 1"',
    publishDate: 1991,
    writers: ['Rob Liefeld', 'Fabian Nicieza'],
    pencillers: ['Rob Liefeld'],
    inkers: ['Rob Liefeld'],
    letterers: ['Joe Rosen'],
    colorists: ['Steve Buccallato'],
    editors: ['Bob Harras'],
    mainCharacters: ['Cable', 'Cannonball', 'Domino', 'Deadpool'],
    adapted: false,
    summary: 'The first appearance of Deadpool, where he arrives to take a bounty out on Cable but Domino takes him down first.'
  },
  captainMarvel: {
    title: 'Captain Marvel Vol. 7 #1',
    publishDate: 2012,
    writers: ['Kelly Sue DeConnick'],
    pencillers: ['Dexter Soy'],
    inkers: ['Dexter Soy'],
    letterers: ['Joe Caramagna'],
    colorists: ['Dexter Soy'],
    editors: ['Stephen Wacker'],
    mainCharacters: ['Captain Marvel', 'Captain America'],
    adapted: true,
    summary: 'The first appearance of Carol Danvers as Captain Marvel, ace pilot and legendary avenger.'
  },
  captainAmerica: {
    title: 'Captain America Comics Vol. 1 #1 "Meet Captain America"',
    publishDate: 1941,
    writers: ['Joe Simon', 'Jack Kirby'],
    pencillers: ['Joe Simon', 'Jack Kirby'],
    inkers: ['Al Liederman'],
    letterers: undefined,
    colorists: undefined,
    editors: ['Joe Simon'],
    mainCharacters: ['Captain America'],
    adapted: true,
    summary: 'A young soldier is given serum to become bigger, faster, and stronger than a normal human. The doctor who gave it to him calls him Captain America and tells him his duty is to protect America from nazi forces.'
  },
  infinityWar: {
    title: 'Captain America Vol. 5 #1 "Out of Time: Part 1"',
    publishDate: 2005,
    writers: ['Ed Brubaker'],
    pencillers: ['Steve Epting'],
    inkers: ['Steve Epting'],
    letterers: ['Randy Gentile'],
    colorists: ['Frank D\'Armata'],
    editors: ['Tom Brevoort', 'Andy Schmidt', 'Nicole Wiley', 'Molly Lazer'],
    mainCharacters: ['Captain America', 'Bucky Barnes'],
    adapted: false,
    summary: 'Steve deals with the repurcussions of the Avengers disbanding and a cybernetic assassin breaks into Red Skull\'s apartment to kill him and steal his Cosmic Cube.'
  },
  amazingFantasy: {
    title: 'Amazing Fantasy Vol. 1 #15 "Spider-Man!"',
    publishDate: 1962,
    writers: ['Stan Lee', 'Steve Ditko'],
    pencillers: ['Steve Ditko'],
    inkers: ['Steve Ditko'],
    letterers: ['Artie Simek'],
    colorists: undefined,
    editors: ['Stan Lee'],
    mainCharacters: ['Spider-Man', 'Uncle Ben', 'Aunt May', 'J. Jonah Jameson'],
    adapted: true,
    summary: 'A young boy finds out he has new abilities after being bitten by a radioactive spider. After taking on becoming a local celebrity, he neglects to stop a theif who then kills the boy\'s uncle, changing the boy\'s views on crime-fighting forever.'
  },
  avengers: {
    title: 'The Avengers Vol. 1 #1 "The Coming of the Avengers!"',
    publishDate: 1963,
    writers: ['Stan Lee'],
    pencillers: ['Jack Kirby'],
    inkers: ['Dick Ayers'],
    letterers: ['Sam Rosen'],
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Ant-Man', 'Wasp', 'Hulk', 'Iron Man', 'Thor', 'Loki', 'Mister Fantastic', 'Invisible Girl', 'Human Torch', 'Thing'],
    adapted: true,
    summary: 'Loki tries to pull cause havoc while his physical form is imprisoned and the gang must join together to stop him. Wasp coins the term "Avengers" and the group agrees to take it on.'
  },
  fantasticFour: {
    title: 'Fantastic Four Vol. 1 #1 "The Fantastic Four"',
    publishDate: 1961,
    writers: ['Stan Lee'],
    pencillers: ['Jack Kirby'],
    inkers: ['George Klein', 'Christopher Rule'],
    letterers: ['Artie Simek'],
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Mister Fantastic', 'Invisible Girl', 'Human Torch', 'Thing'],
    adapted: true,
    summary: 'The four get in a rocket and head to space but are hit with cosmic rays. When they land back on Earth, they find they now have special abilities.'
  },
  ironMan: {
    title: 'Tales of Suspense Vol. 1 #39 "Iron Man Is Born!"',
    publishDate: 1963,
    writers: ['Stan Lee', 'Larry Lieber'],
    pencillers: ['Don Heck'],
    inkers: ['Don Heck'],
    letterers: ['Artie Simek'],
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Iron Man'],
    adapted: true,
    summary: 'Tony Stark is captured after getting injured and his captors attempt to force him to develop tech for them. He resists and creates a metal suit for himself to keep the shrapnel in his chest from puncturing his heart and escapes into the jungle.'
  },
  strangeTales: {
    title: 'Strange Tales Vol. 1 #110 "Doctor Strange Master of Black Magic"',
    publishDate: 1963,
    writers: ['Stan Lee', 'Ernie Hart'],
    pencillers: ['Steve Ditko'],
    inkers: ['Steve Ditko'],
    letterers: ['Terry Szenics'],
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Doctor Strange', 'Ancient One'],
    adapted: false,
    summary: 'The first appearance of Doctor Strange, a wizard who can travel through dreams, and does so to get a man to confess his crimes.'
  },
  incredibleHulk: {
    title: 'Incredible Hulk Vol. 1 #181 "And Now..the Wolverine!"',
    publishDate: 1974,
    writers: ['Len Wein'],
    pencillers: ['Herb Trimpe'],
    inkers: ['Jack Abel'],
    letterers: ['Artie Simek'],
    colorists: ['Glynis Wein'],
    editors: ['Roy Thomas'],
    mainCharacters: ['Hulk', 'Wolverine'],
    adapted: false,
    summary: 'The first appearance of Wolverine, as he and Hulk fight in what will become an infamous showdown between the two.'
  },
  blackWidow: {
    title: 'Tales of Suspense Vol. 1 #52 "The Crimson Dynamo Strikes Again!"',
    publishDate: 1964,
    writers: ['Stan Lee', 'N. Korok'],
    pencillers: ['Don Heck'],
    inkers: ['Don Heck'],
    letterers: ['Sam Rosen'],
    colorists: undefined,
    editors: ['Stan Lee'],
    mainCharacters: ['Black Widow', 'Iron Man', 'Crimson Dynamo'],
    adapted: false,
    summary: 'In the first appearance of secret agent Black Widow, Tony Stark, or Iron Man, is her target, but after a fight in his factory, she escapes and is on the run.'
  },
  blackPanther: {
    title: 'Fantastic Four Vol. 1 #52 "The Black Panther!"',
    publishDate: 1966,
    writers: ['Stan Lee'],
    pencillers: ['Jack Kirby'],
    inkers: ['Joe Sinnott'],
    letterers: ['Sam Rosen'],
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Black Panther', 'Mister Fantastic', 'Invisible Girl', 'Human Torch', 'Thing'],
    adapted: false,
    summary: 'The Fanstastic Four are given a spacecraft by Wakanda and visit the mysterious country, then meet their leader, T\'Challla.'
  },
  talesToAstonish: {
    title: 'Tales to Astonish Vol. 1 #35 "Return of the Ant-Man"',
    publishDate: 1962,
    writers: ['Stan Lee', 'Larry Lieber'],
    pencillers: ['Jack Kirby'],
    inkers: ['Dick Ayers'],
    letterers: undefined,
    colorists: ['Stan Goldberg'],
    editors: ['Stan Lee'],
    mainCharacters: ['Ant-Man'],
    adapted: false,
    summary: 'Doctor Hank Pym has created a serum that allows him to become the size of ants and a second serum that allows him to regain his original size. Secret agents attempt to steal the serum from him but he refuses and decides the only way to keep people from stealing it is to use it.'
  },
  invincibleIronMan: {
    title: 'Iron Man Vol. 1 #55 "Beware the ... Blood Brothers!"',
    publishDate: 1973,
    writers: ['Jim Starlin', 'Mike Friedrich'],
    pencillers: ['Jim Starlin'],
    inkers: ['Mike Esposito'],
    letterers: ['John Costanza'],
    colorists: undefined,
    editors: ['Roy Thomas'],
    mainCharacters: ['Iron Man', 'Drax the Destroyer', 'Thanos'],
    adapted: false,
    summary: 'In the first appearance of Thanos and Drax, Iron Man and Drax team up to fight Thanos and the Blood Brothers but Thanos escapes leaving a robot in his place.'
  },
  guardians: {
    title: 'Annihilation: Conquest - Starlord Vol. 1 #6 "Last Stand"',
    publishDate: 2008,
    writers: ['Dan Abnett', 'Andy Lanning'],
    pencillers: ['Tom Raney', 'Wellinton Alves'],
    inkers: ['Scot Hanna'],
    letterers: ['Joe Caramagnan'],
    colorists: ['Frank D\'Amata'],
    editors: ['Bill Rosenann'],
    mainCharacters: ['Nova', 'Star-Lord', 'Adam Warlock', 'Ronan', 'Gamora', 'Drax', 'Warlock', 'Mantis', 'Rocket Raccoon', 'Groot'],
    adapted: true,
    summary: 'The rag-tag group of heroes bands together to fight Ultron with the fate of Earth and the Kree empire on the line.'
  },
  funeralForAFreak: {
    title: 'Deadpool Vol. 1 #61 "Funeral for a Freak, Part 1: \'Nuff Said!"',
    publishDate: 2002,
    writers: ['Frank Tieri'],
    pencillers: ['Jim Calafiore'],
    inkers: ['Jon Holdredge'],
    letterers: ['Dave Sharpe'],
    colorists: ['Color Dojo'],
    editors: ['Mike Marts', 'Mike Raicht'],
    mainCharacters: ['Deadpool', 'Death', 'Wolverine', 'Cable', 'Black Panther'],
    adapted: false,
    summary: 'Wolverine must organize Deadpool a funeral.'
  },
  amazingSpiderman: {
    title: 'Amazing Spider-Man Vol. 1 #2 "Duel to the Death with the Vulture!"',
    publishDate: 1963,
    writers: ['Stan Lee', 'Steve Ditko'],
    pencillers: ['Steve Ditko'],
    inkers: ['Steve Ditko'],
    letterers: ['John Duffy'],
    colorists: undefined,
    editors: ['Stan Lee'],
    mainCharacters: ['Spider-Man', 'Vulture', 'Aunt May'],
    adapted: true,
    summary: 'There\'s a new criminal in town and his name is Vulture. No one can catch this guy, but Peter Parker decides to try it and gets caught.'
  },
  defenders: {
    title: 'Marvel Feature Vol. 1 #1 "The Day of the Defenders!"',
    publishDate: 1971,
    writers: ['Roy Thomas'],
    pencillers: ['Ross Andru'],
    inkers: ['Bill Everett'],
    letterers: ['Sam Rosen'],
    colorists: undefined,
    editors: ['Stan Lee'],
    mainCharacters: ['Doctor Strange', 'Hulk', 'Wong', 'Silver Surfer'],
    adapted: false,
    summary: 'In the first appearance of the Defenders, Doctor Strange and Hulk attempt to destory the Omegatron before it destroys the planet. When the threat is postponed, Doctor Strange suggests they stay united as a team and called themselved the Defenders.'
  },
  uncannyXmen: {
    title: 'Uncanny X-Men Vol. 1 #266 "Gambit: Out of the Frying Pan"',
    publishDate: 1990,
    writers: ['Chris Claremont'],
    pencillers: ['Mike Collins'],
    inkers: ['Josef Rubinstein'],
    letterers: ['Pat Brosseau'],
    colorists: ['Brad Vancata'],
    editors: ['Bob Harras'],
    mainCharacters: ['Gambit', 'Mystique', 'Storm'],
    adapted: false,
    summary: 'Storm runs into a new mutant with cosmic card throwing powers who calls himself Gambit while she\'s on the run during an attempt to steal back already stolen paintings.'
  },
  xFactor: {
    title: 'X-Factor Vol. 1 #15 "Whose Death is it, Anyway?"',
    publishDate: 1987,
    writers: ['Louise Simonson'],
    pencillers: ['Walter Simonson'],
    inkers: ['Bob Wiacek'],
    letterers: ['Joe Rosen'],
    colorists: ['Petra Scotese'],
    editors: ['Robert Harras'],
    mainCharacters: ['Cyclops', 'Jean Grey', 'Beast', 'Angel', 'Iceman', 'Apocalypse', 'War', 'Pestilence', 'Famine'],
    adapted: false,
    summary: 'Cyclops deals with the aftermath of the death of his family meanwhile Apocalypse has gotten his Horsemen ready to destroy New York City.'
  }
} 

module.exports = {marvelComics,
marvelMovies}