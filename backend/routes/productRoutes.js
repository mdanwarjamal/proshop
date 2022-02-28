import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const router = express.Router()

import Product from "../models/productModel.js";

router.get('/', expressAsyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', expressAsyncHandler( async(req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({ message: 'Product Id Not Valid'})
    }

    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404).json({ message: 'Product Not Found'})
    }
}))

export default router