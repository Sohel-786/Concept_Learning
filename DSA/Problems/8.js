function lastindexof(array,str,Position) {
    let final = -1;
  
    if(Position>=0 && Position < array.length){
      for(let i = Position;i<array.length;i++){
         if(array[i]===str){
       final = array.indexOf(array[i]) - Position;
     }
   }
       if(final== -1){
         return final;
       }
      else{
        return final;
      }
     }
    
     if(Position >= array.length){
       for(let i = 0;i<array.length;i++){
         if(array[i]===str){
             final = array.indexOf(array[i]);
           }
         }
        if(final== -1){
           return -1;
           }
        else{
          return final;
          }
     }
    else{
       for(let i = 0;i<array.length;i++){
         if(array[i]===str){
             final = array.indexOf(array[i]);
           }
         }
        if(final== -1){
           return -1;
           }
        else{
          return final;
          }
    }
  }
 let array = ["luffy","Goku","Saitama","Genos","Gon"];
 
 result = lastindexof(array,"luffy",5);
 console.log(result);
 
 result = lastindexof(array,"Saitama");
 console.log(result);
 
 let string = "Saitama & Luffy";
 result = lastindexof(string,"f");
 console.log(result);