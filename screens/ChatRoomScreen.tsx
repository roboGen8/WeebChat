import React from 'react';
import { Text } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';

const ChatRoomScreen = () => {
    const route = useRoute();

    // console.log(route.params)
    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <ChatMessage message={item}/>}
            // inverted
        ></FlatList>
    )
}

export default ChatRoomScreen;