// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let sentence1 = 'hello world';
console.log(sentence1.length);
let sentence2 = 'lorem ipsum';
console.log(sentence2.length);
let sentence3 = 'javascript is cool';
console.log(sentence3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let firstSentence = 'hello world';
const s1 = firstSentence.toUpperCase();
console.log(s1);
let secondSentence = 'lorem ipsum';
const s2 = secondSentence.toUpperCase();
console.log(s2);
let thirdSentence = 'javascript is cool';
const s3 = thirdSentence.toUpperCase();
console.log(s3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let sent1 = 'HELLO WORLD';
const firstSent = sent1.toLowerCase();
console.log(firstSent);
let sent2 = 'LOREM IPSUM';
const secondSent = sent2.toLowerCase();
console.log(secondSent);
let sent3 = 'JAVASCRIPT IS COOL';
const thirdSent = sent3.toLowerCase();
console.log(thirdSent);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
const cleanStr = str.trim();
console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
function stringToArray(str2){
    if (str2){
        return str2.split(' ');
    }
    return [''];
}
console.log(stringToArray(str2));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

const strings = numbers.map(number => number + '');
console.log(strings);

// - створити функцію sortNums(array,direction),
// яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(arrayOfNums,direction){
   if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
   if (direction === 'descending') return arrayOfNums.sort ((a, b) => b - a);
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const months = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
    value.id = index + 1;
    return value;
});

console.log(months);

// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const suit of suits){
    for (const value of values){
    const card = {cardSuit: suit, value: value};
    if (suit === 'heart' || suit === 'diamond'){
        card.color = 'red';
    } else {
        card.color = 'black';
    }
    cards.push (card);
    }
}
console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' &&  card.cardSuit === 'spade'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9'));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }

    return accum;
}, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
});
console.log(reduce);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));