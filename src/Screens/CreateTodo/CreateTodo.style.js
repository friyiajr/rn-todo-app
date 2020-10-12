import { StyleSheet } from 'react-native';
import Color from '../../Helpers/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end'
  },
  textInput: {
    height: 500,
    color: 'white'
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  submitButtonText: {
    color: Color.coolBlue,
  }
});