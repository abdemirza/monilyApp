import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {PieChart as PieChartjs} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const PieChart = ({
  backgroundColor,
  height = 220,
  labels = ['January', 'February', 'March', 'April', 'May', 'June'],
  style,
}) => {
  const pieData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#8799',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
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
    <View
      style={{
        shadowColor: '#000',
        elevation: 10,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // backgroundColor: 'red',
      }}>
      <PieChartjs
        style={[style]}
        data={pieData}
        
        width={screenWidth}
        height={height}
        chartConfig={chartConfig}
        accessor={'population'}
        hasLegend={true}
        backgroundColor={'transparent'}
        absolute
      />
    </View>
  );
};

export default PieChart;
