let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];

let obj = {
  data : [],
  format : function(name,nos,price){
    for(let i =0;i<name.length;i++){
      let obj ={};
        obj.Name = name[i];
        obj.Quantity = nos[i];
        obj.Price = price[i];
        this.data.push(obj);
  }
},
total : function(){
    let value = 0;
  for(let i = 0; i<this.data.length;i++){
      let c = this.data[i];
      value += c.Quantity * c.Price;
  }
    return value;
}
  
}

obj.format(name,quantity,price);
console.log(obj.total());

