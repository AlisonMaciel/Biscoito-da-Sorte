const buttonImg = document.querySelector(".screen1 button")
const button = document.querySelector(".screen2 #button")
const p = document.querySelector(".screen2 p")

const array = [
  "Acredite em si mesmo!",
  "Nunca desista dos seus sonhos.",
  "Você é mais forte do que imagina.",
  "Persistência é o caminho para o sucesso.",
  "Cada dia é uma nova oportunidade.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
]

// Funcitons

function first_click() {
    const phrases = Math.floor(Math.random() * array.length)
    const phrase = array[phrases]
    const screen1 = document
    .querySelector(".screen1")
    .style.display = "none"
    const screen2 = document
    .querySelector(".screen2")
    .style.display = "block"
    p.innerHTML = phrase
  
}

function openAnotherCookie() {
  event.preventDefault()
  const screen2 = document
  .querySelector(".screen2")
  .style.display = "none"
  const screen1 = document
  .querySelector(".screen1")
  .style.display = "block"
}

// Event

buttonImg.addEventListener("click", first_click )
button.addEventListener("click", openAnotherCookie)
