import { KeyData, User } from './IUser';

export interface NewUser extends User {
    score:number;
}
/**
 * @description Object containing the new user's data. Used by our UserFactory
 * @return {NewUserObj}
 */
export class NewUserObj {
    _firstname:string;
    _score:number;
    _keyData:KeyData;
    _id:number;
    constructor(user:NewUser) {
        this._firstname = user.userInfos.firstName
        this._score = user.score
        this._keyData = user.keyData
        this._id = user.id
    }
    
    get firstname() {
        return this._firstname
    }

    get score() {
        return this._score
    }

    get keyData() {
        return this._keyData
    }

    get id() {
        return this._id
    }

}