import { TextInput, View, Text } from "react-native";
import { IncrementQuestionLength, IncrementScore, RandomNumber } from '../../types/TenFrame';
import { useForm, Controller } from 'react-hook-form';
import { useState, useRef } from "react";
import { inputStyles } from "./InputStyles";

const Input = ({ randomNumber, incrementScore, incrementQuestionLength }: {
	randomNumber: RandomNumber,
	incrementScore: IncrementScore,
	incrementQuestionLength: IncrementQuestionLength
}) => {
	const [notice, setNotice] = useState<string>('');
	const inputRef = useRef<TextInput>(null);

	const {
		control, 
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onSubmit'
	});

	// useEffect(() => {
	// 	reset();
	// }, [notice]);
	  
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

		// Re-focus input
		setTimeout(() => {
			if (inputRef.current){
				inputRef.current.focus()
			}
		}, 0)
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
					<>
						<Text 
							onPress={() => inputRef.current && inputRef.current.focus()}
							style={inputStyles.label}
						>
							Enter number
						</Text>
						<TextInput
							autoFocus
							value={value}
							onBlur={onBlur}
							onChangeText={value => onChange(value)}
							keyboardType='numeric'
							maxLength={2}
							style={inputStyles.input}
							selectionColor={'#000'}
							ref={inputRef}
							onSubmitEditing={handleSubmit(onSubmit)}
						/>
					</>
				)}
	 		/>
		</View>
	)
}

export default Input;