const gameContainer = document.querySelector(".container")
const kasutajaTulemus = document.querySelector(".kasutaja-tulemus img")
const botiTulemus = document.querySelector(".boti-tulemus img")
const tulemus = document.querySelector(".tulemus")
const valikPildid = document.querySelectorAll(".valik-pilt")
const kasutajaSkoor = document.querySelector("#kasutaja-skoor")
const botiSkoor = document.querySelector("#boti-skoor")
const uuestiAlustaNupp = document.querySelector("#uuesti-alusta")

const botPildid = ["images/rock.png", "images/paper.png", "images/scissors.png"]
const valikuVaartused = ["R", "P", "S"]
let kasutajaPunktid = 0
let botiPunktid = 0

function leiaTulemus(kasutajaValik, botiValik) {
  if (kasutajaValik === botiValik) {
    return "viik"
  } else if (
    (kasutajaValik === "R" && botiValik === "S") ||
    (kasutajaValik === "P" && botiValik === "R") ||
    (kasutajaValik === "S" && botiValik === "P")
  ) {
    return "kasutaja"
  } else {
    return "bot"
  }
}

function uuendaSkoori(manguTulemus) {
  if (manguTulemus === "kasutaja") {
    kasutajaPunktid += 1
  } else if (manguTulemus === "bot") {
    botiPunktid += 1
  }

  kasutajaSkoor.textContent = kasutajaPunktid
  botiSkoor.textContent = botiPunktid
}

function handleOptionClick(event) {
  if (gameContainer.classList.contains("start")) return

    const clickedImage = event.currentTarget;
    const clickedIndex = Array.from(valikPildid).indexOf(clickedImage);
    const kasutajaValik = valikuVaartused[clickedIndex]
    if (!kasutajaValik) return
    const botiIndeks = Math.floor(Math.random() * botPildid.length)

    kasutajaTulemus.src = "images/scissors.png"
    botiTulemus.src = "images/scissors.png"
    tulemus.textContent = "Arvuti valib..."

    valikPildid.forEach((image, index) => {
      image.classList.toggle("active", index === clickedIndex)
    })
    gameContainer.classList.add("start")
    uuestiAlustaNupp.disabled = true

  setTimeout(() => {
    gameContainer.classList.remove("start")
    uuestiAlustaNupp.disabled = false

    kasutajaTulemus.src = clickedImage.querySelector("img").src
    botiTulemus.src = botPildid[botiIndeks]

    const manguTulemus = leiaTulemus(kasutajaValik, valikuVaartused[botiIndeks])
    uuendaSkoori(manguTulemus)

    if (manguTulemus === "viik") {
      tulemus.textContent = "Viik!"
    } else if (manguTulemus === "kasutaja") {
      tulemus.textContent = "Sina võitsid!"
    } else {
      tulemus.textContent = "Arvuti võitis!"
    }
  }, 1200)
}

function alustaUuesti() {
  kasutajaPunktid = 0
  botiPunktid = 0
  kasutajaSkoor.textContent = kasutajaPunktid
  botiSkoor.textContent = botiPunktid
  kasutajaTulemus.src = "images/scissors.png"
  botiTulemus.src = "images/scissors.png"
  tulemus.textContent = "Vali kivi, paber või käärid."
  gameContainer.classList.remove("start")
  valikPildid.forEach(image => image.classList.remove("active"))
}

valikPildid.forEach(image => {
  image.addEventListener("click", handleOptionClick)
})
uuestiAlustaNupp.addEventListener("click", alustaUuesti)

