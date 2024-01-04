import { createLead, updateLead, deleteLead, getAllLeads } from '../controllers/leadController';
import { Request, Response, NextFunction } from 'express';
import LeadModel from '../models/leadModel';

// Mocks for Express request and response objects
const mockRequest = (bodyData, leadId) => ({
  body: bodyData,
  params: { leadId },
}) as Request;

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const nextFunction: NextFunction = jest.fn();

describe('Lead Controller', () => {
  it('should create a new lead', async () => {
    const req = mockRequest({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '0987654321',
    });
    const res = mockResponse();

    await createLead(req, res, nextFunction);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith(expect.anything());
  });

  it('should update an existing lead', async () => {
    const req = mockRequest({
      name: 'Jane Smith',
    }, 'existingLeadId');
    const res = mockResponse();

    await updateLead(req, res, nextFunction);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(expect.objectContaining({
      name: 'Jane Smith',
    }));
  });

  it('should delete a lead', async () => {
    const req = mockRequest({}, 'leadToDeleteId');
    const res = mockResponse();

    await deleteLead(req, res, nextFunction);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(expect.objectContaining({
      message: 'Lead deleted successfully',
    }));
  });

  it('should fetch all leads', async () => {
    const req = mockRequest();
    const res = mockResponse();

    await getAllLeads(req, res, nextFunction);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
      }),
    ]));
  });
});
