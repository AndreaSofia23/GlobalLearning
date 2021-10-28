/*Ejercicio 7: Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
 5 * 10 = 50*/
 //Multiplicar entre todos
 var array2=[5,4,2,1,8,4,1,6,2,7,4,1];
 array2.sort((a,b)=> a-b);
var max1=array2[array2.length-1]
var max2=array2[array2.length-2]
 var maxNum=max1+max2;
 console.log('La mayor multiplicacion es ',maxNum);

//Multiplicar adyacentes
var array3 =[2,5,65,89,1,4,6,3,5,0];
var firstMultication=array3[0]*array3[1];

for(var i=1;i<array3.length-1;i++){
 var secondMultication=array3[i]*array3[i+1];
 if(firstMultication<secondMultication){
   firstMultication=secondMultication;
  
 }
 console.log(firstMultication);
}
console.log('La mayor multiplicacion adyacente es: ',firstMultication);