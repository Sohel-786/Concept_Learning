function includes(array,searchElement,fromIndex){
    let yes_or_no;
    
      if(fromIndex == undefined){
        for(let i = 0;i<array.length;i++){
          if(searchElement == array[i]){
            yes_or_no = true;
            break;
          }
          else{
            yes_or_no = false;
          }
        }
        return yes_or_no;
      }
  
         else if(fromIndex >= 0 && fromIndex < array.length){
                    for(let i = fromIndex;i<array.length;i++){
                          if(searchElement == array[i]){
                            yes_or_no = true;
                            break;
                          }
                          else{
                            yes_or_no = false;
                          }
                        }
                        return yes_or_no;
      }
        
      else  if(fromIndex < 0 && fromIndex > -array.length){
                  fromIndex += array.length;
                    for(let i = fromIndex;i<array.length;i++){
                          if(searchElement == array[i]){
                            yes_or_no = true;
                            break;
                          }
                          else{
                            yes_or_no = false;
                          }
                        }
                        return yes_or_no;
      }
  
      else if(fromIndex < -array.length){
                  fromIndex  = 0;
                  for(let i = fromIndex;i<array.length;i++){
                                    if(searchElement == array[i]){
                                      yes_or_no = true;
                                      break;
                                    }
                                    else{
                                      yes_or_no = false;
                                    }
                                  }
                                  return yes_or_no;
                }
  
      else if(fromIndex >= array.length){
        //the array is not searched
            return false;
      }
  }
  
   let array  = [1,2,,6,8,9,20,10];
    result = includes(array,3, 6);
  console.log(result);
  