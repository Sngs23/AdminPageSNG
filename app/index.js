import express from "express";
import  path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./controllers/authenticationController.js";
//Server 
const app = express();

app.set("port",4000);
app.listen(app.get("port"));
console.log("server en puerto: ",app.get("port"));

//Configuracion

app.use(express.static(__dirname + "/public"));
app.use(express.json());


//Rutas
app.get("/",(req,res)=> res.sendFile( __dirname + "/pages/login.html"));
app.get("/register",(req,res)=> res.sendFile( __dirname + "/pages/register.html"));
app.get("/admin",(req,res)=> res.sendFile( __dirname + "/pages/admin/admin.html"));
app.post("/api/register",authentication.register);
app.post("/api/login",authentication.login);