"use strict"
var num1; var num2;
function max(num1, num2) {
    if (num1 > num2)
        console.log(num1);
    else {
        console.log(num2);
    }
}

max(12, 18);

var num3;
function maxOfThree(num1, num2, num3) {
    var largest = num1;
    if ((num2 > num1) && (num2 > num3)) {
        largest = num2;
    }

    if ((num3 > num2) && (num3 > num1)) {
        largest = num3;
    }

    console.log(largest);
}

maxOfThree(121, 15, 19);

var character;
function isVowel(character) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var isVowelVar = false;
    vowels.forEach(function (char) {
        if (char === character) {
            isVowelVar = true;
        }
    });
    console.log(isVowelVar);
}

isVowel('a');

var inputArray = [1, 2, 3, 4];
function sum(inputArray) {
    var total = 0;
    for (var i = 0; i < inputArray.length; i++) {
        total += inputArray[i];
    }
    console.log("The sum of the numbers is: " + total)
    multiply(inputArray);
}

function multiply(inputArray) {
    var product = 1;
    for (var j = 0; j < inputArray.length; j++) {
        product *= inputArray[j];
    }
    console.log("The product of the numbers is: " + product);
}

sum(inputArray);

var inputString = "ratset gaj";
function reverse(inputString) {
    var outString = "";
    for (var i = ((inputString.length) - 1); i > -1; i--) {
        outString += inputString[i];
    }
    console.log(outString);
}

reverse(inputString);

var listOfWords = ["word1", "word1223", "word123"];
function findLongestWord(listOfWords) {
    var lengths = [];
    listOfWords.forEach(function (word) {
        lengths.push(word.length);
    });
    lengths.sort();
    console.log(lengths.pop());
}

findLongestWord(listOfWords);

var i;
function findLongWords(listOfWords, i) {
    var outList = [];
    listOfWords.forEach(function (word) {
        if (word.length > i) {
            outList.push(word);
        }
    });
    console.log(outList);
}

findLongWords(listOfWords, 5);

var input;
function computeSumOfSquares(input) {
    var sumOfSquares;
    var x = 0;
    sumOfSquares = input.map(n => n * n).reduce((x, num) => x + num);
    return sumOfSquares;
}

input = [1, 2, 3];
console.log(computeSumOfSquares(input));

var inputNums;
function printOddNumbersOnly(inputNums) {
    var isOdd = [];
    inputNums.forEach(function (num) {
        if (num % 2 > 0) isOdd.push(num);
    });
    console.log(isOdd);
}

printOddNumbersOnly(input);

var inputList;
function computeSumOfSquaresOfEvensOnly(inputList) {
    var isEven = [];
    inputList.forEach(function (numb) {
        if (numb % 2 == 0) isEven.push(numb);
    });
    var i = 0;
    var totalSquares;
    totalSquares = isEven.map(s => s * s).reduce((i, n) => i + n);
    console.log(totalSquares);
    console.log(isEven);
}

inputList = [1, 2, 2, 3, 4, 5];
computeSumOfSquaresOfEvensOnly(inputList);

var inputArr = [1, 2, 3, 4, 5];
function sumFunctional(inputArr) {
    var x = 0;
    var s = inputArr.reduce((x, n) => (x + n));
    console.log("The sum of the numbers is: " + s);
    multiplyFunctional(inputArr);
}

function multiplyFunctional(inputArr) {
    var x = 1;
    var p = inputArr.reduce((x, n) => (x * n));
    console.log("The product of the numbers is: " + p);
}

sumFunctional(inputArr);

function findSecondBiggest(inputArr) {
    var biggest = inputArr[0];
    var secondBiggest;
    for (var i = 1; i < inputArr.length; i++) {
        if (inputArr[i] > biggest) {
            secondBiggest = biggest;
            biggest = inputArr[i];
        } else {
            secondBiggest = inputArr[i];
        }
    }
    return secondBiggest;
}

console.log(findSecondBiggest(inputArr));

var n; var a; var b;
var fibArr;
function printFibo(n, a, b) {
    fibArr = [];
    if (n == 2) {
        fibArr.push(a);
        fibArr.push(b);
        return fibArr;
    }

    if (n == 1) {
        fibArr.push(a);
        return fibArr;
    }

    if (n > 2) {
        fibArr.push(a);
        fibArr.push(b);
        for (var i = 3; i <= n; i++) {
            var temp = (a+b);
            fibArr.push(a+b);
            a=b;
            b=temp;
        }
        return fibArr;
    }
}

console.log(printFibo(10,0,1));
