
// addeventlistener usar para quando não utilizar o onclick no html

var botao = document.querySelector('input[value="Confirmar"]')
botao.addEventListener('click', (event) => {
  votacao(event)
})

function votacao(e) {
  e.preventDefault()
  var rIdade = document.querySelector("input#txtidade")
  var resIdade = document.querySelector("div#resultado")
  console.log(resIdade)
  var idade = String(rIdade.value)
  if (idade < 16) {
    resIdade.innerHTML = "<strong>Não precisa votar</strong>"
  } else if (idade < 18 || idade >= 65) {
    resIdade.innerHTML = "<strong>Voto opcional</strong>"
  } else {
    resIdade.innerHTML = "<strong>Voto obrigatório</strong>"
  }
}

