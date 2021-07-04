import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.2,
    width: width,
  },
  inputContainer: {
    width: width,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderRadius: 4,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: height * 0.08,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B84B1FF',
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
  link: {
    color: 'blue',
  },
});
export default styles;
