import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";


export default function MyLineChart({chartsParams,price,xLabels,yLabels}) {


  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems="center"
      sx={{ width: "100%" }}
      className=""
     
      >
      <LineChart

        {...chartsParams}
        series={[
        { data: price, label: '$' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ scaleType: 'linear', data: yLabels }]}
      height={250}
      
      />
    
    </Stack>
  );
}
