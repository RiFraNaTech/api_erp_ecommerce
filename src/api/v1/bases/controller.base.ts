import { Request, Response } from "express";

abstract class ControllerBase {
  public abstract getAll(req: Request, res: Response): void;
}

export default ControllerBase;
