import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemResponse } from "./users-item.response";

export class UsersItemRequest implements UsersItemResponse {

    public cpf: string;
    public email: string;
    public name: string;
    public phone: string;

    constructor(form: any) {
        this.cpf = UserUtils.formatCpfOnlyNumbers(form.cpf);
        this.email = form.email;
        this.name = form.name;
        this.phone = UserUtils.formatCpfOnlyNumbers(form.phone);
    }

}