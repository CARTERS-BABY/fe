function add() {
    var j1 = document.getElementById('j1').value
    var j2 = document.getElementById('j2').value
    localStorage.setItem('j1',j1)
    localStorage.setItem('j2',j2)
    window.location = 'game.html'
    }





    var j1 = localStorage.getItem('j1') 
var j2 = localStorage.getItem('j2') 
var pontosj1 = 0
var pontosj2 = 0
document.getElementById('namej1').innerHTML = j1
document.getElementById('namej2').innerHTML = j2
document.getElementById('pontoj1').innerHTML = pontosj1
document.getElementById('pontoj2').innerHTML = pontosj2
function enviar(){
var pegar = document.getElementById ('palavra').value
var palavra = pegar.toLowerCase()
console.log (palavra)
var letra1 = palavra.charAt(1)
console.log (letra1)
var letra2 = palavra.charAt(Math.floor(palavra.length/2))
console.log (letra2)
var letra3 = palavra.charAt(palavra.length-1)
console.log (letra3)
palavra= palavra.replace(letra1,'_')
palavra= palavra.replace(letra2,'_')
palavra= palavra.replace(letra3,'_')
console.log(palavra)
var saida = document.getElementById('aotput')
var pergunta = `<h4>Palavra: ${palavra}</h4>`
var input = '<input type="text" id="resposta">'
var button = '<button class="btn btn-info" onclick="checar()"> Checar </button>'
saida.innerHTML = pergunta+input+button
document.getElementById('palavra').value= ''
}