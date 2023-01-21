import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../constants/style'

const Layout = ({ children }) => {
  return <ScrollView className={`${styles.section}`}>{children}</ScrollView>
}

export default Layout
