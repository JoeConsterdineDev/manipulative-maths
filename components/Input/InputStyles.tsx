import { StyleSheet } from 'react-native';

export const inputStyles = StyleSheet.create({
	container: {
		paddingBottom: 32,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	notice: {
		fontFamily: 'Urbanist-Regular',
		paddingBottom: 16,
	},
	input: {
		alignSelf: 'center',
		backgroundColor: '#fff',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#000',
		fontSize: 20,
		padding: 8,
		marginBottom: 16,
		height: 80,
		width: 80,
		textAlign: 'center',
	},
	label: {
		fontFamily: 'Urbanist-Regular',
		paddingBottom: 4,
	},
});