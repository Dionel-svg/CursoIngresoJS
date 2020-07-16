/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	let sueldo;
	let descuento;
	let nuevosueldo;

	sueldo = document.getElementById("txtIdImporte").value;

	sueldo = parseInt(sueldo);
	
	 
	nuevosueldo = sueldo * 25 / 100;

	descuento = sueldo - nuevosueldo;
	
	document.getElementById("txtIdResultado").value = descuento;
}
