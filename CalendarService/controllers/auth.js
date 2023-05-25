const { response } = require("express");
const bcrypt = require('bcryptjs');

const User = require("../models/User");
const { generateJwt } = require("../helpers/jwt");

const createUser = async(req, res = response) => {

    try {

        let user = await User.findOne({email: req.body.email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'DuplicatedEmail'
            });
        }

        user = new User(req.body);
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);

        await user.save();
        const token = await generateJwt(user._id, user.name);

        res.status(201).json({ ok: true, user, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact an administrator'
        });
    }
    
};

const loginUser = async(req, res = response) => {
    try {
        
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'InvalidUserOrPassword'
            });
        }

        const validPassword = bcrypt.compareSync(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'InvalidUserOrPassword'
            });
        }

        const token = await generateJwt(user._id, user.name);

        res.status(200).json({ ok: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact an administrator'
        });
    }
};

const revalidateToken = async(req, res = response) => {

    const token = await generateJwt(req.uid, req.name);

    res.json({ ok: true, token });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
};
