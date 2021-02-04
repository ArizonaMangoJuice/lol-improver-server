const fs = require('fs');

let result = [
{
    "title": "the Monkey King",
    "id": 62,
    "key": "MonkeyKing",
    "name": "Wukong"
},
{
    "title": "Grandmaster at Arms",
    "id": 24,
    "key": "Jax",
    "name": "Jax"
},
{
    "title": "the Harbinger of Doom",
    "id": 9,
    "key": "Fiddlesticks",
    "name": "Fiddlesticks"
},
{
    "title": "the Demon Jester",
    "id": 35,
    "key": "Shaco",
    "name": "Shaco"
},
{
    "title": "the Uncaged Wrath of Zaun",
    "id": 19,
    "key": "Warwick",
    "name": "Warwick"
},
{
    "title": "the Rebel",
    "id": 498,
    "key": "Xayah",
    "name": "Xayah"
},
{
    "title": "the Bestial Huntress",
    "id": 76,
    "key": "Nidalee",
    "name": "Nidalee"
},
{
    "title": "Rise of the Thorns",
    "id": 143,
    "key": "Zyra",
    "name": "Zyra"
},
{
    "title": "the Cantankerous Cavalier",
    "id": 240,
    "key": "Kled",
    "name": "Kled"
},
{
    "title": "the Burning Vengeance",
    "id": 63,
    "key": "Brand",
    "name": "Brand"
},
{
    "title": "the Armordillo",
    "id": 33,
    "key": "Rammus",
    "name": "Rammus"
},
{
    "title": "the Kraken Priestess",
    "id": 420,
    "key": "Illaoi",
    "name": "Illaoi"
},
{
    "title": "the Daring Bombardier",
    "id": 42,
    "key": "Corki",
    "name": "Corki"
},
{
    "title": "the Heart of the Freljord",
    "id": 201,
    "key": "Braum",
    "name": "Braum"
},
{
    "title": "the Hand of Noxus",
    "id": 122,
    "key": "Darius",
    "name": "Darius"
},
{
    "title": "the Barbarian King",
    "id": 23,
    "key": "Tryndamere",
    "name": "Tryndamere"
},
{
    "title": "the Bounty Hunter",
    "id": 21,
    "key": "MissFortune",
    "name": "Miss Fortune"
},
{
    "title": "Shepherd of Souls",
    "id": 83,
    "key": "Yorick",
    "name": "Yorick"
},
{
    "title": "the Magus Ascendant",
    "id": 101,
    "key": "Xerath",
    "name": "Xerath"
},
{
    "title": "the Battle Mistress",
    "id": 15,
    "key": "Sivir",
    "name": "Sivir"
},
{
    "title": "the Exile",
    "id": 92,
    "key": "Riven",
    "name": "Riven"
},
{
    "title": "the Lady of Clockwork",
    "id": 61,
    "key": "Orianna",
    "name": "Orianna"
},
{
    "title": "the Saltwater Scourge",
    "id": 41,
    "key": "Gangplank",
    "name": "Gangplank"
},
{
    "title": "Shard of the Monolith",
    "id": 54,
    "key": "Malphite",
    "name": "Malphite"
},
{
    "title": "Keeper of the Hammer",
    "id": 78,
    "key": "Poppy",
    "name": "Poppy"
},
{
    "title": "the Ice Witch",
    "id": 127,
    "key": "Lissandra",
    "name": "Lissandra"
},
{
    "title": "the Defender of Tomorrow",
    "id": 126,
    "key": "Jayce",
    "name": "Jayce"
},
{
    "title": "the Yeti Rider",
    "id": 20,
    "key": "Nunu",
    "name": "Nunu"
},
{
    "title": "the Troll King",
    "id": 48,
    "key": "Trundle",
    "name": "Trundle"
},
{
    "title": "the Deathsinger",
    "id": 30,
    "key": "Karthus",
    "name": "Karthus"
},
{
    "title": "the Outlaw",
    "id": 104,
    "key": "Graves",
    "name": "Graves"
},
{
    "title": "the Aspect of Twilight",
    "id": 142,
    "key": "Zoe",
    "name": "Zoe"
},
{
    "title": "the Missing Link",
    "id": 150,
    "key": "Gnar",
    "name": "Gnar"
},
{
    "title": "the Lady of Luminosity",
    "id": 99,
    "key": "Lux",
    "name": "Lux"
},
{
    "title": "the Half-Dragon",
    "id": 102,
    "key": "Shyvana",
    "name": "Shyvana"
},
{
    "title": "the Butcher of the Sands",
    "id": 58,
    "key": "Renekton",
    "name": "Renekton"
},
{
    "title": "the Grand Duelist",
    "id": 114,
    "key": "Fiora",
    "name": "Fiora"
},
{
    "title": "the Loose Cannon",
    "id": 222,
    "key": "Jinx",
    "name": "Jinx"
},
{
    "title": "the Spear of Vengeance",
    "id": 429,
    "key": "Kalista",
    "name": "Kalista"
},
{
    "title": "the Tidal Trickster",
    "id": 105,
    "key": "Fizz",
    "name": "Fizz"
},
{
    "title": "the Void Walker",
    "id": 38,
    "key": "Kassadin",
    "name": "Kassadin"
},
{
    "title": "Maven of the Strings",
    "id": 37,
    "key": "Sona",
    "name": "Sona"
},
{
    "title": "the Blade Dancer",
    "id": 39,
    "key": "Irelia",
    "name": "Irelia"
},
{
    "title": "the Machine Herald",
    "id": 112,
    "key": "Viktor",
    "name": "Viktor"
},
{
    "title": "The Charmer",
    "id": 497,
    "key": "Rakan",
    "name": "Rakan"
},
{
    "title": "The Eternal Hunters",
    "id": 203,
    "key": "Kindred",
    "name": "Kindred"
},
{
    "title": "the Serpent's Embrace",
    "id": 69,
    "key": "Cassiopeia",
    "name": "Cassiopeia"
},
{
    "title": "the Twisted Treant",
    "id": 57,
    "key": "Maokai",
    "name": "Maokai"
},
{
    "title": "The Fire below the Mountain",
    "id": 516,
    "key": "Ornn",
    "name": "Ornn"
},
{
    "title": "the Chain Warden",
    "id": 412,
    "key": "Thresh",
    "name": "Thresh"
},
{
    "title": "The Judicator",
    "id": 10,
    "key": "Kayle",
    "name": "Kayle"
},
{
    "title": "the Shadow of War",
    "id": 120,
    "key": "Hecarim",
    "name": "Hecarim"
},
{
    "title": "the Voidreaver",
    "id": 121,
    "key": "Khazix",
    "name": "Kha'Zix"
},
{
    "title": "the Berserker",
    "id": 2,
    "key": "Olaf",
    "name": "Olaf"
},
{
    "title": "the Hexplosives Expert",
    "id": 115,
    "key": "Ziggs",
    "name": "Ziggs"
},
{
    "title": "the Dark Sovereign",
    "id": 134,
    "key": "Syndra",
    "name": "Syndra"
},
{
    "title": "the Madman of Zaun",
    "id": 36,
    "key": "DrMundo",
    "name": "Dr. Mundo"
},
{
    "title": "the Enlightened One",
    "id": 43,
    "key": "Karma",
    "name": "Karma"
},
{
    "title": "the Dark Child",
    "id": 1,
    "key": "Annie",
    "name": "Annie"
},
{
    "title": "the Fist of Shadow",
    "id": 84,
    "key": "Akali",
    "name": "Akali"
},
{
    "title": "the Thunder's Roar",
    "id": 106,
    "key": "Volibear",
    "name": "Volibear"
},
{
    "title": "the Unforgiven",
    "id": 157,
    "key": "Yasuo",
    "name": "Yasuo"
},
{
    "title": "the Heart of the Tempest",
    "id": 85,
    "key": "Kennen",
    "name": "Kennen"
},
{
    "title": "the Pridestalker",
    "id": 107,
    "key": "Rengar",
    "name": "Rengar"
},
{
    "title": "the Rune Mage",
    "id": 13,
    "key": "Ryze",
    "name": "Ryze"
},
{
    "title": "the Eye of Twilight",
    "id": 98,
    "key": "Shen",
    "name": "Shen"
},
{
    "title": "the Secret Weapon",
    "id": 154,
    "key": "Zac",
    "name": "Zac"
},
{
    "title": "the Blade's Shadow",
    "id": 91,
    "key": "Talon",
    "name": "Talon"
},
{
    "title": "the Noxian Grand General",
    "id": 50,
    "key": "Swain",
    "name": "Swain"
},
{
    "title": "the Wandering Caretaker",
    "id": 432,
    "key": "Bard",
    "name": "Bard"
},
{
    "title": "The Undead Juggernaut",
    "id": 14,
    "key": "Sion",
    "name": "Sion"
},
{
    "title": "the Night Hunter",
    "id": 67,
    "key": "Vayne",
    "name": "Vayne"
},
{
    "title": "the Curator of the Sands",
    "id": 75,
    "key": "Nasus",
    "name": "Nasus"
},
{
    "title": "the Shadow Reaper",
    "id": 141,
    "key": "Kayn",
    "name": "Kayn"
},
{
    "title": "the Card Master",
    "id": 4,
    "key": "TwistedFate",
    "name": "Twisted Fate"
},
{
    "title": "the Terror of the Void",
    "id": 31,
    "key": "Chogath",
    "name": "Cho'Gath"
},
{
    "title": "the Spirit Walker",
    "id": 77,
    "key": "Udyr",
    "name": "Udyr"
},
{
    "title": "the Purifier",
    "id": 236,
    "key": "Lucian",
    "name": "Lucian"
},
{
    "title": "the Green Father",
    "id": 427,
    "key": "Ivern",
    "name": "Ivern"
},
{
    "title": "the Radiant Dawn",
    "id": 89,
    "key": "Leona",
    "name": "Leona"
},
{
    "title": "the Sheriff of Piltover",
    "id": 51,
    "key": "Caitlyn",
    "name": "Caitlyn"
},
{
    "title": "Fury of the North",
    "id": 113,
    "key": "Sejuani",
    "name": "Sejuani"
},
{
    "title": "the Eternal Nightmare",
    "id": 56,
    "key": "Nocturne",
    "name": "Nocturne"
},
{
    "title": "the Chronokeeper",
    "id": 26,
    "key": "Zilean",
    "name": "Zilean"
},
{
    "title": "the Emperor of the Sands",
    "id": 268,
    "key": "Azir",
    "name": "Azir"
},
{
    "title": "the Mechanized Menace",
    "id": 68,
    "key": "Rumble",
    "name": "Rumble"
},
{
    "title": "Fallen Angel",
    "id": 25,
    "key": "Morgana",
    "name": "Morgana"
},
{
    "title": "the Stoneweaver",
    "id": 163,
    "key": "Taliyah",
    "name": "Taliyah"
},
{
    "title": "the Swift Scout",
    "id": 17,
    "key": "Teemo",
    "name": "Teemo"
},
{
    "title": "the Dreadnought",
    "id": 6,
    "key": "Urgot",
    "name": "Urgot"
},
{
    "title": "the Sad Mummy",
    "id": 32,
    "key": "Amumu",
    "name": "Amumu"
},
{
    "title": "the Colossus",
    "id": 3,
    "key": "Galio",
    "name": "Galio"
},
{
    "title": "the Revered Inventor",
    "id": 74,
    "key": "Heimerdinger",
    "name": "Heimerdinger"
},
{
    "title": "the Cryophoenix",
    "id": 34,
    "key": "Anivia",
    "name": "Anivia"
},
{
    "title": "the Frost Archer",
    "id": 22,
    "key": "Ashe",
    "name": "Ashe"
},
{
    "title": "the Eye of the Void",
    "id": 161,
    "key": "Velkoz",
    "name": "Vel'Koz"
},
{
    "title": "the Mad Chemist",
    "id": 27,
    "key": "Singed",
    "name": "Singed"
},
{
    "title": "the Crystal Vanguard",
    "id": 72,
    "key": "Skarner",
    "name": "Skarner"
},
{
    "title": "the Arrow of Retribution",
    "id": 110,
    "key": "Varus",
    "name": "Varus"
},
{
    "title": "the Plague Rat",
    "id": 29,
    "key": "Twitch",
    "name": "Twitch"
},
{
    "title": "The Might of Demacia",
    "id": 86,
    "key": "Garen",
    "name": "Garen"
},
{
    "title": "the Great Steam Golem",
    "id": 53,
    "key": "Blitzcrank",
    "name": "Blitzcrank"
},
{
    "title": "the Wuju Bladesman",
    "id": 11,
    "key": "MasterYi",
    "name": "Master Yi"
},
{
    "title": "the Bloodharbor Ripper",
    "id": 555,
    "key": "Pyke",
    "name": "Pyke"
},
{
    "title": "the Spider Queen",
    "id": 60,
    "key": "Elise",
    "name": "Elise"
},
{
    "title": "the Minotaur",
    "id": 12,
    "key": "Alistar",
    "name": "Alistar"
},
{
    "title": "the Sinister Blade",
    "id": 55,
    "key": "Katarina",
    "name": "Katarina"
},
{
    "title": "the Boy Who Shattered Time",
    "id": 245,
    "key": "Ekko",
    "name": "Ekko"
},
{
    "title": "the Iron Revenant",
    "id": 82,
    "key": "Mordekaiser",
    "name": "Mordekaiser"
},
{
    "title": "the Fae Sorceress",
    "id": 117,
    "key": "Lulu",
    "name": "Lulu"
},
{
    "title": "the Steel Shadow",
    "id": 164,
    "key": "Camille",
    "name": "Camille"
},
{
    "title": "the Darkin Blade",
    "id": 266,
    "key": "Aatrox",
    "name": "Aatrox"
},
{
    "title": "the Glorious Executioner",
    "id": 119,
    "key": "Draven",
    "name": "Draven"
},
{
    "title": "the River King",
    "id": 223,
    "key": "TahmKench",
    "name": "Tahm Kench"
},
{
    "title": "the Artisan of War",
    "id": 80,
    "key": "Pantheon",
    "name": "Pantheon"
},
{
    "title": "the Seneschal of Demacia",
    "id": 5,
    "key": "XinZhao",
    "name": "Xin Zhao"
},
{
    "title": "The Star Forger",
    "id": 136,
    "key": "AurelionSol",
    "name": "Aurelion Sol"
},
{
    "title": "the Blind Monk",
    "id": 64,
    "key": "LeeSin",
    "name": "Lee Sin"
},
{
    "title": "the Shield of Valoran",
    "id": 44,
    "key": "Taric",
    "name": "Taric"
},
{
    "title": "the Prophet of the Void",
    "id": 90,
    "key": "Malzahar",
    "name": "Malzahar"
},
{
    "title": "Daughter of the Void",
    "id": 145,
    "key": "Kaisa",
    "name": "Kai'Sa"
},
{
    "title": "Scorn of the Moon",
    "id": 131,
    "key": "Diana",
    "name": "Diana"
},
{
    "title": "the Yordle Gunner",
    "id": 18,
    "key": "Tristana",
    "name": "Tristana"
},
{
    "title": "the Void Burrower",
    "id": 421,
    "key": "RekSai",
    "name": "Rek'Sai"
},
{
    "title": "the Crimson Reaper",
    "id": 8,
    "key": "Vladimir",
    "name": "Vladimir"
},
{
    "title": "the Exemplar of Demacia",
    "id": 59,
    "key": "JarvanIV",
    "name": "Jarvan IV"
},
{
    "title": "the Tidecaller",
    "id": 267,
    "key": "Nami",
    "name": "Nami"
},
{
    "title": "the Virtuoso",
    "id": 202,
    "key": "Jhin",
    "name": "Jhin"
},
{
    "title": "the Starchild",
    "id": 16,
    "key": "Soraka",
    "name": "Soraka"
},
{
    "title": "the Tiny Master of Evil",
    "id": 45,
    "key": "Veigar",
    "name": "Veigar"
},
{
    "title": "the Storm's Fury",
    "id": 40,
    "key": "Janna",
    "name": "Janna"
},
{
    "title": "the Titan of the Depths",
    "id": 111,
    "key": "Nautilus",
    "name": "Nautilus"
},
{
    "title": "Agony's Embrace",
    "id": 28,
    "key": "Evelynn",
    "name": "Evelynn"
},
{
    "title": "the Rabble Rouser",
    "id": 79,
    "key": "Gragas",
    "name": "Gragas"
},
{
    "title": "the Master of Shadows",
    "id": 238,
    "key": "Zed",
    "name": "Zed"
},
{
    "title": "the Piltover Enforcer",
    "id": 254,
    "key": "Vi",
    "name": "Vi"
},
{
    "title": "the Mouth of the Abyss",
    "id": 96,
    "key": "KogMaw",
    "name": "Kog'Maw"
},
{
    "title": "the Nine-Tailed Fox",
    "id": 103,
    "key": "Ahri",
    "name": "Ahri"
},
{
    "title": "Demacia's Wings",
    "id": 133,
    "key": "Quinn",
    "name": "Quinn"
},
{
    "title": "the Deceiver",
    "id": 7,
    "key": "Leblanc",
    "name": "LeBlanc"
},
{
    "title": "the Prodigal Explorer",
    "id": 81,
    "key": "Ezreal",
    "name": "Ezreal"
}]

result = result.map(champ => {
    champ.champId = champ.id
    delete champ.id;
    return champ;
})


fs.writeFile("./seedDb/staticData.json", JSON.stringify(result), function(err) {
    if(err) {
        return console.log(err);
    }
    
    console.log("The file was saved!");
}); 

