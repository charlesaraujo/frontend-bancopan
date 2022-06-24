export interface UsersListModel {
    list: Array<UserModel>;
}

export interface UserModel {
    cpf: string;
    email: string;
    name: string;
    phone: string;
}
