import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Write me an extremely detailed Dungeons and Dragons Campaign using the following Title and Main Characters.`

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`${basePromptPrefix}`)

  const first_prompt = `${basePromptPrefix}\nTitle: ${req.body.titleInput}\nMain Characters: ${req.body.characterInput}`
  console.log(`API: ${first_prompt}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: first_prompt,
    temperature: 0.6,
    max_tokens: 1000,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  const secondPrompt =
  `
  Print the Dungeons and Dragons Campaign below, adding details for the Boss. Make sure to include a name and a few special abilities. At the bottom of the campaign add a unique enchanted item for each Main Character as a reward for defeating the Boss.
  
  Dungeons and Dragons Campaign: ${basePromptOutput.text}
  `
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    temperature: 0.6,
    max_tokens: 1000,
  });

  const secondPromptOutput = secondPromptCompletion.data.choices.pop();
  
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;