import { Text, Button } from 'react-native';
import { ResetQuiz } from '../types/TenFrame'

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