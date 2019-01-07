
// array of player stats
var johnSnow = {
    name: "John Snow",
    hitPoints: 120,
    numberAttacks: 1,
    enemiesDefeated: 0,
    attackPower: 10,
    defendPower: 10,
    file: "assets/images/johnsnow.jpg",
    shortName: "john",
    status: "player"
};

var jamieLannister = {
    name: "Jamie Lannister",
    hitPoints: 150,
    attackPower: 15,
    defendPower: 15,
    enemiesDefeated: 0,
    numberAttacks: 1,
    file: "assets/images/game-of-thrones-jaime-lannister.jpg",
    shortName: "jamie",
    status: "player"   
    };
    
var nightKing = {
    name: "Night King",
    hitPoints: 250,
    attackPower: 25,
    defendPower: 25,
    enemiesDefeated: 0,
    numberAttacks: 1,
    file: "assets/images/night-king.jpeg",
    shortName: "night"
    };

var khalDrogo = {
    name: "Khal Drogo",
    hitPoints: 100,
    attackPower: 20,
    enemiesDefeated: 0,
    defendPower: 20,
    numberAttacks: 1,
    file: "assets/images/Khaldrogo.jpg",
    shortName: "khal"
    };
    
   
var playerArr = [johnSnow, jamieLannister, nightKing, khalDrogo];
// player selected boolean
var playerSelected = false;
// enemy selected boolean
var enemySelected = false;
// var fighterHitPoints = 0;
// var atackeeHitPoints = [];
// var attackeeAttack = [];
// var fighterAttack = 0;
// var attackArr = [];

function addPlayerDiv(char){
    var playerDiv = $("<div>");
    var playerPic = $("<img>");
    var playerHitPoints = $("<div>")
    playerPic.addClass("player-pic");
    playerPic.attr("src", char.file);
    playerDiv.attr('shortname', char.shortName);
    playerDiv.addClass("player");
    playerHitPoints.addClass("player-hp")
    $("#players").append(playerDiv);
    playerDiv.text(char.name);
    playerDiv.append(playerPic);
    playerDiv.append(playerHitPoints);
    playerHitPoints.text(char.hitPoints);
    $("#status").text("Select your warrior.");
    
}
$(document).ready(function() {
function gameStart (){
for(var i = 0; i < playerArr.length; i++){
    addPlayerDiv(playerArr[i])
}
    selectFighter();
}
gameStart();

function selectFighter() {
$(".player").on("click", function() {
    if(!playerSelected){
    // sets the clicked player as the fighter
    var fighter = $(this);
    // add new class to selected player for later use
    fighter.addClass("fighter");
    $(".fighter").find(".player-hp").addClass("fighter");
    // assigns enemy class to other players
    $(".player").not(fighter).addClass("enemy");
    //adds each not selected enemy to enemies div
    $(".enemy").each(function() {
    $("#enemies").append($(this));
    $("#status").text("Your journey begins. Choose your enemies wisely.");
    $("#enemy-info").text("Select your enemy.");

        });
    playerSelected = true;
    }
    selectEnemy();
});
}

    

function selectEnemy(){
$(".enemy").on("click", function() {
    if (!enemySelected){
    var enemy = $(this);
    var attackeeDiv = $("#attackee");
    enemy.addClass("attackee");
    enemy.remove();
    attackeeDiv.append(enemy);
    $(".attackee").find(".player-hp").addClass("attackee");
    $("#game-info").empty();
    enemySelected = true;
    $("#status").text("Fight your foe.");
    $("#enemy-info").text("Press attack to fight.");
    }
    attack();
});
   
    
    }    
// switch (){}; javascript function neeed to check out the API

 function attack (){

    if(enemySelected){
        var attacker;
        var defender;
        for(var i = 0; i < playerArr.length; i++ ){
            if ($("#players .fighter").attr('shortname') === playerArr[i].shortName)
            attacker = playerArr[i];
        }
        for(var j = 0; j < playerArr.length; j++ ){
            if ($("#attackee .attackee").attr('shortname') === playerArr[j].shortName)
            defender = playerArr[j];
            
            }  
            console.log(attacker);        
            console.log(defender);
          }
       $(".btn").on("click", function(){
           if(attacker.hitPoints >= 0 && defender.hitPoints >= 0){
        attacker.hitPoints -= defender.attackPower;
        defender.hitPoints -= attacker.attackPower;
        attacker.attackPower += attacker.defendPower * attacker.numberAttacks;
        attacker.numberAttacks ++;
        console.log(attacker);
        console.log(defender);
        $(".player .fighter").text(attacker.hitPoints);
        $(".enemy .attackee").text(defender.hitPoints);
        } 
        
        if(attacker.hitPoints < 0){
            $("#game-info").text("You lost! Reload the page to try again!");
        }
        
        if(defender.hitPoints < 0){
            $("#game-info").text("You have defeated " + defender.name + "! Select another enemy.");
            enemySelected = false;
            attacker.enemiesDefeated ++;
            $("#attackee").empty();
            defender = {};
        if(attacker.enemiesDefeated > 3){
                $("#game-info").text(attacker.name + "!!!!  You win!! Reload page to play again!");
            }
        }
    });
        }
    
});   
       
       
        // if($("#enemy").hasClass(".john")) {
        //     attackeeAttack = johnSnow.attackPower;
        //     attackPower = johnSnow.hitPoints;
        // }
        // if($("#enemy").hasClass(".jamie")) {
        //     attackeeAttack = jamieLannister.attackPower;
        //     attackPower = jamieLannister.hitPoints;
        // }
        // if($("#enemy").hasClass(".night")) {
        //     attackeeAttack = nightKing.attackPower;
        //     attackPower = nightKing.hitPoints;
        // }
        // if($("#enemy").hasClass(".khal")) {
        //     attackeeAttack = khalDrogo.attackPower;
        //     attackPower = khalDrogo.hitPoints;
        // }
        // if($("#players").hasClass(".john")) {
        //     johnSnow.attack();
        // }
        // if($("#players").hasClass(".jamie")) {
        //     jamieLannister.attack();
        // }
        // if($("#players").hasClass(".night")) {
        //     nightKing.attack();
        // }
        // if($("#players").hasClass(".khal")) {
        //     khalDrogo.attack();
        // }
 
//     }
//     if(characterBio[i].status === "attackee") {
//         attackeeHitPoints = characterBio[i].hitPoints;
//         attackeeAttack = characterBio[i].attackPower;
//         attackeeIndex = i;
//     }
// }
// fighterHitPoints -= attackeeAttack;
// attackeeHitPoints -= fighterAttack;

// characterBio[fighterIndex].hitPoints = fighterHitPoints;
// characterBio[attackeeIndex].hitPoints = attackeeHitPoints;

// // updateStats();


// });
// }
  
