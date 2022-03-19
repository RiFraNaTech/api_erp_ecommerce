import ControllerBase from '../../bases/controller.base';
import UserService from './user.service';
import { Request, Response } from 'express';
import { IUserLogin } from './user.model';
import { generateToken } from './utils/user.utils';

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

  public async getById(req: Request, res: Response, id: number): Promise<void> {
    const user = await this._service.findById();
    res.json(user).end();
  }

  public async signIn(
    req: Request<{}, {}, IUserLogin>,
    res: Response
  ): Promise<void> {
    const user = await this._service.findByUsername(req.body.username);
    if (user) {
      if (req.body.password === user.password) {
        res.send({
          token: generateToken(user),
        });
      } else {
        res.status(400).json({ message: 'contrasenia incorrecta' }).end();
      }
    } else {
      res.status(404).json({ message: 'usuario no valido' }).end();
    }
  }
}

export default UserController;
