/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centigrados = 5/9 * (fahrenheit - 32);

    alert(fahrenheit + " Fahrenheit son " + centigrados.toFixed(2) + " grados centígrados");

}

function CentigradosFahrenheit () 
{
	let fahrenheit;
    let centigrados;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = 9/5 * centigrados + 32;

    alert(centigrados + " centígrados son " + fahrenheit.toFixed(2) + " grados Fahrenheit");

}
