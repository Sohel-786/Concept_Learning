let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let arr2 =[
     [1, 2, 3, 4],
     [4, 5, 6, 7],
     [8, 9, 10,11],
     [12,13,14,15]
    ];

char_N_maker(arr);
char_N_maker(arr2)
reverse_N(arr);

function reverse_N(arr){
    let N = [];
    let s = arr.length;

    for(let i = 0; i < s ; i++){
        N.push(arr[i][0]);
    }

    for(let i = 1; i<s; i++){
        for(let j = 1;j<s;j++){
            if((j+i) == arr.length - 1){
                N.push(arr[i][j]);
            }
        }
    }
    for(let i = 0; i < s; i++){
        N.push(arr[i][s-1]);
    }

    console.log(N);
}


function char_N_maker(arr){
    let N = [];
    let s = arr.length;
    for(let i = s-1; i >=0 ; i--){
        N.push(arr[i][0]);
    }
    for(let i = 1; i< s; i++){
        N.push(arr[i][i]);
    }
    for(let i = s-2; i>=0; i--){
        N.push(arr[i][s-1]);
    }

    console.log(N);
}

let st̥̥̥̥̥̥̥̥̥̥r = 'sohel';