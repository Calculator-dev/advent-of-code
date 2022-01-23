const { input } = require('./input');

const measurments = {
    horizontal: 0,
    depth: 0,
    aim: 0
}



input.forEach((item) => {
    if(item.movement === "forward"){
        measurments.horizontal += item.amount
        measurments.depth += measurments.aim * item.amount
    } else if (item.movement === "down"){
        measurments.aim += item.amount
    } else if (item.movement === "up"){
        measurments.aim -= item.amount
        
    }
    multiply = measurments.horizontal * measurments.depth
})  

console.log("horizontal: " + measurments.horizontal);
console.log("depth: " + measurments.depth);
console.log("aim: " + measurments.aim);
console.log(multiply);