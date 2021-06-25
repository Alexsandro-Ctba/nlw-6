//listando todos os elogios do usuario

import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/complimentsRepository";


class LIstUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = complimentsRepository.find({

        user_receiver: user_id,
   
      /*
      caso queira trazer mais dados relacionados usar o relations, substituindo o 
      algoritmo atual...
      sintaxe:
      where:{
         user_receiver: user_id,
      },
       relations:["userSender","userReceiver", "tag"],
      */
    });
    return compliments;
  }
}

export { LIstUserReceiveComplimentsService };
