import { useEffect, useState } from "react";
import Input from './Input';
import TenFrame from './TenFrame';
import { Text, StyleSheet } from 'react-native';
import Results from "./Results";

const Quiz = () => {
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
	
	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 10) + 1);
		setLoading(false);
	}, [questionsLength]);
	return (
		<>
			{loading ? (
				<Text>Loading...</Text>
			): (
				<>
					{questionsLength === 10 ? (
						<Results
							resetQuiz={resetQuiz}
						/>
					): (
						<>
							<Text style={quizStyles.score}>{score}</Text>
							<Input
								randomNumber={randomNumber}
								incrementScore={incrementScore}
								incrementQuestionLength={incrementQuestionLength}
							/>
							<TenFrame
								randomNumber={randomNumber}
							/>
						</>
					)}
				</>
			)}
		</>
	)
}

const quizStyles = StyleSheet.create({
	score: {
		paddingBottom: 16,
	}
});

export default Quiz;