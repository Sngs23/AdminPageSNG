import { stat } from "fs";

const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]


async function login(req,res){

}

async function register(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        res.status(400).send({status: "Error",message: "Campos incompletos"})
    }
    const usuarioArevision = usuarios.find(usuario => usuario.user === user);
    if (usuarioArevision){
        res.status(400).send({status: "Error",message: "Usuario ya existe"})
    }     
}

export const methods={
    login,
    register
}