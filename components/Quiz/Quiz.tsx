import { useEffect, useState } from "react";
import { View } from 'react-native';
import Input from '../Input/Input';
import TenFrame from '../TenFrame/TenFrame';
import { Text } from 'react-native';
import Results from "../Results/Results";
import Tick from "../../assets/tick.svg";
import Cross from "../../assets/cross.svg";
import { quizStyles } from "./QuizStyles";
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import { QuizTypes } from "./QuizTypes";

const Quiz = ({ 
	getCurrentScore, 
	updateStatus, 
	status, 
	updateGameStatus 
	}: QuizTypes) => {

	const [randomNumber, setRandomNumber] = useState<number | null>(null);
	const [score, setScore] = useState<number>(0);
  	const [questionsLength, setQuestionsLength] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	// Increment score
	const incrementScore = () => {
		setScore(score + 1);
	}

	// Increment question length
	const incrementQuestionLength = () => {
		setQuestionsLength(questionsLength + 1);
	}

	// Reset quiz
	const resetQuiz = () => {
		setQuestionsLength(0);
		setScore(0);
	}
	
	// Generate new random number per question
	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 10) + 1);
		setLoading(false);
	}, [questionsLength]);

	// Get current score
	useEffect(() => {
		getCurrentScore(score);
	}, [score]);
	return (
		<>
			{loading ? (
				<Text>Loading...</Text>
			): (
				<>
					{questionsLength === 10 ? (
						<Results
							questionsLength={questionsLength}
							updateGameStatus={updateGameStatus}
							resetQuiz={resetQuiz}
							score={score}
						/>
					): (
						<>
							{status === 'correct' && (
								<Tick 
									style={quizStyles.icon} 
								/>
							)}
							{status === 'incorrect' && (
								<Cross
									style={quizStyles.icon} 
								/>
							)}
							{!status && (
								<KeyboardAvoidingWrapper>
									<View style={quizStyles.container}>
										<Input
											randomNumber={randomNumber}
											incrementScore={incrementScore}
											incrementQuestionLength={incrementQuestionLength}
											updateStatus={updateStatus}
											status={status}
										/>
										<TenFrame
											randomNumber={randomNumber}
										/>
									</View>
								</KeyboardAvoidingWrapper>
							)}
						</>
					)}
				</>
			)}
		</>
	)
}

export default Quiz;