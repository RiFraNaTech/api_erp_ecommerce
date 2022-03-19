import { Request, Response } from "express";

export interface IDeletable {
  delete: (req: Request, res: Response) => void;
}

export interface IReadable {
  nema: string;
}

function getUser() {}

export default getUser;
