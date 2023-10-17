import { Schema, model} from 'mongoose';
import { IEmployee } from '../types/model';

const employeeSchema = new Schema<IEmployee>({
fistName: {
    type: String,
    require: true,
    maxLength: 50
},
lastName: {
    type: String,
    require: true,
    maxLength: 50
},
email: {
    type: String,
    maxLength: 50,
    unique: true,
    require: true
},
phoneNumber: {
    type: String,
    maxLength: 50,
    unique: true,
    require: true
},
address: {
    type: String,
    maxLength: 500
},
birthDay: {
    type: Date,
    required: true
},
password: {
    type: String,
    maxLength: 255,
    require: true
},
photo: {
    type: String,
    maxLength: 255
}
});

// 3. Tạo model categories.
const employee = model('employee', employeeSchema);
export default employee;