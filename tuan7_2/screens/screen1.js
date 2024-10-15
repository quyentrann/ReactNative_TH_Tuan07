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
  const arr = [
    {
      id: 1,
      image: require('../assets/donut_yellow1.png'),
      name: 'Tasty',
      price: '$10.00',
    },
    {
      id: 2,
      image: require('../assets/tasty_donut1.png'),
      name: 'Pink',
      price: '$20.00',
    },
    {
      id: 3,
      image: require('../assets/green_donut1.png'),
      name: 'Floating',
      price: '$30.00',
    },
    {
      id: 4,
      image: require('../assets/donut_red1.png'),
      name: 'Tasty',
      price: '$30.00',
    },
  ];
  const [name, setName] = useState('');
  const [listFodd, setListFood] = useState(arr);
  useEffect(() => {
    const newName = arr.filter((value) =>
      value.name.toLowerCase().includes(name.toLowerCase())
    );
    setListFood(newName);
  }, [name]);

function checkDonut(nameDonut){
  if(nameDonut==="Donut")
  setListFood(arr);
  else{
  setListFood(arr.filter(value=> value.name ===nameDonut))
} 
}

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ flex: 0.5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 12, color: 'gray' }}>
          Welcome, Jala!
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Choice you Best food
        </Text>
      </View>
      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <TextInput
          placeholder="Search food"
          style={{
            color: 'gray',
            height: 30,
            width: 250,
            borderWidth: 1,
            borderColor: 'gray',
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{ flex: 4 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            flex: 0.5,
          }}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={()=> checkDonut("Donut")}>
            <Text style={{ fontWeight: 'bold' }}>Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={()=>checkDonut("Pink")}>
            <Text style={{ fontWeight: 'bold' }}>Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={()=> checkDonut("Floating")}>
            <Text style={{ fontWeight: 'bold' }}>Floating</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 12,
            justifyContent: 'center',
            paddingHorizontal: 10,
            flex: 4.5,
          }}>
          <FlatList
            data={listFodd}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#F4DDDD',
                    marginVertical: 10,
                    height: 90,
                    width: 320,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{ height: 70, width: 70, borderRadius: 12 }}
                  />
                  <View style={{ margin: 7, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name} Donut</Text>
                    <Text style={{ fontSize: 12, color: 'gray' }}>
                      Spicy tasty donut family
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
