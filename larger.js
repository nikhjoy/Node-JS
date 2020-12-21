var r = require('readline-sync')
num1 = r.question("enter 2 nums")
num2 = r.question('')
if(num1>num2){
console.log('larger is '+num1)
}else if(num1===num2){
    console.log('nums are equal')
}else{
    console.log('larger is '+num2)
}