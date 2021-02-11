import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onSendPress = () => {
        // console.log("send");
        setMessage('');
    }

    const onSmilePress = () => {
        // console.log("smile");
    }

    const onPress = () => {
        if (!message) {
            onSmilePress();
        } else {
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                {/* <FontAwesome name="laugh-bream" size={24} color="grey" /> */}
                <TextInput 
                placeholder={"Type a message"}
                style={styles.textInput} 
                multiline
                value={message}
                onChangeText={setMessage}

                />

            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message
                ? <AntDesign name="smileo" size={24} color="black" />
                    : <Feather name="send" size={24} color="black" />   
            }
                
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;