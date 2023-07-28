let n = 4;
for(let i = 1; i<=n ;i++){
  let bag = "";
  for(let j = 1;j<=n;j++){
    if(i==j){
      bag +="\\";
    }
    else{
      bag +=" ";
    }
  }
  for(let j = n;j>=1;j--){
    if(i==j){
      bag +="/";
    }
    else{
      bag +=" ";
    }
  }
  for(let j = 1;j<=n;j++){
    if(i==j){
      bag +="\\";
    }
    else{
      bag +=" ";
    }
  }
  for(let j = n;j>=1;j--){
    if(i==j){
      bag +="/";
      break;
    }
    else{
      bag +=" ";
    }
  }
  console.log(bag);
}