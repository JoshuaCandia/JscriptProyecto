/*
let oneNumber = 20

//Si la variable es TRUE se ejecuta la instruccion
if (oneNumber == 20){
    alert("El numero es igual a 20")
}

//Si la variable es FALSE no se ejecuta
if (oneNumber == 25){
    alert("El numero no es igual a 25")
}
*/


//         IF y ELSE sin anidamiento


/*
let userName = prompt("Ingrese el nombre de usuario")

if (userName == undefined){
    alert("Lo sentimos, no ingreso un nombre de usuario")
}else{
    alert("Bienvenido,"+userName)
}
*/



//      CONDICIONES ANIDADAS if else if

/*
let price = prompt("Ingrese pago de 250 pesos");

if (price == 250) {
  alert("Pago procesado");
} else if (price > 250) {
  alert("El pago es mayor a 250, porfavor pague con la cantidad  justa");
} else if (price < 250) {
  alert("El pago es menor a 250, porfavor complete la cantidad solicitada");
}
*/



//                            VARIABLES BOOLEAN true or false
/*
let  oneNumber = 55

let isMinor50= (oneNumber < 50)

if (isMinor50){
    alert ("Is boolean true")
}else{
    alert("Is bolean false")
}
*/


//                     CONDICIONES CON AND (&&) todas las comparaciones deben ser verdaderas

/*
let fullName = prompt("Ingrese su nombre completo");
let idNumber =prompt("Ingrese su DNI")

if ((fullName !="") && (idNumber !="")){
    alert("Nombre completo:" + " " + fullName+ "\nnumero de DNI:"+" " + idNumber);
}else("ERROR: Ingrese los datos requeridos")
*/



//                     CONDICIONES CON OR ( || ) una comparacion debe ser verdadera
/*
let userName = prompt("Ingrese su nombre de usuario")

if ((userName =="Ana") ||  (userName == "ana")){
    alert("Bienvenida Ana");
}else{
    alert("Ingrese un usuario valido");}
*/


    //                  COMBINACION DE OPERADORES OR Y AND

   /* 
let userName = prompt ("Ingrese nombre de usuario")


if ((userName !="") && ((userName == "JOSHUA") || (userName =="joshua") || (userName =="Joshua"))){
    alert("Bienvenido Joshua");
}else{
    alert("Ingrese nombre de usuario valido");
}
*/


//                 PRACTICA SOLICITAR LOGIN

/*
let userName = prompt ("Ingrese nombre de usuario")


if ((userName !="") && ((userName == "JOSHUA") || (userName =="joshua") || (userName =="Joshua"))){
    let password = prompt("Ingrese Contraseña")

    if((password !="") && ((password == 35795128) || (password == 321456))){
        alert("Bienvenido Joshua")
    }else{
        alert("contraseña no valida")
    }
}else{
    alert("Ingrese nombre de usuario valido");
}
*/