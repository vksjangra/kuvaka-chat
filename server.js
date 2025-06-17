import { createServer } from 'net';

const PORT = 3000;
let clients = [];

const server = createServer((socket) => {
    socket.setEncoding('utf-8');
    clients.push(socket);
    console.log('New client connected.');

    socket.write('Welcome to the chatroom!\n');

    socket.on('data', (message) => {
        message = message.trim();
        if (!message) return;

        for (const client of clients) {
            if (client !== socket) {
                client.write(`> ${message}\n`);
            }
        }
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
        clients = clients.filter(c => c !== socket);
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err.message);
        clients = clients.filter(c => c !== socket);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
