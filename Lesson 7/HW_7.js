// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(111, 'Carrot', 'Surname1', 'carrot@gmail.com', '+380971234561'),
    new User(22, 'Tomato', 'Surname2', 'tomato@gmail.com', '+380971234562'),
    new User(31, 'Potato', 'Surname3', 'potato@gmail.com', '+380971234563'),
    new User(44, 'Onion', 'Surname4', 'onion@gmail.com', '+380971234564'),
    new User(52, 'Cucumber', 'Surname5', 'cucumber@gmail.com', '+380971234565'),
    new User(67, 'Broccoli', 'Surname6', 'broccoli@gmail.com', '+380971234566'),
    new User(71, 'Spinach', 'Surname7', 'spinach@gmail.com', '+380971234567'),
    new User(88, 'Garlic', 'Surname8', 'garlic@gmail.com', '+380971234568'),
    new User(9, 'Lettuce', 'Surname9', 'lettuce@gmail.com', '+380971234569'),
    new User(10, 'Pumpkin', 'Surname10', 'pumpkin@gmail.com', '+380971234510'),
]

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
//     залишивши тільки об'єкти з парними id (filter)
const evenId = users.filter((user) => user.id % 2 === 0);
console.log(evenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortId = users.sort((user1, user2) => user1.id - user2.id);
console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Apple', 'Red', 'apple@gmail.com', '+123456789', [{title: 'spoon', prise: 30}, {
        title: 'fork',
        price: 40
    }, {title: 'serviette', price: 80}, {title: 'goblet', price: 600}]),
    new Client(2, 'Coconut', 'Braun', 'coconut@gmail.com', '+223456789', [{title: 'cup', prise: 210}, {
        title: 'plate',
        price: 310
    }]),
    new Client(3, 'Lemon', 'Yellow', 'lemon@gmail.com', '+323456789', [{title: 'pan', prise: 1200}, {
        title: 'pot',
        price: 3000
    }]),
    new Client(4, 'Blueberry', 'Blue', 'blueberry@gmail.com', '+423456789', [{title: 'glass', prise: 400}]),
    new Client(5, 'Papaya', 'Orange', 'papaya@gmail.com', '+523456789', [{title: 'napkin', prise: 70}]),
    new Client(6, 'Raspberry', 'Pink', 'raspberry@gmail.com', '+623456789', [{
        title: 'butter knife',
        prise: 900
    }, {title: 'steak knife', price: 1500}]),
    new Client(7, 'Grape', 'Green', 'grape@gmail.com', '+723456789', [{title: 'vase', prise: 1000}, {
        title: 'flowers',
        price: 300
    }]),
    new Client(8, 'Plum', 'Purple', 'plum@gmail.com', '+823456789', [{title: 'coffee pot', prise: 1230}]),
    new Client(9, 'Lime', 'Lightgreen', 'lime@gmail.com', '+923456789', [{title: 'chair', prise: 2330}, {
        title: 'table',
        price: 4000
    }]),
    new Client(10, 'Strawberry', 'Red', 'strawberry@gmail.com', '+103456789', [{
        title: 'tea',
        prise: 150
    }, {title: 'coffee', price: 400}, {title: 'teapot', price: 2100}]),
]

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortOrder = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(mode, producer, year, maxSpeed, engineVolume) {
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('BMW U11', 'Germany', '2022', '233', '2');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(130);
car.changeYear(2010);
car.addDriver({});
console.log(car);
