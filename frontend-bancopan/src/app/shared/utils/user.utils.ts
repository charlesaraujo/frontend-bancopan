import { AbstractControl } from "@angular/forms";

export class UserUtils {

    /**
     * Formata o CPF ou Telefone deixando somente números
     * @param item Item a ser formatado
     * @returns Item somente numeros
     */
    public static formatOnlyNumbers(item: string): string {
        return item = item.replace(/[^\d]/g, "");
    }

    /**
     * Formata Telefone e celular adicionando os símbolos necessários
     * @param phone telefone/Celular a ser formatado
     * @returns Telefone/Celular formatado
     */
    public static formatPhone(phone: string): string {
        var r = phone.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else {
            r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        }
        return r;
    }

    public static getFormControlErrorMessage(formControl: AbstractControl): string {
        if (formControl.errors) {
            const error = formControl.errors as any;
            if (error.required) {
                return 'Este campo é obrigatório.';
            } else if (error.minlength) {
                return `Mínimo ${error.minlength.requiredLength} caractéres.`
            } else if (error.email) {
                return `Não corresponde a um formato de e-mail válido.`
            } else if (error.mensagem) {
                return error.mensagem;
            }
        }
        return '';
    }

    public static canShowFormControlError(formControl: AbstractControl): boolean {
        if (formControl.invalid && (formControl.dirty || formControl.touched)) {
            return true;
        }
        return false;
    }
}
