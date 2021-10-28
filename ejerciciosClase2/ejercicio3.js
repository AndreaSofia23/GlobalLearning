/*Ejercicio 3: Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo */
var array4=[2,3,5,9,8];
function sum(number,array){
    const newArray= array.map(function(item){
    return item + number ;
    });
    console.log('El arreglo original es',array,' El nuevo arreglo sumando el numero 5 es:',newArray);     
}
sum(5,array4);
