// punto 1

// let ingresar = parseInt(prompt("ingresa un numero"))

// for(let i = 1; i <= 10; i++){
//     let multiplo = ingresar*i
//     console.log(multiplo)
// } 

//punto 2


// let suma = 0
// let num

// while(true){
//     let num = parseInt(prompt("ingresa un numero"))

//     if(num == 0){
//         break
//     }else{
//        suma = suma + num
//        console.log(suma)
//     }

  
// }

//punto3 

// let numeroSecreto = 43

// for(let i = 0; i < 100000; i++){
//     let ingresar = parseInt(prompt("Adivine el numero del 1 al 100"))
//     if(numeroSecreto<ingresar){
//         alert("El numero ingresado es mayor")
//     }else if(numeroSecreto>ingresar){
//         alert("El numero ingresado es menor")
//     }else{
//         alert(`Felicidades ganaste, lo intentaste ${i+1} veces hasta ganar :D`)
//         break
//     }
// }

//punto 4

// function esPrimo(numero) {

//     if (numero <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {

//             return false;
//         }
//     }

//     return true;
// }


// let numero = parseInt(prompt("ingresa un numero"));
// if (esPrimo(numero)) {
//     console.log(`${numero} es un número primo.`);
// } else {
//     console.log(`${numero} no es un número primo.`);
// }

// punto 5

// // Solicitar al usuario que ingrese un número
// let numero = parseInt(prompt("Introduce un número:"));

// // Crear una lista para almacenar los divisores
// let divisores = [];

// // Iterar desde 1 hasta el número dado
// for (let i = 1; i <= numero; i++) {
//     // Si el número actual divide al número dado sin dejar residuo, es un divisor
//     if (numero % i === 0) {
//         divisores.push(i);
//     }
// }

// // Mostrar los divisores
// console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array.

// // Definir un array con 10 elementos
// let miArray = [12, 45, 78, 34, 23, 56, 89, 90, 67, 10];

// // Recorrer el array y mostrar cada elemento en la consola
// for (let i = 0; i < miArray.length; i++) {
//     console.log(`Elemento ${i + 1}: ${miArray[i]}`);
// }

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.

// // // Definir un array con 10 elementos
// let miArray = [12, 45, 78, 34, 23, 56, 89, 90, 67, 10];

// // // Recorrer el array y mostrar cada elemento en la consola
// for (let i = 0; i < miArray.length; i++) {
//    console.log(`Elemento ${i + 1}: ${miArray[i]*2}`);
// }

// punto 8

// let persona1 = {
//     nombre:"Daniel",
//     edad:43,
//     altura:160,
//     papel:"Padre"
// }
// let persona2 = {
//     nombre:"Mariana",
//     edad:42,
//     altura:158,
//     papel:"Madre"
// }

// let persona3= {
//     nombre:"Samuel",
//     edad:5,
//     altura:100,
//     papel:"hijo"
// }

// let persona4 = {
//     nombre:"Tadiana",
//     edad:33,
//     altura:140,
//     papel:"tia"
// }
// let persona5 = {
//     nombre:"Fernando",
//     edad:63,
//     altura:140,
//     papel:"abuelo"
// }


// let familia = [persona1, persona2, persona3, persona4, persona5]

// for(let i = 0; i < familia.length; i++){
//     let presentacion = `Mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años, soy ${familia[i].papel} y mido ${familia[i].altura}cm`
//     console.log(presentacion)
// }

//punto 9

// let array = [11,31,11,43,12,31,40,45,98,13]
// let impares = []
// for(let i = 0; i < array.length; i++){

//     let residuo = array[i] % 2
//     if(residuo == 0){
//     }else{
//         impares[i] = array[i]
//     }
// }
// console.log(impares)

//punto 10 Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.


// let array = []

// for(let i = 0; i < 100000; i++){
//     let numero = parseInt(prompt("ingresa un numero"))
//     array[i] = numero
    
