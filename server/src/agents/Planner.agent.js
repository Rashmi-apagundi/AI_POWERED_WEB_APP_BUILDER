import { generateContent } from "../config/gemini.config.js";

export const runPlannerAgent = async (userPrompt) => {
  const plannerPrompt = `
You are a software planning agent.

Convert the user request into a structured JSON plan.

Return ONLY JSON (no explanation).

Format:
{
  "project_type": "string",
  "tasks": [
    {
      "id": "task_1",
      "title": "string",
      "description": "string"
    }
  ]
}

User Request:
${userPrompt}
`;

  try {
    const response = await generateContent(plannerPrompt);

    // Try parsing JSON safely
    const cleaned = response.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);

  } catch (error) {
    console.error("Planner Agent Error:", error.message);
    throw new Error("Planner failed");
  }
};

export default runPlannerAgent