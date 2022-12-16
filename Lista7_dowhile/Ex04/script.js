var quadrado = 1;
var soma = quadrado;
var grao = 2;
var contador = 0;

do {
  
    var contador = contador + 1
    var grao = grao *2;
    var quadrado = quadrado + 1;
    var soma = soma + grao;
} while (contador <= 64);

document.write(soma + "-");