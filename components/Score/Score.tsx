import { View, Text } from 'react-native';
import { scoreStyles } from './ScoreStyles';

const Score = ({ score }: {
	score: number
}) => {
	return (
		<View style={scoreStyles.container}>
			<Text style={scoreStyles.title}>Score</Text>
			<View style={scoreStyles.scoreContainer}>
				<Text style={scoreStyles.score}>{score}</Text>
			</View>
		</View>
	)
}

export default Score;