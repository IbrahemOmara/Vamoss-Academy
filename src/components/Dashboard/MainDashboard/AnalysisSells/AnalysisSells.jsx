import React from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import MyBarChart from '../../Charts/MyBarChart';

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
        xLabels,
        yLabels
    }
  

export default function AnalysisSells() {

  const theme = useTheme();

  const newTheme = createTheme({ palette: { mode: 'dark' } });

  return (
    <>
      <ThemeProvider theme={newTheme} >
       <Paper sx={{ width: '100%', p:2}} elevation={0} style={{backgroundColor:'transparent'}}>
        <Stack direction="column" spacing={2}>
          <MyBarChart {...setting}  />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-evenly"
          >
          </Stack>
        </Stack>
       </Paper>
    </ThemeProvider>
      
    </>
  )
}
