import { ResetQuiz, Score, QuestionsLength, UpdateGameStatus } from '../../types/TenFrame';

export interface ResultsTypes {
	resetQuiz: ResetQuiz,
	score: Score
	questionsLength: QuestionsLength,
	updateGameStatus: UpdateGameStatus
}