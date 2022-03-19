import ControllerBase from "../../bases/controller.base";
import UserService from "./user.service";
import { Request, Response } from "express";

class UserController extends ControllerBase {
  private readonly _service: UserService;

  public constructor() {
    super();
    this._service = new UserService();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const users = await this._service.findAll();
    res.json(users).end();
  }
}

export default UserController;
