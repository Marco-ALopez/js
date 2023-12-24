let bienvenida = prompt ("Bienvenido! cual es tu nombre?");
do{
    console.log("bienvenido " + bienvenida.toUpperCase());
}while (bienvenida === "....."){
    //calculando intereses
    let tipo = prompt("escriba su tipo de prestamo 'personal'(25%), 'auto'(10%) ó 'hipotecario'(12%) de intereses°°");
    let monto = parseInt(prompt("cuanto es el monto a pedir?"));
    function operacion (){
        if (tipo === "personal"){
            let op = monto * (25/100);
            console.log ("sus mensualidades serían de: " + op + "$ pesos");
            let plazos = parseInt(prompt(`favor de elejir los plazos "2, 4, 6, 8, 10 ,12, 24, 60" msi fijos`));
            let prepersonal = op * plazos;
            console.log("su interes total sería de: " +prepersonal.toFixed(2)+ "$ pesos");
        }else if (tipo === "auto"){
            let op = monto * (10/100);
            console.log ("sus mensualidades serían de:" + op +"$ pesos");
            let plazos = parseInt(prompt(`favor de elejir los plazos "60, 72, 84" msi fijos`));
            let preauto = op * plazos;
            console.log("su interes total sería de: " +preauto.toFixed(2)+ "$ pesos");
        }else if (tipo === "hipotecario"){
            let op = monto * (12/100);
            console.log ("sus mensualidades serían de: " + op + "$ pesos");
            let plazos = parseInt(prompt(`favor de elejir los plazos "60, 72, 84" msi fijos`));
            let prehipoteca = op * plazos;
            console.log("su interes total sería de: " +prehipoteca.toFixed(2)+ "$ pesos");
        }else {
            console.log ("datos ingresados incorrectos");
        }
    }
    operacion (tipo, monto);
}