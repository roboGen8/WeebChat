import * as React from 'react';

import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

// import ChatsScreen from '../screens/ChatsScreen';
import Colors from '../constants/Colors';
import { Fontisto } from "@expo/vector-icons";
import TabTwoScreen from '../screens/TabTwoScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Messages"
      tabBarOptions={{
        activeTintColor: Colors.nice_green.background,
        style: {
          backgroundColor: Colors.nice_dark.background,
        },
        
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        // showIcon: true,
      }}>
      <MainTab.Screen
        name="FindWeebs"
        component={TabOneNavigator}
      />
      <MainTab.Screen
        name="Messages"
        component={TabTwoNavigator}
      />
      <MainTab.Screen
        name="WeebFriends"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

