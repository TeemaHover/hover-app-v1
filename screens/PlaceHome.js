import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Button, View } from 'react-native'
import HomeScreen from './HomeScreen'
import Feedback from './FeedbackScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constants/style'

const Tab = createBottomTabNavigator()

function Chats({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

const PlaceHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: COLORS.darkBlue,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'row',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: COLORS.darkBlue,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 1,
          elevation: 24,
        },

        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
          } else if (route.name === 'Feedback') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },

        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: '#91BACC',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        tabBarIcon={<Ionicons name="outline-home" />}
      />
      {/* <Tab.Screen name="Chats" component={GroupScreen} /> */}
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Feedback" component={Feedback} />
    </Tab.Navigator>
  )
}

export default PlaceHome
