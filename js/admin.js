
let actTurno = document.getElementById("actTurno");

let turnos = localStorage.getItem("Turno");
turnos = JSON.parse(turnos);
console.log(turnos);

actTurnos.addEventListener("click", (e) => {

    e.preventDefault();

    let conteinerTabla = document.getElementById("conteinerTabla");
    
    for (let i = 0; i < turnos.length; i++) {
        const element = turnos[i];
        
        let filaTabla = document.createElement("tr")
        
        let nombre = document.createElement("td");
        nombre.innerHTML = element.nombre;
        nombre.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(nombre);

        let servicio = document.createElement("td");
        servicio.innerHTML = element.servicio;
        servicio.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(servicio);

        let fecha = document.createElement("td");
        fecha.innerHTML = element.fecha;
        fecha.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(fecha);

        let hora = document.createElement("td");
        hora.innerHTML = element.hora;
        hora.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(hora);

        let telefono = document.createElement("td");
        telefono.innerHTML = element.telefono;
        telefono.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(telefono);

        let email = document.createElement("td");
        email.innerHTML = element.email;
        email.classList.add("whitespace-nowrap", "px-6", "py-4");
        filaTabla.appendChild(email);

        filaTabla.classList.add("border-b", "transition", "duration-300",
        "ease-in-out", "hover:bg-neutral-100", 
        "dark:border-neutral-500", "dark:hover:bg-neutral-600");
    
        conteinerTabla.appendChild(filaTabla);
    }

    localStorage.clear();

})

