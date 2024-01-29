import React from 'react';
import {Button} from 'react-native';
import {styles} from './styles';

const AddFriendButton = ({setModalVisible}) => {
  return (
    <Button
      style={styles.button}
      title="Add A New Friend"
      onPress={() => setModalVisible(true)}
    />
  );
};

export default AddFriendButton;
