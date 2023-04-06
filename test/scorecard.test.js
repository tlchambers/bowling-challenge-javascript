// const Scorecard = require("../lib/scorecard");
// const Player = require("../lib/player");

// describe("Given the Scorecard", () => {
// 	describe("When the Scorecard and Player are called", () => {
// 		it("adds the player to the to the scorecard", () => {
// 			const player1 = new Player("John");
// 			const scorecard = new Scorecard(player1);
// 			expect(scorecard.playerName()).toEqual("Player Name: John");
// 		});
// 	});

// 	it("adds the frame from Player to the Scorecard 'frameResult'", () => {
// 		const player1 = new Player("John");
// 		player1.getFirstRoll(1);
// 		player1.getSecondRoll(5);
// 		const scorecard = new Scorecard(player1);
// 		expect(scorecard.allFrames()).toEqual([[1, 5]]);
// 	});

	// it("adds another frame to the 'frameResult'", () => {
	// 	const player1 = new Player("John");

	// 	player1.getFirstRoll(1);
	// 	player1.getSecondRoll(5);
	//   player1.getFrameScore()

	// 	player1.getFirstRoll(2);
	// 	player1.getSecondRoll(2);
	//   player1.getFrameScore()

	// 	const scorecard = new Scorecard(player1);
	// 	scorecard.addFrame();
	// 	scorecard.addFrame();
	// 	expect(scorecard.allFrames()).toEqual([[1, 5], [2, 2]]);
	// });
// });


