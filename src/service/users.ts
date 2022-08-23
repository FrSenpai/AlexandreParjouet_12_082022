
import useSWR from "swr";
import { apiUrl } from "../env/env";
interface Options {
    id: number |string,
    type?: "activity" | "average-sessions" | "performance"
}

const fetcher = (...args:any) => fetch(args).then(res => res.json())
export function useUser(options: Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + (options.type ? options.type : ""), fetcher)
    return {
        user:data,
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

export function useUserAverageDuration(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function useUserPerformance(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function useUserAverageSession(options:Options) {
    const { data, error } = useSWR(apiUrl+"user/" + options.id + "/" + options.type, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
