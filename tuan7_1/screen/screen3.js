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
  return (
    <View style={{ flex: 1 }}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{fontSize:28, fontWeight:'bold', textAlign:'center'}}>ADD YOUR JOB</Text>
      </View>
      <View style={{flex:0.5, alignItems:'center'}}>
      <TextInput placeholder="input your job" style={{height: 50, width:290, borderWidth:1}}/>
      </View>
      <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={{height:50, width:140, backgroundColor:'blue', justifyContent:'center', alignItems:'center', borderRadius:12}}><Text style={{color:'white'}}>FINISH</Text></TouchableOpacity>
      </View>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
      <Image source={require('../assets/Image95.png')} style={{height:180, width:180}}/>
      </View>
    </View>
  );
}
