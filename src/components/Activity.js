import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, STYLES } from '../../constants/style';
import { SText } from '../utils/Texts';

const Box = ({ className, children, style }) => {
  return (
    <View
      className={`
        ${className}   
        ${STYLES.flexBetween}
        items-center 
        py-5 
        rounded-2xl    
      `}
      style={style}
    >
      {children}
    </View>
  );
};

const Activity = () => {
  return (
    <View className="flex flex-row">
      <View className="flex w-full flex-column basis-1/3">
        <Box
          className="h-[130px] mb-[10px]"
          style={{ backgroundColor: COLORS.waterBlue }}
        >
          <SText className="text-[12px]">Upcoming</SText>
          <Text className="text-[50px] font-bold ">50</Text>
          <SText>New chats</SText>
        </Box>
        <Box
          className="h-[130px]"
          style={{ backgroundColor: COLORS.orange, color: COLORS.white }}
        >
          <SText>Semester off</SText>
          <Text>asd</Text>
          <SText>Completed</SText>
        </Box>
      </View>
      <Box
        className="basis-2/3 ml-[10px]"
        style={{
          backgroundColor: COLORS.blue,
          color: COLORS.white,
        }}
      >
        <SText>Lorem ipsum dolor sit amet.</SText>
      </Box>
    </View>
  );
};

export default Activity;
