// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {title:'first book', pageCount: 111, genre:'comedy',
    authors:[
        {
            name: 'first author',
            age: 21
        }
    ]};
let book2 = {title:'second book', pageCount: 222, genre:'detective',
authors:[
    {
        name: 'second author',
        age: 32
    }
]};
let book3 = {title:'third book', pageCount: 333, genre:'fantasy',
    authors:[
        {
            name: 'third author',
            age: 43
        }
    ]};
console.log(book1);
console.log(book2);
console.log(book3);