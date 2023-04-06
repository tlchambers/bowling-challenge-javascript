class BowlingGame {
	constructor() {
		this.player_rolls = [];
	}

	roll(pins_knocked_down) {
		if (pins_knocked_down > 10) {
			throw "Invalid number, pins knocked down must be a number from 0 to 10";
		}
		this.player_rolls.push(pins_knocked_down);
	}

	score() {
		let roll_index = 0;
		let scorecard = 0;

		while (roll_index < 10) {
			if (this.roll_a_strike(roll_index)) {
				scorecard += this.strike_score(roll_index);
				roll_index += 1;
			} else if (this.roll_a_spare(roll_index)) {
				scorecard += this.spare_score(roll_index);
				roll_index += 2;
			} else {
				scorecard += this.score_of_frame(roll_index);
				roll_index += 2;
			}
		}

		return scorecard;
	}

	roll_a_strike(roll_index) {
		return this.player_rolls[roll_index] == 10;
	}

	strike_score(roll_index) {
		return (
			this.player_rolls[roll_index] +
			this.player_rolls[roll_index + 1] +
			this.player_rolls[roll_index + 2]
		);
	}

	roll_a_spare(roll_index) {
		return (
			this.player_rolls[roll_index] + this.player_rolls[roll_index + 1] == 10
		);
	}

	spare_score(roll_index) {
		return (
			this.player_rolls[roll_index] +
			this.player_rolls[roll_index + 1] +
			this.player_rolls[roll_index + 2]
		);
	}

	score_of_frame(roll_index) {
		return this.player_rolls[roll_index] + this.player_rolls[roll_index + 1];
	}
}

const game = new BowlingGame();
game.roll(5);
let i = 0;

while (i < 19) {
	game.roll(0);
	i++;
}
console.log(game.score()); // 5

// # user_rolls = [6,7,9,2,1,6,3,5];
// #               0,1,2,3,4,5,6,7
// #               current index = 0

// # user_rolls = [10,7,3,2,1,6,3,5];
// #               currentindex = 2  (10)
// #               currentindex + 1  (2)
//               # currentindex + 2  (9)
