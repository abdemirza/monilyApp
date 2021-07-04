import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import styles from './styles';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const GraphScreen = ({navigation}) => {
  const [lineChartHidden, setLineChartHidden] = useState(false);
  const [pieChartHidden, setPieChartHidden] = useState(false);
  const [barChartHidden, setBarChartHidden] = useState(false);
  const visibilityHandler = hiddenStateFn => {
    hiddenStateFn(prev => !prev);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={25} />
        </TouchableWithoutFeedback>
        <Text style={styles.heading}>Charts</Text>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartHeading}>Line Chart</Text>
          <TouchableWithoutFeedback
            onPress={() => visibilityHandler(setLineChartHidden)}>
            <View style={styles.icon}>
              <FontAwesome
                name={lineChartHidden ? 'angle-down' : 'angle-up'}
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {!lineChartHidden && <LineChart />}
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartHeading}>Pie Chart</Text>
          <TouchableWithoutFeedback
            onPress={() => visibilityHandler(setPieChartHidden)}>
            <View style={styles.icon}>
              <FontAwesome
                name={pieChartHidden ? 'angle-down' : 'angle-up'}
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {!pieChartHidden && <PieChart />}
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartHeading}>Pie Chart</Text>
          <TouchableWithoutFeedback
            onPress={() => visibilityHandler(setBarChartHidden)}>
            <View style={styles.icon}>
              <FontAwesome
                name={barChartHidden ? 'angle-down' : 'angle-up'}
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {!barChartHidden && <BarChart />}
      </View>
    </ScrollView>
  );
};

export default GraphScreen;
