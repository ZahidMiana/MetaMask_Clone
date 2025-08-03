const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const Accounexports.allToken = async (req, res, next) => {
    try {
        const tokens = await Token.find();

        res.status(200).json({
            status: "success",
            results: tokens.length,
            data: {
                tokens,
            },
        });
    } catch (error) {
        console.error("Get tokens error:", error);
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
}; ("../Model/accountModel");
const Token = require("../Model/tokenModel");


const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};


//createSend Token function to send the token in response
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);

    res.cookie("jwt", token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    // Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user,
        },
    });
};


exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            address: req.body.address,
            private_key: req.body.private_key,
            mnemonics: req.body.mnemonic,
        });

        createSendToken(newUser, 201, req, res);
    } catch (error) {
        console.error("Signup error:", error);
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};



exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // 1) Check if email and password exist
        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide email and password!",
            });
        }

        // 2) Check if user exists && password is correct
        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({
                status: "fail",
                message: "Incorrect email or password",
            });
        }

        // 3) If everything is ok, send token to client
        createSendToken(user, 200, req, res);
    } catch (error) {
        console.error("Login error:", error);
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};

exports.allToken = async (req, res, next) => {
    const tokens = await Token.find();

    res.status(200).json({
        status: "success",
        results: tokens.length,
        data: {
            tokens,
        },
    });
}


exports.addToken = async (req, res, next) => {
    const newToken = await Token.create({
        name: req.body.name,
        address: req.body.address,
        symbol: req.body.symbol,
    });

    res.status(201).json({
        status: "success",
        data: {
            token: newToken,
        },
    });
};



exports.allAccount = async (req, res, next) => {
    const accounts = await Account.find();

    res.status(200).json({
        status: "success",
        results: accounts.length,
        data: {
            accounts,
        },
    });
};



exports.createAccount = async (req, res, next) => {
    const newAccount = await Account.create({
        privateKey: req.body.private_key,
        address: req.body.address,
    });

    res.status(201).json({
        status: "success",
        data: {
            account: newAccount,
        },
    });
};




