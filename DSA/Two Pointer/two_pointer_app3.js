// given an sorted array find all the pair two indexes whose addition is equal to the variable k

function pair(arr,k){

    let left = 0;
    let right = arr.length - 1;
    let result = [];
    let sum = 0;

    while(left < right){
        
        sum = arr[left] + arr[right];

        if(sum == k){
            result.push([ arr[left] , arr[right] ]);
        }
        
        if( sum > k){
            right--;
        }else{
            left++;
        }
    }

    return result;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(pair(arr,12));
