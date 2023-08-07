function hi(){
    let nameUser = prompt("favor de ingresar su nombre");
    let hello = `bienvenido ${nameUser}`
    console.log(hello)
}
function store (){
    const stre = [
        {prod : "evillas"},
        {prod : "cinturones"}, 
        {prod : "monturas"}, 
        {prod :"chaparreras"}, 
        {prod : "espuelas"}, 
        {prod : "sombreros"}, 
        {prod : "votas"}
    ];
    for (let i = 0; i < stre.length; i++){
        console.log (stre [i]);
    }
}
hi();
function evillas (){
    function evillas(name, quality, price, material){
        this.nombre =name;
        this.calidad =quality;
        this.precio = price;
        this.mate = material;
    }
    const evi = new evillas ("caballos", "alta", 10.000, "plata");
    const ev2 = new evillas ("frisón", "alta", 14.000, "oro");
    const ev3 = new evillas ("español", "alta", 12.000, "plata");
    const ev4 = new evillas ("arabe", "alta", 11.000, "plata");
    const ev5 = new evillas ("percherón", "alta", 18.000, "oro");
    const ev6 = new evillas ("mustang", "media", 9.800, "plata");
    const ev7 = new evillas ("gallo", "alta", 24.000, "oro");
    const ev8 = new evillas ("escorpión", "baja", 7.380, "plata");
    console.log (`tu evilla contiene: ${evi.nombre}`)
}
evillas()
function cinturones (){
    function cintos(name, quality, price, material){
        this.nombre =name;
        this.calidad =quality;
        this.precio = price;
        this.mate = material;
    }
    const evi = new cintos ("caballos", "alta", 10.000, "plata");
    const ev2 = new cintos ("gallo", "alta", 24.000, "oro");
    const ev3 = new cintos ("escorpión", "alta", 7.380, "plata");
    const ev4 = new cintos ("caballos", "media", 1.000, "piteado");
    const ev5 = new cintos ("gallo", "media", 2.000, "piteado");
    const ev6 = new cintos ("escorpión", "media", 1.380, "piteados");
}
cinturones()
