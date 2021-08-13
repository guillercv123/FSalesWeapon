export interface IUser{
  pkusuario?:string;
  nombre?:string;
  clave:string;
  usuario:string;
}

export interface IUserWithToken{
   usuario:IUser;
   jwtToken:string;
}
