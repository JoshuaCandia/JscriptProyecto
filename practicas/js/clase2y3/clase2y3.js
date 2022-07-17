/*
if (true){
    alert("Es true!!")
}
if (false){
    alert("Es true!!")
}



let num6 = 140

if (num6>150){
    alert("El numero es mayor a 150")
}else{//Si no//
    alert("El numero es menor a 150")
}
*/

//let edad= prompt("ingrese su edad")

/*
//Ejemplo Basico de if and else//
let edad= prompt("Ingrese su edad") 

if(edad>18){
    alert("Puede ingresar")
}else if(edad < 18) {//si no.... si//
alert("No puede ingresar")
}else if(edad== 18){//si no.... si//
    alert("Tiene 18, Puede ingresar")
}else{//si no...//
    alert("No ingreso su edad")
}
*/


/*
//Parseo//

let a = "10"; //string

console.log(a + 10); //concatena

a = parseInt(a); //Lo pasamos a INT

console.log(a + 10); //Suma
a = parseFloat(a); //Lo pasamos a Float

console.log(a + 10.3); //Suma

//Ejemplo basico de Parseo

let edad = parseInt(prompt("Ingrese su edad"));

if (edad > 18) {
  alert("Puede ingresar");
} else if (edad < 18) {
  alert("No puede ingresar");
} else if (edad == 18) {
  alert("Tiene 18, Puede ingresar");
} else {
  alert("No ingreso su edad");
}
*/



/*
if (edad==18){} //un solo dato


//Variables Boolean

//AND &&
//Se tienen que cumplir todas las condiciones


//OLOR = blanco AND botones == true -> Control del aire
let esBlanco= true
let tieneBoton= true
if(esBlaanco && tieneBoton);


//OR / o ||
//Se tiene que cumplir una sola condicion

if(esBlaanco && tieneBoton);
*/

/*
//Ejemplo Basico de And && y Or || 
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+ nombreIngresado + "\nApellido: "+apellidoIngresado); 
    //      mje      +   variable     +     mje      +    variable
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/
/*
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMMA") || (nombreIngresado =="emma") || (nombreIngresado =="Emma"))){
    //                    AND                              OR                            OR
    alert("Hola Emma"); 
}else{
    alert("Error: Ingresar nombre valido");
}
*/

//              ----Clase 3----

/*
//FOR
//Mostrar un num desde el 0 hasta el 10
let num = 100;
num++ //Pasa a valer 101
// num++ es lo mismo que num + 1
// num-- es lo mismo que num - 1
*/


for (let i = 0; i <= 10;i++){
    alert(i)
}
