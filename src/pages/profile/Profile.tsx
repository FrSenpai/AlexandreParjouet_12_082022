import React, { useEffect, useState } from "react";
import {useUser } from "../../service/users";
import "./Profile.css"
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

export function Profile() {
    const {user, isError, isLoading} = useUser({id:18})
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    return (
        <section className="ctnProfile">
            <h2>Bonjour <span className="username">{user.data.userInfos.firstName}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        </section>
    )
}

