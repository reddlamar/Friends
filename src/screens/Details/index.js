import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsScreen = ({route}) => {
  const {friend} = route.params;
  return (
    <View>
      <Text>First Name: {friend.firstName}</Text>
      <Text>Last Name: {friend.lastName}</Text>
      <Text>Email: {friend.email}</Text>
      <Text>Phone: {friend.phone}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
