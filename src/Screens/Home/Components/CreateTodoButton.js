import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Colors from '../../../Helpers/colors'

const CreateTodoButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <Text style={style.textStyle}>Create Todo</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: Colors.ebony
    },
    textStyle: {
        color: Colors.coolBlue,
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default CreateTodoButton;