import ControllerBase from '../../bases/controller.base';
import ProductService from './product.service';
import { Request, Response } from 'express';
import { IProduct } from './utils/product.utils';

class ProductController extends ControllerBase {
  private readonly _service: ProductService;

  public constructor() {
    super();
    this._service = new ProductService();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    console.log(req.body, 'ruta principal');
    const products = await this._service.findAll();
    res.json(products).end();
  }

  public async getProductById(
    req: Request<{ id: number }>,
    res: Response
  ): Promise<void> {
    console.log(req.params);
    const id = <any>req.params.id;
    const product = await this._service.findByProductId(id);
    if (product) {
      res.status(200).json(product).end();
      return;
    } else {
      res.status(404).json({ message: 'producto no encontrado' }).end();
      return;
    }
    res.json({}).end();
  }

  public async getProductByProductName(
    req: Request<{ productname: string }, {}, {}, { productname: string }>,
    res: Response
  ): Promise<void> {
    console.log(req.params);
    const productname = <any>req.params.productname;
    const product = await this._service.findByProductName(productname);
    if (product) {
      res.status(200).json(product).end();
      return;
    } else {
      res.status(404).json({ message: 'producto no encontrado' }).end();
      return;
    }
    res.json({}).end();
  }
}

export default ProductController;
