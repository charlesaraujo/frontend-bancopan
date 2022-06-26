import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemResponse } from "../contracts/users-item.response";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { UserModel } from "./users-list.model";

const response: UsersItemResponse = {
    id: 1,
    cpf: '81552885445',
    email: 'contato@jmarcossouza.com',
    name: 'João Marcos Alencar de Souza',
    phone: '(11) 96880-6402',
};

describe('UserModel', () => {
    it('should create model', () => {
        const model = new UserModel(response);

        expect(model).toBeDefined();
        expect(model.id).toEqual(response.id);
        expect(model.cpf).toEqual(cpfValidator.format(response.cpf));
    });
})

