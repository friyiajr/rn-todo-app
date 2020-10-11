import { StyleSheet } from 'react-native';
import Colors from '../Helpers/colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between'
  },
  title: {
    color: Colors.coolBlue,
    paddingTop: 0.03 * windowHeight,
    paddingLeft: 0.04 * windowWidth,
    fontSize: 30,
    fontWeight: 'bold'
  }
});