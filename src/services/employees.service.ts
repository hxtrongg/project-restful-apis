import Employee from '../models/employees.model'; // Đổi từ 'suppliers.model' thành 'employees.model'
import { IEmployee } from '../types/model'; // Đổi từ 'ISupplier' thành 'IEmployee'

const getAllItems = async () => {
  const employees = Employee.find(); // Đổi từ 'Supplier' thành 'Employee'
  return employees;
};

const getItemById = async (id: string) => {
  console.log(id);
  const employee = await Employee.findById(id); // Đổi từ 'Supplier' thành 'Employee'
  return employee;
};

const createItem = async (payload: IEmployee) => {
  const employee = await Employee.create(payload); // Đổi từ 'Supplier' thành 'Employee'
  return employee;
};

const updateItem = async (id: string, payload: IEmployee) => {
  const employee = Employee.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return employee;
};

const deleteItem = async (id: string) => {
  const employee = Employee.findByIdAndDelete(id); // Đổi từ 'Supplier' thành 'Employee'
  return employee;
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
};
