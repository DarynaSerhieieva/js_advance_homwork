/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
const box = document.querySelector('.box__back');
const text = document.querySelector('p');
let background = '';

window.addEventListener('load', () => {
    background = localStorage.getItem('color') ?? '';
    box.style.backgroundColor = background;
})

let color = () => Math.floor(Math.random()* 255).toString(16);

let randomColor = event => {
    background = `#${color()}${color()}${color()}`;
    localStorage.setItem('color', background);
    box.style.backgroundColor = background;
    text.style.color = background;
}