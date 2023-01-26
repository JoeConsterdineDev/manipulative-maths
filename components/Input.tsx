import { TextInput, Button, StyleSheet, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';

const Input = () => {
	const {
		control, 
		handleSubmit,
	  } = useForm({mode: 'onBlur'})
	  
	  const onSubmit = (data: any) => console.log(data)

	return (
		<View style={inputStyles.container}>
			<Controller
				control={control}
				name="name"
				render={({field: {onChange, value, onBlur}}) => (
					<TextInput
						placeholder="Enter a number"
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
					/>
				)}
	 		/>
			<Button title='Submit' onPress={handleSubmit(onSubmit)}/>
		</View>
	)
}

const inputStyles = StyleSheet.create({
	container: {
		marginBottom: 16,
	}
});

export default Input;