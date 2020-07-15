/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;
	
	// viculo variable num1 con caja de texto

	num1 = document.getElementById("txtIdNumeroUno").value;

	//convierto num1 de texto a numero con parseInt --> "parsear"

	num1 = parseInt(num1);

	// o directamente lo puedo hacer asi--> num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = document.getElementById("txtIdNumeroDos").value;

	num2 = parseInt(num2);

	// una vez que que avise que los num son numeros los sumo y no lo concatena
	
	resultado = num1 + num2;

	// muestro el resultado concatedo con texto

	alert("La suma es  " + resultado);


} 
