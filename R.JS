var j1 = localStorage.getItem('j1') 
var j2 = localStorage.getItem('j2') 
var pontosj1 = 0
var pontosj2 = 0
document.getElementById('namej1').innerHTML = j1
document.getElementById('namej2').innerHTML = j2
document.getElementById('pontoj1').innerHTML = pontosj1
document.getElementById('pontoj2').innerHTML = pontosj2
function enviar(){
var pegarn1 = document.getElementById ('n1').value
var pegarn2 = document.getElementById ('n2').value

var resultado = pegarn1 * pegarn2
 

var saida = document.getElementById('aotput')
var pergunta = `<h4> ${pegarn1}x  ${pegarn2}</h4>`
var input = '<input type="number" id="resposta">'
var button = '<button class="btn btn-info" onclick="checar()"> Checar </button>'
saida.innerHTML = pergunta+input+button
document.getElementById('n1').value= ''
document.getElementById('n2').value= ''
}