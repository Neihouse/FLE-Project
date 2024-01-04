import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  roles: string[];
  checkPassword: (password: string) => boolean;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  roles: [{ type: String, enum: ['user', 'admin'] }],
});

// Password hash middleware.
userSchema.pre<IUser>('save', function(next) {
  if (this.isModified('passwordHash')) {
    this.passwordHash = bcrypt.hashSync(this.passwordHash, 8);
  }
  next();
});

// Helper method to check password.
userSchema.methods.checkPassword = function(password: string): boolean {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
