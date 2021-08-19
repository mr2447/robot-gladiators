var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// Test multiplay values with console;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    
    // if player choses to skip confirm and then stop the loop
     if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
       
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            window.alert(playerName + " has " + playerMoney + " coin(s) remaining.");
            console.log (
                "playerMoney", playerMoney);
            break;
        }
    }

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth=enemyHealth - playerAttack;
    window.alert(playerName + " attacked " + enemyName + ".");
    console.log(
        playerName + " attacked " + enemyName + "."
    )
    // Log a resulting messagge to the console so we know that it worked.
   
  
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player Money for winning
        playerMoney = playerMoney + 20;
        console.log(
            playerName + " has " + playerMoney + " money."
        )
        // leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left."); 
    } 
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
     playerHealth=playerHealth - enemyAttack;
     window.alert(enemyName + " attacked " + playerName + ".");

     console.log(
         enemyName + " attacked " + playerName + "."
     )
     
     //log a resulting message to the console so we know that it worked. 
     
     // Check player's health
     if (playerHealth <= 0) {
         window.alert(playerName + " has died!");
        // leave while () loop if player is dead
         break;
     } else {
         window.alert(playerName + " still has " + playerHealth + " health left.")
     }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
   var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call g=fight function with enemy-robot
    fight(pickedEnemyName);
}

//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeate each enemy-robot
// "LOSE" - Player robot's health is zero or less



