import { ROLE } from '../types/role'

export interface IUser {
    login : string,
    password : string,
    isAdmin : ROLE;
}