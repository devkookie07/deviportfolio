function setup() {
	createCanvas(400, 400);
}

function draw() {
	background("	#87CEEB");

	fill("#486F38");
	noStroke();
	rect(0, 300, 800, 100);

	fill("#24325A");
	triangle(130, 200, 195, 100, 260, 200);

	fill("#774949");
	rect(130, 200, 130, 100);

	fill("#482524");
	rect(175, 240, 40, 60);

	stroke("white");
	noFill();
	line(156, 235, 156, 210);

	fill("#482524");
	square(145, 210, 25);

	stroke("white");
	noFill();
	line(158, 235, 158, 210);

	fill("#482524");
	square(220, 210, 25);

	stroke("white");
	noFill();
	line(232, 235, 232, 210);

	stroke("white");
	noFill();
	line(232, 235, 232, 210);

	noStroke();

	fill(252, 220, 92, frameCount % 400);
	circle(frameCount % 400, mouseY, (frameCount % 400) / 2);
}
