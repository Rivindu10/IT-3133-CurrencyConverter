import React, { useState } from 'react';
import { View, Text, Alert,StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
 const [lkrAmount, setLkrAmount]=useState('');
 const [usdAmount, setUsdAmount]=useState(null);

 const convertRate=0.003;

 const converSion = ()=>{
  const amount = parseFloat(lkrAmount);
  if (isNaN(amount) || amount<=0){
    Alert.alert('Invalid Input','Please enter a valid amount in LKR');
    return;
  }
  const convertedAmount =(amount * convertRate).toFixed(2);
  setUsdAmount(convertedAmount);
 }

  return (
    <View>
      <Text>LKR to USD Converter</Text>
      <TextInput

      placeholder='Enter amount in LKR'
      keyboardType='numeric'
      value={lkrAmount}
      onChangeText={setLkrAmount}
      
      />

      <Button title="Convert" onPress={converSion}/>
      {usdAmount && (
        <Text style={styles.result}>USD: ${usdAmount}</Text>
      )}

    </View>
  );
}