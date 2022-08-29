export interface ISessionDailyActivity {
    day:string;
    kilogram:number, 
    calories:number;
}
export interface IDailyActivity {
    userId:number |string;
    sessions:ISessionDailyActivity[]
}