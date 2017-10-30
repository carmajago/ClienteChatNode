  var socket = io('http://localhost');
  
    alert("tqulo"); 
    socket.on('Ping', function (data) {
        var entry= document.getElementById('entry');
        entry.value=data;
    });

   function SendMessage(){
    socket.emit('Pong',entry);
}


    //2. 3. 10.
    //socket.on('Ping', function (data) {
    //    document.writeln('Ping : ' + data + '<br />');
    //});

    //4.
    //socket.on('Ping', function (data) {
    //    document.writeln('Ping : ' + data.myObjectKey + '<br />');
    //});

    //5. Calling a function on the server
 
    //6. Calling a function on the server with a parameter
    //socket.emit('Pong', 101);

    //7. Calling a function on the server with an object parameter
    //socket.emit('Pong', { anotherObjectKey: 102 });

    //8 Ping Pong
    //socket.on('Ping', function (data) {
    //    document.writeln('Ping : ' + data + '<br />');
    //    data++;
    //    socket.emit('Pong', data);
    //});

    //9 setTimeout
    //socket.on('Ping', function (data) {
    //    document.writeln('Ping : ' + data + '<br />');
    //    data++;
    //    setTimeout(function () { socket.emit('Pong', data); }, 1000);
    //});
    