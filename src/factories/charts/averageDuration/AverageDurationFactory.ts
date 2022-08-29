import { IAverageDuration } from './../../../models/charts/IAverageDuration';
import { AverageDurationObj } from '../../../models/charts/AverageDuration';
/**
 * @description Factory to create an AverageDurationObj
 * @param data {IAverageDuration} --> {userId:number |string, sessions:ISession[]}
 * @returns {IAverageDuration} --> an object with getters on {userId:number |string, sessions:ISession[]} 
 */
export function AverageDurationFactory(data:IAverageDuration):IAverageDuration {
        // prevent future changes to the data object
        if (data) return new AverageDurationObj(data)
        else throw 'Unknown type format'
 }