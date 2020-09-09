// Have the function alphabetSoup(str) take the str string parameter 
// being passed and return the string with the letters in 
// alphabetical order (ie. hello becomes ehllo). Assume numbers 
// and punctuation symbols will not be included in the string. 
string = "i put some bears in the attic and they made everything hard";

console.log(string);

 function alphabetSoup(string){

   let arr = string.split("");
   arr.sort();
   let str = arr.join("");
  //  console.log(str);
   return str;
 }

 console.log(alphabetSoup(string));
 