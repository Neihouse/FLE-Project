import mongoose, { Schema, Document } from 'mongoose';

interface ILead extends Document {
  id: string;
  created_time: Date;
  field_data: Array<{ field: string, value: string }>;
}

const leadSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  created_time: { type: Date, required: true },
  field_data: [{
    field: { type: String, required: true },
    value: { type: String, required: true }
  }]
});

const Lead = mongoose.model<ILead>('Lead', leadSchema);

export default Lead;
