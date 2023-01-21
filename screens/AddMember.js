<<<<<<< HEAD
import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SIZE } from '../constants/style';
import Layout from '../src/layout';
import SearchBar from '../src/utils/SearchBar';
=======
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../constants/style'
import Layout from '../layout'
import { SIZE } from '../constants/style'
import Search from '../components/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
>>>>>>> af77150258634eb3216181eb2142ac417f7f859b

const AddMember = ({ navigation }) => {
  return (
    <Layout>
      <SearchBar />
      <Text className="text-[35px] font-bold">Choose Student</Text>
      <Text className="text-[24px] ">MGM321_231</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // className={'flex flex-row border-2'}
      >
        <View className="flex-row flex-wrap justify-between flex-1 py-6">
          <View style={{ width: SIZE.pWidth, height: SIZE.pHeight }}>
            <View>
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: '100%', height: 100 }}
              />
            </View>
            <Text className={'text-center mt-2 text-sm'}>Тээма</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default AddMember;
