import { KeyData } from './../../models/user/User';
export interface IUserFactory {
    firstname:string,
    score:number;
    keyData: KeyData;
    id:number | string;
}