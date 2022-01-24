const fs = require('fs');

const input = fs 
    .readFileSync("input.txt", {encoding: "utf-8"})
	.toString()
	.trim()
	.split('\n')
	.map((num) => parseInt(num, 10));

module.exports = {
    input,
};