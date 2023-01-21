import React from 'react'
import { View } from 'react-native'
import { styles } from '../constants/style'

const Layout = ({ children }) => {
  return <View className={`${styles.section}`}>{children}</View>
}

export default Layout
