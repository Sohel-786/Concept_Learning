// checking if the string is palindrome or not using two pointer technique

function palindrome(str){

    let left = 0;
    let right = str.length - 1;
    
    while(left < right){
        if(str[left].toLowerCase() == str[right].toLowerCase()){
            
            left++;
            right--;

        }else{
            return 'Not a Palindrome';
        }
    }

    return 'Palindrome';
}

console.log(palindrome('Madama'))