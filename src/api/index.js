import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

export const getWeather = async (lat, lon) => {
  const reqUrl = `${url}/${key}/${lat},${lon}?lang=ja`;
  try {
    const result = await fetch(reqUrl);
    const data = await result.data;
    console.log(data)
    return data;
  } catch (err) {
    alert(err)
  }
}