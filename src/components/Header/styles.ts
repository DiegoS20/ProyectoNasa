import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 60,
    height: 60,
  },
});
