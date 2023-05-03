const custom = document.getElementById('customizar');
const nome = document.getElementById('nome');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const email = document.getElementById('email');
const nascimento = document.getElementById('nascimento');
const masc = document.getElementById('masculino');

function cadastrar() {
    let sexo
    if (masc.checked) {
        sexo = 'masculino';
    } else {
        sexo = 'feminino';
    }
    localStorage.setItem(
        'cadastro',
        '[{'+ 
        '"nome":"'       + nome.value       + '",' +
        '"usuario":"'    + usuario.value    + '",' + 
        '"senha":"'      + senha.value      + '",' + 
        '"email":"'      + email.value      + '",' + 
        '"nascimento":"' + nascimento.value + '",' + 
        '"sexo":"'       + sexo             + '"'  + 
        '}]'
    );
    alert('Erfolgreich registriert');
    alterarCorFundo();
}

function alterarCorFundo() {
    if (custom.value == 'custom') {
        let style = document.createElement('style');
        style.innerHTML = 'div, p, header, footer, nav, main {background-color:red;}' +
        'div, p {font-family: Arial}';
        document.head.appendChild(style);
    }
}