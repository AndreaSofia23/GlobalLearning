/*Ejercicio 6: Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos
minSum([7,4,2,3]) ==> return (5)*/
var array= [7,4,2,3];
//var array=[54,69,2,40,8,1];
var array1=array;
array.sort(function(a,b){return a-b })
var minSum=array[0]+array[1];
console.log('El array original es ',array1,'El array modifcado es',array,'La menor suma posible es',minSum);