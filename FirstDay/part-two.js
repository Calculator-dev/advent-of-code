const { input } = require('./input')

let count = 0

for(let i = 0; i < input.length - 3; i++) {

    let sum = input[i] + input[i + 1] + input[i + 2]
    let sum2 = input[i + 1] + input[i + 2] + input[i + 3]

    if (sum2 > sum) {
        count++
    }
}

console.log(count)