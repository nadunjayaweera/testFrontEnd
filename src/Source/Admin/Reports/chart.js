import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from '../Dashboard/title';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

function createMonthData(date, amount) {
  return { date, amount };
}

const customTooltip = ({ active, payload }) => {
  const tooltipStyles = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '8px',
  };

  const labelStyles = {
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  if (active && payload && payload.length) {
    return (
      <div style={tooltipStyles}>
        <p style={labelStyles}>{`${payload[0].name} : ${payload[0].value}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};



const data = [
  createData('00:00', 0),
  createData('03:00', 140),
  createData('06:00', 300),
  createData('09:00', 570),
  createData('12:00', 1100),
  createData('15:00', 1740),
  createData('18:00', 2030),
  createData('21:00', 2210),
  createData('24:00', 4000),
];

const mdata = [
  createMonthData('Mon', 3050),
  createMonthData('Tue', 2340),
  createMonthData('Wed', 5023),
  createMonthData('Thu', 2556),
  createMonthData('Fri', 9432),
  createMonthData('Sat', 8342),
  createMonthData('Sun', 6328),
]

const Chart =() => {
  const theme = useTheme();
  

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Tooltip
              content={customTooltip}
              cursor={true}
              animationDuration={0}
              position={{ x: -10, y: -30 }}
            />

            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales (Rs.)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

const MonthChart =() => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>This Month</Title>
      <ResponsiveContainer>
        <LineChart
          data={mdata}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales (Rs.)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export {Chart, MonthChart}