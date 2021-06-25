import { Request, NextFunction, Response } from "express";
import { getCustomRepository, UsingJoinColumnIsNotAllowedError } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepository = getCustomRepository(UsersRepositories);
  //verifica se o usuario é admin;
  const { admin } = await usersRepository.findOne(user_id);
  console.log(admin);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "usuario não possui permissão para realizar alterações!",
  });
}
