export interface KeyData {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}
export interface UserInfos {
    age: number;
    firstName: string;
    lastName: string;
}
export interface User {
    id: number;
    keyData: KeyData;
    userInfos: UserInfos
}