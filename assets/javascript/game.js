
// array of player stats
var characterBio = [
    {
    name: "John Snow",
    hitPoints: 100,
    attackPower: 10,
    file: "assets/images/johnsnow.jpg",
    shortName: "john",
    status: "player"
    },
    {
    name: "Jamie Lannister",
    hitPoints: 150,
    attackPower: 15,
    file: "assets/images/game-of-thrones-jaime-lannister.jpg",
    shortName: "jamie",
    status: "player"
    },
    {
    name: "Night King",
    hitPoints: 250,
    attackPower: 25,
    file: "assets/images/night-king.jpeg",
    shortName: "night",
    status: "player"
    },
    {
    name: "Khal Drogo",
    hitPoints: 100,
    attackPower: 20,
    file: "assets/images/Khaldrogo.jpg",
    shortName: "khal",
    status: "player"
    }
];
// player selected boolean
var playerSelected = false;
// enemy selected boolean
var enemySelected = false;
var fighterHitPoints = 0;
var atackeeHitPoints = 0;
var attackeeAttack = 0;
var fighterAttack = 0;

$(document).ready(function() {
function gameStart (){
    // loop to create player divs
    for(i = 0; i < characterBio.length; i++){
        var playerDiv = $("<div>");
        var playerPic = $("<img>");
        var playerHitPoints = $("<div>");
        playerDiv.addClass("player");
        playerDiv.addClass(characterBio[i].shortName);
        playerHitPoints.addClass("lifeLeft");
        $("#players").append(playerDiv);
        playerPic.addClass("player-pic");
        playerPic.attr("src", characterBio[i].file);
        playerDiv.text(characterBio[i].name);
        playerDiv.append(playerPic);
        playerDiv.append(playerHitPoints);
        playerHitPoints.text(characterBio[i].hitPoints);
    }
    selectFighter();
};
gameStart();

function selectFighter() {
$(".player").on("click", function() {
    if(!playerSelected){
    // sets the clicked player as the fighter
    var fighter = $(this);
    // add new class to selected player for later use
    fighter.addClass("fighter");

    // assigns enemy class to other players
    $(".player").not(fighter).addClass("enemy");
    //adds each not selected enemy to enemies div
    $(".enemy").each(function() {
    $("#enemies").append($(this));
    
    if(fighter.hasClass("john")){
        characterBio[0].status = "fighter";
    }
    if(fighter.hasClass("jamie")){
        characterBio[1].status = "fighter";
    }
    if(fighter.hasClass("night")){
        characterBio[2].status = "fighter";
    }
    if(fighter.hasClass("khal")){
        characterBio[3].status = "fighter";
    }
    playerSelected = true;
    if(playerSelected){
        selectEnemy();
    }    
});
}
});
}

function selectEnemy(){
$(".enemy").on("click", function() {
    if(!enemySelected){
    var badGuy = ($(this));
    badGuy.addClass("attackee");
    $("#attackee").append(badGuy);
    $(".enemies").remove(badGuy);
    
    if(badGuy.hasClass("john")){
        characterBio[0].status = "attackee";
    }
    if(badGuy.hasClass("jamie")){
        characterBio[1].status = "attackee";
    }
    if(badGuy.hasClass("night")){
        characterBio[2].status = "attackee";
    }
    if(badGuy.hasClass("khal")){
        characterBio[3].status = "attackee";
    }
    enemySelected = true;
   
    if(enemySelected){
        attack();
    }
}    
});
}

function attack (){
$(".btn").on("click", function(){
if(!enemySelected){
    $("#status").text("You must first select an enemy!")
}
var fighterIndex = 0;
var attackeeIndex = 0;
for (i = 0; i < characterBio.length; i++){
    if(characterBio[i].status === "fighter") {
        fighterAttack = characterBio[i].attackPower;
        fighterHitPoints = characterBio[i].hitPoints;
        fighterIndex = i;
    }
    if(characterBio[i].status === "attackee") {
        attackeeHitPoints = characterBio[i].hitPoints;
        attackeeAttack = characterBio[i].attackPower;
        attackeeIndex = i;
    }
}
fighterHitPoints -= attackeeAttack;
attackeeHitPoints -= fighterAttack;

characterBio[fighterIndex].hitPoints = fighterHitPoints;
characterBio[attackeeIndex].hitPoints = attackeeHitPoints;

// updateStats();


});
}
});   
