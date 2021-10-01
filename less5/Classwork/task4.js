/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5'];
let cipherWord = '';
let decoderWord = '';

function cipher(word) {
  console.log(`заданное слово: ${word}`);
  return number => {
    const cipherLetter = [];
    word.split('').forEach(letter => {
      let letters = this.indexOf(letter) + number;
      cipherLetter.push(this[letters]);
    })
    cipherWord = cipherLetter.join('');
    console.log(`слово под шифром: ${cipherWord}`);

    function decoder() {
      numbers.forEach(number => {
        let decoderLetter = [];
        const arrayWord = cipherWord.split('');
        arrayWord.forEach(word => {
          const indexWord = this.indexOf(word) - number;
          decoderLetter.push(this[indexWord]);
        })
        decoderWord = decoderLetter.join('');
        console.log(`наверное правильный ответ: ${decoderWord}`);
      })
    }
    const a = decoder.bind(alphabet);
    a();
  }
}

const functionCipher = cipher.bind(alphabet)('apple')(3);
