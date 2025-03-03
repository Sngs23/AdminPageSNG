import { stat } from "fs";
import bcryptjs from "bcryptjs";

const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]


async function login(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
}

async function register(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        return res.status(400).send({status: "Error",message: "Campos incompletos"})
    }
    const usuarioArevision = usuarios.find(usuario => usuario.user === user);
    if (usuarioArevision){
        return res.status(400).send({status: "Error",message: "Usuario ya existe"})
    }     
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password,salt);
    const nuevoUsuario ={
        user, email, password: hashPassword
    }
    console.log(nuevoUsuario);
    usuarios.push(nuevoUsuario);
    return res.status(201).send({status:"ok", message: "Usuario ${nuevoUsuario.user}agregado",redirect:"/"});
}

export const methods={
    login,
    register
}