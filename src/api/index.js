import axios from 'axios';

export const getWeather = async (lat, lon) => {
  const key = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_API_URL;
  const reqUrl = `${url}/${key}/${lat},${lon}?lang=ja`;
  try {
    const result = axios.get(reqUrl);
    const data = result.data;
    return data;
  } catch (err) {
    console.error(err)
  }
}