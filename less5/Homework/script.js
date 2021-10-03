/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

const likeBtn = document.querySelector('.like-btn');
const nextComment = document.querySelector('.next-comment');
const commentText = document.querySelector('.comment');
let counterClickNext = 0;

const urlPhoto = () => `https://happypik.ru/wp-content/uploads/2019/10/lisjata1.jpg`;

function MyAva(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
  this.urlMy = urlPhoto;
}

const comment1 = new MyAva('Oleksander', 'cool!', 'https:something...');
const comment2 = new MyAva('Nadin', 'so cute', 'https:something...');
const comment3 = new MyAva('Olga', 'beautiful', 'https:something...');
const comment4 = new MyAva('Masha', 'I like this photo', 'https:something...');

const arrayComment = [comment1, comment2, comment3, comment4];
let currentComment = arrayComment[counterClickNext];

const commentClick = comment => {
  const divHtml = [];
  Object.keys(comment).forEach(element => {
    if (typeof comment[element] === 'function'){
      divHtml.push(`
        <div class="textComment">
          <p>${element}:</p>
          <p> ${comment[element]()}</p>
        </div>
      `);
    } else {
      divHtml.push(`
        <div class="textComment">
          <p>${element}:</p>
          <p>${comment[element]}</p>
        </div>
      `);
    }
  })
  commentText.innerHTML = divHtml.join('');
}

function counter () {
  arrayComment.forEach(comment => {
    comment.likes += 1;
  })
  commentClick(currentComment);
};

likeBtn.addEventListener('click', counter);

const texComment = () => {
  let comment = arrayComment[counterClickNext];
  currentComment = comment;
  counterClickNext++;
  if (counterClickNext > arrayComment.length -1) {
    counterClickNext = 0;
  }
  commentClick(comment);
}

window.addEventListener('load', texComment)
nextComment.addEventListener('click', texComment)

