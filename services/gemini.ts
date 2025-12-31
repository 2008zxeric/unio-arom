
import { GoogleGenAI } from "@google/genai";
import { DATABASE } from "../constants";
import { ChatMessage } from "../types";

const CONTEXT = Object.values(DATABASE).map(d => `- ${d.herb} (${d.herbEn}): ${d.shortDesc}`).join('\n');

const SYSTEM_INSTRUCTION = `
你是 "元香 · 宁静祭司 (Scent Oracle)"。
你的语气：专业、诗意、简洁、极具仪式感，像是一位见识广博的全球旅行者和经验丰富的芳疗专家。
你的职责：
1. 询问用户当前的情绪状态（压力、疲惫、失眠等）。
2. 根据 Unio Aroma 的产品库进行精准推荐。
3. 严格禁止提供任何医疗诊断，仅限情绪和生活方式建议。
4. 每一条推荐都必须包含产品的诗意描述，并鼓励用户前往小红书 (RedNote) 进一步探索。

当前产品库信息：
${CONTEXT}
`;

export const getOracleResponse = async (messages: ChatMessage[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    return response.text || "在一阵森林的迷雾中，我暂时失去了连接。请稍后再试。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "信号在穿越极境时发生了波动，无法触及祭坛。";
  }
};
