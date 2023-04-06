class Player {
	constructor(name, scorecard) {
		this.name = name;
		this.scorecard = scorecard;
	}
	getPlayerName() {
		return this.name;
	}
	roll(score) {
		if (score > 10) {
			throw new Error("Your score cannot be over 10");
		}
		this.scorecard.addScore(score)
	}
	getResult() {
		return this.scorecard.calculateScore();
	}
}

module.exports = Player;

