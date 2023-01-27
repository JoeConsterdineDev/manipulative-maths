export type QuestionsLength = number;
export type Score = number;
export type RandomNumber = number | null;
export type IncrementScore = () => void;
export type IncrementQuestionLength = () => void;
export type ResetQuiz = () => void;
export type UpdateStatus = (status: string) => void;
export type Status = string;
export type GetCurrentScore = (score: number) => void,
export type UpdateGameStatus = (status: boolean) => void