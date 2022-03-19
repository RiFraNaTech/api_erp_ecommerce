abstract class ServiceBase<T> {
  public abstract findAll(): Promise<T[]>;
}

export default ServiceBase;
