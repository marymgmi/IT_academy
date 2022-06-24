// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let newArray = [1,2,3,4,5,6];

function swapElements(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;  
}

function reverseArray(array) {
    for(let i = 0; i < array.length/2; i++) {
        swapElements(array, i, array.length - i - 1);
    }
    return array;
}
console.log(reverseArray(newArray));

// // 2) найти максимальное значение числа в массиве ([3,67,15...])

let array = [3,67,15,112,9,48,29];
function getMaxOfArray(array) {
    let theBiggestNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > theBiggestNumber) {
            theBiggestNumber = array[i];
        }
    }
    return theBiggestNumber
}
console.log(getMaxOfArray(array)); 

// 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

const arrayLength = 10; 
let fibonacci = [0, 1]; 
const firstIndex = 5;
let lastNumber = firstIndex+arrayLength;
 

for (i = 2; i < lastNumber; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(firstIndex,lastNumber));


// 4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) 

let digitsByValue = 0;
let digitsByValueAndPosition = 0;
let firstNumber = 3487;
let secondNumber = 3794;

let firstDigitsArray = (firstNumber).toString().split("");
let secondDigitsArray = (secondNumber).toString().split("");

for (i = 0; i < firstDigitsArray.length; i++) {
    if (firstDigitsArray[i] === secondDigitsArray[i]) {
        digitsByValueAndPosition++;
    } 
    for (j = 0; j < secondDigitsArray.length; j++) {
        if (firstDigitsArray[i] === secondDigitsArray[j]) {
            digitsByValue++;
        } 
    }
}
console.log('Digits by value = ' + digitsByValue);
console.log('Digits by value and position = ' + digitsByValueAndPosition);




// 5) сортировка массива по возрастанию/убыванию

let arrayWithNumbers = [7, 11, 3, 48, 20, 9, 1];
function sortAsc(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                swapElements(array, i, j);
            }
        }
    }
    return array;
}

console.log(sortAsc(arrayWithNumbers));

let newArrayWithNumbers = [7, 11, 3, 48, 20, 9, 1];
function sortDesc(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                swapElements(array, i, j);
            }
        }
    }
    return array;
}
console.log(sortDesc(newArrayWithNumbers));

// // 6) удалить из массива все повторяющиеся элементы 


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  };

  let initialArray = ['school', 'learn', 'student', 'learn', 'new', 'lesson', 'school', 'teacher', 'new'];
  let uniqueArray = initialArray.filter(onlyUnique);

  console.log(uniqueArray);

 //или
  let newUniqueArray = [...new Set(initialArray)];
  console.log(newUniqueArray);
