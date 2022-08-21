import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useUserAverageDuration } from "../../../service/users";
import "./AverageDuration.css";
import { getDayName } from "../../../utils/getDayName";
export function AverageDuration({userId}:{userId:string |number}) {
    const { user, isError, isLoading } = useUserAverageDuration({ id: userId, type: "average-sessions" })
    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Chargement en cours...</div>
    const formatedChartData = user.data.sessions.map((session: any) => {
        session.dayName = getDayName(session.day - 1)
        return session
    })
    return (
        <section className="ctnAverageDuration">
            <h3>Durée moyenne des <br></br> sessions</h3>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    margin={{ top: 0, right: 15, bottom: 24, left: 15 }} data={formatedChartData}>
                    <Line activeDot={{
							stroke: 'rgba(255, 255, 255, 0.5)',strokeWidth: 10,r: 2}} dot={false} type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.4032)" strokeWidth={2} />
                    <Tooltip cursor={{
                        stroke: "rgba(0, 0, 0, 0.1)",
                        strokeWidth: 32,
                    }} wrapperStyle={{ outline: "none" }} contentStyle={{
                        backgroundColor: 'white', width: "fit-content", color: 'white', 
                    }} coordinate={{ x: 100, y: 100 }} labelStyle={{ display: "none" }} itemStyle={{ color: "black", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} formatter={(value: number, name: string, props: any) =>  [`${value} min`]} separator='' />
                    <YAxis dataKey="sessionLength"
                        domain={[0, "dataMax + 60"]}
                        hide={true} />
                    <XAxis  dy={10} style={{ padding: '20px' }} stroke="#FFFFFFA1" tickLine={false} tick={true} axisLine={false} dataKey="dayName" />
                </LineChart>
            </ResponsiveContainer>
        </section>

    )
}