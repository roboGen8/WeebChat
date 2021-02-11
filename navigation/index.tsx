import * as React from 'react';

import { ColorSchemeName, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import ChatRoomScreen from '../screens/ChatRoomScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.nice_green.color,
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontWeight: "bold"
      }

    }}>
      <Stack.Screen
       name="Root"
       component={MainTabNavigator}
       options={{
         title: "WeebChat",
         headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
             <Octicons name="search" size={22} color={Colors.nice_green.color} />
             <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.nice_green.color} />
           </View>
          )
        }}
       />
       <Stack.Screen 
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
               <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.nice_green.color} />
             </View>
            )
        })}
       />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
