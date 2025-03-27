const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.get('/api/departures', async (req, res) => {
	  try {
		      const { station } = req.query;
		      const response = await axios.get(
			            `https://api.transportapi.com/v3/uk/bus/stop/${station}.json`,
			            { headers: { 'X-Application-Id': process.env.TRANSPORT_API_KEY } }
			          );
		      res.json(response.data.departures);
		    } catch (error) {
			        res.status(500).json({ error: 'API request failed' });
			      }
});

app.listen(3000, () => console.log('Server running on port 3000'));
