import { User } from './user.model';
import ServiceBase from '../../bases/service.base';
import { getConnection, getManager } from 'typeorm';

class UserService extends ServiceBase<User> {
  public findAll(): Promise<User[]> {
    return getConnection().createEntityManager().find(User);
  }

  public findById(): Promise<User[]> {
    return getConnection().createEntityManager().find(User);
  }

  public findByUsername(nameuser: string): Promise<User | null> {
    // findOneBy(Entity, { whereColum : param });
    return getConnection()
      .createEntityManager()
      .findOneBy(User, { username: nameuser });
  }
}

export default UserService;
