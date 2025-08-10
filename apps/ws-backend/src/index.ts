import { WebSocketServer } from 'ws';
import jwt from 'jsonwebtoken';
import { JsonWebTokenError } from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config/jwt';

const wss = new WebSocketServer({ port: 8080 });

wss.on('listening', () => {
    console.log("WebSocket server is listening on ws://localhost:8080");
})

wss.on('connection', (ws, req) => {
    // check if the request has a valid JWT token
    const url = req.url;
    if(!url) {
        return; // No URL provided, cannot extract token
    }
    const token = new URLSearchParams(url?.split('?')[1] || '').get('token') || '';
    if (!token) {
        ws.close();
        return;
    }
    // check if the token is valid
    try {
        jwt.verify(token, JWT_SECRET);
    } catch (err) {
        if (err instanceof JsonWebTokenError) {
            console.error("Invalid JWT token:", err.message);
            ws.close();
            return;
        }
        console.error("JWT verification error:", err);
        ws.close();
        return;
    }

    console.log("New client connected");
    ws.on('error', console.error);
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
        // Echo the message back to the client
        ws.send(`Echo: ${message}`);
    })
    ws.send('Welcome to the WebSocket server!');
})