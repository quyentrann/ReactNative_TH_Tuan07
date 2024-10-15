import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/tasty_donut1.png')} style={{height:180, width:180}}/>
      </View>
      <View style={{flex:1.5}}>
      <Text>Pink Donut</Text>
      </View>
    </View>
  );
}
