function togglemode() {
  const html = document.body
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maykbrito sorrindo usando óculos escuro, camisa preta e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo usando óculos, camisa preta, barba e fundo amarelo"
    )
  }
}

function showalt() {
  const imagem = document.querySelector("#profile img")

  const textoAlt = imagem.alt

  alert(textoAlt)
}
