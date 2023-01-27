import { IncrementQuestionLength, IncrementScore, RandomNumber, UpdateStatus } from '../../types/TenFrame';

export interface InputTypes {
	randomNumber: RandomNumber,
	incrementScore: IncrementScore,
	incrementQuestionLength: IncrementQuestionLength,
	updateStatus: UpdateStatus
}