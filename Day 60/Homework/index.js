let person = {
    name: "Alexandre",
    age: 14,
    city: "Tbilisi"
  };

console.log(person.name)


person.age = 15;
console.log(person.age);

person.country = "Georgia";
console.log(person.country);

person.greet = function() {
    console.log("Hello, my name is " + this.name + "!");
  };
  person.greet();

  let person1 = {name: "Alex", age: 14, city: "Tbilisi"};
  let person2 = {name: "Alex", age: 14, city: "Tbilisi"};
  
  console.log(person1 === person2);

  