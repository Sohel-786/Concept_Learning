let arr  = [2,4,6,1,3];
let arr2 = [1,2,3,5,7,9];

// find out two indexes which are stored on different position in an array whose sum are == k  && the array will always be a sorted array in ascending order, and find the indexes which are at the longgest distance if there are other indexes also available then.

let k = 7;
two_index(arr,k);
two_index(arr2,12);

function two_index(arr,k){

    arr = arr.sort();
    let left = 0;
    let right = arr.length- 1;
    let sum;

    while(left < right){
        sum = arr[left] + arr[right];
        if(sum == k){
            break;
        }
        if(sum > k){
            right--;
        }else{
            left++;
        }
        
    }

    console.log(`The Index ${left} & ${right} of the Array is Equal to k - ${k} which are ${arr[left]} & ${arr[right]}`);

}


