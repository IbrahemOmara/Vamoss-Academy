import * as React from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import MyLineChart from '../../Charts/MyLineChart';


const chartsParams = {
  margin: { bottom: 20, left: 50, right: 5,top:10 },
  height: 300,
};


const price = [0,400, 200,  400, 600,400, 800];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Sat',
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
];

const yLabels = [
    '$1000',
    '$800',
    '$600',
    '$400',
    '$200',
    '$0',
  ];

const setting = {
  chartsParams,
  price,
  xLabels,
  yLabels
} 


export default function WeeklyChart() {
  const theme = useTheme();

  const newTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <ThemeProvider theme={newTheme} >
      <Paper sx={{ width: '100%', p:2}} elevation={0} style={{backgroundColor:'transparent'}}>
        <Stack direction="column" spacing={2}>
          <MyLineChart {...setting}  />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-evenly"
          >
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}