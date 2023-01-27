import { View, Text, Pressable } from 'react-native';
import { ResultsTypes } from './ResultsTypes';
import { buttonStyles } from '../../helpers/ButtonStyles';
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
					style={[
						buttonStyles.button,
						resultsStyles.button
					]}
				>
					<Text style={buttonStyles.buttonText}>Play again</Text>
				</Pressable>
				<Pressable 
					onPress={() => handleOnSubmit('home')}
					style={[
						buttonStyles.button,
						resultsStyles.buttonSecondary
					]}
				>
					<Text style={[
						buttonStyles.buttonText,
						resultsStyles.buttonSecondaryText
					]}>Home</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Results;