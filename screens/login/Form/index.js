import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import styles from './style';

const Form = (props) => {
    return (
        <View 
            behavior={Platform.OS === "android" ? "padding" : "height"}
            keyboardVerticalOffset = {0}
        >
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder='Email or Username'/>
                <TextInput style={styles.textInput} placeholder='Password'/>            
            </View>
            <View>
                <Text style={styles.textForget}>Forget password ?</Text>
            </View>
        </View>


    )
};

export default Form;