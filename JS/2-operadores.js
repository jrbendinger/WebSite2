'use strict'
var x = 4;
var y = 1;

var z = x + y;

console.log(z); //suma de ints

x = x + 2; //sería lo mismo poner x+=2;
y *= 3;

console.log(x);

var nombre = "Juli";
var saludo = "Buenas Tardes";

console.log(saludo + " " + nombre); //suma de strings

var h = 1;
var f = "2";

console.log(h + f); //va a dar 12, porque suma h y f como si fueran strings.