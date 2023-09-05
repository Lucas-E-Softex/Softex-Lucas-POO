import express from 'express';
import cookieParser from 'cookie-parser';
import modelsSync from './utils/sync';
import { sequelize } from './models/config';
import { User } from './models/User';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
sequelize.authenticate()
User.sync()

app.listen('3000', () => {
    console.log('Conectado')
})