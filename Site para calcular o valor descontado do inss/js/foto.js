var lista = document.getElementById('lista')
var imagem = document.getElementById('imagem')
var legenda = document.getElementById('legenda')

function mudarFoto(){
    imagem.src = lista.value
    let p = lista.selectedIndex
    legenda.innerText = lista.options[p].innerText
}

lista.addEventListener('change', mudarFoto)