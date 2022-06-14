console.log('Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья');

const { count } = require("console");
const { cursorTo } = require("readline");

let sum1 = 0;
let sum2 = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function performRoll(playersNumber) {
    console.log('Игрок ' + playersNumber + ' кидает кубик')
    let result = getRandomIntInclusive(1, 6);
    console.log(result);
    return result;
}

for (let i = 0; i < 3; i++) {
    sum1 += performRoll(1);
    sum2 += performRoll(2);
}
console.log ('Игрок 1 набрал ' + sum1 + ' очков');
console.log ('Игрок 2 набрал ' + sum2 + ' очков');

if (sum1 > sum2) {
    console.log('Выиграл первый игрок');
} else if (sum1 < sum2) {
    console.log('Выиграл второй игрок');
} else {
    console.log('Ничья');
}

console.log('Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня');

let counter = 0; 

function isFridayThe13th (dateObj) {
    return dateObj.getDay() === 5 && dateObj.getDate() === 13;
}
let currentDate = new Date;
for (let year=2000; year<=currentDate.getFullYear(); year++) {
    for (let month=0; month<12; month++) {
        let dateObj = new Date(year, month, 13);
        if (isFridayThe13th(dateObj)) {
         counter++;
        } 
    } 
}
console.log(counter);

console.log('Напишите код который будет разбивать число на заданное количество рандомных целых чисел сумма которых будет равна изначальному числу');

const numbersAmount = 3;
let sum = 15;
let number = 0;

for (let i=0; i<numbersAmount - 1; i++) {
    number = getRandomIntInclusive(0, sum);
    console.log(number);
    sum -= number;
}
console.log(sum);

console.log('Напишите код который будет разбивать число на заданное количество рандомных дробных чисел сумма которых будет равна изначальному числу');

let sum5 = 15;

function getRandomDoubleInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = (Math.random() * (max - min + 1) + min).toFixed(2);
    return result > max ? max.toFixed(2) : result;
}

for (let i=0; i<numbersAmount - 1; i++) {
    number = getRandomDoubleInclusive(0, sum5);
    console.log(number);
    sum5 -= number;
}
console.log(sum5.toFixed(2));
    
   

