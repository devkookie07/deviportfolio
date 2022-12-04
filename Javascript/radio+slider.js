let val = 0;
let slPosV, slPosH, sliderR, sliderG, sliderB, sliderSW, sliderSS;
function setup() {
	createCanvas(600, 600);

	rdShape = createRadio();
	rdShape.position(300, 325);
	rdShape.option("Rectangle");
	rdShape.option("Rounded Rectangle");
	rdShape.option("Circle");
	rdShape.selected("Circle");

	slPosH = createSlider(1, 10, 4);
	slPosH.position(20, 375);
	slPosH.style("width", "300px");

	slPosV = createSlider(1, 10, 4);
	slPosV.position(20, 400);
	slPosV.style("width", "300px");

	sliderR = createSlider(0, 255, 0);
	sliderR.position(10, 310);
	sliderR.style("width", "80px");

	sliderG = createSlider(0, 255, 0);
	sliderG.position(10, 330);
	sliderG.style("width", "80px");

	sliderB = createSlider(0, 255, 0);
	sliderB.position(10, 350);
	sliderB.style("width", "80px");

	sliderSW = createSlider(1, 20, 2);
	sliderSW.position(10, 490);
	sliderSW.style("width", "80px");

	sliderSS = createSlider(10, 300, 80);
	sliderSS.position(10, 570);
	sliderSS.style("width", "80px");
}

function draw() {
	background(220);

	let val1 = sliderR.value(),
		val2 = sliderG.value(),
		val3 = sliderB.value(),
		val4 = sliderSW.value();
	val5 = sliderSS.value();

	for (j = 0; j < slPosV.value(); j++)
		if (rdShape.value() == "Rectangle") {
			rect(100, 100, 50, 50);
		} else if (rdShape.value() == "Rounded Rectangle") {
			rect(100, 100, 50, 50, 12);
		} else {
			circle(100, 100, 50);
		}
	{
		for (i = 0; i < slPosH.value(); i++) {
			rect(i * 50 + 10, j * 50, val5, val5);
			fill(val1, val2, val3);
			strokeWeight(val4);
		}
	}
}
