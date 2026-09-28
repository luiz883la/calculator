const res = document.getElementById("res");
const numero1 = document.querySelector(".n1");
const numero2 = document.querySelector(".n2");
const numero3 = document.querySelector(".n3");
const numero4 = document.querySelector(".n4");
const numero5 = document.querySelector(".n5");
const numero6 = document.querySelector(".n6");
const numero7 = document.querySelector(".n7");
const numero8 = document.querySelector(".n8");
const numero9 = document.querySelector(".n9");
const numero0 = document.querySelector(".zero");
const numero00 = document.querySelector(".zero2");
const mais = document.querySelector(".mais");
const sub = document.querySelector(".sub");
const mult = document.querySelector(".mult");
const divisao = document.querySelector(".div");
const igual = document.querySelector(".igual");
const ponto = document.querySelector(".ponto");
const del = document.querySelector(".del");
numero0.addEventListener("click", ()=>{digitar_n(0)})
numero1.addEventListener("click", ()=>{digitar_n(1)})
numero2.addEventListener("click", ()=>{digitar_n(2)})
numero3.addEventListener("click", ()=>{digitar_n(3)})
numero4.addEventListener("click", ()=>{digitar_n(4)})
numero5.addEventListener("click", ()=>{digitar_n(5)})
numero6.addEventListener("click", ()=>{digitar_n(6)})
numero7.addEventListener("click", ()=>{digitar_n(7)})
numero8.addEventListener("click", ()=>{digitar_n(8)})
numero9.addEventListener("click", ()=>{digitar_n(9)})
numero00.addEventListener("click", ()=>{digitar_n("00")})
mult.addEventListener("click", ()=>{digitar_s("x")})
sub.addEventListener("click", ()=>{digitar_s("-")})
divisao.addEventListener("click", ()=>{digitar_s("/")})
mais.addEventListener("click", ()=>{digitar_s("+")})
ponto.addEventListener("click", ()=>{digitar_b()})
del.addEventListener("click", ()=>{deletar()})
igual.addEventListener("click", ()=>{resultado()})
let iniciou = true;
let simbolo = '';
let historico = [];
let conta = []
let n1 = ''
let n2 = ''
let resultados = 0
function digitar_n(i){
console.log(historico)
    if (res.innerText.length == 11) {
        alert("o numero nao pode contar mais de 11 caracteres")
        return
    }
    if(iniciou){
        historico.push(Number(i))
        res.innerHTML = `${i}`
        iniciou = false
    }else {
        historico.push(i)
        res.innerHTML += `${i}`
    }conta.push(Number(i))
}

function digitar_s(i) {
    let lista = [ '/', '+', '-', 'x']
    n1 = res.innerText
    if (simbolo.includes(conta[conta.length-1])) {
        return // o return serve para quando alguma informacao estaja 
        // esrrada por culpa do usuario e ele acaba bloqueando a funcao de finalizar
    }
    if (iniciou) {
        alert("invalido!")
        return
    }
    if (i == '/') {
        simbolo = i
        historico = []
        conta.push(i)
        res.innerText += '÷'
        return
    }
    simbolo = i
    historico = []
    conta.push(i)
    res.innerText += conta[conta.length-1]
}
function digitar_b(){
    if(historico[0] == 0){
        historico.pop(0)
        return false
    }
    if (historico.includes('.')) {return}
        res.innerText += '.'
        conta.push('.')
        historico.push('.')
}

function resultado(){
    let n = 0
    if (simbolo == '') {
        alert("conta invalida!")
        return
    }
    while (n < historico.length) {
        n++
        n2 += historico[n-1]
    }
    if(simbolo == "x"){simbolo = "*"}
    resultados = eval(n1 + simbolo + n2)
    res.innerText = resultados
    simbolo = ''
    n1 = ''
    n2 = ''
    historico = []
    conta = [String(resultados)]
}
function deletar(){
    let n = 0
    conta.pop(conta.length-1)
    if (conta.length == 0) {
        res.innerText = '0'
        iniciou = true
    }else {
        res.innerText = ''
        while (n < conta.length) {
            res.innerText += conta[n]
            n++
        }
    }
    
}