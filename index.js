
//import 


const suma = require("./Modulos/Suma");
const resta = require("./Modulos/Resta");
const multiplicar = require("./Modulos/Multiplicacion");
const dividir = require("./Modulos/Division");
const path = require("path");
const bodyParser = require("body-parser");

/*console.log(suma(50,60));
console.log(resta(60,50));
console.log(multiplicar(2,5));
console.log(dividir(20,5));*/


// Paso No. 1: importar la libreria express 
// npn install express

const express = require("express");

//Paso No. 2: Instanciar un objeto de tipo server/aplicacion a partir de express
const app = express();

//establecer un medleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Paso NO. 3: Decalar una vairable que guarde el puerto 
const port = 3000;


//Paso No. 4: Crear una ruta HTTP
app.get("/", (req, res) => {
    //res.send("hola mundo");
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});
//colback funtion 
app.get("/suma/:NumeroA/:NumeroB", (req, res) => {
    // console.log(req.params.NumeroA);

    //get parametros 

     let NumA = parseFloat(req.params.NumeroA);
     let NumB = parseFloat(req.params.NumeroB);
 
     // get calculos  de la suma 
     let result = suma(NumA, NumB); 
     console.log(result);
 
     res.status(200).json(result);


});
//Post
app.post("/sumar", (req, res) => {
    console.log(req.body.a);
    console.log(req.body.b);

    let NumA = parseFloat(req.body.NumA);
    let NumB = parseFloat(req.body.NumB);

    let result = suma(NumA, NumB);
    res.status(200).json(result);
});

//Post-ejercicio
app.post("/sumando", (req, res)=>{
    console.log(req.body.Num_1);
    console.log(req.body.Num_B);

    let Num_1 = parseFloat(req.body.Num_1);
    let Num_2 = parseFloat(req.body.Num_2);
    
    let result = suma(Num_1, Num_2);
    res.status(200).json(result)
});

//Inicializar el listener del servidor 

app.listen(port, () => {
    console.log("Server Start on http://localhost:" + port);
});



