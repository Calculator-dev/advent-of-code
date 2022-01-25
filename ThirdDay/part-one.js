const { input } = require('./input')

const counter = {}

for (let line of input) {
    for (let i = 0; i < line.length - 1 ; i++) {
        if (!counter[i]) {
            counter[i] = [0, 0]
        }
    
        let val = line[i]
        counter[i][val]++
    }
}


let gammaRate = []
let epsilonRate = []

for (let counters of Object.values(counter)) {
    if (counters[0] > counters[1]) {
        gammaRate.push(0)
        epsilonRate.push(1)
    } else {
        gammaRate.push(1)
        epsilonRate.push(0)
    }
}


let sumGamma = parseInt(gammaRate.join(""), 2)
let sumEpsilon = parseInt(epsilonRate.join(""), 2)

console.log(sumGamma * sumEpsilon)