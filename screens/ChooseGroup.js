import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../constants/style'
import Layout from '../layout'
import { SIZE } from '../constants/style'
import { COLORS } from '../constants/style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddMember from './AddMember'
import HomeScreen from './HomeScreen'

const ChooseGroup = ({ navigation }) => {
  return (
    <Layout>
      <Text className="text-[35px] font-bold">Choose Group</Text>
      <View>
        <View className="flex-1 flex-row flex-wrap justify-between py-6">
          <TouchableOpacity
            style={{ backgroundColor: 'red', padding: 20 }}
            onPress={() => {
              // console.log('does not work')
              navigation.navigate(AddMember)
            }}
          >
            <View style={{ width: SIZE.pWidth, height: SIZE.pHeight }}>
              <View>
                <Image
                  source={require('../assets/images/avatar.png')}
                  style={{ width: '100%', height: 100 }}
                />
              </View>

              <Text className={'text-center mt-2 text-sm'}>MGM331_231</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default ChooseGroup
