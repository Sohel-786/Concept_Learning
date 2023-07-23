let days  = ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
let emp1 = 1;
let emp2 = 1;

// there are two emp, you are given a number of the day they meet  first in the week of 7 days and you have to find after how many days they will meet again , on condition - that the one emp comes after every 2 days and one comes after every three days
let day = 0; 
do{
    if(emp1 == 7){  
        emp1 = 1;
    }
    if(emp2 == 7){
        emp2 = 1;
    }
    if(emp1 < 7){emp1 += 2;}
    if(emp2 < 7){emp2 += 3; day +=2}
}while(emp1 !== emp2);

console.log(day, days[emp2-1]);