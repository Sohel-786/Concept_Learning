let array = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
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

for(let i = 0;i<array.length;i++){
  let sum1 = 0;
  let sum2 = 0;

      for(let j = 0;j<array[i].students.length-1;j++){
        for(let k = 0;k<array[i].students[0].marks.length;k++){
              sum1 = sum1 + array[i].students[0].marks[k];
        }
        for(let k = 0;k<array[i].students[1].marks.length;k++){
              sum2 = sum2 + array[i].students[1].marks[k];
        }
      }
    if(sum1>sum2){
      console.log(array[i].grade+"-"+array[i].students[0].name+"-"+sum1)
    }
    else{
      console.log(array[i].grade+"-"+array[i].students[1].name+"-"+sum2)
    }
}