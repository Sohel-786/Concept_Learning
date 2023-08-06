let obj = {
    length : 10,
    width : 20,
    area : function(){
      let area = this.length * this.width;
     return area;
    },
    perimeter : function(){
      let perimeter = 2*(this.length + this.width);
      return perimeter;
    }
  }
  
  console.log(obj.area());
  console.log(obj.perimeter());