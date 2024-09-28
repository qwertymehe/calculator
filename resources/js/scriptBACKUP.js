var $screen = $("#screen");
var $number = $(".number");
var currentNumber = 1;
var num1;
var num2;
var click = 1;

//Save number for math lesson 5
$number.on('click', function() {
if (click > 8){
	return; 
}
	click++;
	var numberPressed = $(this).html();
    $screen.append(numberPressed);
    
if (currentNumber == 1) {
   if (num1 == null) {
      num1 = numberPressed;
   } else {
      num1 = num1 + numberPressed;
   }
}   
if (currentNumber == 2) {
   if (num2 == null) {
      num2 = numberPressed;
   } else {
      num2 = num2 + numberPressed;
    }
}
});

function more(){
	if (click > 8){
		click = click - 5;
	}
	if (currentNumber == 2) {
		findAnswer();
		$screen.empty();
		$screen.append(num1);
	}
	currentNumber = 2;
}

$("#plus").on('click', function() 
{
	more();
    $screen.append("+"); 
    op = "+";
})

$("#minus").on('click', function() 
	{
	more();
    $screen.append("-");
    op = "-";
})

$("#mult").on('click', function() 
{
	more();
    $screen.append("x");
    op = "x";
})

$("#divide").on('click', function() 
{
	more();
    $screen.append("/");
    op = "/";
})

$("#clear").on('click', function() {
    $screen.empty();
    num1 = null;
    num2 = null;
    currentNumber = 1;
		click = 1;
});


function findAnswer() {
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	    if (op == "+") {
    answer = num1 + num2;
}
    if (op == "-") {
    answer = num1 - num2;
}
    if (op == "x") {
    answer = num1 * num2;
}
    if (op == "/") {
    answer = num1 / num2;
}   
num1 = answer;
num2 = null;  
currentNumber = 1;
}

$("#equal").on('click', function() 
{
    $screen.append("=");
   findAnswer();
	if (click > 8){
		$screen.empty();
		var answerLength = answer.toString();
		click = answerLength.length;
	}
	$screen.append(answer);
})