/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	// declaracion de variable

	let nombre;

	let edad;

	// asignacion de valores a las variables

	nombre = document.getElementById("txtIdNombre").value;
	
	edad = document.getElementById("txtIdEdad").value;

	// concatenacion de literal de cadenas y variables
	
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	// otra forma -->  alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}

