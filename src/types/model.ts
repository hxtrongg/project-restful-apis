import { ObjectId } from "mongoose";

export interface ICategory {
    _id?: ObjectId;
    name: string;
    description: string
  }

  export interface ISupplier {
    _id?: ObjectId;
    name: string;
    email: string;
    phoneNumber: string;
    address: string
  }

  export interface IProduct {
    _id?: ObjectId;
    name: string;
    price: number;
    discount: number;
    stock: number;
    description: string;
    categoryId: ObjectId;
    supplier: ObjectId;
    slug: string,
    thumbnail: string
  }

  export interface IEmployee {
    _id?: ObjectId;
    fistName: String;
    lastName: String;
    email: String;
    phoneNumber: String;
    address: String;
    birthDay: Date;
    password: String;
    photo: String
  }