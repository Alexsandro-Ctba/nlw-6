import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from 'class-transformer'
class ListTagService{
    async execute(){
        const tagsRepository = getCustomRepository(TagsRepositories);
        const tags = await tagsRepository.find()

        //inserindo HashTag sem uso da biblioteca ClassTranform
      //  let tags = await tagsRepository.find()
        // tags = tags.map( tag => ( { ...tag, nameCustom: `#${tag.name }`} ))
        
        return classToPlain(tags);//pega a (tags) e inseri novos objetos dentro da entidade
    }
}

export { ListTagService }