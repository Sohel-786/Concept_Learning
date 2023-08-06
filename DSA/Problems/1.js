
var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

let obj = {
  array : [],
  calculateSalesTotals : function(arr){
    for(let i = 0;i<arr.length;i++){
      let obj = {};
      for(let key in arr[i]){
        let value = key;
         obj[value] = arr[i][key];
      }
      let price = arr[i]["original"];
      let final_price = price - ((price* ((arr[i]["discount"]==undefined)?0:arr[i]["discount"]))/100);
      obj["sale"] = final_price;
      obj["total"] = obj["sale"] * arr[i]["stock"];
      this.array.push(obj);
    }
  }
}
obj.calculateSalesTotals(sales);
console.log(obj.array)