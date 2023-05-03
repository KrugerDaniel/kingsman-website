function addLogin() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login.replaceAll(' ', '') != '' && 
        password.replaceAll(' ', '') != '') {
            localStorage.setItem(
                'login',
                '[{"login":"' + login.trim() + '", "password":"' + password.trim() + '"}]'
            );
        showLoginAdded();
        return;
    }
    withoutData();
}

function showLoginAdded() {
    alert('Usuário devidamente autenticado!');
    window.location.href = 'index.html';
}

function withoutData() {
    alert('Informe os dados de autenticação');
}