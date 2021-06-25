import {Request, Response} from 'express';
import { ListTagService } from '../services/ListTagService';

class ListTagController{
    async handle(request:Request, response:Response){
        const listTagService = new ListTagService();

        let tags = await listTagService.execute()
        tags.map( tag => ( { ...tag, nameCustom:`#${tag.name}`} ))
        return response.json(tags)
    }
}

export{ ListTagController }