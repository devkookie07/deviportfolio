function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);

	CreateGrid(5, 8, "r", "b", 10, 45);
}

function CreateGrid(hCount, vCount, uShape, wColor, sizeH, sizeV) {
	for (j = 0; j < vCount; j++) {
		for (i = 0; i < hCount; i++) {
			if (wColor == "R" || wColor == "R") {
				fill("red");
			} else if (wColor == "B" || wColor == "b") {
				fill("lightblue");
			} else {
				noFill();
			}

			if (uShape == "R" || uShape == "r") {
				rect(50 * i, 50 * j, sizeH, sizeV);
			} else if (uShape == "C" || uShape == "c") {
				circle(50 * i + 25, 50 * j + 25, sizeH);
			} else {
				noFill();
				rect(50 * i, 50 * j, 45, 45);
			}
		}
	}
}
