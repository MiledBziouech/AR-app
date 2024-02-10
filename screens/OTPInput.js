import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const OTPInput = () => {
  return (
    <View style={styles.inputContainer}>
      {[...Array(4)].map((_, index) => (
        <View key={index} style={styles.inputWrapper}>
          <Image source={require('/home/lagrinch/Augmented-Reality-Mobile-Application/assets/bg.png')} style={styles.inputBackgroundImage} />
          <TextInput
            style={styles.input}
            placeholder="Enter text..."
            placeholderTextColor="#A9A9A9"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  inputWrapper: {
    position: 'relative',
    width: 50,
    height: 58,
    borderWidth: 5,
    borderColor: 'black',
  },
  inputBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 10,
  },
});

export default OTPInput;