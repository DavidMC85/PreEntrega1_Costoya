const OPERACIONES = {
  SUMA: '+',
  RESTA: '-',
  MULTIPLICACION: '*',
  DIVISION: '/'
};

const SALUDOS = {
  TEMPRANPO: 'Buenos dias!',
  TARDE: 'Buenas tardes!',
  NOCHE: 'Buenas nochieee!'
};

const HORA_TEMPRANO_MAX = 12;
const HORA_TARDE_MAX = 19;
const HORA_NOCHE_MAX = 19;
const HORA_MAXIMA = 24;

var valorVisor = 0;
var numeroA;
var numeroB;
var operacion;
var ahora = new Date();

function boton(tecla) {
  var auxiliar = document.getElementById("visor").value;
  document.getElementById("visor").value = auxiliar + tecla;

  valorVisor = document.getElementById("visor").value = auxiliar + tecla;

  // saludos
  var hora = ahora.getHours();
  var hora = ahora.getHours();

  if (!localStorage.getItem("saludoMostrado")) {
    if (hora >= 0 && hora <= 12) {
      alert("Buenos dias!")
      console.log("Madrugó este..")
    } else if (hora >= 12 && hora <= 19) {
      alert("Buenas tardes!")
      console.log("Medio tarde arrancamos.. Como te llamas..? Ferran? xP");
    } else {
      alert("Buenas nochieee!")
      console.log("Me duermo...")
    }

    localStorage.setItem("saludoMostrado", "true");
  }
}

function btn_suma(caracter) {
  numeroA = valorVisor;
  operacion = SUMA;

  limpar();
}

function btn_resta(caracter) {
  numeroA = valorVisor;
  operacion = RESTA;

  limpar();
}

function btn_multiplicacion(caracter) {
  numeroA = valorVisor;
  operacion = MULTIPLICACION;

  limpar();
}

function btn_division(caracter) {
  numeroA = valorVisor;
  operacion = DIVISION;

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
  var total = 0;
  var ultimoTotal = 0;
  
  if (operacion === "+") {
    total = parseFloat(numeroA) + parseFloat(numeroB);
  } else if (operacion === "-") {
    total = parseFloat(numeroA) - parseFloat(numeroB);
  } else if (operacion === "*") {
    total = parseFloat(numeroA) * parseFloat(numeroB);
  } else if (operacion === "/") {
    total = parseFloat(numeroA) / parseFloat(numeroB);
  }
  
  ultimoTotal = total;
  reset();
  document.getElementById('visor').value = total;
  valorVisor = ultimoTotal;
}


