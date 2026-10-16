var gameData = {
    stardust: 1999, // control according to will during testing //
    stardustPerUpload: 1,
    stardustPerUploadCost: 10,
    helpers: 1,
    buyHelpersCost: 1500
}

function uploadProject() {
    gameData.stardust += gameData.stardustPerUpload * gameData.helpers
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

function buyHelpers() {
    if (gameData.stardust >= gameData.buyHelpersCost) {
        gameData.stardust = gameData.stardust - gameData.buyHelpersCost
        gameData.helpers = gameData.helpers + 1
        gameData.buyHelpersCost = gameData.buyHelpersCost * 1.25
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"  
        document.getElementById("buyHelpers").innerHTML = "Buy Helpers(more stardust per upload)(level " + gameData.helpers + ") cost: " + gameData.buyHelpersCost + " stardust"
    }
}
