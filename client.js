const net = require('net')

//The server is in our same machine
let client = net.connect(23451, '127.0.0.1',
	function() {//connect listener
		console.log("client connected")
		client.write("Hello from JS!")
		client.write("this is second message!!")
		setTimeout(function(){
			client.write("s")
			console.log("Cliente desconectado!")
			
		},2000)
		setTimeout(function(){
			client.destroy();
		},4000)
})

client.on('data', function(data){
	//write the received data from server
	console.log("[SERVER]: " + data.toString())
	///client.end()
	//client.destroy()
})

client.on('end',function(){
	console.log("Client disconnected")
})
/*
client.on('error', function(){
	console.log('Errors!')
})*/
//server \trigo\Escritorio\GIT HUB\PRUEBAS\pruebas\Python\Cliente-Servidor>
////\trigo\Escritorio\GIT HUB\DISCOWHERE\client>