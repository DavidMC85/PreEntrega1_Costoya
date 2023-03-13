const OPERACIONES = {
  SUMA: "+",
  RESTA: "-",
  MULTIPLICACION: "*",
  DIVISION: "/"
}

const SALUDOS = {
  TEMPRANO: "Buenos dias!",
  TARDE: "Buenas tardes!",
  NOCHE: "Buenas nochieeess!"
}

const HORA_TEMPRANO_MAX = 12;
const HORA_TARDE_MAX = 19;
const HORA_NOCHE_MAX = 24;

let valorVisor = 0;
let numeroA;
let numeroB;
let operacion;
let ahora = new Date();

// Función para solicitar el nombre del usuario
function obtenerNombreUsuario() {
  let nombreUsuario = localStorage.getItem("nombreUsuario");
  if (!nombreUsuario) {
    nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    localStorage.setItem("nombreUsuario", nombreUsuario);
  }
  return nombreUsuario;
}

// Obtener el nombre del usuario y mostrar el saludo
let nombreUsuario = obtenerNombreUsuario();
alert("Bienvenido a mi pequeña calculadora, " + nombreUsuario + "!");
console.log("Al fin alguien me va a usar!!");

// reset del nombre
window.addEventListener("beforeunload", function (event) {
  localStorage.removeItem("nombreUsuario");
});

window.onload = inicio;

function inicio(){
    document.getElementById('visor').value = '';
}
function boton(tecla) {
  let auxiliar = document.getElementById("visor").value;
  document.getElementById("visor").value = auxiliar + tecla;

  valorVisor = document.getElementById("visor").value = auxiliar + tecla;


}

function btn_suma(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES.SUMA;
  limpar();
}

function btn_resta(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES.RESTA;
  limpar();
}

function btn_multiplicacion(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES.MULTIPLICACION;
  limpar();
}

function btn_division(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES.DIVISION;
  limpar();
}

function reset() {
  document.getElementById('visor').value = '';
  valorVisor = 0;
  operacion = '';
}

function limpar() {
  document.getElementById('visor').value = '';
}

function btn_igual() {
  numeroB = valorVisor;
  resultado();
}

function resultado() {
  let total = 0;
  let ultimoTotal = 0;

  if (operacion === "+") {
    total = Number(numeroA) + Number(numeroB);
  } else if (operacion === "-") {
    total = Number(numeroA) - Number(numeroB);
  } else if (operacion === "*") {
    total = Number(numeroA) * Number(numeroB);
  } else if (operacion === "/") {
    total = Number(numeroA) / Number(numeroB);
  }

  ultimoTotal = total;
  reset();
  document.getElementById('visor').value = total;
  valorVisor = ultimoTotal;
}
