// Function starts 
function slice(array,start,end){
    let newarray = [];
    if(start == undefined){
      return array;
    }
    else{
     if(end == undefined){
       if(start >= 0){
        for(let i = start;i<array.length;i++){
            newarray.push(array[i]);
          }
            return newarray;
      }
       else if(start < 0){
          start += array.length;
          for(let i = start;i<array.length;i++){
                newarray.push(array[i]);
              }
            return newarray;
          }
      else if(start < -array.length){
          for(let i = 0;i<array.length;i++){
              newarray.push(array[i]);
              }
            return newarray;
          }  
      else if(start >= array.length){
          return newarray;
          }
      }
    
    else if(end>=0){
      if(start >= 0){
        for(let i = start;i<end;i++){
            newarray.push(array[i]);
          }
            return newarray;
      }
         else if(start < 0){
          start += array.length;
          for(let i = start;i<end;i++){
            newarray.push(array[i]);
          }
            return newarray;
            }
        else if(start < -array.length){
          for(let i = 0;i<end;i++){
            newarray.push(array[i]);
          }
          return newarray;
        }
        else if(start >= array.length){
          return newarray;
          }
        }
  
    else if(end<0 && end > -array.length/2){
              end+= array.length;
            if(start >= 0){
            for(let i = start;i<end;i++){
            newarray.push(array[i]);
          }
            return newarray;
          }
               else if(start < 0){
              start += array.length;
              for(let i = start;i<end;i++){
                newarray.push(array[i]);
              }
              return newarray;
            }
          else if(start < -array.length){
              for(let i = 0;i<end;i++){
                newarray.push(array[i]);
                  }
                  return newarray;
              }
                if(start >= array.length){
                    return newarray;
              }
  }
    
   else if(end < -array.length){
          end = 0;
        if(start >= 0){
          for(let i = start;i<end;i++){
            newarray.push(array[i]);
          }
            return newarray;
          }
        else if(start < 0){
            start += array.length;
            for(let i = start;i<end;i++){
              newarray.push(array[i]);
            }
            return newarray;
          }
          else if(start < -array.length){
            for(let i = 0;i<end;i++){
              newarray.push(array[i]);
                }
                return newarray;
            }
             else if(start >= array.length){
                  return newarray;
            }
    }
  
   else if(end >= array.length){
        if(start >= 0){
        for(let i = start;i<end;i++){
            newarray.push(array[i]);
          }
            return newarray;
          }
           else if(start < 0){
            start += array.length;
            for(let i = start;i<array.length;i++){
              newarray.push(array[i]);
            }
            return newarray;
          }
        else if(start < -array.length){
          for(let i = 0;i<array.length;i++){
            newarray.push(array[i]);
          }
          return newarray;
        }
        else if(start >= array.length){
          return newarray;
        }
    }
  }
  }
  // Function Ends 
  
  let array = [1,2,3,5,4,9];
  
  result = slice(array,2,4);
  console.log(result);