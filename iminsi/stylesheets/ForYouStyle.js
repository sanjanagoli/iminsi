import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight/10,
  },
  scroll: {
    paddingLeft: windowWidth/50,
  },
  pillText: {
    fontFamily: 'Baskerville',
    fontWeight: "200",
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: windowWidth,
    backgroundColor: 'rgb(250,250,250)',
  },
});
