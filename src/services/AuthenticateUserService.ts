import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
    email:string;
    password:string;
}
class AuthenticateUserService{
        async execute({ email, password }:IAuthenticateRequest){
            const usersRepository = getCustomRepository(UsersRepositories)

            //verificando e-mail existente
            const user = await usersRepository.findOne({
                email
            })
           
            if(!user){
                throw new Error("Email ou senha estão incorretos!")
            }
            //validando a senha
         const passwordMatch = await compare(password, user.password)
        
         if(!passwordMatch){
            throw new Error("Email ou senha estão incorretos!")
        }
            //gerando token 
            const token = sign(
                {
                email: user.email,
                //gerado md5 https://www.md5hashgenerator.com/
                }, 
            "74f96bee003b35c24e98bbe0fbd4c872",
               {
                subject: user.id,//id do usuario
                expiresIn:"1d",//tempo de vida do token
               });
               
            return token;
        }
}
export { AuthenticateUserService }