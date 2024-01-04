
import express from 'express';
import { createLead, getLeads, updateLead, deleteLead } from '../controllers/leadController';

const router = express.Router();

// Route to create a new lead
router.post('/', createLead);

// Route to get all leads
router.get('/', getLeads);

// Route to update a lead
router.put('/:id', updateLead);

// Route to delete a lead
router.delete('/:id', deleteLead);

export default router;
