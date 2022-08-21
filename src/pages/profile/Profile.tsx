import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AverageDuration } from "../../components/charts/averageDuration/AverageDuration";
import { DailyActivity } from "../../components/charts/dailyActivity/DailyActivity";
import { InfoBox } from "../../components/charts/infoBox/InfoBox";
import { ObjectivePercent } from "../../components/charts/objectivePercent/ObjectivePercent";
import { Radar } from "../../components/charts/radar/Radar";
import { useUser } from "../../service/users";
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
    const {id} = useParams()
    const { user, isError, isLoading } = useUser({ id: Number(id)})
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    if (typeof user === "string") return <div className="error"> <p>Une erreur est survenue</p></div>
    return (
        <section className="ctnProfile">
            <h2>Bonjour <span className="username">{user.data.userInfos.firstName}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <section className="ctnCharts">
                <section className="ctnColumnCharts">
                    <DailyActivity />
                    <section className="ctnRowCharts">
                        <AverageDuration></AverageDuration>
                        <Radar></Radar>
                        <ObjectivePercent score={user.data.todayScore ?user.data.todayScore : user.data.score }></ObjectivePercent>
                    </section>

                </section>

                <InfoBox keyData={{ ...user.data.keyData }}></InfoBox>
            </section>

        </section>
    )
}

