const express = require("express");
const router = express.Router();
const { getPrompt ,createUser,DELeteUser,Loginuser,CheckEmail,SendPrompt} =require("../Controller/ApiController")
const Validation = require("../middleware/validation")

router.route("/prompt/").post(Validation,getPrompt)

router.route("/sendPrompt/:id").get(Validation,SendPrompt);

router.route("/check").post(CheckEmail)

router.route("/create").post(createUser)

router.route('/login').post(Loginuser);

router.route("/delete/:id").delete(DELeteUser);

module.exports = router;