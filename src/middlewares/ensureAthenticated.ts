import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
//para reconhecer o sub como string, pois se trata de uma function
interface IPayload {
  sub: string;
}
export function ensureAthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //receber o token
  const authToken = request.headers.authorization;

  //validar se o authToken esta preenchido
  if (!authToken) return response.status(401).end(); //mesg padrão do error 401

  const [, token] = authToken.split(" "); //separando o token pelo espaço
  //validar se o authToken esta ativo, se não esta expirado

  try {
    const { sub } = verify(
      token,
      "74f96bee003b35c24e98bbe0fbd4c872"
    ) as IPayload;
    //recuperar info do usuario
   
    request.user_id = sub;
  } catch {
    return response.status(401).end();
  }

  return next();
}
