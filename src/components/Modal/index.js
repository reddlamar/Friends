import React, {useState} from 'react';
import {Text, View, Alert, Modal, Pressable, TextInput} from 'react-native';
import {styles} from './styles';

const AddFriendModal = ({add, modalVisible, setModalVisible}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const clearTextInputs = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            value={firstName}
            placeholder="First Name"
            onChangeText={text => setFirstName(text)}
            style={styles.textInput}
          />
          <TextInput
            value={lastName}
            placeholder="Last Name"
            onChangeText={text => setLastName(text)}
            style={styles.textInput}
          />
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            style={styles.textInput}
          />
          <TextInput
            value={phone}
            placeholder="Phone Number"
            onChangeText={text => setPhone(text)}
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                add({firstName, lastName, email, phone});
                clearTextInputs();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddFriendModal;
