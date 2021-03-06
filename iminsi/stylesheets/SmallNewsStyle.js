import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderTopColor: '#000000',
    borderTopWidth: 0.2,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.2,
    minHeight: 130,
    minHeight: 110,

  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    justifyContent: 'center',
    width: '70%',
    paddingLeft: 15,
  },

  newsOrganization: {
    fontFamily: 'Baskerville',
    fontSize: 12,
    paddingTop: 20,
    paddingLeft: 15,
  },
  tags: {
    color: 'grey',
    fontSize: 10,
    fontFamily: 'Baskerville',
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
    backgroundColor: 'black',
    maxWidth: 60,
    maxHeight: 60,
    justifyContent: 'flex-start',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
  },
  titleAndPicture: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
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
