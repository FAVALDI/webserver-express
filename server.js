const express = require('express');

//declara una variable que es producto de la funcion de express
const app = express();
//inicializamos el hbs
var hbs = require('hbs');


/********IMPORTAR HELPERS*****/
//cuando importamos de esta manera el archivo se ejecuta
require('./hbs/helpers');


/**********CREAR VARIABLE DE ENTORNO GLOBAR PARA EL PUERTO**********/
const port = process.env.PORT || 3000;



//UN MIDDLEWARE ES UN CALLBACK QUE SE EJECUTARA SIN IMPORTAR EL URL QUE SE PIDA

app.use(express.static(__dirname + '/public'))

//Express hbs engine

// el __dirname dice que no importa cual path tengas pero toma esa variable y concatena la sig ruta
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');




//EXPRESS HBS ENGINE
// la pleca indica el path
app.get('/', function(req, res) {
        res.render('home', {
            nombre: 'Fabian'
        });
    })
    //indicamos que ahora renderice el about y necesitamos mandar los argumentos necesarios segun la aplicacion
app.get('/about', function(req, res) {
    res.render('about');
})

/// LA CARPETA PUBLIC SON TODOS LOS ARCHIVOS QUE VAN A SER ACCESIBLES PARA TODAS LAS PERSONAS



//se solicita un get cuando el path sea un slash / y haran la funcion de callback que se desee
/* app.get('/', function(req, res) {
    //res.send('Hello World')

    let salida = {
        nombre: 'Fabian',
        edad: 32,
        url: req.url
    }
    res.send(salida);
}) */



//se define cual es el puerto que vamos a escuchar 
app.listen(port, () => { console.log(`escuchando peticiones en puerto ${port}`); });