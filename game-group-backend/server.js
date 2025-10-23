const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 允许 GitHub Pages 前端跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://your-username.github.io');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.post('/api/group', async (req, res) => {
  try {
    const { players } = req.body;

    const playerText = players.map(p => 
      `玩家: ${p.name || "未知"}, 实力: ${p.level || "未知"}, 类型: ${p.type || "未知"}, 位置: ${p.positions || "未知"}`
    ).join("\n");

    const prompt = `你是一个游戏内战分组助手。请将以下玩家分为5个队伍，要求：
1. 每队必须包含至少1个“决斗位”；
2. “竞技认真”玩家尽量不与“娱乐交友”玩家同队；
3. 实力等级（A最强，E最弱）尽量均衡；
4. 考虑位置搭配。

玩家列表：
${playerText}

请直接输出分组结果，格式：
队1: 玩家A, 玩家B...
队2: 玩家C, 玩家D...
不要解释。`;

    const response = await axios.post(
      'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
      {
        model: "qwen3",
        input: { messages: [{ role: "user", content: prompt }] },
        parameters: { temperature: 0.3 }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.DASHSCOPE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const result = response.data.output.choices[0].message.content;
    res.json({ result });
  } catch (error) {
    console.error("后端错误:", error.response?.data || error.message);
    res.status(500).json({ error: "分组失败，请重试" });
  }
});

app.listen(PORT, () => {
  console.log(`后端运行在 http://localhost:${PORT}`);
});