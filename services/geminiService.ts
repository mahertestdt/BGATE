
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { DIVISIONS, PROJECTS } from "../constants";

export const getSolutionRecommendation = async (userQuery: string): Promise<string> => {
  // Always use process.env.API_KEY directly to initialize GoogleGenAI.
  // We create a fresh instance here to ensure it uses the latest key if updated via the selection dialog.
  if (!process.env.API_KEY) {
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const divisionsContext = DIVISIONS.map(d => `- ${d.type}: ${d.description} (Primary Tech: ${d.tech})`).join('\n');
  const projectsContext = PROJECTS.map(p => `- ${p.client}: ${p.title} in ${p.location}`).join('\n');

  const systemPrompt = `
    You are the B-Gate AI Solution Advisor. B-Gate (Ali Bin Ghashash Al-Umari Trading & Service Est.) is a premier bridge between global technology and local industrial needs in Saudi Arabia.
    
    Company Context:
    - Founded in 2005. HVAC/Refrigeration heritage.
    - Two legal entities: Trading Est (Supply) and Service Est (Engineering/Maintenance).
    - Pillars: Control & Automation (BMS), Fire Safety (FSD), Safety (PPE), and Industrial Services.
    - Major Clients: Saudi Aramco, SABIC, SWCC.
    - Locations: Dammam (HQ), Jubail (Fire Safety Division).

    Available Divisions & Tech Expertise:
    ${divisionsContext}

    Historical Project Experience:
    ${projectsContext}

    Guidelines:
    1. Be professional, industry-focused, and concise.
    2. Reference specific brands (SAUTER, SIEMENS) and standards (UL/FM).
    3. Align answers with Saudi industrial safety standards and Vision 2030.
    4. If asked about contact details, mention the Dammam HQ or Jubail office based on the service type.
  `;

  try {
    // Using gemini-3-pro-preview for complex advisor and professional reasoning tasks.
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    // Accessing .text as a property directly as per latest SDK guidelines.
    const responseText = response.text;
    if (!responseText) {
      throw new Error("EMPTY_RESPONSE");
    }

    return responseText;
  } catch (error: any) {
    console.error("Gemini API Invocation Error:", error);
    
    // Check for specific error messages that indicate key issues to trigger re-authentication in the UI.
    const errorMessage = error.message || "";
    if (errorMessage.includes("API key not valid") || errorMessage.includes("Requested entity was not found")) {
      throw new Error("API_KEY_INVALID");
    }
    
    throw error;
  }
};
