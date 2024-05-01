// addeventlistener usar para quando não utilizar o onclick no html

var button = document.querySelector('input[value="Confirmar"]')
button.addEventListener("click", (event) => {
  checkUserAgeAndSetMessage(event)
})

function checkUserAgeAndSetMessage(e) {
  e.preventDefault()
  const userAgeInput = document.querySelector("input#txtidade")
  const resultContainer = document.querySelector("div#resultado")
  const age = String(userAgeInput.value)

  if (age == "") {
    resultContainer.innerHTML = "<strong>Digite sua idade</strong>"
    resultContainer.style.color = "red"
    userAgeInput.style.border = "solid 1px red"
    return
  }

  if (age < 16) {
    resultContainer.innerHTML = "<strong>Não precisa votar</strong>"
    resultContainer.style.color = "#37447c"
    userAgeInput.style.border = "solid 1px #37447c"
    return
  }

  if (age < 18 || age >= 65) {
    resultContainer.innerHTML = "<strong>Voto opcional</strong>"
    resultContainer.style.color = "#37447c"
    userAgeInput.style.border = "solid 1px #37447c"
    return
  }

  resultContainer.innerHTML = "<strong>Voto obrigatório</strong>"
  resultContainer.style.color = "#37447c"
  userAgeInput.style.border = "solid 1px #37447c"
}
