let slideR, slideG, sliderB, sliderRad, silderS;
function setup() {
	createCanvas(400, 400);
	colorMode(RGB);
	sliderR = createSlider(0, 340, 100);
	sliderR.position(10, 350);
	sliderR.style("width", "80px");

	sliderG = createSlider(0, 340, 100);
	sliderG.position(100, 250);
	sliderG.style("width", "80px");

	sliderB = createSlider(0, 340, 100);
	sliderB.position(200, 450);
	sliderB.style("width", "80px");

	sliderRad = createSlider(0, 340, 100);
	sliderRad.position(50, 130);
	sliderRad.style("width", "80px");

	sliderS = createSlider(0, 80, 10);
	sliderS.position(180, 130);
	sliderS.style("width", "80px");
}

function draw() {
	let val1 = sliderR.value(),
		val2 = sliderG.value(),
		val3 = sliderB.value(),
		val4 = sliderRad.value(),
		val5 = sliderS.value();
	strokeWeight(val5);
	fill(255, 255, 0);
	background(220);
	fill(val1, val2, val3);
	circle(180, 250, val4);
}
