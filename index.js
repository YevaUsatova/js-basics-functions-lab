// Code your solution in this file!
function distanceFromHqInBlocks(value){
    let dis;
    if ( value > 42){
        dis = value - 42;
    }
    else {
        dis = 42 - value;
    }
return dis;
}
function distanceFromHqInFeet(value){
    let x = distanceFromHqInBlocks(value);
    const feet = 264; 
    return x * feet;  
}

function distanceTravelledInFeet(value1, value2){
    let y;
    if (value1 > value2){
        y = (value1 - value2)*264;
    }
    else{
        y = (value2 - value1)*264;
    }
    return y;
}
function calculatesFarePrice(start, destination){
    let val = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (val < 400){
        fare = 0;
    }
    else if (val < 2000) {
        fare = 2.56;
    } 
    else if( val < 2500) {
        fare = 25;    
    }
    else if( val > 2500) {
        fare = `cannot travel that far`;
    }
return fare; 
}