const { input } = require('./input')

// console.log(input);

let count = 0

for(let i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
        count++
    }
}

console.log(count)