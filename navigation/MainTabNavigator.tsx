import * as React from 'react';

import { ChatParamList, MainTabParamList, TabOneParamList } from '../types';

import ChatScreen from '../screens/ChatScreen';
// import ChatsScreen from '../screens/ChatsScreen';
import Colors from '../constants/Colors';
import { Fontisto } from "@expo/vector-icons";
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
        activeTintColor: Colors.nice_green.color,
        style: {
          backgroundColor: Colors.nice_dark.color,
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
        component={ChatScreen}
      />
      <MainTab.Screen
        name="WeebFriends"
        component={ChatNavigator}
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
        component={ChatScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const ChatStack = createStackNavigator<ChatParamList>();

function ChatNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ChatStack.Navigator>
  );
}

