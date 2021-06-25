import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService{
    async execute(name:string){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){//verifica se o nome esta preenchido!
            throw new Error("Nome incorreto!")
        }

        const tagAllreadyExists = await tagsRepositories.findOne({//verificando se existe nome no banco
            name
        })

        if(tagAllreadyExists){
            throw new Error("Tag já existe!")
        }

        const tag = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(tag)
        return tag;
    }
}

export { CreateTagService }