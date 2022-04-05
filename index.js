const express = require('express');
const app = express();

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('welcome')
})

app.post('/', (req, res) => {
    res.send(`Hi There! ${req.body.name}`)
})

app.get('/:name', (req, res) => {
    res.render('index', {name: req.params.name})
})

app.listen(4000, () => {
    console.log("app is listening on port 4000");
})