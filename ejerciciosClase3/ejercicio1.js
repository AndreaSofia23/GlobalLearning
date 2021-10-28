//Ejercicio 1
/*Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores.*/

function newAvatar(){

}


class Hero {
   name
   position
   life
   rank
   experience
   constructor(name='heroe',position='00',life=100,rank=5,experience=0){
       this.name=name;
       this.position=position;
    
       this.life=life;
       this.rank=rank;
       this.experience=experience;
   }

}
let spiderman=new Hero(undefined,undefined,100,5,0);
let batman=new Hero('Bruce Wayne','100')

console.log(spiderman);
console.log(batman);