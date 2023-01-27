import { View, Text, Pressable } from 'react-native';
import { ResetQuiz } from '../../types/TenFrame';
import { resultsStyles } from './ResultsStyles';

const Results = ({ resetQuiz, score, questionsLength }: {
	resetQuiz: ResetQuiz,
	score: number
	questionsLength: number
}) => {
	const handleOnSubmit = () => {
		resetQuiz();
	}

	return (
		<View style={resultsStyles.container}>
			<Text style={resultsStyles.notice}>You scored {score} out of {questionsLength}</Text>
			<Pressable 
				onPress={handleOnSubmit}
				style={resultsStyles.button}
			>
				<Text style={resultsStyles.buttonText}>Play again</Text>
			</Pressable>
		</View>
	)
}

export default Results;