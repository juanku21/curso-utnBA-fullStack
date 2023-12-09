
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

let botonTurno = document.getElementById("botonTurno")
let turnos = [];

addEventListener("click", (e) => {
    e.preventDefault();

    const formTurno = document.getElementById("formTurno");

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const horario = document.getElementById("horario").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;

    let producto = {
        nombre: nombre,
        servicio: servicio,
        fecha: fecha,
        hora: horario,
        telefono: telefono,
        email: email,
    }

    turnos.push(producto);

    localStorage.setItem("Turnos", JSON.stringify(turnos));

    formTurno.reset();

})