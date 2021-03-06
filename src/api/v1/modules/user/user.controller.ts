import ControllerBase from '../../bases/controller.base';
import UserService from './user.service';
import { Request, Response } from 'express';
import { IUserLogin } from './user.model';

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

  public async getById(req: Request, res: Response): Promise<void> {
    const user = await this._service.findById();
    res.json(user).end();
  }
}

export default UserController;
