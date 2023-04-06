const Player = require("../lib/oldPlayer");

describe("Player", () => {
	it("returns the name of the player", () => {
		const player1 = new Player("John");
		expect(player1.getPlayerName()).toEqual("John");
	});

	it("initially returns an empty frame", () => {
		const player1 = new Player("John");
		expect(player1.getFrameScore()).toEqual([]);
	});

	it("given a score for the firstRoll() it returns that score in the frameScore", () => {
		const player1 = new Player("John");
		player1.getFirstRoll(1);
		expect(player1.getFrameScore()).toEqual([1]);
	});

	it("given a score for the secordRoll() it also returns both scores in the frameScore method", () => {
		const player1 = new Player("John");
		player1.getFirstRoll(1);
		player1.getSecondRoll(5);
		expect(player1.getFrameScore()).toEqual([1, 5]);
	});

	it("fails when the score input for getFirstRoll is more than 10", () => {
		const player1 = new Player("John");
		expect(() => {
			player1.getFirstRoll(11);
		}).toThrowError("Your score cannot be over 10");
	});

	it("fails when the score input for getSecordnRoll is more than 9", () => {
		const player1 = new Player("John");
		expect(() => {
			player1.getSecondRoll(10);
		}).toThrowError("The total score of your frame cannot be over 10");
	});

	// describe("when the first roll and second roll is called and the sum adds up to '10'", () => {
	// 	it("adds a spare symbol '/' to the frameScore", () => {
	// 		const player1 = new Player("John");
	// 		player1.getFirstRoll(5);
	// 		player1.getSecondRoll(5);
	// 		expect(player1.getFrameScore()).toEqual([5, 5, "/"]);
	// 	});
	// });

	it("returns the scores of the first and second roll", () => {
		const player1 = new Player("John");
		player1.getFirstRoll(5);
		player1.getSecondRoll(5);
		expect(player1.getFrameScore()).toEqual([5, 5]);
	});

	describe("In the final frame = frame 10'", () => {
		it("allows for a third roll if the the score of the first roll or second roll add up to 10", () => {
			const player1 = new Player("John");
			player1.getFirstRoll(10);
			player1.getSecondRoll(5);
			player1.getThirdRoll(5);
			expect(player1.getFrameScore()).toEqual([10, 5, 5]);
		});
	});
});
