import { KeyData } from './../../models/user/IUser';
import { NewUserObj } from '../../models/user/NewUser';
import { OldUserObj } from '../../models/user/OldUser';
export interface IUserFactory {
    firstname:string,
    score:number;
    keyData: KeyData;
    id:number | string;
}
/**
 * @description Factory to create an UserObj
 * @param user {NewUserObj | OldUserObj} --> the user data
 * @returns {IUserFactory} --> an object with getters on {firstname:string, score:number, keyData: KeyData, id:number | string}
 */
export function UserFactory( user:any):IUserFactory {
        // todayScore ? so it's an old user
        if (user?.todayScore) return new OldUserObj(user)
        else if (user?.score) return new NewUserObj(user)
        else throw 'Unknown type format'
 }