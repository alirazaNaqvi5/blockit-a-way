import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { ip } from '../ip'

// import axios from 'axios'

const RegisterParcel = ({ navigation })=> {
    const [info, setInfo] = useState({
        name: '',
        email:'',
        phone: '',
        address: '',
        city: '',
        receiver: '',
        receiver_phone: '',
        receiver_address: '',
        receiver_city: '',
        weight: '',
        price:'',
        status:'in transit',
        registered_by:'employee id'
    })


    const submitData = () => {

        
        fetch(`http://${ip}:3001/postData?name=${info.name}&email=${info.email}&phone=${info.phone}&address=${info.address}&city=${info.city}&receiver=${info.receiver}&receiver_phone=${info.receiver_phone}&receiver_address=${info.receiver_address}&receiver_city=${info.receiver_city}&weight=${info.weight}&price=${info.price}&status=${info.status}&registered_by=${info.registered_by}`, {
            method: 'POST',
          
        }).then(res => {
            console.log("resssssss", res.data)
            // console.log(res.data)
            alert("Data Added success fully")
        }).catch(err => {
            console.log(err)
            alert(err)
        }
        )
        // console.log(info)
    }

    return (
      <ScrollView style={{ flex: 1, width:'100%', marginTop:40 }}>
        <Text style={{ fontSize: 30, alignSelf:'center' }}>Enter Parcel Details</Text>
        {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}

        {/* create an form to input parcel info */}
        <View style={{width:'90%', borderWidth:2, borderRadius:30, paddingHorizontal:20, paddingVertical:25, backgroundColor:'#d6b047', borderColor:'#d6b046', alignSelf:'center'}}>

        <TextInput placeholder='name'
        onChangeText={(text) => setInfo({...info, name: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='email' 
        onChangeText={(text) => setInfo({...info, email: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Phone' 
        onChangeText={(text) => setInfo({...info, phone: text})}
        keyboardType='numeric' style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Address' 
        onChangeText={(text) => setInfo({...info, address: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='city' 
        onChangeText={(text) => setInfo({...info, city: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Receiver Name' 
        onChangeText={(text) => setInfo({...info, receiver: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Receiver Phone' 
        onChangeText={(text) => setInfo({...info, receiver_phone: text})}
        keyboardType='numeric' style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Receiver Address' 
        onChangeText={(text) => setInfo({...info, receiver_address: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Receiver City' 
        onChangeText={(text) => setInfo({...info, receiver_city: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

        <TextInput placeholder='Parcel Weight' 
        onChangeText={(text) => setInfo({...info, weight: text})}
        style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />
        <TextInput placeholder='Price' 
        onChangeText={(text) => {setInfo({...info, price: text}), console.log(info)}}
            style={{paddingHorizontal:25, paddingVertical:10, borderColor:'black', borderWidth:2, fontSize:20, borderRadius:25, marginVertical:3}} />

       
        

        <Button title='Register' onPress={submitData} />
        </View>

{/* 
         <Button
          onPress={() => navigation.navigate('home')}
          title="Add Parcel"
        /> */}
      </ScrollView>
    );
  }

export default RegisterParcel



