import ControllerBase from "../../bases/controller.base";
import ProductService from "./product.service";
import { Request, Response } from "express";

class ProductController extends ControllerBase {
  private readonly _service: ProductService;

  public constructor() {
    super();
    this._service = new ProductService();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const products = await this._service.findAll();
    res.json(products).end();
  }
}

export default ProductController;
