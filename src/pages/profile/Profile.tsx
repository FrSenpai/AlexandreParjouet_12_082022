import React, { useEffect, useState } from "react";
import { getUserDatas } from "../../service/users";
import "./Profile.css"
interface KeyData {
    calorieCount:number;
    carbohydrateCount:number;
    lipidCount:number;
    proteinCount:number;
}
interface UserInfos {
    age:number;
    firstName:string;
    lastName:string;
}
interface User {
    id: number;
    keyData:KeyData;
    score:number;
    userInfos: UserInfos
}

export function Profile() {
    const [userData, setUserData]= useState<User |undefined>(undefined);
    useEffect(() => {
        if (userData === undefined) getBasicUserDatas(setUserData)
    }, [])
    if (!userData) return (
        <p>Chargement en cours ...</p>
    )
    return (
        <section className="ctnProfile">
            <h2>Bonjour <span className="username">{userData.userInfos.firstName}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        </section>
    )
}

async function getBasicUserDatas(callback:Function) {
    const user = await getUserDatas({id:18})
    console.log(user)
    if (user?.data) {
        callback(user.data)
    }
    return user
}
