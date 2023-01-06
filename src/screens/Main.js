import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Container from '@mui/material/Container';

import LineChart from '../components/LineChart';
import { UserData } from '../components/Data';
import PieChart from '../components/PieChart';
import Orders from '../components/Orders';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const mdTheme = createTheme();

export default function Main() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="main"
            sx={{
              // backgroundColor: (theme) =>
              //   theme.palette.mode === 'light'
              //     ? theme.palette.grey[100]
              //     : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={6} md={8} lg={8}>
                  <Paper
                    sx={{
                      p: 2,
                    }}
                    elevation={4}
                  >
                    <LineChart chartData={userData} />
                  </Paper>
                </Grid>
                {/* PieChart */}
                <Grid item xs={3} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                    }}
                    elevation={4}
                  >
                    <PieChart chartData={userData} />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    elevation={4}
                  >
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
            {/* <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={4}>
              <LineChart chartData={userData} />
            </Paper>
          </Grid>
          <Grid item xs={4} md={8} lg={6}>
            <Paper elevation={4}>
              <PieChart chartData={userData} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
