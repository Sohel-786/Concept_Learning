// function person(n,a,g){
//     this.name = n;
//     this.age = a;
//     this.gender = g;
// }


// function teacher(a,s){
//     person.apply(this,a)
//     this.Subjact = s;
// }


// let x = new teacher(["Sohel",23, "Male"], "Matchs");

// console.log(x);

// function name(n,a){
//     this.Name = n;
//     this.Age = a;
// }

// function farmer(v){
//     let x = name.bind(this,"Sohel",23);
//     x();
//     this.Have_Farms_of = v;
// }

// function shopowner(s){
//     this.Have_shop_of = s;
// }

// let obj = new farmer(["Carate", "Patato", "Tamato", "Onion"]);
// console.log(obj);
// function age() {
//     des.call(this,"Full Stack Web Developer")
//     this.age = 23;
//     this.Name = "Sohel";
   
// }

// function des(d){
//     this.Designation = d;
// }

// let x = new age();
// console.log(x);


function fullname(s) {
    person1.call(this, "sohel", "Shaikh")
     this.name = s.firstName + " " + s.lastName;
  }

function person1(n,l) {
  this.firstName = n;
  this.lastName = l;
}

let x = new fullname(person1);
console.log(x)