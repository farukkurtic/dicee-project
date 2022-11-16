

let dice1 = document.querySelectorAll("img")[0];
let dice2 = document.querySelectorAll("img")[1];

dice1.onclick = function() {
    let randomNumber1 = Math.floor(Math.random()* 6) + 1;
    let randomNumber2 = Math.floor(Math.random()* 6) + 1;

    let dice1Text = "./images/dice" + randomNumber1 + ".png";
    let dice2Text = "./images/dice" + randomNumber2 + ".png";

    let headerText = document.querySelector("h1");

    if(randomNumber1 > randomNumber2) {
        headerText.textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
    headerText.textContent = "Player 2 wins! 🚩";
    } else {
    headerText.textContent = "Draw!";
    }

    dice1.setAttribute("src", dice1Text);
    dice2.setAttribute("src", dice2Text);
}

dice2.onclick = function() {
    let randomNumber1 = Math.floor(Math.random()* 6) + 1;
    let randomNumber2 = Math.floor(Math.random()* 6) + 1;

    let dice1Text = "./images/dice" + randomNumber1 + ".png";
    let dice2Text = "./images/dice" + randomNumber2 + ".png";

    let headerText = document.querySelector("h1");

    if(randomNumber1 > randomNumber2) {
        headerText.textContent = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
    headerText.textContent = "Player 2 wins! 🚩";
    } else {
    headerText.textContent = "Draw!";
    }

    dice1.setAttribute("src", dice1Text);
    dice2.setAttribute("src", dice2Text);
}
