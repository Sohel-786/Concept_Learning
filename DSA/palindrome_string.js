// put any string and function will check if that string can be a palindrome after swapping some char poitions, or not.

function palindrome_or_not(str){
    let obj = {};
    let arr = str.trim().split("");
    arr.forEach(el => {
        if(obj[el] == undefined){
            obj[el] = 1;
        }else{
            obj[el]++;
        }
    });

    let values = Object.values(obj);
    let count = 0;
    for(let i = 0; i<values.length ; i++){
        if(values[i]%2!==0){
            count++;
            if(count > 1){
                break;
            }
        }
    }

    if(count > 1){
        return 'No';
    }else{
        return 'Yes';
    }
}

let result = palindrome_or_not('abacbc');

console.log(`Is Input Strin is Palindrome ? ${result}!`);