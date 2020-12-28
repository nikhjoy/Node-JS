const { resolve, reject } = require('promise')

function getName(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("me here")
		},3000)
	})
}


function getMobile(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("6+6+8989+8")
		},2000)
	})
}

async function getUser(){
	let name = await getName()
	console.log(name)
	let mobile = await getMobile()
	console.log(mobile)
}

getUser()