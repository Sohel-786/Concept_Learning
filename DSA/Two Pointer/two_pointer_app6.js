// A simple Javascript program to find three elements whose sum is equal to zero
arr = [0, -1, 2, -3, 1];
     
// Prints all triplets in arr[] with 0 sum   
    function findTriplets(arr) {
        let found = false;

        for (let i = 0; i < arr.length - 2; i++) {

        for (let j = i + 1; j < arr.length - 1; j++) {

            for (let k = j + 1; k < arr.length; k++) {

                // console.log([arr[i], arr[j], arr[k]]);
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log([arr[i], arr[j], arr[k]]);
                    found = true;
                }
            }
        }
        
    }
    // If no triplet with 0 sum found in array
        if(found === false) {
            console.log(" not exist ");

        }
   }
    // findTriplets(arr);


let arr2 = [0, -1, 2, -3, 5];

function findfour(arr) {

    let found = false;

        for (let i = 0; i < arr.length - 3; i++) {

        for (let j = i + 1; j < arr.length - 2; j++) {

            for (let k = j + 1; k < arr.length - 1; k++) {

                for (let y = k + 1; y < arr.length ; y++) {

                    console.log([arr[i], arr[j], arr[k], arr[y]]);

                }

            }
        }
        
    }
}

findfour(arr2);