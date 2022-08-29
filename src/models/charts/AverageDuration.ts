import { IAverageDuration, ISession } from "./IAverageDuration"
/**
 * @description Object containing the AverageDuration data. Used by our DailyActivityFactory
 * @return {AverageDurationObj} - getters
 */
export class AverageDurationObj {
    _sessions:ISession[]
    _userId:number |string
    constructor(data:IAverageDuration) {
        this._sessions = data.sessions
        this._userId = data.userId
    }

    get sessions() {
        return this._sessions
    }

    get userId() {
        return this._userId
    }

    

}