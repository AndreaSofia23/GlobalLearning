/*Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3 */
function deleteLastThreeElements(array){
    var counter=1;
      if(array.length >5){
          console.log('El arreglo recibido es ',array)
          while(counter<=3)
          {
              array.pop();
              counter++;
          }
          console.log('El arreglo que queda luego de quitar los ultimos 3 elementos es: ',array)
      }
      
    }
    
    var array2 =[1,2,3,4,5,6,7,8,9]
    var array3 = [12,1]
    deleteLastThreeElements(array2);
    deleteLastThreeElements(array3);