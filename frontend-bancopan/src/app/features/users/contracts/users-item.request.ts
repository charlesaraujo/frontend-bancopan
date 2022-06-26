import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemResponse } from "./users-item.response";

export class UsersItemRequest implements UsersItemResponse {

    public id?: number;
    public cpf: string;
    public email: string;
    public name: string;
    public phone: string;

    constructor(formValue: any) {
        this.id = formValue.id;
        this.cpf = UserUtils.formatOnlyNumbers(formValue.cpf);
        this.email = formValue.email;
        this.name = formValue.name;
        this.phone = UserUtils.formatOnlyNumbers(formValue.phone);
    }

}