const arr = [64, 25, 12, 22, 11];
const arr2 = [2, 5, 12 , 18 , -1, -4, 25, 8, -9, -103, 58, 85]

function selectionSortAsc(arr, n){
    
    for(i= 0; i<n ; i++){
        minI = i;
        for(j = i+1; j<n ; j++){
            if( arr[j] < arr[minI]){
                minI = j;
            }
        }

        if(minI != i){
            swap(arr, minI, i);
        }
    }

    return arr;
}


function selectionSortDes(arr, n){
    
    for(i= 0; i<n ; i++){
        maxI = i;
        for(j = i+1; j<n ; j++){
            if( arr[j] > arr[maxI]){
                maxI = j;
            }
        }

        if(maxI != i){
            swap(arr, maxI, i);
        }
    }

    return arr;
}

function swap(arr, change, i){
    let temp = arr[i];
    arr[i] = arr[change];
    arr[change] = temp;
}

const result = selectionSortAsc(arr, 5);
const result2 = selectionSortAsc(arr2, arr2.length);

console.log(result);
console.log(result2);

console.log(selectionSortDes(arr, arr.length));
console.log(selectionSortDes(arr2, arr2.length));


