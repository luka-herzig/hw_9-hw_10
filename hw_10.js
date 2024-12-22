//Завдання 1

// const showMessage = () => {
//     console.log("Hello Word");
// };

// showMessage();

//Завдання 2

// function makeRundomNumber () {
//     const randomNumber = Math.random() * (100 - 1) + 1;
//     return randomNumber;
// }

// const value = makeRundomNumber()

// const check = prompt("Введіть число для порівняння");
// if (check === value) {
//     alert("Ви вгадали число");
// } else if (check !== value) {
//     alert("Ви не вгадали число");
// }

//Завдання 3

// let receivingValue = confirm("Натискайте <ОК>");
// let countNumberClicks = 0;
// do {
//     receivingValue = confirm("Натисніть ще раз");
//     countNumberClicks++
// } while (receivingValue === true)

// console.log(countNumberClicks);

//Завдання 4


// const applyCallbackToEachElement = (arr, callback) => {
//     let squaredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let number = arr[i];
//         callback(number);
//         squaredArray.push(number);
//     }
//     return squaredArray;
// };

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (number) => {
//    const resultx = number * number;
//    return resultx;
// };

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result)

//Завдання 5
const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - discount
};

const showDiscountedPrice = count {

};

calculateDiscountedPrice(100, 10, showDiscountedPrice); //90