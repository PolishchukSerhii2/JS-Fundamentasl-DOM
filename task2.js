// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles

const styledElement = document.getElementById('title');
const firstPar = document.getElementById("myDiv").children[0];
const secondPar = document.getElementById("myDiv").children[1];
const thirdPar = document.getElementById("myDiv").children[2];
const fourthPar = document.getElementById("myDiv").children[3];
const myList = document.getElementById("myList");
const span =  document.getElementsByTagName("span")[0];

function applyStyles() {
    title.styledElement.style.backgroundColor = "lightgreen"
    firstParagraph.style.fontWeight = "700"
    secondParagraph.style.color = "red"
    thirdParagraph.style.textDecoration = "underline"
    fourthParagraph.style.fontStyle = "italic"
    myList.style.listStyle = "none"
    myList.style.display = "flex"
    span.style.display = "0"
}


module.exports = applyStyles;
