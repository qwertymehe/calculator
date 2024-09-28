var $screen = $("#screen");
var $number = $(".number");

var num1 = null;
var num2 = null;

//Save number for math lesson 5
$number.on('click', function()  {
		var numberPressed = $(this).html();
		$screen.append(numberPressed);
		if (num1 == null) {
			num1 = numberPressed;
		} else if (num2 == null) {
			num2 = numberPressed;
		}
})
/*
document.getElementById("num1").onclick = function write1()
{
	$screen.append(1);
}
document.getElementById("num2").onclick = function write2()
{
	$screen.append(2);
}
document.getElementById("num3").onclick = function write3()
{
	$screen.append(3);
}
document.getElementById("num4").onclick = function write4()
{
	$screen.append(4);
}
document.getElementById("num5").onclick = function write5()
{
	$screen.append(5);
}
document.getElementById("num6").onclick = function write6()
{
	$screen.append(6);
}
document.getElementById("num7").onclick = function write7()
{
	$screen.append(7);
}
document.getElementById("num8").onclick = function write8()
{
	$screen.append(8);
}
document.getElementById("num9").onclick = function write9()
{
	$screen.append(9);
}
document.getElementById("num0").onclick = function write0()
{
	$screen.append(0);
	}
	*/
document.getElementById("clear").onclick = function writeClear()
{
	document.getElementById("screen").innerHTML = "";
}
document.getElementById("plus").onclick = function writePlus()
{
	$screen.append("+");
	op = "+";
}
document.getElementById("minus").onclick = function writeMinus()
{
	$screen.append("-");
	op = "-";
}
document.getElementById("mult").onclick = function writeMultiply()
{
	$screen.append("x");
	op = "x";
}
document.getElementById("divide").onclick = function writeDivide() 
{
	$screen.append("/");
	op = "/";
}
document.getElementById("equal").onclick = function writeEqual()
{
	$screen.append("=");
	num1 = parseInt(num1);
	num1 = parseInt(num1);
	console.log(num1, op, num2);
		if (op == "+") {
			answer = num1 + num2;
		}
		if (op == "-") {
			answer = num1 - num2;
		}
		if (op == "*") {
			answer = num1 * num2;
		}
		if (op == "/") {
			answer = num1 / num2;
		}
		$screen.append(answer);
		num1 = null;
		num2 = null;
};