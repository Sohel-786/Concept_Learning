let obj = {
    array : [],
  
    student : function(name,sci,eng,math){
      let obj= {};
      obj.name = name;
      obj.sci = sci;
      obj.eng = eng;
      obj.math = math;
      this.array.push(obj);
    },
    least_total : function(){
        let min = Infinity;
        let stu;
        for(let i = 0;i<this.array.length;i++){
          let c = this.array[i];
          let total = c.sci + c.eng + c.math;
          if(total<min){
            min = total;
            stu = c.name;
          }
        }
      console.log(stu);
    },
     highest_total : function(){
        let max = -Infinity;
        let stu;
        for(let i = 0;i<this.array.length;i++){
          let c = this.array[i];
          let total = c.sci + c.eng + c.math;
          if(total>max){
            max = total;
            stu = c.name;
          }
        }
      console.log(stu);
    }
  }
  
  obj.student("Saitama",9,7,8);
  obj.student("Goku",8,9,5);
  obj.student("Genos",7,6,5);
  
  //console.log(obj.array);
  
  obj.least_total();
  obj.highest_total();