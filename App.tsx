import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Quiz from './components/Quiz';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Quiz />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 32
  },
  body: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
