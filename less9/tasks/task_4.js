  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */

const div = document.querySelector('.box');
const textFromList = div.innerText;


const allWords = /\w+/g;
const allLetters = /[a-e]/g;
const allDate = /(\d{4})/g;
const squarQuotes = /\[\w+\]/g;
const allFileFormats = /\.(gzip|jpg|png|gif)/g;
const allEmail = /(\w+)@(\w+.)(\w+)/g;
const allWordsBigLatter = /([A-Z])\w+/g;
const telephone = /\+((\d)\w+)\s(\((\d)\w+\))\s(\d\w+)\-((\d)\w+)\-((\d)\w+)/g;



