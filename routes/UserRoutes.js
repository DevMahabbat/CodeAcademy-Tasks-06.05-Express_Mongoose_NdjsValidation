const express = require('express');
U

const { query, body } = require("express-validator");
const { validate } = require('../middlewares/validation');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get("", UserController.getAll)
router.post(
  "",
  [body("email").notEmpty().withMessage("Email cannot be empty")],
  [body("password").notEmpty().withMessage("Password cannot be empty")],
  validate,
  UserController.postOne
);

router.get("api/users", UserController.getAll)
router.get("/api/user/:id", UserController.getOne);
router.post("/api/login", UserController.login)
router.delete("/api/user/:id", UserController.delete)
router.post("/api/createuser", UserController.add)
router.post("/api/updateuser/:id", UserController.update)

module.exports =router
