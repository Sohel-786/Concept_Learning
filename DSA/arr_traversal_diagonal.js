let arr =
    [ 
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']
    ];


let arr2 = 
[ 
    ['a','b','c','d'],
    ['e','f','g','h'],
    ['i','j','k','l'],
    ['m','n','o','p'],
    ['q','r','s','t'],

];



    let result = arr_diagonal(arr);
    console.log(result);

    let result2 = arr_diagonal(arr2);
    console.log(result2);

function arr_diagonal(arr){
        let new_arr = [];
        let flag = 'true';

        for(let i = 0; flag !='false' ; i++){
            let temp = [];

            for(let j = 0; j<arr.length ; j++){

                for(let k = 0; k<arr.length ; k++){

                    if(i == Math.abs(j + k)){
                        temp.push(arr[j][k]);
                        // console.log(arr[j][k])
                    }
                }
            }
            temp = temp.filter(el =>{
                if(el !== undefined){
                    return el;
                }
            })
            if(temp.length > 0){
                if(i %2 ==0){
                    new_arr.push(temp);
                }else{
                    temp = temp.reverse();
                    new_arr.push(temp);
                }
                
            }else{
                flag = 'false';
            }
           
        }
        return new_arr;
}
   
