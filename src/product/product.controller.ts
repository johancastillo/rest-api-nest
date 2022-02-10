import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateProductDTO} from "./dto/product.dto";

@Controller('product')
export class ProductController {

    @Get()
    getProduct(){
        return "He";
    }

    @Post('/create')
    createProduct(@Res() res, @Body() createProductDTO:CreateProductDTO){
        console.log(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: "Success"
        });
    }

}
