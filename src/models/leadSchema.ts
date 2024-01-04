
import mongoose, { Schema, Document } from 'mongoose';

interface ILead extends Document {
  // ... (existing fields)
}

const leadSchema: Schema = new Schema({
  // ... (existing schema definition)
});

// Add indexes to frequently queried fields
leadSchema.index({ facebookLeadId: 1 });
leadSchema.index({ email: 1 });
leadSchema.index({ createdAt: -1 }); // Assuming leads are often sorted by creation date

const Lead = mongoose.model<ILead>('Lead', leadSchema);

export default Lead;
