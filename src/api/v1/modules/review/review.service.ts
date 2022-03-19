import { Review } from './review.model';
import ServiceBase from '../../bases/service.base';

class ReviewService extends ServiceBase<Review> {
  public findAll(): Promise<Review[]> {
    const reviews: Review[] = [
      {
        name: 'Rino',
        surname: 'Arias',
        active: true,
      },
      {
        name: 'Tommy',
        surname: 'Apolinario',
        active: true,
      },
      {
        name: 'JeanDavid',
        surname: 'Cabrera',
        active: false,
      },
    ];
    return Promise.resolve(reviews);
  }
}

export default ReviewService;
