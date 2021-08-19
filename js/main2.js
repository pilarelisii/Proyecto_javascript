//CLASE 6 complementario
class Estudiante {
    constructor(pId, pPromedio, pNombre, pMateria) {
		this.id = pId;
		this.promedio = pPromedio;
		this.nombre = pNombre;
		this.materia = pMateria;
		
	}
}

pId = 0;
var estudiantes = [];

while(true) {

	pNombre = prompt("Ingresar nombre: ");
    pMateria = prompt("Ingresar materia: ");
	pPromedio = calcPromedio();
	pId++

	function calcPromedio() {
		var sum = 0;
	    for (i = 0; i <= 3; i++) {
	        var nota = parseInt(prompt("Ingresar nota: "));
			sum = sum + nota;
	    }
		return promedio = sum / 4;
	}
    var estudianteActual = new Estudiante(pId, pPromedio, pNombre, pMateria);

	var datosAlumno = ("ID: "+estudianteActual.id+". Nombre: "+estudianteActual.nombre+". Materia: "+estudianteActual.materia+". Promedio: "+estudianteActual.promedio);
	estudiantes.push(datosAlumno);

	var confirmar = prompt("Si desea mostrar los alumnos y sus promedios apretar 'c' \n Si desea seguir registrando alumnos apretar 's'");
	if (confirmar == "c") {
		alert(estudiantes.join("\n")) ;
		break;

	} else {
		continue;
	}
}


// CLASE 1 DESAFIO, calcular días vividos (aproximado):
let año = prompt("Ingresar año de nacimiento:");

let total = 2021 - año;
let diasAprox = total * 365;

alert("Viviste un total de "+total+" años y aproximadamente "+diasAprox+" días");

//bucles, numeros sumandose
let sum = 0
for (let i = 1; i <= 3; i++) {
	
	let num = parseInt(prompt("Ingresar numero para sumar (son 3 numeros):"));
	sum = sum + num;
}
alert("La suma de los numeros ingresados es igual a: "+sum);

// Calculador de calificaciones CLASE 2

let nota = parseInt(prompt("Ingresar calificación:"));

if (nota <= 10 && nota >= 0) {

    if (nota <= 3) {

        alert("Nota: "+nota+". Calificación: muy mala (desaprobado).");

    } else if (nota > 3 && nota <= 6) {

        alert("Nota: "+nota+". Calificación mala (desaprobado).");

    } else if (nota > 6 && nota <= 8) {

        alert ("Nota: "+nota+". Calificación buena (aprobada).");

    } else if (nota > 8 && nota <= 10) {

        alert ("Nota: "+nota+". Calificación muy buena (aprobada).");

    }
} else {

    alert("La nota tiene que tener un valor entre el 0 y el 10");

}
// CLASE 4 y 3
//Todos los valores son hipoteticos, ya que se necesita acceder 
// a una base de datos para calcular correctamente el valor de una poliza.
var sumaAsegurada = parseInt(prompt("Ingresar precio del vehiculo para calcular valor de póliza:"));

function calcularPoliza() {
	let resCivil = 100;
	let tasaCasco = 1.5;
	let impuesto = 0.21;

	let prima = resCivil + ((sumaAsegurada / 1000) * tasaCasco);

	let premio = prima + (impuesto * prima);

	alert("Tu poliza tendria un costo aproximado de: $"+premio);
}

calcularPoliza();

//Calculo IVA 
let importe = 0, totalIVA = 0, totalMonto = 0;

function calcularIVA(){
	function monto() {
		importe = parseInt(prompt("Ingresar importe:"));
	}
	monto();
	
	totalIVA = importe * 0.21;
	totalMonto = importe + totalIVA;

	function mostrarTotal() {
		alert("El total con IVA("+totalIVA+" : importe IVA del 21%) es de $"+totalMonto)
	}
	mostrarTotal();
}

calcularIVA();
