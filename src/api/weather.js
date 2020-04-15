const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;
export const getWeather = async (lon, lat) => {
  try {
    const url = `http://localhost:5000/${lat}/${lon}`;
    const result = await fetch(url)
      .then(data => data.json());
    console.log('Get API ... OK');
    return result
    
  } catch (err) {
    console.log('Get API ... NO');
  }
}