const { input } = require('./input');


const measurments = {
    horizontal: 0,
    depth: 0
}
// let sumDepth = depth.reduce((partial_sum, a) => partial_sum + a, 0)
// console.log(sumDepth);
input.forEach((item) => {
    if(item.movement === "forward"){
        measurments.horizontal = measurments.horizontal + item.amount
        // console.log(measurments.horizontal);   
    } else if (item.movement === "down"){
        measurments.depth = measurments.depth + item.amount
        // console.log(measurments.depth);
    } else if (item.movement === "up"){
        measurments.depth = measurments.depth - item.amount
        // console.log(measurments.depth);
    }
    multiply = measurments.horizontal * measurments.depth
    console.log(multiply);
})  
