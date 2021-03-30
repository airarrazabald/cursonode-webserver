
//llamo a las variables de entorno con dotenv
require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// TODO handlebars
// con este trozo de codigo podemos trabajar con el motro de vista de handlebars
// el motro de vistas nos permite escribir codigo javascript de forma dinamica en vistas con extensión .hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Abelardo',
        titulo: 'Curso de Node'
    });
}); 


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Abelardo',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Abelardo',
        titulo: 'Curso de Node'
    });
});

app.get('*',  (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});