import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Header = () => {
	const [fontsLoaded] = useFonts({
    	'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
  	});

	if(!fontsLoaded) {
		return null;
	}

	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.title}>Manipulative <Text style={headerStyles.subTitle}>Maths</Text></Text>
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
		paddingBottom: 8,
		paddingTop: 8
	},
	title: {
		color: '#002e63',
		fontFamily: 'Urbanist-Bold',
		fontSize: 30,
	},
	subTitle: {
		color: '#f48668'
	}
 });

export default Header;