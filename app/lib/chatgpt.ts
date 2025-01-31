// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_KEY,
// });

// export default openai;

// import { OpenAIClient } from "@azure/openai";
const { OpenAIClient } = require("@azure/openai");
import { AzureKeyCredential } from "@azure/core-auth";

// const endpoint = "https://earthemission-gpt.openai.azure.com/";
// const credential = new AzureKeyCredential("fb2bd9f2985340ad8154abf500a4e288");

const endpoint =
  "https://vinodkumarbhovi9797-5427-pgzmy.eastus.inference.ml.azure.com/score";
// const credential = new AzureKeyCredential("fb2bd9f2985340ad8154abf500a4e288");
const credential = new AzureKeyCredential("LF5N2XPptbRRRqZzAt8SOras4gIr4SfM");

// const client = new OpenAIClient(endpoint, credential);

const openai = new OpenAIClient(endpoint, credential);

export default openai;
