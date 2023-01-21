import React from 'react';
import { Button, Text, View } from 'react-native';
import { COLORS } from '../constants/style';

const Chat = () => {
  return (
    <View className="py-4 rounded-b-xl" style={{ backgroundColor: '#377afb' }}>
      <Text style={{ color: COLORS.white }}>Yess</Text>
      <Button className={'w-4'} title="Yess" />
    </View>
  );
};

export default Chat;
