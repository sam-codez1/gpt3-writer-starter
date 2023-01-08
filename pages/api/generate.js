import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Write me a new Dungeons and Dragons Campaign using the following Title and Main Characters.`

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
  Take the Dungeons and Dragons Campaign below and generate 5 quest lines. Make them feel like an RPG. Go deep into detail with each one, including a Boss fight and the rewards for the party. Make sure to mention the names of the main characters a few times.
  Make sure every quest leads into the next quest to create a single overarching story.
  
  Dungeons and Dragons Campaign: ${basePromptOutput.text}

  Quests:
  `
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    temperature: 0.9,
    max_tokens: 1000,
  });

  const secondPromptOutput = secondPromptCompletion.data.choices.pop();
  
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;