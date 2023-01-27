import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({
	container: {
		backgroundColor: '#15e8c5',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
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
		fontFamily: 'Urbanist-Bold',
		fontWeight: 'bold',
		letterSpacing: 1,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
	title: {
		color: '#002e63',
		fontFamily: 'Urbanist-Bold',
		fontSize: 30,
		textAlign: 'center',
		paddingBottom: 16
	},
	subTitle: {
		color: '#f48668'
	}
});