function imposto(salario){
    if(salario <= 2259.20){
        return 0
    }else if(salario <= 2826.65){
        return salario * 0.075 - 169.44
    }else if(salario <= 3751.05){
        return salario * 0.15 - 381.44
    }else if(salario <= 4664.68){
        return salario * 0.225 - 662.77
    }else{
        return salario * 0.275 - 896
    }
}

let salario = document.getElementById('salario')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

function calcular(){
    if(salario.value){
        let digitado = Number(salario.value)
        let ir = imposto(digitado)
        resultado.innerText = 'R$ '+ir
    }else{
        alert('Digite o salário')
    }
}

botao.addEventListener('click', calcular)
salario.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        calcular()
    }
})