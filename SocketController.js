var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

var net = require('net');
var client = new net.Socket();



app.listen(80);
console.log("server runnig at http://localhost/");



 



function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}



client.connect(30000, '127.0.0.1', function() {
	console.log('Connected');

	
	
});

client.on('data', function(data) {
	console.log('Received: ' + data);


//	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('error',function(err){
    console.log(err);
});

function Write(message){
    client.setNoDelay(true);
    client.write(message);
    
    

}




io.on('connection', function (socket) {


    socket.on('Pong', function (data) {
        Write(data);
       
    });

   // setInterval(function () { socket.emit('Ping', "datas"); },500);


});

