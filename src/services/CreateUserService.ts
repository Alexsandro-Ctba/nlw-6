import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

/* Inserimos no service todas as validações e regras de negocios necessárias antes de enviarmos os dados 
para o banco de dados */
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password:string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já cadastrado!");
    }

    //criptografando a senha
    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password:passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };