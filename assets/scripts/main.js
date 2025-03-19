function inicio(){
    document.getElementById('menu').style.display = 'none';
    document.querySelector("#botao-menu").addEventListener("click", abrirMenu);
    document.querySelector("button.botao-pesquisa").addEventListener("click", abrirCaixaPesquisa);
}

function abrirMenu(){
    let menu = document.getElementById("menu");
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}