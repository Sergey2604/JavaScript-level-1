"use strict";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
    if (number == 0) {
        console.log(number + ' - это ноль')
    } else if (number % 2 == 0) {
        console.log(number + ' - четное число')
    }else {
            console.log(number + ' - нечетное число')
    }

}