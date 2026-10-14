var gameData = {
    stardust: 0,
    stardustPerUpload: 1,

}

function uploadProject() {
    gameData.stardust = gameData.stardust + gameData.stardustPerUpload
    document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"
}