import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemResponse } from "../contracts/users-item.response";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class UserModel implements UsersItemResponse {

    public id?: number;
    public cpf: string;
    public email: string;
    public name: string;
    public phone: string;

    constructor(userResponse: UsersItemResponse) {
        this.id = userResponse.id;
        this.name = userResponse.name;
        this.email = userResponse.email;
        this.cpf = cpfValidator.format(userResponse.cpf);
        this.phone = UserUtils.formatPhone(userResponse.phone);
    }

}
