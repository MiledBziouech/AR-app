import React from 'react';
import {StyleSheet, View, SafeAreaView, ImageBackground, Image, Text, Button, Pressable } from 'react-native';


const VerifiedPage = () => {
  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground source ={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/rectanglee.png')} style={styles.rectanglee}>
              <View style={styles.box}>
                <Image source={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/check.png')} style={styles.check}/>
                <Text style={styles.t1}>Success</Text>
                <Text style={styles.t2}>Congratulations, you have {"\n"} completed your registration!</Text>
                
                <Pressable
      style={styles.butt1}>
        <Text style={styles.Done}>Done</Text>
    </Pressable>
              </View>
            </ImageBackground>
    </SafeAreaView>          
  );            
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      width:'100%',
      flexDirection: 'column'
  },
  rectanglee:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    
  },
  box:{
    backgroundColor:'#35413F',
    width:291,
    height: 301,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },
  check:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64
  },
  t1:{
    width:67,
    height:24,
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },
  t2:{
    width:172,
    height:36,
    marginTop: 10,
    color:'#FFFFFF',
    textAlign: 'center'
  },
  butt1: {
    justifyContent: 'center',
    borderRadius: 50,
    width: 186,
    height: 45,
    marginTop: 10,
    backgroundColor:'#03DAA5',
    alignItems: 'center'
  },
  Done:{
    color:'#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 20,
  
  }
});

export default VerifiedPage;