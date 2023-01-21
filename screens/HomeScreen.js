import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { STYLES } from '../constants/style';
import { Activity } from '../src/components';
import Layout from '../src/layout';
import { GoChat } from '../src/utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const nickname = 'Esa';

const HomeScreen = () => {
  const [expand, setExpand] = useState(false);

  return (
    <Layout className="mb-[300px]">
      <Text className="text-[35px] font-bold mb-[20px]">Hello {nickname}</Text>

      {/* Activity bar */}
      <View className="w-full">
        <Activity />
      </View>

      {/* Today's group chat */}
      <View className="flex flex-col my-5">
        <View className={`${STYLES.flexBetween} flex-row w-full`}>
          <Text className="text-[21px]">
            <Text className="font-bold">Today,</Text>
            <Text> 25 November</Text>
          </Text>
          <TouchableOpacity
            className={`${STYLES.flexCenter} flex-row`}
            onPress={() => {
              setExpand(!expand);
            }}
          >
            <Text className="text-[15px]">All</Text>
            <View
              className={`${
                expand ? 'rotate-0' : 'rotate-180'
              } transition duration-500 ease-in-out `}
            >
              <Ionicons
                name="caret-down"
                // className={expand ? 'rotate-0' : 'rotate-180'}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          className={`${
            expand ? 'h-[300px]' : 'h-[350px]'
          } mt-[15px] duration-500`}
        >
          <GoChat theme={getRandomInt(3)} />
          <GoChat theme={getRandomInt(3)} />
          <GoChat theme={getRandomInt(3)} />
          <GoChat theme={getRandomInt(3)} />
          <GoChat theme={getRandomInt(3)} />
          <GoChat theme={getRandomInt(3)} />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
