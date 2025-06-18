import fetch from 'node-fetch';

export default async function handler(req, res) {
  const placeId = req.query.place_id;
  const API_KEY = 'key';

  if (!placeId) {
    res.status(400).send('Missing place_id');
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Error fetching place details');
  }
}
