// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    const result = a * b;
    console.log(result);
    return result;
}

square(5, 7);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function roundSquare(radius) {
    return Math.PI * radius * radius;
}

console.log(roundSquare(7.98));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(height, radius) {
    return 2 * Math.PI * height * radius
}

console.log(cylinderSquare(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

function items(array) {
    for (const item of array) {
        console.log(item);
    }
}

items([1, 2, 3, 4]);

// створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Lesson about Functions');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>    
</ul>
`)
}

list('some item');

// - створити функцію яка створює ul з  елементами li.Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write

function secondList(text, counter) {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

secondList('homework', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function thirdList(arrayOfItems) {
    document.write('<ul>');
    for (const item of arrayOfItems) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

thirdList([222, 3.14, 'html', true, 543, 'js']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function usersArray(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

usersArray([
    {id: 1, name: 'Oleksii', age: 41},
    {id: 2, name: 'Yevheniia', age: 38},
    {id: 3, name: 'Yeva', age: 12},
    {id: 4, name: 'Diana', age: 7},
    {id: 5, name: 'Oleksandr', age: 3}
]);

// - створити функцію яка повертає найменьше число з масиву

function minValueArray(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minValueArray([55, 3, -6, 345, -111]));

// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let choseCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
    }
    return sumUAH / choseCurrency.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));