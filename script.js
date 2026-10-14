const gameContainer = document.querySelector(".container")
const kasutajaTulemus = document.querySelector(".kasutaja-tulemus img")
const botiTulemus = document.querySelector(".boti-tulemus img")
const tulemus = document.querySelector(".tulemus")
const valikpildid = document.querySelectorAll(".valik-pilt")

const botPildid = [ "images/rock.png", "images/scissors.png", "images/paper.png"]
const Outcomes = {
    RR = "Draw",
    RS = "You",
    RP = "Bot",
    PR = "You",
    PS = "Bot",
    PP = "Draw",
    SR = "Bot",
    SS = "Draw",
    SP = "You"
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const clickedIndex = Array.from(valikPilt).indexOf(clickedImage);

    kasutajaTulemus.src = botiTulemus.src = "images/scissors.png"
    result.textContent = "Wait...";

    valikpildid.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });
  gameContainer.classList.add("start");
  setTimeout(() => {
    gameContainer.classList.remove("start");

    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;
    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    botResult.src = botImageSrc;

  });

}
