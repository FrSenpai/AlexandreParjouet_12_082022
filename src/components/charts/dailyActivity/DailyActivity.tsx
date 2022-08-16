import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUser, useUserDailyActivity } from '../../../service/users';
import "./DailyActivity.css"
interface IDailyActivityChart {
  name: string,
  kcal: number,
  kg: number,
}

export function DailyActivity() {
  const { user, isError, isLoading } = useUserDailyActivity({ id: 18, type: "activity" })
  if (isError) return <div>Error occured</div>
  if (isLoading) return <div>Chargement en cours...</div>
  const data: IDailyActivityChart[] = [];
  user.data.sessions.forEach((session: any, index: number) => {
    data.push({ name: index.toString(), kcal: Number(session.calories), kg: Number(session.kilogram) })
  })
  return (
    <section className='ctnChartDailyActivity'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          height={100}
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
          <Tooltip />
          <Legend verticalAlign='top' align='right' />
          <Bar yAxisId="right-axis" radius={[3, 3, 0, 0]} barSize={7} dataKey="kg" name='Poids (kg)' legendType='circle' fill="#282D30" />
          <Bar yAxisId="left-axis" radius={[3, 3, 0, 0]} barSize={7} dataKey="kcal" name='Calories brûlées (kCal)' legendType='circle' fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </section>

  );
}