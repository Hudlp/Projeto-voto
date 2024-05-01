// addeventlistener usar para quando não utilizar o onclick no html

var botao = document.querySelector('input[value="Confirmar"]')
botao.addEventListener("click", (event) => {
  votacao(event)
})

function votacao(e) {
  e.preventDefault()
  var rIdade = document.querySelector("input#txtidade")
  var resIdade = document.querySelector("div#resultado")
  console.log(resIdade)
  var idade = String(rIdade.value)

  if (idade == "") {
    resIdade.innerHTML = "<strong>Digite sua idade</strong>"
    document.querySelector("div#resultado").style.color = "red"
    document.querySelector("input#txtidade").style.border = "solid 1px red"
  } else {
    if (idade < 16) {
      resIdade.innerHTML = "<strong>Não precisa votar</strong>"
      document.querySelector("div#resultado").style.color = "#37447c"
      document.querySelector("input#txtidade").style.border =
        "solid 1px #37447c"
    } else if (idade < 18 || idade >= 65) {
      resIdade.innerHTML = "<strong>Voto opcional</strong>"
      document.querySelector("div#resultado").style.color = "#37447c"
      document.querySelector("input#txtidade").style.border =
        "solid 1px #37447c"
    } else {
      resIdade.innerHTML = "<strong>Voto obrigatório</strong>"
      document.querySelector("div#resultado").style.color = "#37447c"
      document.querySelector("input#txtidade").style.border =
        "solid 1px #37447c"
    }
  }
}