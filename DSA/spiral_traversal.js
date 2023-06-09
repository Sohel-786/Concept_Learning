let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];


let arr2  = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
];

function spiral_traversal(arr){
    let new_arr = [];
    let top = 0, left  = 0, bottom = arr.length - 1, right = arr[0].length - 1;
    let total_el = 0;
    arr.forEach(el => {
        total_el += el.length;
    });
    let count = 0;

    while(left <= arr.length-1){

        for(let i = top; i<=bottom && count!== total_el; i++){
            new_arr.push(arr[i][left]);
            count++;
        }
        left++;

        for(let i = left; i<=right && count!== total_el; i++){
            new_arr.push(arr[bottom][i])
            count++;
        }
        bottom--;

        for(let i = bottom; i>=top && count!== total_el; i--){
            new_arr.push(arr[i][right]);
            count++;
        }
        right--;

        for(let i = right; i>=left && count!== total_el; i--){
            new_arr.push(arr[top][i]);
            count++;
        }
        top++;
        
    }


    return new_arr;
}


// console.log(spiral_traversal(arr));
console.log(spiral_traversal(arr2));
