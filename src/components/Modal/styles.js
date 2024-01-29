import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 42,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    // padding: 6,
  },
  button: {
    borderRadius: 20,
    padding: 6,
    elevation: 2,
    marginBottom: 3,
    width: 100,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonCancel: {
    backgroundColor: '#eb4034',
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 6,
    width: 100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
