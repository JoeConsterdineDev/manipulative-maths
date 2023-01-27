import { View, Text } from 'react-native';
import { headerStyles } from './HeaderStyles';

const Header = () => {
	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.title}>Manipulative <Text style={headerStyles.subTitle}>Maths</Text></Text>
		</View>
	)
}

export default Header;