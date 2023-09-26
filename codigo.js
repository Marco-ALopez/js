let bienvenida = prompt ("Bienvenido! cual es tu nombre?");
do{
console.log(`bienvenido ${bienvenida}`);
}while (bienvenida === "..."){
    //calculando intereses
    let tipo = prompt("elija su tipo de prestamo 'auto'(10%) ó 'personal'(25%) de intereses°°");
    let monto = parseInt(prompt("cuanto es el monto a pedir?"));
    switch(tipo) {
        case "auto" : {
            let tasa = 10; //3% y 10%
            const operacion = monto * (tasa/100);
            let plazos = parseInt(prompt(`favor de elejir los plazos "60, 72, 84" msi fijos`));
            let preauto = operacion * plazos;
            console.log(`sus intereses serían de ${preauto} pesos`);
            break;}
        case "personal" : {
            let tasa = 25; //5% y 36%
            const operacion = monto * (tasa/100);
            let plazos = parseInt(prompt(`favor de elejir los plazos "2, 4, 6, 8, 10 ,12, 24, 36, 48, 60" msi fijos`));
            let prepersonal = operacion * plazos;
            console.log(`sus intereses serían de ${prepersonal}pesos`);
            break;}
        default: {
            break;
        }
    }
};