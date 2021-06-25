import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/complimentsRepository"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender:string;
    user_receiver:string;
    message:string;
}
class CreateComplimentService{
    async execute({
        tag_id,
        user_receiver,
        user_sender,
        message
    }:IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepository);

        const usersRepositories = getCustomRepository(UsersRepositories);

        //verificando se o usuario existe
        if(user_sender === user_receiver)
        throw new Error("Usuário recebido incorretamente!")


        //não passando objeto o findOne aqui buscara o ID
        const userReceiverExists = await usersRepositories.findOne(user_receiver)
            
        if(!userReceiverExists)
        throw new Error("Usuário não inexistente!")

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })
        await complimentsRepository.save(compliment)
        return compliment;
    }   
}

export { CreateComplimentService }