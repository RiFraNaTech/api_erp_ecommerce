import { Product } from "./product.model";
import ServiceBase from "../../bases/service.base";

class ProductService extends ServiceBase<Product> {
  public findAll(): Promise<Product[]> {
    const product: Product[] = [
      {
        id: 123123,
        name: "Zapatilla",
        price: 2.13,
        active: true,
      },
      {
        id: 31313,
        name: "Boxer",
        price: 0.1,
        active: true,
      },
      {
        id: 222222,
        name: "Aro de luz",
        price: 10,
        active: false,
      },
    ];
    return Promise.resolve(product);
  }
}

export default ProductService;
