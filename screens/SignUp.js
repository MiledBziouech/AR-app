import React from 'react';
import { View, Image, StyleSheet, Text, Button, SafeAreaView, ImageBackground } from 'react-native';
import PhonePad from './PhonePad';
const SignUp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source ={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/rectanglee.png')} style={styles.rectanglee}>
            <View style={styles.container}>
                <View style={styles.topHalf}>
                    <Image source={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/eye.png')} style={styles.eye} />
                    <Image source={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/icon_phone.png')} style={styles.icon_phone} />
                    <Text style={styles.text1}>Continue with Phone</Text>
                </View>
                < View style={styles.bottomHalf}>
                    
                    <PhonePad style={styles.pad}/>
                    <Text style={styles.termsText}>Terms & Conditions Apply*</Text>
                </View>
                
            </View>
            </ImageBackground>
            </SafeAreaView>
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    topHalf: {
        flex: 1, 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
    },
    bottomHalf: {
        backgroundColor: '#252525', // Background color for the bottom half
        flex: 1.5, // Take up half of the screen vertically
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    eye: {
        width: 45,
        height: 41,
        marginTop: 58,
        marginLeft: 20,
        alignSelf:'flex-start'
    },
    icon_phone: {
        width: 134,
        height: 131,
        marginBottom: 10,
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15
    },
    input: {
        width: 313,
        height: 40,
        backgroundColor: '#35413F',
        borderRadius: 40,
        marginTop:3,
        marginBottom: 0,
        
        
    },
    termsText: {
        color: '#12211F',
    },
    rectanglee:{
        flex: 1, // Take up half of the screen vertically
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:'50%'
    }
});

export default SignUp;