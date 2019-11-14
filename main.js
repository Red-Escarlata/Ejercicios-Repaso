/*

###################################
###### E J E R C I C I O   1 ######
###################################

  ---- SE REPITEN LOS NUMEROS? -----

  let nums = [1, 2, 3, 1];                                  //Declaramos el array de números
 
  function isRepeat(arrayNums) {                             //Creamos una función 
    for (let i = 0; i < arrayNums.length; i++) {             //Hacemos un bucle for para recorrer el array
      for (let j = i + 1; j < arrayNums.length; j++) {       //Hacemos otro bucle for para comparar [i] con [j]
        if (arrayNums[i] === arrayNums[j]) {                 //Si son iguales, saldría del bucle
          return true;                                       //Y en caso de no serlo pasamos a la siguiente iteración del bucle
    }
  }
 }
          return false;
 }
console.log(isRepeat(nums)); 
 






###################################
###### E J E R C I C I O   2 ######
###################################

 ----- MAX NUM DE 1 CONSECUTIVOS? -----

 let nums = [1, 0, 1, 1, 0, 1];                      //Declaramos el array de números

function findMaxConsecutives(arrayNums) {            //Creamos una función 
  let repeteadOnes = 0;                              //Creamos dos variables. 
  let max = 0;                                       //En una guardamos las secuencias de unos (RepeatOnes)                            // 
  for (let i = 0; i < arrayNums.length; i++) {       //Y en la otra guardamos la máxima secuencia de unos (max)
      if (arrayNums[i] === 1) {                      //Hacemos un bucle for para recorrer el array
        repeteadOnes++;                              //En caso de encontrarnos con un cero, repetimos repitedOnes
        if (repeteadOnes > max) {                    
          max = repeteadOnes;                        
        }
      }
      if (arrayNums[i] === 0) {
        repeteadOnes = 0;
      }
  }
  return max;
}
 
console.log(findMaxConsecutives(nums));






###################################
###### E J E R C I C I O   3 ######
###################################

  ----- MOVE ZEROES ----

let nums = [0, 0, 1, 0, 0, 3, 12, 0];                   //Declaramos el array de números
let moveZeroes = function(nums) {                       //Creamos una función 
  for (let i = nums.length; i >= 0; i--) {              //Hacemos un bucle for para recorrer el array
    if (nums[i] === 0) {                                //y si encontramos un cero lo añadimos al final y lo quitamos en la posición [i]
      nums.push(0);                                      
      nums.splice([i], 1);
    }
  }
  return nums;
};
console.log(moveZeroes(nums));







###################################
###### E J E R C I C I O   4 ######
###################################
  
 Sara y Laura juegan al baloncesto en diferentes equipos. En los
 últimos 3 partidos, el equipo de Sara anotó 89, 120 y 103 puntos,
 mientras que el equipo de Laura anotó 116, 94, y 123 puntos.
 
 + Calcula la media de puntos para cada equipo.
 
 + Muestra un mensaje que indique cuál de los dos equipos
 tiene mejor puntuación media. Incluye en este mismo mensaje
 la media de los dos equipos.
  
 + María también juega en un equipo de baloncesto. Su equipo
 anotó 97, 134 y 105 puntos respectivamente en los últimos
 3 partidos. Repite los pasos 1 y 2 incorporando al equipo
 de María.
 

 const laura = [89, 120, 103];                      //Declaramos los arrays de números con las puntuaciones
  const sara = [116, 94, 123 ];
  const maria = [97, 134, 105];

 function media(laura, sara, maria) {               // Hacemos una función para calcular la puntuación media
    let suma = 0;                                   //Declaramos tres variables y las recorremos con un bucle for
    let suma2= 0;
    let suma3= 0;
    for (let i = 0; i < laura.length; i++) {
    
    suma= suma + laura[i];                        //calculamos las medias
    suma2= suma2 + sara[i];
    suma3= suma3 + maria[i];                      // Y mostraremos por pantalla los resultados
  }
    suma= suma / laura.length;
    console.log (suma);
    suma2= suma2 / sara.length;
    console.log (suma2);
    suma3= suma3 / maria.length;
    console.log (suma3);

   conosle.log (Math.max(suma, suma2, suma3)); 
}
media (laura,sara, maria));



###################################
###### E J E R C I C I O   5 ######
###################################



 los tres restaurantes.
 Array 2 Contiene el total de lo que ha pagado en cada uno de
 los restaurantes (sumando la propina).
 NOTA Para calcular el 20% de un valor, simplemente multiplica
 por 0.2. Este resultado se obtiene de dividir 20/100. Si
 quisieramos averiguar el 25% de un valor lo multiplicaríamos
 por 0.25.
 25 / 100 = 0.25.

 Jorge y su familia han ido a comer a tres restaurantes distintos.

 La factura fue de 124€, 58€ y 268€ respectivamente.
 Para calcular la propina que va a dejar al camarero, Jorge ha
 decidido crear un sistema de calculo (una función). Quiere
 dejar un 20% de propina si la factura es menor que 50€, un 15%
 si la factura está entre 50€ y 200€, y un 10% si la factura es
 mayor que 200€.
 Al final, Jorge tendrá dos arrays:
 Array 1 Contiene las propinas que ha dejado en cada uno de




 const totalFacturas = [124, 58, 268];                    // Declaramos las variables con los arrays
 const propinas = [];
 const totalDeTotales = [];

 for (const factura of totalFacturas) {                   // Creamos un bucle for of para recorrer el array
  if (factura < 50) {                                     // Evaluamos el % de propina en función del precio
    propinas.push ((20 / 100) * factura);                 //Añadimos las propinas al array de propinas
  }
  else if (factura >= 50 && factura <= 200) {             //Añadimos los totales al total de totales
    propinas.push ((15 / 100) * factura);                 
  }
  else {
    propinas.push((10 /100) * factura);
  }
 }
 console.log(propinas)
 propinas.map((propina, index) => {
  const totalapagar = propina + totalFacturas[index];
  totalDeTotales.push (totalapagar)
 })
console.log(totalDeTotales);



###################################
###### E J E R C I C I O   6 ######
###################################
  
 Crea una o varias `arrow function` que reciba dos números por medio del 
 `prompt`, reste ambos números, y nos devuelva el resultado. 
 En caso de que el resultado sea negativo debe cambiarse a 
 positivo. Este resultado se mostrará por medio de un `alert`.


 let numbers= () => {                                   // Aquí no comento porque hay tan poca línea que 
   let A= prompt('Ingresar números');                   // creo que se entiende bien, así solo. UwU
   let B= prompt('Ingresar números');
  return alert(Math.abs(A-B));
 }
numbers();







###################################
###### E J E R C I C I O   7 ######
###################################
 
Dado el siguiente array de números:
  
`nums = [100, 3, 4, 2, 10, 4, 1, 10]`
  
+ Recorre todo el array y muestra por consola cada uno de sus
elementos con la ayuda de un `for`, con la ayuda de un `map`
y con la ayuda de un `for...of`.
------------------------------------------ 
+ Ordena el array de menor a mayor sin emplear `sort()`.
--------------------------------------------
+ Ordena el array de mayor a menor empleando `sort()`.
 
const nums = [100, 3, 4, 2, 10, 4, 1, 10]                    //Declaramos el array
   for (let index = 0; index < nums.length; index++) {       // Aquí realizaremos un for
   console.log(nums[index]);
 }

   nums.map (function(num){                                  //Aquí realizaremos un map
   console.log(num);
 });

   for (const num of nums) {                                  //Aquí realizaramos un for of
   console.log(num);
 }

 console.log("Original array:");  // Para Ordenar el array de menor a mayor sin emplear `sort()`.
 console.log(nums);               //Utilizaremos el algoritmo Cocktail para ordenar
 let is_Sorted = true;
 while (is_Sorted){
    for (let i = 0; i< nums.length - 1; i++){
            if (nums[i] > nums[i + 1])
             {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i+1] = temp;
                is_Sorted = true;
             }
    }
 
    if (!is_Sorted)
        break;
 
    is_Sorted = false;
 
    for (let j = nums.length - 1; j > 0; j--){
            if (nums[j-1] > nums[j])
             {
                let temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
                is_Sorted = true;
             }
    }
 }
 console.log("Sorted array:")     //Para ordenar con sorrt de forma inversa lo que hice fue
 console.log(nums);               //pasarle al mismo una función de orden

console.log(nums.sort((unNumero, otroNumero) => otroNumero - unNumero);
;




###################################
###### E J E R C I C I O   8 ######
###################################
  




  class Robot {
  rowsPosition = 0;
  columnsPosition = 0;
  
  constructor(space) {
  this.space = space;
  }
  moveLeft() {
  if (this.columnsPosition === 0) {
  return false;
  }
  this.columnsPosition--;
  return true;
  }
  moveRight() {
  if (this.columnsPosition === this.space[this.rowsPosition].length - 1) {
  return false;
  }
  this.columnsPosition++;
  return true;
  }
  moveUp() {
  if (this.rowsPosition === 0) {
  return false;
  }
  this.rowsPosition--;
  return true;
  }
  moveDown() {
  if (this.rowsPosition === this.space.length - 1) {
  return false;
  }
  this.rowsPosition++;
  return true;
  }
  currentPosition() {
  return this.space[this.rowsPosition][this.columnsPosition];
  }
  }
  
  const mySpace = [
  [1, 9, 5],
  [7, 6, 3],
  [6, 6, 8]
  ];
  
  console.log(mySpace[0].length);
  console.log(mySpace[1][2]);
  const myLittlePrettyRobot = new Robot(mySpace);
  
  console.log(myLittlePrettyRobot.currentPosition());
  
  myLittlePrettyRobot.moveRight();
  myLittlePrettyRobot.moveRight();
  myLittlePrettyRobot.moveRight();
  console.log(myLittlePrettyRobot.currentPosition());
  
  myLittlePrettyRobot.moveDown();
  myLittlePrettyRobot.moveDown();
  console.log(myLittlePrettyRobot.currentPosition());
  
  myLittlePrettyRobot.moveUp();
  console.log(myLittlePrettyRobot.currentPosition());
  
  myLittlePrettyRobot.moveLeft();
  myLittlePrettyRobot.moveLeft();
  myLittlePrettyRobot.moveUp();
  console.log(myLittlePrettyRobot.currentPosition());
  
  
   

 console.log(myLittlePrettyRobot.getPosition()); // Salida: 1 undefined
 
 myLittlePrettyRobot.moveRight();
 console.log(myLittlePrettyRobot.getPosition()); // Salida: 9 undefined
 
 myLittlePrettyRobot.moveLeft();
 console.log(myLittlePrettyRobot.getPosition()); // Salida: 1 undefined
 
 myLittlePrettyRobot.moveLeft();
 console.log(myLittlePrettyRobot.getPosition()); // Salida: 1 undefined
 
 
 myLittlePrettyRobot.moveRight();
 myLittlePrettyRobot.moveRight();
 myLittlePrettyRobot.moveRight();
 console.log(myLittlePrettyRobot.getPosition()); // Salida: 8 undefined 




###################################
###### E J E R C I C I O   9 ######
###################################


class Banco {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
  }
}

class CuentaBancaria {
  constructor(id) {
    this.balance = 0;
    this.id = id;
  }
}

class Titular {
  constructor(nombre, genero, monedero) {
    this.nombre = nombre;
    this.genero = genero;
    this.monedero = monedero;
    this.id = Math.floor(Math.random() * 999999999);
  }

  abrirCuentaBancaria(banco) {
    /*
    1. Generar un ID para la nueva cuenta bancaria.
*/
    /*
    2. Acceder al array "clientes" del banco y almacenar el 
       nombre y el ID de la cuenta bancaria del nuevo cliente

    banco.clientes.push([this.nombre, this.id]);
    /*
    3. Crear una nueva cuenta bancaria a la que debemos pasar
       el nuevo ID.
       
    let unaCuentaBancaria = new CuentaBancaria(unTitular.id);
  }

  ingresarDinero(cantidad, cuenta) {
    /*
    1. Comprobar si en el monedero tenemos la cantidad que
       deseamos ingresar. De no ser asÃ­, mostrar un mensaje
       que diga que no tenemos suficiente dinero en el 
       monedero.

    if (cantidad < this.monedero) {
      console.log("No hay suficiente dinero");
    } else {
      /* 2. Si tenemos suficiente dinero en el monedero, solo
       queda restar en el monedero la cantidad que vamos
       a ingresar.
      
      this.monedero = this.monedero - cantidad;

      /*
    3. Acceder a la propiedad "balance" de la cuenta bancaria
       y sumar la cantidad a ingresar. Mostrar un mensaje de
       que el ingreso ha sido realizado.
      
      cuenta.balance = cuenta.balance + cantidad;
      console.log("se ha realizado el ingreso");
    }
  }

  retirarDinero(cantidad, cuenta) {
    
    1. Comprobar si en la propiedad "balance" de nuestra
       cuenta tenemos la cantidad que deseamos retirar. 
       De no ser asÃ­, mostrar un mensaje que diga que
       no tenemos suficiente dinero en la cuenta.

    if (cuenta.balance < cantidad) {
      console.log("No hay suficiente dinero para la retirada");
    } else {
      cuenta.balance = cuenta.balance - cantidad;
      /*
    2. Si tenemos suficiente dinero en la cuenta, solo
       queda restar en el balance la cantidad que vamos
       a retirar.

    3. Acceder a la propiedad "monedero" del titular
       y sumar la cantidad retirada al monedero. Mostrar 
       un mensaje de que el ingreso ha sido realizado.
      this.monedero = this.monedero + cantidad;
    }
  }

  mostrarSaldo(cuenta) {
    console.log(cuenta.balance);

    /*
  
    1. Acceder a la propiedad "balance" de la cuenta y
       mostrar un mensaje que nos indique nuestro saldo
       actual.
 
  }
}
*/