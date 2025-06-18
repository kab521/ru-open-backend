import fetch from 'node-fetch';

export async function handler(event) {
  const placeId = event.queryStringParameters.place_id;
  const API_KEY = 'howdy';  

  if (!placeId) {
    return { statusCode: 400, body: 'Missing place_id' };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=hello&fields=opening_hours&key=howdy`;

  const response = await fetch(url);
  const data = await response.json();

  return { statusCode: 200, body: JSON.stringify(data) };
}
