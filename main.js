/**
 * ###################################
 * ###### E J E R C I C I O   1 ######
 * ###################################
 * 
 * Sara y Laura juegan al baloncesto en diferentes equipos. En los
 * últimos 3 partidos, el equipo de Sara anotó 89, 120 y 103 puntos,
 * mientras que el equipo de Laura anotó 116, 94, y 123 puntos.
 *
 * `1.` Calcula la media de puntos para cada equipo.
 *
 * `2.` Muestra un mensaje que indique cuál de los dos equipos
 *      tiene mejor puntuación media. Incluye en este mismo mensaje
 *      la media de los dos equipos.
 *
 * `3.` María también juega en un equipo de baloncesto. Su equipo
 *      anotó 97, 134 y 105 puntos respectivamente en los últimos
 *      3 partidos. Repite los pasos 1 y 2 incorporando al equipo
 *      de María.
 *
 */


/*const laura = [89, 120, 103];
const sara = [116, 94, 123 ];
const  maria = [97, 134, 105];


function media(laura, sara) {
    let suma = 0;
    let suma2= 0;
    let suma3= 0;
    for (let i = 0; i < laura.length; i++) {
    
    suma= suma + laura[i];
    suma2= suma2 + sara[i];
    suma3= suma3 + maria[i];
  }
    suma= suma / laura.length;
    suma2= suma2 / sara.length;
    suma3= suma3 / maria.length;

   return Math.max (suma, suma2, suma3); 
}
console.log(media (laura,sara));*/

/**
 * ###################################
 * ###### E J E R C I C I O   4 ######
 * ###################################
 * 
/* Crea una o varias `arrow function` que reciba dos números por medio del 
* `prompt`, reste ambos números, y nos devuelva el resultado. 
* En caso de que el resultado sea negativo debe cambiarse a 
* positivo. Este resultado se mostrará por medio de un `alert`.


let numbers= () => {
   let A= prompt('Ingresar números');
   let B= prompt('Ingresar números');
  return alert(Math.abs(A-B));
}
numbers();
*/


/**
 * ###################################
 * ###### E J E R C I C I O   3 ######
 * ###################################
 * 
 * Dado el siguiente array de números:
 * 
 * `nums = [100, 3, 4, 2, 10, 4, 1, 10]`
 * 
 * `1.` Recorre todo el array y muestra por consola cada uno de sus
 *      elementos con la ayuda de un `for`, con la ayuda de un `map`
 *      y con la ayuda de un `for...of`.
 * 
 * 
 * 
 * 
 * 
 * `2.` Ordena el array de menor a mayor sin emplear `sort()`.
 * 
 * `3.` Ordena el array de mayor a menor empleando `sort()`.
 * 
 */


  const nums = [100, 3, 4, 2, 10, 4, 1, 10]
   for (let index = 0; index < nums.length; index++) {
   console.log(nums[index]);
 }

   nums.map (function(num){
   console.log(num);
 });

   for (const num of nums) {
   console.log(num);
 }

 console.log("Original array:");
 console.log(nums);
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
 console.log("Sorted array:")
 console.log(nums);

 console.log(nums.sort());
 