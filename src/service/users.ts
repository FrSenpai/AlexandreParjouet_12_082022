
import useSWR from "swr";
import { apiUrl } from "../env/env";
interface Options {
    id: number |string,
    type?: "activity" | "average-sessions" | "performance"
}

//resolver function
const fetcher = (...args:any) => fetch(args).then(res => res.json())
/**
 * @description Returns the user's general data.
 * @param options {Options} - options for the request
 * @returns {user:Object<any>, isLoading:boolean, isError:string}
 */
export function useUser(options: Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + (options.type ? options.type : ""), fetcher)
    return {
        user:data,
        isLoading: !error && !data,
        isError: error
    }
}
/**
 * @description Returns the user's daily activity data.
 * @param options {Options} - options for the request
 * @returns {user:Object<any>, isLoading:boolean, isError:string}
 */
export function useUserDailyActivity(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
/**
 * @description Returns the user's average duration data.
 * @param options {Options} - options for the request
 * @returns {user:Object<any>, isLoading:boolean, isError:string}
 */
export function useUserAverageDuration(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
/**
 * @description Returns the user's performance data.
 * @param options {Options} - options for the request
 * @returns {user:Object<any>, isLoading:boolean, isError:string}
 */
export function useUserPerformance(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}