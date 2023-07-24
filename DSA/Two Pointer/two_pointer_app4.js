//Find the closest pair from two sorted arrays

let arr2 = [1,4,5,7];

let arr = [10,20,29,40];

let x = 32;

function closest_pair(arr1, arr2, x){

    let diff = Number.MAX_VALUE;

    let res_l, res_r;

    let left = 0, right = arr2.length - 1;

    while(left < arr1.length && right >= 0){

        if(Math.abs( (arr1[left] + arr2[right]) - x ) < diff){
            res_l = left;
            res_r = right;

            diff = Math.abs((arr1[left] + arr2[right]) - x);
        }

        if(arr1[left] + arr2[right] > x){
            right--;
        }
        else{
            left++;
        }
    }

    return `${arr1[res_l]} and ${arr2[res_r]}`;
}

console.log(closest_pair(arr, arr2, x));

