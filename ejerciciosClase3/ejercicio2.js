/*Ejercicio 2: Hubo una conferencia de programación hace poco y necesitamos saber quienes 
fueron las personas que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron*/

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

function assistansFromEurope(array){
  var c=0; 
  array.forEach(element => {
    if(element.continent==='Europe'){
    c=c+1;
    }
   
  });
   console.log('La cantidad de personas que asistieron a la conferencia desde Europa es:',c);
}

assistansFromEurope(list);
