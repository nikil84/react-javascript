import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Header, Navigation } from './components/layouts';
import Chart from "react-google-charts";
import { DateRangePicker } from "materialui-daterange-picker";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {

  const classes = useStyles();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle}/>
      <Navigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}></Navigation>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
        <Chart
  width={'100%'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['days', 'green', 'blue'],
    [new Date(2020, 0, 1), 180, 220],
    [new Date(2020, 1, 18), 230, 150],
    [new Date(2020, 2, 15), 260, 180],
    [new Date(2020, 3, 18), 460, 230],
    [new Date(2020, 5, 29), 230, 170],
    [new Date(2020, 6, 30), 330, 200],
    [new Date(2020, 7, 31), 490, 5.7],
  ]}
  options={{
    legend: 'none',
    hAxis: {
      format: 'MMMYYY',
    },
    series: {
      0: {color: 'lightgreen'},
      1: {  color: 'blue' },
    },
  }}
/>
      </main>
    </div>
  );
}

export default App;
