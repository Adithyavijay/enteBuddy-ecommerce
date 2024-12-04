import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subHeading : {
      type : String ,
      required : true
    } ,
    category: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    primaryImage: {
      name: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
    secondaryImages: [
      {
        name: {
          type: String,
          required: true,
        },
        path: {
          type: String,
          required: true,
        },
      },
    ],
    productFeatures:[{
      description:{
        type:String
      },
      icon:{
        type:String
      }
    }],
    serviceFeatures:[{
      description:{
        type:String
      },
      icon:{
        type:String
      }
    }],
    quantitySold: {
      type: Number,
      default: 0,
    },
    totalSaleAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("products", productSchema);

export default product;
