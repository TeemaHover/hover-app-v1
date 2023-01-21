import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../constants/style'
import Layout from '../layout'
import { SIZE } from '../constants/style'
import Search from '../components/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AddMember = ({ navigation }) => {
  return (
    <Layout>
      <Search />
      <Text className="text-[35px] font-bold">Choose Student</Text>
      <Text className="text-[24px] ">MGM321_231</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // className={'flex flex-row border-2'}
      >
        <View className="flex-1 flex-row flex-wrap justify-between py-6">
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
  )
}

export default AddMember
