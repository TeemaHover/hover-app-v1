import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../constants/style'
import Layout from '../layout'
import { SIZE } from '../constants/style'

const ChooseGroup = () => {
  return (
    <Layout>
      <Text className="text-[35px] font-bold">Choose Group</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex-row flex-wrap justify-between py-6">
          <View style={{ width: SIZE.pWidth, height: SIZE.pHeight }}>
            <View>
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: '100%', height: 100 }}
              />
            </View>
            <Text className={'text-center mt-2 text-sm'}>MGM331_231</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default ChooseGroup
