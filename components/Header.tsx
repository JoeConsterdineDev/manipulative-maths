import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.title}>Manipulative <Text style={headerStyles.subTitle}>Maths</Text></Text>
		</View>
	)
}

const headerStyles = StyleSheet.create({
	container: {
		backgroundColor: '#15e8c5',
		borderBottomWidth: 1,
		borderBottomColor: '#11ba9e',
		paddingBottom: 8,
		paddingTop: 8,
		width: '100%',
	},
	title: {
		color: '#002e63',
		fontFamily: 'Urbanist-Bold',
		fontSize: 30,
		textAlign: 'center',
	},
	subTitle: {
		color: '#f48668'
	}
 });

export default Header;