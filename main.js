console.log("Is this working?")
/* Key: the key is the value thats with in the array. dot or bracket accessors (.length or array[]). 

Key-value pair: the key and the value of the index of the array. or positions. 
 Array data types are called objects:
 booleans, strings, numbers, undefined, null, Symbols, BigInt, <-------primatives they dont contains anything.   

 Syntax Sugar: useful feature. creature comfort.dont need to have it but its nice to have it.

syntax sugar: hello world.charAt(0)--->old way. hello world[0]--->New way(the sugar).

the primatives are immutable. cant change it.

objects are a collection of properties:

"objects" contain key-vaule pairs of information

"key" is used to access a value

key-value pairs is a property to access the value.

another term for key - property name
another term for value -- property value
*/
//plain old javascript object, "pojo"
// can use for a variable name = $ _ bestpractice: dont start variables with numbers or symbols
//if the property name is a valid property name. dont need the double quotes.
//can use a number to key a value into a array 

//autoboxing treating a primative as an object when you treat it like one.


let user = {

    "5id": 1233,
    username: "celeste57",
    email: "celeste@kenzie.academy", //qualities of a user. properties
    phone: "1-888-888-8888",
    birthday: "1988-04-12", 
    isActive: true,
    "eye Color": null,
    pets: [
        "hampster", "donkey", "marmoseet"
    ],
    sayHi: function sayHi (name){
        console.log(`hello there, ${name}`)
    }
}
console.log(user);

let petsAsArrays = [
    "dog", 
    "cat"
];

let petsAsObjects = {
    "0":"dog",
    "1":"cat",
    "length":2,
    [[prototype]]:{
        join:function (){},
        push:function(){},
    }
}
 

    let ericAmeyer = {
    name: "Eric A. Meyer",
    careerStartDate: 1993,
    expertSubjects: ['html', 'CSS','javascript',
    ],
    books:[
        'design for real life', 
        'cascading style sheets', 
        'eric meyer on css',
        'css2.0 programming refrence',
        'css web site design',
        'smashing css'
    ],

}

let Kylesimpson = {
    name: "kyle simpson",
    careerStartDate: null,
    expertSubjects:['html', 'css', 'web development'],
    books:['you dont know js', 'you dont know js yet', 'web development'],
}
function getMovement(directions){
    const directions = {
    right: [+1, 0],
    left: [-1, 0],
    down: [0, +1],
    up: [0, -1],
}
return directions[directions]
}





