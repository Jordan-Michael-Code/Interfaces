"use strict";
var usuario = {
    nombreUsuario: 'Jordan Michael',
    password: '1234',
    confirmarPassword: '1234'
};
console.log(usuario);
console.log(usuario.confirmarPassword);
var avion = {
    abordarTransporte: function () {
        console.log('Abordando');
    }
};
avion.abordarTransporte();
