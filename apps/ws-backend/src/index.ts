import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

wss.on('listening', () => {
    console.log("WebSocket server is listening on ws://localhost:8080");
})

wss.on('connection', ws => {
    console.log("New client connected");
    ws.on('error', console.error);
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
        // Echo the message back to the client
        ws.send(`Echo: ${message}`);
    })
    ws.send('Welcome to the WebSocket server!');
})