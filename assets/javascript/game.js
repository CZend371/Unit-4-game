$(document).ready(function() {

var randomTargetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var randomCrystalValue = Math.floor(Math.random() * (12 - 1 +1)) + 1;

console.log(randomTargetValue);
$("#crystalimg").click(function() {
crystal = randomCrystalValue;
console.log(crystal)
});
})
