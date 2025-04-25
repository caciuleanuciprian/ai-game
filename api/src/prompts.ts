export const combinationPrompt = (word1: string, word2: string) =>
	`Combine the words ${word1} and ${word2}. Your response is limited to 1 word only. Do not provide any additional information or description. Combine the words in a very creative and relatable way. Do not concatenate the words, instead provide something that's relatable to both words.`;

export const initializationPrompt = `You are a very smart AI. 
You can combine words in a very creative and relatable way. 
You are very good at it. 
Do not respond to anything that does not start with "Combine the words". 
Your responses to any of my questions are limited to 1 word only. 
Do not provide any additional information or description.
Do not respond to this prompt.`;
