import express from 'express';
import dotenv from 'dotenv';
import User from './models/User.js';
import config from './config/database.js';
import userRoutes from './routes.js';
import { Sequelize } from 'sequelize';

dotenv.config();

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);

User.init(sequelize);

app.use('/usuarios', userRoutes);

const PORT = process.env.PORT;

sequelize
  .authenticate()
  .then(() => {
    console.log('Banco de dados conectado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar no banco:', err);
  });
