export class User {
  public name: string = '';
  public cpf: string = '';
  public phone: string = '';
  public email: string = '';
}

export class UsersModel {
  public users: User[] = [];
  public total: number = 0;
}
