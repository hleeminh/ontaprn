import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import {icons, images} from '../const'
const Welcome = (props) => {
    return (
        <View style={{
            flex: 1,
            // flexDirection: 'column'
        }}>
            <ImageBackground
                source={images.backgroundImage}
                resizeMode='cover'
                style={{
                    flex: 1,
                }}
            >
                <View style={{
                    flex: 2,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 120,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.iconLogo}
                            style={{
                                height: 40,
                                width: 40,
                                marginLeft: 10
                            }}
                        />
                        <Text style={{
                            color: 'white',
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>
                            HLEEM1NH.INC
                        </Text>
                        <View style={{ flex: 1 }} />
                        <Image
                            source={icons.iconQuestion}
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#fff',
                                marginRight: 10
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 2,
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 20}}>Welcome to</Text>
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 20, fontWeight: 'bold'}}>HLEEM1NH.INC</Text>    
                    <Text style={{marginBottom: 7, color: 'white', fontSize: 16}}>Please select your account type</Text>    
                </View>
                <View style={{
                    flex: 4,
                    // backgroundColor: 'green'
                }}>
                    <TouchableOpacity style={{
                        borderColor: 'white',
                        borderWidth: 2,
                        height: 50,
                        borderRadius: 10,
                        marginHorizontal: 40,
                        marginVertical: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16
                        }}>Influencer</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: 'purple'
                }} />
            </ImageBackground>
        </View>
    )
};

export default Welcome;