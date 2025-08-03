const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minlength: 8,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            // This only works on CREATE and SAVE
            validator: function (el) {
                return el === this.password;
            },

            message: "Passwords are not the same!",
        },
    },

    address: String,
    private_key: String,
    mnemonics: String,
});


userSchema.pre("save", async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified("password")) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre("save", async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000; // to ensure that the password changed at least 1 second ago
});


userSchema.pre(/^find/, function (next) {

    this.find({ active: { $ne: false } }); // Exclude all inactive users
    next();
});


userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};


//change password after JWT issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};


const User = mongoose.model("User", userSchema);

module.exports = User;