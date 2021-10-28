/*Ejercicio 5: Hay un arreglo con varios números donde todos son iguales excepto uno. 
Haga una función que lo identifique
findUniq([1,1,1,1,2,1,1,1]) ==> return (2)*/
var array5= [1,1,1,1,2,1,1,1]
function findUnique(array5){

 
 return array5.find(item => array5.indexOf(item) == array5.lastIndexOf(item));
}
var uniqueValue= findUnique(array5);
console.log('El valor diferente es',uniqueValue);