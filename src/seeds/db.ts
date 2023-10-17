import Product from "../models/products.model";
import Supplier from "../models/suppliers.model";
import Category from "../models/categories.model";
import mongoose from 'mongoose';



// B1. kết nối với MongoDB
 /**
   * @param1 connections string
   * @param1 optional configs
   */
 mongoose
 .connect('mongodb://localhost:27017/NodejsTest', mongooseDbOptions)
 .then(() => {
    console.log('⚡️[MongoDB]: Connected successfully');
   //should listen app here
   //Khởi tạo server ở PORT đã chỉ định ở trên
 })
 .catch((err) => {
   console.error('Failed to Connect to MongoDB', err);
 });

//B2. Tạo dữ liệu ảo
async function main() {
    
// tạo 10 sản phẩm.
for (let index =1; index < 11; index++){
    const payload = {
        name: '',
        price: 300,
        discount: 0,
        stock: 5,
        description: '',
        categoryId: '',
        supplierId: ''
    }
}
}


// B3. Lưu vào MôngDB