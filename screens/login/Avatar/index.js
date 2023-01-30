import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MainIcon from '../../../assets/cat.png'
import styles from './style';

const Avatar = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textNameShop}>Catcake Shop</Text>
            <Image style={styles.mainIcon}source={MainIcon}/>
        </View>
    )
}

export default Avatar;