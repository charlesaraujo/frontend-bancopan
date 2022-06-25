import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemResponse } from "../contracts/users-item.response";

export class UserModel implements UsersItemResponse {

    public id?: string;
    public cpf: string;
    public email: string;
    public name: string;
    public phone: string;

    constructor(userResponse: UsersItemResponse) {
        this.id = userResponse.id;
        this.name = userResponse.name;
        this.email = userResponse.email;
        this.cpf = UserUtils.formatCpf(userResponse.cpf);
        this.phone = UserUtils.formatPhone(userResponse.phone);
    }

}
