import { v2 as cloudinary } from 'cloudinary';
import express from 'express';
import productModel from "../models/productModel.js";





// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        // Check if files are provided
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ success: false, message: 'No files were uploaded.' });
        }

        // Access uploaded files
        const image1 = req.files.image1?.[0] || req.files.image1;
        const image2 = req.files.image2?.[0] || req.files.image2;
        const image3 = req.files.image3?.[0] || req.files.image3;
        const image4 = req.files.image4?.[0] || req.files.image4;

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // Upload images to Cloudinary
        const imageUrls = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.tempFilePath || item.path, {
                    resource_type: 'image',
                });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            price: Number(price),
            image: imageUrls,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,            
            date:Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);

        await product.save();


        res.json({ success: true, message: 'Product added successfully!', imageUrls });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};



//  Function for list product

const listProduct = async (req, res) => { 

    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
         console.error(error);
        res.json({ success: false, message: error.message });
    }
}

// Function for remove product

const removeProduct = async (req, res) => { 

    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully"})
    } catch (error) {
         console.error(error);
        res.json({ success: false, message: error.message });
        
    }

}

// Function for single product

const singleProduct = async (req, res) => { 

    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true,product})
    } catch (error) {
             console.error(error);
        res.json({ success: false, message: error.message });
    }

}


export { addProduct, listProduct, removeProduct, singleProduct };