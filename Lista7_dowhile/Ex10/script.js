var contadora= 50;
var soma= 0;
var media= 0;

while (contadora <= 70) {
    if(contadora % 2 == 0) {
        var soma= soma + contadora;
    }
        contadora++
}
var media = soma / 11;
document.write("A soma dos números pares existentes entre 50 a 70 é igual a: "+soma + " e a média é igual a: "+media);