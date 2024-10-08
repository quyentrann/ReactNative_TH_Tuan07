import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App({ navigation, route }) {
  const user = route.params?.user;
  const [name, setName] = useState('');
  const [newName, setNewName] = useState(user.notes);
  useEffect(() => {
    const arr = user.notes.filter((value) =>
      value.toLowerCase().includes(name.toLowerCase())
    );
    setNewName(arr);
  }, [name]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Seach"
          style={{ height: 50, width: 290, borderWidth: 1 }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{ flex: 4 }}>
        <FlatList
          data={newName}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 60,
                  width: 320,
                  backgroundColor: '#DEE1E62B',
                  borderRadius: 40,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                }}>
                <Image
                  source={require('../assets/Check.png')}
                  style={{ marginHorizontal: 20 }}
                />
                <Text>{item}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddNote');
                  }}>
                  <Image
                    source={require('../assets/Edit.png')}
                    style={{ marginLeft: 160 }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={{ flex: 2, justifyContent:'center', alignItems:'center'}}>
        <View style={{height:80, width:80, backgroundColor:'blue', justifyContent:'center', alignItems:'center', borderRadius:50}}>
          <Text style={{ fontSize: 30 , color:'white', fontWeight:'bold', textAlign:'center'}}>+</Text>
        </View>
      </View>
    </View>
  );
}
