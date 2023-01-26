import { Text, Button } from 'react-native';
import { ResetQuiz } from '../../types/TenFrame';
// import { resultsStyles } from './ResultsStyles';

const Results = ({ resetQuiz }: {
	resetQuiz: ResetQuiz
}) => {
	const handleOnSubmit = () => {
		resetQuiz();
	}

	return (
		<>
			<Text>You finished the quiz!!</Text>
			<Button 
				title='Play again' 
				onPress={handleOnSubmit}
			/>
		</>
	)
}

export default Results;