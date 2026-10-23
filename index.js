var gameData = {
    stardust: 1999999, // control according to will during testing
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
    buycoffee: 5000,
    getblessed: 8000,
}

var prestigeData = {
    requirement: 55000,
    superstars: 0,
    prestigecount: 0,
    prestigeupg1: 2,
    prestigeupg2: 5,
}

var permanentData = {
   prestigecountboost: 0,
   prestigeupg1count: 0,
   prestigeupg3count: 0,
   superstar2xmult: 0,
   superstarmult: 0,
}

function uploadProject() {
    gameData.stardust += Math.ceil((prestigeData.prestigecount * permanentData.prestigecountboost) + ((1 + upgrades.blessed) * ((1 + upgrades.coffee) * (gameData.stardustPerUpload * upgrades.helpers))))
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
        gameData.stardust = 19999999999
        gameData.stardustPerUpload = 1
        upgrades.helpers = 1
        upgrades.coffee = 0
        upgrades.blessed = 0
        upgradecosts.stardustPerUploadCost = 10
        upgradecosts.buyHelpersCost = 1500
        upgradecosts.buycoffee = 5000
        upgradecosts.getblessed = 8000
        prestigeData.prestigecount = prestigeData.prestigecount + 1
        prestigeData.superstars = prestigeData.superstars + (permanentData.superstar2xmult + 1) * (1 + (permanentData.superstarmult * Math.floor((prestigeData.prestigecount / 10))))
        document.getElementById("stardustcount").innerHTML = "0 Stardust"
        document.getElementById("buyStardustPerUpload").innerHTML = "current level " + gameData.stardustPerUpload + ", next-cost: " + upgradecosts.stardustPerUploadCost + " Stardust"
        document.getElementById("buyHelpers").innerHTML = "current level " + upgrades.helpers + " next-cost: " + upgradecosts.buyHelpersCost + " stardust"
        document.getElementById("buyCoffee").innerHTML = "cost: 5000 Stardust"
        document.getElementsByClassName("coffee")[0].style.display = "none"
        document.getElementById("getBlessed").innerHTML = "cost: 8000 Stardust"
        document.getElementsByClassName("blessed")[0].style.display = "none"
        document.getElementsByClassName("prestigecount")[0].innerHTML = prestigeData.prestigecount + " Prestiges"
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
    }
}

function prestigeupg1() {
    if (permanentData.prestigeupg1count > 0) {
        return;
    }
    if (prestigeData.superstars >= 2) {
        prestigeData.superstars = prestigeData.superstars - 2
        permanentData.prestigecountboost = 5
        permanentData.prestigeupg1count = permanentData.prestigeupg1count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg1").innerHTML = "BOUGHT!"
    }
}

function prestigeupg2() {
    if (prestigeData.superstars >= 5) {
        prestigeData.superstars = prestigeData.superstars - 5
        permanentData.superstar2xmult = permanentData.superstar2xmult + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg2").innerHTML = "BOUGHT!"
    }
}

function prestigeupg3() {
    if (prestigeData.superstars >= 10) {
        prestigeData.superstars = prestigeData.superstars - 10
        permanentData.superstarmult = 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg3").innerHTML = "BOUGHT!"
    }
}