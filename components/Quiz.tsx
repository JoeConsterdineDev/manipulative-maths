import { useEffect, useState } from "react";
import Input from './Input';
import TenFrame from './TenFrame';
import { Text, StyleSheet } from 'react-native';
import Results from "./Results";

const Quiz = ({ getCurrentScore }: {
	getCurrentScore: (score: number) => void
}) => {
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
							resetQuiz={resetQuiz}
						/>
					): (
						<>
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

export default Quiz;