var Person = {name:"nikhil",age:26,place:"mexico city", display: function(){
    var name="Abhi"
    console.log(name)
    console.log(this.name)
}}

Person.dob = "20-10-2010"

Person.displayAge=function(){
    console.log(this.age)
}

console.log(Person.displayAge())
console.log(Person)