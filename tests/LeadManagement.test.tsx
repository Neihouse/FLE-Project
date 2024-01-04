import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import LeadManagement from '../components/LeadManagement';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(() => Promise.resolve({ data: { id: 'new-lead-id' } })),
  put: jest.fn(() => Promise.resolve()),
  delete: jest.fn(() => Promise.resolve())
}));

describe('LeadManagement Component', () => {
  it('renders the component', () => {
    render(<LeadManagement />);
    expect(screen.getByText('Lead Management')).toBeInTheDocument();
  });

  it('allows the user to create a new lead', async () => {
    const { getByLabelText, getByText } = render(<LeadManagement />);
    const emailInput = getByLabelText('Email');
    const createButton = getByText('Create Lead');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(createButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });

  it('allows the user to update a lead', async () => {
    // Mock lead data
    const leadData = [
      { id: 'test-lead-id', created_time: new Date().toISOString(), field_data: [{ field: 'email', value: 'test@example.com' }] }
    ];

    // Mock axios get to resolve with leadData
    axios.get.mockResolvedValueOnce({ data: leadData });

    const { getByText, getAllByText } = render(<LeadManagement />);
    const editButton = getAllByText('Edit')[0];

    // Simulate clicking the edit button
    fireEvent.click(editButton);

    // Assert that the put request was made
    await waitFor(() => expect(axios.put).toHaveBeenCalled());
  });

  it('allows the user to delete a lead', async () => {
    // Mock lead data
    const leadData = [
      { id: 'test-lead-id', created_time: new Date().toISOString(), field_data: [{ field: 'email', value: 'test@example.com' }] }
    ];

    // Mock axios get to resolve with leadData
    axios.get.mockResolvedValueOnce({ data: leadData });

    const { getAllByText } = render(<LeadManagement />);
    const deleteButton = getAllByText('Delete')[0];

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Assert that the delete request was made
    await waitFor(() => expect(axios.delete).toHaveBeenCalled());
  });

  // Additional tests for updating and deleting leads will go here
});

export {};

