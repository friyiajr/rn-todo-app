import { fromPairs } from 'ramda';
import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContent: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
    justifyContent: "space-between"
  },
  textArea: {
    height: height * 0.20,
    justifyContent: "space-around",
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: 'blue',
    marginBottom: 20,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleArea: {
    height: height * 0.1,
  }
});