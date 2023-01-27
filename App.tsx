import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Score from './components/Score/Score';
import { appStyles } from './AppStyles';
import Splash from './components/Splash/Splash';

export default function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const updateStatus = (status: string) => {
    setStatus(status);
  }

  const updateGameStatus = (status: boolean) => {
    setGameStatus(status);
  }

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
    <SafeAreaView style={[
      appStyles.container,
      !gameStatus ? appStyles.containerSplash : null
    ]}>
      {gameStatus ? (
        <>
          <Header />
          <Score
            score={currentScore}
          />
          <View style={appStyles.body}>
            <Quiz
              getCurrentScore={getCurrentScore}
              updateGameStatus={updateGameStatus}
              updateStatus={updateStatus}
              status={status}
            />
            <StatusBar style="auto" />
          </View>
        </>
      ) : (
        <Splash
          updateGameStatus={updateGameStatus}
        />
      )}
    </SafeAreaView>
  );
}
