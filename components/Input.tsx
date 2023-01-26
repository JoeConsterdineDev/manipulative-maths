import { TextInput, Pressable, StyleSheet, View, Text } from "react-native";
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
			<Text style={inputStyles.notice}>{notice}</Text>
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

const inputStyles = StyleSheet.create({
	container: {
		paddingBottom: 32,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	notice: {
		paddingBottom: 16,
	},
	input: {
		alignSelf: 'center',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#000',
		fontSize: 20,
		padding: 8,
		marginBottom: 16,
		height: 80,
		width: 80,
		textAlign: 'center',
	},
	button: {
		backgroundColor: '#000',
		borderRadius: 8,
		fontSize: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		width: 120,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 1,
		textTransform: 'uppercase',
		textAlign: 'center',
	}
});

export default Input;