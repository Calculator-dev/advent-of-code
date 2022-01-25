const fs = require('fs');

const input = fs 
.readFileSync("input.txt", {encoding: "utf-8"})
.toString()
.trim()
.split("\n")

module.exports = {
    input,
};