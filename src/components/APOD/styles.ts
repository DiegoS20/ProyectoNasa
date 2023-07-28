import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer: {},
  image: {
    width: '100%',
    borderRadius: 32,
    height: 200,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
