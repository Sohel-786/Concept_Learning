const arr = [64, 25, 12, 22, 11];

function selectionSort(arr, n){
    
    for(i= 0; i<n ; i++){
        let minI = i;
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

function swap(arr, minI, i){
    let temp = arr[i];
    arr[i] = arr[minI];
    arr[minI] = temp;
}

const result = selectionSort(arr, 5);

console.log(result);
