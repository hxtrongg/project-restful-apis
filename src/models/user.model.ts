
import { Schema, model } from 'mongoose';

// 1. Tạo type
interface IUser {
  name: string;
  email: string;
  password: string;
}
//2.Tạo Schema
const userSchema = new Schema<IUser>(
  {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  }
);
//3. Tạo Model User
const User = model<IUser>('User', userSchema);
module.exports = User;