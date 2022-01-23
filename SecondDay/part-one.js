const { input } = require('./input');


const measurments = {
    horizontal: 0,
    depth: 0
}

input.forEach((item) => {
    if(item.movement === "forward"){
        measurments.horizontal += item.amount
        // console.log(measurments.horizontal);   
    } else if (item.movement === "down"){
        measurments.depth += item.amount
        
        // console.log(measurments.depth);
    } else if (item.movement === "up"){
        measurments.depth -= item.amount
        // console.log(measurments.depth);
    }
    multiply = measurments.horizontal * measurments.depth
    
})  

console.log(multiply);
