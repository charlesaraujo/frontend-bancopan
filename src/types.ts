export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
export interface User{
  id:number,
  name: string,
  cpf: string,
  phone: string,
  email: string
}

export interface UpdateUser{
  cpf: string,
  name: string,
  phone: string,
  email: string
}