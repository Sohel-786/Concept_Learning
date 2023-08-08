let string1 = "Shaikh";
let string2 = "Sohel";
let missing = "";
for(let i = 0;i<string1.length;i++){
  let count = 0;
  for(let j = 0;j<string2.length;j++){
    if(string1[i]==string2[j]){
      count++;
    }
  }
  if(count==0){
    missing = missing + string1[i];
  }
}
console.log(missing);