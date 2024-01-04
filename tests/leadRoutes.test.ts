import axios from 'axios';
import http from 'http';
import app from '../app'; // Assuming the Express app is exported from this file

let server: http.Server;

// Start the server before all tests
beforeAll((done) => {
  server = app.listen(3001, done);
});

// Stop the server after all tests
afterAll((done) => {
  server.close(done);
});

describe('Lead Routes', () => {
  it('should fetch all leads', async () => {
    const response = await axios.get('http://localhost:3001/api/leads');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  // Test for creating a new lead
  it('should create a new lead', async () => {
    const newLead = {
      id: 'test-lead-id',
      created_time: new Date().toISOString(),
      field_data: [{ field: 'email', value: 'test@example.com' }]
    };

    const createResponse = await axios.post('http://localhost:3001/api/leads', newLead);
    expect(createResponse.status).toBe(201);
    expect(createResponse.data.id).toBe(newLead.id);

    // Cleanup after test
    await axios.delete(`http://localhost:3001/api/leads/${newLead.id}`);
  });

  // Test for updating a lead
  it('should update a lead', async () => {
    const updateData = {
      field_data: [{ field: 'email', value: 'updated@example.com' }]
    };

    const updateResponse = await axios.put('http://localhost:3001/api/leads/test-lead-id', updateData);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data.field_data).toEqual(updateData.field_data);
  });

  // Test for deleting a lead
  it('should delete a lead', async () => {
    const deleteResponse = await axios.delete('http://localhost:3001/api/leads/test-lead-id');
    expect(deleteResponse.status).toBe(200);
  });
});

export {};
