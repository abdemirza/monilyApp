import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 10,
    marginLeft: 8,
  },
  header: {
    width: '100%',
    padding: 10,
    height: Dimensions.get('window').height * 0.065,
    borderColor: '#bcbdbd',
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  bottomMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
