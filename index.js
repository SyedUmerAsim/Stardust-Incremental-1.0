var gameData = {
    stardust: 1999999999, // control according to will during testing
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
    requirementinc: 10000,
    superstars: 0,
    prestigecount: 0,
    prestigeupg1: 1,
    prestigeupg2: 3,
    prestigeupg3: 10,
    prestigeupg4: 20,
    prestigeupg5: 40,
}

var permanentData = {
   prestigecountboost: 0,
   prestigeupg1count: 0,
   prestigeupg2count: 0,
   prestigeupg3count: 0,
   prestigeupg4count: 0,
   prestigeupg5count: 0,
   superstar2xmult: 0,
   superstarmult: 0,
   thirdupgreq: 10,
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
            document.getElementsByClassName("coffee")[0].style.display = "inline-flex"
            document.getElementById("info").innerHTML = "1 new upgrade unlocks when you buy more helpers"
    }
    if (upgrades.helpers >= 6) {
            document.getElementsByClassName("blessed")[0].style.display = "inline-flex"
            document.getElementById("info").innerHTML = "a new feature unlocks after buying 4th upgrade(8k stardust)"
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
        document.getElementById("info").innerHTML = ""
    }
}

function doPrestige() {
    if (gameData.stardust >= prestigeData.requirement) {
        prestigeData.requirement = prestigeData.requirement + prestigeData.requirementinc //still gotta testout to make sure game is balanced
        gameData.stardust = 1999999999
        gameData.stardustPerUpload = 1
        upgrades.helpers = 1
        upgrades.coffee = 0
        upgrades.blessed = 0
        upgradecosts.stardustPerUploadCost = 10
        upgradecosts.buyHelpersCost = 1500
        upgradecosts.buycoffee = 5000
        upgradecosts.getblessed = 8000
        prestigeData.prestigecount = prestigeData.prestigecount + 1
        prestigeData.superstars = prestigeData.superstars + (permanentData.superstar2xmult + 1) * (1 + (permanentData.superstarmult * Math.floor((prestigeData.prestigecount / permanentData.thirdupgreq))))
        document.getElementById("stardustcount").innerHTML = "0 Stardust"
        document.getElementById("buyStardustPerUpload").innerHTML = "current level " + gameData.stardustPerUpload + ", next-cost: " + upgradecosts.stardustPerUploadCost + " Stardust"
        document.getElementById("buyHelpers").innerHTML = "current level " + upgrades.helpers + " next-cost: " + upgradecosts.buyHelpersCost + " stardust"
        document.getElementById("buyCoffee").innerHTML = "cost: 5000 Stardust"
        document.getElementsByClassName("coffee")[0].style.display = "none"
        document.getElementById("getBlessed").innerHTML = "cost: 8000 Stardust"
        document.getElementsByClassName("blessed")[0].style.display = "none"
        document.getElementsByClassName("prestigecount")[0].innerHTML = prestigeData.prestigecount + " Prestiges"
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementsByClassName("prestigetext")[0].innerHTML = "Prestige Requirement: " + prestigeData.requirement + " Stardust!"
        document.getElementById("prestigestuffs").style.visibility = "visible"
    }
}

function prestigeupg1() {
    if (permanentData.prestigeupg1count > 0) {
        return;
    }
    if (prestigeData.superstars >= prestigeData.prestigeupg1) {
        prestigeData.superstars = prestigeData.superstars - prestigeData.prestigeupg1
        permanentData.prestigecountboost = 5
        permanentData.prestigeupg1count = permanentData.prestigeupg1count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg1").innerHTML = "BOUGHT!"
    }
}

function prestigeupg2() {
    if (permanentData.prestigeupg2count > 0) {
        return;
    }
    if (prestigeData.superstars >= prestigeData.prestigeupg2) {
        prestigeData.superstars = prestigeData.superstars - prestigeData.prestigeupg2
        permanentData.superstar2xmult = permanentData.superstar2xmult + 1
        permanentData.prestigeupg2count = permanentData.prestigeupg2count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg2").innerHTML = "BOUGHT!"
    }
}

function prestigeupg3() {
    if (permanentData.prestigeupg3count > 0) {
        return;
    }
    if (prestigeData.superstars >= prestigeData.prestigeupg3) {
        prestigeData.superstars = prestigeData.superstars - prestigeData.prestigeupg3
        permanentData.superstarmult = 1
        permanentData.prestigeupg3count = permanentData.prestigeupg3count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg3").innerHTML = "BOUGHT!"
    }
}

function prestigeupg4() {
    if (permanentData.prestigeupg4count > 0) {
        return;
    }
    if (prestigeData.superstars >= prestigeData.prestigeupg4)
        prestigeData.superstars = prestigeData.superstars - prestigeData.prestigeupg4
        prestigeData.requirementinc = 5000
        permanentData.prestigeupg4count = permanentData.prestigeupg4count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg4").innerHTML = "BOUGHT!"
}

function prestigeupg5() {
    if (permanentData.prestigeupg5count > 0) {
        return;
    }
    if (prestigeData.superstars >= prestigeData.prestigeupg5) {
        prestigeData.superstars = prestigeData.superstars - prestigeData.prestigeupg5
        thirdupgreq = 5
        permanentData.prestigeupg5count = permanentData.prestigeupg5count + 1
        document.getElementById("superstarcount").innerHTML = prestigeData.superstars + " Super Stars"
        document.getElementById("prestigeupg5").innerHTML = "BOUGHT!"
    }
}
