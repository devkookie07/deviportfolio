let btnRock,
	btnPaper,
	btnScissor,
	btnGame,
	btnGame3,
	btnGame5,
	btnEnd,
	btnReplay;
let RndNumber;
//variable for text
let txtwelcome, txtInst, txtResult;
// variable for computer choice
let compOpt;

function setup() {
	createCanvas(400, 400);

	txtWelcome = "Welcome to my Game!";
	txtInst = "Please choose the game format";
	txtResult = "";

	RndNumber = round(random(0.5, 3.5));

	//button for 1,3,5 game
	btnGame = createButton("Single Game");
	btnGame.position(50, 250);
	btnGame.style("width", "100px");
	btnGame.mousePressed(NewGame);

	btnGame3 = createButton("Best of Three");
	btnGame3.position(165, 250);
	btnGame3.style("width", "100px");

	btnGame5 = createButton("Best of Five");
	btnGame5.position(275, 250);
	btnGame5.style("width", "100px");

	btnRock = createButton("Rock");
	btnRock.position(50, 250);
	btnRock.style("width", "100px");
	btnRock.hide();
	btnRock.mousePressed(compareRock);

	btnPaper = createButton("Paper");
	btnPaper.style("width", "100px");
	btnPaper.position(165, 250);
	btnPaper.hide();
	btnPaper.mousePressed(comparePaper);

	btnScissor = createButton("Scissor");
	btnScissor.style("width", "100px");
	btnScissor.position(275, 250);
	btnScissor.hide();
	btnScissor.mousePressed(compareScissor);

	//button for replay or end game

	btnEnd = createButton("End Game");
	btnEnd.position(60, 250);
	btnEnd.style("width", "100px");
	btnEnd.hide();

	btnReplay = createButton("Replay");
	btnReplay.position(260, 250);
	btnReplay.style("width", "100px");
	btnReplay.hide();
	btnReplay.mousePressed(NewGame);
}

function draw() {
	background("lavender");
	text(txtWelcome, 100, 60);
	text(txtInst, 45, 100);
	text(txtResult, 165, 150);
	textSize(25);
	textFont("Times new roman");
}

function showRPS() {
	txtInst = "Choose among rock,paper,scissors";
	txtWelcome = "";
	txtResult = "";

	//hide
	btnGame.hide();
	btnGame3.hide();
	btnGame5.hide();

	//show Rock Paper Scissor buttons
	btnRock.show();
	btnPaper.show();
	btnScissor.show();
}

function compareRock() {
	if (compOpt == 1) {
		txtResult = "It's a draw";
	} else if (compOpt == 2) {
		txtResult = "Computer Wins!";
	} else {
		txtResult = "You won!";
	}
	ShowResult();
}
function comparePaper() {
	if (compOpt == 2) {
		txtResult = "It's a draw";
	} else if (compOpt == 1) {
		txtResult = "You win!";
	} else {
		txtResult = "Computer Wins";
	}
	ShowResult();
}

function compareScissor() {
	if (compOpt == 1) {
		txtResult = "Computer Wins";
	} else if (compOpt == 2) {
		txtResult = "You win!";
	} else {
		txtResult = "It's a draw";
	}
	ShowResult();
}

function NewGame() {
	compOpt = round(random(0.5, 3.5));
	showRPS();
	btnEnd.hide();
	btnReplay.hide();
}

function ShowResult() {
	btnRock.hide();
	btnPaper.hide();
	btnScissor.hide();

	txtWelcome = "";
	txtInst = "";

	btnReplay.show();
	btnEnd.show();
}
