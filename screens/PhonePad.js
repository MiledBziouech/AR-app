import React, { useState } from 'react';
import { View, TouchableOpacity,Text,Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
const PhonePad = () => {
  const [input, setInput] = useState('');

  const handleKeyPress = (key) => {
    setInput(prevInput => prevInput + key);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between',alignItems:'center'}}>
      <View style = {{flexDirection:'row'}}>
        
                    
        <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>'

          {
            input
          }
        </Text>
        <Button
                            title="Continue"
                            color="#03DAA5"
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-between' ,width:'100%'}}>
        <TouchableOpacity onPress={() => handleKeyPress('1')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('2')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('3')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 ,justifyContent:'space-between' ,width:'100%'}}>
        <TouchableOpacity onPress={() => handleKeyPress('4')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('5')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('6')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 ,justifyContent:'space-between' ,width:'100%'}}>
        <TouchableOpacity onPress={() => handleKeyPress('7')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('8')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('9')}>
          <Text style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-between' ,width:'100%'}}>
          <Text></Text>
        <TouchableOpacity onPress={() => handleKeyPress('0')}>
          <Text  style={{color: '#FFFFFF' , fontSize: 24, fontWeight: 'bold'}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity  style = {{marginLeft:-25}} onPress={() => setInput(prevInput => prevInput.slice(0, -1))}><Feather name="delete" size={24} color="white"/></TouchableOpacity>
      </View>
    </View>
  );
};

export default PhonePad;