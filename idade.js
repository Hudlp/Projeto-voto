// addeventlistener usar para quando não utilizar o onclick no html

var botao = document.querySelector('input[value="Confirmar"]')
botao.addEventListener("click", (event) => {
  checkUserAgeAndSetMessage(event)
})

function checkUserAgeAndSetMessage(e) {
  e.preventDefault()
  var rIdade = document.querySelector("input#txtidade")
  var resIdade = document.querySelector("div#resultado")
  console.log(resIdade)
  var idade = String(rIdade.value)

  if (idade == "") {
    resIdade.innerHTML = "<strong>Digite sua idade</strong>"
    resIdade.style.color = "red"
    rIdade.style.border = "solid 1px red"
    return
  }

  if (idade < 16) {
    resIdade.innerHTML = "<strong>Não precisa votar</strong>"
    resIdade.style.color = "#37447c"
    rIdade.style.border = "solid 1px #37447c"
    return
  }

  if (idade < 18 || idade >= 65) {
    resIdade.innerHTML = "<strong>Voto opcional</strong>"
    resIdade.style.color = "#37447c"
    rIdade.style.border = "solid 1px #37447c"
    return
  }

  resIdade.innerHTML = "<strong>Voto obrigatório</strong>"
  resIdade.style.color = "#37447c"
  rIdade.style.border = "solid 1px #37447c"
}
