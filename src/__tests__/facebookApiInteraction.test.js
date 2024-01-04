// FLE-Project/src/__tests__/facebookApiInteraction.test.js
const getFacebookData = require('../facebookApiInteraction');
const axios = require('axios');

// Mock the axios.get method before the tests
jest.mock('axios');

describe('Facebook API Interaction', () => {
  it('should fetch data from Facebook Graph API', async () => {
    // Mock the API response
    axios.get.mockResolvedValue({
      data: {
        id: '12345',
        name: 'Test User'
      }
    });

    // Call the function that makes the API request
    const data = await getFacebookData();

    // Perform assertions on the returned data
    expect(data).toBeDefined();
    expect(data).toHaveProperty('id', '12345');
    expect(data).toHaveProperty('name', 'Test User');
  });
});