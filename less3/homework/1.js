/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  const OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  const allButton = document.querySelectorAll('button');
  const sliderImg = document.createElement('img');
  let currentPosition = 0;

  const loadSlider = () => {
    sliderImg.src = `${OurSliderImages[currentPosition]}`;
    document.querySelector('#slider').appendChild(sliderImg);
  }
  window.addEventListener('load', loadSlider);

  allButton.forEach(button => {
    button.classList.add('buttonAnimated');
    button.addEventListener('click', event => {
      sliderImg.src = '';
      sliderImg.className = '';
      if (event.target.innerText === 'Prev') {
        currentPosition--;
        if (currentPosition < 0){
          currentPosition = OurSliderImages.length -1;
        }
      } else {
        currentPosition++;
        if (currentPosition > OurSliderImages.length -1){
          currentPosition = 0;
        }
      }
      sliderImg.classList.add('slider');
      sliderImg.src = `${OurSliderImages[currentPosition]}`;
    })
  })
  





