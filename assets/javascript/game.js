$(document).ready(function() {

    var randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var redNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var purpleNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var blueNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var greenNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var wins = 0;
    var losses = 0;
    var current = 0;

    $("#crystal-red").attr('value', redNumber);
    $("#crystal-blue").attr('value', blueNumber);
    $("#crystal-green").attr('value', greenNumber);
    $("#crystal-purple").attr('value', purpleNumber);

    $("#goal").text(" " + randomTargetValue);
    $("#wins").text(" " + wins);
    $("#losses").text(" " + losses);

    $(".crystal").click(function() {
    current += parseInt($(this).attr('value'));
    console.log($(this).attr('value'));
    $("#counter").text(" " + current);
    })
    
    resetGame = function() {
        randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        current = 0;
        redNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
        purpleNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
        blueNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
        greenNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    }
        // resetGame();
    
    updateDisplay = function() {
        if(current === randomTargetValue) {
            wins++;
            resetGame();
        }else (current > randomTargetValue)
            losses++;
            resetGame();
        }
    updateDisplay();

    
})
