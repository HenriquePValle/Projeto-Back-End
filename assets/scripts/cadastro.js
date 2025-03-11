function validarDados(){
    event.preventDefault();
    let formulario = document.querySelector(".formulario");
    let email = formulario.email_usuario.value;
    let nome = formulario.nome_usuario.value;
    let senha = formulario.senha_usuario.value;
    let senhaConfirmacao = formulario.senha_usuario_confirmacao.value;
    if(senha !== senhaConfirmacao) {
        window.alert("Senhas diferentes");
        return false;
    } else {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };
        if(validaUsuario(usuario))
             return true;
        else window.alert("Dados Incorretos");
    }
}