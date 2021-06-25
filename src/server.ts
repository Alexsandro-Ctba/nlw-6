import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from 'cors'
import "express-async-errors"; //sempre depois do express
import { router } from "./routes";

import "./database";

const app = express();
app.use(cors)

app.use(express.json());//sempre definir antes das rotas...

app.use(router);

//middleware de error sempre tera 4 parametros, deve ser colocado smpre depois do middleware o router;
app.use((err: Error, request: Request, response: Response, next: NextFunction )=>{
    if(err instanceof Error){
        return response.status(400).json({error: err.message})
    }
    return response.status(500).json({ status:"Error", message:"Erro interno no Servidor" })
})

app.listen(3000, () => console.log("servidor online!"));