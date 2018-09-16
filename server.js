// server.js
const net = require('net'); // подключаю net
const port = 8124;          // постоянная переменная содержащая номер порта
let seed = 0;               // инициализирую сид

const server = net.createServer((client) => {
    console.log('Client connected');

    client.id = Date.now() + seed++; // добавление id клиенту
    client.setEncoding('utf8');

    console.log('[' + formatDate() + ']: ' +'Client #' + client.id + ' connected\n');  // вывод инфы

    client.on('data', (data) => {
        if (data === 'QA') client.write('ACK');
        else {
            let answr = Math.floor(Math.random() * 2).toString(); // установка ответа, округление до целогочисла с попощью floor()
            client.write(answr);
        }
    });

    client.on('end', () => {
    console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
});

function formateDate() {
    return new Date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}