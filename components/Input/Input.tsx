import { TextInput, Pressable, View, Text } from "react-native";
import { IncrementQuestionLength, IncrementScore, RandomNumber } from '../../types/TenFrame';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useRef, useState } from "react";
import { inputStyles } from "./InputStyles";

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
	  } = useForm({
		mode: 'onBlur'
	});
	  
	const onSubmit = (data: any) => {
		const answer = parseInt(data?.value?.replace(/\D/g, ""));

		// Check if answer is a valid number
		const isNotValid = isNaN(answer);

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
			{notice &&
				<Text style={inputStyles.notice}>{notice}</Text>
			}
			<Controller
				control={control}
				name="value"
				render={({field: {onChange, value, onBlur}}) => (
					<TextInput
						autoFocus
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						keyboardType='numeric'
						maxLength={2}
						ref={inputRef}
						style={inputStyles.input}
						selectionColor={'#000'}
						onSubmitEditing={handleSubmit(onSubmit)}
					/>
				)}
	 		/>
			<Pressable
				onPress={handleSubmit(onSubmit)}
				style={inputStyles.button}
			>
				<Text style={inputStyles.buttonText}>Submit</Text>
			</Pressable>
		</View>
	)
}

export default Input;