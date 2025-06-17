import net from "net";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({ port: 3000, host: '127.0.0.1' }, () => {
    console.log('Connected to chat server');
});

client.setEncoding('utf-8');

client.on('data', (data) => {
    process.stdout.write(data);
});

client.on('end', () => {
    console.log('\nDisconnected from server.');
    process.exit(0);
});

client.on('error', (err) => {
    console.error('Connection error:', err.message);
    process.exit(1);
});

// Send user input
rl.on('line', (input) => {
    client.write(input);
});
