//Problem 1
let gameData = [
    {
        player: "Jenn",
        score: 143
    }, 
    {
        player: "Khan",
        score: 7
    }
]

// const scoreButton = document.getElementById("score-button")

// scoreButton.addEventListener("click", function() {
//     console.log(gameData[0].score)
// })

const scoreButton = document.getElementById("score-button")

scoreButton.addEventListener("dblclick", function() {
  console.log(gameData[0].score)
})