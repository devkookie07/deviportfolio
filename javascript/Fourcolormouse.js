function setup() {
	createCanvas(400, 400);
	background("white");
}

function draw() {
	if (mouseX < 200 && mouseY < 200) {
		fill("red");
	} else if (mouseX < 200 && mouseY > 200) {
		fill("blue");
	} else if (mouseX > 200 && mouseY > 200) {
		fill("green");
	} else {
		fill("yellow");
	}
	rect(mouseX, mouseY, 25, 25);
}
