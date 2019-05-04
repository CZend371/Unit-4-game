$(document).ready(function() {

    randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    current = 0;
    var redNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var purpleNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var blueNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    var greenNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;

    resetGame = function() {
        
         current = 0;
        
    }
    resetGame()

$("#crystal-red").attr('value', redNumber);
$("#crystal-blue").attr('value', blueNumber);
$("#crystal-green").attr('value', greenNumber);
$("#crystal-purple").attr('value', purpleNumber);

$(".crystal").click(function() {
    current = (redNumber + blueNumber + greenNumber + purpleNumber);
    // console.log($(this).attr('value'));
    $("#counter").text(current);
})
})
