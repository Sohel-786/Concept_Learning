//Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

let arr = [100,200,300,400];
let k = 2;

console.log(max_pairsum(arr, k));

function max_pairsum(arr, k){

    let left = 0;
    let right = left + 1;
    let sum, pair;
    let max = 0;

    while(right < arr.length){

        sum = arr[left] + arr[right];
        if(sum > max){
            max = sum;
            pair = [arr[left], arr[right]];
        }

        left++;
        right++;

    }

    return [pair, max];
}