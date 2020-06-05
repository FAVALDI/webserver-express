//inicializamos el hbs
var hbs = require('hbs');

/***HELPERS***/
/***************/

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//capitalizar las letras
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase;
    });

    return palabras.join(' ');

});

/**************/