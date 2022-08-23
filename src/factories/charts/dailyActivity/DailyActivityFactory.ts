import { IDailyActivity } from '../../../models/charts/IDailyActivity';
import { DailyActivityObj } from './../../../models/charts/DailyActivity';

/**
 * @description Factory to create an DailyActivityObj
 * @param data {IDailyActivity} --> {userId:number |string, sessions:ISession[]}
 * @returns {IDailyActivity} --> an object with getters on {userId:number |string, sessions:ISession[]} 
 */
export function DailyActivityFactory(data:IDailyActivity):IDailyActivity {
        // prevent future changes to the data object
        if (data) return new DailyActivityObj(data)
        else throw 'Unknown type format'
 }