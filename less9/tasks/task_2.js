/*

    Задание 2:
    Написать форму логина (логин(username) пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", 
    если нет - вывести alert({userName} был добавлен), форма логина остается

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/

const userForm = document.getElementById('formUser');
const hiUser = document.querySelector('.hide');

let users = [];
let newUser = {};

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

const submitForm = event => {
    event.preventDefault;
    users = JSON.parse(localStorage.getItem('users')) ?? [];
    newUser = [];

    if (userForm.username.value !== '' && userForm.password.value !== '') {
        newUser = new User(userForm.username.value, userForm.password.value);
        const findUser = users.find(u => u.name === newUser.name);
        userForm.reset();

        if (findUser) {
            if (findUser.password === newUser.password) {
                logIn();
            } else {
                userForm.password.style.borderColor = 'red';
                alert('Wrong password');
            }  
        } else {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert(`Hi ${newUser.name}! Welcome, to the family`);
        }
    } else {
        alert('inputs should not be empty');
    }
}

userForm.querySelector('button').addEventListener('click', submitForm);

const logIn = () => {
    userForm.style.display = 'none';
    hiUser.style.display = 'flex';
    hiUser.querySelector('span').innerText = `Hellow ${newUser.name}. We missed you.`;
    document.getElementById('signOut').addEventListener('click', signOut);
}

const signOut = event => {
    event.preventDefault();
    userForm.style.display = 'flex';
    hiUser.style.display = 'none';
    const deleteUser = users.filter (u => u.name !== newUser.name && u.password !== newUser.password);
    localStorage.setItem('users', JSON.stringify(deleteUser));
}
 





