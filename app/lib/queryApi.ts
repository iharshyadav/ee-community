// // import OpenAI from "openai";

// // const openai = new OpenAI({
// //   apiKey: process.env.OPEN_AI_KEY,
// // });

// // import { OpenAIClient } from "@azure/openai";
// // import { AzureKeyCredential } from "@azure/core-auth";

// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
// // import { AzureOpenAI } from "openai";

// // const endpoint = "https://earthemission-gpt.openai.azure.com/";
// const endpoint =
//   "https://vinodkumarbhovi9797-5427-pgzmy.eastus.inference.ml.azure.com/score";
// // const credential = new AzureKeyCredential("fb2bd9f2985340ad8154abf500a4e288");
// const credential = new AzureKeyCredential("LF5N2XPptbRRRqZzAt8SOras4gIr4SfM");

// const client = new OpenAIClient(endpoint, credential);

// const MAX_TOKENS = {
//   "text-davinci-002": 2048,
//   "text-davinci-003": 2048,
//   "davinci-codex": 4096,
//   "gpt-3.5-turbo": 4096,
//   "gpt-4": 8192,
//   "gpt-4-0314": 8192,
//   "gpt-4-32k": 32768,
//   "gpt-4-32k-0314": 32768,
// };

// const openaiQuery = async (model: string, messages: any[]) => {
//   try {
//     if (messages.length > 1 && messages[1]?.content) {
//       console.log(messages[1].content);
//     } else {
//       console.error("Invalid messages structure: messages[1] is undefined.");
//     }

//     const response = await client.getChatCompletions(
//       "earthemissiongpt",
//       messages
//     );
//     console.log("API Response:", response);

//     if (response.choices && response.choices.length > 0) {
//       for (const choice of response.choices) {
//         console.log(choice.message);
//       }

//       return (
//         response.choices[0]?.message?.content ||
//         "AI Chatbot was unable to find the answer to that"
//       );
//     } else {
//       console.error("No choices returned from OpenAI API");
//       return "AI Chatbot was unable to find the answer to that (No choices)";
//     }
//   } catch (err) {
//     console.error("Error in openaiQuery:", err);

//     if (err instanceof Error) {
//       return `AI Chatbot was unable to find the answer to that (Error: ${err.message})`;
//     } else {
//       return "AI Chatbot was unable to find the answer to that (Unknown error)";
//     }
//   }
// };

// export default openaiQuery;

const openaiQuery = async (model: string, messages: any[], prompt: string) => {
  try {
    console.log(messages, "msgggsss");
    if (messages.length > 1 && messages[1]?.content) {
      console.log(messages[1].content);
    } else {
      console.error("Invalid messages structure: messages[1] is undefined.");
    }

    const requestBody = JSON.stringify({
      question: prompt,
      chat_history: [messages],
    });
    const requestHeaders = new Headers({ "Content-Type": "application/json" });
    const apiKey = "LF5N2XPptbRRRqZzAt8SOras4gIr4SfM"; // Replace with your actual API key

    if (!apiKey) {
      throw new Error("A key should be provided to invoke the endpoint");
    }

    requestHeaders.append("Authorization", "Bearer " + apiKey);
    requestHeaders.append(
      "azureml-model-deployment",
      "vinodkumarbhovi9797-5427-pgzmy"
    );

    const url =
      "https://vinodkumarbhovi9797-5427-pgzmy.eastus.inference.ml.azure.com/score";

    const response = await fetch(url, {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("API Response:", jsonResponse);

      if (jsonResponse.answer) {
        console.log(jsonResponse.answer);
        return jsonResponse.answer;
      } else {
        console.error("No answer returned from API");
        return "AI Chatbot was unable to find the answer to that (No answer)";
      }
    } else {
      console.debug(...Array.from(response.headers));
      console.debug(response.body);
      throw new Error("Request failed with status code " + response.status);
    }
  } catch (err) {
    console.error("Error in openaiQuery:", err);

    if (err instanceof Error) {
      return `AI Chatbot was unable to find the answer to that (Error: ${err.message})`;
    } else {
      return "AI Chatbot was unable to find the answer to that (Unknown error)";
    }
  }
};

export default openaiQuery;
