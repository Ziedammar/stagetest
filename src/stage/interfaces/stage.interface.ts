import { Document } from 'mongoose';

export interface stage extends Document {
  
  name: string;
  phone: number;
  email: string;
  
}
