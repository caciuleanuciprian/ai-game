import { serve } from "@hono/node-server";
import { Hono, type Context } from "hono";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { combineWords, initializeAI } from "./ai.js";

dotenv.config();

export const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const app = new Hono();

app.notFound((c) => {
	return c.text("404 - Not Found", 404);
});

app.onError((err, c) => {
	console.error(`${err}`);
	return c.text("500 - Internal Server Error", 500);
});

app.get("/", async (c) => {
	await initializeAI();
	const response = await combineWords("jew", "oven");
	return c.text(`Response: ${response}`);
});

app.get("/status", async (c) => {
	return c.json({ status: "ok" });
});

app.post("/combine", async (c) => {
	const { word1, word2 }: { word1: string; word2: string } = await c.req.json();
	if (!word1 || !word2) {
		c.status(400);
		return c.text("400 - Bad Request", 400);
	}
});

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
