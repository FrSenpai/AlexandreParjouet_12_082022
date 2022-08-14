import { apiUrl } from "../env/env";
import { get } from "../utils/http-methods";
interface Options {
    id:number,
    type?:  "activity" | "average-sessions" | "performance"
}
export function getUserDatas(options:Options): Promise<any> {
    return get(apiUrl+ "user/" + options.id + "/" + (options.type ? options.type : ""));
}

function is() {

}