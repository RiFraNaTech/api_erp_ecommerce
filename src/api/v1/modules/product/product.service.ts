import { Product } from './product.model';
import ServiceBase from '../../bases/service.base';
import { getConnection, getRepository } from 'typeorm';

class ProductService extends ServiceBase<Product> {
  public findAll(): Promise<Product[]> {
    return getConnection().createEntityManager().find(Product);
  }

  public findByProductId(productId: number): Promise<Product | null> {
    // findOneBy(Entity, { whereColumnEntity : param });
    console.log(productId, 'prueba 1');
    return getConnection()
      .createEntityManager()
      .findOneBy(Product, { id: productId });
  }

  public findByProductName(productName: string): Promise<Product[]> {
    // findOneBy(Entity, { whereColum : param });
    console.log(productName, '- busq por nombre');
    //return getConnection().createEntityManager().findOneBy(Product, { name: productName });
    return getRepository(Product)
      .createQueryBuilder('p')
      .where('lower(p.nombre_prod) like lower(:name)', {
        name: `%${productName}%`,
      })
      .getMany();
  }
}

export default ProductService;
