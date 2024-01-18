require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT ||8000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/allu', (req, res) => res.send('Hello allu!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))