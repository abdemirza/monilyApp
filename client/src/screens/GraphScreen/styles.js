import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:10,
  },
  chartContainer: {
    marginBottom: 5,
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.grey,
    borderRadius: 5,
  },
  chartHeading: {
    fontSize: 16,
  },
});
