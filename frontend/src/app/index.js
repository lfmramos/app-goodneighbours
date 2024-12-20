import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Conecta ao banco de dados
mongoose.connect('mongodb://localhost:27017/meu-projeto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Habilita o CORS
app.use(cors());

// Habilita o JSON
app.use(express.json());

// Defina o modelo de usuário


// Your routes and other backend logic here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});