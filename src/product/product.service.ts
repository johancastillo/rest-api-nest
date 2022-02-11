import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Product} from './interfaces/product.interface';
import {CreateProductDTO} from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private productModel:Model<Product>) {

    }

    // Get all products
    async getProducts(): Promise<Product[]>{
        let products = await this.productModel.find()
        return products;
    }

    // Get single product
    async getProduct(productId:string): Promise<Product>{
        let product = await this.productModel.findById(productId);
        return product;
    }

    // Create product
    async createProduct(createProductDTO:CreateProductDTO){
        const product = await new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productId:string):Promise<Product>{
        const deleteProduct = await this.productModel.findByIdAndDelete(productId);
        return deleteProduct;
    }

    async updateProduct(productId:string, createProductDTO:CreateProductDTO):Promise<Product>{
        const product = await this.productModel.findByIdAndUpdate(productId, createProductDTO, {new: true});
        return product;
    }

}
