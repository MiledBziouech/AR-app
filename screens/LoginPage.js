import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView,ImageBackground, handlePress, TouchableOpacity } from 'react-native';
import PhonePad from './PhonePad';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
   // const navigation = useNavigation(); // Moved inside the component

    //const handlePress = () => {
       // navigation.goBack(); // Go back to the previous screen
   // };

    const phone_number = 15; // Moved inside the component's scope

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/rectanglee.png')} style={styles.rectanglee}>
                <View style={styles.container}>
                    <View style={styles.topHalf}>
                        <TouchableOpacity onPress={handlePress}>
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.text1}>Code is sent to {phone_number}</Text>
                            
                            </View>    
                    </View>
                    <View style={styles.bottomHalf}>
                        <PhonePad style={styles.pad} />
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
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column'
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
});

export default LoginPage;