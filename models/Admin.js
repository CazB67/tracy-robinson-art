const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
    image: {type: String},
    size: {type: String},
    price: {type: Number},
    medium: {type: String},
    sold: {type: Boolean}    
  },
  {timestamps: true}
);

  const Admin = mongoose.model("Admin", AdminSchema);
  
  module.exports = Admin;