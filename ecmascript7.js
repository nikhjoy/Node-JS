class Sample{
    sampleHello(){
        console.log("this is sample hello")
    }
}

class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    
    hello(){
        console.log('hello friends : ' +(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)
hey.hello()
hey.sampleHello()