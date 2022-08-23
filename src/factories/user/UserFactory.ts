import { NewUserObj } from '../../models/user/NewUser';
import { OldUserObj } from '../../models/user/OldUser';
import { IUserFactory } from './IUserFactory';

export function UserFactory( user:any):IUserFactory {
        // todayScore ? so it's an old user
        if (user?.todayScore) return new OldUserObj(user)
        else if (user?.score) return new NewUserObj(user)
        else throw 'Unknown type format'
 }