const fs = require('fs');

const input = fs
	.readFileSync("input.txt", {encoding: "utf-8"})
	.toString()
	.trim()
	.split('\n')
	.map((line) => {
		let [movement, amount] = line.split(' ');
		amount = parseInt(amount, 10);

		return {
			movement,
			amount,
		};
	});

module.exports = {
	input,
};