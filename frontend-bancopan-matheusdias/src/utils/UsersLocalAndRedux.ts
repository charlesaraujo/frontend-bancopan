import {IUsersState} from "../assets/Interfaces/IUsers";

export function UsersLocalAndRedux(users: IUsersState[]) {
    let usersReturn: IUsersState[] = []
    let usersLocal = localStorage.getItem("users") as any;
    console.log(usersLocal)

    //Verifica e seta usuarios em local storage e retorna o conjunto
    if(usersLocal) {
        usersLocal = JSON.parse(usersLocal)
        console.log([...users, ...usersLocal ])
        usersReturn = Object.assign([], usersLocal, users)
        localStorage.setItem("users", JSON.stringify(usersReturn))
        return usersReturn
    }

    //Seta os valores para o local storage e retorna usuarios
    localStorage.setItem("users", JSON.stringify(users));
    return users
}

export function addUserLocalStorage(newUser: IUsersState) {
    let usersLocal = localStorage.getItem("users");
    //Verifica o usuario no local storage e retorna um conjunto novo
    if(usersLocal) {
        let usersReturn = JSON.parse(usersLocal);
        usersReturn.push(newUser)
        console.log(usersReturn)
        localStorage.setItem("users", JSON.stringify(usersReturn))
    }
}

export function deleteUserLocalStorage(userDelete: IUsersState) {
    let usersLocal = localStorage.getItem("users");
    //Verifica e deleta o usuario do local storage e retorna um conjunto novo
    if(usersLocal) {
        let usersReturn = JSON.parse(usersLocal);
        usersReturn = usersReturn.filter((user:IUsersState) => user.name !== userDelete.name)
        localStorage.setItem("users", JSON.stringify(usersReturn))
    }
}