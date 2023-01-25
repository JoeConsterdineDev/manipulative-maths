import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Image
        style={{
          height: 50,
          width: 50
        }}
        source={require('./assets/logo.svg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(to right, #ffa751, #ffe259)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
