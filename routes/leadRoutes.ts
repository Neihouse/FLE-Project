import express, { Request, Response } from 'express';
import Lead from '../models/leadModel';

const router = express.Router();

// Route to create a new lead
router.post('/', async (req: Request, res: Response) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ message: 'Error creating new lead', error: error.message });
  }
});

// Route to get all leads
router.get('/', async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leads', error: error.message });
  }
});

// Route to update a lead
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedLead);
  } catch (error) {
    res.status(500).json({ message: 'Error updating lead', error: error.message });
  }
});

// Route to delete a lead
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lead', error: error.message });
  }
});

export default router;
