import { View, Text, Pressable } from 'react-native';
import { ResetQuiz } from '../../types/TenFrame';
import { resultsStyles } from './ResultsStyles';

const Results = ({ resetQuiz, score, questionsLength, updateGameStatus }: {
	resetQuiz: ResetQuiz,
	score: number
	questionsLength: number,
	updateGameStatus: (status: boolean) => void
}) => {
	const handleOnSubmit = (state: string) => {
		if(state === 'play' || state === 'home') {
			resetQuiz();
		}

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