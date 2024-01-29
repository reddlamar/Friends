import React from 'react';
import {Text, View, FlatList, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

const Friends = ({friends, remove, navigation}) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {friend: item})}
          style={styles.touchable}>
          <View style={styles.container}>
            <Text>
              {item.lastName}, {item.firstName}
            </Text>
            <Pressable onPress={e => remove(e, item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      )}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};

export default Friends;
