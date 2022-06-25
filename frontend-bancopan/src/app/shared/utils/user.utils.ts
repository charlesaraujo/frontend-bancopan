export class UserUtils {

    /**
     * Formata o CPF incluindo os simbolos necessários
     * @param cpf CPF a ser formatado
     * @returns CPF formatado
     */
    public static formatCpf(cpf: string): string {
        //retira os caracteres indesejados...
        this.formatCpfOnlyNumbers(cpf);

        //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    /**
     * Formata o CPF deixando somente os números
     * @param cpf CPF a ser formatado
     * @returns CPF apenas com números
     */
    public static formatCpfOnlyNumbers(cpf: string): string {
        return cpf = cpf.replace(/[^\d]/g, "");
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
}
