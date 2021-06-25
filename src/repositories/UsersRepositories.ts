import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)//definindo qual o tipo da classe repositories
//utilizando o extends para ter acessar a todos os metodos  da classe Repository
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
