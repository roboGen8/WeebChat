import { Text, View, Image } from 'react-native';

import { ChatRoom } from '../../types';
import React from 'react';
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[1];
    console.log(user);
    return (
        <View>
            <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
            {/* <Text>{chatRoom.lastMessage.content}</Text> */}
        </View>
    )

};

export default ChatListItem;