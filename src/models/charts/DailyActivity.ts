import { IDailyActivity, ISessionDailyActivity } from "./IDailyActivity"
/**
 * @description Object containing the dailyActivity data. Used by our DailyActivityFactory
 * @return {DailyActivityObj} - getters
 */
export class DailyActivityObj {
    _sessions:ISessionDailyActivity[]
    _userId:number |string
    constructor(data:IDailyActivity) {
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