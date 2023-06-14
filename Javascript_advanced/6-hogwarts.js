class studentHogwarts {

	privateScore = 0;
	name = null;

	#changeScoreBy = function (points) {
				this.	privateScore += points;
	};
	setName(newName) {
					this._name = newName;
	}
	rewardStudent() {
					this.#changeScoreBy(1);
	}
	penalizeStudent() {
					this.#changeScoreBy(-1)
	}
	getScore() {
					return this._name + ": " + this.privateScore;
	}
}

var harry = new studentHogwarts();
harry.setName("Harry");
for (var i = 0; i < 4; i++) {
	harry.rewardStudent()
}
	console.log(harry.getScore());

var draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (var i = 0; i <= 2; i++) {
	draco.penalizeStudent();
}
	console.log(draco.getScore());
