import 'dotenv/config';
import express, { Request, Response } from 'express';
import { askSomething } from './openAi';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const { q } = req.query;
  if (!q) {
    return res.json({ message: 'please ask something' });
  }
  const text = await askSomething(q.toString());

  res.json({ question: q, response: text });
});

app.listen(3010, () => console.log(`server listening on port 3010`));
