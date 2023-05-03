const spanName = document.getElementById('header-user-text');
const img = document.getElementById('user-img');

let json = JSON.parse(localStorage.getItem('login'));

if (json != null) {
    spanName.innerHTML = json[0].login;
} else {
    spanName.innerHTML = 'Usuário não autenticado';
    img.style.display = 'none';
}