function quince(){
    let ingNumero = prompt("ingrese un numero");
    let num = parseInt (ingNumero);
    if (num < 1 || num > 15){
        console.log ("el número es menor a 1 ó mayor que 15");
    }
    if (num <= 4 && num >=1){
        console.log ("el número " + num + " es mayor que 0 y menor que 4");
    }
    if ((num >= 5 && num <= 20) && num == 15) {
        console.log ("¡bingo!, el número es 15");
    }else if (num >= 5 && num < 16){
        console.log ("el numero "+ num +" es menor que 16 y mayor que 4");
    }
}
quince()