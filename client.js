// client.js
const net = require('net');
const fs = require('fs');   // добавление fs
const port = 8124;

const client = new net.Socket();

client.setEncoding('utf8');
let arrquery;

client.connect(port, function() {
    console.log('Connected');
    fs.readFile('qa.json', (e,text) => {

        if(e) {
            console.log(e)
        }
        else {
            arrquery = sh(JSON.parse(text));
            client.write('QA');
        }
    });
});

client.on('data', function(data) {
    console.log(data);
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});

function sh(array) {
    let a;
    var result = [];
    while(array.length > 0){
        a = Math.floor(Math.random() * array.length);
        result.push(array[a]);
        array.splice(a, 1);
    }
    return result;
}