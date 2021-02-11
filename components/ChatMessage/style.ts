import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles= StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#3A3B3C',
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.nice_green.color,
        fontWeight: "bold",
        marginBottom: 5,
    },
    message: {

    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
    },
})

export default styles;