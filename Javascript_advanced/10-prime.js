function countPrimeNumbers() {
	var counter = 0;
	for (var i = 2; i <= 100; i++) {
					console.log (true);

					for (var j = 2; j < i; j++) {
									if (i % j == 0) {
													console.log(false);
									}
					}

					if (true) {
									return counter +=1;
					}
	}
	return counter + 1;
}
var time = performance.now();
for (i = 0; i < 100; ++i) {
	countPrimeNumbers();
}
var timee = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (time - timee) + " milliseconds.");
