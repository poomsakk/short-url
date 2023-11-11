import type { NextApiRequest, NextApiResponse } from "next";
import { getUrl, setUrl } from "@/app/database/urlMappings";
import {
  getCounter,
  incrementCounter,
  resetCounter,
} from "@/app/database/counter";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { longUrl } = req.body;
    const code = generateCode(longUrl);
    res.status(200).json({ code });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

function generateCode(longUrl: string) {
  incrementCounter();
  if (getCounter() >= 1000) {
    resetCounter();
  }

  const code = getCounter().toString().padStart(3, "0");
  //const shortUrl = `${process.env.API_ENDPOINT}/${code}`;

  setUrl(code, longUrl);

  console.log(getUrl(code));

  return code;
}
