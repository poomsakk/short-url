const urlMappings: Record<string, string> = {};

export const getUrl = (code: string) => {
  return urlMappings[code];
};

export const setUrl = (code: string, longUrl: string) => {
  console.log(`Setting URL for code ${code}`);
  urlMappings[code] = longUrl;
  if (urlMappings[code]) {
    console.log(urlMappings[code]);
  } else {
    console.log(`Code ${code} not found in urlMappings`);
  }
};
