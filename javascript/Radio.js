let radio;
function setup() {
	createCanvas(600, 600);
	//create radio option for shape
	radio = createRadio();
	radio.option("rectangle");
	radio.option("circle");
	radio.option("rounded rectangle");
	radio.position(300, 235);
	radio.style("width", "350px");
	textAlign(CENTER);
	fill("#000C66");
}

function draw() {
	let val = radio.value();
	background(250);

	if (val == "rectangle") {
		rect(50, 50, 100, 300);
	} else if (val == "circle") {
		circle(100, 100, 350);
	} else if (val == "rounded rectangle") {
		rect(50, 50, 100, 100, 10);
	}
}
