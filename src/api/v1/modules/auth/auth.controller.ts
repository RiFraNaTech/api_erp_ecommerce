import ControllerBase from '../../bases/controller.base';
import UserService from '../user/user.service';
import { Request, Response } from 'express';
import { generateToken, IUserLogin } from './utils/auth.utils';

class AuthController extends ControllerBase {
  private readonly _service: UserService;

  public constructor() {
    super();
    this._service = new UserService();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    res.json({ message: 'auth' }).end();
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

  public async signUp(
    req: Request<{}, {}, IUserLogin>,
    res: Response
  ): Promise<void> {
    const user = await this._service.findByUsername(req.body.username);
    if (user) {
      const msg: string = 'ya existe un usuario ' + req.body.username;
      res.status(400).json({ message: msg }).end();
    } else {
      if (!(req.body.username === '' && req.body.password === '')) {
        let user = req.body.username;
        let pass = req.body.password;
        let noAdmin: boolean = false;

        const newUser = await this._service.saveNewUser(user, pass, noAdmin);

        const msg: string = 'Usuario creado con éxito - username: ' + user;

        res.status(201).json({ message: msg }).end();
        return;
      } else {
        res
          .status(400)
          .json({ message: 'usuario y contrasenia no pueden estar vacios' })
          .end();
        return;
      }
    }
  }
}

export default AuthController;
