import { User } from "./user.model";
import ServiceBase from "../../bases/service.base";

class UserService extends ServiceBase<User> {
  public findAll(): Promise<User[]> {
    const users: User[] = [
      {
        name: "Rino",
        surname: "Arias",
        active: true,
      },
      {
        name: "Tommy",
        surname: "Apolinario",
        active: true,
      },
      {
        name: "JeanDavid",
        surname: "Cabrera",
        active: false,
      },
    ];
    return Promise.resolve(users);
  }
}

export default UserService;
