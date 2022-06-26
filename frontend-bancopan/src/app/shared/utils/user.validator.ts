import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UserUtils } from "./user.utils";
import { cpf as cpfValidator } from 'cpf-cnpj-validator'; 

export class UserValidators {

    /**
     * Valida se o CPF é válido
     * @returns 
     */
    public static isValidCpf(control: AbstractControl): ValidationErrors | null {
        const cpf = UserUtils.formatOnlyNumbers(control.value) as any;
        return cpfValidator.isValid(cpf)
            ? null
            : { mensagem: 'O CPF informado não é válido. (Você pode usar o gerador de CPFs informado nas notas do desenvolvedor.)' }
    }

    /**
     * Valida se o telefone ou celular é inválido.
     * @returns 
     */
    public static phoneValidator(control: AbstractControl): ValidationErrors | null {
        const phone = UserUtils.formatOnlyNumbers(control.value);
        const phoneLength = phone.length;
        if (phone) {
            if (phoneLength !== 10 && phoneLength !== 11) {
                return { mensagem: 'O número de telefone inserido não é válido.' };
            }
        }
        return null;
    }


}