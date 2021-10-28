/*Ejercicio 4: Haga una función que reciba un número y retorne un arreglo que tenga 
el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)
 */

function numberToArray(number){
    var newArray=[];
    
    for(var i=0;i<number;i++){
      newArray.push(i);
      
    }
   return console.log('El arreglo generado a partir del numero ',number,'es ',newArray);
    
}
numberToArray(6);