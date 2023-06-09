// 3d array is the array of 2d arrays, and the same goes for 4d array which will be the array of 3d arrays

let arr = [
    [
      [1,2,3],
      [4,5,6]  ],

      [
        [7,8,9],
        [10,11,12]  ],

        [
            [13,14,15],
            [16,17,18]  ]
];

let new_arr = [];

for(let i = 0; i<arr.length; i++){
    new_arr.push(arr[i][1][1]);
}

console.log(new_arr);