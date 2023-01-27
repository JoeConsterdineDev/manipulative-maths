import { Pressable, View, Text } from "react-native";
import { splashStyles } from "./SplashStyles";
import { buttonStyles } from '../../helpers/ButtonStyles';
import { SplashTypes } from "./SplashTypes";

const Splash = ({ updateGameStatus }: SplashTypes) => {
	const handleOnSubmit = () => {
		updateGameStatus(true);
	}
	return (
		<View style={splashStyles.container}>
			<Text style={splashStyles.title}>Manipulative <Text style={splashStyles.subTitle}>Maths</Text>
			</Text>
			<Pressable 
				onPress={handleOnSubmit}
				style={buttonStyles.button}
			>
				<Text style={buttonStyles.buttonText}>Play</Text>
			</Pressable>
		</View>
	)
}

export default Splash;