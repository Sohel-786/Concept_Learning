let arr  = [2,4,6,1,3];
let arr2 = [1,2,3,5,7,9];

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


