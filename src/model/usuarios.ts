export class Usuarios {
    public name: string;
    public cpf: string;
    public phone: string;
    public email: string;

    constructor(name:string, cpf:string, phone: string, email: string) {
        this.name = name;
        this.cpf = cpf;
        this.phone = phone;
        this.email = email;
    }
}