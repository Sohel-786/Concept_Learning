// const cat = {
//     type : "cat",
//     legs : 4,
//     claws : "Sharp"
// }


// // const tiger = Object.create(cat);
// // tiger.Canclimb = "No";

// const tiger  = Object.setPrototypeOf({
//     Name : "Tiger",
//     CanClimb : false,
//     Power : "Insane",
//     claws: "Blunt"
//     },
// cat
// )

// console.log("Tiger : " ,tiger);

// console.log(Object.getPrototypeOf(tiger));

// console.log(tiger.hasOwnProperty('legs'));



// function iphone13(){
//     this.Name = "Iphone 13",
//     this.Launching_Year  = 2018,
//     this.ProductionIn = "India"
// }


// const i1 = new iphone13();

// iphone13.prototype.add5g = function(){
//     console.log("5G is added");
// }

// iphone13.prototype.fun = function(){
//     this.Camera = "3 multi Dimentional 4k";
// }



// // i1.add5g();

// i1.fun();

// console.log(i1);


// let str = "Sohel";
// console.log(Object.getPrototypeOf(str));


// const arr = new arrfun (1,2,3,4);

// function arrfun(){
//     this.length = arguments.length;
// }

// console.log(arr);


let arr = new Myarray(1,2,3);

function Myarray(){
    this.length = arguments.length;
    for(let i =0; i<this.length; i++){
        this[`${i}`] = arguments[i];
        // this[i] = arguments[i];
    }
}

Myarray.prototype.push = function(p){
    let index = this.length;
    arr[index] = p;
    this.length++;
}

arr.push(38);
arr.push(40);
arr.push(5);
arr.push(9);
arr.push(2);
arr.push(40);
// Myarray.prototype.pop = function(p){
//    for(let key in arr){
//     if(arr[key] == p){
//         delete arr[key];
//         break;
//     }
//    }
// }

Myarray.prototype.pop = function(p){
    let count = 0;
    for(let key in arr){
     if(arr[key] == p){
         count++;
         if(count == 2){
            delete arr[key];
         }
     }
    }
 }
 console.log(arr);
arr.pop(40);
arr.pop(2);
console.log(arr);

