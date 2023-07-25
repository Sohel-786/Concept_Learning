// Given an array of integer and a number k, find the  maximum sum of a subarray of size k.

let k = 3;
let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];


function find(arr,k){
    
    let sum = 0;
    let temp = []

    for(let i = 0; i < k ; i++){
        sum += arr[i];  // storing the sum of first window [-1 , -1, -2]
    }

    for(let i = k ; i < arr.length; i++){

        sum  -= arr[i - k];
        sum += arr[i];
        temp.push(sum);
    }

    return Math.max(...temp);
}

console.log(find(arr, k));