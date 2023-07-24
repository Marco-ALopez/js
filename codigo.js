//funcion acceso global y retornan un valor
function videoGame(){
    /* datos compuestos */
//objeto
    let welcome = prompt("Porfavor ingrese su nombre");
    alert(`bienvenido ${welcome}`);
    const caballo = {
        nombre : "caballo",
        material : "plata",
        precio : 18,
        
    }
    const gallitos = {
        nombre : "gallo",
        material : "plata",
        precio : 12,
    }
    const evillas = {
        item1 : caballo,
        item2 : gallitos,
    }
    caballo.tamaño = "grande";//dato por referencia
    caballo["tamaño-ch"] = "chico";//asignacion programaticamente
    gallitos["_tamaño-gde"] = "grande";
    console.log (evillas)
    console.log (`bienvenido las evillas son de ${caballo.nombre} y de ${gallitos.nombre}`)
    //letras mayusculas
    console.log(caballo.material.toUpperCase())
    //metodo: se requiere un  objeto y puede no retornar un valor
    //normalmente se accede con un punto
    function caballos (nombre, material, precio, tamaño) {
        //contexto es como un let
        this.nambe = nombre;
        this.material = material; 
        this.precio = precio;
        this.tamaño = tamaño;
    //metodo
        //clave        funcion anonima
        this.peso = function (){
            console.log ("vezfuncanonima")
        }
    }//contexto significa que se almascena en las llaves
//constructores
    //"new" es un objeto nuevo que se guarda en constant "caballos"
    const caballo1 = new caballos  ("frisón", "plata", 14000, "mediano");
    const caballo2 = new caballos  ("español",  "plata", 14000, "mediano");
    const caballo3 = new caballos  ("arabe",  "plata", 14000, "mediano");
    caballo3.peso();
    const caballo4 = new caballos  ("percherones",  "plata", 14000, "mediano");
    const caballo5 = new caballos  ("mustang",  "plata", 14000, "mediano");
    const evillas1 = {
        evi : caballo1,
        ev2 : caballo2,
        ev3 : caballo3,
        ev4 : caballo4,
        ev5 : caballo5,
    }
    console.log (evillas1)
}
videoGame()
    
    
    
    
    
    
    
    
    
    
    


    
    
    
    
    /* 
    quince(){
        let ingNumero = prompt("ingrese un numero");
    let num = parseInt (ingNumero);//conversion string a número
    for(let m = 0; m <= num; m++);
    if (num < 1 || num > 15){
        console.log ("el número es menor a 1 ó mayor que 15");
    }else if (num <= 4 && num >=1){
        console.log ("el número " + num + " es mayor que 0 y menor que 5");
    } else if ((num >= 5 && num <= 20) && num === 15) {
        console.log ("¡bingo!, el número es 15");
    } else if (num >= 5 && num < 16){
        console.log ("el numero "+ num +" es menor que 16 y mayor que 4");
    }
    else{ 
        alert (m)
    }
}
//llamador
quince()
let nombre = "gggggg";
let frase = `buevenido ${nombre}`; //ctrl + alt + cierre de llaves
console.log (frase);
let saludo = 'pertras"como les va"'
saludo = `${saludo} "seguro 'muy bien'"`
console.log (saludo) */






































