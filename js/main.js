//CAMBIO DE SELECT CON DATOS DE JSON
const URLJSON_Autos = "data/dataAutos.json";

$(document).ready(function(){
	cargarJsonData("marca");
	function cargarJsonData(id, padre_id) {
		let codigoHTML = "";
		$.getJSON(URLJSON_Autos, function(data){
			codigoHTML += "<option value=''>"+id+"</option>";
			$.each(data, function(key, value){
				if ( id == "marca"){
					if (value.padre_id == "0"){
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				} else {
					if (value.padre_id == padre_id) {
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				}
			});
			$("#"+id).html(codigoHTML)
		});
	}
	$(document).on("change", "#marca", function(){
		let marcaAutos_id = $(this).val();
		if ( marcaAutos_id != ""){
			cargarJsonData("modelo", marcaAutos_id);
		} else {
			$("#modelo").html("<option value=''>Seleccionar modelo</option>")
		}
	});
});
//moto select
const URLJSON_Motos = "data/dataMotos.json";

$(document).ready(function(){
	cargarJsonData("marcaMoto");
	function cargarJsonData(id, padre_id) {
		let codigoHTML = "";
		$.getJSON(URLJSON_Motos, function(data){
			codigoHTML += "<option value=''>"+id+"</option>";
			$.each(data, function(key, value){
				if ( id == "marcaMoto"){
					if (value.padre_id == "0"){
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				} else {
					if (value.padre_id == padre_id) {
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				}
			});
			$("#"+id).html(codigoHTML)
		});
	}
	$(document).on("change", "#marcaMoto", function(){
		let marcaMoto_id = $(this).val();
		if ( marcaMoto_id != ""){
			cargarJsonData("modeloMoto", marcaMoto_id);
		} else {
			$("#modeloMoto").html("<option value=''>Seleccionar modelo</option>")
		}
	});
});
//bicileta select
const URLJSON_Bicicleta = "data/dataBicicletas.json";

$(document).ready(function(){
	cargarJsonData("marcaBicicleta");
	function cargarJsonData(id, padre_id) {
		let codigoHTML = "";
		$.getJSON(URLJSON_Bicicleta, function(data){
			codigoHTML += "<option value=''>"+id+"</option>";
			$.each(data, function(key, value){
				if ( id == "marcaBicicleta"){
					if (value.padre_id == "0"){
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				} else {
					if (value.padre_id == padre_id) {
						codigoHTML += "<option value='"+value.id+"'>"+value.nombre+"</option>"
					}
				}
			});
			$("#"+id).html(codigoHTML)
		});
	}
	$(document).on("change", "#marcaBicicleta", function(){
		let marcaBicicleta_id = $(this).val();
		if ( marcaBicicleta_id != ""){
			cargarJsonData("modeloBicicleta", marcaBicicleta_id);
		} else {
			$("#modeloBicicleta").html("<option value='' selected disabled>Seleccionar modelo</option>")
		}
	});
});
//CAMBIO DE FORMULARIOS
const selecSeguros = document.querySelectorAll(".selecSeguros .selec");
const contenedorFormulario = document.querySelectorAll('.form');
let formActivo = null;

selecSeguros.forEach((selec) => {
	selec.addEventListener('click', (e) => {
		selecSeguros.forEach((elemento) => {
			elemento.classList.remove('activo');
		});

		e.currentTarget.classList.toggle('activo');
		formActivo = selec.dataset.selec;

		contenedorFormulario.forEach((formulario) => {
			if(formulario.dataset.selec === formActivo){
				formulario.classList.add('activo');
			} else {
				formulario.classList.remove('activo');
			}
		});
	});
});
//OBJETOS
class Vehiculo {
	constructor(pId, pKilometros, pAño, pMarca, pModelo, pPatente, pSumaAsegurada) {
	this.id = pId;
	this.kilometros = pKilometros;
	this.año = pAño;
	this.marca = pMarca;
	this.modelo = pModelo;
	this.patente = pPatente;
	this.sumaAsegurada = pSumaAsegurada;
	}
}
class Moto {
	constructor(pId, pKilometros, pAño, pMarca, pModelo, pPatente, pSumaAsegurada) {
		this.id = pId;
		this.kilometros = pKilometros;
		this.año = pAño;
		this.marca = pMarca;
		this.modelo = pModelo;
		this.patente = pPatente;
		this.sumaAsegurada = pSumaAsegurada;
	}
}
class Bicicleta {
	constructor(pId, pMarca, pModelo, pRodado, pFecha, pSumaAsegurada) {
		this.id = pId;
		this.marca = pMarca;
		this.modelo = pModelo;
		this.rodado = pRodado;
		this.año = pFecha;
		this.sumaAsegurada = pSumaAsegurada;
	}
}

pId = 0;
let polizasCotizadas = [];

//FORMULARIO AUTO
function agregarPolizas_Auto() {
	let pKilometros = $("#kilometros").val(),
	pAño = $("#año").val(),
	pMarca = $('select[name="marca"] option:selected').text(),
	pModelo = $('select[name="modelo"] option:selected').text(),
	pPatente = $("#patente").val(),
	pSumaAsegurada = $("#valor").val();

	while (true) {
	pId++;
	let vehiculoActual = new Vehiculo(pId, pKilometros, pAño, pMarca, pModelo, pPatente, pSumaAsegurada);
	
	function calcularPoliza_Auto() {
		let resCivil = 100,
		tasaCasco = 1.5,
		impuesto = 0.21;
		let prima = resCivil + ((vehiculoActual.sumaAsegurada / 1000) * tasaCasco);
		let premio = prima + (impuesto * prima);
	
		let datosVehiculo = ('ID: '+vehiculoActual.id+' || Marca: '+vehiculoActual.marca+' - Modelo: '+vehiculoActual.modelo+' - Año: '+vehiculoActual.año+' - Patente: '+vehiculoActual.patente+'- Poliza: $'+premio);
		polizasCotizadas.push(datosVehiculo);
	}
	
	calcularPoliza_Auto();
	document.getElementById("formulario").reset();
	break;
	}
}

document.getElementById("btnAgregar_Autos").onclick = () => {
	polizasCotizadas.pop();
	agregarPolizas_Auto();
	for(const polizas of polizasCotizadas) {
		$(".poliza").append(`<div> ${polizas} </div>`)
	}
}

//FORMULARIO MOTO
function agregarPolizas_Moto() {
	let pKilometros = $("#kilometrosMoto").val(),
	pAño = $("#añoMoto").val(),
	pMarca = $('select[name="marcaMoto"] option:selected').text(),
	pModelo = $('select[name="modeloMoto"] option:selected').text(),
	pPatente = $("#patenteMoto").val(),
	pSumaAsegurada = $("#valorMoto").val();

	while (true) {
	pId++;
	let motoActual = new Moto(pId, pKilometros, pAño, pMarca, pModelo, pPatente, pSumaAsegurada);
	
	function calcularPoliza_Moto() {
		let resCivil = 100,
		tasaCasco = 1.5,
		impuesto = 0.21;
		let prima = resCivil + ((motoActual.sumaAsegurada / 1000) * tasaCasco);
		let premio = prima + (impuesto * prima);
	
		let datosMoto = ('ID: '+motoActual.id+' || Marca: '+motoActual.marca+' - Modelo: '+motoActual.modelo+' - Año: '+motoActual.año+' - Patente: '+motoActual.patente+'- Poliza: $'+premio);
		polizasCotizadas.push(datosMoto);
	}
	
	calcularPoliza_Moto();
	document.getElementById("formularioMoto").reset();
	break;
	}
}
document.getElementById("btnAgregar_Motos").onclick = () => {
	polizasCotizadas.pop();
	agregarPolizas_Moto();
	for(const polizas of polizasCotizadas) {
		$(".poliza").append(`<div> ${polizas} </div>`)
	}
}

//FORMULARIO BICICLETA
function agregarPolizas_Bicicleta() {
	let pMarca = $("select[name='marcaBicicleta'] option:selected").text(),
	pModelo = $("select[name='modeloBicicleta'] option:selected").text(),
	pRodado = $("#rodado").val(),
	pFecha = $("#añoBicicleta").val(),
	pSumaAsegurada = $("#sumaAsegurada_bicicleta").val();

	while (true) {
		pId++;
		let bicicletaActual = new Bicicleta(pId, pMarca, pModelo, pRodado, pFecha, pSumaAsegurada);
		
		function calcularPoliza_Bicicleta() {
			let resCivil = 100,
			tasaCasco = 1.5,
			impuesto = 0.21;
			let prima = resCivil + ((bicicletaActual.sumaAsegurada / 1000) * tasaCasco);
			let premio = prima + (impuesto * prima);
		
			let datosBicicleta = ('ID: '+bicicletaActual.id+' || Marca: '+bicicletaActual.marca+' - Modelo: '+bicicletaActual.modelo+' - Rodado: '+bicicletaActual.rodado+' - Compra: '+bicicletaActual.fecha+' - Poliza: $'+premio);
			polizasCotizadas.push(datosBicicleta);
		}

		calcularPoliza_Bicicleta();
		document.getElementById("formularioBicicleta").reset();
		break;
	}
}
document.getElementById("btnAgregar_Bicicleta").onclick = () => {
	polizasCotizadas.pop();
	agregarPolizas_Bicicleta();
	for(const polizas of polizasCotizadas) {
		$(".poliza").append(`<div> ${polizas} </div>`)
	}
}
//DATOS DEL VENDEDOR
class Vendedor {
	constructor(pNombre, pApellido, pEmail, pCodigo){
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.email = pEmail;
		this.codigo = pCodigo;
	}
}
function guardarLocal() {
	let pNombre = $("#nombre").val(),
	pApellido = $("#apellido").val(),
	pEmail = $("#email").val(),
	pCodigo = $("#vendedor").val();

	vendedorActual = new Vendedor(pNombre, pApellido, pEmail, pCodigo);

	localStorage.setItem("nombre-vendedor", vendedorActual.nombre);
	localStorage.setItem("apellido-vendedor", vendedorActual.apellido);
	localStorage.setItem("email-vendedor", vendedorActual.email);
	localStorage.setItem("codigo-vendedor", vendedorActual.codigo);
}
document.getElementById("datosVendedor").onclick = () => guardarLocal();

function cargarLocal () {
	let nomVendedor = localStorage.getItem("nombre-vendedor"),
	apellVendedor = localStorage.getItem("apellido-vendedor"),
	contactoVendedor = localStorage.getItem("email-vendedor"),
	codVendedor = localStorage.getItem("codigo-vendedor");

	$("#contVendedor").append(
		(`Nombre: ${nomVendedor} || Apellido: ${apellVendedor} || Contacto: ${contactoVendedor} || Codigo: ${codVendedor}`)
	)
}
document.getElementById("cargarDatos").onclick = () => cargarLocal();
cargarLocal();