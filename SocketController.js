var net = require('net');

var client = new net.Socket();
 
var io = require("socket.io").listen(server);




client.connect(30000, '127.0.0.1', function() {
	console.log('Connected');

		client.write('register carmajago');

	client.end();
	
});

client.on('data', function(data) {
	console.log('Received: ' + data);


//	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});