function validarDados(){
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    const confirmacaoSenhaValida = validarConfirmacaoSenha();
    return nomeValido && emailValido && senhaValida && confirmacaoSenhaValida;
}

function validarNome(){
    const nome = document.getElementById('nome_usuario').value.trim();
    const erroNome = document.getElementById('erro_nome');
    if (nome === '') {
        erroNome.textContent = 'Por favor, insira seu nome.';
        return false;
    } else {
        erroNome.textContent = '';
        return true;
    }
}

function validarEmail(){
    const email = document.getElementById('email_usuario').value.trim();
    const erroEmail = document.getElementById('erro_email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        erroEmail.textContent = 'Por favor, insira um e-mail válido.';
        return false;
    } else {
        erroEmail.textContent = '';
        return true;
    }
}

function validarSenha(){
    const senha = document.getElementById('senha_usuario').value.trim();
    const erroSenha = document.getElementById('erro_senha');
    const regexSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*\(\)\+\=\{\}\[\]\?\,\.\;\:<>\\\/´`~^"']).{10,}/gm;
    let correto = regexSenha.test(senha);
    if(!correto)
        erroSenha.textContent = 'Por favor, digite uma senha válida.';
    else
        erroSenha.textContent = '';
    return correto;
}

function validarSenhaDetalhada(){
    const senha = document.getElementById('senha_usuario').value.trim();
    const erroSenha = document.getElementById('erro_senha');
    const temMaiuscula = /^(?=.*[A-Z])/.test(senha);
    const temMinuscula = /^(?=.*[a-z])/.test(senha);
    const temNumero = /^(?=.*\d)/.test(senha);
    const temSimbolo = /^(?=.*[!@#$%&*\(\)\+\=\{\}\[\]\?\,\.\;\:<>\\\/´`~^"'])/.test(senha);
    const temComprimento = (senha.length >= 10);
    const valida = temMaiuscula && temMinuscula && temNumero && temSimbolo && temComprimento;
    if(!valida){
        erroSenha.innerHTML = 'Senha Inválida. A sua senha deve conter ao menos:<br/>';
        if(!temMaiuscula) erroSenha.innerHTML += 'Uma letra maiúscula<br/>';
        if(!temMinuscula) erroSenha.innerHTML += 'Uma letra minúscula<br/>';
        if(!temNumero) erroSenha.innerHTML += 'Um número<br/>';
        if(!temSimbolo) erroSenha.innerHTML += 'Um caracter especial<br/>';
        if(!temComprimento) erroSenha.innerHTML += 'Dez ou mais caracteres<br/>';
    } else
        erroSenha.innerHTML = '';
    return valida;
}


function validarConfirmacaoSenha(){
    const senha = document.getElementById('senha_usuario').value.trim();
    const senhaConfirmacao = document.getElementById('senha_usuario_confirmacao').value.trim();
    const erroSenhaConfirmacao = document.getElementById('erro_senha_confirmacao');
    if(senha !== senhaConfirmacao){
        erroSenhaConfirmacao.textContent = 'As senhas não coincidem!';
        return false;
    } else {
        erroSenhaConfirmacao.textContent = '';
        return true;
    }
}

function validarDadosEntrar(){
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    return emailValido && senhaValida;
}