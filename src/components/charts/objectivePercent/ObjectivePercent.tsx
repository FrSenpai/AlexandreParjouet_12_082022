import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import "./ObjectivePercent.css";
export function ObjectivePercent({ score }: { score: number }) {
    const average = ((score) * 360) //here the angle chart is equal to 360 degrees
    const dataChart = { name: "Score", value: 100 }
    const padding = (360 - average)
    return (
        <section className="ctnObjectivePercent">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart >
                    <Pie labelLine={false} data={[dataChart]} style={{fontFamily:"Roboto"}} dataKey="value" cx="50%" cy="50%" paddingAngle={padding} innerRadius={60} outerRadius={75} fill="#FF0000" label={false} />
                    
                    <Pie labelLine={false} data={[{value:360, name:""}]} dataKey="value" cx="50%" cy="50%" innerRadius={0} outerRadius={60} fill="white" label={false} />
                    <Legend fontFamily="Roboto" formatter={(v:any, e:any) => <span style={{color:"#20253A"}}>{v}</span>} wrapperStyle={{ marginTop: "10%", marginLeft: "5%",color: "#20253A", fontWeight: 500, fontSize: 15 }} iconSize={0} verticalAlign="top" align="left" height={36} />
                </PieChart>

            </ResponsiveContainer>
            <section className="ctnAbsoluteViewScore">
                <h4>{(score * 100)}%</h4>
                <p>de votre objectif</p>
            </section>
        </section>
    )
}