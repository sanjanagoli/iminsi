import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  main: { 
    height: '4%',
    width: '100%',
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  topBar: {
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(256,26,256)',
  },
  topBarTitle: {
    paddingLeft: '4%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scroll: {
    width: `${100 * this.props.numberOfArticles}%`,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    width: '100%',
    paddingTop: 15,
    backgroundColor: 'white',
  },
});
