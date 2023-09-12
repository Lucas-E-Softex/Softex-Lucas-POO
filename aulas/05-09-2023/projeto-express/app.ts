import express from 'express';
import cookieParser from 'cookie-parser';
import modelsSync from './utils/sync';
import { sequelize } from './models/config';
import { User } from './models/User';
import router from './routes/user'

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
sequelize.authenticate()
User.sync()

app.use('/', router);

app.listen('3000', () => {
    console.log('Conectado')
})