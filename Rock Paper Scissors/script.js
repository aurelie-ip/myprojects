/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    }
    if (user === 'paper') {
        result = "win";
    }
    if (user === 'scissors') {
        result = "lose";
    }
    alert("Computer chose rock, you " + result + "!");
}