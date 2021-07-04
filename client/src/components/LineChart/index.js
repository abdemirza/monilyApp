import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart as LineChartjs} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const LineChart = ({
  backgroundColor,
  height = 220,
  labels = ['January', 'February', 'March', 'April', 'May', 'June'],
  data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ],
  gradientFrom = '#fb8c00',
  gradientTo = '#ffa726',
  style,
}) => {
  return (
    <View>
      <LineChartjs
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={height}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: {backgroundColor},
          backgroundGradientFrom: {gradientFrom},
          backgroundGradientTo: gradientTo,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: gradientTo,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChart;
