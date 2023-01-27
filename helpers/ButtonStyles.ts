import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
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
		fontFamily: 'Urbanist-Bold',
		fontWeight: 'bold',
		letterSpacing: 1,
		textTransform: 'uppercase',
		textAlign: 'center',
	}
});