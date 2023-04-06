class Scorecard {
  constructor() {
    this.rolls = []
  }
  playerName() {
    return `Player Name: ${this.player.getPlayerName()}`
  }
  addRoll(score) {
    this.rolls.push(score)
  }
  allFrames() {
    return this.frameResult
  }
}

module.exports = Scorecard