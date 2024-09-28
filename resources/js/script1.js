var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);
var op = null;
var num1 = null;
var num2 = null;
var $screen = $("#screen");

/*$number.on('click', function() {
	var numberPressed = $(this).html();
	$screen.append(numberPressed);
	if (num1 == null) {
		num1 = numberPressed;
	} else if (num2 == null) {
		num2 = numberPressed;
	}
});*/
document.getElementById("num1").onclick = function write1() {
    $screen.append(1);
}
document.getElementById("num2").onclick = function write2() {
    $screen.append(2);
}
document.getElementById("num3").onclick = function write3() {
    $screen.append(3);
}
document.getElementById("num4").onclick = function write4() {
    $screen.append(4);
}
document.getElementById("num5").onclick = function write5() {
    $screen.append(5);
}
document.getElementById("num6").onclick = function write6() {
    $screen.append(6);
}
document.getElementById("num7").onclick = function write7() {
    $screen.append(7);
}
document.getElementById("num8").onclick = function write8() {
    $screen.append(8);
}
document.getElementById("num9").onclick = function write9() {
    $screen.append(9);
}
document.getElementById("num0").onclick = function write0() {
    $screen.append(0);
}
document.getElementById("clear").onclick = function clear() {
    $screen.empty();
}
document.getElementById("plus").onclick = function writePlus() {
    $screen.append("+");
	op = "+";
}
document.getElementById("minus").onclick = function writeMinus() {
    $screen.append("-");
	op = "-";
}
document.getElementById("mult").onclick = function writeMult() {
    $screen.append("*");
	op = "*";
}
document.getElementById("divide").onclick = function writeDivide() {
    $screen.append("/");
	op = "/";
}
document.getElementById("equal").onclick = function writeDivide() {
    $screen.append("num1");
	/*if (op == "+") {
		$screen.append("num1+num2");
	}
	/*if (op = "-")
		
	if (op = "*")
		
	if (op = "/") */