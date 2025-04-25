import { LLM_MODEL } from "./const.js";
import { AI } from "./index.js";
import { combinationPrompt, initializationPrompt } from "./prompts.js";

export const askAI = async (prompt: string) => {
	console.log(`Prompt: ${prompt}`);
	try {
		const response = await AI.models.generateContent({
			model: LLM_MODEL,
			contents: prompt,
		});
		console.log(`Response: ${response.text}`);
		return response.text;
	} catch (error) {
		console.error(`Error: ${error}`);
		throw new Error(`Error: ${error}`);
	}
};

export const initializeAI = async () => {
	await askAI(initializationPrompt);
};

export const combineWords = async (word1: string, word2: string) => {
	await askAI(combinationPrompt(word1, word2));
};
