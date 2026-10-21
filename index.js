var gameData = {
    stardust: 199999, // control according to will during testing
    stardustPerUpload: 1,
}
var upgrades = {
    helpers: 1,
    coffee: 0,
    blessed: 0,
}

var upgradecosts = {
    stardustPerUploadCost: 10,
    buyHelpersCost: 1500,
    buycoffee: 3000,
    getblessed: 5000,
}

var prestigeData = {
    requirement: 55000,

}

var permanentData = {
    
}

function uploadProject() {
    gameData.stardust += Math.ceil(((1 + upgrades.blessed) * ((1 + upgrades.coffee) * (gameData.stardustPerUpload * upgrades.helpers))))
    document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"
}

function buyStardustPerUpload() { // recurring upgrade 1
    if (gameData.stardust >= upgradecosts.stardustPerUploadCost) {
        gameData.stardust = gameData.stardust - upgradecosts.stardustPerUploadCost
        gameData.stardustPerUpload = gameData.stardustPerUpload + 1
        upgradecosts.stardustPerUploadCost = upgradecosts.stardustPerUploadCost * 2
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"    
        document.getElementById("buyStardustPerUpload").innerHTML = "current level " + gameData.stardustPerUpload + ", next-cost: " + upgradecosts.stardustPerUploadCost + " Stardust"
    }
}

function buyHelpers() { // recurring upgrade 2
    if (gameData.stardust >= upgradecosts.buyHelpersCost) {
        gameData.stardust = gameData.stardust - upgradecosts.buyHelpersCost
        upgrades.helpers = upgrades.helpers + 1
        upgradecosts.buyHelpersCost = Math.ceil(upgradecosts.buyHelpersCost * 1.25)
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"  
        document.getElementById("buyHelpers").innerHTML = "current level " + upgrades.helpers + " next-cost: " + upgradecosts.buyHelpersCost + " stardust"
    }
    if (upgrades.helpers >= 4) {
            document.getElementsByClassName("coffee")[0].style.display = "block"
    }
    if (upgrades.helpers >= 6) {
            document.getElementsByClassName("blessed")[0].style.display = "block"
    }   
}

function buyCoffee() {
     if (upgrades.coffee > 0) {
        return;
    }
    if (gameData.stardust >= upgradecosts.buycoffee) {
        gameData.stardust = gameData.stardust - upgradecosts.buycoffee
        upgrades.coffee = upgrades.coffee + 1
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"
        document.getElementById("buyCoffee").innerHTML = "BOUGHT!"
    }
}

function getBlessed() {
    if (upgrades.blessed > 0) {
        return;
    }
    if (gameData.stardust >= upgradecosts.getblessed) {
        gameData.stardust = gameData.stardust - upgradecosts.getblessed
        upgrades.blessed = upgrades.blessed + 0.2 //figure out how to make decimal not show up in Stardust amount
        document.getElementById("stardustcount").innerHTML = gameData.stardust + " Stardust"
        document.getElementById("getBlessed").innerHTML = "BOUGHT!"
        document.getElementsByClassName("prestigetext")[0].style.visibility = "visible" 
        document.getElementsByClassName("prestigeinfo")[0].style.visibility = "visible" 
    }
}

function doPrestige() {
    if (gameData.stardust >= prestigeData.requirement) {
        gameData.stardust = 0
        gameData.stardustPerUpload = 1
        upgrades.helpers = 1
        upgrades.coffee = 0
        upgrades.blessed = 0
        upgradecosts.stardustPerUploadCost = 10
        upgradecosts.buyHelpersCost = 1500
        upgradecosts.buycoffee = 3000
        upgradecosts.getblessed = 5000
        document.getElementById("stardustcount").innerHTML = "0 Stardust"
        document.getElementById("buyStardustPerUpload").innerHTML = "current level " + gameData.stardustPerUpload + ", next-cost: " + upgradecosts.stardustPerUploadCost + " Stardust"
        document.getElementById("buyHelpers").innerHTML = "current level " + upgrades.helpers + " next-cost: " + upgradecosts.buyHelpersCost + " stardust"
        document.getElementById("buyCoffee").innerHTML = "cost: 3000 Stardust"
        document.getElementsByClassName("coffee")[0].style.display = "none"
        document.getElementById("getBlessed").innerHTML = "cost: 5000 Stardust"
        document.getElementsByClassName("blessed")[0].style.display = "none"

    }
}



