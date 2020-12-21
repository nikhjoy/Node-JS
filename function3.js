var num=10
function hello(){
    var num=20
    console.log(num)
    function hey(){
        num=50
    }
    hey()
    console.log(num)
}
hello()
console.log(num)