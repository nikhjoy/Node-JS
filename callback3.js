function longTask(milliSecondTime){
    dt = new Date()
    while((new Date-dt) <= milliSecondTime){

    }
}

function showEnd(){
    console.log('End')
}

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)