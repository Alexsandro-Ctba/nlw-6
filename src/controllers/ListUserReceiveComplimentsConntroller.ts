import { Request, Response } from "express";
import { LIstUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsConntroller {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiveComplimentsService =
      new LIstUserReceiveComplimentsService();
    const compliments = await listUserReceiveComplimentsService.execute(
      user_id
    );

    return response.json(compliments)
  }
}

export { ListUserReceiveComplimentsConntroller };
