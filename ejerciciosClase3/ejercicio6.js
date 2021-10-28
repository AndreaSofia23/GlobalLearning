/*Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de
 el primer desarrollador de cierto lenguaje que se haya inscripto.

return ('Python')==> Victoria from Puerto Rico was the first Python developer in the conference
return ('C#')==> There are no C# developers in the conference*/

const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];
function firstDeveloperAtTheConference(array,language){
   var index=array.findIndex(developer => developer.language===language);
   if(index>-1){
    var{firstName,country,language}=array[index];
    console.log(firstName,'from ',country,'was the first ',language,' developer in the conference');
   }
   else{
     console.log('There are no ',language,'developers in the conference');
   }
   
   
}
firstDeveloperAtTheConference(list1,'Python');
firstDeveloperAtTheConference(list1,'C#');