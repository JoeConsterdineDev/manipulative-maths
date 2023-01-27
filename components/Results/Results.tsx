import { View, Text, Pressable } from 'react-native';
import { ResultsTypes } from './ResultsTypes';
import { resultsStyles } from './ResultsStyles';

const Results = ({ 
	resetQuiz, 
	score, 
	questionsLength, 
	updateGameStatus 
	}: ResultsTypes) => {

	const handleOnSubmit = (state: string) => {
		// If play again or home reset quiz state
		if(state === 'play' || state === 'home') {
			resetQuiz();
		}

		// If home return to splash screen
		if(state === 'home') {
			updateGameStatus(false);
		}
	}

	return (
		<View style={resultsStyles.container}>
			<Text style={resultsStyles.notice}>You scored <Text style={resultsStyles.highlight}>{score}</Text> out of <Text style={resultsStyles.highlight}>{questionsLength}</Text></Text>
			<View style={resultsStyles.options}>
				<Pressable 
					onPress={() => handleOnSubmit('play')}
					style={resultsStyles.button}
				>
					<Text style={resultsStyles.buttonText}>Play again</Text>
				</Pressable>
				<Pressable 
					onPress={() => handleOnSubmit('home')}
					style={[
						resultsStyles.button,
						resultsStyles.buttonSecondary
					]}
				>
					<Text style={[
						resultsStyles.buttonText,
						resultsStyles.buttonSecondaryText
					]}>Home</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Results;