import { Application, Router } from "express";
import registerRoutes from "./modules";

const BASE_ENDPOINT = "/api/v1";

class ServerRouter {
  private readonly _router: Router;

  public constructor() {
    this._router = Router();
  }

  public registerRoutes(app: Application): void {
    registerRoutes(this._router);
    app.use(BASE_ENDPOINT, this._router);
  }
}

export default ServerRouter;
