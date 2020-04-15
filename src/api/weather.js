// import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

/**  
 * This code happens cors error .
 * I use CORS Unblock(Chrome web tool (https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=ja)) .
 * But don't use because it is dangerrous .
 * I create this app because this app is my portfolio .
 * Correct as soon as the cause is known .
 * If you want to use this app that you use this app on one's own responsibility .
 */
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