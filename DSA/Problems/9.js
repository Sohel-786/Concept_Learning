//This Is the Function to Join Array join()
function join(elements,separation){
    let newstring = "";
    let emptystring = "";
      if(separation=="undefined"||separation==null){
          for(let i = 0;i<elements.length;i++){
            
              if(elements[i]==""||elements[i]==null||elements[i]=="undefined"){
                        newstring += "," + emptystring;
                  }
                  else{
                        newstring += elements[i];
                        if(i==elements.length-1){
                          continue;
                        }
                        else{
                          newstring +=",";
                        }
                      }
                }
      }
      if(separation == ", "||separation ==" + "||separation ==""||separation==''){
        for(let i = 0;i<elements.length;i++){
                  if(elements[i]==""||elements[i]==null||elements[i]=="undefined"){
                        newstring += "," + emptystring;
                  }
                  else{
                        newstring += elements[i];
                        if(i==elements.length-1){
                          continue;
                        }
                        else{
                          newstring +=separation;
                        }
                      }
        }
      }
      return newstring;
  }
  
  // This is for Objects Join_call()
  function join_call(object,separation){
    let string = "";
    let finalstring = "";
  
      if(separation ==null||separation =="undefined"||separation==""){
            for(let key in object){
              string += object[key];
            }
            for(let i = 0;i<string.length;i++){
              finalstring += string[i];
              if(i==string.length-1){
                continue;
              }
              else{
                finalstring +=",";
              }
            }
         }  
      if(separation == "."){
            for(let key in object){
              string += object[key];
            }
            for(let i = 0;i<string.length;i++){
              finalstring += string[i];
              if(i==string.length-1){
                continue;
              }
              else{
                finalstring +=".";
              }
            }
      }
    return finalstring;
  }
  //from here the Input Values starts 
  
  let array2 = [1,,3]
  let array =["Wind", "Water", "Fire"];;
  
  result = join(array2,);
  console.log(result);
  
  result = join(array,);
  console.log(result);
  
  result = join(array,", ");
  console.log(result);
  
  result = join(array," + ");
  console.log(result);
  
  result = join(array,"");
  console.log(result);
  
  let my_object = {
                  a:1,
                  b:2,
                  c:3
                };
  
  result = join_call(my_object,".");
  console.log(result);
  
  result = join_call(my_object);
  console.log(result);