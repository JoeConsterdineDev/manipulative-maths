import { StyleSheet } from 'react-native';

export const tenFrameStyles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderTopColor: '#777',
		borderTopWidth: 2,
		borderLeftColor: '#777',
		borderLeftWidth: 2,
	},
	frame: {
		alignItems: 'center',
		display: 'flex',
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: '20%',
		justifyContent: 'center',
		borderBottomColor: '#777',
		borderBottomWidth: 2,
		borderRightColor: '#777',
		borderRightWidth: 2,
		padding: 4,
		minHeight: 56,
	}
});