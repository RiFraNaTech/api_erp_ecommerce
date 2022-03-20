import { Order } from './order.model';
import ServiceBase from '../../bases/service.base';
import { getConnection, getManager } from 'typeorm';

class OrderService extends ServiceBase<Order> {
  public findAll(): Promise<Order[]> {
    return getConnection().createEntityManager().find(Order);
  }

  public findById(): Promise<Order[]> {
    return getConnection().createEntityManager().find(Order);
  }

  public findByUsername(nameuser: string): Promise<Order | null> {
    // findOneBy(Entity, { whereColum : param });
    return getConnection().createEntityManager().findOneBy(Order, {});
  }
}

export default OrderService;
