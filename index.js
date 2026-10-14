var gameData = {
    stardust: 0,
    stardustPerUpload: 1,
    stardustPerUploadCost: 10
}

function uploadProject() {
    gameData.stardust = gameData.stardust + gameData.stardustPerUpload
    document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"
}

function buyStardustPerUpload() {
    if (gameData.stardust >= gameData.stardustPerUploadCost) {
        gameData.stardust = gameData.stardust - gameData.stardustPerUploadCost
        gameData.stardustPerUpload = gameData.stardustPerUpload + 1
        gameData.stardustPerUploadCost = gameData.stardustPerUploadCost * 2
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"    
        document.getElementById("buyStardustPerUpload").innerHTML = "Increase Stardust Gain(Level " + gameData.stardustPerUpload + ") Cost: " + gameData.stardustPerUploadCost + " Stardust"
    }
}