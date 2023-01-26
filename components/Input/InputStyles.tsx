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
	button: {
		backgroundColor: '#000',
		borderRadius: 8,
		fontSize: 20,
		display: 'flex',
		fontFamily: 'Urbanist-Bold',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		width: 120,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 1,
		textTransform: 'uppercase',
		textAlign: 'center',
	}
});