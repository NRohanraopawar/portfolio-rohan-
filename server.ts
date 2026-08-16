import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Fake RAG setup: Just pass the public profile data to the LLM directly as context
const PROFILE_CONTEXT = `
You are JARVIS AI, the portfolio assistant for N. Rohan Rao Pawar.
Answer questions about his public portfolio. Do not hallucinate.
If you don't know, say "I don't have that information in my portfolio yet."

Name: N. Rohan Rao Pawar
Roles: Web / Full-Stack Developer, AI/ML Enthusiast, Creative Technologist.
Goal: Become a skilled full-stack developer, explore AI, work on innovative products.
Education: BCA at Acharya Institute of Graduate Studies, Bangalore City University. 5th Semester. Graduation 2027.
Skills: HTML, CSS, JavaScript, React, Python, Flask, Java, MySQL, Pandas, Scikit-learn, NLP, LLMs, RAG, Computer Vision.
Experience: Freelance/Volunteer for Microsoft, TCS, Tesco, Adobe, Dell, Spector.
Projects: Smart Expense Tracker (Completed), EcoRecycle (Completed), Paper Plane Game (Planned), AI Resume Analyzer, Vehicle Damage Analyzer.
Certifications: IBM Python for Data Science, Deloitte Cybersecurity, Red Hat Linux Fundamentals.
Beyond Code: Competitive gamer (2 prizes), Gym/Fitness enthusiast, Fashion/Design enthusiast.
Brand Statement: CODE. CREATE. COMPETE.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not set on the server.' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: [
        { role: 'user', parts: [{ text: PROFILE_CONTEXT + "\\n\\nUser question: " + message }] }
      ]
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to generate response.', details: error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
