const express = require('express')
const app = express()
const port = 3000

const mieiPost = [
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "Cibo",
        img: "/BlogImg/ciambellone.jpeg",
        tag: "Dolce"

    },

    {
        id: 2,
        titolo: "Cracker barbabietola",
        contenuto: "Cibo",
        img: "/BlogImg/cracker_barbabietola.jpeg",
        tag: "Salato"

    },

    {
        id: 3,
        titolo: "Pane fritto dolce",
        contenuto: "Cibo",
        img: "/BlogImg/pane_fritto_dolce.jpeg",
        tag: "Dolce"

    },

    {
        id: 4,
        titolo: "Pasta barbabietola",
        contenuto: "Cibo",
        img: "BlogImg/pasta_barbabietola.jpeg",
        tag: "Salato"

    },

    {
        id: 5,
        titolo: "Torta paesana",
        contenuto: "Cibo",
        img: "BlogImg\torta_paesana.jpeg",
        tag: "Dolce"

    },





]

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})