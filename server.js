const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;


hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: "DiEgO gonZalez",
        pagina: "Home"
    });
});

app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about', {
        pagina: "About"
    });
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})