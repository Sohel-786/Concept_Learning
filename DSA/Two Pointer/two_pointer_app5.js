//Given a sorted array and a number x, find the pair in array whose sum is closest to x

let arr = [10, 22, 28, 29, 30, 40];
let x = 54;

function closest(arr,x){

    let left = 0, right = arr.length - 1;
    let diff = Number.MAX_VALUE;
    let res_l, res_r;

    while(left < right){

        if( Math.abs( (arr[left] + arr[right]) - x) < diff){
            
            res_l = arr[left];
            res_r = arr[right];
            diff =  Math.abs( (arr[left] + arr[right]) - x);
        }

        if( Math.abs( (arr[left] + arr[right])) > x ){
            right--;
        }else{
            left++;
        }
    }

    return [res_l, res_r];
}

console.log(closest(arr, x));