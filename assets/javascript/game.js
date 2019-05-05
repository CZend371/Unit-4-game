$(document).ready(function() {

    randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    current = 0;
    var redNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var purpleNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var blueNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var greenNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    wins = 0;
    losses = 0;

$("#crystal-red").attr('value', redNumber);
$("#crystal-blue").attr('value', blueNumber);
$("#crystal-green").attr('value', greenNumber);
$("#crystal-purple").attr('value', purpleNumber);

$("#goal").text(randomTargetValue);

$(".crystal").click(function() {
    current += parseInt($(this).attr('value'));
    console.log($(this).attr('value'));
    $("#counter").text(current);
})
updateDisplay = function() {
    if(current === randomTargetValue) {
        $("wins").text(wins);
        wins++
        resetGame();
}else (current > randomTargetValue)
    $("losses").text(losses);
    losses++
    resetGame();
}
resetGame = function() {
    randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    current = 0;
    redNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    purpleNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    blueNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    greenNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    }
})
