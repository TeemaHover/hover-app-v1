import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { Button, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from './components/CustomDrawer'
import { COLORS } from './constants/style'
import PlaceHome from './screens/PlaceHome'
import ChooseGroup from './screens/ChooseGroup'
import { Image } from 'react-native'
import AddMember from './screens/AddMember'

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Нүүр"
        screenOptions={{
          drawerActiveTintColor: COLORS.white,
          drawerInactiveTintColor: COLORS.white,
          drawerActiveBackgroundColor: '#192841',
          drawerLabelStyle: {
            marginLeft: -15,
            fontSize: 15,
          },

          headerShadowVisible: false,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name=" "
          options={{
            drawerTitle: 'Нүүр',

            headerStyle: {
              backgroundColor: 'transparent',
              // paddingTop: 40,
            },
            headerRight: () => (
              <Image
                source={require('./assets/images/avatar.png')}
                className="object-cover w-[50px] h-[50px] mr-[15px]"
              />
            ),

            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          component={PlaceHome}
        />
        <Drawer.Screen
          name="asd"
          component={AddMember}
          options={{
            title: 'AddMember',
            headerStyle: {
              backgroundColor: 'tranparent',
            },
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
