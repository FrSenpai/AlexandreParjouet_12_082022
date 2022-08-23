import { IDailyActivity, ISessionDailyActivity } from "./IDailyActivity"
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