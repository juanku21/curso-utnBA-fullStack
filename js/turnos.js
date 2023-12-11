let botonTurno = document.getElementById("botonTurno")
let turnos = []

botonTurno.addEventListener("click", (e) => {
    
    e.preventDefault();

    let formTurno = document.getElementById("formTurno");

    let nombre = document.getElementById("nombre").value;
    let servicio = document.getElementById("servicio").value;
    let fecha = document.getElementById("fecha").value;
    let horario = document.getElementById("horario").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;

    let turno = "";
    
    if (nombre != "" && servicio != "" && fecha != "" && horario != "" && telefono != "") {
        turno = {
            nombre: nombre,
            servicio: servicio,
            fecha: fecha,
            hora: horario,
            telefono: telefono,
            email: email,
        }
    }
    else{
        alert("Complete los datos requeridos")
    }

    console.log(turno);

    formTurno.reset();
    
    turnos.push(turno);

    localStorage.setItem("Turno", JSON.stringify(turnos))

})

