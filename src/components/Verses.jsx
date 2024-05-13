const verses = [
    {
        id: 1,
        title: "El gallo (\"the rooster\")",
        verse: [
            "El que le cantó a San Pedro no le volverá a cantar.",
            "The one that sang for St. Peter will never sing for him again."
        ]
    },
    {
        id: 2,
        title: "El diablito (\"the little Devil\")",
        verse: [
            "Pórtate bien cuatito, si no te lleva el coloradito.",
            "Behave yourself buddy, or the little red one will take you away."
        ]
    },
    {
        id: 3,
        title: "La dama (\"the lady\")",
        verse: [
            "Puliendo el paso, por toda la calle real.",
            "Improving her gait, all along the main street."
        ]
    },
    {
        id: 4,
        title: "El catrín (\"the dandy\")",
        verse: [
            "Don Ferruco en la alameda, su bastón quería tirar.",
            "Sir Ferruco in the poplar grove, wanted to toss away his cane."
        ]
    },
    {
        id: 5,
        title: "El paraguas (\"the umbrella\")",
        verse: [
            "Para el sol y para el agua.",
            "For the sun and for the rain."
        ]
    },
    {
        id: 6,
        title: "La sirena (\"the mermaid\")",
        verse: [
            "Con los cantos de sirena, no te vayas a marear.",
            "Don't be swayed by the songs of the siren."
        ]
    },
    {
        id: 7,
        title: "La escalera (\"the ladder\")",
        verse: [
            "Súbeme paso a pasito, no quieras pegar brinquitos.",
            "Ascend me step by step, don't try and skip."
        ]
    },
    {
        id: 8,
        title: "La botella (\"the bottle\")",
        verse: [
            "La herramienta del borracho.",
            "The tool of the drunk."
        ]
    },
    {
        id: 9,
        title: "El barril (\"the barrel\")",
        verse: [
            "Tanto bebió el albañil, que quedó como barril.",
            "So much did the bricklayer drink, he ended up like a barrel."
        ]
    },
    {
        id: 10,
        title: "El árbol (\"the tree\")",
        verse: [
            "El que a buen árbol se arrima, buena sombra le cobija.",
            "He who nears a good tree, is blanketed by good shade."
        ]
    },
    {
        id: 11,
        title: "El melón (\"the melon\")",
        verse: [
            "Me lo das o me lo quitas.",
            "Give it to me or take it from me."
        ]
    },
    {
        id: 12,
        title: "El valiente (\"the brave man\")",
        verse: [
            "Por qué le corres cobarde, trayendo tan buen puñal.",
            "Why do you run, coward? Having such a good blade too."
        ]
    },
    {
        id: 13,
        title: "El gorrito (\"the little bonnet\")",
        verse: [
            "Ponle su gorrito al nene, no se nos vaya a resfriar.",
            "Put the bonnet on the baby, lest he catch a cold."
        ]
    },
    {
        id: 14,
        title: "La muerte (\"Death\")",
        verse: [
            "La muerte tilica y flaca.",
            "Death, thin and lanky."
        ]
    },
    {
        id: 15,
        title: "La pera (\"the pear\")",
        verse: [
            "El que espera, desespera.",
            "He who waits despairs."
        ]
    },
    {
        id: 16,
        title: "La bandera (\"the flag\")",
        verse: [
            "Verde blanco y colorado, la bandera del soldado.",
            "Green, white, and red, the flag of the soldier."
        ]
    },
    {
        id: 17,
        title: "El bandolón (\"the mandolin\")",
        verse: [
            "Tocando su bandolón, está el mariachi Simón.",
            "There playing his lute, is Simon the mariachi."
        ]
    },
    {
        id: 18,
        title: "El violoncello (\"the cello\")",
        verse: [
            "Creciendo se fue hasta el cielo, y como no fue violín, tuvo que ser violoncello.",
            "Growing it reached the heavens, and since it wasn't a violin, it had to be a cello."
        ]
    },
    {
        id: 19,
        title: "La garza (\"the heron\")",
        verse: [
            "Al otro lado del río tengo mi banco de arena, donde se sienta mi chata pico de garza morena.",
            "At the other side of the river I have my sand bank, where sits my darling short one, with the beak of a great blue heron."
        ]
    },
    {
        id: 20,
        title: "El pájaro (\"the bird\")",
        verse: [
            "Tú me traes a puros brincos, como pájaro en la rama.",
            "You have me hopping here and there, like a bird on a branch."
        ]
    },
    {
        id: 21,
        title: "La mano (\"the hand\")",
        verse: [
            "La mano de un criminal.",
            "The hand of a criminal."
        ]
    },
    {
        id: 22,
        title: "La bota (\"the boot\")",
        verse: [
            "Una bota igual que la otra.",
            "A boot the same as the other."
        ]
    },
    {
        id: 23,
        title: "La luna (\"the moon\")",
        verse: [
            "El farol de los enamorados.",
            "The street lamp of lovers."
        ]
    },
    {
        id: 24,
        title: "El cotorro (\"the parrot\")",
        verse: [
            "Cotorro cotorro saca la pata, y empiézame a platicar.",
            "Parrot, parrot, stick out your claw and begin to chat with me."
        ]
    },
    {
        id: 25,
        title: "El borracho (\"the drunkard\")",
        verse: [
            "A qué borracho tan necio ya no lo puedo aguantar.",
            "Oh what an annoying drunk, I can't stand him any more."
        ]
    },
    {
        id: 26,
        title: "El negrito (\"the little black man\")",
        verse: [
            "El que se comió el azúcar.",
            "The one who ate the sugar."
        ]
    },
    {
        id: 27,
        title: "El corazón (\"the heart\")",
        verse: [
            "No me extrañes corazón, que regreso en el camión.",
            "Do not miss me, sweetheart, I'll be back by bus."
        ]
    },
    {
        id: 28,
        title: "La sandía (\"the watermelon\")",
        verse: [
            "La barriga que Juan tenía, era empacho de sandía.",
            "The swollen belly that Juan had, was from eating too much watermelon."
        ]
    },
    {
        id: 29,
        title: "El tambor (\"the drum\")",
        verse: [
            "No te arrugues, cuero viejo, que te quiero pa' tambor.",
            "Don't you wrinkle, dear old leather, since I want you for a drum."
        ]
    },
    {
        id: 30,
        title: "El camarón (\"the shrimp\")",
        verse: [
            "Camarón que se duerme, se lo lleva la corriente.",
            "The shrimp that slumbers is taken by the tides."
        ]
    },
    {
        id: 31,
        title: "Las jaras (\"the arrows\")",
        verse: [
            "Las jaras del indio Adán, donde pegan, dan.",
            "The arrows of Adam the Indian, strike where they hit."
        ]
    },
    {
        id: 32,
        title: "El músico (\"the musician\")",
        verse: [
            "El músico trompas de hule, ya no me quiere tocar.",
            "The rubber-lipped musician does not want to play for me anymore."
        ]
    },
    {
        id: 33,
        title: "La araña (\"the spider\")",
        verse: [
            "Atarántamela a palos, no me la dejes llegar.",
            "Beat it silly with a stick, do not let it near me."
        ]
    },
    {
        id: 34,
        title: "El soldado (\"the soldier\")",
        verse: [
            "Uno, dos y tres, el soldado pa'l cuartel.",
            "One, two and three, the soldier heads to the fort."
        ]
    },
    {
        id: 35,
        title: "La estrella (\"the star\")",
        verse: [
            "La guía de los marineros.",
            "Sailor's guide."
        ]
    },
    {
        id: 36,
        title: "El cazo (\"the saucepan\")",
        verse: [
            "El caso que te hago es poco.",
            "The attention I pay you is little."
        ]
    },
    {
        id: 37,
        title: "El mundo (\"the world\")",
        verse: [
            "Este mundo es una bola, y nosotros un bolón.",
            "This world is a ball, and we a great mob."
        ]
    },
    {
        id: 38,
        title: "El Apache (\"the Apache\")",
        verse: [
            "¡Ah, Chihuahua! Cuánto apache con pantalón y huarache.",
            "Ah, Chihuahua! So many Apaches with pants and sandals."
        ]
    },
    {
        id: 39,
        title: "El nopal (\"the prickly pear cactus\")",
        verse: [
            "Al nopal lo van a ver, nomás cuando tiene tunas.",
            "People go to see the prickly pear, only when it bears fruit."
        ]
    },
    {
        id: 40,
        title: "El alacrán (\"the scorpion\")",
        verse: [
            "El que con la cola pica, le dan una paliza.",
            "He who stings with his tail, will get a beating."
        ]
    },
    {
        id: 41,
        title: "La rosa (\"the rose\")",
        verse: [
            "Rosita, Rosaura, ven que te quiero ahora.",
            "Rosita, Rosaura, come, as I want you here now."
        ]
    },
    {
        id: 42,
        title: "La calavera (\"the skull\")",
        verse: [
            "Al pasar por el panteón, me encontré un calaverón.",
            "As I passed by the cemetery, I found myself a skull."
        ]
    },
    {
        id: 43,
        title: "La campana (\"the bell\")",
        verse: [
            "Tú con la campana y yo con tu hermana.",
            "You with the bell and I with your sister."
        ]
    },
    {
        id: 44,
        title: "El cantarito (\"the little water pitcher\")",
        verse: [
            "Tanto va el cántaro al agua, que se quiebra y te moja las enaguas.",
            "So often does the jug go to the water, that it breaks and wets your slip."
        ]
    },
    {
        id: 45,
        title: "El venado (\"the deer\")",
        verse: [
            "Saltando va buscando, pero no ve nada.",
            "Jumping it goes searching, but it doesn't see anything."
        ]
    },
    {
        id: 46,
        title: "El Sol (\"the sun\")",
        verse: [
            "La cobija de los pobres.",
            "The blanket of the poor."
        ]
    },
    {
        id: 47,
        title: "La corona (\"the crown\")",
        verse: [
            "El sombrero de los reyes.",
            "The hat of kings."
        ]
    },
    {
        id: 48,
        title: "La chalupa (\"the canoe\")",
        verse: [
            "Rema que rema Lupita, sentada en su chalupita.",
            "Lupita rows as she may, sitting in her little boat."
        ]
    },
    {
        id: 49,
        title: "El pino (\"the pine tree\")",
        verse: [
            "Fresco y oloroso, en todo tiempo hermoso.",
            "Fresh and fragrant, beautiful in any season."
        ]
    },
    {
        id: 50,
        title: "El pescado (\"the fish\")",
        verse: [
            "El que por la boca muere, aunque mudo fuere.",
            "The one who dies by its mouth, even if he were mute."
        ]
    },
    {
        id: 51,
        title: "La palma (\"the palm tree\")",
        verse: [
            "Palmero, sube a la palma y bájame un coco real.",
            "Palmer, climb the palm tree and bring me a royal coconut."
        ]
    },
    {
        id: 52,
        title: "La maceta (\"the flowerpot\")",
        verse: [
            "El que nace pa'maceta, no sale del corredor.",
            "He who is born to be a flowerpot, does not go beyond the hallway."
        ]
    },
    {
        id: 53,
        title: "El arpa (\"the harp\")",
        verse: [
            "Arpa vieja de mi suegra, ya no sirves pa'tocar.",
            "Old harp of my mother-in-law, you are no longer fit to play."
        ]
    },
    {
        id: 54,
        title: "La rana (\"the frog\")",
        verse: [
            "Al ver a la verde rana, qué brinco pegó tu hermana.",
            "What a jump your sister gave, as she saw the green frog."
        ]
    }
];

export default verses;
