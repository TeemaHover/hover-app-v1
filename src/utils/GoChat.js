import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, STYLES } from '../../constants/style';

const GoChat = ({ theme }) => {
  return (
    <View
      className={`${STYLES.flexBetween} flex-row p-5 rounded-2xl mb-[10px]`}
      style={{
        backgroundColor:
          theme === 0
            ? COLORS.blue
            : theme === 1
            ? COLORS.waterBlue
            : COLORS.grayishBLue,
      }}
    >
      <View className="flex flex-col">
        {/* <MediumText text={'MGM331_231'} theme="blue" /> */}

        <Text
          style={{
            color: theme === 0 ? COLORS.white : COLORS.darkBlue,
          }}
        >
          <Text className="text-[24px]">MGM331_231</Text>
          {'\n'}
          Changes: 23
          {'\n'}
          Students: 30
        </Text>
      </View>
      {/* <Button title="asd"></Button> */}
      <TouchableOpacity
        className={`${STYLES.flexCenter} px-[30px] py-[15px] rounded-2xl`}
        style={{
          backgroundColor:
            theme === 0
              ? COLORS.orange
              : theme === 1
              ? COLORS.orange
              : COLORS.white,
        }}
      >
        <Text
          style={{
            color: theme === 0 ? COLORS.white : COLORS.darkBlue,
          }}
        >
          Go Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoChat;
