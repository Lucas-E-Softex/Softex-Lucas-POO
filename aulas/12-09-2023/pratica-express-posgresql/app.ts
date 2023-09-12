import express from 'express';
import cookieParser from 'cookie-parser';
import * as http from 'http';
import { sequelize } from './config/database';
import {usersRoutes} from './routes/users'

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/users', usersRoutes());


app.listen(3000, () => {
    console.log('Servidor ligado')
})

async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect();

sequelize.sync()