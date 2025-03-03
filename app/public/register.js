const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log();
    const res = await fetch("http://localhost:4000/api/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value,
            email:e.target.children.email.value,
            password:e.target.children.password.value
        })
    });
    if(!res.ok) return mensajeError.classList.toggle("hidden",false);
    const resJson = await res.json();
    if (resJson.redirect){
        window.location.href = resJson.redirect;
    }
})