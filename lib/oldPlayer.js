class Player {
	constructor(name, scorecard) {
		this.name = name;
		this.scorecard = scorecard;
	}
	getPlayerName() {
		return this.name;
	}
	getFirstRoll(score1) {
		if (score1 > 10) {
			throw new Error("Your score cannot be over 10");
		} else {
			this.score.push(score1);
		}
	}
	getSecondRoll(score2) {
		if (score2 > 9) {
			throw new Error("The total score of your frame cannot be over 10");
		} else {
			this.score.push(score2);
		}
	}
	getThirdRoll(score3) {
		if (score3 > 10) {
			throw new Error("Your score cannot be over 10");
		} else {
			this.score.push(score3);
		}
	}
	getFrameScore() {
    // const sum = this.frameScore.reduce((accumulator, b) => {
    //   return accumulator + b;
    // }, 0)

		// if (sum  === 10) {
    //   this.frameScore.push('/')
    //   return this.frameScore;
    // } else {
      return this.score;
    }
	// }
}

module.exports = Player;

