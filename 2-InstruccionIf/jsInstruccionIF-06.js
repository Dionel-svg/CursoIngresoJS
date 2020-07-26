function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=13 && edad <=17)
	
  {
	  
	alert("Es adolescente");
  }
if(edad<13){
	alert("Es niño");
}
else{
	alert("Es mayor de edad");
}

}