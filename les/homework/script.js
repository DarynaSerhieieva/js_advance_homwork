// let color = () => Math.floor(Math.random()* 255) 
// let randomColor = () => {
//     const box = document.querySelector('.box__back')
//     box.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`
// }


let color = () => Math.floor(Math.random()* 255).toString(16) 
let randomColor = () => {
    const box = document.querySelector('.box__back')
    const text = document.querySelector('p')
    const background = `#${color()}${color()}${color()}`
    box.style.backgroundColor = background
    text.style.color = background
}