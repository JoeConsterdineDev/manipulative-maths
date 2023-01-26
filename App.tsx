import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Score from './components/Score';

export default function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
  });

  if(!fontsLoaded) {
    return null;
  }

  const getCurrentScore = (score: number) => {
    setCurrentScore(score);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Score
        score={currentScore}
      />
      <View style={styles.body}>
        <Quiz
          getCurrentScore={getCurrentScore}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  body: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    justifyContent: 'center'
  }
});
