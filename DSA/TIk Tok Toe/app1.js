let matrix = [
    ["o", "x", "o"],
    ["o", "x", "x"],
    ["x", "x", "o"]
  ];
  let ans = "";
  for (let i = 0; i < matrix.length; i++) {
    let counto = 0;
    let countx = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == "o") {
        counto++;
      }
      if (matrix[i][j] == "x") {
        countx++;
      }
    }
    if (counto == 3) {
      ans = "o";
      break;
    }
    else if (countx == 3) {
      ans = "x";
      break;
    }
    else {
      ans = "Tie";
    }
  }
  if (ans !== "Tie") {
    console.log(ans);
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      let counto = 0;
      let countx = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[j][i] == "o") {
          counto++;
        }
        if (matrix[j][i] == "x") {
          countx++;
        }
      }
      if (counto == 3) {
        ans = "o";
        break;
      }
      else if (countx == 3) {
        ans = "x";
        break;
      }
      else {
        ans = "Tie";
      }
    }
  
    if (ans !== "Tie") {
      console.log(ans);
    }
    else {
      let counto = 0;
      let countx = 0;
      for (let i = 0; i < matrix.length; i++) {
  
  
        if (matrix[i][matrix.length - (i + 1)] == "o") {
          counto++;
        }
        if (matrix[i][matrix.length - (i + 1)] == "x") {
          countx++;
        }
      }
  
      if (counto == 3) {
        ans = "o";
      }
      else if (countx == 3) {
        ans = "x";
      }
      else {
        ans = "Tie";
      }
  
      if (ans !== "Tie") {
        console.log(ans);
      }
      else {
        let counto = 0;
        let countx = 0;
        for (let i = 0; i < matrix.length; i++) {
  
  
          if (matrix[i][i] == "o") {
            counto++;
          }
          if (matrix[i][i] == "x") {
            countx++;
          }
        }
        if (counto == 3) {
          ans = "o";
        }
        else if (countx == 3) {
          ans = "x";
        }
        else {
          ans = "Tie";
        }
        console.log(ans);
      }
    }
  }
  