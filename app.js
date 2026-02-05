const express = require('express')
const app = express()
const port = 3000

const mieiPost = [
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "Cibo",
        img: "/img/ciambellone.jpeg",
        tags: ["cibo", "Vacanza", "Viaggio", "Tradizione",]

    },

    {
        id: 2,
        titolo: "Cracker barbabietola",
        contenuto: "Cibo",
        img: "/img/cracker_barbabietola.jpeg",
        tags: ["cibo", "Vacanza", "Viaggio", "Tradizione",]

    },

    {
        id: 3,
        titolo: "Pane fritto dolce",
        contenuto: "Cibo",
        img: "/img/pane_fritto_dolce.jpeg",
        tags: ["cibo", "Vacanza", "Viaggio", "Tradizione",]

    },

    {
        id: 4,
        titolo: "Pasta barbabietola",
        contenuto: "Cibo",
        img: "/img/pasta_barbabietola.jpeg",
        tags: ["cibo", "Vacanza", "Viaggio", "Tradizione",]

    },

    {
        id: 5,
        titolo: "Torta paesana",
        contenuto: "Cibo",
        img: "/img/torta_paesana.jpeg",
        tags: ["cibo", "Vacanza", "Viaggio", "Tradizione",]

    }
];



app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {
    res.send(mieiPost)
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})