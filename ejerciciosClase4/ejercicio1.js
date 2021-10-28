/*Ejercicio 1: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las personas
 registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra función 
 devuelva True si todos los lenguajes son iguales, o que nos devuelva False si hay
  por lo menos uno que sea distinto
const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]; */

const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Python' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Java' } 
  ];

  const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Python' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Python' } 
  ];

  const list2 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Javascript' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Java' } 
  ];




   const sameLanguage = (array) =>
   {
    let language = array[0].language;
    for(let i=1;i<array.length;i++){
      isTrue = (language == array[i].language) ? true:false;
      }
       if(isTrue===true){
         console.log(true);
       }else{
         console.log(false);
       }
   }
  sameLanguage(list);
  sameLanguage(list1);
  sameLanguage(list2);
  

