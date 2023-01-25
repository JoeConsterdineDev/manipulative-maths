import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002e63',
    paddingTop: 32
  },
});
