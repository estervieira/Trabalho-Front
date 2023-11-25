
// Seleção de elementos
const btnLogin = document.querySelector('#btnLogin')
const fieldUser = document.querySelector('#user')
const fieldPassword = document.querySelector('#password')
const formLogin = document.querySelector("#form-login")

// Criação de usuário manual
const user = {
    'login': 'admin',
    'password': '123'
}

// Autentificação de usuário
function userIsAuthenticated() {
    return user.login === fieldUser.value &&
        user.password === fieldPassword.value
}

// reset formulário de logion após tentar logar
function resetFormLogin() {
    formLogin.reset()
}

// Se usuário autenticado direcionar para página, caso contrário msg erro
async function login() {

    if (userIsAuthenticated()) {
        localStorage.setItem('user', user.login)
        resetFormLogin()
        window.location.href = "/html/selector.html"
    } else {
        localStorage.removeItem('user')
        resetFormLogin()
        alert('Usuário/Senha inválidos.')
    }
}

// Ao clicar no bnt entrar executa a função login e previne qualquer ação após essa execução
btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})

