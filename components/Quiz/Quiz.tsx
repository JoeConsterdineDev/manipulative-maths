import { useEffect, useState } from "react";
import Input from '../Input/Input';
import TenFrame from '../TenFrame/TenFrame';
import { Text } from 'react-native';
import Results from "../Results/Results";
import Tick from "../../assets/tick.svg";
import Cross from "../../assets/cross.svg";
import { quizStyles } from "./QuizStyles";

const Quiz = ({ getCurrentScore, updateStatus, status }: {
	getCurrentScore: (score: number) => void,
	updateStatus: (status: string) => void,
	status: string
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
							questionsLength={questionsLength}
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
								<>
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
								</>
							)}
						</>
					)}
				</>
			)}
		</>
	)
}

export default Quiz;