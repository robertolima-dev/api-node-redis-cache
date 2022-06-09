import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express"
import AppError from './middlewares/errors/AppError';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes'

let http = require('http')

const socketPort = process.env.SOCKET_PORT || 3001
const port = process.env.PORT || 4001
const app = express()

http = http.Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

io.on('connection', (socket: any) => {
    socket.emit('socket connection', {
        connection: 'success'
    })
})

app.use(cors());
app.use(express.json());

app.use((request: Request, response: Response, next: NextFunction) => {
    request.io = io
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, HEAD, PATH")
    response.header("Access-Control-Allow-Headers", "*")
    next()
})

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(port, () => {
    console.log(`Server started on port ${port}! 🏆`);
})

// http.listen(socketPort, () => {
//     console.log(`Socket started on port ${socketPort}! 🏆`);
// })
