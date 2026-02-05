const express = require('express')
const app = express()
const port = 3000

const mieiPost = [
    {
        

    }
]

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})