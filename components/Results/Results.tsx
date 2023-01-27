import { View, Text, Pressable } from 'react-native';
import { ResultsTypes } from './ResultsTypes';
import { buttonStyles } from '../../helpers/ButtonStyles';
import { resultsStyles } from './ResultsStyles';
import Star from "../../assets/star.svg";

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
			<View style={resultsStyles.notice}>
				<Text style={resultsStyles.text}>You scored </Text> 
				<Text style={[
					resultsStyles.text,
					resultsStyles.highlight
				]}>{score} </Text> 
				<Text style={resultsStyles.text}>out of </Text>
				<Text style={[
					resultsStyles.text,
					resultsStyles.highlight
				]}>{questionsLength}</Text>
				<Star style={resultsStyles.icon} />
			</View>
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