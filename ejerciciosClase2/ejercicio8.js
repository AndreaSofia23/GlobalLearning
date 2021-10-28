/*Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
El lobo solo puede comer a la oveja que tiene a su derecha*/



function sheepsUnderPreasure(array){
    console.log(array);
    var wolfIndex=array.indexOf("wolf");
     if(wolfIndex!=array.length-1){
       var indexWolf=array.length-wolfIndex;
       var indexSheep=indexWolf-1
       console.log("Hey! Oveja numero!",indexSheep, " El lobo  esta cerca!")
    }
    else{
     console.log("No sigas comiendo ovejas!");
     }
   }
  
  var array4=["sheep", "sheep", "sheep", "wolf"]
  
  var array5=["sheep", "sheep", "sheep", "wolf", "sheep"];
  var array6=["sheep", "sheep","wolf", "sheep","sheep","sheep","sheep","sheep"];
  sheepsUnderPreasure(array4);
  sheepsUnderPreasure(array5);
  sheepsUnderPreasure(array6);