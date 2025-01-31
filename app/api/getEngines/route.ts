import { NextRequest, NextResponse } from "next/server";
import openai from "@/app/lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export async function GET(req: NextRequest) {
  // const models = await openai.models.list().then((res) => res.data);

  const models = ["emissionsgpt", "earthemissiongpt"];

  const allowedModels = [
    // "gpt-4",
    // "gpt-4-0314",
    // "gpt-4-32k",
    // "gpt-4-32k-0314",
    // "gpt-3.5-turbo-16k",
    // "gpt-3.5-turbo",
    // "gpt-3.5-turbo-0613",
    // "gpt-4-0613",
    "emissionsgpt",
    "earthemissiongpt",
  ];

  const modelOptions = models
    .filter((model) => allowedModels.includes(model))
    .map((model) => ({
      value: model,
      label: model,
    }));

  return NextResponse.json({ modelOptions }, { status: 200 });
}
