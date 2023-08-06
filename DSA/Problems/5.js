// Function starts 
function substring(string,start,end){
    let newstring = "";
    if(start == undefined){
      return string;
    }
    else{
     if(end == undefined){
       if(start >= 0 && !(start > string.length)){
                for(let i = start;i<string.length;i++){
                    newstring+= string[i];
                  }
                    return newstring;
      }
       else if(start < 0){
          start = 0;
          for(let i = start;i<string.length;i++){
                newstring+= string[i];
              }
            return newstring;
          }
       else if(start > string.length){
             start = string.length;
             for(let i = start;i<string.length;i++){
                    newstring+= string[i];
                  }
                return newstring;
           }
      }
  
       
    else if(end>=0 && end <= string.length){
      if(start == end){
        return newstring;
      }
      else if(start > end){
            let newend = start;
            let newstart = end;
                for(let i = newstart;i<newend;i++){
                    newstring+= string[i];
                  }
                    return newstring;
           }
       else if(start >= 0 && !(start > string.length)){
                for(let i = start;i<end;i++){
                    newstring += string[i];
                  }
                    return newstring;
      }
       else if(start < 0){
          start = 0;
          for(let i = start;i<end;i++){
                newstring+= string[i];
              }
            return newstring;
          }
       else if(start > string.length){
             start = string.length;
             for(let i = start;i<end;i++){
                    newstring+= string[i];
                  }
                return newstring;
           }
        }
  
      
     else if(end<0){
               end = 0;
              if(start == end){
                return newstring;
              }
      else if(start > end){
            let newend = start;
            let newstart = end;
                for(let i = newstart;i<newend;i++){
                    newstring+= string[i];
                  }
                    return newstring;
           }
       else if(start >= 0 && !(start > string.length)){
                for(let i = start;i<end;i++){
                    newstring+= string[i];
                  }
                    return newstring;
      }
       else if(start < 0){
          start = 0;
          for(let i = start;i<end;i++){
                newstring+= string[i];
              }
            return newstring;
          }
       else if(start > string.length){
             start = string.length;
             for(let i = start;i<end;i++){
                    newstring+= string[i];
                  }
                return newstring;
           }
        }
  
    
   else if(end >string.length){
          end = string.length;
           if(start == end){
                return newstring;
              }
      else if(start > end){
            let newend = start;
            let newstart = end;
                for(let i = newstart;i<newend;i++){
                    newstring+= string[i];
                  }
                    return newstring;
           }
       else if(start >= 0 && !(start > string.length)){
                for(let i = start;i<end;i++){
                    newstring+= string[i];
                  }
                    return newstring;
      }
       else if(start < 0){
          start = 0;
          for(let i = start;i<end;i++){
                newstring+= string[i];
              }
            return newstring;
          }
       else if(start > string.length){
             start = string.length;
             for(let i = start;i<end;i++){
                    newstring+= string[i];
                  }
                return newstring;
           }
        }
  }
  }
  // Function Ends 
  
  let string =  "I am Monkey D Luffy";
  
  result = substring(string,2,4);
  console.log(result);
  