import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import AddFriendButton from '../../components/AddFriendButton';
import Friends from '../../components/Friends';
import AddFriendModal from '../../components/Modal';

import {styles} from './styles';
import friends from '../../data/friends.json';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [friendList, setFriendList] = useState(friends);
  console.log('Init Friends', friendList);

  const add = newFriend => {
    newFriend.id = generateID();
    setFriendList(() => [newFriend, ...friendList]);
  };

  const generateID = () => {
    const newId = Math.random() * friendList.length + 1;
    if (friendList.some(f => f.id === newId)) {
      generateID();
    }
    return newId;
  };

  const remove = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    const filteredFriendList = friendList.filter(f => f.id !== id);
    setFriendList(filteredFriendList);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar />
      <AddFriendButton setModalVisible={setModalVisible} />
      <Friends friends={friendList} remove={remove} navigation={navigation} />
      <AddFriendModal
        add={add}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
