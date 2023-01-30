import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import firebase from './firebase/firebase';
import Welcome from './screens/Welcome';
import Test from './screens/Test';

export default function App() {
  return (
    <View style={{
      flex:1,
    }}>
      <Welcome/>
    </View>
  );
}



