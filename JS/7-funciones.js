//declarar una función
function colorear() {
    document.bgColor = '#339999';
}
//cómo invocar una función

//colorear();

//parametros

function colorearColor(color) {
    document.bgColor = color;
}

colorearColor('cc33cc');

function validarNombre() {
    var nombre = getElementById('nombre');
    if (nombre == '')
        { alert('inserte nombre') }
}

//valores de retorno

function pideNumero() {
    var numero;
    do {
        numero = prompt('Dame un número', '');
        numero = Number(numero);
        if (numero > 1000) { return 'kk'; }
    } while (isNaN(numero));
    return numero;
}

var miNumero = pideNumero();
console.log(miNumero);