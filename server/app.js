import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express() //iniando el servidorapp.use(express.json())

app.use(cors())
app.use(express.json())
const urlBD = 'mysql://root:mwhFopbWYLploeOwyZCyPXuuWSmknpoM@mysql.railway.internal:3306/railway'
const db = mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'mwhFopbWYLploeOwyZCyPXuuWSmknpoM',
    database: 'railway'
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database:'usuariosCrud'
})
app.post("/create",(req,res)=>{
    const nombre = req.body.nombre
    const contrasena = req.body.contrasena

    db.query('INSERT INTO usuarios(nombre, contrasena) VALUES(?,?)', [nombre,contrasena],
        (error,req)=>{
            if(error){
                console.log(error, 'hubo un error julian')
            }else{
                res.send('usuario registrado')
            }
        }
    )
})

export default app


