import { StyleSheet } from 'react-native';

export const resultsStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	notice: {
		fontSize: 18,
		fontFamily: 'Urbanist-Bold',
		paddingBottom: 16
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
	},
	button: {
		marginRight: 12,
	},
	buttonSecondary: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
	},
	buttonSecondaryText: {
		color: '#000',
	},
	highlight: {
		color: '#f48668',
	}
});