//Task1

const str = '123456';
let sum = 0;
for(let i = 0; i < str.length / 2; i++) {
    sum += parseInt(str.charAt(i));
}
let sum2 = 0;
for(let i = 3; i < str.length; i++) {
    sum2 += parseInt(str.charAt(i));
}
if (sum === sum2) {
    console.log('Да');
} else {
    console.log ('Нет');
}

//Task2

let n = 1000; 
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(num);

//Task3

let arr = [12, 15, 20, 25, 59, 79];
let sum3 = 0;
for(let i = 0; i < arr.length; i++) {
    sum3 += arr[i];
}
let arithmeticMean = sum3 / arr.length;
console.log(arithmeticMean);

//Task4

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');
console.log(arr2);


//Task5

let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 0, 'a', 'b');
arr4.splice(6, 0, 'c');
arr4.push('e');
console.log(arr4);

//Task6

let arr11 = [3, 4, 1, 2, 7]; 
console.log(arr11.sort());