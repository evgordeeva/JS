// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(3, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let roundSquare = (radius) => Math.PI * radius * radius;
console.log(roundSquare(23));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSquare = (height, radius) =>2 * Math.PI * height * radius
console.log(cylinderSquare(5, 13));

// - створити функцію яка приймає масив та виводить кожен його елемент
let items = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
items([12, 23, 34, 45]);


// створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
let paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}
paragraph('Lesson about Arrows Functions');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
let list = (text) => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>    
</ul>`)
}
list('Lesson 5');

// - створити функцію яка створює ul з  елементами li.Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write
let numList = (text, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

numList('functions in homework', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
let thirdList = (arrayOfItems) => {
    document.write('<ul>');
    for (const item of arrayOfItems) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

thirdList([28, 'July', 'nineteen eighty six', true, 'Kyiv']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersArray = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

usersArray([
    {id: 1, name: 'Alex', age: 41},
    {id: 2, name: 'Genia', age: 38},
    {id: 3, name: 'Eva', age: 12},
    {id: 4, name: 'Diana', age: 7},
    {id: 5, name: 'Sasha', age: 3}
]);

// - створити функцію яка повертає найменьше число з масиву
let minValueArray = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    console.log(min);
}

minValueArray([38, 41, 3, 7, 12]);

// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    console.log(basket);
}

sum([1, 2, 10]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    console.log(arr);
}

swap([11, 22, 33, 44], 0, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let choseCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
    }
    console.log(sumUAH / choseCurrency.value);
}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');