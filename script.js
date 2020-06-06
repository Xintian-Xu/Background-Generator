var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value 
		+ "," 
		+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	var code = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++){
		color += code[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

body.addEventListener("onload", setGradient());

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomGradient);



