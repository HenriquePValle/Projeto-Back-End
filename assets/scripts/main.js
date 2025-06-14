function inicio(){
    if(window.innerWidth < 600){
        //document.getElementById('menu').style.display = 'none';
        document.getElementById("campo-pesquisa").style.display = 'none';
        document.querySelector("#botao-menu").addEventListener("click", abrirMenu);
        document.querySelector("button.botao-pesquisa").addEventListener("click", abrirCaixaPesquisa);
    }
}

function abrirMenu(){
    let menu = document.getElementById("menu");
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
        document.getElementsByClassName("campo-pesquisa")[0].style.display = 'none';
    }
}

function abrirCaixaPesquisa(){
    let caixaPesquisa = document.getElementById("campo-pesquisa");
    caixaPesquisa.style.display = 'block';
}