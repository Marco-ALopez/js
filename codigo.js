function hi(){
    let nameUser = prompt("favor de ingresar su nombre");
    let hello = `bienvenido ${nameUser}`;
    console.log(hello);
};
function store (){
    const stre = [
        {prod : "evillas"},
        {prod : "cinturones"}, 
        {prod : "monturas"}, 
        {prod : "chaparreras"}, 
        {prod : "espuelas"}, 
        {prod : "sombreros"}, 
        {prod : "votas"},

    ];
    for (let i = 0; i < stre.length; i++){
        console.log (stre [i]);
    };
};
hi();
function evillas (){
    class evillas{
        constructor(name, quality, price, material, size){
            this.nombre =name;
            this.calidad =quality;
            this.precio = price;
            this.mate = material;
            this.tamaño = size;
        };
        mat(){
            console.log(`el material de este producto es ${this.mate}`)
        };
    }
    const ev1 = new evillas ("caballos", "alta", 10000, "plata", "grande");
    const ev2 = new evillas ("frisón", "alta", 14000, "oro", "grande");
    const ev3 = new evillas ("español", "alta", 12000, "plata", "mediano");
    ev3.mat()
    const ev4 = new evillas ("arabe", "alta", 11000, "plata", "mediano");
    const ev5 = new evillas ("percherón", "alta", 18000, "oro", "grande");
    const ev6 = new evillas ("mustang", "media", 9800, "plata", "chico");
    const ev7 = new evillas ("gallo", "alta", 24000, "oro", "mediano");
    const ev8 = new evillas ("escorpión", "baja", 7380, "plata", "mediano");

    console.log (`tu evilla contiene: ${ev1.nombre}`);
};
evillas();
function cinturones (){
    class cintos{
        constructor(name, quality, price, material){
            this.nombre =name;
            this.calidad =quality;
            this.precio = price;
            this.mate = material;
        };
    };
    const ev1 = new cintos ("caballos", "alta", 10000, "plata");
    const ev2 = new cintos ("gallo", "alta", 24000, "oro");
    const ev3 = new cintos ("escorpión", "alta", 7380, "plata");
    const ev4 = new cintos ("caballos", "media", 1000, "piteado");
    const ev5 = new cintos ("gallo", "media", 2000, "piteado");
    const ev6 = new cintos ("escorpión", "media", 1380, "piteados");
    const evi = [ev1, ev2, ev3, ev4, ev5, ev6];
    // for (let n of evi){
    //     console.log (n);
    // };
};
cinturones();
function monturas(){
    const monturas =
    [
        {type : "española", material : "piel", precio : 2500 },
        {type : "española", material : "mantarraya", precio : 30000 },
        {type : "española", material : "piteada", precio : 9300},
        {type : "charra", material : "piel", precio : 4800},
        {type : "charra", material : "mantarraya", precio : 50000}, 
        {type : "charra", material : "anguila", precio : 45000},
        {type : "charra", material : "piteada", precio : 11300},
    ];
    // for (let i = 0; i < monturas.length; i++){
    //     console.log (monturas [i]);
    // };
};
monturas();
function chaparreras(){
    class chaps{
        constructor(type, material, size, price){
            this.tipo = type;
            this.material = material;
            this.tamaño = size;
            this.precio = price;
        };
    }
    const chap1 = new chaps ("pantalon", "piel", "grande", 3000);
    const chap2 = new chaps ("chaparrera", "piel", "grande", 1800);
    const chap3 = new chaps ("chaparrera", "piel", "mediano", 1500);
    const chap4 = new chaps ("pantalon", "imitación", "grande", 3000);
    const chap5 = new chaps ("chaparrera", "imitación", "grande", 1800);
    const chap6 = new chaps ("chaparrera", "imitación", "mediano", 1500);
    const chapi = [chap1, chap2, chap3];
    console.log (chapi);
};
chaparreras();
function espuelas(){
    class spurs{
        constructor (type, material, size, price){
            this.tipo = type;
            this.material = material;
            this.tamaño = size;
            this.precio = price;
        };
    }
    const spur1 = new spurs ("acero", "piel", "mediano", 1200);
    const spur2 = new spurs ("acero", "piel", "chico", 1600);
    const spur3 = new spurs ("acero", "matarraya", "mediano", 3000);
    const spur4 = new spurs ("acero", "mantarraya", "chico", 3200);
    const spur5 = new spurs ("acero", "imitación", "mediano", 900);
    const spur6 = new spurs ("acero", "imitación", "mediano", 1000)
};
espuelas();
function sombreros(){
    class hats {
        constructor(material, type, size, price){
            this.material = material;
            this.tipo = type;
            this.tamaño = size;
            this.precio = price;
        }
    }
    const hat1 = new hats ("straw", "texana", "grande", 280);
    const hat2 = new hats ("straw", "texana", "mediano", 260);
    const hat3 = new hats ("canvas", "texana", "grande", 1000);
    const hat4 = new hats ("canvas", "texana", "mediana", 1800);
    const hat5 = new hats ("canvas", "malvoro", "mediana", 2800);
    const hat6 = new hats ("fieltro", "texana", "grande", 1300);
    const hat7 = new hats ("fieltro", "texana", "mediano", 1800);
};
sombreros();
function votas(){
    class boots{
        constructor(material, cut, type, price){
            this.material = material;
            this.corte = cut;
            this.tipo = type;
            this.price = price;
        }
    }
    const boot1 = new boots ("piel", "alto", "votas", 1300);
    const boot2 = new boots ("mantarraya", "alto", "votas", 4000);
    const boot3 = new boots ("anguila")
}