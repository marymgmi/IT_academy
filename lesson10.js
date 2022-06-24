// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandomRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getPromise(value) {
    return new Promise ((resolve, reject) => {
        let timeout = getRandomRandomNumber(1, 5); 
        setTimeout(() => {
            resolve(value)
        }, timeout * 1000);
    });
} 
let first = getPromise(1);
let second = getPromise(2);
let third = getPromise(3);

Promise.race([first, second, third])
.then(data => {
    console.log(data)
})

// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будетдожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum() {
    return new Promise ((resolve, reject) => {
        let randomNumber = getRandomRandomNumber(1,5);
        setTimeout(() => {
            resolve(randomNumber)
        }, 3000);
    }).then(randomNumber => { 
        return randomNumber
    })
}

async function squaringNum() {
    let numForSquaring = await getNum();
    let finalNum = Math.pow(numForSquaring, 2);
    return finalNum;
}

squaringNum().then(console.log);

// // Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.


function getNum2() {
    return new Promise ((resolve, reject) => {
        let randomNumber = getRandomRandomNumber(6,10);
        setTimeout(() => {
            resolve(randomNumber)
        }, 5000);
    }).then(randomNumber => { 
        return randomNumber
    })
}

async function additionOfNumbers() {
    let firstNumber = await getNum();
    let secondNumber = await getNum2();
    let finalSum = await firstNumber + secondNumber;
    return finalSum;
}

additionOfNumbers().then(console.log);
