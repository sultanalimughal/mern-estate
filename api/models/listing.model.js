import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            require: true,
        },
        regularPrice:{
            type: Number,
            required: true,
        },
        discountedPrice:{
            type: Number,
            required: true,
        },
        bedrooms:{
            type: Number,
            required: true,
        },
        bathrooms:{
            type: Number,
            required: true,
        },
        furnished:{
            type: Boolean,
            required: true,
        },
        parking:{
            type: Boolean,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        offer:{
            type:Boolean,
            required: true,   
        },
        imageUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type:String,
            require:true,
        }
        }, {timestamps:true}
);


const Listing = mongoose.model("Listing", listingSchema);

export default Listing;