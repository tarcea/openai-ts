# OpenAi API

### A simple demo of OpenAi API integration with NodeJs and Typescript

1. get your api key [here](https://platform.openai.com/account/api-keys)
2. clone this repo `git clone https://github.com/tarcea/openai-ts.git`
3. in the root directory of the project, create an `.env` file, like in `env.example`
4. `npm start`

make a request like this: `http://localhost:3010/?q=say%20nurse%20in%20Swedish`

response:

```json
{
  "question": "say nurse in Swedish",
  "response": "Sjuksköterska"
}
```

make a request like this: `http://localhost:3010/?q=say%20nurse%20in%20German`

response:

```json
{
  "question": "say nurse in German",
  "response": "Krankenschwester"
}
```
