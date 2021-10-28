/* Ejercicio 1: Haga una función que siempre elimine al primer elemento del arreglo*/
const array = [1,2,3,4,5];

function deleteFirstIndex(array){
    console.log('El arreglo original es ', array);
    array1= array.shift();
    console.log('El elemento quitado es' ,array1 ,'el arreglo que queda es ',array);
}

deleteFirstIndex(array)
