const express = require('express');
const { UserController } = require('../controllers/UserController');

const { query, body } = require("express-validator");
const { validate } = require('../middlewares/validation');
const router = express.Router();

router.get("", UserController.getAll)
router.post(
  "",
  [body("email").notEmpty().withMessage("Email cannot be empty")],
  [body("password").notEmpty().withMessage("Password cannot be empty")],
  validate,
  UserController.postOne
);

router.get("/:id", UserController.getOne)
router.get("/:id", UserController.getOne);
module.exports =router
