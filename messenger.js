

const spanish1 = {
    me: ['Quiero', 'Puedo tomar', 'Tengo', 'Puedo tener', 'Amo', 'Necesito'

    ],
    heShe: ['Quiere', 'Puede tomar', 'Tiene', 'Puede tener', 'Ama', 'Necesita'

    ],
    we: ['Queremos', 'Podemos tomar', 'Tenemos', 'Podemos tener', 'Amamos', 'Necesitamos'

    ],

    they: ['Quieren', 'Pueden tomar', 'Tienen', 'Pueden tener', 'Aman', 'Necesitan'

    ],
    spanishNoun: ['el palo', 'el pan', 'una novia', 'un novio', 'el dinero', 'la cerveza', 'la pizza', 
    'la pelota', 'la leche', 'el agua', 'los amigos', 'la comida', 'un auto', 'el tomate', 'la computadora',
    'los gatos', 'mi perro', 'la cebolla']
}



const spanish2 = {    
    me: ['Voy', 'Corrí', 'Conduje', 'Camino'

    ],
    heShe: ['Va', 'Corrió', 'Condució', 'Camina'

    ],
    we: ['Vamos', 'Corrimos', 'Conducimos', 'Caminamos', 

    ],

    they: ['Van', 'Corrieron', 'Condujeron', 'Caminan', 

],
    spanishNoun: ['a la casa', 'al parque', 'a la ciudad', 'a mis amigas', 'a la escuela', 'a las montañas', 'por la playa'
]
}

const spanish3 = {    
    me: ['Creo que'

    ],
    heShe: ['Piensa que'

    ],
    we: ['Pensamos que'

    ],

    they: ['Piensan que'

],
    spanishNoun: ['estoy enfermo', 'estas lindo', 'es demasiado grande', 'es demasiado pequeño', 'el esta triste', 'ellos tienen ambre', 'ella quiere ir a la fiesta', 'estoy cansado'
]
}


const randomSentence = () => {
    let x = {}
    const randomIndex1 = Math.floor(Math.random() *3)
        if(randomIndex1 === 0){
            x = spanish1
        } else if (randomIndex1 ===1){
         x = spanish2
        } else 
        x = spanish3
    let y = []
    const randomIndex2 =  Math.floor(Math.random() * 4)
        if (randomIndex2 === 0) {
             y = x.me;
        } else if (randomIndex2 === 1) {
             y = x.heShe; 
        } else if (randomIndex2 === 2 ){
            y = x.we;
        } else if (randomIndex2 === 3){
            y = x.they;
        } 
    let word1 = []
    const randomIndex3 = Math.floor(Math.random() * y.length)
    word1 = y[randomIndex3]
    let word2 = []
    const randomIndex4 = Math.floor(Math.random() * x.spanishNoun.length)
    word2 = x.spanishNoun[randomIndex4]
    return `${word1} ${word2}`

}




console.log(randomSentence()) 

