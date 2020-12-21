function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name+ " Age: "+this.age+ " State: "+this.place)
    }
}

var jack = new Person("jack mersey",35,"greenland")
var depp = new Person("johnny depp",54,"london")

jack.display()
depp.display()