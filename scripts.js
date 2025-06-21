let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let yours = document.querySelector(".n1")
let pc = document.querySelector(".n2")
let texto = document.querySelector(".text")

let yourScore = 0
let theirsCore = 0

rock.addEventListener("click", function () {

    let theirs = Math.floor(Math.random() * 3) + 1

    if (theirs === 1) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose paper, you lost"
        theirsCore++
    } else if (theirs === 2) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose scissor, YOU WON"
        yourScore++
    }
    else {
        texto.innerHTML = ""
        texto.innerHTML = "It is a tie, no points"
    }

    pc.innerHTML = theirsCore
    yours.innerHTML = yourScore
})

paper.addEventListener("click", function () {

    let theirs = Math.floor(Math.random() * 3) + 1

    if (theirs === 2) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose scissor, you lost"
        theirsCore++
    } else if (theirs === 0) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose rock, YOU WON"
        yourScore++
    }
    else {
        texto.innerHTML = ""
        texto.innerHTML = "It is a tie, no points"
    }

    pc.innerHTML = theirsCore
    yours.innerHTML = yourScore
})

scissor.addEventListener("click", function () {

    let theirs = Math.floor(Math.random() * 3) + 1


    if (theirs === 0) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose rock, you lost"
        theirsCore++
    } else if (theirs === 1) {
        texto.innerHTML = ""
        texto.innerHTML = "Pc choose paper, YOU WON"
        yourScore++
    }
    else {
        texto.innerHTML = ""
        texto.innerHTML = "It is a tie, no points"
    }

    pc.innerHTML = theirsCore
    yours.innerHTML = yourScore
})