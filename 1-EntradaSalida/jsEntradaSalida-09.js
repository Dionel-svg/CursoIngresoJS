/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto ""
let aumento;.*/
function mostrarAumento()
{

	let sueldo;
	let nuevosueldo;
	let aumento;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseFloat(sueldo);
	
	 
	aumento = sueldo * 10 / 100;

	nuevosueldo = sueldo + aumento;
	
	document.getElementById("txtIdResultado").value = nuevosueldo;
}
