const xCollection = [1, 2, 3, 4, 5];
const yCollection = [7, 5, 1, 6, 9];

let xMedia = xCollection.reduce((acc, xElement) => {
    return acc += xElement;
}, 0) / xCollection.length;
console.log(`xMedia: ${xMedia}`);
let yMedia = yCollection.reduce((acc, yEllement) => {
    return acc += yEllement;
}, 0) / yCollection.length;
console.log(`yMedia: ${yMedia}`);

//I assume that yCollection is the same size as xCollection
const covariance = xCollection.reduce((acc, xElement, index) => {
    return acc += (xElement - xMedia) * (yCollection[index] - yMedia);
}, 0);


//Calculating the standard deviation from x and y 
const standardDeviationX = xCollection.reduce((acc, xElement) => {
    let xResult = Math.pow((xElement - xMedia), 2);
    return acc += xResult;
}, 0);

const standardDeviationY = yCollection.reduce((acc, yElement) => {
    let yResult = Math.pow((yElement - xMedia), 2);
    return acc += yResult;
}, 0);
const generalSD = Math.sqrt(standardDeviationX * standardDeviationY);

const coefficient = covariance / generalSD;

console.log(coefficient);


