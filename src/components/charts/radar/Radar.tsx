import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer } from "recharts";
import { Radar as ReRadar } from "recharts"
import { useUserPerformance } from "../../../service/users";
import "./Radar.css";
export function Radar({userId}:{userId:string |number}) {
    const { user, isError, isLoading } = useUserPerformance({ id: userId, type: "performance" })
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    const kindsList:Array<any> = [{en:"intensity", fr:"Intensité"}, {en:"speed", fr:"Vitesse"}, {en:"strength", fr:"Force"}, {en:"endurance", fr:"Endurance"}, {en:"energy", fr:"Energie"}, {en:"cardio", fr:"Cardio"}]
    const kindArr : Array<any> = Object.values(user.data.kind)
    const chartsData = kindsList.map((k:any) => {
        const kindIndex = kindArr.findIndex((d:any) => d === k.en)
        const newItem = {value:user.data.data[kindIndex].value, kind:k.fr}
        return newItem
    })
    return (
        <section className="ctnRadar">
                <ResponsiveContainer width="100%" height="100%">
                <RadarChart margin={{top:20, right:40, left:40, bottom:20}}  data={chartsData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis style={{fontFamily:"Roboto",fontWeight: 500, fontSize:12,}} tick={{fill:"white"}} tickLine={false}  dataKey="kind" />
                    <ReRadar  name="Mike" fontFamily="Roboto" dataKey="value" fontWeight={500} stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}