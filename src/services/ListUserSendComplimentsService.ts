import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/complimentsRepository";


class ListUserSendComplimentsService{
    async execute(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
    
        const compliments = complimentsRepository.find({
          user_sender: user_id,
        });
        return compliments;
      }
}

export{ ListUserSendComplimentsService }