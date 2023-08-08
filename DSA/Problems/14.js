let array = ["Saitama","Goku", "Gojo","Zoro","Gon","Goku","Gon","Gojo"];

let object ={};

for(let i = 0; i<array.length; i++){
   let key = array[i];
    object[key]="Unique";
}
console.log(object);