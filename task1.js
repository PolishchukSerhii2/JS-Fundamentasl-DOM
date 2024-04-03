// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

const firstEl = document.querySelector("#list").children[0].textContent;
const lastEl = document.querySelector("#list").children[1].textContent;
const secondEl = document.querySelector("#list").children[2].textContent;
const fourthEl = document.querySelector("#list").children[3].textContent;
const thirdEl = document.querySelector("#list").children[4].textContent;

module.exports = {
    firstEl,

    lastEl,
    secondEl,
    fourthEl,
    thirdEl
};
