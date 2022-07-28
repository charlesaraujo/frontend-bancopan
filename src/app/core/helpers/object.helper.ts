export class ObjectHelper {
    public static removeEmptyValues(object: any) {
        Object.keys(object).forEach(key => !object[key] ? delete object[key] : null);
    }

    public static transformDateIntoTime(object: any) {
        Object.keys(object).forEach(key => object[key] instanceof Date ? object[key] = object[key].getTime() : null);
    }
}
