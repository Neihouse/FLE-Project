import LeadModel from '../models/leadModel';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('Lead Model', () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new lead', async () => {
    const leadData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
    };

    const lead = new LeadModel(leadData);
    const savedLead = await lead.save();

    expect(savedLead._id).toBeDefined();
    expect(savedLead.name).toBe(leadData.name);
    expect(savedLead.email).toBe(leadData.email);
    expect(savedLead.phone).toBe(leadData.phone);
  });

  // Additional detailed test cases for updating, deleting, and fetching leads...
});
