import ControllerBase from '../../bases/controller.base';
import OrderService from './order.service';
import { Request, Response } from 'express';
import { IOrderSearch } from './order.model';

class OrderController extends ControllerBase {
  private readonly _service: OrderService;

  public constructor() {
    super();
    this._service = new OrderService();
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

export default OrderController;
