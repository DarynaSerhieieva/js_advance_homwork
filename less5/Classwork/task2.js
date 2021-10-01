/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  const colors = {
    background: 'purple',
    color: 'white'
  }

  const headingH1 = document.createElement('h1');

  const heading = () => {
    headingH1.innerText = 'I know how binding works in JS';
    document.body.appendChild(headingH1);
  }

  // function myCall(color) {
  //   heading();
  //   headingH1.style.background = this.background;
  //   headingH1.style.color = color;
  // }
  // myCall.call(colors, 'green');

  // function myBind() {
  //   heading();
  //   headingH1.style.background = this.background;
  //   headingH1.style.color = this.color;
  // }
  // const myBindStart = myBind.bind(colors);
  // myBindStart();

  function myAplly(text) {
    heading();
    headingH1.style.background = this.background;
    headingH1.style.color = this.color;
    headingH1.innerText = text;
  }
  myAplly.apply(colors, ['my apllay work']);

  