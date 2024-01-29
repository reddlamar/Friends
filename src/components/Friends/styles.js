import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 9,
    borderColor: 'black',
    borderWidth: 1,
  },
  removeButton: {
    fontSize: 12,
    color: 'red',
  },
  touchable: {
    margin: 3,
  },
});
