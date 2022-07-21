export function validationName(value:string) {
    return !value;
}

export function validationEmail(value:string) {
    return !value.match("[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
}

export function validationCpf(value:string) {
    let cpfRegex: RegExp;
    cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return !cpfRegex.test(value);
}

export function validationTelefone(value:string) {
    let telefoneRegex: RegExp;
    telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return !telefoneRegex.test(value);
}

export function validationCaracterLength(value:string, quantity:number) {
    return value.length >= 20;
}

export function validationInputs(isNome:string, isEmail:string, isCpf:string, isCell:string) {
    if(!validationName(isNome) && !validationCaracterLength(isNome, 20)) {
        if(!validationEmail(isEmail)){
            if(!validationCpf(isCpf)){
                if(!validationTelefone(isCell)){
                        return false
                }
            }
        }
    }
    return true
}