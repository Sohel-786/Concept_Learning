function bubbleSortAsc(arr, n){
    let temp;
    let swapped;

    for(let i = 0; i<n ; i++){
        swapped = false;
        for(let j = 0; j < n - i - 1 ; j++){

            if(arr[j] > arr[j+1]){

                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }

        }

        if(swapped == false){
            break;
        }
    }

    return arr;
}

function bubbleSortDes(arr, n){
    let temp;
    let swapped;

    for(let i = 0; i<n ; i++){
        swapped = false;
        for(let j = 0; j < n - i - 1 ; j++){

            if(arr[j] < arr[j+1]){

                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }

        }

        if(swapped == false){
            break;
        }
    }

    return arr;
}

const arr = [23, -1, 4, 8, 6, 33, -25, -0, 12, 28];
console.log(bubbleSortAsc(arr, arr.length));
console.log(bubbleSortDes(arr, arr.length));



