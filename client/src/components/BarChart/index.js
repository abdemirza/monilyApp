import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart as BarChartJs} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const BarChart = ({
  backgroundColor,
  height = 220,
  data = [20, 45, 28, 80, 99, 43],
  labels = ['January', 'February', 'March', 'April', 'May', 'June'],
  style,
}) => {
  const barData = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: backgroundColor,
    backgroundGradientTo: backgroundColor,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  return (
    <View>
      <BarChartJs
        // style={graphStyle}
        data={barData}
        width={screenWidth}
        height={height}
        yAxisLabel={'$'}
        chartConfig={chartConfig}
        style={style}
      />
    </View>
  );
};

export default BarChart;
