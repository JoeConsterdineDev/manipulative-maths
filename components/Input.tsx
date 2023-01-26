import { TextInput, Button, StyleSheet, View, Text } from "react-native";
import { IncrementQuestionLength, IncrementScore, RandomNumber } from '../types/TenFrame';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useRef, useState } from "react";

const Input = ({ randomNumber, incrementScore, incrementQuestionLength }: {
	randomNumber: RandomNumber,
	incrementScore: IncrementScore,
	incrementQuestionLength: IncrementQuestionLength
}) => {
	const [notice, setNotice] = useState<string>('');
	const inputRef = useRef<TextInput>(null);

	useEffect(() => {
		reset();
	}, [notice])

	const {
		control, 
		handleSubmit,
		reset
	  } = useForm({mode: 'onBlur'})
	  
	  const onSubmit = (data: any) => {
		const answer = parseInt(data?.value?.replace(/\D/g, ""));

		// Check if answer is a valid number
		const isNotValid = isNaN(answer);

		console.log({ answer })

		if(isNotValid || data.value === '') {
			setNotice('Value must be a number. Please try again.');
			return;
		} else {
			setNotice('');
		}

		// Increment question length per answer
		incrementQuestionLength();

		// If user answer is equal to random number increment score by 1
		if(answer === randomNumber) {
			incrementScore();
		}

		// Reset input value
		reset({
			value: ''
		});
	  }

	return (
		<View style={inputStyles.container}>
			<Text style={inputStyles.notice}>{notice}</Text>
			<Controller
				control={control}
				name="value"
				render={({field: {onChange, value, onBlur}}) => (
					<TextInput
						placeholder="Enter a number"
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						keyboardType='numeric'
						maxLength={10}
						ref={inputRef}
					/>
				)}
	 		/>
			<Button 
				title='Submit' 
				onPress={handleSubmit(onSubmit)}
			/>
		</View>
	)
}

const inputStyles = StyleSheet.create({
	container: {
		paddingBottom: 16,
	},
	notice: {
		paddingBottom: 16,
	}
});

export default Input;