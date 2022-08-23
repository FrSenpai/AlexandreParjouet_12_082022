import { KeyData, User } from './User';
export interface OldUser extends User {
    todayScore:number;
}
export class OldUserObj {
    _firstname:string;
    _score:number;
    _keyData:KeyData;
    _id:number;
    constructor(user:OldUser) {
        this._firstname = user.userInfos.firstName
        this._score = user.todayScore
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