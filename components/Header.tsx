import { View, StyleSheet, Text } from 'react-native';
import Logo from '../assets/logo.svg';

const Header = () => {
	return (
		<View style={headerStyles.container}>
			<Logo />
			<Text style={headerStyles.title}>Manipulative Maths</Text>
		</View>
	)
}

const headerStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderBottomColor: '#f5f5f5',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 8,
	},
	title: {
		color: '#002e63',
		fontSize: 30,
		fontWeight: 'bold'
	}
 });

export default Header;