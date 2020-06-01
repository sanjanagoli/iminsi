import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: '#000000',
    borderTopWidth: 0.2,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.2,
    minHeight: 110,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Baskerville',
    justifyContent: 'center',
  },
  newsOrganization: {
    fontFamily: 'AmericanTypewriter-Bold',
    fontSize: 12,
  },
  tags: {
    color: 'grey',
    fontSize: 10,

  },
  pictureDate: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  picture: {
    flex: 1,
    width: '50%',
    backgroundColor: 'black',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
  },
  titleTagsAndOrg: {
    flex: 1,
    flexDirection: 'column',
    width: '55%',
    paddingLeft: '8.5%',
    paddingBottom: 10,
    paddingTop: 10,
  },
  content: {
    backgroundColor: '#fff',
    padding: 30,
  },
});

export default styles;
