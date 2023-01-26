import * as Font from 'expo-font';

export const useFonts = async () =>
  await Font.loadAsync({
    regular: require('../assets/fonts/Urbanist-Regular.ttf'),
    bold: require('../assets/fonts/Urbanist-Bold.ttf'),
});