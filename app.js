/*const {frutas, dinero} = require('./frutas.js');

frutas.forEach(item => {
    console.count(item)
})

console.log(dinero)

var cowsay = require("cowsay");

console.log(cowsay.say({
    text:"Hello",
    e:"* *",
    T: "w "
}));*/
/*const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Respondiendo a solicitud v2 ')
})

const puerto = 3000;

server.listen(puerto, () => {
    console.log('Escuchando solicitud')
})*/
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
    res.render("index", {titulo: "titulo dinamico"})
})

app.get('/servicios', (req, res) =>{
    res.render("servicios", {servicios: "servicio1"})
})

app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Descripción página 404"
    })
})

app.listen(port, () => {
    console.log('servidor', port)
})