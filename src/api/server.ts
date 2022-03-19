import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import ServerRouter from "./v1/router";
import config from "config";
import helmet from "helmet";
import morgan from "morgan";

const corsOptions = config.get<CorsOptions>("cors");
const morganOptions = config.get<string>("morgan");

class Server {
  private readonly _app: Application;
  private readonly _port: number;
  private readonly _router: ServerRouter;

  public constructor(port: number) {
    this._app = express();
    this._port = port;
    this._router = new ServerRouter();
  }

  public run(): void {
    this._initServices();
    this._app.listen(this._port, () => console.log("Servidor corriendo..."));
  }

  private _initServices(): void {
    this._app.use(morgan(morganOptions));
    this._app.use(cors(corsOptions));
    this._app.use(helmet());
    this._app.use(express.json());
    this._initRoutes();
    this._initErrorHandling();
  }

  private _initRoutes(): void {
    this._router.registerRoutes(this._app);
  }

  private _initErrorHandling(): void {}
}

export default Server;
