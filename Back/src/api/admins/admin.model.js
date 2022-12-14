const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    usuario: [{ type: Schema.Types.ObjectId, ref:"usuarios"}],
    cita: [{ type: Schema.Types.ObjectId, ref:"citas"}],
    
});

    schema.pre("save", function (next) {  
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model("admin", schema);