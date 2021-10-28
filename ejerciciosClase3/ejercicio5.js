/*Ejercicio 5: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores
de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una function 
que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo:

return ('Ruby' )==> true
*/

function languageDeveloper(array,language)
{
    let c=0;
  array.forEach(element => {
     if(element.language===language)
     {
        c=c+1;    
     }

  });
  if(c>=1){
    console.log(language+'==>'+ true);
  }
  else
  {
    console.log(language+'==>'+ false);
  }

  
}

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];
languageDeveloper(list,'Php');
languageDeveloper(list,'Javascript');