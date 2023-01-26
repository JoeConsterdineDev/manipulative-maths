import { View, Text, StyleSheet } from 'react-native';

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

const scoreStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 12,
		width: '100%'
	},
	title: {
		fontSize: 18,
		fontFamily: 'Urbanist-Bold',
		paddingRight: 6
	},
	scoreContainer: {
		backgroundColor: '#f48668',
		borderRadius: 44/2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 44,
		width: 44,
	},
	score: {
		fontFamily: 'Urbanist-Bold',
		fontSize: 20,
	}
});
  

export default Score;