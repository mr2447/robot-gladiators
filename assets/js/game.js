// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

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
           playerInfo.money=Math.max(0, playerInfo.money - 10);
            window.alert(playerName + " has " + playerMoney + " coin(s) remaining.");
            console.log ("playerMoney", playerMoney);
            break;
        }
    }
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerInfo.health = Math.max(0, playerHealth - damage);
 
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
// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;/* GAME FUNCTIONS */

    // function to generate a random numeric value
    var randomNumber = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1) + min);
    
      return value;
    };
    
    // fight function (now with parameter for enemy's object holding name, health, and attack values)
    var fight = function(enemy) {
      while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money)
            break;
          }
        }
    
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
          playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );
    
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + ' has died!');
    
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        
        console.log(
          enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
    
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
      }
    };
    
    // function to start a new game
    var startGame = function() {
      // reset player stats
      playerInfo.reset();
    
      // fight each enemy robot by looping over them and fighting them one at a time
      for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fight next enemy
        if (playerInfo.health > 0) {
          // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
          window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
          // pick new enemy to fight based on the index of the enemyInfo array
          var pickedEnemyObj = enemyInfo[i];
    
          // set health for picked enemy
          pickedEnemyObj.health = randomNumber(40, 60);
    
          // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
          fight(pickedEnemyObj);
    
          // if player is still alive and we're not at the last enemy in the array
          if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          
            // if yes, take them to the store() function
            if (storeConfirm) {
              shop();
            }
          }
        }
        // if player is not alive, break out of the loop and let endGame function run
        else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
        }
      }
    
      // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
      endGame();
    };
    
    // function to end the entire game
    var endGame = function() {
      window.alert("The game has now ended. Let's see how you did!");
    
      // if player is still alive, player wins!
      if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
      } else {
        window.alert("You've lost your robot in battle!");
      }
    
      // ask player if they'd like to play again
      var playAgainConfirm = window.confirm('Would you like to play again?');
    
      if (playAgainConfirm) {
        startGame();
      } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
      }
    };
    
    // go to shop between battles function
    var shop = function() {
      // ask player what they'd like to do
      var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
      );
    
      // use switch case to carry out action
      switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
          playerInfo.refillHealth();
          break;
        case 'UPGRADE':
        case 'upgrade':
          playerInfo.upgradeAttack();
          break;
        case 'LEAVE':
        case 'leave':
          window.alert('Leaving the store.');
    
          // do nothing, so function will end
          break;
        default:
          window.alert('You did not pick a valid option. Try again.');
    
          // call shop() again to force player to pick a valid option
          shop();
          break;
      }
    };
    
    /* END GAME FUNCTIONS */
    
    /* GAME INFORMATION / VARIABLES */
    
    // player information
    var playerInfo = {
      name: window.prompt("What is your robot's name?"),
      health: 100,
      attack: 10,
      money: 10,
      reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },
      refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
    };
    
    // enemy information
    var enemyInfo = [
      {
        name: 'Roborto',
        attack: randomNumber(10, 14)
      },
      {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
      },
      {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
      }
    ];
    
    console.log(enemyInfo);
    console.log(enemyInfo[0]);
    console.log(enemyInfo[0].name);
    console.log(enemyInfo[0]['attack']);
    
    /* END GAME INFORMATION / VARIABLES */
    
    /* RUN GAME */
    startGame();
    
for (var i = 0; i < enemyInfo.length; i++) {
    if (playerHealth > 0) {
        // let player know what roud they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert ("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyInfo[i];

       // generate random damage value based on player's attack power
        var damage = randomNumber(40, 60);
        // pass the pickedEnemyName variabe's value into the fight function, where it will assume the value of the enemyName parameter 
       fight(pickedEnemyName);
       // if we're not at the last enemy in the array
       if (playerHealth > 0 && i < enemyNames.length - 1) {
           // ask if player wants to use the store before next round
           var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

           //if yes, take them to the store() function
           if (storeConfirm) {
            shop();
           }  
       }
    }   
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }
  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
  endGame();
  };
  var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
      if (playerHealth > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      }
      else {
          window.alert("You've lost your robot in battle.");
      }
      //ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Whould you like to play again?")

      if (playAgainConfirm) {
        //restart the game
        startGame();
      }
      else {
          window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Whould you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please entore one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and devrece money
            playerHealth = playerHealth + 20;
            playerMoney = Math.max(0, playerMoney - 7);
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE": //new case 
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increse attack and devrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so function willend
            break;
            default: 
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick avalid option
            shop ();
            break;

    }
};

// enemy information
var enemyInfo = [
    {
      name: 'Roborto',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Amy Android',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Robo Trumble',
      attack: randomNumber(10, 14)
    }
  ];
  
  console.log(enemyInfo);
  console.log(enemyInfo[0]);
  console.log(enemyInfo[0].name);
  console.log(enemyInfo[0]['attack']);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame();




