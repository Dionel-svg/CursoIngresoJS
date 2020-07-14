/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	//guardar en la variable nombre el texto que escribio en usuario dentro de la ventana prompt

	nombre = prompt("Ingrese su nombre");

	//copio en nombre que tengo guardado en la variable nombre dentro de  la caja de texto embebida en la página  
	
	document.getElementById("txtIdNombre").value =nombre;



}

