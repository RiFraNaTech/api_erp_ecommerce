import ControllerBase from '../../bases/controller.base';
import ReviewService from './review.service';
import { Request, Response } from 'express';

class ReviewController extends ControllerBase {
  private readonly _service: ReviewService;

  public constructor() {
    super();
    this._service = new ReviewService();
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const reviews = await this._service.findAll();
    res.json(reviews).end();
  }
}

export default ReviewController;
