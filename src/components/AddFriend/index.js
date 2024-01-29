import React from 'react';
import {Button} from 'react-native';
const AddFriend = ({setModalVisible}) => {
  return (
    <Button
      style={{borderWidth: 3, bordColor: 'red'}}
      title="Add New Friend"
      onPress={() => setModalVisible(true)}
    />
  );
};

export default AddFriend;
