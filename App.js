import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import VerifiedPage from './screens/VerifiedPage';
import LoginPage from './screens/LoginPage';
import OTPInput from './screens/OTPInput';
export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

