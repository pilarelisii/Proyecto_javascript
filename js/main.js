//creadno objeto vehiculo
class Vehiculo {
	constructor(pId, pKilometros, pAño, pMarca, pPatente, pSumaAsegurada) {
	this.id = pId;
	this.kilometros = pKilometros;
	this.año = pAño;
	this.marca = pMarca;
	this.patente = pPatente;
	this.sumaAsegurada = pSumaAsegurada;
	}
}

pId = 0;
let polizasCotizadas = [];

function ponerPolizas() {
	let polizas = document.getElementsByClassName("polizas");
	for (let poliza of polizasCotizadas) {
		let p = document.createElement("p");
		p.innerHTML = poliza;
		polizas.appendChild(p);
	}
}
while (true) {

	pKilometros = parseInt(prompt("Ingresar kilometros:"));
	pAño = parseInt(prompt("Ingresar año:"));
	pMarca = prompt("Ingresar marca:");
	pPatente = prompt("Ingresar patente:");
    pSumaAsegurada =  parseInt(prompt("Ingresar valor"));
	pId++;

	let vehiculoActual = new Vehiculo(pId, pKilometros, pAño, pMarca, pPatente, pSumaAsegurada);


	function calcularPoliza() {

		resCivil = 100;
		tasaCasco = 1.5;
		impuesto = 0.21;
		let prima = resCivil + ((vehiculoActual.sumaAsegurada / 1000) * tasaCasco);
		let premio = prima + (impuesto * prima);

		let datosVehiculo = 'ID: '+vehiculoActual.id+' - Marca: '+vehiculoActual.marca+' - Patente: '+vehiculoActual.patente+' - Poliza: $'+premio;
		polizasCotizadas.push(datosVehiculo);
		
	}

	calcularPoliza();	

	var mostrarPolizas = prompt("Para seguir registrando vehiculos escribir 's', para confirmar y mostrar lo registrado apretar 'c'.");

	if (mostrarPolizas == "s" || mostrarPolizas == "S") {
		continue;
	} else if (mostrarPolizas == "c" || mostrarPolizas == "C") {
		ponerPolizas();
		break;
	} 
}
