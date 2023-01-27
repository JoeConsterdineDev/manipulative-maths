import { Pressable, View, Text } from "react-native";
import { splashStyles } from "./SplashStyles";

const Splash = ({ updateGameStatus }: {
	updateGameStatus: (status: boolean) => void
}) => {
	const handleOnSubmit = () => {
		updateGameStatus(true);
	}
	return (
		<View style={splashStyles.container}>
			<Text style={splashStyles.title}>Manipulative <Text style={splashStyles.subTitle}>Maths</Text></Text>
			<Pressable 
				onPress={handleOnSubmit}
				style={splashStyles.button}
			>
				<Text style={splashStyles.buttonText}>Play</Text>
			</Pressable>
		</View>
	)
}

export default Splash;