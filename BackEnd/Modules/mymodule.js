const myfunction = (a,b) => {
    console.log(`This is the addition of ${a} and ${b} is`, a + b);
}

const myfunction2 = (a,b) =>{
    console.log(`This is the multiplication of ${a} and ${b} is`, a*b);
}

// console.log(module.exports);

module.exports = { myfunction, myfunction2};