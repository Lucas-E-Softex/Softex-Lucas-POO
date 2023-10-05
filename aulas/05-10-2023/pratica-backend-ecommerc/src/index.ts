import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express from 'express'
import http from 'http'

const app = express();
const server = http.createServer(app);

AppDataSource.initialize().then(async () => {
    console.log('Database connected');
}).catch(error => console.log(error))


server.listen(3000, () => {
    console.log('servidor rodando')
})


