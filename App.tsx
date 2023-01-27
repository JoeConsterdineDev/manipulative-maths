import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Score from './components/Score/Score';
import { appStyles } from './AppStyles';

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
    <SafeAreaView style={appStyles.container}>
      <Header />
      <Score
        score={currentScore}
      />
      <View style={appStyles.body}>
        <Quiz
          getCurrentScore={getCurrentScore}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
