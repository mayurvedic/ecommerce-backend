
const mongoose=require('mongoose');
const {Schema} = mongoose;

const{ObjectId}=mongoose.Schema


const categorySchema=new Schema({
    name:
    {
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    }
    
},{timestamps:true});



const productSchema= new Schema({
    name:
    {
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        required:true,
        maxlength:200
    },
    price:{
        type:Number,
        trim:true,
        required:true,
        maxlength:32

    },

    category:{
        type:ObjectId,
        ref: 'Category',
        required:true
    },
    quantity:{
        type:Number
    },
    sold:{
        type:Number,
        default:0

    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        require:false,
        type:Boolean

    }
},{timestamps:true});

const Product = mongoose.model("Product",productSchema);
const Category = mongoose.model("Category", categorySchema);
module.exports={
    Category: Category,
    Product : Product
}