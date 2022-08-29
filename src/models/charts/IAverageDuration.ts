export interface ISession {
    day:number;
    sessionLength:number, 
    dayName?:string;
}
export interface IAverageDuration {
    userId:number |string;
    sessions:ISession[]
}