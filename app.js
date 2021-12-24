const express = require ("express");
const app = express ();

const path = require ("path");


const port = 3030;

const publicPath = path.resolve("./public");
app.use( express.static(publicPath) );

app.listen (port, () => {
    console.log ("Estamos corriendo el puerto " + port)
})

app.get ("/home", (req,res) =>{
    res.sendFile(path.resolve ("./views/home.html"));
})