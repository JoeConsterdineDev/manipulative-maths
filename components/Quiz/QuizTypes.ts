import { GetCurrentScore, UpdateStatus, Status, UpdateGameStatus } from '../../types/TenFrame';

export interface QuizTypes {
	getCurrentScore: GetCurrentScore,
	updateStatus: UpdateStatus,
	status: Status,
	updateGameStatus: UpdateGameStatus
}