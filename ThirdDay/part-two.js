const { input } = require('./input')

let OxygenGenerator = [...input]
let ScrubberRating = [...input]

function getOxyScrubb(lines) {
    let counter = {}
    for (let line of lines) {
        for (let i = 0; i < line.length - 1 ; i++) {
            if (!counter[i]) {
                counter[i] = [0, 0]
            }
            let val = line[i]
            counter[i][val]++
        }
    }
    
    let maxOxy = []
    let minScrubb = []
    
    for (let counters of Object.values(counter)) {
        if (counters[0] === counters[1]){
            maxOxy.push(null)
            minScrubb.push(null)
        }
        if (counters[0] > counters[1]) {
            maxOxy.push("0")
            minScrubb.push("1")
        } else {
            maxOxy.push("1")
            minScrubb.push("0")
        }
    }
    return {min: minScrubb,	max: maxOxy}
}

let bit = 0
while (OxygenGenerator.length > 1) {
    let { max } = getOxyScrubb(OxygenGenerator)
	OxygenGenerator = OxygenGenerator.filter((num) => {
		return max[bit] === null ? num[bit] === '1' : num[bit] === max[bit]
	})
	bit++
}

const generatorRating = parseInt(OxygenGenerator[0], 2)

let bit2 = 0
while (ScrubberRating.length > 1) {
	let { min } = getOxyScrubb(ScrubberRating)
	ScrubberRating = ScrubberRating.filter((num) => {
		return min[bit2] === null ? num[bit2] === '0' : num[bit2] === min[bit2]
	})
	bit2++
}

const scrubberRating = parseInt(ScrubberRating[0], 2)

console.log(generatorRating * scrubberRating)