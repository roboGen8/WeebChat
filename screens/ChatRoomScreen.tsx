import { Text, View } from 'react-native';

import ChatMessage from '../components/ChatMessage';
import { FlatList } from 'react-native-gesture-handler';
import InputBox from '../components/InputBox';
import React from 'react';
import { StyleSheet } from 'react-native';
import chatRoomData from '../data/Chats';
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {
    const route = useRoute();

    // console.log(route.params)
    return (
        <View>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                // inverted
            ></FlatList>
            <InputBox />
        </View>
        
    )
}

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: 'grey',
//     },
//   });

export default ChatRoomScreen;