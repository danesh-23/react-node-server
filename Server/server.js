const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")

app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send({message: "hello, world"})
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get("/api/data", (req, res) => {
    res.send({
        message: "Welcome Friends :)",
        name: "Danesh"
    })
})


const PORT = process.env.BACKEND_PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})