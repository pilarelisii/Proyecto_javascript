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
class Vendedor {
	constructor(pNombre, pApellido, pEmail, pCodigo){
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.email = pEmail;
		this.codigo = pCodigo;
	}
}

let polizasCotizadas = [];
pId = 0;

function agregarPolizas() {
	let pKilometros = document.getElementById("kilometros").value,
	pAño = document.getElementById("año").value,
	pMarca = document.getElementById("marca").value,
	pPatente = document.getElementById("patente").value,
	pSumaAsegurada = document.getElementById("valor").value;

	while (true) {
	pId++;
	let vehiculoActual = new Vehiculo(pId, pKilometros, pAño, pMarca, pPatente, pSumaAsegurada);
	
	function calcularPoliza() {
		resCivil = 100;
		tasaCasco = 1.5;
		impuesto = 0.21;
		let prima = resCivil + ((vehiculoActual.sumaAsegurada / 1000) * tasaCasco);
		let premio = prima + (impuesto * prima);
	
		let datosVehiculo = ("ID: "+vehiculoActual.id+" || Marca: "+vehiculoActual.marca+" || Año: "+vehiculoActual.año+" || Patente: "+vehiculoActual.patente+" || Poliza: $"+premio);
		polizasCotizadas.push(datosVehiculo);
	}
	calcularPoliza();

	let formulario = document.getElementById("formulario");
	formulario.reset();
	break;
	}
}

function ponerPolizas() {
	document.getElementById("poliza").innerHTML=polizasCotizadas.join("</br>");
}
function mostrarCotizar() {
	let botonCotizar = document.getElementById("btnCotizar");
	botonCotizar.setAttribute("class", "btnCotizar showCotizar")
}

function confirmar(){
	agregarPolizas();
	ponerPolizas();
	mostrarCotizar();
}

let botonAgregar = document.getElementById("btnAgregar");
botonAgregar.onclick = () => agregarPolizas();
let botonConfirmar = document.getElementById("btnConfirmar");
botonConfirmar.onclick = () => confirmar();
let botonVendedor = document.getElementById("datosVendedor");
botonVendedor.onclick = () => guardarLocal();
let botonCargar = document.getElementById("cargarDatos");
botonCargar.onclick = () => cargarLocal();

function guardarLocal() {
	let pNombre = document.getElementById("nombre").value,
	pApellido = document.getElementById("apellido").value,
	pEmail = document.getElementById("email").value,
	pCodigo = document.getElementById("vendedor").value;

	vendedorActual = new Vendedor(pNombre, pApellido, pEmail, pCodigo);

	localStorage.setItem("nombre-vendedor", vendedorActual.nombre);
	localStorage.setItem("apellido-vendedor", vendedorActual.apellido);
	localStorage.setItem("email-vendedor", vendedorActual.email);
	localStorage.setItem("codigo-vendedor", vendedorActual.codigo);
}

function cargarLocal () {
	let nomVendedor = localStorage.getItem("nombre-vendedor"),
	apellVendedor = localStorage.getItem("apellido-vendedor"),
	contactoVendedor = localStorage.getItem("email-vendedor"),
	codVendedor = localStorage.getItem("codigo-vendedor");

	document.getElementById("contVendedor").append(
		("Nombre: "+nomVendedor+" || Apellido: "+apellVendedor+" || Contacto: "+contactoVendedor+" || Codigo: "+codVendedor)
	)
}

cargarLocal();