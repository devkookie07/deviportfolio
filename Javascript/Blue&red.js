let slideR, slideG, sliderB, silderS, sliderSS;
let slider1;
function setup() {
	createCanvas(500, 500);

	slider1 = createSlider(1, 10, 4);
	slider1.position(100, 250);
	slider1.style("width", "300px");

	slider2 = createSlider(1, 10, 4);
	slider2.position(100, 300);
	slider2.style("width", "300px");

	sliderR = createSlider(0, 340, 100);
	sliderR.position(10, 450);
	sliderR.style("width", "80px");

	sliderG = createSlider(0, 340, 100);
	sliderG.position(100, 450);
	sliderG.style("width", "80px");

	sliderB = createSlider(0, 340, 100);
	sliderB.position(200, 450);
	sliderB.style("width", "80px");

	sliderS = createSlider(0, 340, 10);
	sliderS.position(180, 130);
	sliderS.style("width", "80px");

	sliderSS = createSlider(0, 340, 10);
	sliderSS.position(180, 160);
	sliderSS.style("width", "80px");
}

function draw() {
	background(220);

	let val1 = sliderR.value(),
		val2 = sliderG.value(),
		val3 = sliderB.value(),
		val4 = sliderSS.value(),
		val5 = sliderS.value();

	for (j = 0; j < slider2.value(); j++) {
		for (i = 0; i < slider1.value(); i++) {
			if (i % 2 && j % 2) {
				fill("red");
			} else {
				fill("lightblue");
			}

			rect(i * 50 + 10, j * 50, val4, val4);
			strokeWeight(val5);
			fill(val1, val2, val3);
		}
	}
}
