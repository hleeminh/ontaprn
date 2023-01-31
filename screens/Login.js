import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {icons, images, colors} from '../const';
import { UIButton } from '../components';
import { AntDesign } from '@expo/vector-icons';

const Login = (props) => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: colors.primaryColor1
            }}>
                <Text style={{
                    flex: 1,
                    fontSize: 28,
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>Already have an Account ?</Text>
                <Image 
                    source={icons.iconRn}
                    style={{
                        // tintColor: 'white',
                        flex: 1,
                        height: 170,
                        width: 170,
                    }}
                />
            </View>
            <View style={{
                flex: 2,
                backgroundColor: 'red'
            }}></View>
        </View>
    )    
}

export default Login