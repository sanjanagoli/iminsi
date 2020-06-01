import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: 350,
    height: 180,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  picture: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Baskerville',
    width: 260,
    paddingBottom: 5,
  },
  newsOrganization: {
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 12,
    color: 'white',
    paddingBottom: 5,
  },
  tags: {
    fontSize: 10,
    color: 'white',
  },
  TitleTagsOrganization: {
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
    paddingLeft: 25,
    paddingBottom: 15,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
    color: 'white',
    paddingRight: 25,
  },
});

export default styles;
