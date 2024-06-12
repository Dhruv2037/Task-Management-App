const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

UserSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password,salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);