import {StyleSheet} from 'react-native';
import * as COLOR from '../../../constants/colors';

export const detailsStyles = StyleSheet.create({
  recipe: {
    flexDirection: 'column',
    padding: 15,
    marginBottom: 5,
    borderRadius: 3,
    backgroundColor: COLOR.DARK_BLUE,
    height: 700,
  },
  block: {
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  image: {
    borderRadius: 20,
    width: 330,
    height: 280,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    borderBottomWidth: 5,
    marginBottom: 10,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
