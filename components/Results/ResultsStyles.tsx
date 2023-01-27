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
		backgroundColor: '#000',
		borderRadius: 8,
		fontSize: 20,
		display: 'flex',
		fontFamily: 'Urbanist-Bold',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
		height: 48,
		width: 120,
	},
	buttonSecondary: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
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
	buttonSecondaryText: {
		color: '#000',
	},
	highlight: {
		color: '#f48668',
	}
});