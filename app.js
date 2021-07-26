const express = require("express")
const app = express()
const db =require("./db/database")


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Server run!")
})

db.authenticate().then(()=>{
    console.log("conexion a base exitosa!")
})