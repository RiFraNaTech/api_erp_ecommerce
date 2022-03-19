import { Product } from "./product.model";
import ServiceBase from "../../bases/service.base";
import { getConnection } from "typeorm";

class ProductService extends ServiceBase<Product> {
  public findAll(): Promise<Product[]> {
    return getConnection().createEntityManager().find(Product);
  }
}

export default ProductService;
