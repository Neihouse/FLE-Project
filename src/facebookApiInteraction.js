const axios = require('axios');
require('dotenv').config();

async function getFacebookData() {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/v9.0/me?fields=id,name&access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    console.log('Facebook Graph API Response:', response.data);
    return response.data; // Return the data property from the axios response
  } catch (error) {
    console.error('Error fetching data from Facebook Graph API:', error.message);
  }
}

module.exports = getFacebookData;