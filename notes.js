
/*
  To create an object from a string of JSON data,
  use the built-in JSON.parse() method. This takes
  the JSON string and converts it into a 
  JavaScript object. It is useful for parsing 
  JSON data received from a server or local file.

*/



const jsonString = '{"name": "John", "age": 25, "isStudent": true}';

const studentObject2 = JSON.parse(jsonString);

/*
o convert a native JavaScript object into a JSON 
string, use the built-in JSON.stringify() method. 
This method takes a JavaScript object and converts 
it into a JSON string. It is useful for sending data 
to a server or saving it in a file
*/

const studentJsonString = JSON.stringify(studentObject1);


/**
 
JavaScript async/await

 */

const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  }catch(err){
    console.error
  }
}