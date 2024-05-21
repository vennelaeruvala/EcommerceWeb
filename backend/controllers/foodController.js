import foodModel
 from "../models/foodModel.js";
 import fs from 'fs'

 //add food item
 const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({success :false,message:""})
    }
 }

 //list all food items
 const foodList = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});

    }catch(error){
        console.log(error);
        res.json({success:false,data:""});
    }
 }

 //remove food item
 const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        //to delete image
        fs.unlink(`uploads/${food.image}`,()=>{})
        //to delete data from db
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:'food removed'});
    } catch (error) {
        console.log(error);
        res.json({success:'false',message:"Error"});
    }
 }

 export {addFood,foodList,removeFood}

