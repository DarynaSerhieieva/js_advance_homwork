/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список пользователей:  https://jsonplaceholder.typicode.com/users
    Перебирает, выводит табличку:

    # | userName | email           | Показать webiste   | Показать phone |
    1.| userName | email@test.com  | button             | button
    2.| userName | email@test.com  | 20/10/2019         | button
    3.| userName | email@test.com  | button             | button
    4.| userName | email@test.com  | button             | button

    Данные о сайте и номер телефона скрывать при выводе и показывать при клике.

*/

let usersHtml = `
  <tr>
    <th>#</th>
    <th>userName</th>
    <th>email</th>
    <th>website</th>
    <th>phone</th>
  </tr>
`;

const addTable = ({ id, username, email, website, phone }) => {
  usersHtml += `
    <tr>
      <td>${id}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td><span>${website}</span><button class="button">show</button/></td>
      <td><span>${phone}</span><button class="button">show</button/></td>
    </tr>
  `
};

async function getUsers() {
  const getListUsers = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await getListUsers.json();
  users.forEach(element => addTable(element))

  document.getElementById('addTable').innerHTML = usersHtml;

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
      const span = button.closest('td').querySelector('span');
      if (button.innerText === 'show') {
        button.innerText = 'hide';
        span.style.display = 'flex';
      } else {
        button.innerText = 'show';
        span.style.display = 'none';
      }
    })
  })
}

getUsers();

