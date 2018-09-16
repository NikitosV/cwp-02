// server.js
const net = require('net'); // подключаю net
const port = 8124;          // постоянная переменная содержащая номер порта
let seed = 0;               // инициализирую сид

const server = net.createServer((client) => {
    console.log('Client connected');

    client.id = Date.now() + seed++; // добавление id клиенту

    client.setEncoding('utf8');

    client.on('data', (data) => {
        console.log(data);
        client.write('\r\nHello!\r\nRegards,\r\nServer\r\n');
    });

    client.on('end', () => console.log('Client disconnected'));
});

server.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
});