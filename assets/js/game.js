var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// Test multiplay values with console;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter Any Key to fight or 'SKIP' to skip.");
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
            console.log ("playerMoney", playerMoney);
            break;
        }
    }
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    window.alert(playerName + " attacked " + enemyName + ".");
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
    )
  
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
     playerHealth = playerHealth - enemyAttack;
     window.alert(enemyName + " attacked " + playerName + ".");

     console.log(
         enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
     )
     
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

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what roud they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert ("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        
        // use debugger to pause script from running and check what's going on at thtat moment in the code
        //debugger;

        // pass the pickedEnemyName variabe's value into the fight function, where it will assume the value of the enemyName parameter 
       fight(pickedEnemyName);
    }   
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeate each enemy-robot
// "LOSE" - Player robot's health is zero or less



