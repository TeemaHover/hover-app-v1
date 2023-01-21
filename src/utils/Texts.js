import React from 'react';
import { Text } from 'react-native';

export const SText = ({ children }) => {
  return <Text className="text-[13px]">{children}</Text>;
};

export const MTeet = ({ children }) => {
  return <Text className="text-[15px]">{children}</Text>;
};
