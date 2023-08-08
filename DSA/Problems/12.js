let array = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]},
      {name: "Sohel", marks:[10,10,10]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

for(let i = 0;i<array.length;i++){//first Loop -- Master
  let sumarr = [];
  
  let max = 0;
  
      for(let j = 0;j<array[i].students.length;j++){   //  second Loop -- nested from master
        let sum = 0;
        for(let k = 0;k<array[i].students[j].marks.length;k++){ // Loop1 --nested from second loop
              sum= sum + array[i].students[j].marks[k];
              
        }
           sumarr.push(sum);
      }
   
         max = sumarr[0];
        for(let u = 0; u<sumarr.length;u++){
            if(sumarr[u]>max){
              max = sumarr[u];
            }
        }

    for(let j = 0;j<array[i].students.length;j++){   //  second Loop -- nested from master
          let sum = 0;
        for(let k = 0;k<array[i].students[j].marks.length;k++){ // Loop1 --nested from second loop
              sum= sum + array[i].students[j].marks[k];
              if(max == sum){
                console.log(array[i].grade+"-"+array[i].students[j].name+"-"+max)
              }
        }
    }
}
