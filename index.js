// Code your solution in this file
function distanceFromHqInBlocks(blocks) {
    let hq = 42;
    if (blocks > hq) {
        return blocks - hq;
    } else if (blocks < hq) {
        return hq - blocks;
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return(start - destination) * 264
    } else if (start < destination) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance >= 400 && distance < 2000) {
        return 2.56
    } else if (distance >= 2000 && distance < 2500) {
        return 25
    } else 
    return 'cannot travel that far'
}