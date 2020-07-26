function mostrar()
{
	let estado;
	let edad;

	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad<18 && estado!="Soltero"){
		
	alert("Es muy pequeño para No ser soltero");
		
	}
	


}