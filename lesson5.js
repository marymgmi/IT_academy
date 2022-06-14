console.log('string' + true); // string + boolean = string
console.log(45 + '5'); // number + string = string
console.log(24 + true); // number + boolean = number

console.log('5' * false); // string * boolean = umber
console.log(45 * '5'); // number * string = number
console.log(45 * true); // number * boolean = number

console.log('10' / true); // string / boolean = number
console.log(10 / '2'); // number / string = number
console.log(2 / true); // number / boolean = number
console.log('10' / false); // string / boolean = Infinity


console.log(parseInt('10')); //string to number 
console.log((17).toString()); // number to string
console.log(!!'string'); // string to boolean
console.log(!!0); // number to boolean
console.log((false).toString()); // boolean to string
console.log (+ true); // boolean to number