//     if(numero == 0){
//         console.log(array)
//         break
//     }
    
// }

// let suma = 0
// for(let i = 0; i < array.length; i++){

//     let residuo = array[i] % 2
//     if(residuo == 0){

//     }else{

//         suma = suma + array[i]
//     }
// }
// console.log(suma)

// let suma2 = 0
// for(let i = 0; i < array.length; i++){

//     let residuo = array[i] % 2
//     if(residuo == 0){
//         suma2 = suma2 + array[i]
//     }
//     else{
       
//     }
// }
// console.log(suma2)

//punto 11 

// let array = [1,34,54,12,42,12,76,45,34,57]
// let numeroMayor = Math.max(...array)
// console.log(numeroMayor)

//punto 12

// let array = [1,34,54,12,42,12,76,45,34,57]
// let numeroMayor = Math.min(...array)
// console.log(numeroMayor)

// punto 13

// let player1 = prompt("Nombre player 1")
// let player2 = prompt("Nombre player 2")

// let elegir1 = prompt("Player 1, Piedra, papel o tijeras").toUpperCase()
// let elegir2 = prompt("Player 2, Piedra, papel o tijeras").toUpperCase()


// if((elegir1 == "TIJERAS" && elegir2 == "PAPEL") || (elegir1 == "PIEDRA" && elegir2 == "TIJERA") || (elegir1 == "PAPEL" && elegir2 == "PIEDRA")){
//     alert(`El jugador ${player1} gano`)
// }
// else if((elegir2 == "TIJERAS" &&elegir1 =="PAPEL")||(elegir2 == "PIEDRA" && elegir1 == "TIJERA") || (elegir2 == "PAPEL" && elegir1 == "PIEDRA")){
//     alert(`El jugador ${player2} gano`)
// }
// else if((elegir2 == "TIJERAS" &&elegir1 =="TIJERAS")||(elegir2 == "PIEDRA" && elegir1 == "PIEDRA") || (elegir2 =="PAPEL" && elegir1 == "PAPEL")){
//     alert("Sigan jugando, hubo un empate")
//     while(true){
//         let elegir1V2 = prompt("Player 1, Piedra, papel o tijeras").toUpperCase()
//         let elegir2V2 = prompt("Player 2, Piedra, papel o tijeras").toUpperCase()
//     if((elegir1V2=="TIJERAS"&&elegir2V2=="PAPEL")||(elegir1V2=="PIEDRA"&&elegir2V2=="TIJERA")||(elegir1V2=="PAPEL"&& elegir2V2 == "PIEDRA")){
//             alert(`El jugador ${player1} gano`)
//             break
//         }
//     else if((elegir2V2=="TIJERAS"&&elegir1V2=="PAPEL")||(elegir2V2=="PIEDRA"&&elegir1V2=="TIJERA")||(elegir2V2=="PAPEL"&&elegir1V2=="PIEDRA")){
//             alert(`El jugador ${player2} gano`)
//             break
//         }
//     else if((elegir2V2=="TIJERAS"&&elegir1V2=="TIJERAS")||(elegir2V2=="PIEDRA"&&elegir1V2=="PIEDRA")||(elegir2V2=="PAPEL"&& elegir1V2=="PAPEL")){
//             alert("Sigan jugando, hubo un empate")
            
//         }
//     }
// }

//punto 14

// for(let i = 0; i < 5;i++){
//     let ast = ["*","**", "***", "****", "*****"]
//     console.log(ast[i])
// }
//punto 15

// for(let i = 0; i < 5;i++){
//     let ast = ["*","**", "***", "****", "*****"].reverse()
//     console.log(ast[i])
// }

//punto 16

// let array = [34, 7, 23, 32, 5, 62, 1, 20, 12, 45];


// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//         if (array[j] > array[j + 1]) {
//             let ordenar = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = ordenar;
//         }
//     }
// }

// console.log(array);