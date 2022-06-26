import { UserUtils } from "src/app/shared/utils/user.utils";
import { UsersItemRequest } from "./users-item.request";

const formValue = {
    id: 1,
    cpf: '815.528.854-45',
    email: 'contato@jmarcossouza.com',
    name: 'João Marcos Alencar de Souza',
    phone: '(11) 96880-6402',
};

describe('UsersItemRequest', () => {
    it('should create model', () => {
        const model = new UsersItemRequest(formValue);

        expect(model).toBeDefined();
        expect(model.id).toEqual(formValue.id);
        expect(model.phone).toEqual(UserUtils.formatOnlyNumbers(formValue.phone));
    })
})

