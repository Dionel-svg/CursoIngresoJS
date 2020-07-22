/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let Ancho;
    let Largo;
    let perimetro;
    let cantidadAlambre;

    Ancho = parseFloat(document.getElementById("txtIdLargo").value);

    Largo = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (2 * Ancho) + (2 * Largo);

    cantidadAlambre = perimetro * 3;

    alert("La cantidad de alambre necesario es " + cantidadAlambre )

}
function Circulo () 
{
    let radio;
    const PI = Math.PI;
    let cantidadAlambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    cantidadAlambre = 3 * perimetro;

    alert("La cantidad de alambre necesario es " + cantidadAlambre.toFixed(2));



}
function Materiales () 
{
    
    let Largo;
    let Ancho;
    let area;
    let cemento;
    let cal;


    Ancho = parseFloat(document.getElementById("txtIdLargo").value);

    Largo = parseFloat(document.getElementById("txtIdAncho").value);

    area = Ancho * Largo;

    cemento = area * 2;

    cal = area * 3;

   alert("Para un contrapiso de " + area + " m2 necesito comprar " + cemento + " bolsa de cemento y " + cal + " bolsas de cal.");
   
   // o

   //alert(`Para un contrapiso de ${area} m2 necesito comprar ${cemento} bolsa de cemento y ${cal} bolsas de cal`);



}