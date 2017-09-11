//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: str => str.split('').reverse().join(''),

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  // removeDups: arr => arr.filter( val => arr.reduce(function(x, val) {x[val] = ++x[val] || 1;return x}, {})[val] === 1 ),
  // removeDups: arr => arr.filter( val => arr.indexOf(val) === arr.lastIndexOf(val),
  removeDups: arr => arr.filter((item, pos) => arr.indexOf(item) == pos),


  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: str => str.split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' '),

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: str => str.match(/[aeiou]/gi).length,

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: num => {
    num = num < 0 ? num*-1 : num;
    if ((num % 2 === 0 && num !== 2) || num === 1) { return false; }
    for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i += 2) {
      if (num % i === 0) { return false; }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
