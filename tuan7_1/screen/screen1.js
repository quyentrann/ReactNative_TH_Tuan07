import {useState, useEffect} from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App({navigation}) {
  const arr = [
    {
      id: 1,
      email: 'tran@gmail.com',
      notes: [
        'To check email',
        'UI task web page',
        'Learn javascript basic',
        'Learn HTML Advance',
        'Medical App UI',
        'Learn Java',
      ],
    },
  ];

const [mail, setMail]= useState('');
const handPress=()=>{
 const user=  arr.find(value=> value.email === mail);
//  console.log({user})
   if(user){
    navigation.navigate('Home', {user}); 
  } else {
    console.log('User not found');
  }
}
  // useEffect(()=>{
  // const user=  arr.find(value=> value.email === mail);
  // if(user){
  //   navigation.navigate('Home', {user})
  // }
  // }, [mail])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/Image95.png')} style={{}} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#8353E2',
            textAlign: 'center',
          }}>
          MANAGE YOUR {'\n'} TASK
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Enter your name"
            style={{
              height: 60,
              width: 350,
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 50,
              borderRadius: 14,
              fontSize: 16,
              color: 'gray',
            }} value={mail} onChangeText={(text)=>setMail(text)}
          />
          <Image
            source={require('../assets/mail.png')}
            style={{
              height: 30,
              width: 30,
              position: 'absolute',
              marginLeft: 10,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 200,
            backgroundColor: '#00BDD6',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
          }} onPress={()=> handPress()}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
