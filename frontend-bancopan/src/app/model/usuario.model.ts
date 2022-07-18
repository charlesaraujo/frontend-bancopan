export class Usuario {
  cpf: string;
  email: string;
  name: string;
  phone: string;

  public constructor(user? : Usuario) {
    Object.assign(this, user);
   }
}
