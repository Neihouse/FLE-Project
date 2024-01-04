import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Lead {
  id: string;
  created_time: string;
  field_data: Array<{ field: string, value: string }>;
}

const LeadManagement: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // Fetch leads on component mount
    const fetchLeads = async () => {
      try {
        const response = await axios.get('/api/leads');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  // Add state and handlers for updating and deleting leads
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [updateFieldData, setUpdateFieldData] = useState<{ field: string, value: string }[]>([]);

  const handleUpdateLead = async (leadId: string) => {
    try {
      const response = await axios.put(`/api/leads/${leadId}`, { field_data: updateFieldData });
      setLeads(leads.map(lead => lead.id === leadId ? response.data : lead));
      setSelectedLead(null); // Reset selection
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    try {
      await axios.delete(`/api/leads/${leadId}`);
      setLeads(leads.filter(lead => lead.id !== leadId));
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  // Render form fields and buttons for updating and deleting leads
  return (
    <div>
      <h1>Lead Management</h1>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            Lead ID: {lead.id}, Created Time: {lead.created_time}
            <button onClick={() => setSelectedLead(lead)}>Edit</button>
            <button onClick={() => handleDeleteLead(lead.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedLead && (
        <form onSubmit={() => handleUpdateLead(selectedLead.id)}>
          {/* Form fields for updating lead details */}
          <button type="submit">Update Lead</button>
        </form>
      )}
    </div>
  );
};

export default LeadManagement;
