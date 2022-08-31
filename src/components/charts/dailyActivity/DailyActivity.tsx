import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DailyActivityFactory } from '../../../factories/charts/dailyActivity/DailyActivityFactory';
import { useUserDailyActivity } from '../../../service/users';
import PropTypes from 'prop-types'; // ES6
import "./DailyActivity.css"
interface IDailyActivityChart {
  name: string,
  kcal: number,
  kg: number,
}

/**
 * 
 * @returns the daily activity chart component of the user
 */
export function DailyActivity({userId}:{userId:string|number}) {
  //handling user get data
  const { user, isError, isLoading } = useUserDailyActivity({ id: userId, type: "activity" })
  if (isError) return <div>Error occured</div>
  if (isLoading) return <div>Chargement en cours...</div>
  const dataOfChart: IDailyActivityChart[] = [];
  const dailyActivity = DailyActivityFactory(user.data)
  //setup chart data
  dailyActivity.sessions.forEach((session: any, index: number) => {
    dataOfChart.push({ name: index.toString(), kcal: Number(session.calories), kg: Number(session.kilogram) })
  })
  return (
    <section className='ctnChartDailyActivity'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataOfChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <text className='ctnTitle' x={20} y={20} fill="black" >
            <tspan fontFamily="Roboto" fontWeight={500} color="#20253A" fontSize="15">Activité quotidienne</tspan>
          </text>
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="right-axis" tickCount={4} dataKey={"kg"} type="number" allowDataOverflow domain={['dataMin - 1', 'dataMax + 2']} orientation='right' />
          <YAxis yAxisId="left-axis" tickCount={2} width={0} dataKey={"kcal"} type="number" allowDataOverflow domain={['dataMin - 10', 'dataMax + 200']} style={{ display: "none" }} orientation='left' />
          <Tooltip wrapperStyle={{ outline: "none" }} contentStyle={{
            backgroundColor: '#E60000', width: "fit-content", color: 'white', border: 0
          }} labelStyle={{ display: "none" }} itemStyle={{ color: "white", height: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} formatter={(value: number, name: string, props: any) => {
            if (props.dataKey === "kg") {
              return [`${value} kg`]
            } else {
              return [`${value} Kcal`]
            }
          }} wrapperClassName='wrapperDailyCharts' separator='' />
          <Legend formatter={(value: any, entry: any, index: number) => {
            entry.color = "#74798C"
            return <span style={{ color: entry.color, fontFamily:"Roboto", fontSize:14, fontWeight:500 }}>{value}</span>;
          }} verticalAlign='top' align='right' />
          <Bar yAxisId="right-axis" radius={[3, 3, 0, 0]} barSize={7} dataKey="kg" name='Poids (kg)' legendType='circle' fill="#282D30" />
          <Bar yAxisId="left-axis" radius={[3, 3, 0, 0]} barSize={7} dataKey="kcal" name='Calories brûlées (kCal)' legendType='circle' fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </section>

  );
}

DailyActivity.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}