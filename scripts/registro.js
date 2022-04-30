let contenedor = document.createElement("div");
contenedor.id = "listar";
contenedor.class = "container w-50"
document.body.appendChild(contenedor);

let Personas = [];
//let lista = document.getElementById('listar');
let btnEnviar = document.getElementById('.btn-primary');
let formulario = document.getElementById('form');

formulario.addEventListener('submit', prueba);

function prueba(e) {
    e.preventDefault();
    subir();
  }

function subir() {
 
    let nombre = document.getElementById('nomb').value;
    let apellido = document.getElementById('ape').value;
    let telefono = document.getElementById('telf').value;
    let direccion = document.getElementById('direccion').value;
    let observacion = document.getElementById('observacion').value;

    if (isNaN(nombre)) {
        if (isNaN(apellido)) {
            agregarDatos(nombre, apellido, telefono, direccion, observacion);
            sendToLocalStorage(Personas);
            listarDatos();
            document.getElementById("mensaje").setAttribute("class", "alert-success");
            document.getElementById("mensaje").style.display = "block";
        } else {
            alert("solo se puede usar letras en apellido")
        }

    } else {
        alert("solo se puede usar letras en nombre")
    }

}


function agregarDatos(nombreU, apellidoU, telefonoU, direccionU, observacionU) {
    Personas.push({ nombreU, apellidoU, telefonoU, direccionU, observacionU })
}

function sendToLocalStorage(persona) {
    localStorage.setItem('persona prueba', JSON.stringify(persona))
}

function listarDatos() {

    contenedor.innerHTML = '';

    const arregloPersona = JSON.parse(localStorage.getItem('persona prueba'));

    arregloPersona.forEach(persona => {
        const { nombreU, apellidoU, telefonoU, direccionU, observacionU } = persona;
        contenedor.innerHTML += `
    <table class="table table-striped">
    <thead class="thead-inverse">
    
    <tr>
    <td>Nombre</td>
    <td>Apellido</td>
    <td>Telefono</td>
    <td>Direccion</td>
    <td>Observaciones</td>
    </tr>

    </thead>
    <tbody>
    <tr>

        <td>${nombreU}</td>
        <td>${apellidoU}</td>
        <td>${telefonoU}</td>
        <td>${direccionU}</td>
        <td>${observacionU}</td>

    </tr>
    </tbody
    </table>
    `
    })
}