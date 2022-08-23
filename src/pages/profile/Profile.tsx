import { useParams } from "react-router-dom";
import { AverageDuration } from "../../components/charts/averageDuration/AverageDuration";
import { DailyActivity } from "../../components/charts/dailyActivity/DailyActivity";
import { InfoBox } from "../../components/charts/infoBox/InfoBox";
import { ObjectivePercent } from "../../components/charts/objectivePercent/ObjectivePercent";
import { Radar } from "../../components/charts/radar/Radar";
import { IUserFactory, UserFactory } from "../../factories/user/UserFactory";
import { useUser } from "../../service/users";
import "./Profile.css"
/**
 * @description Profile page, no props required, we useParams to handle user id in the url
 * @returns Profile page of the user
 */
export function Profile() {
    const { id } = useParams()
    const { user, isError, isLoading }: { user: any, isError: any, isLoading: any } = useUser({ id: Number(id) })
    
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    //if an error occur, the api returns a string
    if (typeof user === "string") return <div className="error"> <p>L'utilisateur n'existe pas.</p></div>
    //user seems to be a valid user, we can use it to create a user factory 
    let userObj:IUserFactory = UserFactory(user.data)
    return (
        <section className="ctnProfile">
            <h2>Bonjour <span className="username">{userObj.firstname}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <section className="ctnCharts">
                <section className="ctnColumnCharts">
                    <DailyActivity userId={userObj.id}/>
                    <section className="ctnRowCharts">
                        <AverageDuration userId={userObj.id}></AverageDuration>
                        <Radar userId={userObj.id}></Radar>
                        <ObjectivePercent score={userObj.score}></ObjectivePercent>
                    </section>
                </section>
                <InfoBox keyData={{ ...userObj.keyData }}></InfoBox>
            </section>
        </section>
    )
}

