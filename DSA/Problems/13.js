let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
let newarr = [];
for(let i = 0;i<name.length; i++){
  let object = {};
  
  let key = "Name";
  
  object[key] = name[i];
  
  let key2 = "Age";
  
  object[key2] = age[i];
  
  newarr.push(object);
}
console.log(newarr);
let space = "";
for(let i = 0;i<newarr.length;i++){
    if(newarr[i].Age>30){
      space += newarr[i].Name + " ";
    }
  }
console.log(space);