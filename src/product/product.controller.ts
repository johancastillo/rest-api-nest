import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateProductDTO} from "./dto/product.dto";
import {ProductService} from "./product.service"

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get()
    getProduct(@Res() res){
        const products = this.productService.getProducts();

        return res.status(HttpStatus.OK).json({
            message: "Success",
            data: products
        });
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO:CreateProductDTO){
        console.log(createProductDTO);
        
        const product = await this.productService.createProduct(createProductDTO);
        
        return res.status(HttpStatus.OK).json({
            message: "Success",
            data: product
        });
    }

}
