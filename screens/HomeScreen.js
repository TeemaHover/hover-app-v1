import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles, COLORS } from '../constants/style'
import Layout from '../layout'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

const nickname = 'Esa'

const Box = ({ className, children, style }) => {
  return (
    <View
      className={`
        ${className}   
        ${styles.flexBetween}
        py-5 
        rounded-2xl
      `}
      style={style}
    >
      {children}
    </View>
  )
}
const stylesa = StyleSheet.create({
  aaa: {
    fontFamily: 'Lexend',
  },
})
const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Lexend: require('../assets/fonts/Lexend.ttf'),
  })
  return (
    <Layout>
      <Text className="text-[35px] font-bold mb-[20px]">Hello {nickname}</Text>
      <View className="w-full">
        <View className="flex flex-row w-full">
          <View className="flex flex-column basis-1/3 ">
            <Box
              className="h-[145px] mb-[15px]"
              style={{ backgroundColor: COLORS.waterBlue }}
            >
              <Text style={stylesa.aaa}>Upcoming</Text>
              <Text>50</Text>
              <Text>New chats</Text>
            </Box>
            <Box
              className="h-[145px]"
              style={{ backgroundColor: COLORS.orange, color: COLORS.white }}
            >
              <Text>Semester off</Text>
              <Text>asd</Text>
              <Text>Completed</Text>
            </Box>
          </View>
          <Box
            className="basis-2/3 ml-[15px]"
            style={{
              backgroundColor: COLORS.blue,
              color: COLORS.white,
            }}
          >
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </View>
      </View>
    </Layout>
  )
}

export default HomeScreen
