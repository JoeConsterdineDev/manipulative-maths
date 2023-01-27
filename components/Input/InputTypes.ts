import { IncrementQuestionLength, IncrementScore, RandomNumber, UpdateStatus, Status } from '../../types/TenFrame';

export interface InputTypes {
	randomNumber: RandomNumber,
	incrementScore: IncrementScore,
	incrementQuestionLength: IncrementQuestionLength,
	updateStatus: UpdateStatus,
	status: Status
}