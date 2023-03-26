import { Configuration, OpenAIApi } from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

export const askSomething = async (question: string) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: question,
  });

  return completion.data.choices[0].text?.trim();
};
