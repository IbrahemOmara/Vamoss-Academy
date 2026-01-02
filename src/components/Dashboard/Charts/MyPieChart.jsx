import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data2 = [
  { label: 'Total Direct sells', value: 1500 },
  { label: 'Total Revenue', value: 2000 },
  { label: 'Total Users', value: 900 },
];

export default function MyPieChart() {
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'fit-content'}}>
      <PieChart
        series={[
          {
            data: data2,
            cx: 130,
            // cy: 80,
            innerRadius: 30,
            // outerRadius: 80,
          },
        ]}
        
        height={215}
        width={270}
        slotProps={{
          legend: { hidden: true },
        }}
        colors={['#0AF859', '#BAC8FF', '#8697D9']}
      />
    </div>
  );
}