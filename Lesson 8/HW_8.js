// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,
//  які в нього були до цього моменту.

function deepCopy(user){
    if (user){
        let timetables = [];
        for (const property in user) {
            if (typeof user[property] === 'function'){
                const timetableCopy = user[property].bind({});
                timetables.push({timetableCopy, property});
            }
        }
        const deepCopyUser = JSON.parse(JSON.stringify(user));
        for (const timetable of  timetables) {
            deepCopyUser[timetable.property] = timetable.timetableCopy;
        }
        console.log(deepCopyUser);
        return deepCopyUser
    }
}
const copy = deepCopy({name: 'ivan', skils: ['html', 'js'], working() {
        console.log('21 days')}, resting() {
        console.log('9 days')}});

copy.working();
copy.resting();

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, numberedList) => ({id: numberedList + 1, ...course})));