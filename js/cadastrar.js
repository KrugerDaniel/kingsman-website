const custom = document.getElementById('customizar');
const nome = document.getElementById('nome');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const email = document.getElementById('email');
const nascimento = document.getElementById('nascimento');
const masc = document.getElementById('masculino');
const femi = document.getElementById('feminino');

function cadastrar() {
    if (validar()) {
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
    }
}

function validar() {
    return (
        nome.value.replaceAll(' ', '') != '' && usuario.value.replaceAll(' ', '') != '' &&
        senha.value.replaceAll(' ', '') != '' && email.value.replaceAll(' ', '') != '' &&
        nascimento.value.replaceAll(' ', '') != '' && (masc.checked || femi.checked)
    );
}

function alterarCorFundo() {
    if (custom.value == 'custom') {
        let style = document.createElement('style');
        style.setAttribute('id', 'negative')
        style.innerHTML = '' + 
            'body {\n\tbackground-color: rgb(41, 39, 35);\n}\n\n' +
            'header {\n\tbackground-color: rgb(204, 201, 173);\n\tcolor: rgb(22, 21, 19);\n}\n\n' +
            '#header-title {\n\tcolor: rgb(27, 108, 179)\n}\n\n' +
            'nav {\n\tbackground-color: rgb(6, 55, 249);\n}\n\n' +
            'nav li:hover {\n\tbackground-color: rgb(31, 75, 249);\n}\n\n' +
            'li a, #main-div {\n\tcolor: rgb(204, 201, 173);\n}\n\n' +
            'footer {\n\tbackground-color: rgb(204, 201, 173);\n\tcolor: rgb(23, 94, 155);\n}\n\n' +
            'div, p {\n\tfont-family: Arial;\n}\n\n' +
            '.login-div {\n\tbackground-color: rgb(111, 82, 57);\n}\n\n' +
            'input:hover, input:focus, input[type="submit"] {\n\tbackground-color: rgb(5, 47, 211);\n}';
        document.head.appendChild(style);
    } else {
        let style = document.getElementById('negative');
        if (style != undefined) {
            document.head.removeChild(style);
        }
    }
}