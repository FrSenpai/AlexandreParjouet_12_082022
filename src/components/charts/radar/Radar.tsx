import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer } from "recharts";
import { Radar as ReRadar } from "recharts"
import { useUserPerformance } from "../../../service/users";
import "./Radar.css";
export function Radar() {
    const data = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];
    const { user, isError, isLoading } = useUserPerformance({ id: 18, type: "performance" })
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    console.log(user)
    const chartsData = user.data.data.map((d:any) => {
        console.log(user.data.kind[d.kind])
        const newItem = {value:d.value, kind:user.data.kind[d.kind]}
        return newItem
    })
    return (
        <section className="ctnRadar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartsData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis tick={{fill:"white",fontWeight: 500, fontSize:12}} tickLine={false} fontFamily="Roboto" dataKey="kind" />
                    <ReRadar name="Mike" fontFamily="Roboto" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}