import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();


const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS

const mongoUrl = `mongodb+srv://${dbuser}:${dbpass}@autenticacao-jwt.yn8qkrv.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Conexão com o MongoDB estabelecida"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB", error));

// Rotas da API
app.get("/", (req: Request, res: Response) => {
  res.send("API do meu projeto");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
