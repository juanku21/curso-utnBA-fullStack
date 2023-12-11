
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let form = document.getElementById("form");
    if (email=="admin@estilorelax.com" && pass=="12345678"){
        location.href = "../pages/admin.html";
    }
    else{
        form.reset();
        let errorMsj = document.createElement("p");
        errorMsj.innerText = "El e-mail o la contraseña ingresados son incorrectos";
        let conteinerError = document.createElement("div");
        conteinerError.appendChild(errorMsj);
        conteinerError.style.width = "30%";
        conteinerError.style.height = "36px";
        conteinerError.classList.add("mensaje-error")
        form.appendChild(conteinerError);
    }
}

