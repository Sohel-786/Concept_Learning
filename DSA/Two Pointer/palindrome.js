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

// brute force

function palindrome2(string){

    for(let j = 0 ; j < string.length ; j++){

        let space = "";

            for(let i = string[j].length-1 ; i>=0 ; i--){

                  space  = space + string[j][i];

                }

    if( space == string[j] ){

        console.log(string[j],"- Palindrome");
    }

    else{
            console.log(string[j],"- Not Palindrome");
        }
    }
  }
  
  let str = ["MOM","121","madam","Luffy"];
  
  palindrome2(str);