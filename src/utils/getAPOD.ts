import {API_KEY, API_URL} from '@env';

export default async () => {
  const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
  const data = (await response.json()) as APODResponse;
  return data;
};

export type APODResponse = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
