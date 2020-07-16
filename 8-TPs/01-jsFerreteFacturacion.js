/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
    
	

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
	suma = (precio1 + precio2 + precio3);

	alert("La suma es $" + suma.toFixed(2));
	
}
function Promedio () 
{
    
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;
	

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
    suma = (precio1 + precio2 + precio3);
    
    promedio = suma / 3;

	alert("El promedio es $" + promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let PrecioFinal;
	

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	
    suma = (precio1 + precio2 + precio3);
    
    promedio = suma / 3;

    precioFinal = suma + (suma * 21/100);

	alert("El precio final es $" + precioFinal.toFixed(2));
	
	
}