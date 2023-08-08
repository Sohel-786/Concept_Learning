let num = 121; 

let temp,rem,final = 0;
temp = num;

while(temp>0){
  rem = temp%10;
  temp = Math.floor(temp/10);
  final = final*10+rem;
}
if(final == num){
  console.log("Palindrome");
}
else{
  console.log("Not a Palindrome");
}