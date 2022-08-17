
import useSWR from "swr";
import { apiUrl } from "../env/env";
interface Options {
    id: number,
    type?: "activity" | "average-sessions" | "performance"
}
interface QueryResponse {
    user:User;
    isLoading: boolean;
    isError: boolean;
}

interface KeyData {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}
interface UserInfos {
    age: number;
    firstName: string;
    lastName: string;
}
interface User {
    id: number;
    keyData: KeyData;
    score: number;
    userInfos: UserInfos
}
const fetcher = (...args:any) => fetch(args).then(res => res.json())
export function useUser(options: Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + (options.type ? options.type : ""), fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function useUserDailyActivity(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}