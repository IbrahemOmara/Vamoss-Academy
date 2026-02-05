import * as React from 'react';
import Stack from "@mui/material/Stack";
import { BarChart } from '@mui/x-charts/BarChart';


export default function MyBarChart({xLabels,yLabels}) {

  return (
    <Stack
    direction="column"
    spacing={1}
    alignItems="center"
    sx={{ width: "100%" }}
    className=""
  >
     <BarChart
      xAxis={[{ scaleType: 'band', data: xLabels  }]}
      series={[{ data: [50,100, 150, 190, 225, 230, 280] }, { data: [80, 120, 135, 200, 250, 260] }]}
      // width={340}
      height={250}
      
    />
    </Stack>
  );
}