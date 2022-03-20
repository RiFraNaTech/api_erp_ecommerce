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

  public async getOrderById(
    req: Request<{ id: number }>,
    res: Response
  ): Promise<void> {
    const order = await this._service.findById(<any>req.params.id);
    if (order) {
      res.status(200).json(order).end();
      return;
    } else {
      res.status(404).json({ message: 'pedido no encontrado' }).end();
      return;
    }
    res.json({}).end();
  }
}

export default OrderController;
