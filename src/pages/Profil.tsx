import { useState } from "react";
import { getUserDatas } from "../service/users";

export function Profile() {
    getUserDatas({id:18, type:"activity"}).then((res:any) => {
        console.log(res)
    })
    return (
        <div>
            <p>User Profile Page</p>
        </div>
    )
}

function initUser() {}