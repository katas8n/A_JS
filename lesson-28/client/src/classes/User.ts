import { IUser } from '../interfaces/IUser'
import { Role } from '../enums/roles'
import { ROLE } from '../types/role'

export class User implements IUser{
    public login:string = ""; 
    public password:string = "";
    public isAdmin:ROLE = Role.CUSTOMER;

    constructor() {}
    
}